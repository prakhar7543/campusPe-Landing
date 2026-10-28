
"use client";

import { useState } from "react";

/* -------------------- DATA -------------------- */

const audiences = [
  {
    number: "01",
    title: "College",
    description: "Explore colleges, courses, fees, placements & more.",
    button: "Join Waitlist",
    href: "#colleges",
    className: "college-card",
    icon: "▤",
    status: "Coming Soon",
    points: [
      "Search by course, location and fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
  },
  {
    number: "02",
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    button: "Explore Jobs",
    href: "#opportunities",
    className: "student-card",
    icon: "◇",
    status: "Available Now",
    points: [
      "AI-powered matching",
      "WhatsApp & email alerts",
      "Find your next career move",
    ],
  },
  {
    number: "03",
    title: "I'm Hiring",
    description: "Connect with colleges and find candidates — from students to graduates.",
    button: "Join Waitlist",
    href: "#employers",
    className: "employer-card",
    icon: "▣",
    status: "Coming Soon",
    points: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify hiring",
    ],
  },
];

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    type: "Full-time",
    location: "Remote",
    salary: "₹4–8 LPA",
    color: "blue",
  },
  {
    title: "React Developer Intern",
    company: "PixelWorks",
    type: "Internship",
    location: "Hybrid",
    salary: "₹15,000/month",
    color: "purple",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Labs",
    type: "Freelance",
    location: "Bengaluru",
    salary: "₹5–9 LPA",
    color: "orange",
  },
];

/* -------------------- NAVBAR -------------------- */

function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CampusPe home">
        <span className="brand-mark">C</span>
        <span>
          Campus<span className="brand-highlight">Pe</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#colleges">Colleges</a>
        <a href="#employers">Employers</a>
        <a href="#opportunities">Jobs</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div className="header-actions">
        <a className="login-button" href="#login">
          Sign In
        </a>
        <a className="primary-button header-cta" href="#signup">
          Sign Up <span aria-hidden="true">↗</span>
        </a>
      </div>

      <details className="mobile-menu">
        <summary aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </summary>

        <nav aria-label="Mobile navigation">
          <a href="#colleges">Colleges</a>
          <a href="#employers">Employers</a>
          <a href="#opportunities">Jobs</a>
          <a href="#blogs">Blogs</a>
          <a href="#login">Sign In</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </details>
    </header>
  );
}

/* -------------------- AUDIENCE CARD -------------------- */

function AudienceCard({ audience }) {
  return (
    <article className={`audience-card ${audience.className}`}>
      <div className="card-topline">
        <span className="card-number">{audience.number}</span>
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </div>

      <div className="card-content">
        <div className="audience-card-heading">
          <span className="audience-card-icon">{audience.icon}</span>
          <span className="audience-status">{audience.status}</span>
        </div>

        <h2>{audience.title}</h2>
        <p>{audience.description}</p>

        <ul className="audience-points">
          {audience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <a className="card-button" href={audience.href}>
          {audience.button} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

/* -------------------- SECTION 1: HERO -------------------- */

function Hero() {
  const notifications = [
    {
      icon: "✦",
      title: "142 students matched today",
      subtitle: "AI matching · Jobs · Colleges",
    },
    {
      icon: "✧",
      title: "Radiant Info shortlisted 3 interns",
      subtitle: "Verified recruiter · 2 days ago",
    },
  ];

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-floating-card whatsapp-card">
          <span className="floating-icon whatsapp-icon">◉</span>
          <div>
            <strong>WhatsApp Alert</strong>
            <p>Get notified on WhatsApp</p>
            <small>Stay updated on your opportunities.</small>
          </div>
        </div>

        <div className="hero-floating-card resume-builder-card">
          <span className="floating-icon resume-icon">ϟ</span>
          <div>
            <strong>Resume Builder</strong>
            <p>Build Your Resume</p>
            <small>Create a professional resume in minutes.</small>
          </div>
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>AI-POWERED CAMPUS ASSISTANT</span>
          </div>

          <h1>
            Connect <span>10X Faster.</span>
          </h1>

          <p className="hero-description">
            One platform connecting students, colleges and employers — faster.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#opportunities">
              Explore Opportunities <span>↗</span>
            </a>
            <a className="secondary-button" href="#how-it-works">
              Discover How It Works →
            </a>
          </div>

          <div className="hero-trust">
            <span className="trust-check">✓</span>
            Discover your next opportunity with CampusPe
          </div>
        </div>

        <div className="hero-notifications">
          {notifications.map((notification) => (
            <div
              className="activity-notification"
              key={notification.title}
            >
              <span className="notification-icon">
                {notification.icon}
              </span>
              <div>
                <strong>{notification.title}</strong>
                <small>{notification.subtitle}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="audience-grid">
          {audiences.map((audience) => (
            <AudienceCard
              key={audience.number}
              audience={audience}
            />
          ))}
        </div>
      </section>

      <section className="stats-section" aria-label="CampusPe highlights">
        <div className="stat-item">
          <span className="stat-icon stat-purple">♧</span>
          <div>
            <strong>800+</strong>
            <span>Students</span>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-icon stat-blue">▥</span>
          <div>
            <strong>130+</strong>
            <span>Colleges</span>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-icon stat-green">♧</span>
          <div>
            <strong>100+</strong>
            <span>Jobs &amp; internships</span>
          </div>
        </div>

        <div className="stat-item">
          <span className="stat-icon stat-orange">⬟</span>
          <div>
            <strong>100%</strong>
            <span>Safe &amp; trusted</span>
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="CampusPe partners">
        <p>Trusted by partners across India</p>
        <div className="partner-logos">
          <span className="partner-ginserv">GINSERV</span>
          <span className="partner-startup">
            STARTUP
            <br />
            KARNATAKA
          </span>
          <span className="partner-emblem">✺</span>
          <span className="partner-talent">TALENTSPOTIFY</span>
          <span className="partner-radiant">RADIANT</span>
          <span className="partner-india">INDIA</span>
        </div>
      </section>
    </>
  );
}

/* -------------------- OPPORTUNITY FEED -------------------- */


function OpportunitySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = [
    "All",
    "Colleges",
    "Jobs",
    "Internships",
    "Freelance",
    "Part-time",
  ];

  const opportunities = [
    {
      id: 1,
      logo: "I",
      logoClass: "opp-logo-iim",
      title: "IIM Bangalore",
      category: "Colleges",
      subtitle: "MBA",
      location: "Bengaluru",
      salary: "₹3L+",
      description: "India's premier management institute with global exposure.",
      action: "View Details",
    },
    {
      id: 2,
      logo: "G",
      logoClass: "opp-logo-google",
      title: "Product Intern",
      category: "Internships",
      subtitle: "Bengaluru",
      location: "Hybrid",
      salary: "₹35K/mo",
      description: "Work on real products and learn from experienced teams.",
      action: "Apply Now",
    },
    {
      id: 3,
      logo: "N",
      logoClass: "opp-logo-marketing",
      title: "Marketing Gig",
      category: "Freelance",
      subtitle: "Remote",
      location: "Freelance",
      salary: "₹10K - ₹25K",
      description: "Create content and help promising brands grow.",
      action: "View Details",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Set your preferences",
      description:
        "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
      badge: "Smart Profile",
    },
    {
      number: "02",
      title: "Discover relevant opportunities",
      description:
        "Explore colleges and career opportunities matched to your profile, interests and goals.",
      badge: "AI Ranked",
    },
    {
      number: "03",
      title: "Get notified when something fits",
      description:
        "Get notified when a relevant college or new opportunity fits your needs, so you can act early.",
      badge: "Instant Alerts",
    },
  ];

  const filteredOpportunities = opportunities.filter((item) => {
    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Jobs" && item.category === "Jobs") ||
      (activeFilter === "Part-time" && item.category === "Part-time") ||
      item.category === activeFilter;

    const matchesSearch =
      `${item.title} ${item.subtitle} ${item.location}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="opportunity-section" id="opportunities">
      <div className="opportunity-layout">
        {/* LEFT COLUMN */}
        <div className="opportunity-copy">
          <span className="section-label">
            <span className="section-label-dot" />
            01 · OPPORTUNITY DISCOVERY
          </span>

          <h2>
            Stop searching.
            <br />
            <span>Start getting matched.</span>
          </h2>

          <p className="opportunity-intro">
            Tell CampusPe your skills, preferences and goals. We
            continuously monitor company career pages and job sources,
            find opportunities that match you, and notify you when they fit.
          </p>

          <div className="opportunity-feature-list">
            {features.map((feature) => (
              <article
                className="opportunity-feature-card"
                key={feature.number}
              >
                <span className="feature-number">
                  {feature.number}
                </span>

                <div className="feature-card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>

                <span className="feature-badge">
                  {feature.badge}
                </span>
              </article>
            ))}
          </div>

          <a className="primary-button opportunity-cta" href="#resume">
            Explore Opportunities <span>→</span>
          </a>
        </div>

        {/* RIGHT COLUMN: OPPORTUNITY DASHBOARD */}
        <div className="opportunity-dashboard-column">
          <div className="opportunity-dashboard">
            <div className="opportunity-dashboard-header">
              <div className="opportunity-dashboard-brand">
                <span className="dashboard-brand-icon">✦</span>

                <div>
                  <h3>CampusPe Opportunity Feed</h3>
                  <p>Colleges &amp; opportunities matched for you</p>
                </div>
              </div>

              <span className="new-matches-badge">
                <span>●</span> 12 new matches today
              </span>
            </div>

            <div className="opportunity-filter-tabs">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "opportunity-filter active"
                      : "opportunity-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="matched-opportunities">
              {filteredOpportunities.length > 0 ? (
                filteredOpportunities.map((item) => (
                  <article
                    className="matched-opportunity-card"
                    key={item.id}
                  >
                    <span
                      className={`opportunity-company-logo ${item.logoClass}`}
                    >
                      {item.logo}
                    </span>

                    <div className="matched-opportunity-info">
                      <div className="matched-opportunity-title">
                        <h4>{item.title}</h4>
                        <span className="opportunity-category">
                          {item.category === "Colleges"
                            ? "Top College"
                            : item.category}
                        </span>
                      </div>

                      <div className="opportunity-meta">
                        <span>{item.subtitle}</span>
                        <span>⌖ {item.location}</span>
                        <span>{item.salary}</span>
                      </div>

                      <p>{item.description}</p>
                    </div>

                    <a
                      className="opportunity-action"
                      href={
                        item.category === "Colleges"
                          ? "#colleges"
                          : "#resume"
                      }
                    >
                      {item.action}
                    </a>
                  </article>
                ))
              ) : (
                <div className="opportunity-empty-state">
                  <span>⌕</span>
                  <p>No matching opportunities in this demo.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter("All");
                      setSearch("");
                    }}
                  >
                    Show all opportunities
                  </button>
                </div>
              )}
            </div>

            <div className="opportunity-dashboard-footer">
              <a href="#resume">
                View all matched opportunities <span>→</span>
              </a>

              <span>Curated for you · Updated daily</span>
            </div>
          </div>

          <p className="opportunity-handwritten">
            <span aria-hidden="true">↶</span>
            A mix of colleges, jobs,
            <br />
            internships and gigs — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}


function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="job-card">
      <div className={`company-avatar ${job.color}`}>
        {job.company.charAt(0)}
      </div>

      <div className="job-info">
        <h4>{job.title}</h4>
        <p>
          {job.company} · {job.location}
        </p>
        <div className="job-tags">
          <span>{job.type}</span>
          <span>{job.salary}</span>
        </div>
      </div>

      <button
        className={`save-job ${saved ? "saved" : ""}`}
        type="button"
        aria-label={saved ? `Unsave ${job.title}` : `Save ${job.title}`}
        aria-pressed={saved}
        onClick={() => setSaved((previous) => !previous)}
      >
        {saved ? "♥" : "♡"}
      </button>
    </article>
  );
}

/* -------------------- RESUME UPLOAD -------------------- */


function ResumeSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleFile(file) {
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const isAllowedExtension = /\.(pdf|doc|docx)$/i.test(file.name);
    const isAllowedType =
      allowedTypes.includes(file.type) || isAllowedExtension;

    if (!isAllowedType) {
      setError("Please select a PDF, DOC or DOCX file.");
      setSelectedFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Your resume must be smaller than 5 MB.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setError("");
  }

  function handleInputChange(event) {
    handleFile(event.target.files?.[0]);
  }

  function handleDrop(event) {
    event.preventDefault();
    setDragging(false);
    handleFile(event.dataTransfer.files?.[0]);
  }

  return (
    <section className="resume-section" id="resume">
      <div className="resume-section-inner">
        <div className="resume-copy">
          <span className="resume-eyebrow">
            <span className="resume-eyebrow-dot" />
            TRY IT LIVE · AI ENGINE
            <span className="resume-version">v2.4 AI Engine</span>
          </span>

          <h2>
            Upload your resume.
            <br />
            <span>Find jobs that fit.</span>
          </h2>

          <p className="resume-description">
            Upload once. CampusPe reads your skills, experience, and
            preferences — then finds relevant jobs across 1,000+ sources.
          </p>

          <div className="resume-benefits">
            <div>
              <span className="resume-check">✓</span>
              <span>Resume analyzed</span>
              <small>Ready in seconds</small>
            </div>
            <div>
              <span className="resume-check resume-check-blue">✓</span>
              <span>Skills matched</span>
              <small>Deep taxonomy</small>
            </div>
            <div>
              <span className="resume-check resume-check-purple">✓</span>
              <span>Experience matched</span>
              <small>Contextual scoring</small>
            </div>
            <div>
              <span className="resume-check resume-check-blue">✓</span>
              <span>1,000+ sources searched</span>
              <small>Real-time aggregators</small>
            </div>
          </div>
        </div>

        <div className="resume-upload-card">
          <div className="resume-upload-heading">
            <span className="resume-upload-icon" aria-hidden="true">
              ↑
            </span>
            <h3>Upload your resume</h3>
            <p>PDF, DOC or DOCX · Up to 5 MB · We'll use it to understand your skills and experience.</p>
          </div>

          <div className="resume-floating-badge resume-match-badge">
            <span className="resume-badge-icon">✓</span>
            <span>
              <strong>98% Match Rate</strong>
              <small>AI semantic rank</small>
            </span>
          </div>

          <div className="resume-floating-badge resume-ats-badge">
            <span className="resume-badge-icon resume-ats-icon">✦</span>
            <span>
              <strong>ATS Compliant</strong>
              <small>Standardized parser</small>
            </span>
          </div>

          <label
            className={`resume-dropzone ${dragging ? "is-dragging" : ""}`}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <input
              className="resume-file-input"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
            />

            <span className="resume-file-icon" aria-hidden="true">▤</span>

            <strong>
              {selectedFile ? selectedFile.name : "Choose your resume"}
            </strong>

            <small>
              {selectedFile
                ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`
                : "PDF, DOC or DOCX · Maximum 5 MB"}
            </small>

            <span className="resume-format-tags">
              <span>PDF</span>
              <span>DOC</span>
              <span>DOCX</span>
            </span>
          </label>

          {error && (
            <p className="resume-error" role="alert">{error}</p>
          )}

          <button
            type="button"
            className="resume-select-button"
            onClick={() => {
              document.getElementById("resume-file-picker")?.click();
            }}
          >
            {selectedFile ? "Choose another file" : "Upload resume"} <span>↑</span>
          </button>

          <input
            id="resume-file-picker"
            className="resume-hidden-picker"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
          />

          <p className="resume-privacy-note">
            Demo only. Your resume is not uploaded to a server.
          </p>
        </div>
      </div>
    </section>
  );
}


/* -------------------- COLLEGE SECTION -------------------- */

function CollegeSection() {
  const features = [
    {
      number: "01",
      title: "Build your college profile",
      description:
        "Showcase courses, fees, campus, placements and achievements.",
      badge: "Verified Profile",
      tag: "NAAC & AICTE Ready",
    },
    {
      number: "02",
      title: "Students discover and connect",
      description:
        "Help students discover your college and connect with admissions.",
      badge: "Direct Enroll",
      tag: "WhatsApp / Chat",
    },
    {
      number: "03",
      title: "Recruiters discover your college",
      description:
        "Help companies discover your college and connect with future talent.",
      badge: "Campus Recruiting",
      tag: "Hiring Partners",
    },
    {
      number: "04",
      title: "Track placements in real time",
      description:
        "Track students, interviews and offers in one dashboard.",
      badge: "Live HUD",
      tag: "LIVE PLACEMENTS",
    },
  ];

  return (
    <section className="audience-section college-section" id="colleges">
      <div className="audience-copy">
        <span className="section-label">02 · FOR COLLEGES</span>

        <h2>
          Get Discovered by <span>Students and Recruiters.</span>
        </h2>

        <p>
          Put your college in front of students searching for the right
          course and recruiters looking for talent. Build your presence,
          attract enquiries and connect with opportunities.
        </p>

        <a className="primary-button" href="#support">
          List Your College →
        </a>
      </div>

      <div className="feature-stack">
        {features.map((feature) => (
          <article className="detail-card" key={feature.number}>
            <div className="detail-card-main">
              <span className="detail-number">{feature.number}</span>
              <div>
                <span className="detail-kicker">{feature.badge}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
            <span className="detail-tag">{feature.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- EMPLOYER SECTION -------------------- */

function EmployerSection() {
  const features = [
    {
      number: "01",
      title: "Post a role in minutes",
      description:
        "Define skills and hiring requirements to reach candidates.",
      tag: "Instant Setup",
      status: "5 Min Deployment",
    },
    {
      number: "02",
      title: "Receive a matched shortlist",
      description:
        "Discover candidates by skills, experience and location.",
      tag: "Smart Matching",
      status: "Less CV Clutter",
    },
    {
      number: "03",
      title: "Connect with candidates directly",
      description:
        "Manage candidate conversations and interview schedules.",
      tag: "Direct Contact",
      status: "In-App Scheduling",
    },
    {
      number: "04",
      title: "Reduce your time-to-hire",
      description:
        "Move from shortlist to offer with a streamlined workflow.",
      tag: "Hiring Workflow",
      status: "Track Progress",
    },
  ];

  return (
    <section className="audience-section employer-section" id="employers">
      <div className="audience-copy">
        <span className="section-label">03 · FOR EMPLOYERS</span>

        <h2>
          Stop running campus drives.
          <br />
          <span>Start hiring the right people.</span>
        </h2>

        <p>
          Post a role in minutes and reach relevant candidates without
          the time, travel and coordination of traditional hiring.
        </p>

        <a className="primary-button" href="#support">
          Post a Job →
        </a>
      </div>

      <div className="feature-stack employer-features">
        {features.map((feature) => (
          <article
            className="detail-card employer-detail"
            key={feature.number}
          >
            <div className="detail-card-main">
              <span className="detail-number">{feature.number}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>

            <div className="employer-tags">
              <span>{feature.tag}</span>
              <span>{feature.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- MOBILE APP SHOWCASE -------------------- */

function AppShowcase() {
  const [activePhone, setActivePhone] = useState(2);

  const screens = [
    { title: "Discover", subtitle: "Find opportunities" },
    { title: "My Profile", subtitle: "Showcase your skills" },
    { title: "Explore", subtitle: "Colleges and jobs" },
    { title: "Applications", subtitle: "Track your progress" },
    { title: "My Colleges", subtitle: "Explore your options" },
  ];

  return (
    <section className="app-showcase" id="app-showcase">
      <div className="showcase-heading">
        <span className="section-label">CAMPUSPE APP</span>
        <h2>Checkout Our App Interface Look</h2>
        <p>
          Experience a unified campus ecosystem right in your pocket.
          Explore courses, colleges, jobs and career opportunities.
        </p>
      </div>

      <div className="phone-gallery">
        {screens.map((screen, index) => (
          <button
            type="button"
            key={screen.title}
            className={`phone-mockup phone-${index + 1} ${
              activePhone === index ? "phone-active" : ""
            }`}
            onClick={() => setActivePhone(index)}
            aria-pressed={activePhone === index}
            aria-label={`Preview ${screen.title} screen`}
          >
            <span className="phone-speaker" />
            <span className="phone-status">9:41 ●●●</span>
            <span className="phone-brand">CampusPe</span>
            <strong>{screen.title}</strong>
            <span className="phone-subtitle">{screen.subtitle}</span>
            <span className="phone-search">⌕ Search here...</span>
            <span className="phone-color-block" />
            <span className="phone-line" />
            <span className="phone-line short" />

            <span className="phone-mini-card">
              <span />
              <span />
              <span />
            </span>
            <span className="phone-mini-card">
              <span />
              <span />
              <span />
            </span>

            <span className="phone-bottom-nav">⌂　◉　♡　▣</span>
          </button>
        ))}
      </div>

      <div className="phone-dots" aria-label="Choose app screen">
        {screens.map((screen, index) => (
          <button
            key={screen.title}
            type="button"
            className={
              activePhone === index ? "phone-dot active" : "phone-dot"
            }
            onClick={() => setActivePhone(index)}
            aria-label={`Show ${screen.title}`}
            aria-pressed={activePhone === index}
          />
        ))}
      </div>

      <div className="download-app">
        <div className="download-copy">
          <span className="section-label">CAMPUSPE ON THE GO</span>
          <h2>Download App Now</h2>
          <p>
            Elevate your academic journey with CampusPe. Discover colleges,
            explore opportunities and stay connected wherever you go.
          </p>

          <div className="store-buttons">
            <a href="#support">▶ Google Play</a>
            <a href="#support">● App Store</a>
          </div>
        </div>

        <div className="phone-overlap" aria-hidden="true">
          <div className="tilted-phone tilted-phone-back">
            <span>CampusPe</span>
            <i />
            <i />
            <i />
          </div>

          <div className="tilted-phone tilted-phone-front">
            <span>CampusPe</span>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SUPPORT SECTION -------------------- */

function SupportSection() {
  return (
    <section className="support-section" id="support">
      <div className="support-card">
        <span className="support-icon">✦</span>
        <h2>Still have questions?</h2>
        <p>
          Our support team is here to help you succeed. Get in touch anytime.
        </p>

        <div className="support-actions">
          <a className="primary-button" href="mailto:support@campuspe.com">
            Contact Support ↗
          </a>

          <a
            className="secondary-button"
            href="mailto:support@campuspe.com?subject=Schedule%20a%20call"
          >
            Schedule a Call ◷
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */

function SiteFooter() {
  const groups = [
    {
      title: "For Students",
      links: [
        ["Explore Colleges", "#colleges"],
        ["Find Opportunities", "#opportunities"],
        ["Internships", "#opportunities"],
        ["Full-time Jobs", "#opportunities"],
        ["Application Tracker", "#opportunities"],
      ],
    },
    {
      title: "For Colleges",
      links: [
        ["List Your College", "#colleges"],
        ["Admissions", "#colleges"],
        ["Fee Collection", "#colleges"],
        ["Placements", "#colleges"],
      ],
    },
    {
      title: "For Employers",
      links: [
        ["Post a Job", "#employers"],
        ["Find Talent", "#employers"],
        ["Campus Hiring", "#employers"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About Us", "#home"],
        ["Contact Us", "#support"],
        ["Blogs", "#blogs"],
        ["Careers", "#opportunities"],
      ],
    },
    {
      title: "Legal & Policies",
      links: [
        ["Privacy Policy", "#privacy"],
        ["Terms & Conditions", "#terms"],
        ["Refund & Cancellation Policy", "#terms"],
        ["Cookie Policy", "#privacy"],
        ["Grievance Redressal", "#support"],
      ],
    },
  ];

  return (
    <footer className="site-footer" id="blogs">
      <div className="footer-cta">
        <div>
          <h2>Ready for what’s next?</h2>
          <p>
            Discover colleges, find opportunities, list your institution,
            or start hiring with CampusPe.
          </p>
        </div>

        <div className="footer-cta-actions">
          <a className="primary-button" href="#colleges">
            Explore Colleges →
          </a>
          <a className="primary-button" href="#opportunities">
            Find Opportunities →
          </a>
          <a className="secondary-button" href="#colleges">
            List Your College
          </a>
          <a className="secondary-button" href="#employers">
            Post a Job
          </a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="brand" href="#home">
            <span className="brand-mark">C</span>
            <span>
              Campus<span className="brand-highlight">Pe</span>
            </span>
          </a>

          <p>From choosing a college to finding your next opportunity.</p>
          <p>
            CampusPe connects students, colleges and employers in one place.
          </p>
        </div>

        {groups.map((group) => (
          <div className="footer-link-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-contact">
        <a href="mailto:support@campuspe.com">
          ✉ support@campuspe.com
        </a>
        <span>● Students · Colleges · Employers</span>
      </div>

      <div className="footer-bottom">
        <span>© 2026 CampusPe Technologies Pvt. Ltd.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

/* -------------------- MAIN PAGE -------------------- */

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <OpportunitySection />
        <ResumeSection />
        <CollegeSection />
        <EmployerSection />
        <AppShowcase />
        <SupportSection />
      </main>

      <SiteFooter />
    </>
  );
}
