import HeroBanner from "../components/HeroBanner";
import FeaturesSection from "../components/FeaturesSection";
import ContactCTA from "../components/ContactCTA";
import TestimonialBoxes from "../components/TestimonialBoxes";
import VisionFeatures from "../components/VisionFeatures";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  return (

    <div className="mt-0">
      <HeroBanner />
       <FeaturesSection />
      <div className="container mt-5">
            
      <section className="text-center color-green" data-aos="fade-up" style={{width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'}}>
        <h1 className="display-4 fw-bold"><b>Welcome to Guru Dakshina</b></h1>
        <h5 className=""><b>Your trusted platform for mastering Mathematics from Class 7 to 12.</b></h5>
      </section>
      

      {/* Key Indicators */}
      
      <section className="" data-aos="fade-up">
        <h2 className="h1 mb-3"><b>Key Highlights</b></h2>
        <div className="color-orange" style={{width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'}}>
        <div
          className="text-center container"
          style={{
      
          padding: '20px',
          borderRadius: '8px',
        }}>
        <ul style={{ display: 'inline-block', textAlign: 'left', margin: 0, paddingLeft: '20px' }}>
          <li><strong>Comprehensive Foundation Courses</strong> – Tailored for CBSE, ICSE, and State Board syllabi.</li>
          <li><strong>Concept-Driven Learning</strong> – Emphasis on building a deep understanding of core concepts to excel in school and beyond.</li>
          <li><strong>Experienced Faculty</strong> – Learn from subject experts with over 20 years of proven teaching success.</li>
          <li><strong>Flexible Class Timings</strong> – Morning and evening batches available to suit different schedules.</li>
          <li><strong>Fully Online & Interactive</strong> – Engage in live, two-way sessions from the comfort of your home.</li>
        </ul>
        </div>
        <div className="text-center mt-4">
        <Link to="/courses" className="btn btn-primary btn-login mt-4">
              Know more <ArrowForwardIcon />
         </Link>
         </div>
        </div>
        
      </section>

      

      {/* Testimonials (Placeholder) */}
      
      <section className="mt-5" data-aos="fade-up">
        <h2 className="h1 mb-3">Student Testimonials</h2>
        <TestimonialBoxes />
      </section>
      

      {/* Features Section (Placeholder) */}
      
      <section className="mt-5 text-center why-us" data-aos="fade-up" 
      style={
        { 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'
        }}>        

        <div style={{
            
            
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h2 className="mb-3">Why Choose Us?</h2> 
          </div>

        
        <div style={{
          padding: '20px',
          borderRadius: '8px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6'
        }}>
          By the end of this program, students gain not only
          <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> academic excellence in school exams </span> 
          butalso the 
          <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> to perform in competitive examinations.</span>
          This course lays the perfect foundation for
          <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> future success in JEE, NEET, and beyond.</span>
        </div>
      </section>
      

      
      <section id="scholarship" className=" py-5 bg-schollership" data-aos="fade-up"
      style={
        { 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          padding: '40px 20px',  
          boxSizing: 'border-box'
        }}>
        <h2 className="h1 mb-4">Scholarship Program</h2>
        <p className="text-center ">
          Guru Dakshina offers scholarships for deserving students based on merit and need. Apply now to
          get up to 100% fee waiver for foundation and advanced mathematics coaching.
        </p>
      </section>

      <ContactCTA />
      


      {/* Updates & Vision Section */}
      
      <section className="mt-5" data-aos="fade-up" >
        <div >
          <h2 className="h1 mb-3">Latest Updates & Our Vision</h2>
          <div>
            <p></p>
          </div>
        <VisionFeatures />
        </div>
        
        
      </section>
      
    </div>
    </div>
    
  );
};

export default Home;
