import React from "react";
// import "./Testimonials.css"; // Import CSS for styling

const testimonialsData = [
  {
    id: 1,
    title: "A Great Find",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta.",
    author: "Divi",
    rating: 5,
  },
  {
    id: 2,
    title: "Fabulous food & flawless service",
    quote:
      "Nunc molestie eros nec eros auctor, a dapibus diam iaculis. Aliquam erat volutpat.",
    author: "Bloom",
    rating: 5,
  },
  {
    id: 3,
    title: "Another successful experience",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta.",
    author: "Extra",
    rating: 5,
  },
  {
    id: 4,
    title: "Speechless",
    quote:
      "Nunc molestie eros nec eros auctor, a dapibus diam iaculis. Aliquam erat volutpat.",
    author: "Monarch",
    rating: 5,
  },
];

const five_section = () => {
  return (
    <div className="five_container">
      <div className="thirdd five">
        <div className="th_dataa five_data">
          <span>TESTIMONIALS</span>
          <div className="line"></div>
          <h1>What People are Saying</h1>
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="star-rating">
                  {"★".repeat(testimonial.rating)} {/* Display star rating */}
                </div>
                <h3>"{testimonial.title}"</h3>
                <p>"{testimonial.quote}"</p>
                <footer>- {testimonial.author}</footer>
              </div>
            ))}
          </div>
          <button className="btn_1"> VIEW MENU</button>
        </div>
      </div>
    </div>
    
  );
};

export default five_section;
