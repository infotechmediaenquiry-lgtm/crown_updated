"use client";

import { useState } from "react";
import Link from "next/link";
import "../product.css";

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
  { id: 4,  name: 'Disposable Coverall',            image: '/assests/img/disposable-coverall-600x630.jpg' },
  { id: 5,  name: 'Disposable Face Mask',           image: '/assests/img/disposable-facemask-600x630.jpg' },
  { id: 39, name: 'Disposable Surgeon Cap',         image: '/assests/img/Disposable-Surgeon-Cap-600x630.jpg' },
  { id: 40, name: 'Disposable Surgeons Gown',       image: '/assests/img/Disposable-Surgeon-Gown-600x630.jpg' },
  { id: 42, name: 'Disposable Wraparound Gown SMS', image: '/assests/img/wraparound-gown-sms-1-600x630.jpg' },
  { id: 13, name: 'Disposable Lab Coat',            image: '/assests/img/lab-coat.jpg' },
  { id: 14, name: 'Disposable Pant Shirt',          image: '/assests/img/disposable-pant-shirt-1-600x630.jpg' },
];

export default function DisposableApronPage() {
  const relatedProducts = RELATED_PRODUCTS;

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
              Disposable Apron<br />
              <em>Manufacturer &amp; Supplier in India</em>
            </h1>
            <p className="hero-desc">
              Crown Healthcare Disposables delivers premium polythene and non-woven aprons for hospitals, food processing, laboratories, and industrial applications — in bulk, on time.
            </p>
            <div className="hero-btns">
              <a href="#products" className="btn-primary">Explore Products →</a>
              <a href="#contact" className="btn-outline">Request Bulk Quote</a>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/assests/img/disposable-apron-1-600x630.jpg" alt="Disposable Apron" className="hero-img" />
          </div>
        </div>
      </header>

      {/* ── INTRO STRIP ── */}
      <div className="intro-strip">
        <div className="intro-inner">
          {["Bulk Supply Available", "PE & Non-Woven Materials", "Custom Sizes on Request", "Pan-India Delivery"].map(txt => (
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
            <h2 className="overview-heading">Disposable Aprons Built for Demanding Environments</h2>
            <p className="overview-text">
              Crown Healthcare Disposables is a leading disposable apron manufacturer in India, producing premium-grade polythene and non-woven aprons for medical and industrial settings.
            </p>
            <p className="overview-text-last">
              Our aprons provide effective barrier protection while maintaining ease of use and cost efficiency — whether you need full liquid resistance for food processing or soft breathability for clinical staff.
            </p>
          </div>
          <div className="stats-box">
            {[
              { num: "2+", label: "Apron Types" },
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
          <h2 className="section-heading">Types of Disposable Aprons</h2>
          <div className="two-col">
            <div className="product-card card-hover">
              <div className="product-card-header">
                <span className="product-card-icon">💧</span>
                <h3 className="product-card-title">Polythene Disposable Apron</h3>
                <p className="product-card-sub">PE / LDPE · Waterproof · Industrial Grade</p>
              </div>
              <div className="product-card-body">
                <p className="product-card-desc">Manufactured using high-quality PE and LDPE materials, these aprons are waterproof and highly resistant to liquids and contaminants. Widely used in food processing units, cleaning operations, and industrial environments where spill protection is essential.</p>
                <ul className="product-card-list">
                  <li>Fully waterproof barrier</li>
                  <li>Lightweight &amp; single-use</li>
                  <li>Cost-effective for bulk use</li>
                  <li>Food &amp; industrial safe</li>
                </ul>
              </div>
            </div>
            <div className="product-card card-hover">
              <div className="product-card-header">
                <span className="product-card-icon">🌿</span>
                <h3 className="product-card-title">Non-Woven Disposable Apron</h3>
                <p className="product-card-sub">Non-Woven Fabric · Breathable · Medical Grade</p>
              </div>
              <div className="product-card-body">
                <p className="product-card-desc">Designed for enhanced comfort and breathability, these aprons are ideal for medical and healthcare environments. Commonly used in hospitals, clinics, and laboratories where prolonged wear and comfort matter most.</p>
                <ul className="product-card-list">
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

      {/* ── COMPARISON TABLE ── */}
      <section className="table-section">
        <div className="table-inner">
          <p className="section-label">Side-by-Side</p>
          <h2 className="table-heading">Polythene vs Non-Woven</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Feature</th><th>Polythene Apron</th><th>Non-Woven Apron</th></tr></thead>
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
          <h2 className="section-heading">Applications</h2>
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
          <h2 className="features-heading">Features of Our Disposable Aprons</h2>
          <div className="three-col">
            {[
              { icon: "🛡️", title: "Reliable Protection", desc: "Effective barrier against liquids, contaminants, and spills in any environment." },
              { icon: "⚖️", title: "Lightweight Design", desc: "Easy to wear and dispose of, maintaining high hygiene without added burden." },
              { icon: "💰", title: "Cost-Effective", desc: "Optimised for single-use bulk applications without compromising on quality." },
              { icon: "🌬️", title: "Breathable Options", desc: "Non-woven variants provide superior airflow for prolonged clinical wear." },
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
            <h2 className="supplier-heading">Your Trusted Disposable Apron Supplier</h2>
            <p className="supplier-text">Crown Healthcare Disposables specializes in bulk manufacturing and supply of high-quality aprons for various industries across India. We offer customized solutions based on material, size, and application needs, making us a preferred manufacturer and exporter.</p>
            <p className="supplier-text-last">Competitive pricing, consistent quality, and efficient delivery are the pillars of our supply commitment.</p>
          </div>
          <div id="contact" className="contact-card">
            <h3 className="contact-title">Request a Bulk Quote</h3>
            <div className="form-fields">
              {["Your Name", "Company / Organisation", "Email Address", "Phone Number"].map(ph => (
                <input key={ph} placeholder={ph} className="form-input" />
              ))}
              <select className="form-select">
                <option>Select Apron Type</option>
                <option>Polythene Disposable Apron</option>
                <option>Non-Woven Disposable Apron</option>
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
      {relatedProducts.length > 0 && (
        <section className="related-section">
          <div className="related-inner">
            <h2 className="related-heading">Related Products</h2>
            <div className="related-scroll">
              {relatedProducts.map((product) => (
                <Link key={product.id} href={product.id === 2 ? `/disposable-section/disposable-bouffant-cap` : `/disposable-section/${product.id}`} className="related-card-link">
                  <div className="related-card">
                    <div className="related-card-img">
                      <img src={product.image} alt={product.name} className="related-img"/>
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
      )}
    </>
  );
}

