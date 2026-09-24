"use client";

import { useState } from "react";
import Link from "next/link";
import "../product.css";

const SPECS = [
  { feature: "Material", value: "Non-Woven Fabric / Polypropylene" },
  { feature: "Type", value: "Full-Body Protective Coverall" },
  { feature: "Coverage", value: "Complete Body & Clothing" },
  { feature: "Usage", value: "Single-Use / Disposable" },
  { feature: "Category", value: "Personal Protective Equipment (P.P.E)" },
];

const FAQS = [
  { q: "What is a disposable coverall used for?", a: "A disposable coverall is used to provide full-body protection by covering both the body and clothing. It helps reduce exposure to dirt and external contaminants, making it suitable for environments where maintaining cleanliness is important." },
  { q: "Why is a disposable coverall considered personal protective equipment (P.P.E)?", a: "A disposable coverall is considered part of P.P.E because it acts as a protective layer between the wearer and external elements. Its full-body coverage helps minimize direct contact with contaminants." },
  { q: "What does a disposable coverall protect against?", a: "A disposable coverall is designed to protect against dirt and other outside contaminants by covering the entire body and clothing." },
  { q: "What is the purpose of full-body coverage in a coverall?", a: "Full-body coverage helps ensure that both exposed areas and clothing are protected. This reduces the chances of contamination and supports cleaner and more controlled working conditions." },
  { q: "Is a disposable coverall worn over regular clothing?", a: "Yes, a disposable coverall is typically worn over regular clothing to provide an additional protective layer against external contaminants." },
  { q: "What is another name for a disposable coverall?", a: "A disposable coverall is also commonly referred to as a boiler suit." },
  { q: "Where are disposable coveralls commonly used?", a: "Disposable coveralls are used in environments where protection against dirt and contamination is required, especially in workplaces that follow hygiene and safety practices." },
  { q: "Why are disposable coveralls important in maintaining hygiene?", a: "Disposable coveralls help create a barrier between the user and contaminants, reducing the risk of spreading dirt and supporting cleaner working environments." },
];

const APPLICATIONS = [
  { icon: "🏥", title: "Healthcare Facilities", desc: "Used in hospitals and clinics to maintain hygiene standards and protect against contaminants." },
  { icon: "🏭", title: "Industrial Settings", desc: "Essential in manufacturing and production areas where cleanliness and contamination control are required." },
  { icon: "🔬", title: "Laboratories", desc: "Protects lab workers and prevents contamination during research and testing procedures." },
  { icon: "🧪", title: "Pharmaceutical Units", desc: "Maintains controlled environments in pharmaceutical manufacturing and packaging operations." },
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
  { id: 1,  name: 'Disposable Apron',               href: '/disposable-section/disposable-aprons', image: '/assests/img/disposable-apron-1-600x630.jpg' },
  { id: 5,  name: 'Disposable Face Mask',           href: '/disposable-section/disposable-face-mask', image: '/assests/img/disposable-facemask-600x630.jpg' },
  { id: 38, name: 'Disposable Polythene Drape',    href: '/disposable-section/polythene-drape', image: '/assests/img/Disposable-Polythene-Drape-600x630.jpg' },
  { id: 39, name: 'Disposable Surgeon Cap',         href: '/disposable-section/disposable-surgeon-cap', image: '/assests/img/Disposable-Surgeon-Cap-600x630.jpg' },
  { id: 40, name: 'Disposable Surgeons Gown',       href: '/disposable-section/disposable-surgeons-gown', image: '/assests/img/Disposable-Surgeon-Gown-600x630.jpg' },
  { id: 42, name: 'Disposable Wraparound Gown SMS', href: '/disposable-section/disposable-wraparound-gown', image: '/assests/img/wraparound-gown-sms-1-600x630.jpg' },
  { id: 44, name: 'Manufacturer of PPE Kit',       href: '/disposable-section/ppe-kit', image: '/assests/img/Manufacturer of PPE Kit.jpeg' },
];

export default function DisposableCoverallPage() {
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
              Disposable Coverall<br />
              <em>Manufacturer in India</em>
            </h1>
            <p className="hero-desc">
              Crown Healthcare Disposables is a trusted Disposable Coverall Manufacturer in India offering high-quality disposable coveralls for full-body protection and contamination control. Reliable disposable coverall supplier in India for PPE and industrial applications.
            </p>
            <div className="hero-btns">
              <Link href="/disposable-section" className="btn-primary">Explore Products →</Link>
              <Link href="/contact" className="btn-outline">Request Quote</Link>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/assests/img/disposable-coverall-600x630.jpg" alt="Disposable Coverall" className="hero-img"/>
          </div>
        </div>
      </header>

      {/* ── INTRO STRIP ── */}
      <div className="intro-strip">
        <div className="intro-inner">
          {["Full-Body Protection", "Disposable P.P.E", "Contamination Control", "Reliable Supply"].map(txt => (
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
            <h2 className="overview-heading">Disposable Coverall</h2>
            <p className="overview-text">
              Crown Healthcare Disposables is a reliable disposable coverall manufacturer in India, offering protective clothing designed for full-body coverage in environments where cleanliness and contamination control are important. A disposable coverall (boiler suit) is an essential item of personal protective equipment (P.P.E) used to cover the entire body and worn over regular clothing to protect against dirt and other outside contaminants.
            </p>
            <p className="overview-text-last">
              In many industries, maintaining a controlled and clean working environment is not optional—it is a requirement. Disposable coveralls support this need by acting as a protective barrier between the user and external elements, helping reduce the risk of contamination during daily operations.
            </p>
          </div>
          <div className="stats-box">
            {[
              { num: "100%", label: "Body Coverage" },
              { num: "P.P.E", label: "Standard" },
              { num: "India", label: "Wide Supply" },
              { num: "Single", label: "Use Design" },
            ].map(({ num, label }) => (
              <div key={label} className="stat-card">
                <p className="stat-num">{num}</p>
                <p className="stat-label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS SECTION ── */}
      <section className="products-section">
        <div className="products-inner">
          <p className="section-label">Understanding the Product</p>
          <h2 className="section-heading">What is a Disposable Coverall and Why is it Used?</h2>
          <div className="product-card card-hover">
            <div className="product-card-body">
              <p className="product-card-desc">
                A disposable coverall is designed to provide complete body coverage in a single garment. Unlike partial protective wear, it covers both the body and clothing, helping to minimize exposure to unwanted particles such as dirt and contaminants.
              </p>
              <p className="product-card-desc">
                Its purpose is straightforward but critical: to maintain cleaner working conditions while protecting both the wearer and the surrounding environment. As part of standard P.P.E, disposable coveralls are widely used where hygiene, safety, and controlled handling processes are important.
              </p>
              <p className="product-card-desc">
                Because it is worn over existing clothing, it adds an extra layer of protection without requiring complex usage, making it a practical solution for day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="features-section">
        <div className="features-inner">
          <p className="features-label">Product Highlights</p>
          <h2 className="features-heading">Key Features of Disposable Coverall</h2>
          <div className="three-col">
            {[
              { icon: "🛡️", title: "Full-Body Coverage", desc: "Designed to cover the entire body and clothing, shielding from dirt and external contaminants." },
              { icon: "🧥", title: "Worn Over Clothing", desc: "Easy to wear over regular clothing, providing an additional protective layer without complexity." },
              { icon: "🏥", title: "Part of P.P.E", desc: "Essential personal protective equipment for maintaining hygiene in critical environments." },
              { icon: "⚡", title: "Quick to Use", desc: "Supports efficient operations with straightforward application in daily workflows." },
              { icon: "🧼", title: "Contamination Control", desc: "Helps maintain cleaner working conditions by acting as a protective barrier." },
              { icon: "♻️", title: "Disposable Design", desc: "Single-use functionality ensures fresh protection for each operational session." },
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

      {/* ── SPECIFICATIONS ── */}
      <section id="specifications" className="table-section-bg">
        <div className="table-inner">
          <p className="section-label">Technical Details</p>
          <h2 className="table-heading">Product Specifications</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Feature</th><th>Specification</th></tr></thead>
              <tbody>
                {SPECS.map(row => (
                  <tr key={row.feature}>
                    <td className="td-bold">{row.feature}</td>
                    <td>{row.value}</td>
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
          <p className="section-label">Where It&apos;s Used</p>
          <h2 className="section-heading">Applications of Disposable Coverall</h2>
          <p className="overview-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Disposable coveralls are used across a wide range of industries where protection against dirt and external contaminants is necessary. They are commonly worn in workplaces where maintaining cleanliness is part of operational standards and safety procedures.
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

      {/* ── PPE IMPORTANCE ── */}
      <section className="section">
        <div className="two-col">
          <div>
            <p className="overview-label">Safety Standards</p>
            <h2 className="overview-heading">Why Disposable Coveralls are Important in P.P.E</h2>
            <p className="overview-text">
              As part of personal protective equipment (P.P.E), disposable coveralls play a key role in protecting both the individual and the working environment. Their ability to provide full-body coverage makes them more effective than partial protective garments when it comes to minimizing exposure.
            </p>
            <p className="overview-text-last">
              They are particularly useful in situations where contamination control is necessary, as they help create a barrier that reduces direct contact with dirt and external elements. This makes them an important component in environments where maintaining hygiene standards is essential.
            </p>
          </div>
          <div className="stats-box">
            {[
              { num: "360°", label: "Protection" },
              { num: "Barrier", label: "Function" },
              { num: "Hygiene", label: "Control" },
              { num: "Safe", label: "Operations" },
            ].map(({ num, label }) => (
              <div key={label} className="stat-card">
                <p className="stat-num">{num}</p>
                <p className="stat-label">{label}</p>
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
            <h2 className="supplier-heading">Disposable Coverall Supplier in India</h2>
            <p className="supplier-text">
              Crown Healthcare Disposables is a dependable disposable coverall manufacturer and supplier in India, supporting businesses that require practical and reliable protective clothing solutions. Our focus is on delivering products that meet everyday operational needs where protective wear is required.
            </p>
            <p className="supplier-text-last">
              As a coverall supplier in India, we understand the importance of consistent supply and dependable product performance in industries that rely on disposable P.P.E for maintaining cleanliness and safety.
            </p>
          </div>
          <div id="contact" className="contact-card">
            <h3 className="contact-title">Request a Quote</h3>
            <div className="form-fields">
              {["Your Name", "Company / Organisation", "Email Address", "Phone Number"].map(ph => (
                <input key={ph} placeholder={ph} className="form-input" />
              ))}
              <textarea placeholder="Your Requirements" className="form-input" rows="3" />
              <button className="form-btn">Submit Enquiry →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="products-section">
        <div className="products-inner">
          <p className="section-label">Our Commitment</p>
          <h2 className="section-heading">Why Choose Us for Disposable Coveralls</h2>
          <div className="product-card card-hover">
            <div className="product-card-body">
              <p className="product-card-desc">
                Choosing the right disposable coverall supplier is important for businesses that depend on protective wear as part of their daily operations. At Crown Healthcare Disposables, we focus on providing products that align with the basic requirements of protection, usability, and consistency.
              </p>
              <p className="product-card-desc">
                Our approach is centered on supporting customers with reliable disposable protective solutions that help maintain cleaner and safer working environments. As a manufacturer, we aim to be a dependable source for businesses looking for practical P.P.E products.
              </p>
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
                <Link key={product.id} href={product.href} className="related-card-link">
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