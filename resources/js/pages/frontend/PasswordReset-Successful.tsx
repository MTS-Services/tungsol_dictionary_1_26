import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PasswordResetSuccess = () => {
  return (
    <div className="inset-shadow-sm rounded-box min-h-screen flex items-center justify-center p-4 font-sans" style={{ backgroundImage: 'linear-gradient(135deg, #ffffff5e, #04277026)' }}>
      <div className="bg-white p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 w-full max-w-[440px] text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle2 className="text-green-500 w-8 h-8" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-2xl font-bold text-cofy-gray mb-3 font-inter">
          Password Reset Successful
        </h1>
        <p className="text-slate-500 text-sm font-inter leading-relaxed mb-8">
          Your password has been reset successfully.<br />
          You can now log in with your new password.
        </p>

        {/* Action Button */}
        <button className="w-full bg-ring text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-sm mb-10 font-inter">
          Go to Login
        </button>

        {/* Security Footer */}
        <div className="border-t border-slate-100 pt-8">
          <p className="text-xs text-slate-400 font-inter leading-relaxed px-4">
            For security reasons, you may need to log in on all your devices again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;