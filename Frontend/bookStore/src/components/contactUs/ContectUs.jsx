import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useForm } from "react-hook-form";
import Footer from "../Footer";
import Navbar from "../navbar";

const ContectUs = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />

      <div
        id=""
        className="flex h-screen items-center justify-center dark:shadow-md"
      >
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="pt-2">
              {/* name */}
              <span className="m-2">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name here"
                className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500">*This field is required</span>
              )}
              <br />
              {/* email */}
              <span className="m-2">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your mail id here"
                className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">*This field is required</span>
              )}
              <br />
              {/* Message */}
              <span className="m-4">Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Enter your password here"
                className="w-80 p-1 border rounded-md outline-none m-2 dark:bg-slate-900 dark:text-white h-32"
                {...register("message", { required: true })}
              ></textarea>
              <br />
              {errors.message && (
                <span className="text-red-500">*This field is required</span>
              )}
              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContectUs;
