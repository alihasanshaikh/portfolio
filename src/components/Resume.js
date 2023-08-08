import React from "react";

const Resume = () => {
  return (
    <div className="download--resume">
      <a
        href="https://drive.google.com/file/d/1SEbtKg_SAOXRx0goe6FumYAxXFfvhVZ4/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        alt="download_resume"
      >
        <button
          type="button"
          aria-label="download_resume"
          className="btn btn-primary btn-lg rounded-pill button"
        >
          <span>
            <i className="bi bi-file-earmark-arrow-down-fill"></i>
          </span>
        </button>
      </a>
    </div>
  );
};

export default Resume;
