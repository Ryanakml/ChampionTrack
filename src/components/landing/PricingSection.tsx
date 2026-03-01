import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    popular: false,
    features: [
      "Track up to 50 contacts",
      "Weekly email digest",
      "New employer enrichment",
      "1 outreach template per alert",
    ],
    cta: "Start Free",
    variant: "outline" as const,
  },
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    popular: true,
    features: [
      "Track up to 500 contacts",
      "Weekly email + Slack digest",
      "Full firmographic enrichment",
      "AI-written personalized outreach starters",
      "HubSpot integration",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    popular: false,
    features: [
      "Track up to 2,500 contacts",
      "Daily alerts for high-priority contacts",
      "Salesforce + HubSpot integration",
      "CRM auto-logging",
      "Priority support",
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
  },
];

const PricingSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-4">
          Simple Pricing. No Enterprise Contracts. No Surprises.
        </h2>
        <p className="text-muted-foreground text-center mb-14">All plans include a 14-day free trial. No credit card required to start.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 flex flex-col ${
                plan.popular
                  ? "border-primary bg-card ring-2 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-2 mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.variant} className="w-full font-semibold">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
