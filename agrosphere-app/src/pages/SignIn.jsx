import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, isLoading, error, clearError } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const result = await signIn(formData);
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-primary">Welcome back</h1>
        <p className="text-sm text-primary mt-1">Sign in to continue</p>
      </div>

      {/* Sign In Form */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md card card-bordered">
          {/* Error Messages */}
          {error && (
            <div className="mb-4 p-3 bg-error/10 border border-error text-error rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="label">Email:</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted">@</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input pl-8"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="label">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••••••"
                  className="input pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted hover:text-secondary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button type="submit" disabled={isLoading} className="btn btn-primary w-full">
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-secondary">
                New to Agrosphere?{" "}
                <Link to="/signup" className="text-primary font-medium hover:text-primary underline">
                  Create an Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
