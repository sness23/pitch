import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#top" className="nav-logo">doi.bio</a>
          <div className="nav-links">
            <a href="#problem" className="nav-link">Problem</a>
            <a href="#solution" className="nav-link">Solution</a>
            <a href="#market" className="nav-link">Market</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#contact" className="btn-primary-small">Get Early Access</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content" data-animate>
            <div className="hero-badge">Intelligence Augmentation Platform</div>
            <h1 className="hero-title">
              Where papers meet proteins.
              <span className="gradient-text"> Where teams move faster.</span>
            </h1>
            <p className="hero-subtitle">
              doi.bio unifies AI-powered literature synthesis with interactive molecular context.
              Structural biologists cut onboarding time in half and make structurally-aware decisions with confidence.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">Request Private Preview</a>
              <a href="#solution" className="btn-secondary">Explore Platform →</a>
            </div>
            <div className="hero-stats">
              <div className="stat" data-animate>
                <div className="stat-value">200M+</div>
                <div className="stat-label">AlphaFold Structures</div>
              </div>
              <div className="stat" data-animate>
                <div className="stat-value">243K+</div>
                <div className="stat-label">PDB Entries</div>
              </div>
              <div className="stat" data-animate>
                <div className="stat-value">50%</div>
                <div className="stat-label">Faster Onboarding</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section section-dark">
        <div className="container">
          <div className="section-header" data-animate>
            <div className="section-badge">The Challenge</div>
            <h2>Discovery teams juggle fragmented tools</h2>
            <p className="section-subtitle">
              R&D lives in two places—papers and proteins—but today's tools don't connect them
            </p>
          </div>
          <div className="card-grid">
            <div className="glass-card" data-animate>
              <div className="card-icon">📄</div>
              <h3>Scattered Knowledge</h3>
              <p>PDFs, notes, and wikis rarely converge into reusable institutional memory. Scientists spend hours re-synthesizing context.</p>
              <div className="card-tags">
                <span>Manual synthesis</span>
                <span>Lost rationale</span>
                <span>Slow ramp</span>
              </div>
            </div>
            <div className="glass-card" data-animate>
              <div className="card-icon">🧬</div>
              <h3>Disconnected Structure</h3>
              <p>Molecular viewers exist in isolation, forcing scientists to context-switch between literature insights and 3D analysis.</p>
              <div className="card-tags">
                <span>No shared state</span>
                <span>Missed clashes</span>
                <span>Wasted cycles</span>
              </div>
            </div>
            <div className="glass-card" data-animate>
              <div className="card-icon">⚙️</div>
              <h3>Opaque Automation</h3>
              <p>Scripts and pipelines run without capturing reasoning, creating compliance headaches and repeated mistakes.</p>
              <div className="card-tags">
                <span>Hard to audit</span>
                <span>Limited reuse</span>
                <span>Slow debugging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section">
        <div className="container">
          <div className="solution-layout">
            <div className="solution-content" data-animate>
              <div className="section-badge">The Platform</div>
              <h2>One workspace orchestrating context and compute</h2>
              <p className="lead-text">
                doi.bio blends AI literature synthesis, interactive molecular context, and guided workflows
                into a single collaborative surface.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">🔗</div>
                  <div>
                    <h4>Knowledge Graph</h4>
                    <p>AI extracts targets, ligands, and assays from papers—building an interlinked graph that stays synced with 3D structures.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🧪</div>
                  <div>
                    <h4>Live Molecular Context</h4>
                    <p>PDB and AlphaFold structures load instantly, with pocket annotation, clash detection, and conservation analysis built in.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div>
                    <h4>Workflow Automation</h4>
                    <p>Trigger docking, MD, or custom compute with one click—results flow back into the narrative with full provenance.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <div>
                    <h4>Team Collaboration</h4>
                    <p>Decisions, rationales, and experiments become shared IP. New scientists inherit the full context in hours, not weeks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="solution-visual" data-animate>
              <div className="workspace-preview">
                <div className="workspace-header">
                  <div className="workspace-tabs">
                    <div className="tab active">Knowledge</div>
                    <div className="tab">Structure</div>
                    <div className="tab">Workflows</div>
                  </div>
                </div>
                <div className="workspace-body">
                  <div className="workspace-pane left">
                    <div className="pane-item">
                      <div className="item-icon">📑</div>
                      <div className="item-text">
                        <div className="item-title">Kinase inhibitor analysis</div>
                        <div className="item-meta">12 papers • 8 structures</div>
                      </div>
                    </div>
                    <div className="pane-item">
                      <div className="item-icon">🎯</div>
                      <div className="item-text">
                        <div className="item-title">Target: EGFR T790M</div>
                        <div className="item-meta">Resistance mechanism</div>
                      </div>
                    </div>
                    <div className="pane-item">
                      <div className="item-icon">💊</div>
                      <div className="item-text">
                        <div className="item-title">Lead compounds</div>
                        <div className="item-meta">15 ligands compared</div>
                      </div>
                    </div>
                  </div>
                  <div className="workspace-pane right">
                    <div className="structure-placeholder">
                      <div className="structure-glow"></div>
                      <div className="structure-text">Interactive 3D Viewer</div>
                      <div className="structure-subtitle">PDB • AlphaFold • MD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="section section-gradient">
        <div className="container">
          <div className="section-header" data-animate>
            <div className="section-badge">Market Opportunity</div>
            <h2>Multi-billion dollar tailwinds</h2>
            <p className="section-subtitle">
              AI-enabled discovery is accelerating, and structural biology is at the center
            </p>
          </div>
          <div className="market-grid">
            <div className="market-card large" data-animate>
              <div className="market-value">$20B+</div>
              <div className="market-label">AI Drug Discovery Market by 2030</div>
              <div className="market-growth">~30% CAGR</div>
            </div>
            <div className="market-card" data-animate>
              <div className="market-value">$95B+</div>
              <div className="market-label">Bioinformatics by 2032</div>
              <div className="market-growth">17% CAGR</div>
            </div>
            <div className="market-card" data-animate>
              <div className="market-value">$2.23B</div>
              <div className="market-label">Avg R&D cost per drug</div>
              <div className="market-growth">Every month counts</div>
            </div>
          </div>
          <div className="value-props" data-animate>
            <div className="value-prop">
              <h4>Who We Serve</h4>
              <p>Structural biologists, computational chemists, medicinal chemists in pharma, biotech, CROs, and academic labs</p>
            </div>
            <div className="value-prop">
              <h4>Immediate ROI</h4>
              <p>Days → hours for target triage. 50%+ faster onboarding. Fewer dead-end designs through early structural alerts.</p>
            </div>
            <div className="value-prop">
              <h4>Why Now</h4>
              <p>AlphaFold opened the floodgates. Teams need tools to operationalize 200M+ predictions—not just view them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header" data-animate>
            <div className="section-badge">Leadership</div>
            <h2>Deep domain expertise meets technical excellence</h2>
          </div>
          <div className="team-grid">
            <div className="team-card" data-animate>
              <div className="team-avatar">
                <div className="avatar-placeholder">SN</div>
              </div>
              <h3>Steven Randolph Ness</h3>
              <div className="team-role">Founder & CEO</div>
              <p className="team-bio">
                Structural biochemist with ML PhD and decades of Linux/software experience.
                Deep expertise in PDB/AlphaFold ecosystems, molecular visualization, and AI-assisted research tools.
              </p>
              <div className="team-expertise">
                <span>Structural Biology</span>
                <span>Machine Learning</span>
                <span>Molecular Viz</span>
                <span>AI Research</span>
              </div>
            </div>
            <div className="team-card advisory" data-animate>
              <div className="advisory-icon">🎯</div>
              <h3>Advisory Board</h3>
              <div className="team-role">In Development</div>
              <p className="team-bio">
                Assembling leaders across medicinal chemistry, platform engineering, business development,
                and regulatory strategy to accelerate delivery and market fit.
              </p>
              <div className="team-expertise">
                <span>Med Chem</span>
                <span>Platform Eng</span>
                <span>BD Strategy</span>
                <span>Regulatory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-final">
        <div className="container">
          <div className="contact-wrapper" data-animate>
            <div className="contact-content">
              <div className="section-badge">Get Started</div>
              <h2>Join the private preview</h2>
              <p className="contact-subtitle">
                Partner with us during rollout. Design-partner spots are limited.
              </p>
              <div className="contact-links">
                <a href="mailto:sness@sness.net" className="contact-link">
                  <div className="link-icon">✉️</div>
                  <div>
                    <div className="link-title">Email</div>
                    <div className="link-value">sness@sness.net</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/steven-ness/" target="_blank" rel="noopener" className="contact-link">
                  <div className="link-icon">💼</div>
                  <div>
                    <div className="link-title">LinkedIn</div>
                    <div className="link-value">Connect with Steven</div>
                  </div>
                </a>
                <a href="https://doi.bio" target="_blank" rel="noopener" className="contact-link">
                  <div className="link-icon">🌐</div>
                  <div>
                    <div className="link-title">Platform</div>
                    <div className="link-value">doi.bio</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="live-platforms" data-animate>
              <h3>Explore Live Surfaces</h3>
              <a href="https://c.doi.bio" target="_blank" rel="noopener" className="platform-card">
                <div className="platform-icon">📝</div>
                <div>
                  <div className="platform-name">c.doi.bio</div>
                  <div className="platform-desc">Collaborative multiuser notebook</div>
                </div>
              </a>
              <a href="https://ci.doi.bio" target="_blank" rel="noopener" className="platform-card">
                <div className="platform-icon">🧬</div>
                <div>
                  <div className="platform-name">ci.doi.bio</div>
                  <div className="platform-desc">Collaborative molecular viewer</div>
                </div>
              </a>
              <a href="https://ai.doi.bio" target="_blank" rel="noopener" className="platform-card">
                <div className="platform-icon">🤖</div>
                <div>
                  <div className="platform-name">ai.doi.bio</div>
                  <div className="platform-desc">Ask AI about your molecules</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">doi.bio</div>
              <p>Intelligence Augmentation for Molecular Discovery</p>
            </div>
            <div className="footer-links">
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#market">Market</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 doi.bio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
