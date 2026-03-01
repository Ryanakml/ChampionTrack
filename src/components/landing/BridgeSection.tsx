import { useFadeIn } from "@/hooks/useFadeIn";
import { trackSectionView } from "@/lib/analytics";

const steps = [
  {
    num: "1",
    title: "Upload Your Contacts",
    desc: "Add your past customers, champions, and key contacts via CSV, or connect your HubSpot or Salesforce account directly. Takes 3 minutes. No engineering required.",
  },
  {
    num: "2",
    title: "We Monitor. You Sleep.",
    desc: "ChampionTrack checks your contacts continuously for job changes. The moment someone moves to a new company, we capture their new title, new employer, and verified contact info — and enrich it with firmographic data on their new company.",
  },
  {
    num: "3",
    title: "Act on the Right Leads at the Right Time",
    desc: "Every Monday, you get a digest: who moved, where they went, and a personalized outreach starter for each one. Reply to the email or send straight from your sequencer. Your pipeline just got warmer.",
  },
];

const BridgeSection = () => {
  const ref = useFadeIn(() => trackSectionView("bridge"));

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div
        ref={ref}
        className="fade-in-section max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-2">
          Champion<span className="text-primary">Track</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          The job change alert tool built for AEs, SDRs, and small sales teams —
          not enterprise RevOps departments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridgeSection;
