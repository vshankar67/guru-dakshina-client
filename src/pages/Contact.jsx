import HeroBanner from "../components/HeroBanner";
import { Phone, Email } from "@mui/icons-material";
import '../components/Header.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Message sent successfully!");
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="container mt-5 ">
      <h1 className="fw-bold text-center mb-20"> <div style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 30px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'inline-block',
        textAlign: 'center'  
        }}>Contact Us</div></h1>
      <br />
      <br />

    <div className="why-us" style={{
      
      
      padding: '20px',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      We’re here to help you at every step of your learning journey. Whether you have questions
      about our <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}>courses</span>, 
      <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> online classes</span>, 
      <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> admissions</span>, or 
      <span className="h5" style={{color: 'yellow', fontWeight: 'bold'}}> technical support</span>, 
      feel free to reach out to us.
    </div>
    
    <br />
    <br />

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4 " data-aos="fade-right">

          <div style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h2 className="mb-3">Send Us a Message</h2> 
          </div>
          

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="tel" className="form-control" id="subject" placeholder="Enter your Subject" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-login">Submit</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="col-md-6 mb-4" data-aos="fade-left">
          <div style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
        }}>
            <h2 className="mb-3" style={{ margin: 0 }}>We're Always Eager to Hear From You!</h2>
        </div>
          <br />
          <br />
          
          <p className="hover-text-red" style={{ color: "black", }}><Phone className='text-red' /><strong>Phone:</strong> +91-7903218495</p>
          <br />
          <br />
          <p className="hover-text-red" style={{ color: "black", }}><Email className='text-red' /><strong>Email:</strong> contact@gurudakshina.com</p>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;
