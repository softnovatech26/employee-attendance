import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

/**
 * SoftNovaLoginForm
 * Self-contained, validated login form.
 * Wire `onLogin` to your real auth call — return { error: "..." } to
 * surface a message, or resolve normally for a successful sign-in.
 */
export default function SoftNovaLoginForm({
  appName = "SoftNova",
  onLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { success: true };
  },
  onRegisterClick = () => {},
}) {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Enter a valid email address";
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
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
    setTouched({ email: true, password: true });
    setFormError("");

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const result = await onLogin(formData);
      if (result && result.error) {
        setFormError(result.error);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ email: "", password: "" });
    setErrors({});
    setTouched({});
    setFormError("");
    setIsSuccess(false);
  };

  const fields = [
    { name: "email", label: "Email", type: "email", icon: Mail, autoComplete: "email" },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      icon: Lock,
      autoComplete: "current-password",
      isPassword: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 border border-red-900 rounded-2xl shadow-2xl p-8 sm:p-10">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-14 h-14 rounded-full bg-red-950 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-7 h-7 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Welcome back</h2>
              <p className="text-zinc-400 text-sm mb-8">
                Signed in as {formData.email}
              </p>
              <button
                onClick={resetForm}
                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 rounded-lg transition-colors duration-200"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold text-red-500 text-center mb-8">
                {appName} Login
              </h1>

              {formError && (
                <div className="flex items-start gap-2 bg-red-950 border border-red-900 text-red-400 text-sm rounded-lg px-4 py-3 mb-4">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

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
                            tabIndex={-1} >
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
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-900 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2" >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <p className="text-center text-sm text-zinc-400 mt-6">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={onRegisterClick}
                  className="text-red-500 font-semibold hover:text-red-400 transition-colors duration-200" >
                  Register here
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}