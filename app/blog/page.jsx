"use client";

import { useState } from "react";

const BLOGS = [
  {
    id: "/disposable-aprons",
    category: "Healthcare",
    title: "Disposable Apron Manufacturer & Supplier",
    description: "Our aprons provide effective barrier protection while maintaining ease of use and cost efficiency — whether you need full liquid resistance for food processing or soft breathability for clinical staff.",
    image: "/assests/img/Aprons-Disposable.webp",
    date: "April 18, 2025",
    readTime: "5 min read",
    tag: "Non-Woven",
  },
  // {
  //   id: 2,
  //   category: "Food Industry",
  //   title: "Polythene Aprons in Food Processing: Safety & Compliance",
  //   description: "Food contamination is a serious concern. Learn why polythene disposable aprons are the industry standard for food processing plants and how they help meet FSSAI hygiene compliance requirements.",
  //   image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  //   date: "April 10, 2025",
  //   readTime: "4 min read",
  //   tag: "Polythene",
  // },
  // {
  //   id: 3,
  //   category: "Laboratory",
  //   title: "PPE Essentials: Choosing the Right Apron for Lab Use",
  //   description: "Laboratories deal with chemicals, biohazards, and sensitive specimens daily. This guide helps lab managers choose between polythene and non-woven aprons based on risk level and application.",
  //   image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  //   date: "March 28, 2025",
  //   readTime: "6 min read",
  //   tag: "Laboratory",
  // },
  // {
  //   id: 4,
  //   category: "Manufacturing",
  //   title: "Bulk Disposable Apron Supply: What to Look for in a Manufacturer",
  //   description: "Sourcing protective wear at scale requires more than just low pricing. Explore the key quality, compliance, and delivery factors you must evaluate when choosing a disposable apron manufacturer in India.",
  //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  //   date: "March 15, 2025",
  //   readTime: "5 min read",
  //   tag: "Bulk Supply",
  // },
  // {
  //   id: 5,
  //   category: "Product Guide",
  //   title: "Non-Woven vs Polythene Aprons: A Complete Comparison",
  //   description: "Not sure which apron type suits your operations? We break down the material properties, comfort levels, waterproofing, breathability, and ideal use cases side-by-side to help you decide.",
  //   image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  //   date: "March 5, 2025",
  //   readTime: "7 min read",
  //   tag: "Comparison",
  // },
  // {
  //   id: 6,
  //   category: "Industry Trends",
  //   title: "The Growing Demand for Disposable Protective Wear in India",
  //   description: "India's healthcare and food sectors are expanding rapidly. Understand the market drivers behind the surge in demand for disposable aprons and other single-use protective equipment across industries.",
  //   image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  //   date: "February 22, 2025",
  //   readTime: "4 min read",
  //   tag: "Trends",
  // },
];

const TAG_COLORS = {
  "Non-Woven":  { bg: "#dbeafe", color: "#1d4ed8" },
  "Polythene":  { bg: "#dcfce7", color: "#15803d" },
  "Laboratory": { bg: "#fef9c3", color: "#a16207" },
  "Bulk Supply":{ bg: "#ede9fe", color: "#6d28d9" },
  "Comparison": { bg: "#ffedd5", color: "#c2410c" },
  "Trends":     { bg: "#fce7f3", color: "#be185d" },
};

export default function BlogPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Literata:ital,wght@0,300;0,400;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .blog-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(37,99,235,0.13);
        }

        .blog-img-wrap {
          overflow: hidden;
          height: 210px;
          position: relative;
        }
        .blog-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-img-wrap img {
          transform: scale(1.06);
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #2563eb;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          margin-top: 1rem;
          transition: gap 0.2s ease;
        }
        .read-more:hover { gap: 10px; }

        .hero-badge {
          display: inline-block;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .blog-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.2rem !important; }
        }
      `}</style>

      <div style={{ background: "#f8fafc", minHeight: "100vh", fontFamily: "'Literata', Georgia, serif" }}>

        {/* ── HERO ── */}
        <div style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)",
          padding: "4rem 2rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* bg pattern */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 60, background: "#f8fafc", clipPath: "ellipse(55% 100% at 50% 100%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div className="hero-badge">Crown Healthcare · Knowledge Hub</div>
            <h1 className="hero-title" style={{
              fontSize: "3rem",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}>
              Insights on Disposable<br />
              <span style={{ color: "#bfdbfe" }}>Protective Wear</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 520, margin: "0 auto", fontStyle: "italic" }}>
              Expert guides, product comparisons, and industry trends — everything you need to make informed decisions about disposable aprons.
            </p>
          </div>
        </div>

        {/* ── GRID ── */}
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "3.5rem 1.5rem 5rem" }}>

          {/* section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2563eb" }}>Latest Articles</span>
            <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.72rem", color: "#94a3b8", letterSpacing: "0.06em" }}>6 posts</span>
          </div>

          <div className="blog-grid">
            {BLOGS.map((blog) => {
              const tag = TAG_COLORS[blog.tag] || { bg: "#f1f5f9", color: "#475569" };
              return (
                <article key={blog.id} className="blog-card">
                  {/* image */}
                  <div className="blog-img-wrap">
                    <img src={blog.image} alt={blog.title} loading="lazy" />
                    {/* category overlay */}
                    <span style={{
                      position: "absolute", top: 14, left: 14,
                      background: "rgba(30,58,138,0.85)",
                      backdropFilter: "blur(6px)",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.75rem",
                      borderRadius: 999,
                    }}>
                      {blog.category}
                    </span>
                  </div>

                  {/* body */}
                  <div style={{ padding: "1.5rem" }}>
                    {/* meta */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem", flexWrap: "wrap" }}>
                      <span style={{
                        background: tag.bg, color: tag.color,
                        fontSize: "0.7rem", fontWeight: 600,
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: "0.05em",
                        padding: "0.2rem 0.65rem",
                        borderRadius: 999,
                      }}>
                        {blog.tag}
                      </span>
                      <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>·</span>
                      <span style={{ color: "#94a3b8", fontSize: "0.75rem", fontFamily: "'Syne', sans-serif" }}>{blog.readTime}</span>
                    </div>

                    {/* title */}
                    <h2 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.4,
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.01em",
                    }}>
                      {blog.title}
                    </h2>

                    {/* description */}
                    <p style={{
                      color: "#64748b",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {blog.description}
                    </p>

                    {/* divider */}
                    <div style={{ height: 1, background: "#f1f5f9", margin: "1rem 0" }} />

                    {/* footer */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontFamily: "'Syne', sans-serif" }}>{blog.date}</span>
                      <a href={`/blog/${blog.id}`} className="read-more">
                        Read More
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}