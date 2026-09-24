"use client";

import { useState } from "react";
import Link from "next/link";
import "../product.css";

const FAQS = [
  { q: "What is a disposable face mask used for?", a: "A disposable face mask is used during surgery and nursing to help reduce bacterial migration and support hygiene in healthcare environments." },
  { q: "Why are disposable face masks important in medical settings?", a: "They help minimize the movement of bacteria, which is important for maintaining safer and cleaner conditions during medical procedures and patient care." },
  { q: "When should a disposable face mask be worn?", a: "Disposable face masks are worn during surgical procedures and nursing activities where controlling bacterial spread is necessary." },
  { q: "How does a disposable face mask help maintain hygiene?", a: "It acts as a barrier that helps reduce bacterial movement, supporting infection control practices in healthcare environments." },
  { q: "Are disposable face masks part of protective equipment?", a: "Yes, disposable face masks are used as part of protective wear in medical settings to help maintain hygiene and reduce contamination." },
  { q: "Why is bacterial control important in healthcare environments?", a: "Controlling bacterial movement helps maintain cleaner conditions and supports safer outcomes during medical procedures and patient care." },
];

const APPLICATIONS = [
  { icon: "🏥", title: "Surgical Procedures", desc: "Used during surgery to help reduce bacterial migration and support controlled operating conditions." },
  { icon: "👩‍⚕️", title: "Nursing Care", desc: "Worn by healthcare professionals during nursing activities where hygiene and contamination control are important." },
  { icon: "🔬", title: "Medical Facilities", desc: "Supports protective practices in hospitals, clinics, laboratories, and other healthcare environments." },
  { icon: "🧼", title: "Infection Control", desc: "Helps maintain cleaner working conditions as part of routine protective and hygiene practices." },
];

const RELATED_PRODUCTS = [
  { id: 1, name: "Disposable Apron", href: "/disposable-section/disposable-aprons", image: "/assests/img/disposable-apron-1-600x630.jpg" },
  { id: 4, name: "Disposable Coverall", href: "/disposable-section/disposable-coverall", image: "/assests/img/disposable-coverall-600x630.jpg" },
  { id: 39, name: "Disposable Surgeon Cap", href: "/disposable-section/disposable-surgeon-cap", image: "/assests/img/Disposable-Surgeon-Cap-600x630.jpg" },
  { id: 40, name: "Disposable Surgeons Gown", href: "/disposable-section/disposable-surgeons-gown", image: "/assests/img/Disposable-Surgeon-Gown-600x630.jpg" },
  { id: 42, name: "Disposable Wraparound Gown SMS", href: "/disposable-section/disposable-wraparound-gown", image: "/assests/img/wraparound-gown-sms-1-600x630.jpg" },
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

export default function DisposableFaceMaskPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-circle-1" />
        <div className="hero-circle-2" />
        <div className="hero-circle-3" />
        <div className="hero-inner fade-in">
          <div className="hero-content">
            <span className="hero-badge">Trusted Manufacturer &amp; Supplier · India</span>
            <h1 className="hero-title">Disposable Face Mask<br /><em>Manufacturer in India</em></h1>
            <p className="hero-desc">Crown Healthcare Disposables is a trusted Disposable Face Mask Manufacturer in India offering high-quality masks for surgery, nursing, and healthcare hygiene. Reliable disposable face mask supplier for medical and protective applications.</p>
            <div className="hero-btns">
              <Link href="/disposable-section" className="btn-primary">Explore Products →</Link>
              <Link href="/contact" className="btn-outline">Request Quote</Link>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/assests/img/disposable-facemask-600x630.jpg" alt="Disposable Face Mask" className="hero-img" />
          </div>
        </div>
      </header>

      <div className="intro-strip">
        <div className="intro-inner">
          {["Surgical Use", "Nursing Protection", "Bacterial Control", "Healthcare Hygiene"].map(txt => (
            <span key={txt} className="intro-item"><span className="intro-check">✔</span> {txt}</span>
          ))}
        </div>
      </div>

      <section id="overview" className="section">
        <div className="two-col">
          <div>
            <p className="overview-label">About Our Products</p>
            <h2 className="overview-heading">Disposable Face Mask</h2>
            <p className="overview-text">Crown Healthcare Disposables is a reliable disposable face mask manufacturer in India, offering protective solutions designed for use in healthcare environments. A disposable face mask is worn during surgery and nursing to help avoid bacterial migration and support hygiene practices.</p>
            <p className="overview-text-last">In medical settings, maintaining controlled conditions is critical. Disposable face masks play an important role in reducing the movement of bacteria, helping support safer and cleaner environments during surgical procedures and patient care.</p>
          </div>
          <div className="stats-box">
            {[{ num: "Surgical", label: "Use" }, { num: "Nursing", label: "Protection" }, { num: "Single", label: "Use Design" }, { num: "India", label: "Wide Supply" }].map(({ num, label }) => (
              <div key={label} className="stat-card"><p className="stat-num">{num}</p><p className="stat-label">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-inner">
          <p className="section-label">Understanding the Product</p>
          <h2 className="section-heading">What is a Disposable Face Mask and Why is it Used?</h2>
          <div className="product-card card-hover"><div className="product-card-body">
            <p className="product-card-desc">A disposable face mask is used as part of protective wear in surgical and nursing environments. It is worn over the face to help minimize bacterial migration and support infection control practices.</p>
            <p className="product-card-desc">Its purpose is simple but essential: helping reduce the spread of bacteria in environments where hygiene is critical. In healthcare settings, even small levels of contamination can affect safety, which is why disposable face masks are widely used as part of routine protective measures.</p>
          </div></div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-inner">
          <p className="features-label">Product Highlights</p>
          <h2 className="features-heading">Key Features of Disposable Face Mask</h2>
          <p className="overview-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem", color: "rgba(255, 255, 255, 0.9)" }}>The disposable face mask is designed for use in situations where maintaining hygiene is important. It is worn during surgery and nursing procedures to support controlled environments and reduce bacterial movement.</p>
          <div className="three-col">
            {[
              { icon: "🛡️", title: "Protective Barrier", desc: "Helps reduce bacterial movement in healthcare and medical environments." },
              { icon: "🏥", title: "Surgical Use", desc: "Suitable for use during surgical procedures where hygiene is critical." },
              { icon: "👩‍⚕️", title: "Nursing Support", desc: "Supports protective practices during nursing and patient care activities." },
              { icon: "🧼", title: "Hygiene Focused", desc: "Helps maintain cleaner and more controlled working conditions." },
              { icon: "♻️", title: "Disposable Design", desc: "Single-use functionality supports consistent hygiene practices." },
              { icon: "⚡", title: "Easy to Use", desc: "Practical protective wear for routine healthcare operations." },
            ].map(f => <div key={f.title} className="feature-card"><span className="feature-icon">{f.icon}</span><h3 className="feature-title">{f.title}</h3><p className="feature-desc">{f.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section id="applications" className="applications-section">
        <div className="applications-inner">
          <p className="section-label">Where It&apos;s Used</p>
          <h2 className="section-heading">Applications of Disposable Face Mask</h2>
          <p className="overview-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>Disposable face masks are primarily used in surgical and nursing environments where controlling bacterial migration is essential. They are worn as part of standard protective practices in healthcare settings to support hygiene and reduce contamination.</p>
          <div className="four-col">{APPLICATIONS.map(app => <div key={app.title} className="app-card card-hover"><span className="app-icon">{app.icon}</span><h3 className="app-title">{app.title}</h3><p className="app-desc">{app.desc}</p></div>)}</div>
        </div>
      </section>

      <section className="section"><div className="two-col"><div>
        <p className="overview-label">Healthcare Hygiene</p>
        <h2 className="overview-heading">Importance of Disposable Face Masks in Healthcare</h2>
        <p className="overview-text">In healthcare environments, maintaining hygiene is directly linked to safety. Disposable face masks help reduce bacterial movement during procedures, making them an important part of protective wear used by medical professionals.</p>
        <p className="overview-text-last">Their use during surgery and nursing supports better infection control practices and helps maintain controlled environments where cleanliness is critical.</p>
      </div><div className="stats-box">{[{ num: "Bacterial", label: "Control" }, { num: "Medical", label: "Protection" }, { num: "Clean", label: "Conditions" }, { num: "Safe", label: "Care" }].map(({ num, label }) => <div key={label} className="stat-card"><p className="stat-num">{num}</p><p className="stat-label">{label}</p></div>)}</div></div></section>

      <section className="supplier-section"><div className="supplier-inner"><div>
        <p className="supplier-label">Supplier in India</p>
        <h2 className="supplier-heading">Disposable Face Mask Supplier in India</h2>
        <p className="supplier-text">Crown Healthcare Disposables is a dependable disposable face mask manufacturer and supplier in India, supporting healthcare and related industries with essential protective products. We aim to meet the growing demand for disposable face masks used in environments where hygiene and infection control are important.</p>
        <p className="supplier-text-last">As a disposable face mask supplier, our approach is centered on reliability, consistency, and practical usability. We support customers with disposable protective solutions that align with hygiene requirements.</p>
      </div><div id="contact" className="contact-card"><h3 className="contact-title">Request a Quote</h3><div className="form-fields">{["Your Name", "Company / Organisation", "Email Address", "Phone Number"].map(ph => <input key={ph} placeholder={ph} className="form-input" />)}<textarea placeholder="Your Requirements" className="form-input" rows="3" /><button className="form-btn">Submit Enquiry →</button></div></div></div></section>

      <section className="products-section"><div className="products-inner"><p className="section-label">Our Commitment</p><h2 className="section-heading">Why Choose Crown Healthcare Disposables</h2><div className="product-card card-hover"><div className="product-card-body"><p className="product-card-desc">Choosing the right disposable face mask manufacturer in India is important for businesses and healthcare facilities that rely on consistent hygiene practices. Crown Healthcare Disposables focuses on providing dependable protective products that support real operational needs.</p><p className="product-card-desc">Our focus is on supporting customers with disposable protective solutions that align with hygiene requirements, making us a trusted choice for businesses looking for a reliable manufacturing partner.</p></div></div></div></section>

      <section id="faqs" className="faqs-section"><div className="faqs-inner"><p className="faqs-label">Got Questions?</p><h2 className="faqs-heading">Frequently Asked Questions</h2><div>{FAQS.map(faq => <FAQItem key={faq.q} {...faq} />)}</div></div></section>

      <section className="related-section"><div className="related-inner"><h2 className="related-heading">Related Products</h2><div className="related-scroll">{RELATED_PRODUCTS.map(product => <Link key={product.id} href={product.href} className="related-card-link"><div className="related-card"><div className="related-card-img"><img src={product.image} alt={product.name} className="related-img" /></div><div className="related-card-info"><h3 className="related-card-name">{product.name}</h3><span className="related-card-btn">View More</span></div></div></Link>)}</div></div></section>
    </>
  );
}
