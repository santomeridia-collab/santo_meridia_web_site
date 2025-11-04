import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2015", event: "Foundation of Santomeridia Research Labs" },
    { year: "2017", event: "Launch of ACADIENCE division" },
    { year: "2019", event: "CENTORA and AZYRA established" },
    { year: "2021", event: "CATALYSTA Research division inaugurated" },
    { year: "2023", event: "Expansion to 3 countries, 120+ clients" },
    { year: "2025", event: "10,000+ learners milestone achieved" },
  ];

  const values = [
    { icon: Target, title: "Mission", description: "Transform learning and research into global impact through innovative solutions" },
    { icon: Eye, title: "Vision", description: "Be India's most trusted R&D-driven innovation ecosystem" },
    { icon: Heart, title: "Values", description: "Curiosity, Impact, Collaboration, Integrity" },
    { icon: Award, title: "Excellence", description: "Committed to delivering world-class solutions" },
  ];

  const leadership = [
    { name: "Jinesh P", role: "Chief Executive Officer", description: "Visionary leader with 15+ years in research and innovation" },
    { name: "Dr. Sarah Kumar", role: "Head of ACADIENCE", description: "Expert in EdTech and future learning methodologies" },
    { name: "Raj Malhotra", role: "Head of CENTORA", description: "Passionate educator with focus on K-12 excellence" },
    { name: "Priya Nair", role: "Head of AZYRA", description: "Software architect specializing in scalable solutions" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Unified by Purpose. Driven by Research.
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Building the future through innovation, education, and meaningful impact since 2015
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className="flex gap-6 items-start group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 ring-4 ring-primary/20 group-hover:ring-8 transition-all"></div>
                    <div className="flex-1 pb-8 border-b border-border">
                      <p className="text-lg text-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Leadership Council</h2>
            <p className="text-center text-muted-foreground mb-12">
              Meet the visionaries behind our innovation ecosystem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="text-center p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSR */}
        <section id="csr" className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">CSR & Ethics</h2>
              <p className="text-lg text-muted-foreground">
                We believe innovation must serve society. Our CSR initiatives focus on education access, 
                environmental sustainability, and community empowerment. Through scholarships, free training 
                programs, and sustainable practices, we're committed to creating positive change.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
