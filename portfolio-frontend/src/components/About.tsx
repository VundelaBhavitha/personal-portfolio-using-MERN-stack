import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Globe, Layout } from "lucide-react";

const About = () => {
  const skills = [
    "C++", "C", "Python", "JavaScript", "React.js", "Node.js", "Express.js",
    "MongoDB", "HTML", "CSS", "Tailwind CSS", "API Development",
    "Responsive UI Design", "Data Structures & Algorithms"
  ];

  const expertise = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Building scalable and responsive web applications using MERN stack"
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating dynamic, responsive, and user-friendly interfaces with React.js & Tailwind CSS"
    },
    
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures & Algorithms and competitive coding"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-text bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m Vundela Bhavitha, a Computer Science undergraduate at IIIT Tiruchirappalli (Batch 2026),
            passionate about web development, problem-solving, and building scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science & Engineering at IIIT Trichy with a CGPA of 8.02,
              I have honed my skills in full-stack web development and problem solving.
              My projects range from personalized outfit recommendation apps to task management platforms and
              secure blog applications built on the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am always eager to learn emerging technologies, contribute to open-source, and collaborate on impactful projects. 
              Beyond coding, I enjoy contributing to creative initiatives as a member of the Aesthetics Club.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:shadow-card-glow transition-all duration-300">
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
