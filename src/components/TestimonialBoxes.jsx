import React from 'react';
import './TestimonialBoxes.css'; 
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const testimonials = [
  {
    name: 'Soni Rani',
    role: 'Student',
    text: 'This is the best coaching centre in Patna. The teacher tries all the way to help students understand.',
    rating: 4.5,
  },
  {
    name: 'Aditi Vishwakarma',
    role: 'Student',
    text: 'I cleared NEET in my first attempt. The support and teaching method made all the difference!',
    rating: 4.5,
  },
  {
    name: 'Reehan Arora',
    role: 'Student',
    text: 'Very good coaching centre for JEE. They’re professional and offer fantastic service.',
    rating: 4.5,
  },
];

const TestimonialBoxes = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card testimonial-card h-100 border-white shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text flex-grow-1">{item.text}</p>
                  <div className="d-flex justify-content-between align-items-end mt-4">
                    <div>
                      <strong>{item.name}</strong>
                      <div className="text-muted small">{item.role}</div>
                    </div>
                    <div className="rating text-end">
                      
                      <div className="rating-stars text-primary">
                        <StarIcon style={{ color: '#1976d2' }} />
                        <StarIcon style={{ color: '#1976d2' }} />
                        <StarIcon style={{ color: '#1976d2' }} />
                        <StarIcon style={{ color: '#1976d2' }} />
                        <StarHalfIcon style={{ color: '#1976d2' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialBoxes;
