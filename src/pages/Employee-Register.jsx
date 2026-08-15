import { useState } from "react";
import PropTypes from "prop-types";
import {
  User,
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  UserPlus,
} from "lucide-react";

export default function EmployeeRegisterForm({
  onRegister = () => {},
  onLoginClick = () => {},
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name looks too short";
        return "";

      case "department":
        if (!value.trim()) {
          return "Course name or department is required";
        }
        return "";

      case "email":
        if (!value.trim()) return "Email is required";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Enter a valid email address";
        }

        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Use at least 6 characters";
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
      fullName: true,
      department: true,
      email: true,
      password: true,
    });

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      onRegister(formData);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      department: "",
      email: "",
      password: "",
    });

    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      placeholder: "Enter employee name",
      type: "text",
      icon: User,
      autoComplete: "name",
    },
    {
      name: "department",
      label: "Course or Department",
      placeholder: "Enter course or department",
      type: "text",
      icon: GraduationCap,
      autoComplete: "organization-title",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "employee@example.com",
      type: "email",
      icon: Mail,
      autoComplete: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Create a password",
      type: showPassword ? "text" : "password",
      icon: Lock,
      autoComplete: "new-password",
      isPassword: true,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative flex min-h-screen items-center justify-center px-5 py-16">

        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 shadow-lg shadow-red-600/10">
              <UserPlus className="h-7 w-7 text-red-500" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              Create Your{" "}
              <span className="text-red-500">
                Account
              </span>
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Register as an employee to get started
            </p>

          </div>

          {/* Register Card */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-8">

            {isSuccess ? (
              <div className="py-8 text-center">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                  <CheckCircle2 className="h-8 w-8 text-red-500" />
                </div>

                <h2 className="text-2xl font-bold">
                  Registration Successful
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Welcome{" "}
                  <span className="text-gray-300">
                    {formData.fullName}
                  </span>
                  . Your employee account has been created successfully.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 w-full rounded-xl border border-gray-700 bg-gray-900 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-red-500 hover:text-white"
                >
                  Register Another Employee
                </button>

              </div>
            ) : (
              <>
                {/* Card Heading */}
                <div className="mb-7">
                  <h2 className="text-xl font-semibold">
                    Employee Registration
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Enter your information below.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >

                  {fields.map((field) => {
                    const Icon = field.icon;

                    const hasError =
                      Boolean(errors[field.name]) &&
                      touched[field.name];

                    return (
                      <div key={field.name}>

                        <label
                          htmlFor={field.name}
                          className="mb-2 block text-sm font-medium text-gray-300"
                        >
                          {field.label}
                        </label>

                        <div className="relative">

                          <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            autoComplete={field.autoComplete}
                            value={formData[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={field.placeholder}
                            aria-invalid={hasError}
                            aria-describedby={
                              hasError
                                ? `${field.name}-error`
                                : undefined
                            }
                            className={`w-full rounded-xl border bg-black py-3.5 pl-11 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 ${
                              field.isPassword
                                ? "pr-12"
                                : "pr-4"
                            } ${
                              hasError
                                ? "border-red-500"
                                : "border-gray-800 focus:border-red-500"
                            }`}
                          />

                          {field.isPassword && (
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
                          )}

                        </div>

                        {hasError && (
                          <p
                            id={`${field.name}-error`}
                            className="mt-2 pl-1 text-xs text-red-400"
                          >
                            {errors[field.name]}
                          </p>
                        )}

                      </div>
                    );
                  })}

                  {/* Register Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4" />
                        Create Account
                      </>
                    )}
                  </button>

                </form>

                {/* Login */}
                <div className="mt-7 text-center">

                  <p className="text-sm text-gray-500">
                    Already have an account?
                  </p>

                  <button
                    type="button"
                    onClick={onLoginClick}
                    className="mt-3 w-full rounded-xl border border-gray-700 bg-gray-900 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-red-500 hover:bg-red-500/5 hover:text-white"
                  >
                    Login to Your Account
                  </button>

                </div>
              </>
            )}

          </div>

          {/* Bottom Text */}
          <p className="mt-6 text-center text-xs text-gray-700">
            Secure employee attendance management
          </p>

        </div>
      </div>
    </div>
  );
}
EmployeeRegisterForm.propTypes = {
  onRegister: PropTypes.func,
  onLoginClick: PropTypes.func,
};