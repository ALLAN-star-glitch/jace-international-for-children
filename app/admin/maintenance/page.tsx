// app/admin/maintenance/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MaintenanceAdminPage() {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();

  // Fetch current maintenance status on page load
  useEffect(() => {
    fetchMaintenanceStatus();
  }, []);

  const fetchMaintenanceStatus = async () => {
    try {
      const res = await fetch('/api/maintenance-status');
      const data = await res.json();
      setIsMaintenanceMode(data.maintenanceMode);
    } catch (error) {
      console.error('Failed to fetch status:', error);
    }
  };

  const toggleMaintenance = async () => {
    setIsLoading(true);
    setMessage(null);
    
    try {
      const res = await fetch('/api/toggle-maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled: !isMaintenanceMode }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setIsMaintenanceMode(data.maintenanceMode);
        setMessage({
          type: 'success',
          text: `Maintenance mode ${data.maintenanceMode ? 'ENABLED' : 'DISABLED'} successfully!`,
        });
        
        // Optional: Redirect to home after 2 seconds if disabling
        if (!data.maintenanceMode) {
          setTimeout(() => {
            router.push('/');
          }, 2000);
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to toggle maintenance mode' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F7] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-px bg-[#FF0066]/30 mx-auto mb-6" />
          <h1 className="font-serif text-4xl sm:text-5xl text-[#0000FF] font-light mb-3">
            Maintenance Control
          </h1>
          <p className="text-[#2C3E50] text-lg">
            Enable or disable maintenance mode for your website
          </p>
          <div className="w-20 h-px bg-[#FF0066]/30 mx-auto mt-6" />
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#F0ECE7] p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl text-[#0000FF] mb-1">Current Status</h2>
              <p className="text-[#8C9AA6] text-sm">Website accessibility</p>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${
              isMaintenanceMode 
                ? 'bg-[#FF0066]/10 text-[#FF0066]' 
                : 'bg-[#009933]/10 text-[#009933]'
            }`}>
              {isMaintenanceMode ? '🔧 Maintenance Mode ON' : '🟢 Live'}
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-between py-6 border-t border-b border-[#F0ECE7]">
            <div>
              <p className="font-medium text-[#2C3E50] mb-1">Maintenance Mode</p>
              <p className="text-sm text-[#8C9AA6]">
                {isMaintenanceMode 
                  ? 'Visitors will see the maintenance page' 
                  : 'Website is accessible to everyone'}
              </p>
            </div>
            <button
              onClick={toggleMaintenance}
              disabled={isLoading}
              className={`
                relative inline-flex h-8 w-16 items-center rounded-full transition-colors
                ${isMaintenanceMode ? 'bg-[#FF0066]' : 'bg-[#8C9AA6]'}
                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span
                className={`
                  inline-block h-6 w-6 transform rounded-full bg-white transition-transform
                  ${isMaintenanceMode ? 'translate-x-9' : 'translate-x-1'}
                `}
              />
            </button>
          </div>

          {/* Warning Message */}
          {isMaintenanceMode && (
            <div className="mt-6 p-4 bg-[#FF0066]/5 rounded-lg border border-[#FF0066]/20">
              <p className="text-sm text-[#FF0066] flex items-start gap-2">
                <span className="text-lg">⚠️</span>
                <span>
                  Maintenance mode is currently <strong>ENABLED</strong>. All visitors will be redirected to the maintenance page.
                  Your website is not accessible to the public.
                </span>
              </p>
            </div>
          )}

          {/* Success/Error Message */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-[#009933]/10 border border-[#009933]/20 text-[#009933]'
                : 'bg-[#FF0066]/10 border border-[#FF0066]/20 text-[#FF0066]'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
          )}
        </div>

        {/* Preview Link */}
        <div className="text-center">
          <a
            href="/maintenance"
            target="_blank"
            className="text-[#0000FF] hover:text-[#0000FF]/70 text-sm inline-flex items-center gap-2"
          >
            Preview maintenance page
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-[#8C9AA6]">
          <p>Changes take effect immediately after toggling.</p>
          <p className="mt-1">Make sure to secure this page with authentication in production.</p>
        </div>
      </div>
    </div>
  );
}