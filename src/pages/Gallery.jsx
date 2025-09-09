import HeroBanner from "../components/HeroBanner";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3Nyb29tfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1343473005/photo/teacher-teaching-concepts-of-windmill-in-the-classroom-to-students.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Fg8kxgI9HIz7TSA4I8L0adzprCs4uLXNq4T_EgvyJA=",
    "https://images.unsplash.com/photo-1573894999291-f440466112cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=VlB7qp8CIId3VNDRZMXUvuAp9d4awQKH9uJJnBwdW0Y=",
    "https://images.unsplash.com/photo-1544531585-f14f463149ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  ];

  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-center mb-4">Gallery</h1>
      <p className="text-center mb-5">
        Explore some glimpses of our classes, events, achievements, and happy students.
      </p>

      <div className="row">
        {images.map((imgUrl, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" data-aos="zoom-in">
              <img
                src={imgUrl}
                className="card-img-top"
                alt={`Gallery item ${index + 1}`}
              />
              <div className="card-body text-center">
                <p className="card-text">Event or Class {index + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
