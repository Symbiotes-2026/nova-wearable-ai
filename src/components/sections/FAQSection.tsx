import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Works without internet?",
      answer: "Yes for core commands. Nova can handle essential functions like reminders, quick notes, and basic voice commands completely offline. Rich actions that require internet (like sending messages or complex queries) use your phone's connection."
    },
    {
      question: "How fast?", 
      answer: "≤2 seconds for common actions. Most core intents are processed on-device instantly, with confirmation happening in under 2 seconds from activation."
    },
    {
      question: "Does it record?",
      answer: "No—privacy-first; mic kill-switch. Nova only processes audio when explicitly activated and includes a hardware mic kill-switch for complete privacy control."
    },
    {
      question: "Battery?",
      answer: "2–4 days typical. Battery life depends on usage patterns, with standby time extending up to a week for light usage."
    },
    {
      question: "iOS & Android?",
      answer: "Yes. Nova works with both iOS and Android devices through platform-specific integrations (iOS Shortcuts and Android Intents)."
    },
    {
      question: "Safety?",
      answer: "Triple-tap SOS + Mesh Relay included. Emergency features work even without cellular coverage by relaying through nearby Nova devices."
    }
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-0 rounded-xl"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;