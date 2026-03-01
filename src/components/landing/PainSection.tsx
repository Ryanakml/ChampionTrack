import { RefreshCw, DollarSign, Frown } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const painCards = [
  {
    icon: RefreshCw,
    title: "Over a few hundred contacts, nobody wants to own that process",
    body: "You've got 300+ past customers and champions in your CRM. Checking LinkedIn for each of them every week? It falls apart instantly. Someone always falls through the cracks — usually the one who was your biggest advocate.",
  },
  {
    icon: DollarSign,
    title: "Enterprise tools start at $16k/year. For a small team, that's insane.",
    body: "UserGems. Champify. Common Room. Great products — if you have a RevOps team and an enterprise budget. You need the same signal without the six-figure contract. That tool doesn't exist yet.",
  },
  {
    icon: Frown,
    title: "Sales Nav kind of does this… but the data stays locked inside it",
    body: "You can set up job change filters in Sales Navigator, but it's manual, your data is siloed, and the moment you stop refreshing your lists, the window closes. You need it to happen automatically — not as someone's side project.",
  },
];

const PainSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 text-center">Sound Familiar?</p>
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-14 max-w-3xl mx-auto">
          You're tracking job changes manually. And it's killing your pipeline.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-border bg-card p-6">
              <card.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground italic leading-relaxed">
            Here's the truth: you're not missing these opportunities because you're lazy or disorganized.
            <br /><br />
            You're missing them because <span className="text-foreground font-medium">no tool was built for you.</span> The tools that solve this start at $16,000/year and require a dedicated GTM engineer to configure. The workarounds everyone recommends — Sales Nav, manual spreadsheets, Clay — all require someone to own the process full-time. You don't have that person. So warm leads go cold while your old champions build new companies with your competitors' products.
            <br /><br />
            <span className="text-primary font-semibold not-italic">That ends now.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
