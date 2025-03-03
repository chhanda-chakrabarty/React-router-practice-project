import React from "react";
import { Link } from "react-router";

const Review = () => {
  const reviewItems = [
    {
      id: 1,
      name: "MERN Stack Development :",
      reviews: [
        "Great hands-on experience with MongoDB, Express, React, and Node.js. The projects were well-structured.",
        "The course is well-paced, but it could use more real-world examples.",
        "Excellent for beginners, but advanced topics could be more detailed.",
      ],
    },
    {
      id: 2,
      name: "PERN Stack Development :",
      reviews: [
        "Comprehensive coverage of PostgreSQL, Express, React, and Node.js. A great alternative to MERN.",
        "Loved the backend integration with PostgreSQL, but the frontend part felt rushed.",
        "Good balance between theory and practice. The instructor explained concepts well.",
      ],
    },
    {
      id: 3,
      name: "UI/UX Design :",
      reviews: [
        "Perfect for beginners! Covers Figma, Adobe XD, and design principles effectively.",
        "Could use more real-world design case studies.",
        "Great course, but needs more focus on user testing and research methodologies.",
      ],
    },
    {
      id: 4,
      name: "Product Engineering :",
      reviews: [
        "Gives a solid understanding of product development from ideation to deployment.",
        "A bit too theoretical. More hands-on case studies would be helpful.",
        "Excellent course for aspiring product managers and engineers!",
      ],
    },
    {
      id: 5,
      name: "RDBMS Administration With MySQL and Oracle :",
      reviews: [
        "A deep dive into database administration. Covers indexing, performance tuning, and security well.",
        "Great for database professionals, but some topics require prior SQL knowledge.",
        "Would love more practical exercises on database optimization.",
      ],
    },
    {
      id: 6,
      name: "REST and FAST API Development :",
      reviews: [
        "Clear explanations on building RESTful APIs with Flask and FastAPI.",
        "Could have included more real-world API security practices.",
        "Loved the FastAPI section! It made API development feel so efficient.",
      ],
    },
    {
      id: 7,
      name: "Python with Django :",
      reviews: [
        "Well-structured Django course with hands-on projects.",
        "Great introduction to Django, but could use more advanced topics.",
        "Crisp and clear explanations of Django ORM and authentication.",
      ],
    },
    {
      id: 8,
      name: "Frontend Development With React :",
      reviews: [
        "Amazing course for mastering React, hooks, and state management!",
        "Could have spent more time on Redux and performance optimization.",
        "Loved the project-based approach. A must for frontend developers.",
      ],
    },
    {
      id: 9,
      name: "Web Design :",
      reviews: [
        "A fantastic introduction to HTML, CSS, and responsive design.",
        "Covers UI principles well, but lacks depth in modern frameworks.",
        "Great for beginners! Covers everything from typography to layouts.",
      ],
    },
  ];

  return (
    <div>
      <div>
        <div class="flex items-center h-screen justify-center cursor-pointer gap-x-2">
          {reviewItems?.map(({ id, name, reviews }) => (
            <div
              key={id}
              className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
            >
              <Link className="mt-px" to={`/users/${name}  ${reviews}`}>
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />
      {/* <Link className="mt-px" to={`/${name}`}></Link> */}
    </div>
  );
};

export default Review;
