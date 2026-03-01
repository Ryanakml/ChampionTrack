import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Rocket } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { trackEvent, trackSectionView } from "@/lib/analytics";

const bullets = [
  "Get alerts the moment a champion changes jobs",
  "See role, company, and timing in one view",
  "Reach out first with a warm intro",
];

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useFadeIn(() => trackSectionView("hero"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      void trackEvent({
        eventType: "email_submit",
        eventName: "hero_email_submit",
        section: "hero",
        email,
      });
    }
  };

  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-widest text-primary/80 uppercase">
              Automated Job Change Alerts for B2B Sales Teams
            </div>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-2xl mx-auto lg:mx-0">
              Your best customers just started new jobs.{" "}
              <span className="text-primary">Know where they went.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We monitor your champions, alert you the moment they change roles,
              and hand you the context to reach out before anyone else.
            </p>

            <div className="mt-8 lg:hidden">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.45)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      3 Champions Changed Jobs This Week
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Weekly alert • Monday 8:05 AM
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/20 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    New
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-3 py-2">
                    <div>
                      <p className="text-sm text-foreground">Jenna Park</p>
                      <p className="text-xs text-muted-foreground">
                        VP Ops → Horizon Data
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary">
                      New role
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-3 py-2">
                    <div>
                      <p className="text-sm text-foreground">Marco Ruiz</p>
                      <p className="text-xs text-muted-foreground">
                        Head of RevOps → Northwind
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary">
                      Warm intro
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-3 py-2">
                    <div>
                      <p className="text-sm text-foreground">Taylor Singh</p>
                      <p className="text-xs text-muted-foreground">
                        Director Sales → AtlasIQ
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-primary">
                      Follow up
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-8 text-left max-w-lg mx-auto lg:mx-0 space-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              {submitted ? (
                <div className="rounded-lg bg-primary/10 border border-primary/30 p-6 max-w-md mx-auto lg:mx-0">
                  <p className="text-primary font-semibold text-lg">
                    You're on the list! 🎉
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
                >
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onInvalid={() =>
                      void trackEvent({
                        eventType: "form_error",
                        eventName: "hero_email_invalid",
                        section: "hero",
                        metadata: { field: "email" },
                      })
                    }
                    required
                    className="flex-1 bg-card border-border h-12"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    onClick={() =>
                      void trackEvent({
                        eventType: "cta_click",
                        eventName: "hero_cta_click",
                        section: "hero",
                        buttonText: "Start Tracking My Champions",
                      })
                    }
                    className="h-12 px-6 font-semibold gap-2 shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                  >
                    <Rocket className="w-4 h-4" />
                    Start Tracking My Champions
                  </Button>
                </form>
              )}
              <p className="text-sm text-muted-foreground mt-4">
                Track up to 50 contacts free. No contracts. Cancel anytime.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-[0_22px_70px_rgba(2,6,23,0.5)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-foreground">
                    3 Champions Changed Jobs This Week
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Weekly alert • Monday 8:05 AM
                  </p>
                </div>
                <span className="rounded-full bg-primary/20 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  New
                </span>
              </div>
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-sm text-foreground">Jenna Park</p>
                    <p className="text-xs text-muted-foreground">
                      VP Ops → Horizon Data
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    New role
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-sm text-foreground">Marco Ruiz</p>
                    <p className="text-xs text-muted-foreground">
                      Head of RevOps → Northwind
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    Warm intro
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-sm text-foreground">Taylor Singh</p>
                    <p className="text-xs text-muted-foreground">
                      Director Sales → AtlasIQ
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    Follow up
                  </span>
                </div>
              </div>
              <div className="mt-5 rounded-lg border border-primary/20 bg-primary/10 px-4 py-3">
                <p className="text-xs text-muted-foreground">
                  Next best action
                </p>
                <p className="text-sm text-foreground">
                  Send intro to Jenna Park at Horizon Data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
