import React from 'react'

export default function Experience() {
  const experiences = [
    {
      role: "DevOps Engineer Intern",
      company: "Lotus Capital Group",
      location: "Casablanca, Morocco",
      png: "LOTUS-CAPITAL-GESTION.png",
      date: "01/2026 - 03/2026",
      tasks: [
        "Conception et mise en place d’un pipeline CI/CD avec Jenkins pour automatiser le build et ldéploiement.",
        "Conteneurisation d’une application full-stack (React + Spring Boot) avec Docker.",
        "Déploiement de l’application sur une machine virtuelle Google Cloud Platform (Compute Engine).",
        "Intégration de GitHub avec Jenkins pour déclencher des déploiements automatiques à chaque push.",
        "Amélioration de l’efficacité des déploiements et réduction des interventions manuelles.",
        "Gestion de l’environnement via Linux et Docker.",
      ],
      skills: ["GCP", "Docker", "DockerCompose", "Jenkins", "Git", "CI/CD", "Linux", "Angular", "Spring Boot", "PostgreSQL"],
    },
    {
      role: "DevOps Bootcamp",
      company: "Orange Digital Center",
      location: "Casablanca, Morocco",
      png: "Orange Bu.png",
      date: "2025 - Present",
      tasks: [
        "Mise en place de l’Infrastructure as Code avec Terraform.",
        "Déploiement et gestion de ressources AWS (EC2, S3, IAM, VPC).",
        "Participation à la conception et àl’automatisation de pipelines CI/CD.",
        "Utilisation de bonnes pratiques DevOps et collaboration en équipe projet.",
        "Contribution à la documentation technique et au suivi des configurations.",
        "Introduction au monitoringetà la sécurisation des environnements cloud.",
      ],
      skills: ["AWS", "Terraform", "Kubernetes", "Python", "Linux", "git", "CI/CD", "Docker"],
    },
    {
      role: "Developer technico-Fonctionnel Odoo",
      company: "Binteg",
      location: "Casablanca, Morocco",
      png: "Binteg.jpg",
      date: "2025 - Present",
      tasks: [
        "Développement et personnalisation de modules Odoo en Python.",
        "Analyse des besoins métiers et traduction en solutions techniques.",
        "Intervention sur le module CRM pour la gestion des relations clients.",
        "Implémentation et adaptation de fonctionnalités selon les besoins clients.",
        "Collaboration avec l’équipe pour livrer des solutions fonctionnelles et fiables.",
        "Contribution aux testsetà la validation des fonctionnalités développées.",
      ],
      skills: ["Odoo", "Python", "XML", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-gray-500 mb-16">
          A timeline of my professional experience across DevOps and Cloud.
        </p>

        <div className="relative border-l-2 border-gray-300 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-10 relative">
              {/* dot */}
              <span className="absolute -left-[49px] top-2 w-4 h-4 bg-black rounded-full"></span>

              {/* card */}
              <div className="border rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-semibold">
                    {exp.role}{" "}
                    <span className="text-gray-500 font-normal text-xl">
                      • {exp.company}
                    </span>
                  </h3>
                  <span className="text-sm font-medium text-gray-700">
                    {exp.date}
                  </span>
                </div>

                <p className="text-gray-500 mt-1">{exp.location}</p>
                <img src={exp.png} alt={exp.company} className="w-16 h-16 object-contain mt-4" style={{height:70, width: 'auto'}}/>

                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3  py-1 text-sm bg-gray-100 rounded-full"
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