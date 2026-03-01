import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Rocket } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const bullets = [
  "Upload your contact list and get your first alerts in minutes",
  "Know instantly when a champion lands at a new company that fits your ICP",
  "Get a pre-written outreach starter — personalized to their new role",
  "Works with HubSpot, Salesforce, or just a CSV — no RevOps required",
];

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useFadeIn();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6">
      <div ref={ref} className="fade-in-section max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Your best customers just started new jobs.{" "}
          <span className="text-primary">Do you know where they went?</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          ChampionTrack alerts you the moment a past customer or champion changes jobs — so you can reach out before your competitors do. Built for AEs, SDRs, and small sales teams who can't afford to miss a warm lead.
        </p>

        <ul className="text-left max-w-lg mx-auto space-y-3 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-muted-foreground">
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {submitted ? (
          <div className="rounded-lg bg-primary/10 border border-primary/30 p-6 max-w-md mx-auto">
            <p className="text-primary font-semibold text-lg">You're on the list! 🎉</p>
            <p className="text-muted-foreground text-sm mt-1">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-card border-border h-12"
            />
            <Button type="submit" size="lg" className="h-12 px-6 font-semibold gap-2">
              <Rocket className="w-4 h-4" />
              Start Tracking Free
            </Button>
          </form>
        )}

        <p className="text-sm text-muted-foreground mt-4">
          Track up to 50 contacts free. No contracts. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
