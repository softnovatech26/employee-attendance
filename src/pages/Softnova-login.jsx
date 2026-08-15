import PropTypes from "prop-types";
import { useState } from "react";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function SoftNovaLoginForm({
  appName = "SoftNova",
  onLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { success: true };
  },
  onRegisterClick = () => {},
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        if (!value.trim()) return "Email is required";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Enter a valid email address";
        }

        return "";

      case "password":
        if (!value) return "Password is required";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formError) {
      setFormError("");
    }

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });

    setFormError("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await onLogin(formData);

      if (result && result.error) {
        setFormError(result.error);
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });

    setErrors({});
    setTouched({});
    setFormError("");
    setIsSuccess(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative flex min-h-screen items-center justify-center px-5 py-16">

        <div className="w-full max-w-md">

          {/* Logo / Heading */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 shadow-lg shadow-red-600/10">
              <ShieldCheck className="h-7 w-7 text-red-500" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to{" "}
              <span className="text-red-500">{appName}</span>
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Sign in to manage your employee attendance
            </p>

          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-8">

            {isSuccess ? (
              <div className="py-8 text-center">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                  <CheckCircle2 className="h-8 w-8 text-red-500" />
                </div>

                <h2 className="text-2xl font-bold">
                  Welcome back
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  Signed in as{" "}
                  <span className="text-gray-300">
                    {formData.email}
                  </span>
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 w-full rounded-xl border border-gray-700 bg-gray-900 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-red-500 hover:text-white"
                >
                  Log out
                </button>

              </div>
            ) : (
              <>
                {/* Card Header */}
                <div className="mb-7">
                  <h2 className="text-xl font-semibold">
                    Sign in
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Enter your account details below.
                  </p>
                </div>

                {/* Error */}
                {formError && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email address
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        aria-invalid={
                          Boolean(errors.email) && touched.email
                        }
                        className={`w-full rounded-xl border bg-black py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-800 focus:border-red-500"
                        }`}
                      />
                    </div>

                    {errors.email && touched.email && (
                      <p className="mt-2 pl-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-300"
                      >
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-xs text-red-500 transition hover:text-red-400"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your password"
                        aria-invalid={
                          Boolean(errors.password) && touched.password
                        }
                        className={`w-full rounded-xl border bg-black py-3.5 pl-11 pr-12 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 ${
                          errors.password && touched.password
                            ? "border-red-500"
                            : "border-gray-800 focus:border-red-500"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((value) => !value)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-gray-300"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {errors.password && touched.password && (
                      <p className="mt-2 pl-1 text-xs text-red-400">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </form>

                {/* Register */}
                <p className="mt-7 text-center text-sm text-gray-500">
                  Dont have an account?{" "}
                  <button
                    type="button"
                    onClick={onRegisterClick}
                    className="font-semibold text-red-500 transition hover:text-red-400"
                  >
                    Create an account
                  </button>
                </p>

              </>
            )}

          </div>

          {/* Footer Text */}
          <p className="mt-6 text-center text-xs text-gray-700">
            Secure employee attendance management
          </p>

        </div>
      </div>
    </div>
  );
}
SoftNovaLoginForm.propTypes = {
  appName: PropTypes.string,
  onLogin: PropTypes.func,
  onRegisterClick: PropTypes.func,
};