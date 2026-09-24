"use client";

import { useState } from "react";
import Link from "next/link";
import "../product.css";

const COMPARISON = [
  { feature: "Material", poly: "Non-Woven Fabric", nonwoven: "Polyester / Nylon Net" },
  { feature: "Waterproof", poly: "Limited", nonwoven: "No" },
  { feature: "Comfort", poly: "High", nonwoven: "Moderate" },
  { feature: "Breathability", poly: "High", nonwoven: "High" },
  { feature: "Applications", poly: "Medical & Food Use", nonwoven: "Industrial & Lab Use" },
];

const SPECS = [
  { type: "Non-Woven Bouffant Cap", material: "Non-Woven Fabric", size: "Standard / Custom", thickness: "Varies", usage: "Medical, Food, Hospital" },
  { type: "Net Bouffant Cap", material: "Polyester / Nylon", size: "Standard / Custom", thickness: "Varies", usage: "Industrial, Laboratory" },
];

const FAQS = [
  { q: "What is a disposable bouffant cap used for?", a: "Disposable bouffant caps are used to cover and contain hair in hygiene-sensitive environments such as hospitals, food processing units, laboratories, and cleanrooms to prevent contamination." },
  { q: "What materials are used in disposable bouffant caps?", a: "Disposable bouffant caps are commonly made from non-woven fabric for medical and food use, and polyester or nylon net for industrial and laboratory applications." },
  { q: "Are disposable bouffant caps reusable?", a: "No, disposable bouffant caps are designed for single-use only to maintain hygiene standards and prevent cross-contamination." },
  { q: "Which bouffant cap is best for hospitals?", a: "Non-woven disposable bouffant caps are generally preferred in hospitals due to their comfort, breathability, and compliance with hygiene standards." },
  { q: "Do you supply disposable bouffant caps in bulk?", a: "Yes, we are a bulk disposable bouffant cap manufacturer and supplier in India, catering to large-scale industrial and healthcare requirements." },
];

const APPLICATIONS = [
  { icon: "🏥", title: "Hospitals & Healthcare", desc: "Non-woven bouffant caps preferred for hygiene compliance and comfort during extended use." },
  { icon: "🍽️", title: "Food Processing", desc: "Prevents hair contamination and maintains hygiene standards on the production line." },
  { icon: "🔬", title: "Laboratories", desc: "Essential PPE for cleanrooms and labs to prevent contamination from hair particles." },
  { icon: "🏭", title: "Industrial Use", desc: "Net caps widely used in industrial environments for hair containment and safety." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-row">
        <p className="faq-question">{q}</p>
        <span className={`faq-toggle ${open ? "faq-toggle-open" : "faq-toggle-closed"}`}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

const RELATED_PRODUCTS = [
  { id: 1,  name: "Disposable Apron",              image: "/assests/img/disposable-apron-1-600x630.jpg" },
  { id: 4,  name: "Disposable Coverall",           image: "/assests/img/disposable-coverall-600x630.jpg" },
  { id: 5,  name: "Disposable Face Mask",          image: "/assests/img/disposable-facemask-600x630.jpg" },
  { id: 39, name: "Disposable Surgeon Cap",        image: "/assests/img/Disposable-Surgeon-Cap-600x630.jpg" },
  { id: 40, name: "Disposable Surgeons Gown",      image: "/assests/img/Disposable-Surgeon-Gown-600x630.jpg" },
  { id: 42, name: "Disposable Wraparound Gown SMS",image: "/assests/img/wraparound-gown-sms-1-600x630.jpg" },
  { id: 13, name: "Disposable Lab Coat",           image: "/assests/img/lab-coat.jpg" },
  { id: 14, name: "Disposable Pant Shirt",         image: "/assests/img/disposable-pant-shirt-1-600x630.jpg" },
];

export default function DisposableBouffantCapPage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-circle-1" />
        <div className="hero-circle-2" />
        <div className="hero-circle-3" />
        <div className="hero-inner fade-in">
          <div className="hero-content">
            <span className="hero-badge">Trusted Manufacturer &amp; Supplier · India</span>
            <h1 className="hero-title">
              Disposable Bouffant Cap<br />
              <em>Manufacturer &amp; Supplier in India</em>
            </h1>
            <p className="hero-desc">
              Crown Healthcare Disposables delivers premium non-woven and net bouffant caps for hospitals, food processing, laboratories, and industrial applications — in bulk, on time.
            </p>
            <div className="hero-btns">
              <Link href="/disposable-section" className="btn-primary">Explore Products →</Link>
              <Link href="/contact" className="btn-outline">Request Bulk Quote</Link>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/assests/img/Bouffant-cap-1.jpg" alt="Disposable Bouffant Cap" className="hero-img" />
          </div>
        </div>
      </header>

      {/* ── INTRO STRIP ── */}
      <div className="intro-strip">
        <div className="intro-inner">
          {["Bulk Supply Available", "Non-Woven & Net Materials", "Custom Sizes on Request", "Pan-India Delivery"].map(txt => (
            <span key={txt} className="intro-item">
              <span className="intro-check">✔</span> {txt}
            </span>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="section">
        <div className="two-col">
          <div>
            <p className="overview-label">About Our Products</p>
            <h2 className="overview-heading">Disposable Bouffant Cap</h2>
            <p className="overview-text">
              Crown Healthcare Disposables is a leading disposable bouffant cap manufacturer and supplier in India, offering high-quality protective caps designed for hygiene, safety, and comfort across medical and industrial environments. Our disposable bouffant caps are manufactured using premium-grade materials, including non-woven fabric and polyester net, ensuring reliable hair containment for various applications.
            </p>
            <p className="overview-text-last">
              As a trusted disposable bouffant cap manufacturer, we focus on bulk production, consistent quality, and timely supply to meet the growing demand from hospitals, food processing industries, laboratories, and healthcare facilities. Our products are designed to provide effective hair containment while maintaining ease of use and cost efficiency.
            </p>
          </div>
          <div className="stats-box">
            {[
              { num: "2+", label: "Cap Types" },
              { num: "Bulk", label: "Supply Capacity" },
              { num: "PAN", label: "India Coverage" },
              { num: "ISO", label: "Grade Materials" },
            ].map(({ num, label }) => (
              <div key={label} className="stat-card">
                <p className="stat-num">{num}</p>
                <p className="stat-label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="products-section">
        <div className="products-inner">
          <p className="section-label">Product Range</p>
          <h2 className="section-heading">Types of Disposable Bouffant Caps</h2>
          <div className="two-col">
            <div className="product-card card-hover">
              <div className="product-card-header">
                <span className="product-card-icon">🧢</span>
                <h3 className="product-card-title">Non-Woven Bouffant Cap</h3>
                <p className="product-card-sub">Non-Woven Fabric · Breathable · Medical Grade</p>
              </div>
              <div className="product-card-body">
                <p className="product-card-desc">Non-woven bouffant caps are manufactured using high-quality non-woven fabric, making them comfortable and breathable for extended wear. These caps are widely used in hospitals, food processing units, and cleanrooms where hygiene and hair containment are essential.</p>
                <ul className="product-card-list">
                  <li>Comfortable &amp; breathable</li>
                  <li>Lightweight &amp; single-use</li>
                  <li>Cost-effective for bulk use</li>
                  <li>Medical &amp; food safe</li>
                </ul>
              </div>
            </div>
            <div className="product-card card-hover">
              <div className="product-card-header">
                <span className="product-card-icon">🔵</span>
                <h3 className="product-card-title">Net Bouffant Cap</h3>
                <p className="product-card-sub">Polyester / Nylon Net · Lightweight · Industrial Grade</p>
              </div>
              <div className="product-card-body">
                <p className="product-card-desc">Net bouffant caps are designed for industrial and laboratory environments where lightweight hair containment is required. Made from polyester or nylon net, these caps offer excellent breathability and are suitable for environments where full coverage is not mandatory.</p>
                <ul className="product-card-list">
                  <li>Highly breathable net construction</li>
                  <li>Lightweight &amp; comfortable</li>
                  <li>Suitable for industrial use</li>
                  <li>Available in bulk quantities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="table-section">
        <div className="table-inner">
          <p className="section-label">Side-by-Side</p>
          <h2 className="table-heading">Difference Between Non-Woven and Net Bouffant Caps</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Feature</th><th>Non-Woven Cap</th><th>Net Cap</th></tr></thead>
              <tbody>
                {COMPARISON.map(row => (
                  <tr key={row.feature}>
                    <td className="td-bold">{row.feature}</td>
                    <td>{row.poly}</td>
                    <td>{row.nonwoven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS ── */}
      <section id="specifications" className="table-section-bg">
        <div className="table-inner">
          <p className="section-label">Technical Details</p>
          <h2 className="table-heading">Specifications</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Type</th><th>Material</th><th>Size</th><th>Thickness</th><th>Usage</th></tr></thead>
              <tbody>
                {SPECS.map(row => (
                  <tr key={row.type}>
                    <td className="td-bold">{row.type}</td>
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

      {/* ── APPLICATIONS ── */}
      <section id="applications" className="applications-section">
        <div className="applications-inner">
          <p className="section-label">Where We Serve</p>
          <h2 className="section-heading">Applications of Disposable Bouffant Caps</h2>
          <p className="overview-text" style={{maxWidth:"1100px",margin:"0 auto 2rem"}}>
            Disposable bouffant caps are widely used across multiple industries due to their hygienic and protective properties. In hospitals and healthcare facilities, non-woven disposable bouffant caps are preferred for their comfort and breathability during extended use. In the food processing and packaging industry, bouffant caps are commonly used to prevent hair contamination and maintain hygiene standards. Laboratories and pharmaceutical industries also rely on disposable bouffant caps for protection against contamination, making them an essential part of personal protective equipment.
          </p>
          <div className="four-col">
            {APPLICATIONS.map(app => (
              <div key={app.title} className="app-card card-hover">
                <span className="app-icon">{app.icon}</span>
                <h3 className="app-title">{app.title}</h3>
                <p className="app-desc">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="features-inner">
          <p className="features-label">Why Choose Us</p>
          <h2 className="features-heading">Features of Disposable Bouffant Caps</h2>
          <p style={{color:"rgba(255,255,255,0.75)",maxWidth:"800px",lineHeight:"1.8",marginBottom:"2.5rem",fontSize:"0.95rem"}}>
            Our disposable bouffant caps are designed to provide reliable hair containment and convenience in demanding environments. These caps are lightweight, easy to wear, and suitable for single-use applications, ensuring high hygiene standards. Non-woven caps offer excellent comfort and breathability, while net caps provide superior airflow for industrial use, making them ideal for a wide range of applications.
          </p>
          <div className="three-col">
            {[
              { icon: "🛡️", title: "Reliable Hair Containment", desc: "Effective barrier to prevent hair contamination in hygiene-sensitive environments." },
              { icon: "⚖️", title: "Lightweight Design", desc: "Easy to wear and dispose of, maintaining high hygiene without added burden." },
              { icon: "💰", title: "Cost-Effective", desc: "Optimised for single-use bulk applications without compromising on quality." },
              { icon: "🌬️", title: "Breathable Options", desc: "Non-woven and net variants provide superior airflow for prolonged wear." },
              { icon: "📐", title: "Custom Sizing", desc: "Standard and custom sizes available based on application requirements." },
              { icon: "🚚", title: "Bulk Supply", desc: "Pan-India delivery with consistent quality for large-scale orders." },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLIER CTA ── */}
      <section className="supplier-section">
        <div className="supplier-inner">
          <div>
            <p className="supplier-label">Supplier in India</p>
            <h2 className="supplier-heading">Disposable Bouffant Cap Supplier in India</h2>
            <p className="supplier-text">As a trusted disposable bouffant cap supplier in India, Crown Healthcare Disposables specializes in bulk manufacturing and supply of high-quality caps for various industries. We cater to large-scale requirements with consistent product quality, competitive pricing, and efficient delivery.</p>
            <p className="supplier-text-last">Our manufacturing capabilities allow us to offer customized solutions based on material, size, and application needs, making us a preferred choice for businesses looking for a reliable disposable bouffant cap manufacturer and exporter.</p>
          </div>
          <div id="contact" className="contact-card">
            <h3 className="contact-title">Request a Bulk Quote</h3>
            <div className="form-fields">
              {["Your Name", "Company / Organisation", "Email Address", "Phone Number"].map(ph => (
                <input key={ph} placeholder={ph} className="form-input" />
              ))}
              <select className="form-select">
                <option>Select Cap Type</option>
                <option>Non-Woven Bouffant Cap</option>
                <option>Net Bouffant Cap</option>
                <option>Both Types</option>
              </select>
              <button className="form-btn">Submit Enquiry →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section id="faqs" className="faqs-section">
        <div className="faqs-inner">
          <p className="faqs-label">Got Questions?</p>
          <h2 className="faqs-heading">Frequently Asked Questions</h2>
          <div>{FAQS.map(faq => <FAQItem key={faq.q} {...faq} />)}</div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="related-section">
        <div className="related-inner">
          <h2 className="related-heading">Related Products</h2>
          <div className="related-scroll">
            {RELATED_PRODUCTS.map((product) => (
              <Link key={product.id} href={product.id === 1 ? `/disposable-section/disposable-aprons` : `/disposable-section/${product.id}`} className="related-card-link">
                <div className="related-card">
                  <div className="related-card-img">
                    <img src={product.image} alt={product.name} className="related-img" />
                  </div>
                  <div className="related-card-info">
                    <h3 className="related-card-name">{product.name}</h3>
                    <span className="related-card-btn">View More</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
