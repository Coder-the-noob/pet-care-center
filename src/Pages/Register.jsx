import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, googleLogin } = useContext(AuthContext); 
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("User logged in successfully");
        form.reset();
       navigate(`${location.state || "/"}`);
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        toast.success("Logged in with Google successfully");
        navigate(`${location.state || "/"}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google login failed: " + error.message);
        setError(error.code);
      });
  };

  return (
    <div className="flex mx-auto min-h-screen justify-center items-center">
      <form className="card-body flex justify-center items-center" onSubmit={handleLogin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-xl font-bold text-center mb-4">Login Your Account</h1>

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" required />

          <div>
            <a className="link link-hover font-semibold">Forget Password?</a>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn btn-neutral mt-4">Login</button>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] mt-2 flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="mt-4 font-semibold text-center">
            Don't have an account? <Link to="/auth/register" className="link link-hover font-semibold text-red-500">Register</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
