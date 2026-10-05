import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AUREXIA - Home Search",
    description:
      "AUREXIA is a web application that can be used to find your next beloved home.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
  },
  {
    title: "Momentum - Habit Tracker",
    description:
      "Habits are a step to personal growth, Momentum is a web application built to help build habits step by step.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/20">
          <FolderGit2 size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Featured Projects</h1>
          <p className="text-sm text-slate-400">
            Applications and platforms I have built
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-cardBg border border-borderDark p-6 rounded-2xl flex flex-col justify-between hover:border-accentBlue/50 transition-all"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-slate-500 hover:text-accentBlue cursor-pointer"
                />
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className="text-xs bg-darkBg text-slate-300 px-3 py-1 rounded-full border border-borderDark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
