import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
  const [loginError, setLoginError] = useState("");
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);

    // reset login error
    
  };


  
  return (
    <div className="lg:w-1/4 mx-auto shadow-2xl p-10 my-10">
      {/* form start */}
      <form
        onSubmit={handleSubmit(handleLogin)}
        className=""
      >
        <h1 className="text-4xl text-center font-bold text-slate-600">Login</h1>

        {/* email */}
        <div className="form-control text-slate-700 w-full mb-3">
          <label className="label">
            <span className="label-text text-slate-600 ">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input  input-primary input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        {/* password */}
        <div className="form-control text-slate-700 w-full mb-3">
          <label className="label">
            <span className="label-text text-slate-600">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
              value: 6,
              message: "password should be 6 character or longer",
              },
            })}
            className="input input-bordered input-primary w-full"
          />
          {errors.password && (
            <small className="text-red-700 text-xm">
              {errors.password.message}
            </small>
          )}

          <p>
            {loginError && (
              <small className="text-red-700">{loginError.slice(22, -2)}</small>
            )}
          </p>
        </div>

        {/* submit */}
        <input
          className="btn text-xl bg-white text-slate-600 mt-4 font-bold text-center input-primary w-full"
          value="Login"
          type="submit"
        />
      </form>
      <div className="form-control text-slate-700 mt-3 w-full">
        <small className="text-slate-700 text-sm">
          New to create account
          <Link to="/signup" className="text-blue-500 font-bold"> signup</Link>
        </small>

        {/* divider */}
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider text-blue-900">
            <small className="text-sm">Login with social accounts</small>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
