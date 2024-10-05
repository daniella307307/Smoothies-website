import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Smoothy from "./smoothie.jpg";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Register from "./Register";

import axios from "axios";

function Login() {
  const [swap, setSwap] = useState(false);

  const [formData, setFFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/v1/register", formData);
      setSuccess(response.data.message);
      setFFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert(response.data.message);
      window.location.href ='/home'
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
      alert(error)
    }
  };

  // Trigger the animation 3 seconds after the page starts loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setSwap(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="items-center justify-center h-screen w-screen top-0 bottom-0 left-0 right-0">
      <div
        className={`flex items-center rounded-lg justify-center h-screen w-screen ${
          swap ? "swap-container" : ""
        }`}
      >
        <div className={`flex items-center  ${swap ? "swap-form" : ""}`}>
          <div className="bg-white w-[30em] h-[40em] p-4">
            <img src={Smoothy} alt="smoothies" className="w-[30em] h-[38em]" />
          </div>
        </div>
        <div
          className={`bg-white text-black p-4 h-[40em] w-[30em] ${
            swap ? "swap-image" : ""
          }`}
        >
          <h1 className="font-bold text-[3em] text-center">Smothy</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-[1em] flex flex-col space-y-6"
          >
            <input
              type="text"
              placeholder="full names*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent w-full focus:outline-none border-b-[1px] border-pink-500"
            />
            <input
              type="email"
              placeholder="email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent w-full focus:outline-none border-b-[1px] border-pink-500"
            />
            <input
              type="text"
              placeholder="username*"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="bg-transparent w-full focus:outline-none border-b-[1px] border-pink-500"
            />
            <div className="flex w-full items-center border-b-[1px] border-pink-500">
              <input
                type="password"
                placeholder="password*"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-pink-500 ml-[15em]"
              />
            </div>
            <div className="flex w-full items-center border-b-[1px] border-pink-500">
              <input
                type="password"
                placeholder="confirm password*"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="bg-transparent focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-pink-500 ml-[15em]"
              />
            </div>
            <div>
            <input type="checkbox" name="rememebr" value="false"/> <label for="rememebr" className="text-gray-400">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full p-1 h-[2em] text-white bg-pink-400 rounded-full overflow-y-hidden"
            >
              Sign up
            </button>
            
          </form>
          <div>
            <fieldset
              name="means"
              id="socio"
              className="border-t-[1px] border-pink-500 text-center mt-[2em]"
            >
              <legend className="px-2 text-gray-400">Or SignUp with</legend>
              <div className="flex items-center text-center justify-center space-x-[1.5em] mt-[1em] w-full text-2xl">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-pink-500 hover:text-red-300"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 hover:text-red-300"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-pink-500 hover:text-red-300"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-pink-500 hover:text-red-300"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-pink-500 hover:text-red-300"
                />
              </div>
            </fieldset>
          </div>
          <div>
            <h2 className="text-center mt-[2em] text-gray-400">
              Already have an account?
              <a href="/" className="font-bold underline hover:text-gray-300">
                Sign In
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
