import { Form, Head, Link, useForm } from "@inertiajs/react";
import { ChevronLeft, LoaderCircle } from "lucide-react";

import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/layouts/auth-layout";
import { login } from "@/routes";
import { email } from "@/routes/password";

export default function ForgotPassword({ status }: { status?: string }) {

    const {data, setData, post, errors } = useForm({
        email: '',
    })
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route("password.email"));
    }
  return (
    <>
      <section
        className="relative py-20 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.37), rgb(0, 64, 201)), url(\"img/images.png\")",
        }}
      >
        <div className="container mx-auto relative z-10">
          <section className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      >
                      </path>
                    </svg>
                  </div>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  Forgot your password?
                  </h1>
                  <p className="text-gray-600 text-sm">
                   Enter your email address. We will send a message with a code to reset your password.
                  </p>
                </div>
                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-800 font-medium text-sm mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          >
                          </path>
                        </svg>
                      </span>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        onChange={e => setData("email", e.target.value.trim())}
                        className="w-full pl-10.5 pr-4 py-6.5! bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />

                      <InputError message={errors.email} />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition mt-6"
                  >
                    Send Password Reset Link
                  </Button>
                </form>
                <div className="text-center mt-6">
                  <p className="text-gray-600 text-sm">
                  

                    <Link href={route("login")} className="text-blue-600 hover:text-blue-700 font-medium">
                      Back to login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
