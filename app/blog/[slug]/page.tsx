import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "@/lib/blog";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | FIX YOUR BODY`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.fixyourbody.co.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main style={{ background: "#080f1d", minHeight: "100vh" }}>
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm mb-8 hover:opacity-80 transition-opacity" style={{ color: "#00d4aa" }}>
          ← Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,212,170,0.10)", color: "#00d4aa" }}
          >
            {post.category}
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>{post.date}</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>· {post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.08)" }} />

        {/* Content */}
        <div className="space-y-5">
          {post.sections.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2 key={i} className="text-xl font-black text-white mt-8">
                  {section.text}
                </h2>
              );
            }
            if (section.type === "list") {
              return (
                <ul key={i} className="space-y-2 pl-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#00d4aa" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {section.text}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.20)" }}
        >
          <p className="font-black text-white text-lg mb-1">Ready to Fix Your Body?</p>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.50)" }}>
            Get a personalised plan built around your goals.
          </p>
          <Link
            href="/#plans"
            className="inline-block px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
            style={{ background: "#00d4aa", color: "#080f1d" }}
          >
            View Plans →
          </Link>
        </div>
      </div>
    </main>
  );
}
