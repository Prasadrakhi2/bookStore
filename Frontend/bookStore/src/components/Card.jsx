import React from "react";
const Card = ({ item }) => {
  return (
    <>
      <div className="my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl dark:bg-slate-900 dark:text-white hover:scale-105 duration-300 cursor-pointer dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline border-stone-300 mt-1 p-3 hover:cursor-pointer">
                $ {item.price}
              </div>
              <div className="badge badge-outlin border-stone-300 p-4 hover:bg-pink-400  hover:cursor-pointer  hover:border-none">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
