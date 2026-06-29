import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogSection() {
  const latest = posts.slice(0, 3);

  return (
    <section className="pt-20 pb-14 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div
              className="inline-block mb-3"
              style={{
                padding: "4px 14px", borderRadius: "999px",
                border: "1px solid rgba(0,212,170,0.30)",
                background: "rgba(0,212,170,0.08)",
                color: "#00d4aa", fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}
            >
              Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="text-white">From the </span>
              <span style={{ color: "#00d4aa" }}>Coach&apos;s Desk</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-block text-sm font-bold hover:opacity-80 transition-opacity"
            style={{ color: "#00d4aa" }}
          >
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div
                className="rounded-2xl p-6 h-full flex flex-col transition-all duration-200 group-hover:border-[rgba(0,212,170,0.40)]"
                style={{ background: "#080f1d", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(0,212,170,0.10)", color: "#00d4aa" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>{post.readTime}</span>
                </div>
                <h3 className="font-black text-white text-base mb-2 leading-snug group-hover:text-[#00d4aa] transition-colors duration-200 flex-1">
                  {post.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {post.excerpt}
                </p>
                <span className="text-xs font-bold" style={{ color: "#00d4aa" }}>Read more →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-block text-sm font-bold"
            style={{ color: "#00d4aa" }}
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
