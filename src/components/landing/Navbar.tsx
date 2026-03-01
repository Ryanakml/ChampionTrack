import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={scrollToTop} className="text-xl font-bold text-foreground tracking-tight">
          Champion<span className="text-primary">Track</span>
        </button>
        <Button size="sm" onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}>
          Get Early Access
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
