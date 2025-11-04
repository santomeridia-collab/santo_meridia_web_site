import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Brain, Rocket, Trophy } from "lucide-react";

const Acadience = () => {
  const courses = [
    { title: "AI & Machine Learning", level: "Advanced", duration: "6 months" },
    { title: "Full Stack Development", level: "Intermediate", duration: "4 months" },
    { title: "Cybersecurity Fundamentals", level: "Beginner", duration: "3 months" },
    { title: "Data Science & Analytics", level: "Intermediate", duration: "5 months" },
    { title: "Cloud Computing", level: "Advanced", duration: "4 months" },
    { title: "UI/UX Design", level: "Beginner", duration: "3 months" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm mb-6">
              <GraduationCap className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              ACADIENCE
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-4">
              Empowering Future Technologists
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Professional training programs in cutting-edge technologies designed to upskill 
              and reskill the workforce of tomorrow
            </p>
            <Button variant="hero" size="lg">
              Browse Courses
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Industry-Ready Skills</h3>
                <p className="text-muted-foreground">
                  Curriculum designed with input from leading tech companies
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Support</h3>
                <p className="text-muted-foreground">
                  Placement assistance and mentorship programs
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recognized Certifications</h3>
                <p className="text-muted-foreground">
                  Industry-recognized certificates upon completion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                >
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <div className="flex gap-3 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {course.level}
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our alumni are thriving at top companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Alumni</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Partner Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-muted-foreground">Student Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Acadience;
