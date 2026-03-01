import { useFadeIn } from "@/hooks/useFadeIn";
import { trackSectionView } from "@/lib/analytics";

const FounderSection = () => {
  const ref = useFadeIn(() => trackSectionView("founder"));

  return (
    <section className="py-20 sm:py-28">
      <div ref={ref} className="fade-in-section max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-card border border-border rounded-lg p-8 sm:p-10">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg mb-6 mx-auto">
            CT
          </div>
          <blockquote className="text-muted-foreground leading-relaxed text-center space-y-4">
            <p>
              "I spent 3 years in B2B sales watching warm opportunities go cold
              because no one had time to track where champions went. The tools
              that solved it cost $16k/year. I needed it at $30/month. So I
              built ChampionTrack.
            </p>
            <p>
              This isn't another intent platform with black-box scores and vague
              'high-intent' labels. It's a simple alert: your people moved,
              here's where they are, here's what to say. That's it.
            </p>
            <p>
              If you've ever felt the gut-punch of finding out a past customer
              just signed with your competitor — at their new company, through a
              champion you could have reached — ChampionTrack is for you."
            </p>
          </blockquote>
          <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
            — Founder, ChampionTrack
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
