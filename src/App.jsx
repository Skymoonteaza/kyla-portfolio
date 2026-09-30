import { useEffect, useState } from "react";
import "./App.css";

function CodeIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 16 8 32l16 16" />
      <path d="m40 16 16 16-16 16" />
      <path d="m36 10-8 44" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="14" rx="21" ry="8" />
      <path d="M11 14v18c0 4.5 9.4 8 21 8s21-3.5 21-8V14" />
      <path d="M11 32v18c0 4.5 9.4 8 21 8s21-3.5 21-8V32" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="9" y="10" width="46" height="44" rx="5" />
      <path d="M9 23h46" />
      <path d="M21 31h24" />
      <path d="M21 39h16" />
      <path d="M21 47h20" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="m38 10 7 7-6 6 8 8 6-6 7 7-9 9-8-8-15 15-9-9 15-15-8-8 9-9 8 8z" />
      <path d="m10 54 8-8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-dot" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.5 1.6-1.5H18V4.1c-.4-.1-1.4-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.2V10H8.5v3h2.8v8H14z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("kyla-theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("kyla-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 180;

        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    closeMenu();
  };

  const skills = [
    {
      icon: <CodeIcon />,
      title: "Web Development",
      description:
        "Building responsive and practical web interfaces using modern frontend and web technologies.",
      items: ["HTML", "CSS", "JavaScript", "PHP", "React", "Vite"],
    },
    {
      icon: <DatabaseIcon />,
      title: "Data & Database",
      description:
        "Organizing, managing, and working with structured data and database-driven applications.",
      items: [
        "MySQL",
        "Supabase",
        "Database Management",
        "Data Consolidation",
        "Data Management",
      ],
    },
    {
      icon: <DataIcon />,
      title: "Administrative Support",
      description:
        "Supporting digital workflows through accurate data handling, documentation, and reporting.",
      items: [
        "Data Entry",
        "Report Preparation",
        "Document Management",
        "Records Management",
        "Online Research",
      ],
    },
    {
      icon: <ToolsIcon />,
      title: "Tools & Workflow",
      description:
        "Comfortable working with productivity tools, development environments, and digital workflows.",
      items: [
        "Microsoft Excel",
        "Microsoft Word",
        "Google Sheets",
        "Google Docs",
        "Google Drive",
        "VS Code",
        "XAMPP",
      ],
    },
  ];

  const experience = [
    {
      date: "AUGUST 2026 — PRESENT",
      title: "IT / Web Development",
      company: "Tagbilaran City Environmental Management Office",
      description:
        "Develop and maintain web-based systems and digital forms that support office operations. Work with data management, reporting, digital workflows, and technical support.",
      tags: [
        "Web Development",
        "Data Management",
        "Digital Forms",
        "Technical Support",
      ],
    },
    {
      date: "JUNE 2026 — AUGUST 2026",
      title: "Computer Teacher",
      company: "Golden Link College – Bohol Campus",
      description:
        "Taught computer and technology-related subjects while preparing digital learning materials, managing student records, assisting with technical concerns, and maintaining organized academic documentation.",
      tags: [
        "Computer Education",
        "Documentation",
        "Data Management",
        "Technical Support",
      ],
    },
  ];

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["education", "Education"],
    ["projects", "Projects"],
    ["resume", "Resume"],
    ["contact", "Contact"],
  ];

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xqpanwbk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setFormStatus("success");

        setTimeout(() => {
          setFormStatus("");
        }, 6000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="portfolio">
      {/* Floating background decorations */}
      <div className="background-decoration decoration-one"></div>
      <div className="background-decoration decoration-two"></div>
      <div className="background-decoration decoration-three"></div>

      <div className="floating-decoration diamond diamond-one">◆</div>
      <div className="floating-decoration diamond diamond-two">◇</div>
      <div className="floating-decoration diamond diamond-three">◆</div>

      <div className="floating-decoration heart heart-one">♡</div>
      <div className="floating-decoration heart heart-two">♥</div>
      <div className="floating-decoration heart heart-three">♡</div>

      <div className="floating-decoration sparkle sparkle-one">✦</div>
      <div className="floating-decoration sparkle sparkle-two">✧</div>
      <div className="floating-decoration sparkle sparkle-three">✦</div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
            aria-label="Go to homepage"
          >
            <span className="logo-ribbon">🎀</span>

            <span>
              Kyla<span className="logo-dot">.</span>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([id, label]) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/kylamae.monteza"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/sky_moonteaza"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <InstagramIcon />
              </a>

              <a
                href="mailto:uys11631@gmail.com"
                aria-label="Email"
                className="social-icon"
              >
                <MailIcon />
              </a>
            </div>

            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hello-badge">
                <span>♡</span>
                Hello, I'm Kyla
                <span>♡</span>
              </div>

              <h1>
                I create
                <span className="pink-text"> digital experiences</span>
                <br />
                with purpose.
              </h1>

              <p className="hero-description">
                Information Technology professional focused on web development,
                data management, digital systems, and administrative technology
                solutions.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Work Together
                  <span>♡</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("projects")}
                >
                  Explore My Work
                  <ArrowIcon />
                </button>
              </div>

              <div className="tech-row">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="hero-photo-area">
              <div className="photo-decoration photo-diamond diamond-photo-one">
                ◆
              </div>

              <div className="photo-decoration photo-diamond diamond-photo-two">
                ◇
              </div>

              <div className="photo-decoration photo-heart photo-heart-one">
                ♡
              </div>

              <div className="photo-decoration photo-heart photo-heart-two">
                ♥
              </div>

              <div className="photo-decoration photo-sparkle photo-sparkle-one">
                ✦
              </div>

              <div className="photo-decoration photo-sparkle photo-sparkle-two">
                ✧
              </div>

              <div className="photo-card">
                <div className="photo-card-top">
                  <span>✦</span>
                  <span>KYLA HAZEL UY</span>
                  <span>✦</span>
                </div>

                <div className="photo-wrapper">
                  <div className="photo-glow"></div>

                  <img
                    src="/Kylaimg.png"
                    alt="Kyla Hazel Uy"
                    className="profile-photo"
                  />

                  <div className="photo-frame-decoration top-left">
                    ♡
                  </div>

                  <div className="photo-frame-decoration bottom-right">
                    ◆
                  </div>
                </div>

                <div className="ribbon">
                  <span className="ribbon-tail left"></span>

                  <span className="ribbon-center">
                    WEB DEVELOPER
                  </span>

                  <span className="ribbon-tail right"></span>
                </div>

                <div className="photo-card-bottom">
                  <span>♡</span>
                  <span>Web • Data • Technology</span>
                  <span>♡</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            Scroll to explore
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">GET TO KNOW ME</span>
                <h2>About Me</h2>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-main glass-card">
                <div className="card-ribbon">🎀</div>

                <div className="mini-decoration mini-heart">♡</div>
                <div className="mini-decoration mini-diamond">◇</div>

                <h3>
                  Turning ideas into{" "}
                  <span>useful digital solutions.</span>
                </h3>

                <p>
                  I am an Information Technology graduate with hands-on
                  experience in web development, programming, data management,
                  administrative support, and report consolidation.
                </p>

                <p>
                  I enjoy building organized digital systems, improving
                  workflows, working with data, and creating web experiences
                  that are practical and easy to use.
                </p>

                <p>
                  I am open to remote, freelance, and full-time opportunities
                  where I can contribute my technical and organizational skills.
                </p>
              </div>

              <div className="about-details">
                <div className="detail-card">
                  <span className="detail-icon">🎓</span>

                  <div>
                    <small>Education</small>
                    <strong>BS Information Technology</strong>
                  </div>
                </div>

                <div className="detail-card">
                  <span className="detail-icon">📍</span>

                  <div>
                    <small>Based in</small>
                    <strong>Tagbilaran City, Bohol</strong>
                  </div>
                </div>

                <div className="detail-card">
                  <span className="detail-icon">💼</span>

                  <div>
                    <small>Work Arrangement</small>
                    <strong>Remote • Freelance • Full-time</strong>
                  </div>
                </div>

                <div className="detail-card">
                  <span className="detail-icon">🌸</span>

                  <div>
                    <small>Languages</small>
                    <strong>English • Filipino</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section soft-section">
          <div className="section-container">
            <div className="skills-heading">
              <div>
                <span className="eyebrow">WHAT I CAN DO</span>

                <h2>Skills & Expertise</h2>

                <p>
                  A combination of development, data, and digital workflow
                  skills I use to build useful and organized solutions.
                </p>
              </div>

              <div className="coding-badge">
                <span className="coding-badge-icon">
                  <CodeIcon />
                </span>

                <span>
                  <small>MY TOOLKIT</small>
                  <strong>&lt;code /&gt;</strong>
                </span>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-top">
                    <div className="skill-icon-box">
                      {skill.icon}
                    </div>

                    <div className="skill-sparkles">
                      <span>✦</span>
                      <span>♡</span>
                    </div>
                  </div>

                  <h3>{skill.title}</h3>

                  <p className="skill-description">
                    {skill.description}
                  </p>

                  <div className="skill-list">
                    {skill.items.map((item) => (
                      <span key={item}>
                        <i></i>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="skill-card-footer">
                    <span>explore skills</span>

                    <span className="card-arrow">
                      <ArrowIcon />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="coding-strip">
              <span className="coding-strip-icon">
                <CodeIcon />
              </span>

              <div>
                <strong>Building with creativity & code</strong>

                <p>
                  Web development • Data management • Digital systems
                </p>
              </div>

              <span className="coding-strip-decoration">♡ ◆ ✦</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">MY JOURNEY</span>
                <h2>Experience</h2>
              </div>
            </div>

            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-card" key={job.company}>
                  <div className="experience-marker">
                    <span>♡</span>
                  </div>

                  <div className="experience-content">
                    <div className="experience-date">
                      {job.date}
                    </div>

                    <h3>{job.title}</h3>

                    <h4>{job.company}</h4>

                    <p>{job.description}</p>

                    <div className="experience-tags">
                      {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
       <section id="education" className="section">
  <div className="section-heading">
    <span>MY BACKGROUND</span>
    <h2>Education <i className="fa-solid fa-graduation-cap"></i></h2>
    <p>My academic journey and foundation in technology.</p>
  </div>

  <div className="education-card">

    <div className="education-photo-area">
      <div className="education-photo-frame">
        <div className="education-photo-glow"></div>

        <img
          src="/graduatePhoto.png"
          alt="Kyla Hazel Uy Graduation"
          className="graduate-photo"
        />

        <div className="education-photo-ribbon">
          BACHELOR'S DEGREE
        </div>
      </div>

      <span className="education-photo-heart">♡</span>
      <span className="education-photo-diamond">✦</span>
    </div>

    <div className="education-content">
      <span className="education-year">2023 — 2026</span>

      <h3>
        Bachelor of Science in Information Technology
      </h3>

      <p className="education-school">
        Bohol Island State University – Balilihan Campus
      </p>

      <p className="education-description">
        Developed a strong foundation in programming, web development,
        database management, information systems, and technology.
      </p>

      <div className="education-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>PHP</span>
        <span>React</span>
        <span>Database</span>
      </div>

      <div className="education-code">
       
      </div>
    </div>

    <span className="education-decoration">♡</span>
    <span className="education-diamond">✦</span>

  </div>
</section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">SELECTED WORK</span>
                <h2>Projects</h2>
              </div>
            </div>

            <div className="coming-soon-card">
              <div className="coming-ribbon">🎀</div>
              <div className="coming-diamond">◇</div>
              <div className="coming-heart">♡</div>

              <div className="coming-icon">
                <CodeIcon />
              </div>

              <span className="coming-label">
                COMING SOON
              </span>

              <h3>Personal Projects</h3>

              <p>
                I am currently preparing personal projects that showcase my
                web development, data management, and system-building skills.
              </p>

              <div className="coming-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="section soft-section">
          <div className="section-container">
            <div className="resume-card">
              <div className="resume-ribbon">
                <span>♡</span>
                MY RESUME
                <span>♡</span>
              </div>

              <div className="resume-content">
                <span className="eyebrow">
                  LET'S CONNECT
                </span>

                <h2>
                  A little more about
                  <span> my professional journey.</span>
                </h2>

                <p>
                  Explore my education, experience, technical skills, and
                  professional background in my complete resume.
                </p>

                <div className="resume-buttons">
                  <a
                    href="/Kyla-Hazel-Uy-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button link-button"
                  >
                    View Resume
                    <ArrowIcon />
                  </a>

                  <a
                    href="/Kyla-Hazel-Uy-Resume.pdf"
                    download
                    className="secondary-button link-button"
                  >
                    Download PDF
                    <span>↓</span>
                  </a>
                </div>
              </div>

              <div className="resume-visual">
                <div className="resume-paper">
                  <div className="resume-paper-ribbon">
                    🎀
                  </div>

                  <span>KYLA</span>
                  <strong>HAZEL UY</strong>
                  <small>WEB DEVELOPER</small>

                  <div className="resume-lines">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <div className="paper-heart">♡</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="section-container">
            <div className="contact-card">
              <div className="contact-sparkle">✦</div>
              <div className="contact-diamond">◇</div>
              <div className="contact-heart">♡</div>
              <div className="contact-ribbon">🎀</div>

              <span className="eyebrow">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's create something
                <span> meaningful.</span>
              </h2>

              <p>
                I am open to remote, freelance, and full-time opportunities.
                Send me a message and let's talk about your project.
              </p>

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="primary-button contact-submit"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : "Send Message"}

                  <span>♡</span>
                </button>

                {formStatus === "success" && (
                  <div className="form-message success">
                    ✦ Your message has been sent successfully. Thank you
                    for reaching out! ♡
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="form-message error">
                    Something went wrong. Please try again or email me
                    directly at uys11631@gmail.com.
                  </div>
                )}
              </form>

              <div className="contact-info">
                <a href="mailto:uys11631@gmail.com">
                  <span>
                    <MailIcon />
                  </span>
                  uys11631@gmail.com
                </a>

                <a
                  href="https://www.facebook.com/kylamae.monteza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <FacebookIcon />
                  </span>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/sky_moonteaza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <InstagramIcon />
                  </span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <span>🎀</span> Kyla.
          </div>

          <p>
            Designed & developed by Kyla Hazel Uy
          </p>

          <button onClick={() => scrollToSection("home")}>
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;