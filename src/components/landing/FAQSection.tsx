import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFadeIn } from "@/hooks/useFadeIn";
import { trackEvent, trackSectionView } from "@/lib/analytics";

const faqs = [
  {
    q: "Where does the job change data come from? Is it reliable?",
    a: "ChampionTrack uses a multi-source professional data graph — not just LinkedIn — to detect job changes faster and more accurately than tools that rely on a single source. Most changes are detected within days of a move, not the 10–14 day lag you get with LinkedIn-dependent tools.",
  },
  {
    q: "Do I need a CRM to use this?",
    a: "No. You can upload a simple CSV of contacts and be up and running in under 5 minutes. HubSpot and Salesforce integrations are available on paid plans for teams that want automatic sync.",
  },
  {
    q: "How is this different from LinkedIn Sales Navigator?",
    a: "Sales Navigator can technically filter for job changes, but your data stays locked inside LinkedIn's ecosystem, the setup is entirely manual, and there's no automated alerting or enrichment. ChampionTrack monitors your contacts automatically, enriches each alert with new company data, and delivers ready-to-use outreach — no manual refreshing required.",
  },
  {
    q: "What about UserGems or Champify?",
    a: "Great tools — if you have a RevOps team and a $16,000+ annual budget. ChampionTrack is built for individual AEs and small teams who need the same signal without the enterprise contract or setup complexity.",
  },
  {
    q: "How does the outreach template feature work?",
    a: "Each job change alert includes a pre-written outreach email referencing the contact's new role, new company, and your previous relationship. You can edit before sending, or copy directly into your sequence tool. Think of it as a first draft that's already 80% of the way there.",
  },
  {
    q: "Is my contact data safe?",
    a: "Yes. Your uploaded contact data is never shared or sold. It is used solely to monitor for job changes on your behalf. Full details in our Privacy Policy.",
  },
];

const FAQSection = () => {
  const ref = useFadeIn(() => trackSectionView("faq"));
  const faqLookup = new Map(faqs.map((faq, i) => [`faq-${i}`, faq]));

  return (
    <section className="py-20 sm:py-28">
      <div ref={ref} className="fade-in-section max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-center mb-14">
          Questions We Get Asked A Lot
        </h2>
        <Accordion
          type="single"
          collapsible
          className="space-y-3"
          onValueChange={(value) => {
            if (!value) return;
            const match = faqLookup.get(value);
            void trackEvent({
              eventType: "faq_click",
              eventName: "faq_open",
              section: "faq",
              metadata: { value, question: match?.q },
            });
          }}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg bg-card px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
