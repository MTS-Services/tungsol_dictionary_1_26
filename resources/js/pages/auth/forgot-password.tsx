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
        className="relative px-4 lg:py-64 py-28 bg-cover bg-center overflow-hidden min-h-[600px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(147, 196, 253, 0.16), rgba(255, 255, 255, 1)), url(\"img/images.png\")",
        }}
      >
        <div className="container mx-auto relative z-10">
          <section className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Logo and Header */}
                <div className="text-left mb-8">
                   
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                  Forgot your password?
                  </h1>
                  <p className="text-foreground/80 font-arial text-sm">
                   Enter your registered email to receive a reset link.
                  </p>
                </div>
                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Field */}
                  <div>
                    <label className="block text-foreground font-medium text-sm mb-2">
                      Email Address
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
                    className="cursor-pointer w-full bg-[var(--cofy-gray)] text-white font-medium py-3 px-6 rounded-lg transition mt-6"
                  >
                    Send Reset Link
                  </Button>
                </form>
                <div className="text-center mt-6">
                  <p className="text-gray-600 text-sm">
                  

                    <Link href={route("login")} className="text-blue-600 hover:text-blue-700 font-medium">
                      ← <span className="ml-1">Back to login</span>
                    </Link>
                  </p>
                </div>
                <div className="text-center mt-4 border-t border-gray-200 pt-4 font-arial font-medium">
                  Need help? <Link href={route("contact")} className="text-blue-600 hover:text-blue-700 font-medium">Contact support</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
