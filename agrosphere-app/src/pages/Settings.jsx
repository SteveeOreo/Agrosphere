export default function Settings() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 shadow-sm border-b border-slate-200">
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-heading font-bold text-primary">Settings</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="card max-w-2xl mx-auto">
          {/* Notification Preference */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-warning/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-warning"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <span className="text-primary font-medium">
                  Notification Preference
                </span>
                <p className="text-sm text-secondary">Manage your notification settings</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-info/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-info"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <div>
                <span className="text-primary font-medium">Language</span>
                <p className="text-sm text-secondary">Choose your preferred language</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-brand-secondary/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-brand-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-primary font-medium">Privacy</span>
                <p className="text-sm text-secondary">Control your privacy settings</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-slate-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-primary font-medium">Dark Mode</span>
                <p className="text-sm text-secondary">Switch to dark theme</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          {/* Help & FAQ */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-success/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-primary font-medium">Help & FAQ</span>
                <p className="text-sm text-secondary">Get help and find answers</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between p-6 hover:bg-error/5 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-error/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-error"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div>
                <span className="text-error font-medium">Logout</span>
                <p className="text-sm text-secondary">Sign out of your account</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
