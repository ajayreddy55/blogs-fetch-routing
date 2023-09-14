import "./about.css";

const About = () => {
  return (
    <div className="about-routing-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="about-image-routing"
      />
      <h1 className="routing-about-heading">About</h1>
      <p className="routing-about-description">
        I love to create! I am a frontend web developer.
      </p>
    </div>
  );
};

export default About;
