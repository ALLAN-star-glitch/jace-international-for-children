// app/secure-maintenance-xyz789/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HiddenMaintenancePage() {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchMaintenanceStatus();
  }, []);


const fetchMaintenanceStatus = async () => {
  try {
    const res = await fetch('/api/maintenance-status');
    const data = await res.json();
    console.log('RAW DATA:', data); // Add this
    console.log('maintenanceMode value:', data.maintenanceMode); // Add this
    console.log('Type of maintenanceMode:', typeof data.maintenanceMode); // Add this
    setIsMaintenanceMode(data.maintenanceMode === true);
    console.log('Setting isMaintenanceMode to:', data.maintenanceMode === true); // Add this
  } catch (error) {
    console.error('Failed to fetch status:', error);
  }
};

  const toggleMaintenance = async () => {
    setIsLoading(true);
    setMessage(null);
    
    const newMode = !isMaintenanceMode;
    console.log('Toggling to:', newMode); // Debug log
    
    try {
      const res = await fetch('/api/toggle-maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled: newMode }),
      });
      
      const data = await res.json();
      console.log('Toggle response:', data); // Debug log
      
      if (res.ok) {
        setIsMaintenanceMode(newMode);
        setMessage({
          type: 'success',
          text: `Maintenance mode ${newMode ? 'ENABLED' : 'DISABLED'} successfully!`,
        });
        
        if (!newMode) {
          setTimeout(() => {
            router.push('/');
          }, 2000);
        } else {
          // Refresh to show maintenance page
          window.location.href = '/';
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to toggle maintenance mode' });
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F7] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-px bg-[#FF0066]/30 mx-auto mb-6" />
          <h1 className="font-serif text-4xl sm:text-5xl text-[#0000FF] font-light mb-3">
            Maintenance Control
          </h1>
          <div className="w-20 h-px bg-[#FF0066]/30 mx-auto mt-6" />
        </div>

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

          {/* Debug info - remove after fixing */}
          <div className="mt-4 p-2 bg-gray-100 rounded text-xs">
            Debug: isMaintenanceMode = {String(isMaintenanceMode)}
          </div>

          {isMaintenanceMode && (
            <div className="mt-6 p-4 bg-[#FF0066]/5 rounded-lg border border-[#FF0066]/20">
              <p className="text-sm text-[#FF0066] flex items-start gap-2">
                <span className="text-lg">⚠️</span>
                <span>
                  Maintenance mode is currently <strong>ENABLED</strong>. All visitors will be redirected to the maintenance page.
                </span>
              </p>
            </div>
          )}

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

        <div className="mt-12 text-center text-xs text-[#8C9AA6]">
          <p>Changes take effect immediately after toggling.</p>
        </div>
      </div>
    </div>
  );
}