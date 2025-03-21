

import { useState } from "react"
import { FaArrowLeft, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import Loader from "../components/Loader";
import { REGISTER_NEW_USER_URL } from "../ApiRoutes";

export default function UserRegisterationPage() {

  const [signupData, setsignupData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginProcess = async(e) => {
    e.preventDefault();
    console.log(signupData);
    setIsLoading((prev)=>!prev);
    const responseData = await axios.post(REGISTER_NEW_USER_URL, signupData);
    console.log(responseData);
    if(responseData.status === 201){
      navigate("/auth/login")
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute left-4 top-4">
        <button className="rounded-lg bg-zinc-900/80 p-2 text-zinc-400 backdrop-blur transition-colors hover:text-white"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="flex min-h-screen items-center justify-center px-4 ">
          {
            (isLoading)?(<Loader />):
            (
              <div className="w-full max-w-md overflow-hidden rounded-2xl bg-zinc-900/30 shadow-xl backdrop-blur-xl backdrop-filter">
          <div className="relative">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>

            {/* Content */}
            <div className="relative p-8 border-4 border-[#23232B] rounded-2xl">
              {/* Logo Section */}
              <div className="mb-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-infinity h-8 w-8 text-[#ff4d4d]"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
                  </div>
                  <div className="text-3xl font-semibold text-white">
                    Daily<span className="text-zinc-400">.POST</span>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-white placeholder-zinc-400 backdrop-blur-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    value={signupData.username}
                    onChange={(e) => setsignupData({ ...signupData, username: e.target.value })}
                  />
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-white placeholder-zinc-400 backdrop-blur-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      value={signupData.firstname}
                      onChange={(e) => setsignupData({ ...signupData, firstname: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-white placeholder-zinc-400 backdrop-blur-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      value={signupData.lastname}
                      onChange={(e) => setsignupData({ ...signupData, lastname: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-white placeholder-zinc-400 backdrop-blur-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    value={signupData.email}
                    onChange={(e) => setsignupData({ ...signupData, email: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-white placeholder-zinc-400 backdrop-blur-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    value={signupData.password}
                    onChange={(e) => setsignupData({ ...signupData, password: e.target.value })}
                  />
                </div>
                <button className="cursor-pointer w-full rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-2 font-medium text-white transition-all hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  onClick={handleLoginProcess}
                >
                  Signup
                </button>
              </div>

              {/* Divider */}
              <div className="my-8 flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-zinc-700" />
                <div className="text-sm text-zinc-400">or</div>
                <div className="h-px flex-1 bg-zinc-700" />
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <button className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-lg bg-white py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-100">
                  <FcGoogle className="h-5 w-5" />
                  Signup with Google
                </button>
                <button className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-lg bg-[#24292F] py-2 text-sm font-medium text-white transition-colors hover:bg-[#24292F]/80">
                  <FaGithub className="h-5 w-5" />
                  Signup with Github
                </button>
                <NavLink to={"/auth/login"}>
                  <button className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-lg bg-[#24292F] py-2 text-sm font-medium text-white transition-colors hover:bg-[#24292F]/80">
                    <MdEmail className="h-5 w-5" />
                    Login with Email
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
            )
          }
      </div>
    </div>
  )
}

