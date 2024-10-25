import React from "react";
import "./LandingPage.css";
// Replace with the actual path to your image file

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="text-container">
        <h1>Welcome to Our Site</h1>
        <p>
          Your journey to success starts here. Discover the best solutions
          tailored for you.
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://img.freepik.com/premium-vector/character-flat-drawing-businessman-writing-clipboard-male-executive-sitting-armchair-man-taking-notes-psychology-consultation-business-successful-cartoon-graphic-design-vector-illustration_620206-725.jpg"
          alt="Landing"
        />
      </div>
    </div>
  );
};

export default LandingPage;
