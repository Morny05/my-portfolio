import React from "react";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  tags: string[];
};

const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    year: "Émise le mai 2025 · Expire le mai 2027",
    tags: [
      "Enabling DevSecOps",
      "Cloud Formation",
      "Monitoring and Observability",
      "Managing Containers using Container Orchestration Engine",
    ],
  },

  {
    title: "Linux Unhatched Certificate",
    issuer: "Linux Foundation",
    year: "2026",
    tags: [
      "Linux",
      "Bash",
      "Networking",
      "Cisco Networking",
      "CLI",
      "File Management",
    ],
  },

  {
    title: "DevOps Bootcamp",
    issuer: "Orange",
    year: "2024",
    tags: ["AWS", "DevOps", "Terraform", "Ansible"],
  },

  {
    title: "AWS Cloud Essentials",
    issuer: "AWS",
    year: "2024",
    tags: [
      "EC2",
      "S3",
      "Cloud Infrastructure",
      "Scalability",
      "Availability",
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B132B]">
            Certifications
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500">
            Professional certifications and technical learning achievements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold leading-7 text-[#0B132B]">
                {cert.title}
              </h3>

              {/* Issuer + Year */}
              <p className="mt-3 text-sm sm:text-base text-gray-500 leading-6">
                {cert.issuer} • {cert.year}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {cert.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}