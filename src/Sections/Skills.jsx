import { useState } from "react";
import SkillCards from "../Components/SkillCard";

export default function Skill() {
  const [active, setActive] = useState("AWS Services");

  const allSkills = [
    // AWS Services
    { skill: 'EC2', category: 'AWS Services', icon: 'fa-solid fa-server' },
    { skill: 'S3', category: 'AWS Services', icon: 'fa-solid fa-cloud' },
    { skill: 'RDS', category: 'AWS Services', icon: 'fa-solid fa-database' },
    { skill: 'Lambda', category: 'AWS Services', icon: 'fa-solid fa-bolt' },
    { skill: 'VPC', category: 'AWS Services', icon: 'fa-solid fa-network-wired' },
    { skill: 'IAM', category: 'AWS Services', icon: 'fa-solid fa-shield-halved' },
    { skill: 'Route53', category: 'AWS Services', icon: 'fa-solid fa-route' },
    { skill: 'ECS', category: 'AWS Services', icon: 'fa-solid fa-layer-group' },
    { skill: 'EBS', category: 'AWS Services', icon: 'fa-solid fa-hard-drive' },
    { skill: 'Auto Scaling', category: 'AWS Services', icon: 'fa-solid fa-arrows-up-down' },
    
    // CI/CD
    { skill: 'Jenkins', category: 'CI/CD Tools', icon: 'fa-brands fa-jenkins' },
    { skill: 'GitLab', category: 'CI/CD Tools', icon: 'fa-brands fa-gitlab' },
    { skill: 'GitHub Actions', category: 'CI/CD Tools', icon: 'fa-brands fa-github' },
    { skill: 'AWS Code Pipeline', category: 'CI/CD Tools', icon: 'fa-solid fa-infinity' },
    
    // IaC
    { skill: 'Terraform', category: 'IaC', icon: 'fa-solid fa-code' },
    { skill: 'Ansible', category: 'IaC', icon: 'fa-solid fa-terminal' },
    
    // Containers
    { skill: 'Docker', category: 'Containers', icon: 'fa-brands fa-docker' },
    { skill: 'EKS', category: 'Containers', icon: 'fa-solid fa-cubes' },
    
    // Monitoring
    { skill: 'CloudWatch', category: 'Monitoring', icon: 'fa-solid fa-chart-line' },
    { skill: 'Prometheus', category: 'Monitoring', icon: 'fa-solid fa-fire' },
    { skill: 'Grafana', category: 'Monitoring', icon: 'fa-solid fa-chart-pie' },
    
    // OS & Networking
    { skill: 'Linux', category: 'OS & Networking', icon: 'fa-brands fa-linux' },
    { skill: 'Load Balancers', category: 'OS & Networking', icon: 'fa-solid fa-bridge' },
    { skill: 'VPC Peering', category: 'OS & Networking', icon: 'fa-solid fa-link' }
  ];

  const categories = ["AWS Services", "CI/CD Tools", "IaC", "Containers", "Monitoring", "OS & Networking"];

  const filtered = active === "All" 
    ? allSkills 
    : allSkills.filter((s) => s.category === active);

  return (
    <section id="Skills" className="min-h-screen py-20 px-5 text-center text-white bg-[#05070a]">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-bold text-4xl mb-2">
          Technical <span className="text-[#f0b638]">Expertise</span>
        </h3>
        <div className="border-b-4 w-20 border-[#f0b638] mx-auto mb-12 rounded-full"></div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${active === cat 
                  ? "bg-[#f0b638] border-[#f0b638] text-black shadow-[0_0_15px_rgba(240,182,56,0.3)]" 
                  : "bg-transparent border-gray-700 text-gray-400 hover:border-[#f0b638] hover:text-[#f0b638]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filtered.map((item, index) => (
            <SkillCards key={index} skill={item.skill} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}