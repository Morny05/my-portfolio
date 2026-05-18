import React from 'react'

const projects = [
  {
    title: "Application de Gestion des Formations Continues",
    description:
      "Conception et développement d’un dashboard web dédié à la gestion des formations continues avec opérations CRUD complètes. Développement du backend avec Laravel en respectant l’architecture MVC, création des interfaces utilisateur avec HTML/CSS et gestion des données via formulaires et contrôleurs Laravel.",
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "MVC",
      "CRUD",
      "HTML",
      "CSS",
      "Web Development",
      "Dashboard",
      "Backend Development",
    ],
    github: "#",
  },

  {
    title: "DevOps Project – Frontend & Backend Deployment on GCP",
    description:
      "Conception d’une infrastructure sur Google Cloud Platform avec deux VM séparées pour le frontend et le backend. Déploiement d’une application Angular conteneurisée avec Docker sur la VM frontend et d’une application Spring Boot avec PostgreSQL sur la VM backend via Docker Compose. Mise en place de pipelines CI/CD avec Jenkins et intégration GitHub Webhooks pour automatiser le déploiement.",
    tags: [
      "GCP",
      "Compute Engine",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "CI/CD",
      "GitHub Webhooks",
      "Angular",
      "Spring Boot",
      "PostgreSQL",
      "Linux",
      "DevOps",
      "Cloud Deployment",
    ],
    github: "#",
  },

  {
    title: "Application Web Python Flask avec PostgreSQL",
    description:
      "Conception et développement d’une application web Python Flask avec implémentation d’une API RESTful et opérations CRUD complètes. Connexion à PostgreSQL via SQLAlchemy, intégration continue avec Jenkins pour automatiser les tests et le build, gestion du versioning avec Git/GitHub et conteneurisation avec Docker.",
    tags: [
      "Python",
      "Flask",
      "REST API",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Git",
      "GitHub",
      "Linux",
      "CRUD",
      "Backend Development",
    ],
    github: "https://github.com/Morny05/FlaskMorny",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B132B]">
            My Projects
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Some projects I built around DevOps, Cloud and Automation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold leading-tight text-[#0B132B]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-[15px] leading-6 sm:leading-7 text-gray-600">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-gray-100 px-3 py-1 text-xs sm:text-sm font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-[#0B132B] hover:bg-[#0B132B] hover:text-white transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>

                    Code
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}