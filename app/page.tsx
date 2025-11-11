"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, FileText, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center max-w-6xl mx-auto py-6 px-6">
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
            <Link href="/signin" className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:bg-gray-700 transition">
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold max-w-3xl mb-6"
        >
          Ask <span className="text-indigo-500">Anything</span> From Your Documents
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mb-10"
        >
          RAGGenie is an AI-powered assistant that finds precise answers from your uploaded files using cutting-edge retrieval-augmented generation
          technology.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex gap-4">
          <Link href="/signup" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium flex items-center gap-2 transition">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/signin" className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-xl font-medium transition">
            Sign In
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="mt-32 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Why Choose <span className="text-indigo-500">RAGGenie</span>?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center"
          >
            <Brain className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Smart AI Retrieval</h4>
            <p className="text-gray-400">Combines retrieval and generation to deliver factual, context-aware answers directly from your documents.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center"
          >
            <FileText className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Multi-File Support</h4>
            <p className="text-gray-400">Upload PDFs, Word docs, or text files and get instant, cross-document insights.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-center"
          >
            <Zap className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Fast & Accurate</h4>
            <p className="text-gray-400">Optimized for speed and accuracy so you get meaningful results in seconds.</p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-32 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">About the Product</h3>
        <p className="text-gray-300 leading-relaxed">
          RAGGenie uses cutting-edge retrieval-augmented generation to connect your documents with advanced language models. Instead of relying on
          pre-trained knowledge alone, it fetches real data from your uploaded content — giving you answers that are both accurate and grounded in
          your own files. Perfect for students, researchers, and professionals who want clarity without the chaos.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-10 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} RAGGenie. All rights reserved.
      </footer>
    </main>
  );
}
