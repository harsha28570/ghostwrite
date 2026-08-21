import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-2.5 transition-all ${className}`}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <Ghost className="w-4 h-4 text-white" strokeWidth={2} />
      </div>
      <span className="text-[15px] font-semibold text-[#F5F1E8] tracking-tight">
        GhostWrite
      </span>
    </Link>
  );
}
