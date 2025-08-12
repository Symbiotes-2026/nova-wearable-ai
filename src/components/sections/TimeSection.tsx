import { Clock, MessageSquare, Video, FileText, Globe } from 'lucide-react';

const TimeSection = () => {
  const timeSavers = [
    {
      icon: MessageSquare,
      title: "ETA texts & location shares",
      time: "30–60s saved each",
      color: "text-green-400"
    },
    {
      icon: Video,
      title: "Start meeting (mute + note + link)",
      time: "2–3 min saved",
      color: "text-blue-400"
    },
    {
      icon: FileText,
      title: "Notes & reminders",
      time: "20–40s saved",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Offline translate",
      time: "30–60s saved",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Time you get back,{' '}
            <span className="text-gradient">every day</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {timeSavers.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 leading-tight">
                {item.title}
              </h3>
              
              <div className={`text-2xl font-bold ${item.color} mb-2`}>
                {item.time}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-muted-foreground">
            Save up to <span className="text-gradient font-bold">15 minutes daily</span> on routine tasks
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;