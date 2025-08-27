import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IIIT Tiruchirappalli",
      year: "2026",
      score: "CGPA: 8.02",
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Bhashyam Junior College",
      year: "2022",
      score: "Percentage: 95.8%",
    },
    {
      degree: "SSC (Class X)",
      institution: "Sri Chaitanya Junior School",
      year: "2020",
      score: "CGPA: 99.6%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-text bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic milestones that shaped my journey as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <Card
              key={index}
              className="p-6 border-border bg-card hover:shadow-card-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <GraduationCap className="h-6 w-6" />
                <h3 className="font-semibold">{item.degree}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.institution}</p>
              <p className="text-muted-foreground text-sm">{item.year}</p>
              <p className="mt-2 font-medium">{item.score}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
