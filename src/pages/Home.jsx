import HeroBanner from "../components/HeroBanner";
import FeaturesSection from "../components/FeaturesSection";
import ContactCTA from "../components/ContactCTA";
import TestimonialBoxes from "../components/TestimonialBoxes";
import VisionFeatures from "../components/VisionFeatures";

const Home = () => {
  return (

    <div className="mt-0">
      <HeroBanner />
       <FeaturesSection />
      <div className="container mt-5">
            
      <section className="text-center" data-aos="fade-up">
        <h1 className="display-4 fw-bold">Welcome to Guru Dakshina</h1>
        <p className="lead">Your trusted platform for mastering Mathematics from Class 7 to 12.</p>
      </section>
      

      {/* Key Indicators */}
      
      <section className="mt-5" data-aos="fade-up">
        <h2 className="h1 mb-3">Key Highlights</h2>
        <div className="text-center" style={{ backgroundColor: '#66d8d8ff', padding: '20px', borderRadius: '8px', }}>
          <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li><strong> Foundation Courses for all boards (CBSE, ICSE, State Boards)</strong></li>
          <li><strong> Special focus on Conceptual Clarity & Exam Preparation</strong></li>
          <li><strong> Expert Faculty with over 20+ years of experience</strong></li>
          <li><strong> Flexible Batches (Morning / Evening)</strong></li>
          <li><strong> 100% Online and Interactive Sessions</strong></li>
        </ul>
        </div>
        
      </section>
      

      {/* Testimonials (Placeholder) */}
      
      <section className="mt-5" data-aos="fade-up">
        <h2 className="h1 mb-3">Student Testimonials</h2>
        <TestimonialBoxes />
      </section>
      

      {/* Features Section (Placeholder) */}
      
      <section className="mt-5 text-center" data-aos="fade-up">
        <h2 className="h1 mb-3">Why Choose Us?</h2>
        <p>Affordable and comprehensive learning experience to students</p>
      </section>
      

      
      <section id="scholarship" className="container py-5 bg-schollership" data-aos="fade-up">
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
