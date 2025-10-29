"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Menu,
  X,
  Terminal,
  Zap,
  Coffee,
  Moon,
  Sun,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [terminalText, setTerminalText] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const fullTerminalText =
    "$ whoami\n> shresth_gupta\n$ cat skills.txt\n> building_scalable_systems...\n$ status\n> ready_to_code 🚀"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / documentHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative ${
        isDarkMode
          ? "bg-gradient-radial from-orange-600/20 via-amber-900/40 to-gray-900"
          : "bg-gradient-radial from-yellow-300/60 via-orange-400/40 to-amber-100"
      }`}
    >
      {/* Retro Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${isDarkMode ? "rgba(255,140,0,0.2)" : "rgba(255,140,0,0.3)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? "rgba(255,140,0,0.2)" : "rgba(255,140,0,0.3)"} 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? isDarkMode
              ? "bg-gray-900/95 backdrop-blur-sm shadow-lg border-b-2 border-orange-400"
              : "bg-amber-50/95 backdrop-blur-sm shadow-lg border-b-2 border-orange-200"
            : "bg-transparent"
        }`}
      >
        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-orange-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold font-mono ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}>
              {"<shresth.dev />"}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 font-medium relative group ${
                    isDarkMode ? "text-orange-200 hover:text-orange-400" : "text-orange-800 hover:text-orange-600"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-orange-800 text-orange-200 hover:bg-orange-700"
                    : "bg-orange-200 text-orange-800 hover:bg-orange-300"
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-orange-800 text-orange-200 hover:bg-orange-700"
                    : "bg-orange-200 text-orange-800 hover:bg-orange-300"
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                className={isDarkMode ? "text-orange-300" : "text-orange-900"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`md:hidden rounded-lg shadow-lg p-4 mb-4 border-2 ${
                isDarkMode ? "bg-gray-800 border-orange-400" : "bg-amber-100 border-orange-200"
              }`}
            >
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 transition-colors duration-200 font-mono ${
                    isDarkMode ? "text-orange-200 hover:text-orange-400" : "text-orange-800 hover:text-orange-600"
                  }`}
                >
                  {"> "}
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dynamic Gradient Overlay */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-radial from-orange-500/30 via-amber-800/20 to-gray-900/90"
              : "bg-gradient-radial from-yellow-200/80 via-orange-300/60 to-amber-50/40"
          }`}
        ></div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-20 w-96 h-96 rounded-full opacity-30 animate-pulse blur-3xl ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-400 to-yellow-500"
                : "bg-gradient-to-r from-orange-300 to-yellow-400"
            }`}
          ></div>
          <div
            className={`absolute bottom-32 right-32 w-80 h-80 rounded-full opacity-25 animate-pulse delay-1000 blur-3xl ${
              isDarkMode ? "bg-gradient-to-r from-red-400 to-orange-500" : "bg-gradient-to-r from-red-300 to-orange-400"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-10 w-64 h-64 rounded-full opacity-20 animate-pulse delay-500 blur-3xl ${
              isDarkMode
                ? "bg-gradient-to-r from-amber-400 to-orange-600"
                : "bg-gradient-to-r from-amber-300 to-orange-500"
            }`}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Terminal */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border-4 border-orange-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4 font-mono">terminal</span>
                </div>
                <div className="font-mono text-green-400 text-sm leading-relaxed whitespace-pre-wrap">
                  {terminalText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="animate-fade-in-up">
                <h1
                  className={`text-5xl md:text-6xl font-bold mb-4 font-mono ${
                    isDarkMode ? "text-orange-300" : "text-orange-900"
                  }`}
                >
                  Shresth Gupta
                </h1>
                <div
                  className={`border-l-4 border-orange-400 p-4 mb-6 rounded-r-lg ${
                    isDarkMode ? "bg-gray-800/50" : "bg-yellow-100"
                  }`}
                >
                  <p className={`text-lg font-medium ${isDarkMode ? "text-orange-200" : "text-orange-800"}`}>
                    Developer who thinks in systems, codes in coffee, and debugs with determination ☕
                  </p>
                </div>
                <p className={`mb-8 text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Currently crafting scalable solutions at{" "}
                  <span className={`font-semibold ${isDarkMode ? "text-orange-300" : "text-orange-700"}`}>
                    HarmoCare
                  </span>
                  while pursuing my Bachelor's in IT. I believe in building things that matter, one commit at a time.
                </p>

                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-none border-2 border-orange-700 shadow-[4px_4px_0px_0px_rgba(194,65,12,1)] hover:shadow-[2px_2px_0px_0px_rgba(194,65,12,1)] transition-all duration-200 font-mono"
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-2 border-orange-500 text-orange-700 hover:bg-orange-100 px-8 py-3 rounded-none shadow-[4px_4px_0px_0px_rgba(251,146,60,1)] hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] transition-all duration-200 font-mono dark:text-orange-300 dark:hover:bg-orange-900/20"
                  >
                    Let's Connect
                  </Button>
                </div>

                <div className="flex justify-center lg:justify-start space-x-6">
                  <a
                    href="mailto:shresthgupta106@gmail.com"
                    className={`transition-colors duration-200 transform hover:scale-110 ${
                      isDarkMode ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-800"
                    }`}
                  >
                    <Mail size={28} />
                  </a>
                  <a
                    href="tel:+917506992248"
                    className={`transition-colors duration-200 transform hover:scale-110 ${
                      isDarkMode ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-800"
                    }`}
                  >
                    <Phone size={28} />
                  </a>
                  <a
                    href="https://github.com/shhresth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-200 transform hover:scale-110 ${
                      isDarkMode ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-800"
                    }`}
                  >
                    <Github size={28} />
                  </a>
                  <a
                    href="https://shresth.is-a.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-200 transform hover:scale-110 ${
                      isDarkMode ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-800"
                    }`}
                  >
                    <Globe size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-orange-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-radial from-slate-800/80 via-amber-900/30 to-orange-900/50"
            : "bg-gradient-radial from-amber-100/90 via-orange-200/70 to-yellow-100/50"
        }`}
      >
        {/* Geometric Retro Shapes */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className={`absolute top-16 right-16 w-20 h-20 rotate-45 ${isDarkMode ? "bg-orange-400" : "bg-orange-300"}`}
          ></div>
          <div
            className={`absolute bottom-24 left-24 w-16 h-16 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-yellow-300"}`}
          ></div>
          <div
            className={`absolute top-1/2 right-1/4 w-12 h-12 ${isDarkMode ? "bg-red-400" : "bg-red-300"}`}
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 font-mono ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}>
              {"// About Me"}
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className={`text-xl ${isDarkMode ? "text-orange-200" : "text-orange-700"}`}>The story behind the code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div
                className={`border-2 border-orange-300 rounded-lg p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(251,146,60,0.3)] ${
                  isDarkMode ? "bg-gray-800/50" : "bg-amber-100"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-4 font-mono flex items-center ${
                    isDarkMode ? "text-orange-300" : "text-orange-900"
                  }`}
                >
                  <Coffee className="mr-2" size={24} />
                  My Journey
                </h3>
                <p className={`leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Started my coding journey during my diploma at Government Polytechnic, Mumbai. What began as curiosity
                  about "how websites work" turned into a passion for building systems that can handle thousands of
                  users without breaking a sweat.
                </p>
                <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Now pursuing my Bachelor's while working on production systems at HarmoCare. I love the challenge of
                  optimizing databases, architecting scalable backends, and turning coffee into code.
                </p>
              </div>

              <div className="space-y-4">
                <div
                  className={`flex items-start space-x-3 p-4 rounded-lg border-l-4 border-orange-400 ${
                    isDarkMode ? "bg-gray-800/30" : "bg-white"
                  }`}
                >
                  <Zap className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className={`font-semibold font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                      Problem Solver
                    </h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      I debug like a detective - systematic, persistent, and won't stop until the mystery is solved
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-start space-x-3 p-4 rounded-lg border-l-4 border-yellow-400 ${
                    isDarkMode ? "bg-gray-800/30" : "bg-white"
                  }`}
                >
                  <Server className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className={`font-semibold font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                      Startup Mindset
                    </h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Fast learner, faster adapter. Comfortable with ambiguity and excited by new challenges
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-start space-x-3 p-4 rounded-lg border-l-4 border-red-400 ${
                    isDarkMode ? "bg-gray-800/30" : "bg-white"
                  }`}
                >
                  <User className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className={`font-semibold font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                      Team Player
                    </h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Can explain complex tech stuff to non-tech folks and collaborate across teams seamlessly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card
                className={`border-2 border-orange-200 shadow-[6px_6px_0px_0px_rgba(251,146,60,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(251,146,60,0.3)] transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-white"
                }`}
              >
                <CardHeader
                  className={
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-700 to-orange-900/50"
                      : "bg-gradient-to-r from-orange-100 to-yellow-100"
                  }
                >
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-orange-600" size={24} />
                    <div>
                      <CardTitle className={`text-lg font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                        Bachelor's in IT
                      </CardTitle>
                      <CardDescription className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                        Shah and Anchor Kutchhi Engineering College
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-mono ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      Sep 2023 – May 2026
                    </span>
                    <Badge className="bg-green-100 text-green-800 border-green-300 font-mono">9.11/10 CGPA</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`border-2 border-orange-200 shadow-[6px_6px_0px_0px_rgba(251,146,60,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(251,146,60,0.3)] transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-white"
                }`}
              >
                <CardHeader
                  className={
                    isDarkMode
                      ? "bg-gradient-to-r from-gray-700 to-yellow-900/50"
                      : "bg-gradient-to-r from-yellow-100 to-orange-100"
                  }
                >
                  <div className="flex items-center space-x-3">
                    <Award className="text-yellow-600" size={24} />
                    <div>
                      <CardTitle className={`text-lg font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                        Diploma in Computer Engineering
                      </CardTitle>
                      <CardDescription className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                        Government Polytechnic, Mumbai
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <span className={`text-sm font-mono ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Oct 2020 – Aug 2023
                  </span>
                </CardContent>
              </Card>

              <div
                className={`p-6 rounded-lg border-2 border-orange-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-800/50 to-orange-900/30"
                    : "bg-gradient-to-r from-orange-100 to-red-100"
                }`}
              >
                <h4
                  className={`font-mono text-lg font-semibold mb-3 ${
                    isDarkMode ? "text-orange-300" : "text-orange-900"
                  }`}
                >
                  Fun Facts
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <span className="text-orange-500">▸</span>
                    <span>Can handle 10,000+ concurrent users (and counting!)</span>
                  </li>
                  <li className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <span className="text-orange-500">▸</span>
                    <span>Debugs best with coffee and lo-fi music</span>
                  </li>
                  <li className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    <span className="text-orange-500">▸</span>
                    <span>Believes in clean code and cleaner databases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-radial from-orange-800/60 via-red-900/40 to-amber-900/50"
            : "bg-gradient-radial from-red-100/80 via-orange-200/60 to-yellow-100/40"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 font-mono ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}>
              {"/* Experience */"}
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className={`text-xl ${isDarkMode ? "text-orange-200" : "text-orange-700"}`}>
              Where I've been building cool stuff
            </p>
          </div>

          <div className="space-y-8">
            <Card
              className={`border-2 border-orange-300 shadow-[12px_12px_0px_0px_rgba(251,146,60,0.2)] hover:shadow-[16px_16px_0px_0px_rgba(251,146,60,0.3)] transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800/50" : "bg-white"
              }`}
            >
              <CardHeader
                className={
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-700 to-red-900/50"
                    : "bg-gradient-to-r from-orange-100 to-red-100"
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className={`text-xl font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                        Backend Developer Intern
                      </CardTitle>
                      <CardDescription className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        HarmoCare (formerly Harmonia)
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <Badge className="bg-green-100 text-green-800 border-green-300 font-mono mb-2">
                      Mar 2025 – June 2025
                    </Badge>
                    <p className={`text-sm font-mono ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Mumbai, MH</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Architected scalable backend systems using <strong>Node.js and Python</strong>, capable of
                        handling <strong>10,000+ concurrent users</strong>
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Optimized database performance through advanced schema design, indexing, and query tuning on{" "}
                        <strong>MySQL and PostgreSQL</strong> systems
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Implemented robust security protocols with <strong>Express.js, JWT authentication</strong>, and
                        cryptographic solutions for enterprise-level applications
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Engineered cloud-native solutions integrating <strong>AWS services</strong>
                        (RDS, DynamoDB, S3) to improve system reliability
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border-2 border-yellow-300 shadow-[12px_12px_0px_0px_rgba(252,211,77,0.2)] hover:shadow-[16px_16px_0px_0px_rgba(252,211,77,0.3)] transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode ? "bg-gray-800/50" : "bg-white"
              }`}
            >
              <CardHeader
                className={
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-700 to-yellow-900/50"
                    : "bg-gradient-to-r from-yellow-100 to-orange-100"
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                      <Code className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className={`text-xl font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}>
                        Full Stack Developer Intern
                      </CardTitle>
                      <CardDescription className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Shishya Academy
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300 font-mono mb-2">
                      Mar 2023 – Jul 2023
                    </Badge>
                    <p className={`text-sm font-mono ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Mumbai, MH</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Developed production-ready applications using <strong>React, Node.js, and MongoDB Atlas</strong>
                        , serving <strong>1,000+ active users daily</strong>
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Built comprehensive student management system with <strong>CRUD operations</strong>, file
                        systems integration, and real-time data synchronization
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Implemented end-to-end <strong>authentication and authorization systems</strong>, ensuring
                        secure user data handling across multiple platforms
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-500 mt-1 font-mono">▸</span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Designed and integrated <strong>RESTful APIs</strong> with proper error handling and
                        documentation, improving system interoperability
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-radial from-amber-800/70 via-orange-900/50 to-red-900/60"
            : "bg-gradient-radial from-orange-100/90 via-yellow-200/70 to-red-100/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 font-mono ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}>
              {"<Projects />"}
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className={`text-xl ${isDarkMode ? "text-orange-200" : "text-orange-700"}`}>
              Things I've built that I'm proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
             <Card
              className={`group border-2 border-purple-300 shadow-[12px_12px_0px_0px_rgba(168,85,247,0.2)] hover:shadow-[16px_16px_0px_0px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-2 col-span-1 md:col-span-2 lg:col-span-1 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-purple-900/30"
                  : "bg-gradient-to-br from-white to-purple-50"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Database className="text-white" size={20} />
                  </div>
                  <ExternalLink
                    className="text-gray-400 group-hover:text-purple-600 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <CardTitle
                  className={`text-xl group-hover:text-purple-600 transition-colors duration-300 font-mono ${
                    isDarkMode ? "text-orange-200" : "text-gray-900"
                  }`}
                >
                  AnonHire
                </CardTitle>
                <CardDescription className={`font-mono text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  In the Oven • Credential Verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm">
                  <div className="text-green-400">
                    {"> npm run deploy:sepolia"}
                    <br />
                    {"Deploying credential registry..."}
                    <br />
                    {"Generating ZKP circuit..."}
                    <br />
                    {"System ready for verification 🔐"}
                  </div>
                </div>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Privacy-preserving employment credential verification using Self-Sovereign Identity, Ethereum smart
                  contracts, and Zero-Knowledge Proofs. Enables secure credential sharing without exposing sensitive
                  data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-purple-300 text-purple-700 font-mono text-xs dark:text-purple-300"
                  >
                    Solidity
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-300 text-purple-700 font-mono text-xs dark:text-purple-300"
                  >
                    Circom
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-300 text-purple-700 font-mono text-xs dark:text-purple-300"
                  >
                    IPFS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-300 text-purple-700 font-mono text-xs dark:text-purple-300"
                  >
                    React
                  </Badge>
                </div>
              </CardContent>
            </Card>


            <Card
              className={`group border-2 border-red-300 shadow-[12px_12px_0px_0px_rgba(220,38,38,0.2)] hover:shadow-[16px_16px_0px_0px_rgba(220,38,38,0.4)] transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-red-900/30"
                  : "bg-gradient-to-br from-white to-red-50"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-red-500 p-2 rounded-lg">
                    <Code className="text-white" size={20} />
                  </div>
                  <ExternalLink
                    className="text-gray-400 group-hover:text-red-600 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <CardTitle
                  className={`text-xl group-hover:text-red-600 transition-colors duration-300 font-mono ${
                    isDarkMode ? "text-orange-200" : "text-gray-900"
                  }`}
                >
                  DeepLog
                </CardTitle>
                <CardDescription className={`font-mono text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Jan 2024 • Anomaly Detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm">
                  <div className="text-green-400">
                    {"> python app.py --mode detect"}
                    <br />
                    {"Analyzing log sequences..."}
                    <br />
                    {"Anomalies detected: 3"}
                    <br />
                    {"Confidence: 94.2% 🎯"}
                  </div>
                </div>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Deep learning-powered log anomaly detection. Learns normal log patterns and flags deviations in
                  real-time, perfect for system monitoring and security event detection with LSTM-based sequence
                  analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-red-300 text-red-700 font-mono text-xs dark:text-red-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-red-300 text-red-700 font-mono text-xs dark:text-red-300">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="border-red-300 text-red-700 font-mono text-xs dark:text-red-300">
                    LSTM
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card
              className={`group border-2 border-orange-300 shadow-[12px_12px_0px_0px_rgba(251,146,60,0.2)] hover:shadow-[16px_16px_0px_0px_rgba(251,146,60,0.4)] transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-orange-900/30"
                  : "bg-gradient-to-br from-white to-orange-50"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Terminal className="text-white" size={20} />
                  </div>
                  <ExternalLink
                    className="text-gray-400 group-hover:text-orange-600 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <CardTitle
                  className={`text-xl group-hover:text-orange-600 transition-colors duration-300 font-mono ${
                    isDarkMode ? "text-orange-200" : "text-gray-900"
                  }`}
                >
                  Distributed Price Monitor
                </CardTitle>
                <CardDescription className={`font-mono text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Apr 2023 • Web Scraping Beast
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm">
                  <div className="text-green-400">
                    {"> npm run monitor"}
                    <br />
                    {"Monitoring 1000+ products..."}
                    <br />
                    {"WhatsApp notifications: ON"}
                    <br />
                    {"Status: 🟢 All systems go!"}
                  </div>
                </div>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Built a scalable web scraping solution that monitors product prices across multiple platforms and
                  sends real-time WhatsApp notifications. Handles network failures like a champ with robust retry
                  mechanisms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-orange-300 text-orange-700 font-mono text-xs dark:text-orange-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-orange-300 text-orange-700 font-mono text-xs dark:text-orange-300"
                  >
                    Puppeteer.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-orange-300 text-orange-700 font-mono text-xs dark:text-orange-300"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-orange-300 text-orange-700 font-mono text-xs dark:text-orange-300"
                  >
                    Redis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`group border-2 border-yellow-300 shadow-[12px_12px_0px_0px_rgba(252,211,77,0.2)] hover:shadow-[16px_16px_0px_0px_rgba(252,211,77,0.4)] transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-yellow-900/30"
                  : "bg-gradient-to-br from-white to-yellow-50"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-yellow-500 p-2 rounded-lg">
                    <Database className="text-white" size={20} />
                  </div>
                  <ExternalLink
                    className="text-gray-400 group-hover:text-yellow-600 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <CardTitle
                  className={`text-xl group-hover:text-yellow-600 transition-colors duration-300 font-mono ${
                    isDarkMode ? "text-orange-200" : "text-gray-900"
                  }`}
                >
                  Meta-Search Engine
                </CardTitle>
                <CardDescription className={`font-mono text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Apr 2024 – May 2024 • Search Aggregator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm">
                  <div className="text-green-400">
                    {'> search("best pizza near me")'}
                    <br />
                    {"Aggregating from 5 engines..."}
                    <br />
                    {"Response time: 0.8s"}
                    <br />
                    {"Results ranked and ready! 🍕"}
                  </div>
                </div>
                <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Architected a high-performance search aggregation system that processes multiple API calls
                  asynchronously with sub-second response times. Features a sophisticated ranking algorithm that
                  analyzes patterns across different search engines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-yellow-300 text-yellow-700 font-mono text-xs dark:text-yellow-300"
                  >
                    Flask
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-yellow-300 text-yellow-700 font-mono text-xs dark:text-yellow-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-yellow-300 text-yellow-700 font-mono text-xs dark:text-yellow-300"
                  >
                    Async Processing
                  </Badge>
                </div>
              </CardContent>
            </Card>


           
          </div>

          <div className="text-center mt-12">
            <div
              className={`p-6 rounded-lg border-2 border-orange-300 inline-block ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800/50 to-yellow-900/30"
                  : "bg-gradient-to-r from-orange-100 to-yellow-100"
              }`}
            >
              <p className={`font-mono ${isDarkMode ? "text-orange-200" : "text-orange-800"}`}>
                {"// More projects cooking in the background..."}
                <br />
                {"// Check my GitHub for the latest experiments! 🧪"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${
          isDarkMode ? "bg-gradient-to-r from-yellow-900/30 to-red-900/50" : "bg-gradient-to-r from-yellow-50 to-red-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 font-mono ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}>
              {'{ skills: "arsenal" }'}
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-4"></div>
            <p className={`text-xl ${isDarkMode ? "text-orange-200" : "text-orange-700"}`}>My technical toolkit</p>
          </div>

          {/* Languages */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 font-mono flex items-center justify-center ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}
            >
              <Code className="mr-3" size={28} />
              Languages & Core Tech
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
                { name: "Node.js", icon: "🚀", color: "from-green-400 to-emerald-500" },
                { name: "Python", icon: "🐍", color: "from-blue-400 to-indigo-500" },
                { name: "Java", icon: "☕", color: "from-red-400 to-orange-500" },
                { name: "C/C++", icon: "⚙️", color: "from-gray-400 to-slate-500" },
                { name: "SQL", icon: "🗄️", color: "from-purple-400 to-violet-500" },
                { name: "TypeScript", icon: "📘", color: "from-blue-500 to-cyan-500" },
                { name: "HTML/CSS", icon: "🎨", color: "from-pink-400 to-rose-500" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-orange-400/30 hover:border-orange-400"
                      : "bg-white border-orange-300 hover:border-orange-500"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="p-3 text-center relative z-10">
                    <div className="text-2xl mb-1 transform group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div
                      className={`font-mono text-xs font-medium ${isDarkMode ? "text-gray-300 group-hover:text-orange-300" : "text-gray-700 group-hover:text-orange-700"}`}
                    >
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 font-mono flex items-center justify-center ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}
            >
              <Server className="mr-3" size={28} />
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
                { name: "Next.js", icon: "▲", color: "from-gray-700 to-black" },
                { name: "Express.js", icon: "🚀", color: "from-green-400 to-emerald-600" },
                { name: "Flask", icon: "🌶️", color: "from-red-400 to-pink-500" },
                { name: "React Native", icon: "📱", color: "from-blue-400 to-purple-500" },
                { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400 to-cyan-500" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-orange-400/30 hover:border-orange-400"
                      : "bg-white border-orange-300 hover:border-orange-500"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="p-3 text-center relative z-10">
                    <div className="text-2xl mb-1 transform group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div
                      className={`font-mono text-xs font-medium ${isDarkMode ? "text-gray-300 group-hover:text-orange-300" : "text-gray-700 group-hover:text-orange-700"}`}
                    >
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Cloud */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold mb-6 font-mono flex items-center justify-center ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}
            >
              <Database className="mr-3" size={28} />
              Tools & Cloud Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
                { name: "Azure", icon: "🌐", color: "from-blue-400 to-cyan-500" },
                { name: "Docker", icon: "🐳", color: "from-blue-500 to-indigo-600" },
                { name: "MongoDB", icon: "🍃", color: "from-green-400 to-emerald-500" },
                { name: "MySQL", icon: "🐬", color: "from-blue-400 to-teal-500" },
                { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-purple-600" },
                { name: "Git", icon: "🌿", color: "from-orange-400 to-red-500" },
                { name: "Redis", icon: "🔴", color: "from-red-400 to-pink-500" },
                { name: "Nginx", icon: "🔧", color: "from-green-500 to-teal-600" },
                { name: "Linux", icon: "🐧", color: "from-gray-600 to-slate-700" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-orange-400/30 hover:border-orange-400"
                      : "bg-white border-orange-300 hover:border-orange-500"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="p-3 text-center relative z-10">
                    <div className="text-2xl mb-1 transform group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div
                      className={`font-mono text-xs font-medium ${isDarkMode ? "text-gray-300 group-hover:text-orange-300" : "text-gray-700 group-hover:text-orange-700"}`}
                    >
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations Terminal */}
          <div className="mt-16">
            <div className="bg-gray-900 rounded-lg p-6 border-2 border-orange-300 shadow-[8px_8px_0px_0px_rgba(251,146,60,0.3)]">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4 font-mono">specializations.sh</span>
              </div>
              <h3 className="text-xl font-semibold text-green-400 mb-6 font-mono">$ cat my_superpowers.txt</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    {
                      icon: "🏗️",
                      text: "System Architecture & Design",
                      desc: "Building scalable, maintainable systems",
                    },
                    { icon: "⚡", text: "Performance Optimization", desc: "Making things fast and efficient" },
                    { icon: "🔒", text: "Security Implementation", desc: "Keeping data safe and sound" },
                    { icon: "🤖", text: "API Development", desc: "RESTful services that just work" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-green-400 font-mono text-sm font-semibold group-hover:text-green-300 transition-colors duration-300">
                          {item.text}
                        </div>
                        <div className="text-gray-500 font-mono text-xs mt-1">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "🌐", text: "Full-Stack Development", desc: "Frontend to backend, I got you covered" },
                    { icon: "🗄️", text: "Database Wizardry", desc: "SQL, NoSQL, and everything in between" },
                    { icon: "☁️", text: "Cloud Architecture", desc: "AWS, Azure, and cloud-native solutions" },
                    { icon: "🔧", text: "DevOps & Automation", desc: "CI/CD, Docker, and deployment magic" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-green-400 font-mono text-sm font-semibold group-hover:text-green-300 transition-colors duration-300">
                          {item.text}
                        </div>
                        <div className="text-gray-500 font-mono text-xs mt-1">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-orange-400 font-mono text-sm">
                  <span className="text-gray-500">// Currently mastering:</span> Microservices, GraphQL, Kubernetes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-radial from-red-800/80 via-amber-900/60 to-orange-900/70"
            : "bg-gradient-radial from-red-100/90 via-orange-200/80 to-pink-100/60"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-4xl font-bold mb-4 font-mono ${isDarkMode ? "text-orange-300" : "text-orange-900"}`}>
            {'console.log("Let\'s Connect!")'}
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className={`text-xl mb-12 ${isDarkMode ? "text-orange-200" : "text-orange-700"}`}>
            Got a cool project? Need a backend wizard? Or just want to chat about tech over coffee? ☕
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card
              className={`border-2 border-orange-300 shadow-[8px_8px_0px_0px_rgba(251,146,60,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(251,146,60,0.3)] transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-orange-900/30"
                  : "bg-gradient-to-br from-white to-orange-50"
              }`}
            >
              <CardContent className="p-8">
                <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}
                >
                  Drop me a line
                </h3>
                <a
                  href="mailto:shresthgupta106@gmail.com"
                  className={`transition-colors duration-200 font-mono ${
                    isDarkMode ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-800"
                  }`}
                >
                  shresthgupta106@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card
              className={`border-2 border-yellow-300 shadow-[8px_8px_0px_0px_rgba(252,211,77,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(252,211,77,0.3)] transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/50 to-yellow-900/30"
                  : "bg-gradient-to-br from-white to-yellow-50"
              }`}
            >
              <CardContent className="p-8">
                <div className="bg-yellow-500 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 font-mono ${isDarkMode ? "text-orange-200" : "text-gray-900"}`}
                >
                  Give me a call
                </h3>
                <a
                  href="tel:+917506992248"
                  className={`transition-colors duration-200 font-mono ${
                    isDarkMode ? "text-yellow-400 hover:text-yellow-300" : "text-yellow-600 hover:text-yellow-800"
                  }`}
                >
                  +91 7506992248
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border-2 border-orange-300 mb-8">
            <div className="font-mono text-green-400 text-left">
              <div className="text-gray-500 mb-2">// Quick response guaranteed</div>
              <div>if (message.isInteresting()) {"{"}</div>
              <div className="ml-4">response.time = "within 24 hours";</div>
              <div className="ml-4">enthusiasm.level = "maximum";</div>
              <div>{"}"}</div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/shhresth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-4 rounded-lg border-2 border-gray-700 shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] hover:shadow-[2px_2px_0px_0px_rgba(55,65,81,1)] transition-all duration-200 transform hover:scale-105"
            >
              <Github size={24} />
            </a>
            <a
              href="https://shresth.is-a.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white p-4 rounded-lg border-2 border-orange-700 shadow-[4px_4px_0px_0px_rgba(194,65,12,1)] hover:shadow-[2px_2px_0px_0px_rgba(194,65,12,1)] transition-all duration-200 transform hover:scale-105"
            >
              <Globe size={24} />
            </a>
            <a
              href="mailto:shresthgupta106@gmail.com"
              className="bg-red-500 text-white p-4 rounded-lg border-2 border-red-700 shadow-[4px_4px_0px_0px_rgba(185,28,28,1)] hover:shadow-[2px_2px_0px_0px_rgba(185,28,28,1)] transition-all duration-200 transform hover:scale-105"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t-4 border-orange-400 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-900 text-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-green-400 mb-4">{"// Built with ❤️, lots of ☕, and some late nights"}</div>
          <p className="text-gray-400 font-mono">© 2025 Shresth Gupta | Handcrafted with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
