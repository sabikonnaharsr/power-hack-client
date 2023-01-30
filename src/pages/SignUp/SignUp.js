
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


import toast, { Toaster } from "react-hot-toast";


const SignUp = () => {
  // react hooks form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();

 

  


  
  
  

  return (
    <div className="lg:w-1/3 mx-auto p-10 m-5 shadow-2xl">
      {/* form start */}
      <form
        onSubmit={handleSubmit()}
        className=""
      >
        <h1 className="text-4xl text-center font-bold text-slate-600">
          Signup
        </h1>
        <div className="form-control text-slate-700 w-full">
          {/* firstName */}
          <label className="label">
            <span className="label-text text-slate-600">First Name</span>
          </label>
          <input
            name="name"
            type="text"
            {...register("name")}
            className="input input-bordered input-primary w-full"
          />
        </div>

        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
        >
          Select an option
        </label>
        <select
          {...register("accountType")}
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        {/* photoURL */}
        <div className="form-control text-slate-700 w-full">
          <label className="label">
            <span className="label-text text-slate-600">Photo URL</span>
          </label>
          <input
            type="photoURL"
            {...register("photoURL")}
            className="input input-bordered input-primary w-full"
          />
        </div>

        {/* email */}
        <div className="form-control text-slate-700 w-full">
          <label className="label">
            <span className="label-text text-slate-600">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered input-primary w-full"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        {/* password */}
        <div className="form-control text-slate-700 w-full">
          <label className="label">
            <span className="label-text text-slate-600">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be 6 character above",
              },
              pattern: {
                value:
                  /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,
                message: "Password must be strong",
              },
            })}
            className="input input-bordered text-xs w-full"
          />

          <label className="label">
            {errors.password && (
              <p className="text-red-600 text-sm gap-2">
                {errors.password?.message}
              </p>
            )}
          </label>
          <p className="label-text text-slate-600 mb-3">Forget Password</p>
          {/* {signupError && <small className="text-red-800">{signupError}</small>} */}
        </div>

        {/* submit */}
        <input
          className="btn text-xl bg-white text-slate-600 font-bold text-center w-full"
          value="Signup"
          type="submit"
        />
    
      </form>
      <div className="form-control text-slate-700 w-full">
          <small className="text-slate-600 mt-3 text-sm">
            Already Have an Account
            <Link className="text-sky-900 text-xs" to="/login">
              <Link to="/login" className="text-blue-500 font-bold">
                {" "}
                Login
              </Link>
            </Link>
          </small>

          {/* divider */}
          <div className="w-full border-opacity-50">
            <div className="divider text-slate-600">
              <small className="text-sm">Login with social accounts</small>
            </div>
          </div>
        </div>
      <div className="flex justify-center items-center gap-5 text-2xl">
        
      </div>
    </div>
  );
};

export default SignUp;
