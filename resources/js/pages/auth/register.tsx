import { Form, Head, Link, useForm } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {

    const {data, setData, post, processing, errors} = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

     function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('register'));
    }
    return (
      <>
          <section
        className="relative py-8 px-4 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.37), rgba(0, 64, 201, 0.15)), url(\"img/images.png\")",
        }}
      >
        <div className="container mx-auto relative z-10">
          <section className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                {/* Logo and Header */}
                <div className="text-center mb-2">
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
                  <h1 className="text-2xl font-medium text-text-primary font-arial">
                    Create Account
                  </h1>
                  <p className="text-text-secondary font-inter text-md font-medium">
                    Join WordWise and expand your vocabulary
                  </p>
                </div>
                {/* Sign Up Form */}
                <form className="space-y-2" onSubmit={handleSubmit}>
                  {/* Username Field */}
                  <div>
                    <label className="block text-text-primary font-inter font-medium text-sm mb-1">
                      Username
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          >
                          </path>
                        </svg>
                      </span>
                     
                     <Input
                        type="text"
                        placeholder="Choose a username"
                        onChange={e=>setData('username', e.target.value.trim())}
                        className="w-full pl-10 pr-4 py-6.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />

                    <InputError message={errors.username} />

                    </div>
                  </div>
                  {/* Email Field */}
                  <div>
                    <label className="block text-text-primary font-inter font-medium text-sm mb-2">
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
                        onChange={e=>setData('email', e.target.value.trim())}
                        className="w-full pl-10 pr-4 py-6.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                      <InputError message={errors.email} />
                    </div>
                  </div>
                  {/* Password Field */}
                  <div>
                    <label className="block text-text-primary font-inter font-medium text-sm mb-2">
                      Password
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          >
                          </path>
                        </svg>
                      </span>
                      
                      <Input
                        type="password"
                        placeholder="Password"
                        onChange={e=>setData('password', e.target.value.trim())}
                        className="w-full pl-10 pr-4 py-6.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                      <InputError message={errors.password} />
                    </div>
                  </div>
                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-text-primary font-inter font-medium text-sm mb-2">
                      Confirm Password
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          >
                          </path>
                        </svg>
                      </span>

                        <Input 
                        type="password"
                        placeholder="Confirm Password"
                        onChange={e=>setData('password_confirmation', e.target.value.trim())}
                        className="w-full pl-10 pr-4 py-6.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <InputError message={errors.password_confirmation} />

                    </div>
                  </div>
                  {/* Terms Agreement */}
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">
                      I agree to the
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Terms of Service
                      </a>
                      and
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  {/* Create Account Button */}
                  <button
                    type="submit"
                    className="w-full bg-btn-primary hover:bg-btn-primary/90 cursor-pointer text-text-white font-normal font-inter py-3 px-6 rounded-lg transition mt-6"
                  >
                    Create Account
                  </button>
                  
                </form>
                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-text-secondary">
                      Or sign up with
                    </span>
                  </div>
                </div>
                {/* Social Sign Up Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Google Button */}
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-text-secondary font-medium text-sm">Google</span>
                  </button>
                  {/* Facebook Button */}
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-text-secondary font-medium text-sm">
                      Facebook
                    </span>
                  </button>
                </div>
                {/* Sign In Link */}
                <div className="text-center mt-6">
                  <p className="text-text-secondary text-sm">
                    Already have an account?
                    
                    <Link href={route('login')} className="text-blue-600 hover:text-blue-700 font-medium"> Sign</Link>
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