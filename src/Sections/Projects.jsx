import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectCards from "../Components/ProjectCard";

export default function Projects() {
    const [active, setActive] = useState("AWS Services");

    const allProjects = [
        // --- AWS & DEVOPS PROJECTS ---
        {
            title: "Multi-Tier Web App Deployment",
            description: "Deployed a multi-tier web application using AWS VPC, EC2, ALB, and RDS. Used ALB to manage traffic and RDS for secure database storage.",
            languages: ["VPC", "ALB", "EC2", "RDS"],
            category: "AWS Services",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop", // Placeholder or your image
        },
        {
            title: "AWS CodePipeline Automation",
            description: "Built an automated CI/CD pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy to deploy applications on EC2 with zero manual intervention.",
            languages: ["GitHub", "CodeDeploy", "CodePipeline"],
            category: "CI/CD",
            img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=500&auto=format&fit=crop",
        },
        {
            title: "Jenkins & Terraform IaC",
            description: "Implemented Jenkins CI/CD integrated with Terraform to provision AWS infrastructure and deploy applications automatically.",
            languages: ["Jenkins", "Terraform", "AWS"],
            category: "CI/CD",
        },
        {
            title: "Monitor AWS Resources",
            description: "Monitored AWS resources using CloudWatch and configured SNS alerts for EC2, RDS, and S3 to receive real-time notifications.",
            languages: ["CloudWatch", "SNS", "EC2"],
            category: "Monitoring",
        },
        {
            title: "Serverless URL Monitor",
            description: "Built a serverless URL monitoring solution using AWS Lambda and CloudWatch to check website uptime and track availability.",
            languages: ["Lambda", "CloudWatch", "Serverless"],
            category: "Monitoring",
        },
        {
            title: "Static Website Hosting",
            description: "Hosted a static website using S3 and Route 53. Integrated CloudFront for performance and enabled HTTPS for secure access.",
            languages: ["S3", "Route53", "CloudFront"],
            category: "AWS Services",
        },
    ];

    const categories = ["AWS Services", "CI/CD", "Monitoring","Database & Storage"];

    const filtered = active === "All"
        ? allProjects
        : allProjects.filter((proj) => proj.category === active);

    return (
        <section id="Projects" className="min-h-screen py-20 px-5 text-center text-white bg-[#05070a]">
            <div className="max-w-6xl mx-auto">
                <h3 className="font-bold text-4xl mb-2">
                    Featured <span className="text-[#f0b638]">Projects</span>
                </h3>
                <div className="border-b-4 w-20 border-[#f0b638] mx-auto mb-8 rounded-full"></div>

                <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                    A collection of cloud infrastructure, automation pipelines, and full-stack applications built with performance and scalability in mind.
                </p>

                {/* Category Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300
                                ${active === cat 
                                    ? "bg-[#f0b638] text-black shadow-lg" 
                                    : "text-gray-400 hover:text-[#f0b638] border border-gray-800"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((proj, index) => (
                        <ProjectCards key={index} {...proj} />
                    ))}
                </div>


            </div>
        </section>
    );
}