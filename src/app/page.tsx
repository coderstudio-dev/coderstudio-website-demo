'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Cloud,
  Lock,
  Zap,
  Code,
  Server,
  Globe,
  Rocket,
  Users,
  Terminal,
  Box,
} from "lucide-react";
import Image from "next/image";
import logo from "./coderstudio-logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-gray-800 sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm">
        <a className="flex" href="#home">
          <Image className="h-16 w-auto" src={logo} alt="Home"/>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-blue-400 transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium hover:text-blue-400 transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:text-blue-400 transition-colors"
            href="#mission"
          >
            Mission
          </a>
          <a
            className="text-sm font-medium hover:text-blue-400 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Powering SMEs with Cutting-Edge IT Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed">
                  Affordable, comprehensive IT and digital transformation
                  services tailored for forward-thinking enterprises.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-800 border-gray-700"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  Embark on your digital transformation journey. No strings
                  attached.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Cloud className="h-12 w-12 text-blue-500 mb-4" />}
                title="Cloud Infrastructure"
                description="Harness the power of cutting-edge cloud technologies to scale your operations securely and efficiently."
              />
              <ServiceCard
                icon={<Lock className="h-12 w-12 text-blue-500 mb-4" />}
                title="Cybersecurity"
                description="Fortify your digital assets with our state-of-the-art cybersecurity solutions tailored for modern SMEs."
              />
              <ServiceCard
                icon={<Code className="h-12 w-12 text-blue-500 mb-4" />}
                title="Custom Development"
                description="Transform your business with bespoke software solutions and cutting-edge application development."
              />
              <ServiceCard
                icon={<Globe className="h-12 w-12 text-blue-500 mb-4" />}
                title="Web Hosting"
                description="Reliable and high-performance web hosting solutions to keep your online presence running smoothly 24/7."
              />
              <ServiceCard
                icon={<Terminal className="h-12 w-12 text-blue-500 mb-4" />}
                title="Developer Experience"
                description="Enhance your team's productivity with our DevEx platform, designed to streamline development workflows and boost efficiency."
              />
              <ServiceCard
                icon={<Box className="h-12 w-12 text-blue-500 mb-4" />}
                title="Cloud-Native Deployment"
                description="Leverage containers and Kubernetes for scalable, efficient, and resilient cloud-native deployments of your applications."
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                About TechNex Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                TechNex Solutions is a fully remote, distributed startup
                providing affordable, comprehensive IT and digital
                transformation services tailored for small and medium-sized
                enterprises (SMEs). Our mission is to empower SMEs with
                enterprise-grade technology solutions, enabling them to compete
                and thrive in the digital age.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <FeatureItem
                  icon={<Users className="h-5 w-5 text-blue-500" />}
                  text="Fully Remote Team"
                />
                <FeatureItem
                  icon={<Globe className="h-5 w-5 text-blue-500" />}
                  text="Global Expertise"
                />
                <FeatureItem
                  icon={<Zap className="h-5 w-5 text-blue-500" />}
                  text="Cutting-edge Solutions"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="mission"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Our Mission & Vision
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <MissionVisionCard
                  title="Mission"
                  description="To democratize access to cutting-edge IT solutions for SMEs, enabling them to leverage technology for growth and innovation, regardless of their size or resources."
                />
                <MissionVisionCard
                  title="Vision"
                  description="To create a world where every SME has the technological capabilities to compete globally, innovate fearlessly, and drive economic growth in their communities."
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to revolutionize your IT infrastructure? Let's discuss how
                our team of tech experts can elevate your business with
                affordable, enterprise-grade IT solutions.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © 2023 TechNex Solutions. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:text-blue-400 transition-colors"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-xs hover:text-blue-400 transition-colors"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-xs hover:text-blue-400 transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-xs hover:text-blue-400 transition-colors"
            href="#mission"
          >
            Mission
          </a>
          <a
            className="text-xs hover:text-blue-400 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow">
      {icon}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

interface FeatureItemProps {
  icon: JSX.Element;
  text: string;
}

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

interface MissionVisionCardProps {
  title: string;
  description: string;
}

function MissionVisionCard({ title, description }: MissionVisionCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const error = await response.text();
        setStatus(`Failed to send message: ${error}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 mt-8">
      <Input
        className="w-full bg-gray-800 border-gray-700"
        placeholder="Your Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        className="w-full bg-gray-800 border-gray-700"
        placeholder="Your Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="w-full h-32 px-3 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
        Send Message
      </Button>
      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  );
}
