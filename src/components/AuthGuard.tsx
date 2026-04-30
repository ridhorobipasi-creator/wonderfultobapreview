"use client";

import { useEffect, useState } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-100 border-t-toba-green rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-slate-400 font-bold text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
