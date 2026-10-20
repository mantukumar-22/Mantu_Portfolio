


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Abhi frontend demo hai; backend authentication connected nahi hai.
    console.log("Login form data:", formData);
    alert("Login form submitted successfully!");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-800 p-12 text-white md:flex">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl font-extrabold">
            M
          </div>

          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome Back!
          </h1>

          <p className="mt-5 leading-8 text-blue-100">
            Sign in to continue your journey. Explore projects, discover
            skills, and connect with Mantu Kumar.
          </p>

          <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5">
            <p className="text-lg font-semibold">
              "Great things are built one line of code at a time."
            </p>
            <p className="mt-3 text-sm text-blue-100">
              — Developer Mindset
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-6 sm:p-10 md:p-12">
          <Link
            to="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Back to Home
          </Link>

          <div className="mt-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-blue-700 md:hidden">
              M
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Login to your account
            </h2>

            <p className="mt-3 text-slate-500">
              Enter your details to sign in.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    alert("Connect your forgot-password page or API here.")
                  }
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-20 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
              />
              Remember me
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-7 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;

