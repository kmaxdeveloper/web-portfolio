import { useEffect, useRef, useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";

const projects = [
  {
    title: "Little Lemon",
    description: "A restaurant website with an interactive table booking experience built with React.",
    getImageSrc: () => "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    url: "https://github.com/kmaxdeveloper/little-lemon-web",
  },
  {
    title: "Math Test",
    description: "An educational mobile app in Kotlin designed to help students prepare for mathematics exams.",
    getImageSrc: () => "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&auto=format&fit=crop&q=80",
    url: "https://github.com/kmaxdeveloper/MathTest",
  },
  {
    title: "Arrow Flow",
    description: "A logic puzzle Android game in Kotlin focused on strategy, geometry, and problem solving.",
    getImageSrc: () => "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    url: "https://github.com/kmaxdeveloper/Arrow-Flow",
  },
  {
    title: "Developer Portfolio",
    description: "A personal showcase of skills, projects, and web applications built using React.",
    getImageSrc: () => "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    url: "https://github.com/kmaxdeveloper",
  },
];

// Five social links on the left side as per Coursera rubric
const socials = [
  {
    name: "Email",
    url: "mailto:Komilcoder7@gmail.com",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/kmaxdeveloper",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.67-.75 1.67-1.67a1.67 1.67 0 1 0-3.34 0c0 .92.75 1.67 1.67 1.67m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    url: "https://medium.com",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.444-2.091-10.48-2.189-.444 2.091zm1.31-4.839l9.743 4.502.887-1.947-9.743-4.502-.887 1.947zm2.711-4.708l8.326 6.828 1.348-1.657-8.326-6.828-1.348 1.657zm4.908-4.706l6.45 8.653 1.706-1.277-6.45-8.653-1.706 1.277z" />
      </svg>
    ),
  },
];

const INITIAL_FORM = {
  firstName: "",
  email: "",
  type: "hireMe",
  comment: "",
};

function App() {
  // Scroll-based header state
  const [headerVisible, setHeaderVisible] = useState(true);
  const isVisibleRef = useRef(true);
  const lastScrollY = useRef(0);

  // Form states
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [touched, setTouched] = useState({ firstName: false, email: false, comment: false });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Exact validation rules as per Coursera Rubric:
  // - Name empty: "Required"
  // - Email empty: "Required", invalid: "Invalid email address"
  // - Message empty: "Required", < 25 chars: "Must be at least 25 characters"
  const getFieldError = (name, value) => {
    const trimmed = (value || "").trim();
    if (name === "firstName") {
      if (!trimmed) return "Required";
      return "";
    }
    if (name === "email") {
      if (!trimmed) return "Required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Invalid email address";
      return "";
    }
    if (name === "comment") {
      if (!trimmed) return "Required";
      if (trimmed.length < 25) return "Must be at least 25 characters";
      return "";
    }
    return "";
  };

  const errors = {
    firstName: getFieldError("firstName", formData.firstName),
    email: getFieldError("email", formData.email),
    comment: getFieldError("comment", formData.comment),
  };

  const isFormValid = !errors.firstName && !errors.email && !errors.comment;

  // Header scroll detection: rAF throttled, hides on scroll down, shows on scroll up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollY.current;

      if (currentScrollY <= 60) {
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setHeaderVisible(true);
        }
      } else if (Math.abs(currentScrollY - prevScrollY) > 6) {
        const shouldBeVisible = currentScrollY < prevScrollY;
        if (isVisibleRef.current !== shouldBeVisible) {
          isVisibleRef.current = shouldBeVisible;
          setHeaderVisible(shouldBeVisible);
        }
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setResponse(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Submission handler with 50% simulated server response
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submit, URL reload

    setTouched({ firstName: true, email: true, comment: true });

    if (!isFormValid) {
      return;
    }

    setIsLoading(true);
    setResponse(null);

    const submitName = formData.firstName.trim();

    // 50% random chance as defined in the Coursera useSubmit hook rubric
    setTimeout(() => {
      const isSuccess = Math.random() >= 0.5;

      if (isSuccess) {
        setResponse({
          type: "success",
          title: "All good!",
          description: `Thanks for your submission ${submitName}, we will get back to you shortly!`,
        });
        setFormData(INITIAL_FORM);
        setTouched({ firstName: false, email: false, comment: false });
      } else {
        setResponse({
          type: "error",
          title: "Oops",
          description: "Something went wrong, please try again later",
        });
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* Header: 5 social links on the left side, 2 internal links on the right */}
      <header
        className={`header ${headerVisible ? "header-visible" : "header-hidden"}`}
        aria-hidden={!headerVisible}
      >
        <div className="header-left social-links" aria-label="Social media links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} (opens in a new tab)`}
              className="social-icon-link"
            >
              {social.svg}
            </a>
          ))}
        </div>

        <nav className="header-right nav-links" aria-label="Main navigation">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact Me
          </a>
        </nav>
      </header>

      <main>
        {/* Landing Section: Centered vertically and horizontally, rounded avatar, greeting & summary bio */}
        <section className="landing-section section" id="home">
          <div className="landing-content">
            <div className="avatar-wrapper">
              <img
                src={heroImg}
                alt="Profile avatar"
                className="landing-avatar"
              />
            </div>
            <p className="landing-greeting">Hello, I am Komil!</p>
            <h1 className="landing-bio">A frontend developer specialised in React</h1>
          </div>
        </section>

        {/* Projects Section: 2x2 grid, each card with image at top, white section underneath with title, description, and "See more →" */}
        <section className="projects-section section" id="projects">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img
                    src={project.getImageSrc()}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`See more about ${project.title} (opens in a new tab)`}
                  >
                    See more <span className="arrow-icon">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Me Form Section */}
        <section className="contact-section section" id="contact">
          <div className="contact-wrapper">
            <h2 className="section-title contact-heading">Contact me</h2>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={touched.firstName && !!errors.firstName}
                  className={touched.firstName && errors.firstName ? "input-error" : ""}
                />
                {touched.firstName && errors.firstName && (
                  <span className="error-text" role="alert">
                    {errors.firstName}
                  </span>
                )}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={touched.email && !!errors.email}
                  className={touched.email && errors.email ? "input-error" : ""}
                />
                {touched.email && errors.email && (
                  <span className="error-text" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Type of enquiry */}
              <div className="form-group">
                <label htmlFor="type">Type of enquiry</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Your Message */}
              <div className="form-group">
                <label htmlFor="comment">Your message</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  value={formData.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={touched.comment && !!errors.comment}
                  className={touched.comment && errors.comment ? "input-error" : ""}
                />
                {touched.comment && errors.comment && (
                  <span className="error-text" role="alert">
                    {errors.comment}
                  </span>
                )}
              </div>

              {/* Submit Button with Loading Spinner */}
              <button
                className="btn submit-btn"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="btn-loading">
                    <span className="spinner" aria-hidden="true" />
                    Loading...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>

              {/* Red / Green Alert Response as per Rubric */}
              {response && (
                <div
                  className={`alert-box ${response.type === "success" ? "alert-success" : "alert-error"}`}
                  role="alert"
                >
                  <h4 className="alert-title">{response.title}</h4>
                  <p className="alert-desc">{response.description}</p>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Komil Egamberdiyev. All rights reserved.</p>
        <div className="footer-links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-icon-link"
            >
              {social.svg}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default App;
