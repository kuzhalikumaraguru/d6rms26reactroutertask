import React from 'react'
import CardBase from './cardBase';
function Fsd() {
    let items = [
      {
        id: 1,
        img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
        title:
          "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
        description:
          "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
        date: "22 January 2024 ",
      },
      {
        id: 2,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        title:
          "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
        description:
          "When you’re hiring a full-stack developer, what are the most important things you look for?",
        date: "15 November 2023",
      },
      {
        id: 3,
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        title:
          "Top Differences: Full Stack Developer vs Software Engineer 2024",
        description:
          "A Full Stack Developer is a tech all-rounder. They work on both the front and",
        date: "15 November 2023",
      },
    ];
    return (
      <div className="container-fluid d-flex column-gap-5 p-5 justify-content-center">
        {items.map((e, i) => {
          return <CardBase data={e} key={i} />;
        })}
      </div>
    );
}

export default Fsd