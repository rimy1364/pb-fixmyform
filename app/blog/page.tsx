import Link from "next/link";
import { posts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | FIX YOUR BODY — Fitness, Gut Health & Weight Loss Tips",
  description: "Expert tips on gut health, weight loss, and fitness from Prateek Bansal at FIX YOUR BODY. Real advice that actually works.",
};

export default function BlogPage() {
  return (
    <main style={{ background: "#080f1d", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.10)", color: "#00d4aa", border: "1px solid rgba(0,212,170,0.25)" }}
          >
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Fitness, Gut Health<br />& Real Advice
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.50)" }}>
            No fluff. No BS. Just what actually works — from a coach who&apos;s seen it all.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div
                className="rounded-2xl p-6 transition-all duration-200 group-hover:border-[rgba(0,212,170,0.40)]"
                style={{ background: "#0a1628", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,212,170,0.10)", color: "#00d4aa" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>{post.date}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>· {post.readTime}</span>
                </div>
                <h2 className="text-xl font-black text-white mb-2 group-hover:text-[#00d4aa] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {post.excerpt}
                </p>
                <div className="mt-4 text-sm font-bold" style={{ color: "#00d4aa" }}>
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
