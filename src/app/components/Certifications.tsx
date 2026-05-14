import React from 'react'

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
    tags: ["Enabling DevSecOps", "Cloud Formation", "Monitoring and Observability", "Managing Containers using Container Orchestration Engine"],
  },
  {
    title: "Linux Unhatched Certificate",
    issuer: "Linux Foundation",
    year: "2026",
    tags: ["Linux", "Bash", "Networking", "Cisco Networking", "CLI", "File Management"],
  },
  {
    title: "DevOps bootcamp",
    issuer: "Orange",
    year: "2024",
    tags: ["Aws", "DevOps", "Terraform", "Ansible"],
  },
  {
    title: "AWS Cloud Essentials",
    issuer: "Aws",
    year: "2024",
    tags: ["EC2", "S3", "Cloud Infrastructure", "Scalability", "Availability"],
  },
];


export default function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full bg-[#f5f5f5] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Certifications
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Title */}
              <h3 className="text-x font-bold text-black">
                {cert.title}
              </h3>

              {/* Issuer + Year */}
              <p className="mt-2 text-l text-gray-500">
                {cert.issuer} • {cert.year}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {cert.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
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