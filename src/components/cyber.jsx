import React from 'react'
import CardBase from './cardBase';
function Cyber() {
   let items = [
     {
       id: 1,
       img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
       title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
       description:
         "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
       date: "4 December 2023  ",
     },
     {
       id: 2,
       img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
       title: "What Is Hacking? Types of Hacking & More",
       description:
         "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
       date: "25 September 2023",
     },
     {
       id: 3,
       img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
       title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
       description:
         "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
       date: "27 December 2022",
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

export default Cyber