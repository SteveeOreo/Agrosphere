import React, { useState } from 'react';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  // Mock notification data
  const notifications = [
    {
      id: 1,
      type: 'weather',
      title: 'Weather Alert',
      message: 'Heavy rainfall expected in your area tomorrow. Protect your crops.',
      time: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'market',
      title: 'Price Update',
      message: 'Maize prices increased by 15% in Lagos market.',
      time: '4 hours ago',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'community',
      title: 'New Forum Post',
      message: 'Someone replied to your question about organic fertilizers.',
      time: '6 hours ago',
      read: true,
      priority: 'low'
    },
    {
      id: 4,
      type: 'bulk',
      title: 'Group Buying Update',
      message: 'Premium Maize Seeds group buying is 80% complete. Join now!',
      time: '1 day ago',
      read: true,
      priority: 'medium'
    },
    {
      id: 5,
      type: 'system',
      title: 'App Update',
      message: 'New features available! Check out the enhanced marketplace.',
      time: '2 days ago',
      read: true,
      priority: 'low'
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'weather':
        return (
          <div className="bg-info/10 p-3 rounded-full">
            <svg className="w-5 h-5 text-info" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        );
      case 'market':
        return (
          <div className="bg-success/10 p-3 rounded-full">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
            </svg>
          </div>
        );
      case 'community':
        return (
          <div className="bg-brand-secondary/10 p-3 rounded-full">
            <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
            </svg>
          </div>
        );
      case 'bulk':
        return (
          <div className="bg-warning/10 p-3 rounded-full">
            <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-slate-100 p-3 rounded-full">
            <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
            </svg>
          </div>
        );
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-error';
      case 'medium':
        return 'border-l-warning';
      default:
        return 'border-l-slate-300';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.read;
    return notification.type === activeTab;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 shadow-sm border-b border-slate-200">
        <h1 className="text-xl font-heading font-bold text-primary text-center">Notifications</h1>
        <p className="text-sm text-secondary text-center mt-2">
          Stay updated with important alerts and messages
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {['all', 'unread', 'weather', 'market', 'community'].map((tab) => (
              <button
                key={tab}
                className={`flex-shrink-0 py-4 px-6 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-secondary hover:text-primary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-secondary">No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`card border-l-4 ${getPriorityColor(notification.priority)} ${
                !notification.read ? 'bg-info/5 border-info/20' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                {getNotificationIcon(notification.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-sm font-semibold ${!notification.read ? 'text-primary' : 'text-secondary'}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-info rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-secondary mb-3">{notification.message}</p>
                  <p className="text-xs text-secondary">{notification.time}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mark All as Read Button */}
      {filteredNotifications.some(n => !n.read) && (
        <div className="fixed bottom-20 right-4">
          <button className="btn-primary shadow-lg">
            Mark All Read
          </button>
        </div>
      )}
    </div>
  );
}