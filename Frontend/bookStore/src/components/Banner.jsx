import { MdOutlineEmail } from "react-icons/md";
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto my-12 md:px-20 px-4 flex flex-col md:flex-row">
        {/* left part */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <span className="space-y-6">
            <h1 className="text-4xl font-bold ">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-400">new everyday!!!</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              minima laboriosam neque aut natus aperiam, repellendus ipsam
              doloremque, fugiat atque delectus soluta ipsum porro enim earum.
            </p>

            {/* input text */}

            <label className="input input-bordered flex items-center gap-2 w-2/3">
              <MdOutlineEmail />
              <input
                type="text"
                className="grow  dark:text-black "
                placeholder="Enter your email here"
              />
            </label>

            <button className="btn btn-secondary">Secondary</button>
          </span>
        </div>

        {/* right part */}
        <div className="w-full mt-12 order-1 md:w-1/2">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
