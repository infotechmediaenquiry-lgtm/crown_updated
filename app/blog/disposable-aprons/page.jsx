"use client";

import { useState } from "react";

// ─── data ────────────────────────────────────────────────────────────────────

const COMPARISON = [
  { feature: "Material", poly: "PE / LDPE Plastic", nonwoven: "Non-Woven Fabric" },
  { feature: "Waterproof", poly: "Yes", nonwoven: "Limited" },
  { feature: "Comfort", poly: "Moderate", nonwoven: "High" },
  { feature: "Breathability", poly: "Low", nonwoven: "High" },
  { feature: "Applications", poly: "Food & Industrial Use", nonwoven: "Medical & Healthcare" },
];

const SPECS = [
  { type: "Polythene Apron", material: "PE / LDPE", size: "Standard / Custom", thickness: "Customizable", usage: "Food, Industrial" },
  { type: "Non-Woven Apron", material: "Non-Woven Fabric", size: "Standard / Custom", thickness: "Varies", usage: "Medical, Hospital" },
];

const FAQS = [
  { q: "What is a disposable apron used for?", a: "Disposable aprons are used to protect clothing and maintain hygiene in environments such as hospitals, food processing units, laboratories, and industrial workplaces." },
  { q: "What is the difference between polythene and non-woven disposable aprons?", a: "Polythene aprons are waterproof and suitable for industrial and food applications, while non-woven aprons are breathable and ideal for medical and healthcare use." },
  { q: "Are disposable aprons waterproof?", a: "Polythene disposable aprons are fully waterproof, whereas non-woven aprons provide limited resistance to liquids." },
  { q: "Which disposable apron is best for hospitals?", a: "Non-woven disposable aprons are generally preferred in hospitals due to their comfort and breathability." },
  { q: "Do you supply disposable aprons in bulk?", a: "Yes, we are a bulk disposable apron manufacturer and supplier in India, catering to large-scale industrial and healthcare requirements." },
];

const APPLICATIONS = [
  { icon: "🏥", title: "Hospitals & Healthcare", desc: "Non-woven aprons preferred for comfort and breathability during extended use." },
  { icon: "🍽️", title: "Food Processing", desc: "Polythene aprons maintain hygiene and prevent contamination on the line." },
  { icon: "🔬", title: "Laboratories", desc: "Protection against spills and exposure to substances as core PPE." },
  { icon: "🏭", title: "Industrial Use", desc: "Robust barrier protection in heavy-duty environments and cleaning operations." },
];

// ─── inline styles ────────────────────────────────────────────────────────────

const styles = {
  "@import": `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');`,
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#F7F4EF",
    color: "#1A1A1A",
    minHeight: "100vh",
  },
};

// ─── components ──────────────────────────────────────────────────────────────

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        borderBottom: "1px solid #D4C9BB",
        padding: "1.25rem 0",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.95rem", margin: 0, color: "#1A1A1A" }}>{q}</p>
        <span style={{
          width: 28, height: 28, borderRadius: "50%", background: open ? "#2563eb" : "#E8E0D4",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          color: open ? "#fff" : "#2563eb", fontWeight: 700, fontSize: "1.1rem", transition: "all 0.25s",
        }}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <p style={{ margin: "0.75rem 0 0", color: "#5A5040", lineHeight: 1.7, fontSize: "0.9rem" }}>{a}</p>
      )}
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function DisposableApronPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #F7F4EF; }
        .fade-in { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-hover { transition: transform 0.25s, box-shadow 0.25s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(37,99,235,0.12) !important; }
        table { border-collapse: collapse; width: 100%; }
        th, td { padding: 0.85rem 1.1rem; text-align: left; }
        thead th { background: #2563eb; color: #fff; font-weight: 500; font-size: 0.85rem; letter-spacing: 0.04em; text-transform: uppercase; }
        tbody tr:nth-child(even) { background: #EDE8DF; }
        tbody tr { border-bottom: 1px solid #D4C9BB; font-size: 0.9rem; }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .hide-mobile { display: none !important; }
          .nav-inner { padding: 0 1rem !important; }
          .section { padding: 3rem 1.25rem !important; }
          table { font-size: 0.8rem; }
          th, td { padding: 0.6rem 0.7rem; }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────── */}
      <header style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)", color: "#fff", padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", border: "2px solid rgba(168,213,181,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", border: "2px solid rgba(191,219,254,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: "30%", width: 240, height: 240, borderRadius: "50%", background: "rgba(191,219,254,0.05)", pointerEvents: "none" }} />

        <div className="fade-in" style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <span style={{ display: "inline-block", background: "rgba(191,219,254,0.2)", border: "1px solid rgba(191,219,254,0.4)", color: "#bfdbfe", padding: "0.3rem 0.9rem", borderRadius: 20, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Trusted Manufacturer &amp; Supplier · India
          </span>
          <h1 className="hero-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.6rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: 700 }}>
            Disposable Apron<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#bfdbfe" }}>Manufacturer &amp; Supplier in India</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 580, lineHeight: 1.75, fontSize: "1rem", marginBottom: "2.5rem" }}>
            Crown Healthcare Disposables delivers premium polythene and non-woven aprons for hospitals, food processing, laboratories, and industrial applications — in bulk, on time.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#products" style={{ background: "#bfdbfe", color: "#1A1A1A", padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
              Explore Products →
            </a>
            <a href="#contact" style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: 8, fontWeight: 400, textDecoration: "none", fontSize: "0.9rem" }}>
              Request Bulk Quote
            </a>
          </div>
        </div>
      </header>

      {/* ── INTRO STRIP ─────────────────────────────────────── */}
      <div style={{ background: "#2563eb", color: "#bfdbfe", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          {["Bulk Supply Available", "PE & Non-Woven Materials", "Custom Sizes on Request", "Pan-India Delivery"].map(txt => (
            <span key={txt} style={{ fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#60a5fa" }}>✔</span> {txt}
            </span>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ────────────────────────────────────────── */}
      <section id="overview" className="section" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="two-col">
          <div>
            <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>About Our Products</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, lineHeight: 1.25, marginBottom: "1.25rem" }}>
              Disposable Aprons Built for Demanding Environments
            </h2>
            <p style={{ color: "#5A5040", lineHeight: 1.8, marginBottom: "1rem" }}>
              Crown Healthcare Disposables is a leading <a href="https://www.crownhealthcaredisposables.com/disposable-apron" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline", textUnderlineOffset: "3px" }}>disposable apron manufacturer in India</a>, producing premium-grade polythene and non-woven aprons for medical and industrial settings. Our focus on bulk production, consistent quality, and timely supply meets growing market demand nationwide.
            </p>
            <p style={{ color: "#5A5040", lineHeight: 1.8 }}>
              Our aprons provide effective barrier protection while maintaining ease of use and cost efficiency — whether you need full liquid resistance for food processing or soft breathability for clinical staff.
            </p>
          </div>
          <div style={{ background: "#EDE8DF", borderRadius: 16, padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {[
              { num: "2+", label: "Apron Types" },
              { num: "Bulk", label: "Supply Capacity" },
              { num: "PAN", label: "India Coverage" },
              { num: "ISO", label: "Grade Materials" },
            ].map(({ num, label }) => (
              <div key={label} style={{ background: "#fff", borderRadius: 10, padding: "1.25rem", textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, color: "#2563eb", marginBottom: 2 }}>{num}</p>
                <p style={{ fontSize: "0.78rem", color: "#8A7A6A", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────── */}
      <section id="products" style={{ background: "#EDE8DF", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>Product Range</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "2.5rem" }}>Types of Disposable Aprons</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="two-col">
            {/* Polythene */}
            <div className="card-hover" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)", padding: "2rem", color: "#fff" }}>
                <span style={{ fontSize: "2.2rem" }}>💧</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginTop: "0.75rem" }}>Polythene Disposable Apron</h3>
                <p style={{ color: "#bfdbfe", fontSize: "0.8rem", marginTop: 4 }}>PE / LDPE · Waterproof · Industrial Grade</p>
              </div>
              <div style={{ padding: "1.75rem" }}>
                <p style={{ color: "#5A5040", lineHeight: 1.75, fontSize: "0.92rem" }}>
                  Manufactured using high-quality PE and LDPE materials, these aprons are waterproof and highly resistant to liquids and contaminants. Widely used in food processing units, cleaning operations, and industrial environments where spill protection is essential.
                </p>
                <ul style={{ marginTop: "1.25rem", paddingLeft: "1.1rem", color: "#2563eb", fontSize: "0.88rem", lineHeight: 2 }}>
                  <li>Fully waterproof barrier</li>
                  <li>Lightweight &amp; single-use</li>
                  <li>Cost-effective for bulk use</li>
                  <li>Food &amp; industrial safe</li>
                </ul>
              </div>
            </div>

            {/* Non-Woven */}
            <div className="card-hover" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)", padding: "2rem", color: "#fff" }}>
                <span style={{ fontSize: "2.2rem" }}>🌿</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginTop: "0.75rem" }}>Non-Woven Disposable Apron</h3>
                <p style={{ color: "#bfdbfe", fontSize: "0.8rem", marginTop: 4 }}>Non-Woven Fabric · Breathable · Medical Grade</p>
              </div>
              <div style={{ padding: "1.75rem" }}>
                <p style={{ color: "#5A5040", lineHeight: 1.75, fontSize: "0.92rem" }}>
                  Designed for enhanced comfort and breathability, these aprons are ideal for medical and healthcare environments. Commonly used in hospitals, clinics, and laboratories where prolonged wear and comfort matter most.
                </p>
                <ul style={{ marginTop: "1.25rem", paddingLeft: "1.1rem", color: "#2563eb", fontSize: "0.88rem", lineHeight: 2 }}>
                  <li>Superior breathability</li>
                  <li>Comfortable for extended wear</li>
                  <li>Meets healthcare hygiene standards</li>
                  <li>Soft non-woven construction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>Side-by-Side</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "2rem" }}>Polythene vs Non-Woven</h2>
          <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Polythene Apron</th>
                  <th>Non-Woven Apron</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(row => (
                  <tr key={row.feature}>
                    <td style={{ fontWeight: 500 }}>{row.feature}</td>
                    <td>{row.poly}</td>
                    <td>{row.nonwoven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS ───────────────────────────────────── */}
      <section id="specifications" style={{ background: "#EDE8DF", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>Technical Details</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "2rem" }}>Specifications</h2>
          <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Material</th>
                  <th>Size</th>
                  <th>Thickness</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map(row => (
                  <tr key={row.type}>
                    <td style={{ fontWeight: 500 }}>{row.type}</td>
                    <td>{row.material}</td>
                    <td>{row.size}</td>
                    <td>{row.thickness}</td>
                    <td>{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ─────────────────────────────────────── */}
      <section id="applications" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>Where We Serve</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "2.5rem" }}>Applications</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="four-col">
            {APPLICATIONS.map(app => (
              <div key={app.title} className="card-hover" style={{ background: "#fff", borderRadius: 14, padding: "1.75rem", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", borderTop: "3px solid #2563eb" }}>
                <span style={{ fontSize: "2rem" }}>{app.icon}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", margin: "0.75rem 0 0.5rem" }}>{app.title}</h3>
                <p style={{ color: "#5A5040", fontSize: "0.87rem", lineHeight: 1.65 }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)", color: "#fff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#bfdbfe", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>Why Choose Us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "2.5rem" }}>Features of Our Disposable Aprons</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="four-col">
            {[
              { icon: "🛡️", title: "Reliable Protection", desc: "Effective barrier against liquids, contaminants, and spills in any environment." },
              { icon: "⚖️", title: "Lightweight Design", desc: "Easy to wear and dispose of, maintaining high hygiene without added burden." },
              { icon: "💰", title: "Cost-Effective", desc: "Optimised for single-use bulk applications without compromising on quality." },
              { icon: "🌬️", title: "Breathable Options", desc: "Non-woven variants provide superior airflow for prolonged clinical wear." },
              { icon: "📐", title: "Custom Sizing", desc: "Standard and custom sizes available based on application requirements." },
              { icon: "🚚", title: "Bulk Supply", desc: "Pan-India delivery with consistent quality for large-scale orders." },
            ].map(f => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "1.5rem", border: "1px solid rgba(191,219,254,0.2)" }}>
                <span style={{ fontSize: "1.75rem" }}>{f.icon}</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: "0.75rem 0 0.4rem" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLIER CTA ──────────────────────────────────────── */}
      <section style={{ background: "#EDE8DF", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="two-col">
          <div>
            <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>Supplier in India</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1.25rem" }}>
              Your Trusted Disposable Apron Supplier
            </h2>
            <p style={{ color: "#5A5040", lineHeight: 1.8, marginBottom: "1rem" }}>
              Crown Healthcare Disposables specializes in bulk manufacturing and supply of high-quality aprons for various industries across India. We offer customized solutions based on material, size, and application needs, making us a preferred manufacturer and exporter.
            </p>
            <p style={{ color: "#5A5040", lineHeight: 1.8 }}>
              Competitive pricing, consistent quality, and efficient delivery are the pillars of our supply commitment.
            </p>
          </div>
          <div id="contact" style={{ background: "#fff", borderRadius: 16, padding: "2rem", boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: "1.5rem" }}>Request a Bulk Quote</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Your Name", "Company / Organisation", "Email Address", "Phone Number"].map(ph => (
                <input key={ph} placeholder={ph} style={{ border: "1px solid #D4C9BB", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", background: "#F7F4EF", color: "#1A1A1A", fontFamily: "'DM Sans', sans-serif" }} />
              ))}
              <select style={{ border: "1px solid #D4C9BB", borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.9rem", background: "#F7F4EF", color: "#5A5040", fontFamily: "'DM Sans', sans-serif" }}>
                <option>Select Apron Type</option>
                <option>Polythene Disposable Apron</option>
                <option>Non-Woven Disposable Apron</option>
                <option>Both Types</option>
              </select>
              <button style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem", fontSize: "0.92rem", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.02em" }}>
                Submit Enquiry →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ─────────────────────────────────────────────── */}
      <section id="faqs" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ color: "#2563eb", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem", textAlign: "center" }}>Got Questions?</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "2.5rem", textAlign: "center" }}>Frequently Asked Questions</h2>
          <div>
            {FAQS.map(faq => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>


    </>
  );
}