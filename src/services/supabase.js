import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// ============ GENERATIONS ============

// Save a new generation
export const saveGeneration = async (userId, userEmail, data) => {
  try {
    const { data: result, error } = await supabase
      .from("generations")
      .insert({
        user_id: userId,
        user_email: userEmail,
        original_content: data.content,
        content_type: data.contentType || "Blog Post",
        brand_voice: data.brandVoice || "professional",
        generated_outputs: data.outputs,
        platforms: data.platforms || [],
        word_count: data.content?.split(/\s+/).filter(Boolean).length || 0,
        status: "completed",
      })
      .select()
      .single();

    if (error) throw error;
    return result;
  } catch (error) {
    console.error("Error saving generation:", error);
    return null;
  }
};

// Get user's generations (history)
export const getUserGenerations = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("generations")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching generations:", error);
    return [];
  }
};

// Get single generation
export const getGeneration = async (id) => {
  try {
    const { data, error } = await supabase
      .from("generations")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching generation:", error);
    return null;
  }
};

// Delete a generation
export const deleteGeneration = async (id) => {
  try {
    const { error } = await supabase.from("generations").delete().eq("id", id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error deleting generation:", error);
    return false;
  }
};

// ============ USAGE TRACKING ============

// Get or create user usage
export const getUserUsage = async (userId, userEmail) => {
  try {
    // Try to get existing usage
    let { data, error } = await supabase
      .from("usage")
      .select("*")
      .eq("user_id", userId)
      .single();

    // If not found, create new
    if (error || !data) {
      const { data: newUsage, error: insertError } = await supabase
        .from("usage")
        .insert({
          user_id: userId,
          user_email: userEmail,
          plan: "free",
          generations_this_month: 0,
          total_generations: 0,
        })
        .select()
        .single();

      if (insertError) throw insertError;
      return newUsage;
    }

    // Check if month needs reset
    const resetDate = new Date(data.month_reset_at);
    const now = new Date();
    if (
      now.getMonth() !== resetDate.getMonth() ||
      now.getFullYear() !== resetDate.getFullYear()
    ) {
      // New month - reset counter
      const { data: updated, error: updateError } = await supabase
        .from("usage")
        .update({
          generations_this_month: 0,
          month_reset_at: now.toISOString(),
        })
        .eq("user_id", userId)
        .select()
        .single();

      if (updateError) throw updateError;
      return updated;
    }

    return data;
  } catch (error) {
    console.error("Error getting usage:", error);
    return null;
  }
};

// Increment usage after generation
export const incrementUsage = async (userId) => {
  try {
    // Get current usage first
    const { data: current } = await supabase
      .from("usage")
      .select("generations_this_month, total_generations")
      .eq("user_id", userId)
      .single();

    if (!current) return null;

    const { data, error } = await supabase
      .from("usage")
      .update({
        generations_this_month: current.generations_this_month + 1,
        total_generations: current.total_generations + 1,
        last_generation_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error incrementing usage:", error);
    return null;
  }
};

// Check if user can generate (within limits)
export const canUserGenerate = async (userId) => {
  try {
    const usage = await getUserUsage(userId);
    if (!usage) return { allowed: true, remaining: 3 };

    const limits = {
      free: 3,
      pro: 50,
      business: 999999,
    };

    const limit = limits[usage.plan] || 3;
    const remaining = limit - usage.generations_this_month;

    return {
      allowed: remaining > 0,
      remaining: Math.max(0, remaining),
      used: usage.generations_this_month,
      limit: limit,
      plan: usage.plan,
    };
  } catch (error) {
    console.error("Error checking limits:", error);
    return { allowed: true, remaining: 3 };
  }
};
// Upgrade user plan
export const upgradeUserPlan = async (userId, plan, paymentId) => {
  try {
    const { data, error } = await supabase
      .from("usage")
      .update({
        plan: plan,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error upgrading plan:", error);
    return null;
  }
};

// Get user's current plan
export const getUserPlan = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("usage")
      .select("plan, generations_this_month, total_generations")
      .eq("user_id", userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error getting plan:", error);
    return { plan: "free", generations_this_month: 0, total_generations: 0 };
  }
};

// ============ ADMIN PANEL FUNCTIONS ============

// 1. Get all users usage data for Admin
export const getAllUsersUsageAdmin = async () => {
  try {
    const { data, error } = await supabase
      .from("usage")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching admin users:", error);
    return [];
  }
};

// 2. Get all generations across all users for Admin
export const getAllGenerationsAdmin = async () => {
  try {
    const { data, error } = await supabase
      .from("generations")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching admin generations:", error);
    return [];
  }
};

// 3. Admin manually updates any user's plan
export const updateUserPlanAdmin = async (userId, newPlan) => {
  try {
    const { data, error } = await supabase
      .from("usage")
      .update({ plan: newPlan, updated_at: new Date().toISOString() })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating user plan:", error);
    return null;
  }
};

export default supabase;
