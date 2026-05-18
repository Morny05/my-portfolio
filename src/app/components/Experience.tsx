import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "DevOps Engineer Intern",
      company: "Lotus Capital Group",
      location: "Casablanca, Morocco",
      png: "LOTUS-CAPITAL-GESTION.png",
      date: "01/2026 - 03/2026",
      tasks: [
        "Conception et mise en place d’un pipeline CI/CD avec Jenkins pour automatiser le build et le déploiement.",
        "Conteneurisation d’une application full-stack (React + Spring Boot) avec Docker.",
        "Déploiement de l’application sur une machine virtuelle Google Cloud Platform.",
        "Intégration de GitHub avec Jenkins pour déclencher des déploiements automatiques.",
      ],
      skills: [
        "GCP",
        "Docker",
        "Jenkins",
        "Git",
        "CI/CD",
        "Linux",
        "Spring Boot",
      ],
    },

    {
      role: "DevOps Bootcamp",
      company: "Orange Digital Center",
      location: "Casablanca, Morocco",
      png: "Orange Bu.png",
      date: "Novenmbre 2024 - Janvier 2025",
      tasks: [
        "Mise en place de l’Infrastructure as Code avec Terraform.",
        "Déploiement et gestion de ressources AWS.",
        "Participation à la conception et à l’automatisation de pipelines CI/CD.",
      ],
      skills: [
        "AWS",
        "Terraform",
        "Kubernetes",
        "Python",
        "Linux",
        "Docker",
      ],
    },

    {
      role: "Developer technico-Fonctionnel Odoo",
      company: "Binteg",
      location: "Casablanca, Morocco",
      png: "Binteg.jpg",
      date: "Septemmbre 2024 - decembre 2024",
      tasks: [
        "Développement et personnalisation de modules Odoo en Python.",
        "Analyse des besoins métiers et traduction en solutions techniques.",
        "Intervention sur le module CRM.",
      ],
      skills: ["Odoo", "Python", "XML", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Experience
        </h2>

        <p className="text-center text-gray-500 mb-14 text-sm sm:text-base">
          A timeline of my professional experience across DevOps and Cloud.
        </p>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300 ml-3 sm:ml-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 ml-6 sm:ml-10 relative"
            >
              {/* Dot */}
              <span className="absolute -left-[31px] sm:-left-[49px] top-2 w-4 h-4 bg-black rounded-full"></span>

              {/* Card */}
              <div className="border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-7 hover:shadow-md transition bg-white">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0B132B]">
                      {exp.role}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-gray-600">
                    {exp.date}
                  </span>
                </div>

                {/* Location */}
                <p className="text-gray-500 mt-2 text-sm">
                  {exp.location}
                </p>

                {/* Image */}
                <img
                  src={exp.png}
                  alt={exp.company}
                  className="w-14 sm:w-16 h-auto object-contain mt-4"
                />

                {/* Tasks */}
                <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs sm:text-sm bg-gray-100 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}