import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Outfit Suggester",
      description: "Built a mobile-first React + TypeScript application with Tailwind CSS and Supabase backend, providing personalized outfit recommendations based on weight, height and shape preferences. Implemented responsive UI and optimized API calls for fast performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com/VundelaBhavitha/outfit_suggester_frontend",
      demo: "#"
    },
    {
      title: "Blog Application",
      description: "Developed a full-featured MERN stack platform with secure JWT authentication, enabling complete CRUD operations for posts. Designed a responsive UI with category-based filtering and implemented user profile management for personalized experiences.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/VundelaBhavitha/Blogapplication",
      demo: "#"
    },
    {
      title: "Task Management Application",
      description: "Created a responsive task tracking platform using React and Tailwind CSS, supporting task creation, editing, and deletion with real-time updates. Integrated Node.js and MongoDB backend for secure data storage and efficient API performance.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/VundelaBhavitha/Task-Management",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-text bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-card-glow transition-all duration-300 border-border bg-card">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                   
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;