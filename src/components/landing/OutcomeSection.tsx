import { Target, Zap, Mail } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { trackSectionView } from "@/lib/analytics";

const outcomeCards = [
  {
    icon: Target,
    title: "A champion just joined your dream account",
    body: 'You get a Slack message: "Sarah Chen, who closed a $40k deal with you at Acme, just joined Stripe as VP of Revenue Operations." You send a warm, personalized note in 60 seconds. She replies in an hour. This is the meeting your entire quarter was missing.',
  },
  {
    icon: Zap,
    title: "You reach out first — before anyone else knows",
    body: "Most job changes take 2 weeks to show up in any tool. ChampionTrack alerts you in days, not weeks. You're not competing for a warm lead — you're the first call they take, because you were the first person who reached out and remembered them.",
  },
  {
    icon: Mail,
    title: "The outreach is already written for you",
    body: "No staring at a blank screen. ChampionTrack gives you a ready-to-send message personalized to their new role, their new company, and your past relationship. You edit, you send, you book the call.",
  },
];

const OutcomeSection = () => {
  const ref = useFadeIn(() => trackSectionView("outcome"));

  return (
    <section className="py-20 sm:py-28">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 text-center">
          Imagine This Instead
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-14 max-w-3xl mx-auto">
          Every Monday morning, you know exactly who changed jobs — and what to
          say.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {outcomeCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-primary/20 bg-card p-6 ring-1 ring-primary/10"
            >
              <card.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-bold text-foreground mb-4">
            There's a better way — and it doesn't require a RevOps team, a
            six-figure budget, or a Clay expert.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            ChampionTrack monitors your contacts in the background,
            automatically. No dashboards to check. No lists to refresh. Just a
            weekly digest of who moved, where they landed, and exactly what to
            say to them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
