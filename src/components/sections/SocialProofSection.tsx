const SocialProofSection = () => {
  const pilots = [
    "Stanford University",
    "MIT Innovation Lab", 
    "Google Campus",
    "TechCrunch Disrupt",
    "Y Combinator",
    "Microsoft Research",
    "Apple Developer Conference",
    "Meta Reality Labs"
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pilot inquiries open
          </h2>
          <p className="text-muted-foreground">
            Join leading organizations testing Nova
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {pilots.map((pilot, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-muted-foreground font-medium">
                {pilot}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;