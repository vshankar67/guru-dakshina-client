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
    <div className="container mt-5">
      <h1 className="fw-bold text-center mb-20">Contact Us</h1>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <h2 className="h5 mb-3">Send Us a Message</h2>
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
          <h2 className="h5 mb-3">We're Always Eager to Hear From You!</h2>
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
