import React, { useRef, useState, useEffect } from "react";
import "./styles.css"; // <-- import the new CSS file

const cards = [
  {
    title: "Learning",
    desc: "",
    img: "https://www.svgrepo.com/show/215793/learning-student.svg",
  },
  {
    title: "Community and Collaboration",
    desc: "",
    img: "https://www.svgrepo.com/show/215793/learning-student.svg",
  },
  {
    title: "Workshop",
    desc: "",
    img: "https://www.svgrepo.com/show/215793/learning-student.svg",
  },
  {
    title: "Certification",
    desc: "",
    img: "https://www.svgrepo.com/show/215793/learning-student.svg",
  },
];

const sections = [
  {
    title: "Community and Collaboration",
    img: "https://theaccidentalally.com/wp-content/uploads/2023/03/Circle-of-Influence.png",
    content:
      "We foster a strong sense of community by encouraging teamwork, group activities, and shared learning experiences. Through forums, virtual meetups, and collaborative projects, participants can share insights, ask questions, and build lasting relationships with peers and mentors.",
  },
  {
    title: "Workshop",
    img: "https://static.vecteezy.com/system/resources/previews/008/518/281/non_2x/business-workshop-flat-illustration-concept-vector.jpg",
    content:
      "Hands-on workshops provide immersive learning experiences that go beyond theory. Participants engage in real-world problem-solving, use industry-standard tools, and gain confidence by applying concepts in practical scenarios—all guided by expert facilitators.",
  },
  {
    title: "Gamified Learning",
    img: "https://static.vecteezy.com/system/resources/previews/046/910/067/large_2x/gamified-learning-concept-illustration-vector.jpg",
    content:
      "Engage and motivate through gamified approaches. From leaderboards and badges to interactive quizzes and puzzles, our gamified modules make learning fun and memorable while boosting knowledge retention and user participation.",
  },
  {
    title: "Certification",
    img: "https://img.freepik.com/free-vector/certification-concept-illustration_114360-7182.jpg",
    content:
      "Upon completion, participants receive recognized certifications that validate their new skills and knowledge. These credentials can enhance resumes, open doors to career advancement, and provide proof of learning outcomes to employers and academic institutions.",
  },
];

const FeaturesAnimation = () => {
  const [bump, setBump] = useState(false);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="white-bg"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "8rem",
      }}
    >
      <div
        className={`text feat ${bump ? "bump-active" : ""}`}
        style={{ left: "30%" }}
      >
        Feat
      </div>
      <div
        className={`text ures ${bump ? "bump-active" : ""}`}
        style={{ right: "30%" }}
      >
        ures
      </div>

      <div
        style={{
          marginTop: "6rem",
          padding: "2rem",
          textAlign: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="stringLine">
          <div
            style={{
              display: "flex",
              gap: "2rem",
              padding: "1rem",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              minWidth: "fit-content",
            }}
          >
            {cards.map((card, idx) => (
              <div key={idx} className="card">
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "80%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "3rem",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <img
              src={section.img}
              alt={section.title}
              className="section-img"
            />
            <div style={{ color: "#333", maxWidth: "600px" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {section.title}
              </h2>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesAnimation;
