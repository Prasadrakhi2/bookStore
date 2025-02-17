import React from "react";
import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-pink-400">Here!</span> :){" "}
          </h1>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            consequuntur temporibus enim voluptatibus, sequi consequatur
            excepturi perspiciatis earum impedit nulla velit maiores recusandae
            quaerat nesciunt labore porro nobis hic quas non harum nemo ducimus.
            Officia nostrum repellendus pariatur consequatur. Optio?
          </p>
          <Link to="/">
            <button className="bg-pink-400 px-4 py-2 rounded-md text-white hover:bg-pink-700 duration-500">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {list.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
