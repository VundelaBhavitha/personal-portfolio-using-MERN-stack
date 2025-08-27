import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/mee.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-hero-bg pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, Wecome to  my {''}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                     Portfolio!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Iam a Computer Science undergraduate at{" "}
                <span className="text-primary font-semibold">
                  IIIT Tiruchirappalli (Batch 2026)
                </span>{" "}
                with a passion for full-stack web development and problem
                solving. Skilled in React, Node.js, Express.js, MongoDB, and
                Data Structures & Algorithms.
              </p>
            </div>

          <div className="flex flex-col sm:flex-row gap-4">
  <Button
  variant="hero"
  size="lg"
  onClick={() => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <Mail className="mr-2 h-5 w-5" />
  Hire me
</Button>

  <Button
    variant="outline-hero"
    size="lg"
    asChild
              >
                <a
                  href="https://drive.google.com/file/d/15HD4wdsbtQ5SoHJ7iS9NlMcqnytx7T8E/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  My Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative flex justify-center">
            <div className="relative z-10">
              {/* Replace `your-photo.jpg` with your image later */}
             <img
  src={profileImage}
  alt="Vundela Bhavitha"
  className="w-96 h-97 mx-auto rounded-full shadow-2xl object-cover border-4 border-white/30"
/>

 

            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-glow"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/30 rounded-full blur-md animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
