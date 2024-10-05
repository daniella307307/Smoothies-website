import { Link } from "react-router-dom";
import "./style.css";
import pink from "./pink.jpg";
import Card from "./Card";
function Homepage() {

  return (
    <div className="bg-white">
      <nav className="flex items-center p-8 w-screen justify-between">
        <h1 className="text-2xl font-bold text-gray-700 lobster-regular">
          Smoothly
        </h1>
        <ul className="flex items-center justify-center space-x-12">
          <li className="hover:text-pink-400 font-semibold text-pink-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pink-400 font-semibold text-pink-600">
            <Link to="/smoothies">Smoothies</Link>
          </li>
          <li className="hover:text-pink-400 font-semibold text-pink-600">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="hover:text-pink-400 font-semibold text-pink-600">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className="p-4">
          <Link
            to="/explore"
            className="w-[7em] h-[2em] p-2 rounded-[2em] bg-pink-300 border-pink-400 text-white border-[1px]"
          >
            Explore
          </Link>
        </div>
      </nav>
      <div className="flex align items-center p-4 justify-between">
        <div className="smoothies ml-[9em]">
          <span className="text-pink-500 ml-[1em] ">Summer Season</span>
          <h1 className="text-6xl font-bold overflow-y-hidden">
            Smoothies that
          </h1>
          <h1 className="text-6xl overflow-y-hidden">Everyone loves!</h1>
          <p className="text-gray-500 pt-[2em]">
            Huge range of organic smoothies for customers. <br />
            Smoothies bring people together in different ways. <br />
            The nourishment of the body and soul
          </p>
          <div>
            <button
              type="button"
              className="items-center w-[20em] h-[3em] mt-[3em] rounded-full bg-pink-500 text-white hover:bg-transparent hover:text-pink-700 hover:border-pink-500 hover:border-[2px] duration-100 ease-in-out"
            >
              Start Ordering
            </button>
          </div>
        </div>
        <div className="h-[30em] mr-[4em] rounded-[2em] flex justify-center items-center">
          <img
            src={pink}
            alt="smoothie"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center text-6xl lobster-regular overflow-y-hidden">
            Menu
          </h1>
          <p className="text-gray-400 text-center text-[.7em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Quasi sed, soluta repellat veniam odit unde quod
          </p>
        </div>
      </div>
      <div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
