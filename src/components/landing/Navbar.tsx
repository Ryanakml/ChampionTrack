import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    void trackEvent({
      eventType: "cta_click",
      eventName: "navbar_logo_click",
      section: "navbar",
      buttonText: "ChampionTrack",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="text-xl font-bold text-foreground tracking-tight"
        >
          Champion<span className="text-primary">Track</span>
        </button>
        <Button
          size="sm"
          onClick={() => {
            document
              .getElementById("final-cta")
              ?.scrollIntoView({ behavior: "smooth" });
            void trackEvent({
              eventType: "cta_click",
              eventName: "navbar_cta_click",
              section: "navbar",
              buttonText: "Get Early Access",
            });
          }}
        >
          Get Early Access
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
