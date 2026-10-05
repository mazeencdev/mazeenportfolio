import { GraduationCap, Cpu } from "lucide-react";

const skills = [
  "Next.js",
  "PostgreSQL",
  "Authentication",
  "C++",
  "Python",
  "Java",
  "Data Structures",
  "Algorithms",
  "Frontend and Backend",
  "Framer",
  "Figma",
  "Tailwind",
  "TypeScript",
];

const education = [
  {
    degree: "Bachelors of Computer Science",
    institution: "Manhattan University",
    period: "AUG 2024 - MAY 2028",
  },
  {
    degree: "High School Diploma",
    institution: "Dewitt Clinton High School",
    period: "SEPT 2021 - JUNE 2024",
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/20">
            <Cpu size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Technical Skills</h1>
            <p className="text-sm text-slate-400">
              Frameworks, languages, and technical competencies
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-cardBg border border-borderDark text-slate-200 px-4 py-2 rounded-xl text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/20">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Education</h1>
            <p className="text-sm text-slate-400">
              Academic background and qualifications
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-cardBg border border-borderDark p-6 rounded-2xl"
            >
              <span className="text-xs font-semibold text-accentBlue">
                {edu.period}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {edu.degree}
              </h3>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
