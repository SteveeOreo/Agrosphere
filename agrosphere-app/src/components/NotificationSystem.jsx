import { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Mock notification data - in a real app, this would come from an API or WebSocket
  const mockNotifications = [
    {
      id: 1,
      type: 'forum',
      title: 'New Reply to Your Post',
      message: 'Dr. Adebayo replied to your question about broiler feed formula',
      timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      read: false,
      avatar: 'DA',
      actionUrl: '/forum'
    },
    {
      id: 2,
      type: 'marketplace',
      title: 'Price Alert',
      message: 'Corn prices have dropped by 15% - great time to buy!',
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      read: false,
      avatar: '💰',
      actionUrl: '/marketplace'
    },
    {
      id: 3,
      type: 'system',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      read: true,
      avatar: '✅',
      actionUrl: '/profile'
    },
    {
      id: 4,
      type: 'social',
      title: 'New Follower',
      message: 'Grace Nkomo started following you',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      read: true,
      avatar: 'GN',
      actionUrl: '/profile'
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Achievement Unlocked!',
      message: 'You earned the "Helpful Contributor" badge',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      read: true,
      avatar: '🏆',
      actionUrl: '/profile'
    }
  ];

  useEffect(() => {
    // Simulate loading notifications
    setNotifications(mockNotifications);

    // Simulate real-time notifications
    const interval = setInterval(() => {
      // Randomly add new notifications (simulate real-time updates)
      if (Math.random() > 0.8) { // 20% chance every 10 seconds
        const newNotification = {
          id: Date.now(),
          type: ['forum', 'marketplace', 'social', 'system'][Math.floor(Math.random() * 4)],
          title: 'New Activity',
          message: 'Something new happened in your network',
          timestamp: new Date(),
          read: false,
          avatar: '🔔',
          actionUrl: '/'
        };
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 9)]); // Keep only 10 notifications
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getNotificationIcon = (type) => {
    const icons = {
      forum: '💬',
      marketplace: '🛒',
      social: '👥',
      system: '⚙️',
      achievement: '🏆'
    };
    return icons[type] || '🔔';
  };

  const getNotificationColor = (type) => {
    const colors = {
      forum: 'bg-blue-100 text-blue-800',
      marketplace: 'bg-green-100 text-green-800',
      social: 'bg-purple-100 text-purple-800',
      system: 'bg-gray-100 text-gray-800',
      achievement: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      {/* Notification Bell Icon */}
      <div className="relative">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="relative p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5a1.5 1.5 0 010-2.12L20 8h-5V6a3 3 0 10-6 0v2H4l3.5 3.38a1.5 1.5 0 010 2.12L4 17h5a3 3 0 106 0z" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        {isVisible && (
          <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-green-700 hover:text-green-800 font-medium"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5a1.5 1.5 0 010-2.12L20 8h-5V6a3 3 0 10-6 0v2H4l3.5 3.38a1.5 1.5 0 010 2.12L4 17h5a3 3 0 106 0z" />
                  </svg>
                  <p>No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Avatar/Icon */}
                      <div className="flex-shrink-0">
                        {notification.avatar.length <= 2 ? (
                          <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {notification.avatar}
                          </div>
                        ) : (
                          <div className="w-10 h-10 flex items-center justify-center text-2xl">
                            {notification.avatar}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800 mb-1">
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">
                                {formatTimestamp(notification.timestamp)}
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getNotificationColor(notification.type)}`}>
                                {notification.type}
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-1 ml-2">
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="p-1 text-blue-600 hover:text-blue-800"
                                title="Mark as read"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="p-1 text-gray-400 hover:text-red-600"
                              title="Delete notification"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-gray-200 text-center">
                <button className="text-sm text-green-700 hover:text-green-800 font-medium">
                  View all notifications
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isVisible && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsVisible(false)}
        />
      )}
    </>
  );
};

export default NotificationSystem;