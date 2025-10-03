import React, { useState, useEffect } from 'react';

const WeatherWidget = ({ location = "Lagos, Nigeria", compact = false }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock weather data - in a real app, this would come from a weather API
  const mockWeatherData = {
    current: {
      temperature: 28,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 12,
      uvIndex: 7,
      icon: '☀️'
    },
    forecast: [
      { day: 'Today', high: 30, low: 22, condition: 'Sunny', icon: '☀️', precipitation: 0 },
      { day: 'Tomorrow', high: 28, low: 20, condition: 'Partly Cloudy', icon: '⛅', precipitation: 10 },
      { day: 'Wednesday', high: 26, low: 19, condition: 'Cloudy', icon: '☁️', precipitation: 30 },
      { day: 'Thursday', high: 24, low: 18, condition: 'Light Rain', icon: '🌦️', precipitation: 70 },
      { day: 'Friday', high: 25, low: 19, condition: 'Partly Cloudy', icon: '⛅', precipitation: 20 }
    ],
    farmingTips: [
      {
        type: 'irrigation',
        message: 'Good weather for irrigation. Consider watering crops in the evening.',
        priority: 'medium'
      },
      {
        type: 'planting',
        message: 'Excellent conditions for planting. Soil temperature is optimal.',
        priority: 'high'
      },
      {
        type: 'harvest',
        message: 'Rain expected Thursday. Plan harvest activities accordingly.',
        priority: 'high'
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    const fetchWeather = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWeatherData(mockWeatherData);
      setLoading(false);
    };

    fetchWeather();
  }, [location]);

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border ${compact ? 'p-4' : 'p-6'}`}>
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{weatherData.current.icon}</span>
            <div>
              <p className="font-semibold text-gray-900">{weatherData.current.temperature}°C</p>
              <p className="text-sm text-gray-600">{weatherData.current.condition}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{location}</p>
            <p className="text-xs text-gray-500">Humidity: {weatherData.current.humidity}%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 rounded-full p-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.74 5.47C15.1 6.5 16.35 9.03 15.92 11.46C17.19 12.56 18 14.19 18 16V16.17C18.31 16.06 18.65 16 19 16C20.68 16 22.09 17.37 22 19.04C21.93 20.5 20.68 21.75 19.21 21.75H6C3.79 21.75 2 19.96 2 17.75S3.79 13.75 6 13.75C6.58 13.75 7.13 13.86 7.63 14.07C8.22 12.09 9.89 10.5 12 10.5C12.26 10.5 12.51 10.53 12.74 5.47Z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Weather Forecast</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 12C4 12.55 4.45 13 5 13S6 12.55 6 12 5.45 11 5 11 4 11.45 4 12M2 12C2 13.1 2.9 14 4 14S6 13.1 6 12 5.1 10 4 10 2 10.9 2 12M15 12C15 12.55 15.45 13 16 13S17 12.55 17 12 16.45 11 16 11 15 11.45 15 12M13 12C13 13.1 13.9 14 15 14S17 13.1 17 12 16.1 10 15 10 13 10.9 13 12M8.5 12C8.5 12.55 8.95 13 9.5 13S10.5 12.55 10.5 12 10.05 11 9.5 11 8.5 11.45 8.5 12M6.5 12C6.5 13.1 7.4 14 8.5 14S10.5 13.1 10.5 12 9.6 10 8.5 10 6.5 10.9 6.5 12Z"/>
          </svg>
        </button>
      </div>

      {/* Current Weather */}
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-4xl">{weatherData.current.icon}</span>
          <div>
            <p className="text-3xl font-bold text-gray-900">{weatherData.current.temperature}°C</p>
            <p className="text-gray-600">{weatherData.current.condition}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <p className="text-gray-500">Humidity</p>
            <p className="font-semibold text-gray-900">{weatherData.current.humidity}%</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Wind</p>
            <p className="font-semibold text-gray-900">{weatherData.current.windSpeed} km/h</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">UV Index</p>
            <p className="font-semibold text-gray-900">{weatherData.current.uvIndex}</p>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">5-Day Forecast</h4>
        <div className="space-y-2">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{day.icon}</span>
                <div>
                  <p className="font-medium text-gray-900">{day.day}</p>
                  <p className="text-sm text-gray-600">{day.condition}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-center">
                  <p className="text-gray-500">Rain</p>
                  <p className="font-medium text-blue-600">{day.precipitation}%</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{day.high}°</p>
                  <p className="text-gray-500">{day.low}°</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farming Tips */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Farming Recommendations</h4>
        <div className="space-y-2">
          {weatherData.farmingTips.map((tip, index) => (
            <div key={index} className={`p-3 rounded-lg border-l-4 ${
              tip.priority === 'high' 
                ? 'bg-green-50 border-green-400' 
                : tip.priority === 'medium'
                ? 'bg-yellow-50 border-yellow-400'
                : 'bg-blue-50 border-blue-400'
            }`}>
              <div className="flex items-start space-x-2">
                <div className={`mt-1 w-2 h-2 rounded-full ${
                  tip.priority === 'high' 
                    ? 'bg-green-400' 
                    : tip.priority === 'medium'
                    ? 'bg-yellow-400'
                    : 'bg-blue-400'
                }`}></div>
                <p className="text-sm text-secondary">{tip.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;