import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth, provider } from "../../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

// Define Zod schema for validation
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login2 = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    setError(null);
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const idToken = await userCredential.user.getIdToken();
      await sendTokenToServer(idToken);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      await sendTokenToServer(idToken);
    } catch (error) {
      console.error("Error during Google Login", error.message);
      setError(error.message);
    }
  };

  const sendTokenToServer = async (idToken) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      navigate("/");
    } catch (error) {
      console.error("Error sending token to server:", error);
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#BAD4b5] w-full min-h-screen flex justify-center items-center">
      <div className="w-full flex justify-center items-center p-10">
        <div className="relative h-fit border w-full sm:w-2/3 md:w-2/5 lg:w-2/7 xl:w-3/10 rounded-xl bg-[url('leafs.jpg')] bg-no-repeat bg-contain bg-center">
          <div className="absolute inset-0 bg-[#82a060] mix-blend-multiply rounded-xl shadow-3xl"></div>

          <div className="relative z-10 flex flex-col gap-5 p-10">
            <Link to="/" className="underline text-white text-xs">
              Back to Home Page
            </Link>
            <h1 className="text-3xl text-white flex justify-center mb-10 font-semibold">Log In</h1>

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="flex flex-col gap-5">
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="h-8 bg-white border rounded-xl px-5 py-1 text-xs font-medium focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                {/* Password Input */}
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="h-8 bg-white border rounded-xl px-5 py-1 text-xs font-medium focus:outline-none"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

                {/* Submit Button */}
                <button type="submit" disabled={loading} className="bg-[#ffc857] w-full rounded-xl h-9 mb-3 font-semibold text-sm">
                  Log in
                </button>
              </div>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            {/* Google Login */}
            <div className="flex flex-col gap-5 justify-center items-center">
              <h3 className="text-white mb-3 text-sm">Or Log in with</h3>
              <button onClick={handleGoogleLogin} disabled={loading} className="bg-white w-full rounded-xl h-9 text-xs flex justify-center items-center gap-3 font-semibold text-black mb-5">
                <FcGoogle size={24} />
                Login with Google
              </button>

              <h3 className="text-white text-sm mb-3">
                Don&apos;t have an Account?{" "}
                <a href="/auth2" className="text-[#ffc857] font-semibold tracking tracking-wider underline">
                  Sign Up
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
