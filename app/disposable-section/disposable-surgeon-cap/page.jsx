"use client";

import { useState } from "react";
import Link from "next/link";
import "../product.css";

const FAQS = [
  { q: "What is a disposable surgeon cap used for?", a: "A disposable surgeon cap is worn by the surgical team to help avoid contamination of the wound during medical procedures." },
  { q: "Why is a surgeon cap important during surgery?", a: "It helps reduce the risk of contamination by covering the head and limiting exposure of external elements to the surgical area." },
  { q: "Who wears disposable surgeon caps?", a: "Disposable surgeon caps are worn by members of the surgical team during procedures." },
  { q: "When should a disposable surgeon cap be used?", a: "It should be worn during surgical procedures where maintaining a controlled and hygienic environment is essential." },
  { q: "How does a surgeon cap help prevent contamination?", a: "By covering the head, it helps reduce the possibility of contaminants reaching the wound area." },
];

const APPLICATIONS = [
  { icon: "🏥", title: "Operating Rooms", desc: "Used by surgical teams to support clean and controlled operating room conditions." },
  { icon: "👩‍⚕️", title: "Surgical Teams", desc: "Worn by members of the surgical team as part of standard protective practices." },
  { icon: "🩺", title: "Medical Procedures", desc: "Supports hygiene during procedures where preventing contamination is essential." },
  { icon: "🧼", title: "Healthcare Hygiene", desc: "Helps contain hair and reduce external contamination in medical environments." },
];

const RELATED_PRODUCTS = [
  { id: 1, name: "Disposable Apron", href: "/disposable-section/disposable-aprons", image: "/assests/img/disposable-apron-1-600x630.jpg" },
  { id: 4, name: "Disposable Coverall", href: "/disposable-section/disposable-coverall", image: "/assests/img/disposable-coverall-600x630.jpg" },
  { id: 5, name: "Disposable Face Mask", href: "/disposable-section/disposable-face-mask", image: "/assests/img/disposable-facemask-600x630.jpg" },
  { id: 38, name: "Disposable Polythene Drape", href: "/disposable-section/polythene-drape", image: "/assests/img/Disposable-Polythene-Drape-600x630.jpg" },
  { id: 40, name: "Disposable Surgeons Gown", href: "/disposable-section/disposable-surgeons-gown", image: "/assests/img/Disposable-Surgeon-Gown-600x630.jpg" },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return <div className="faq-item" onClick={() => setOpen(!open)}><div className="faq-row"><p className="faq-question">{q}</p><span className={`faq-toggle ${open ? "faq-toggle-open" : "faq-toggle-closed"}`}>{open ? "−" : "+"}</span></div>{open && <p className="faq-answer">{a}</p>}</div>;
}

export default function DisposableSurgeonCapPage() {
  return (
    <>
      <header className="hero"><div className="hero-circle-1" /><div className="hero-circle-2" /><div className="hero-circle-3" /><div className="hero-inner fade-in"><div className="hero-content"><span className="hero-badge">Trusted Manufacturer &amp; Supplier · India</span><h1 className="hero-title">Disposable Surgeon Cap<br /><em>Manufacturer in India</em></h1><p className="hero-desc">Crown Healthcare Disposables is a Disposable Surgeon Cap Manufacturer in India, supplying quality surgeon caps for operating rooms and healthcare hygiene.</p><div className="hero-btns"><Link href="/disposable-section" className="btn-primary">Explore Products →</Link><Link href="/contact" className="btn-outline">Request Quote</Link></div></div><div className="hero-img-wrap"><img src="/assests/img/Disposable-Surgeon-Cap-600x630.jpg" alt="Disposable Surgeon Cap" className="hero-img" /></div></div></header>

      <div className="intro-strip"><div className="intro-inner">{["Operating Room Use", "Surgical Protection", "Hair Containment", "Healthcare Hygiene"].map(txt => <span key={txt} className="intro-item"><span className="intro-check">✔</span> {txt}</span>)}</div></div>

      <section id="overview" className="section"><div className="two-col"><div><p className="overview-label">About Our Products</p><h2 className="overview-heading">Disposable Surgeon Cap</h2><p className="overview-text">Crown Healthcare Disposables is a trusted disposable surgeon cap manufacturer in India, offering protective headwear designed for use in surgical environments. A disposable surgeon cap is worn by the surgical team on the head to help avoid contamination of the wound during medical procedures.</p><p className="overview-text-last">In operating environments, maintaining controlled conditions is essential. Disposable surgeon caps support this by helping contain hair and reduce the risk of contamination, contributing to safer surgical practices.</p></div><div className="stats-box">{[{ num: "Surgical", label: "Use" }, { num: "Hair", label: "Containment" }, { num: "Single", label: "Use Design" }, { num: "India", label: "Wide Supply" }].map(({ num, label }) => <div key={label} className="stat-card"><p className="stat-num">{num}</p><p className="stat-label">{label}</p></div>)}</div></div></section>

      <section className="products-section"><div className="products-inner"><p className="section-label">Understanding the Product</p><h2 className="section-heading">What is a Disposable Surgeon Cap and Why is it Used?</h2><div className="product-card card-hover"><div className="product-card-body"><p className="product-card-desc">A disposable surgeon cap is used as part of protective wear in surgical procedures. It is worn by members of the surgical team to cover the head and help prevent contamination of the wound.</p><p className="product-card-desc">Its role is important in maintaining hygiene during procedures, as it helps reduce the possibility of external elements, such as loose hair, interfering with the surgical area. This makes it a necessary component of routine surgical preparation.</p></div></div></div></section>

      <section className="features-section"><div className="features-inner"><p className="features-label">Product Highlights</p><h2 className="features-heading">Key Features of Disposable Surgeon Cap</h2><p className="overview-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem", color: "rgba(255, 255, 255, 0.9)" }}>The disposable surgeon cap is designed to be worn comfortably on the head during surgical procedures. Its purpose is to help maintain a controlled environment by reducing the chances of contamination.</p><div className="three-col">{[{ icon: "🛡️", title: "Contamination Control", desc: "Helps reduce the possibility of contaminants reaching the surgical area." }, { icon: "🏥", title: "Surgical Use", desc: "Suitable for operating rooms and medical procedure environments." }, { icon: "🧢", title: "Head Coverage", desc: "Covers the head and helps contain loose hair during procedures." }, { icon: "🧼", title: "Hygiene Focused", desc: "Supports clean and controlled conditions in surgical settings." }, { icon: "♻️", title: "Disposable Design", desc: "Single-use functionality supports consistent hygiene practices." }, { icon: "⚡", title: "Easy to Use", desc: "Practical protective headwear for routine surgical preparation." }].map(f => <div key={f.title} className="feature-card"><span className="feature-icon">{f.icon}</span><h3 className="feature-title">{f.title}</h3><p className="feature-desc">{f.desc}</p></div>)}</div></div></section>

      <section id="applications" className="applications-section"><div className="applications-inner"><p className="section-label">Where It&apos;s Used</p><h2 className="section-heading">Applications of Disposable Surgeon Cap</h2><p className="overview-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>Disposable surgeon caps are used in operating rooms and other medical environments where surgical procedures are performed. They are worn by the surgical team as part of standard protective practices to help maintain a clean and controlled environment.</p><div className="four-col">{APPLICATIONS.map(app => <div key={app.title} className="app-card card-hover"><span className="app-icon">{app.icon}</span><h3 className="app-title">{app.title}</h3><p className="app-desc">{app.desc}</p></div>)}</div></div></section>

      <section className="section"><div className="two-col"><div><p className="overview-label">Surgical Protection</p><h2 className="overview-heading">Importance of Surgeon Caps in Surgical Procedures</h2><p className="overview-text">In surgical environments, even small levels of contamination can affect outcomes. Disposable surgeon caps help reduce this risk by covering the head and helping prevent contaminants from reaching the wound area.</p><p className="overview-text-last">Their use supports hygiene practices and contributes to maintaining a controlled environment during procedures, making them an essential part of surgical protective wear.</p></div><div className="stats-box">{[{ num: "Surgical", label: "Protection" }, { num: "Hair", label: "Control" }, { num: "Clean", label: "Conditions" }, { num: "Safe", label: "Procedures" }].map(({ num, label }) => <div key={label} className="stat-card"><p className="stat-num">{num}</p><p className="stat-label">{label}</p></div>)}</div></div></section>

      <section className="supplier-section"><div className="supplier-inner"><div><p className="supplier-label">Supplier in India</p><h2 className="supplier-heading">Disposable Surgeon Cap Supplier in India</h2><p className="supplier-text">Crown Healthcare Disposables is a reliable disposable surgeon cap manufacturer and supplier in India, supporting healthcare institutions with essential protective headwear. We aim to meet the demand for products used in surgical environments where hygiene and contamination control are critical.</p><p className="supplier-text-last">As a surgeon cap supplier, we focus on consistency, usability, and meeting the everyday needs of medical professionals.</p></div><div id="contact" className="contact-card"><h3 className="contact-title">Request a Quote</h3><div className="form-fields">{["Your Name", "Company / Organisation", "Email Address", "Phone Number"].map(ph => <input key={ph} placeholder={ph} className="form-input" />)}<textarea placeholder="Your Requirements" className="form-input" rows="3" /><button className="form-btn">Submit Enquiry →</button></div></div></div></section>

      <section className="products-section"><div className="products-inner"><p className="section-label">Our Commitment</p><h2 className="section-heading">Why Choose Crown Healthcare Disposables</h2><div className="product-card card-hover"><div className="product-card-body"><p className="product-card-desc">Choosing the right disposable surgeon cap manufacturer in India is important for healthcare facilities that rely on consistent hygiene standards. Crown Healthcare Disposables focuses on providing dependable protective products designed for real surgical environments.</p><p className="product-card-desc">We support healthcare providers with reliable products that assist in maintaining clean and controlled conditions during procedures.</p></div></div></div></section>

      <section id="faqs" className="faqs-section"><div className="faqs-inner"><p className="faqs-label">Got Questions?</p><h2 className="faqs-heading">Frequently Asked Questions</h2><div>{FAQS.map(faq => <FAQItem key={faq.q} {...faq} />)}</div></div></section>

      <section className="related-section"><div className="related-inner"><h2 className="related-heading">Related Products</h2><div className="related-scroll">{RELATED_PRODUCTS.map(product => <Link key={product.id} href={product.href} className="related-card-link"><div className="related-card"><div className="related-card-img"><img src={product.image} alt={product.name} className="related-img" /></div><div className="related-card-info"><h3 className="related-card-name">{product.name}</h3><span className="related-card-btn">View More</span></div></div></Link>)}</div></div></section>
    </>
  );
}
