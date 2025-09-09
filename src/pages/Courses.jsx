import HeroBanner from "../components/HeroBanner";


const Courses = () => {
  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-center mb-4"> <b>Courses Offered</b></h1>
      <br />
      <br />

      {/* Section: Foundation Course Overview */}
      
      <section className="mb-5" data-aos="fade-up">
        
        <div style={{ textAlign: "center" }}>
          <h2 className="h5"> Foundation Course (Class 7–12)</h2>
          <br />
          <br />

          <p>
          Our foundation course is designed to strengthen core mathematical concepts for students across all boards — CBSE, ICSE, and State Boards.
          With personalized guidance and regular assessments, students are equipped to perform in both academics and competitive exams.
          </p>
          <br />
          <br />
        </div>
        <div className="text-center">
          <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>Conceptual Learning through real-life examples</li>
          <li>Board-wise custom content (CBSE, ICSE, State Board)</li>
          <li>Live Doubt Sessions & Regular Tests</li>
          <li>Recorded Video Access for Revision</li>
          <li>PDF Notes & Assignments provided weekly</li>
          </ul>
        </div>
        
      </section>
      

      {/* Section: Batch Details */}
      
      <section data-aos="fade-up">
        <h2 className="h5"> Batch Timings & Structure</h2>
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
  );
};

export default Courses;
