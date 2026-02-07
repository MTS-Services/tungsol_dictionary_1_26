import React, { useState } from 'react';
import { Eye, EyeOff, Check, ShieldCheck } from 'lucide-react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation Logic
  const requirements = [
    { label: 'At least 8 characters', test: password.length >= 8 },
    { label: 'Contains uppercase letter', test: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', test: /[a-z]/.test(password) },
    { label: 'Contains number', test: /[0-9]/.test(password) },
    { label: 'Contains special character', test: /[^A-Za-z0-9]/.test(password) },
    { label: 'Passwords match', test: password === confirmPassword },
  ];        

  const allValid = requirements.every(req => req.test);
  const passwordsMatch = password && password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans" style={{ backgroundImage: 'linear-gradient(135deg, #ffffff5e, #04277026)' }}>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md">
        <h1 className="text-2xl font-bold text-secondary-foreground mb-1">Reset Password</h1>
        <p className="text-sm text-slate-500 mb-8 text-secondary-foreground font-medium font-inter">
          Create a new password for <span className="text-slate-700">lotitob533@hopesx.com</span>
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* New Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 font-inter">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            {/* Strength Bar */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <div className="flex-1 h-1.5 bg-green-500 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${allValid ? 'w-full bg-green-500' : 'w-1/3 bg-green-500'}`}
                />
              </div>
              <span className={`text-[12px] font-medium font-arial ${allValid ? 'text-green-600' : 'text-slate-400'}`}>
                {allValid ? 'Strong' : 'Strong'}
              </span>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2">
            <p className="text-xs text-secondary-foreground font-inter">Password strength:</p>
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check size={14} className={req.test ? "text-green-500" : "text-green-500"} />
                <span className={req.test ? "text-green-500" : "text-green-600"}>{req.label}</span>
              </div>
            ))}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 font-inter">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
            {passwordsMatch && (
              <div className="flex items-center gap-2 text-xs text-green-600 font-medium">
                <Check size={14} /> Passwords match
              </div>
            )}
          </div> 
         
          <button
            disabled={!allValid || !passwordsMatch}
            className="font-inter w-full bg-ring  text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-ring/20"
          >
            Reset Password
          </button>
        </form>

        {/* Security Tip */}
        <div className="mt-8 p-4 bg-ring/10 rounded-lg border border-ring/20 flex gap-3">
          <ShieldCheck className="text-ring shrink-0" size={20} />
          <p className="text-xs text-ring leading-relaxed">
            <span className="font-medium font-inter">Security tip:</span> Use a unique password that you don't use on other websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;