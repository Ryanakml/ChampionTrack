import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useFadeIn();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="final-cta" className="py-20 sm:py-28 border-t border-border">
      <div ref={ref} className="fade-in-section max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
          The job your best customer just started?{" "}
          <span className="text-primary">It's your next deal.</span>
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Start tracking for free. No credit card. No engineering. No enterprise contract. Just the alerts you've been missing.
        </p>

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
          Track up to 50 contacts free. Join AEs and SDRs already turning job changes into pipeline.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
