import { useState } from "react";
import { auth } from "../../lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { provider } from "../../lib/firebase";
import { z } from "zod";

const API_URL = import.meta.env.VITE_API_URL;

// ✅ Define the Zod schema for validation
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match!",
  path: ["confirmPassword"], 
});

const Auth2 = () => {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState("");

  // 🔹 Handle Signup with Zod Validation
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form data using Zod
    const result = signupSchema.safeParse({ name, email, password, confirmPassword });

    if (!result.success) {
      setError(result.error.errors[0].message); // Show first error message
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken(); 
      await sendDataToServer(userCredential.user, idToken, name); 
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const googleName = result.user.displayName || "New User";  
      await sendDataToServer(result.user, idToken, googleName);  
    } catch (error) {
      setError(error.message);
    }
  };

  // 🔹 Send Data to Server
  const sendDataToServer = async (user, idToken, name) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          name: name.trim() || "New User",
          provider: user.providerData[0].providerId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#BAD4b5] w-full min-h-screen flex justify-center items-center">
      <div className="w-full flex justify-center items-center p-10">
        <div className="relative border w-full sm:w-2/3 md:w-2/5 lg:w-2/7 xl:w-3/10 rounded-xl bg-[url('leafs.jpg')] bg-no-repeat bg-contain bg-center">
          <div className="absolute inset-0 bg-[#82a060] mix-blend-multiply rounded-xl shadow-3xl"></div>

          <div className="relative z-10 flex flex-col gap-5 p-10">
            <a href="/" className="underline text-white text-xs">Back to Home Page</a>      
            <h1 className="text-3xl text-white flex justify-center mb-10 font-semibold">Sign Up</h1>

            <form onSubmit={handleSignup}>  
              <div className="flex flex-col gap-5">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="h-8 bg-white border rounded-xl px-5 py-1 text-xs font-medium focus:outline-none" />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-8 bg-white border rounded-xl px-5 py-1 text-xs font-medium focus:outline-none" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-8 bg-white border rounded-xl px-5 py-1 text-xs font-medium focus:outline-none" />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="h-8 bg-white border rounded-xl px-5 py-1 text-xs font-medium focus:outline-none" />

                <button type="submit" className="bg-[#ffc857] w-full rounded-xl h-9 mb-3 font-semibold text-sm">Sign Up</button>
              </div>
            </form> 

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="flex flex-col gap-5 justify-center items-center">
              <h3 className="text-white mb-3 text-sm">OR Sign Up with</h3>
              <button onClick={handleGoogleLogin} className="bg-white w-full rounded-xl h-9 text-xs flex justify-center items-center gap-3 font-semibold text-black mb-5">
                <FcGoogle size={24} /> Sign up with Google
              </button>
              <h3 className="text-white text-sm mb-3">Already have an Account? <a href="/login2" className="text-[#ffc857] font-semibold tracking tracking-wider underline">Login</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth2;
