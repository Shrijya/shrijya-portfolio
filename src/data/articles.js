import React from "react";

function article_1() {
  return {
    date: "22 April 2025",
    title: "SAR Image Colorization Using Deep Learning",
    description:
      "Presented at Eureka & Jidnyasa, this research explored CNN and GAN architectures for colorizing SAR images, enhancing visual interpretation of grayscale radar images.",
    keywords: [
      "SAR Image Colorization",
      "Deep Learning",
      "CNN",
      "GAN",
      "Python",
      "Flask",
      "React",
      "Image Processing",
      "Shrijya Patil",
      "Eureka",
      "Jidnyasa",
      "National Level Paper Presentation",
      "Project Exhibition",
    ],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .research-image {
        margin-top: 20px;
        border: 2px solid #007bff;
        border-radius: 8px;
      }

      .event-info {
        margin-top: 15px;
        font-style: italic;
        color: #555;
      }
    `,
    body: (
      <React.Fragment>
        <div className="article-content">
          <p>
            This research focused on developing a deep learning model capable of colorizing SAR images,
            which are traditionally grayscale and difficult to interpret. The model combines CNNs and GANs
            to generate realistic color images.
          </p>

          <img
            src="/Certificate.jpg"
            alt="SAR Image Example"
            className="research-image"
          />

          <p className="event-info">
            📌 Presented at <strong>Eureka & Jidnyasa</strong> – National Level Paper Presentation
            and Project Exhibition, 22 April 2025.
          </p>
        </div>
      </React.Fragment>
    ),
  };
}


// Article: MLSA Creative Team Head Skills
function article_2() {
  return {
    date: "Jan 2025",
    title: "MLSA Creative Team Head Experience",
    description:
      "Led a team, organized AI & ML workshops, mentored students, and created technical content as MLSA Creative Team Head.",
    keywords: [
      "MLSA",
      "Leadership",
      "Workshops",
      "Mentoring",
      "AI",
      "ML",
      "Technical Content",
      "Shrijya Patil",
    ],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
      }

      .skills-list {
        list-style: disc;
        margin-left: 20px;
      }
    `,
    body: (
      <React.Fragment>
        <div className="article-content">
          <p>
            Key responsibilities and skills gained during my tenure:
          </p>
          <ul className="skills-list">
            <li>Leadership and Team Management</li>
            <li>Organizing AI & ML Workshops</li>
            <li>Mentoring Students in ML & DL Projects</li>
            <li>Event Planning & Collaboration</li>
            <li>Content Creation for Technical Learning</li>
          </ul>
        </div>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_1, article_2];

export default myArticles;

