import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Let's Build the Future, Together
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to answer your questions and explore collaboration opportunities
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Division of Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="acadience">ACADIENCE</SelectItem>
                      <SelectItem value="centora">CENTORA</SelectItem>
                      <SelectItem value="azyra">AZYRA</SelectItem>
                      <SelectItem value="catalysta">CATALYSTA</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Your Message" rows={6} />
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you're looking to partner, invest, or simply learn more about 
                    Santomeridia, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a 
                        href="mailto:info@santomeridia.com" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        info@santomeridia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a 
                        href="tel:+911234567890" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Headquarters</div>
                      <p className="text-muted-foreground">
                        Santomeridia Research Labs Pvt. Ltd.<br />
                        Technopark, Trivandrum<br />
                        Kerala, India - 695581
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Inquiries */}
                {/* <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                  <h3 className="text-xl font-bold mb-4">Business Inquiries</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Media:</span> media@santomeridia.com
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Research:</span> research@santomeridia.com
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Partnerships:</span> partnerships@santomeridia.com
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Investor Relations:</span> investors@santomeridia.com
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
   <section className="py-20 gradient-subtle">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.114248687514!2d76.3424687!3d10.008797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0ed9f41e77%3A0x6aef6f9e1a9e0a2b!2s10%C2%B000'31.7%22N%2076%C2%B020'32.9%22E!5e0!3m2!1sen!2sin!4v1730436500000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
