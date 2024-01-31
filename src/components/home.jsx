import React from "react";
import CardBase from "./cardBase.jsx";

function Home() {
  let items = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "19 January 2024",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title: "UI/UX Designer Job Description and Roles & Responsibilities",
      description:
        "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      date: "13 December 2023 ",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date: "4 December 2023",
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

export default Home;
