import HeroBanner from "../components/HeroBanner";
import logo from "../assets/logo.png";
import InstructorCard from "../components/InstructorCard";


const About = () => {
  return (
    
    <div className="container mt-5">    

      {/* Section: About the Academy */}
      
      <section className="mb-5" data-aos="fade-up">
        <h1 className="fw-bold text-center mb-4">About Guru Dakshina</h1>
        <p>
          Guru Dakshina is an online education platform committed to building strong mathematical foundations
          for students from Class 7 to 12. Our aim is to simplify complex concepts, promote analytical thinking,
          and help students prepare for board exams and competitive tests.
        </p>
      </section>

      {/* Section: Director's Message */}

      <section id="director" className="container py-5" data-aos="fade-up"  >
          <h2 className="h1 mb-4">Director’s Message</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
        {/* Left side: Image */}
        <div style={{ flex: '2', textAlign: 'left', paddingLeft: '20px' }}>
          <p>
            A renowned mathematician and educator with over 20 years of experience in teaching mathematics,
            RK Srivastava has mentored thousands of students toward academic excellence. His teaching method
            is unique, result-driven, and focused on real-world understanding of mathematics.
          </p>
        </div>

        {/* Right side: Text */}
        <div style={{ flex: '1', textAlign: 'left' }}>
          <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
        </div>
      </section>
     

      {/* Section: Founder */}
      
      <section className="mb-5" data-aos="fade-up">
        <h2 className="h1 mb-3">Meet the Founder - RK Srivastava</h2>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
        {/* Left side: Image */}
        <div style={{ flex: '1', textAlign: 'left' }}>
          <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        {/* Right side: Text */}
        <div style={{ flex: '2', textAlign: 'left', paddingLeft: '20px' }}>
          <p>
            A renowned mathematician and educator with over 20 years of experience in teaching mathematics,
            RK Srivastava has mentored thousands of students toward academic excellence. His teaching method
            is unique, result-driven, and focused on real-world understanding of mathematics.
          </p>
        </div>
        </div>
      </section>
      

      {/* Section: Our Team */}
      
      <section className="mb-5" data-aos="fade-up">
        <h2 className="h1 mb-3"> Our Team</h2>
        <p>
          Our faculty includes experienced teachers, passionate about education, who make online learning
          engaging and effective. We ensure students receive one-on-one guidance, regular assessments, and
          24/7 doubt resolution.
        </p>
        <div className="edu-team-area team-area-1 gap-tb-text">
            <div className="container">
                
                <div className="row g-5">
                    <InstructorCard
                        name="Mr. Gautam Sinha"
                        title="Founder (GuruDkshina)"
                        image="https://mathematicsguru.in/admin/images/default-profile.png"
                    />
                    <InstructorCard
                        name="Mr. ABC Kumar (Maths Educator)"
                        title="Assistant"
                        image="https://mathematicsguru.in/admin/images/default-profile.png"
                    />
                </div>
            </div>
        </div>
      </section>
      

      {/* Section: Achievements & Scholarships */}
      
      <section data-aos="fade-up">
        <h1 className=" mb-3"> Achievements & Scholarships</h1>
        <br />
        <br />
        <div className="text-center">
          <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>Thousands of students enrolled across India</li>
          <li>Consistent 90%+ results in board exams</li>
          <li>Scholarship programs for meritorious and underprivileged students</li>
          <li>Recognized by various educational boards and institutions</li>
        </ul>
        </div>
        
      </section>      

    </div>
  );
};

export default About;
