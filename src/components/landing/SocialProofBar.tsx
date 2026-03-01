import { Star } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { trackSectionView } from "@/lib/analytics";

const initials = ["SC", "JB", "MR", "AK"];

const SocialProofBar = () => {
  const ref = useFadeIn(() => trackSectionView("social_proof"));

  return (
    <section
      ref={ref}
      className="fade-in-section py-8 bg-surface border-y border-border"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <p className="text-sm text-muted-foreground text-center">
          Trusted by AEs, SDRs, and founders who are done missing warm leads.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {initials.map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            5/5 from early users
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
