"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, FileText, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.15),transparent_50%)]" />

      {/* Floating glowing orbs */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl top-10 left-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-600/20 rounded-full blur-3xl bottom-10 right-20"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navbar */}
      <header className="flex justify-between items-center max-w-6xl mx-auto py-6 px-6 relative z-10">
        <h1 className="text-2xl font-bold tracking-tight">
          RAG<span className="text-indigo-500">Genie</span>
        </h1>
        <nav className="flex items-center gap-6">
          {/* <Link href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition">
            About
          </Link> */}
          <div className="flex items-center gap-4">
            <Link href="/signin" className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:bg-gray-800/60 backdrop-blur-md transition">
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 text-sm rounded-lg bg-linear-to-r from-indigo-600 to-pink-600 hover:opacity-90 transition">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-pink-500 to-purple-500">
            The Future of Knowledge Retrieval
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 max-w-2xl mb-10"
        >
          RAGGenie brings AI and context together — blending retrieval and generation so you can ask questions that truly understand your documents.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="flex gap-4">
          <Link
            href="/signup"
            className="px-8 py-3 bg-linear-to-r from-indigo-600 to-pink-600 rounded-xl font-medium flex items-center gap-2 transition hover:scale-105"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/signin" className="px-8 py-3 border border-gray-600 hover:bg-gray-800/50 rounded-xl font-medium transition">
            Sign In
          </Link>
        </motion.div>
      </section>

      {/* Floating AI node network effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="none">
          <g stroke="white" strokeWidth="0.3">
            {[...Array(50)].map((_, i) => (
              <circle key={i} cx={Math.random() * 800} cy={Math.random() * 600} r="1.2" fill="white" />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Features */}
      <section id="features" className="mt-40 px-6 max-w-6xl mx-auto relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Next-Gen <span className="text-indigo-400">AI Features</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-10 h-10 text-indigo-400 mx-auto mb-4" />,
              title: "Cognitive Search",
              desc: "Instantly find relevant information from complex datasets using retrieval-augmented intelligence.",
            },
            {
              icon: <FileText className="w-10 h-10 text-pink-400 mx-auto mb-4" />,
              title: "Document Awareness",
              desc: "Upload PDFs, notes, or reports — the model reads and understands context for precise answers.",
            },
            {
              icon: <Zap className="w-10 h-10 text-purple-400 mx-auto mb-4" />,
              title: "Real-Time Reasoning",
              desc: "Experience fast, grounded, and explainable AI responses that adapt to your data instantly.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-8 text-center hover:border-indigo-500/50 transition"
            >
              {f.icon}
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative mt-40 px-6 max-w-5xl mx-auto text-center z-10">
        {/* Glow Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-24 bg-gradient-to-b from-indigo-500 to-transparent rounded-full" />

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 shadow-lg shadow-indigo-900/10"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-400">
            About <span className="text-white">RAGGenie</span>
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="text-indigo-400 font-medium">RAGGenie</span> blends large language models with intelligent retrieval systems to deliver
            answers that are grounded, transparent, and real. Instead of guessing, it fetches knowledge directly from your documents — understanding
            not just *what* you asked, but *why* you asked it. Think of it as an AI that never forgets, always cites, and continuously learns from the
            data you trust.
          </p>
        </motion.div>

        {/* Subtle background glow */}
        <motion.div
          className="absolute -z-10 left-1/2 -translate-x-1/2 top-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Footer */}
      <footer className="mt-32 py-10 text-center text-gray-500 border-t border-gray-800 relative z-10">
        © {new Date().getFullYear()} RAGGenie — Built for the Age of Intelligence.
      </footer>
    </main>
  );
}
