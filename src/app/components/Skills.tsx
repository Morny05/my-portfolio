import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2><br />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Cloud Platform */}
          <div className="bg-white border border-gray-200 text-card-foreground shadow-sm shadow-sm hover:shadow-md transition">
            {/* Icon */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-8 w-8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">Cloud Platform</h3>
              <p className="text-sm text-muted-foreground">AWS, GCP, Azure</p>
            </div>

            {/* List */}
            <div className="p-6 pt-0">
              <ul className="space-y-2">
                {["EC2/VM Management", "Linux server administration", "IAM/user and access management", "Cloud networking"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500"
                    >
                      • {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="bg-white border border-gray-200 text-card-foreground shadow-sm shadow-sm hover:shadow-md transition">
            {/* Icon */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal h-8 w-8"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>                </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">Infrastructure as code</h3>
              <p className="text-sm text-muted-foreground">Automation & Configuration</p>
            </div>

            {/* List */}
            <div className="p-6 pt-0">
              <ul className="space-y-2">
                {["Terraform", "Ansible", "CloudFormation", "Managing variables/modules"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500"
                    >
                      • {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* CI/CD */}
          <div className="bg-white border border-gray-200 text-card-foreground shadow-sm shadow-sm hover:shadow-md transition">
            {/* Icon */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch h-8 w-8"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">CI/CD</h3>
              <p className="text-sm text-muted-foreground">Pipeline & Automation</p>
            </div>

            {/* List */}
            <div className="p-6 pt-0">
              <ul className="space-y-2">
                {["Jenkins", "GitLab", "Git", "Maven"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500"
                    >
                      • {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Containerization */}
          <div className="bg-white border border-gray-200 text-card-foreground shadow-sm shadow-sm hover:shadow-md transition">
            {/* Icon */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database h-8 w-8"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">Containerization</h3>
              <p className="text-sm text-muted-foreground">Container & Orchestration</p>
            </div>

            {/* List */}
            <div className="p-6 pt-0">
              <ul className="space-y-2">
                {["Docker", "Kubernetes"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500"
                    >
                      • {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white border border-gray-200 text-card-foreground shadow-sm shadow-sm hover:shadow-md transition">
            {/* Icon */}
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow h-8 w-8">
                  <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                  <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                  <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                </svg></div>
              <h3 className="text-xl font-semibold leading-none tracking-tight">Monitoring</h3>
              <p className="text-sm text-muted-foreground">Observability & Metrics</p>
            </div>

            {/* List */}
            <div className="p-6 pt-0">
              <ul className="space-y-2">
                {["Prometheus", "Grafana"].map(
                  (skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-500"
                    >
                      • {skill}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}