import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Vue.js', level: 75 },
    { name: 'Python', level: 70 }
  ];

  return (
    <div className="min-vh-100">
      {/* Custom Styles */}
      <style>{`
        :root {
          --primary-color: #2c3e50;
          --secondary-color: #3498db;
          --accent-color: #e74c3c;
          --light-bg: #f8f9fa;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
        }
        
        .navbar-brand {
          font-weight: 700;
          font-size: 1.5rem;
        }
        
        .hero-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: white;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .btn-custom {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          padding: 12px 30px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        
        .btn-custom:hover {
          background-color: #c0392b;
          border-color: #c0392b;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          width: 80px;
          height: 4px;
          background-color: var(--secondary-color);
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .skill-bar {
          height: 10px;
          background-color: #e9ecef;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
          border-radius: 5px;
          transition: width 2s ease-in-out;
        }
        
        .experience-card {
          border-left: 4px solid var(--secondary-color);
          background: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .contact-section {
          background-color: var(--light-bg);
        }
        
        .contact-info {
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          padding: 2rem;
        }
        
        .footer {
          background-color: var(--primary-color);
          color: white;
        }
        
        .social-links a {
          color: white;
          font-size: 1.5rem;
          margin: 0 10px;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">Vishalgouda Goudar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="hero-title">Hello, I'm Vishalgouda Goudar</h1>
              <p className="hero-subtitle">
                MERN Stack Developer passionate about building efficient and user-friendly web applications
              </p>
              <p className="lead mb-4">
                Currently working as a Frontend Developer, specializing in React.js, JavaScript, and modern web technologies.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-custom btn-lg">Get In Touch</a>
                <a href="#projects" className="btn btn-outline-light btn-lg">View My Work</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="h4 mb-3">Career Objective</h3>
              <p className="text-muted">
                To start my career as a MERN Stack Developer in a growth-oriented company, using my skills in 
                MongoDB, Express.js, React.js, and Node.js to build efficient and user-friendly web applications.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="h4 mb-3">Soft Skills</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Communication Skills</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Time Management</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Project Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Analytical Thinking</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Independent Work</li>
                    <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="experience-card p-4 mb-4">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h4 mb-1">Frontend Developer</h3>
                    <h4 className="h6 text-muted mb-2">Anek Technologies Pvt Ltd, Belgaum, Karnataka</h4>
                  </div>
                  <span className="badge bg-primary">May 2025 – Present</span>
                </div>
                <ul className="mb-0">
                  <li>Developed and maintained responsive web applications using React.js, Redux, and JavaScript</li>
                  <li>Collaborated with backend teams to integrate REST APIs and ensure smooth data flow</li>
                  <li>Enhanced user experience by optimizing UI/UX design and implementing reusable components</li>
                  <li>Improved application performance through lazy loading and code optimization</li>
                </ul>
              </div>

              <div className="experience-card p-4">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h4 mb-1">MERN Stack Developer</h3>
                    <h4 className="h6 text-muted mb-2">Avishkar Minds Pvt Ltd, Belagavi, Karnataka</h4>
                  </div>
                  <span className="badge bg-secondary">Nov 2023 – May 2024</span>
                </div>
                <ul className="mb-0">
                  <li>Developed the frontend using React.js, Redux, JavaScript, HTML, and CSS</li>
                  <li>Built responsive UI components for temple listing, search, cart, and checkout</li>
                  <li>Implemented Redux state management for authentication, cart, and order workflows</li>
                  <li>Integrated REST APIs to fetch temple, pooja, and user details dynamically</li>
                  <li>Ensured secure login/registration with validation and error handling</li>
                  <li>Optimized performance with lazy loading and code splitting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="h4 mb-1">Bachelor of Engineering</h3>
                      <h4 className="h6 text-muted mb-2">Mechanical Engineering</h4>
                      <p className="text-muted mb-1">SG Balekundri Institute of Technology, Belagavi</p>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-success mb-2">2022</span>
                      <p className="mb-0 fw-bold">GPA: 7.68</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <h3 className="h3 mb-3">Devalayas.com</h3>
                  <h4 className="h6 text-muted mb-4">Temple E-Commerce & Devotional Services Platform</h4>
                  
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-muted mb-4">
                        A comprehensive web platform that connects devotees with temples, enabling online pooja bookings, 
                        donations, and spiritual services. Built with modern web technologies to provide a seamless user experience.
                      </p>
                      
                      <h5 className="h6 mb-3">Key Features:</h5>
                      <ul className="text-muted">
                        <li>Responsive UI components for temple listing and search functionality</li>
                        <li>Shopping cart and secure checkout system</li>
                        <li>Redux state management for complex workflows</li>
                        <li>RESTful API integration for dynamic content</li>
                        <li>User authentication with validation and error handling</li>
                        <li>Performance optimization with lazy loading</li>
                      </ul>
                    </div>
                    
                    <div className="col-md-4">
                      <h5 className="h6 mb-3">Technologies Used:</h5>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-primary">React.js</span>
                        <span className="badge bg-secondary">Redux</span>
                        <span className="badge bg-success">JavaScript</span>
                        <span className="badge bg-info">HTML</span>
                        <span className="badge bg-warning">CSS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="contact-info">
                    <h3 className="h4 mb-4">Contact Information</h3>
                    <div className="mb-3">
                      <strong>Address:</strong><br />
                      <span className="text-muted">Anjaneya Nagar, Belgaum, Karnataka 590016</span>
                    </div>
                    <div className="mb-3">
                      <strong>Mobile:</strong><br />
                      <span className="text-muted">+91 7892660979</span>
                    </div>
                    <div className="mb-3">
                      <strong>Email:</strong><br />
                      <span className="text-muted">vishalgoudar143@gmail.com</span>
                    </div>
                    <div className="mb-3">
                      <strong>Languages:</strong><br />
                      <span className="text-muted">Kannada, English, Hindi</span>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="contact-info">
                    <h3 className="h4 mb-4">Send Message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={4}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-custom w-100">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2024 Vishalgouda Goudar. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="social-links text-md-end">
                <a href="https://linkedin.com/in/vishalgoudar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:vishalgoudar143@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel:+917892660979" aria-label="Phone">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
