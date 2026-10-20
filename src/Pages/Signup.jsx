


import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Frontend demo only: backend API is not connected.
    console.log("Signup form submitted", {
      fullName: formData.fullName,
      username: formData.username,
      email: formData.email,
    });

    setSuccess("Form validated successfully! Connect your backend to create an account.");
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-800 p-12 text-white md:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl font-extrabold">
            M
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight">
            Join Mantu's Portfolio
          </h1>

          <p className="mt-5 leading-8 text-blue-100">
            Create your account and explore projects, development skills,
            and exciting web technologies.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Explore development projects",
              "Discover modern technologies",
              "Connect with the developer",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  ✓
                </span>
                <span className="text-blue-50">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-6 sm:p-10 md:p-12">
          <Link
            to="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Back to Home
          </Link>

          <div className="mt-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-blue-700 md:hidden">
              M
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Create Account
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your details to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
                required
                minLength={3}
                className={inputClass}
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                required
                minLength={3}
                className={inputClass}
              />
            </div>

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
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={6}
                  required
                  className={`${inputClass} pr-16`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  className={`${inputClass} pr-16`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error and Success Messages */}
            {error && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            {success && (
              <p role="status" className="text-sm font-medium text-emerald-600">
                {success}
              </p>
            )}

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm leading-6 text-slate-600">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-blue-600"
              />
              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
