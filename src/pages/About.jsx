import HeroBanner from "../components/HeroBanner";
import logo from "../assets/logo.png";
import InstructorCard from "../components/InstructorCard";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const About = () => {
  return (
    
    <div className="">  

    <HeroBanner />

      {/* Section: About the Academy */}
      
      <section className=" color-orange mb-0" data-aos="fade-up">
        <h1 className="fw-bold text-center "><div style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 30px',
        borderRadius: '8px',
        
        display: 'inline-block',
        textAlign: 'center'  
        }}>About Guru Dakshina</div></h1>
        
        <div className="container">
        <p>
          Guru Dakshina is an online education platform committed to building strong mathematical foundations
          for students from Class 7 to 12. Our aim is to simplify complex concepts, promote analytical thinking,
          and help students prepare for board exams and competitive tests.
        </p>
        </div>
        
      </section>

      {/* Section: Director's Message */}

      <section id="director" className="why-us mt-0" data-aos="fade-up"  style={
        { 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'
        }} >
          <h2 className="h1 text-center"><b>Director’s Message</b></h2>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
        {/* Left side: Image */}
        <div  style={{ flex: '2', textAlign: 'left', paddingLeft: '20px' }}>
          <p className="h4">
            A renowned mathematician and educator with over 20 years of experience in teaching mathematics,
            RK Srivastava has mentored thousands of students toward academic excellence. His teaching method
            is unique, result-driven, and focused on real-world understanding of mathematics.
          </p>
        </div>

        {/* Right side: Text */}
        <div style={{ flex: '1', textAlign: 'left' }}>
          <img src="https://media.istockphoto.com/id/1405204582/photo/microphone-in-conference-seminar-room-event-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=YwVX44InvqW_dNXbCxs72ubgW4B_pgTwtBdJbHRLfb8=" alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
        </div>
      </section>
     

      {/* Section: Founder */}
      
      <section className="mb-5 bg-schollership" data-aos="fade-up" style={
        { 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'
        }}>
        <h2 className="h1 mb-3"><b>Meet the Founder - RK Srivastava</b></h2>

        <div className="container py-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    
        {/* Left side: Image */}
        <div style={{ flex: '1', textAlign: 'left' }}>
          <img src="https://media.istockphoto.com/id/1282460001/photo/conference-room-or-seminar-meeting-room-in-business-event-session-of-government-academic.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIgtcyE76iX09SWZCLzh5KATPIxNo78oSE96sj-dAFc=" alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        {/* Right side: Text */}
        <div className="container py-5" style={{ flex: '2', textAlign: 'left', paddingLeft: '20px' }}>
          <p className="h4">
            A renowned mathematician and educator with over 20 years of experience in teaching mathematics,
            RK Srivastava has mentored thousands of students toward academic excellence. His teaching method
            is unique, result-driven, and focused on real-world understanding of mathematics.
          </p>
        </div>
        </div>
      </section>
      

      {/* Section: Our Team */}
      
      <section className="mb-5 container" data-aos="fade-up">
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
      
      <section data-aos="fade-up" className="color-green" style={
        { 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'
        }}>
        <h1 className=" mb-3"><b> Achievements & Scholarships</b> </h1>
        <br />
        <br />
        <div className="text-center container">
          <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}>Thousands of Students Empowered Nationwide -</span> Our programs have impacted the academic journeys of thousands of students across India, helping them unlock their full potential.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}>Outstanding Academic Performance -</span> We consistently deliver<span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> 90%+ results </span>in board examinations, thanks to our expert faculty, personalized mentoring, and rigorous academic support.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}>Merit-Based & Need-Based Scholarships -</span> We proudly offer scholarship programs for <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> high-performing </span>as well as <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> underprivileged students </span>making quality education accessible to all.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}>Recognized Excellence -</span> Our institution is recognized by<span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> leading educational boards and academic institutions </span>for maintaining high standards of teaching and student success.</li>
        </ul>
        </div>
        <div className="text-center mt-4">
        <Link to="/courses" className="btn btn-primary btn-login mt-4">
              Know More <ArrowForwardIcon />
         </Link>
         </div>
        
      </section>      

    </div>
  );
};

export default About;
