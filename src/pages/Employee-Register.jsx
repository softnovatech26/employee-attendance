import { useState } from "react";
import {
  User,
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
} from "lucide-react";

/**
 * EmployeeRegisterForm
 * Self-contained, validated employee registration form.
 * Wire `onRegister` to your real API call — it receives the form
 * values only after all client-side validation passes.
 */
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
        if (!value.trim()) return "Course name or department is required";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Enter a valid email address";
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    setTouched({ fullName: true, department: true, email: true, password: true });

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulate network request
      onRegister(formData);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ fullName: "", department: "", email: "", password: "" });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", icon: User, autoComplete: "name" },
    { name: "department", label: "Course Name or Department", type: "text", icon: GraduationCap, autoComplete: "organization-title" },
    { name: "email", label: "Email", type: "email", icon: Mail, autoComplete: "email" },
    { name: "password", label: "Password", type: showPassword ? "text" : "password", icon: Lock, autoComplete: "new-password", isPassword: true },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8 sm:p-10">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-14 h-14 rounded-full bg-red-950 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-7 h-7 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Registration successful</h2>
              <p className="text-zinc-400 text-sm mb-8">
                {formData.fullName.split(" ")[0] || "Employee"}'s account has been created.
              </p>
              <button
                onClick={resetForm}
                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 rounded-lg transition-colors duration-200"
              >
                Register another employee
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold text-red-500 mb-8">
                Employee Register
              </h1>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {fields.map((field) => {
                  const Icon = field.icon;
                  const hasError = Boolean(errors[field.name]) && touched[field.name];

                  return (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="sr-only">
                        {field.label}
                      </label>
                      <div className="relative">
                        <Icon className="w-4 h-4 text-zinc-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={field.label}
                          aria-invalid={hasError}
                          aria-describedby={hasError ? `${field.name}-error` : undefined}
                          className={`w-full bg-black text-white placeholder-slate-500 rounded-lg py-3 pl-11 ${
                            field.isPassword ? "pr-11" : "pr-4"
                          } border outline-none transition-colors duration-200 ${
                            hasError
                              ? "border-red-500"
                              : "border-zinc-800 focus:border-red-500"
                          }`}
                        />
                        {field.isPassword && (
                          <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            tabIndex={-1}
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                      {hasError && (
                        <p id={`${field.name}-error`} className="mt-1.5 text-xs text-red-400 pl-1">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-900 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>

              <p className="text-center text-zinc-400 text-sm mt-6">
                Already have an account?
              </p>
              <button
                type="button"
                onClick={onLoginClick}
                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 rounded-lg transition-colors duration-200 mt-3"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}