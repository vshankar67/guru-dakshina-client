import HeroBanner from "../components/HeroBanner";


const Courses = () => {
  return (
    <div className=" ">

      <HeroBanner />

      <div style={{ textAlign: 'center' }}>
        <div style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 30px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'inline-block',
        textAlign: 'center'  
        }}>
        <h1 className="fw-bold mb-0">
        <b>Courses Offered</b>
        </h1>
        </div>
      </div>

      {/* Section: Foundation Course Overview */}
      
      <section className="mb-5 why-us" data-aos="fade-up" style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '60px 20px',
          boxSizing: 'border-box',
      }}>
        
        <div style={{ textAlign: "center",  }}>
          <h2 className="h4"> Foundation Course (Class 7–12)</h2>
          <br />
          <br />

          <div className="container" style={{
          padding: '20px',
          borderRadius: '8px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          
        }}>
          Our
          <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Foundation Course </span> 
          is designed especially for students of
          <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Classes 7, 8, 9, 10, 11 & 12</span>
          who want to build a strong academic base and prepare for future competitive examinations. At
          this crucial stage, the right guidance helps students not only perform well in their school
          curriculum but also equips them with the concepts and problem-solving skills required for exams
          like
          <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> NTSE, Olympiads, JEE, NEET, and other entrance tests.</span>
        </div>
          <br />
          <br />
        </div>


        <div className="text-center container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '2', textAlign: 'left', paddingLeft: '20px' }}>
          <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Comprehensive Coverage </span>– Focus on Mathematics, Science, and Analytical Reasoning to strengthen fundamentals.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Early Competitive Edge </span>– Preparation for NTSE, Olympiads, and scholarship exams along with board syllabus.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Concept Clarity </span>– Emphasis on understanding core concepts instead of rote learning.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Regular Tests & Assessments </span>– Periodic assignments, practice papers, and mock tests to track progress.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Expert Faculty </span>– Experienced mentors guide students through interactive teaching methods.</li>
          <li><span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> Step-by-Step Learning Path </span>– Gradual development of logical thinking, analytical skills, and exam temperament.</li>
          </ul>
          </div>
          <div style={{ flex: '1', textAlign: 'left' }}>
          <img src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwY291cnNlfGVufDB8fDB8fHww" alt="Online Class" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
        
      </section>
      

      {/* Section: Batch Details */}
      <div className="container mb-5">
      <section data-aos="fade-up">
        <h2 className=""> <span> <b>Batch Timings & Structure</b></span></h2>
        <table className="table table-bordered mt-3">
          <thead className="table-light">
            <tr>
              <th>Class</th>
              <th>Batch Name</th>
              <th>Days</th>
              <th>Time</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class 7</td>
              <td>Foundation 7A</td>
              <td>Mon, Wed, Fri</td>
              <td>5:00 PM – 6:00 PM</td>
              <td>Online (Live)</td>
            </tr>
            <tr>
              <td>Class 8</td>
              <td>Foundation 8B</td>
              <td>Tue, Thu, Sat</td>
              <td>4:00 PM – 5:00 PM</td>
              <td>Online (Live)</td>
            </tr>
            <tr>
              <td>Class 9–10</td>
              <td>Board Focus</td>
              <td>Mon to Sat</td>
              <td>6:30 PM – 7:30 PM</td>
              <td>Online (Live)</td>
            </tr>
            <tr>
              <td>Class 11–12</td>
              <td>Math Mastery</td>
              <td>Mon to Fri</td>
              <td>8:00 PM – 9:00 PM</td>
              <td>Online (Live)</td>
            </tr>
          </tbody>
        </table>
      </section>
      </div>
      
    </div>
  );
};

export default Courses;
