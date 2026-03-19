"use client";

import { User, Bell, Shield, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-xl md:text-2xl text-white mb-1 font-medium">Settings</h1>
        <p className="text-gray-500 text-xs md:text-sm">Manage your account and application settings</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Profile Settings */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
            <div className="bg-[#1a1a1a] p-1.5 md:p-2 rounded-md">
              <User className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
            </div>
            <div>
              <h2 className="text-sm md:text-base text-white">Profile Settings</h2>
              <p className="text-gray-500 text-xs">Update your personal information</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Full Name</label>
              <input
                type="text"
                defaultValue="Admin User"
                className="w-full bg-black text-white text-sm px-3 py-2 rounded-md border border-[#1a1a1a] focus:outline-none focus:border-[#2a2a2a]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Email</label>
              <input
                type="email"
                defaultValue="admin@company.com"
                className="w-full bg-black text-white text-sm px-3 py-2 rounded-md border border-[#1a1a1a] focus:outline-none focus:border-[#2a2a2a]"
              />
            </div>
            <button className="w-full bg-[#22a8e7] hover:bg-[#1a9fd4] text-white px-3 py-2 rounded-md transition-colors text-sm">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
            <div className="bg-[#1a1a1a] p-1.5 md:p-2 rounded-md">
              <Bell className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
            </div>
            <div>
              <h2 className="text-sm md:text-base text-white">Notifications</h2>
              <p className="text-gray-500 text-xs">Manage notification preferences</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Email Notifications", sub: "Receive email updates", on: true },
              { label: "New Applications", sub: "Alert on new applicants", on: true },
              { label: "Weekly Reports", sub: "Receive weekly summaries", on: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-white text-xs md:text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
                <button className={`w-11 h-6 ${item.on ? "bg-white" : "bg-[#1a1a1a]"} rounded-full relative flex-shrink-0`}>
                  <span className={`absolute ${item.on ? "right-0.5" : "left-0.5"} top-0.5 w-5 h-5 ${item.on ? "bg-black" : "bg-white"} rounded-full`}></span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
            <div className="bg-[#1a1a1a] p-1.5 md:p-2 rounded-md">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
            </div>
            <div>
              <h2 className="text-sm md:text-base text-white">Security</h2>
              <p className="text-gray-500 text-xs">Manage security settings</p>
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-3 py-2 rounded-md transition-colors text-left text-xs md:text-sm">
              Change Password
            </button>
            <button className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-3 py-2 rounded-md transition-colors text-left text-xs md:text-sm">
              Enable Two-Factor Authentication
            </button>
            <button className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-3 py-2 rounded-md transition-colors text-left text-xs md:text-sm">
              View Login History
            </button>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
            <div className="bg-[#1a1a1a] p-1.5 md:p-2 rounded-md">
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
            </div>
            <div>
              <h2 className="text-sm md:text-base text-white">System Settings</h2>
              <p className="text-gray-500 text-xs">Configure system preferences</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Language</label>
              <select className="w-full bg-black text-white text-sm px-3 py-2 rounded-md border border-[#1a1a1a] focus:outline-none focus:border-[#2a2a2a]">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Timezone</label>
              <select className="w-full bg-black text-white text-sm px-3 py-2 rounded-md border border-[#1a1a1a] focus:outline-none focus:border-[#2a2a2a]">
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC+0 (London)</option>
                <option>UTC+5:30 (India)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
