import React from "react";
import { useNavigate } from "react-router";

const HomeButton = () => {
  const navigate = useNavigate();
  const handleGoto = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };
  return (
    <div>
      <p
        className="mt-8 py-2 border-y-2 text-center bg-gray-400 px-4 text-white cursor-pointer"
        onClick={handleGoto}
        titleText="button"
        titleFrom=""
      >
        <button>Go To Home</button>
      </p>
    </div>
  );
};

export default HomeButton;
