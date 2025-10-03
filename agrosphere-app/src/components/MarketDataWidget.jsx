import React, { useState, useEffect } from 'react';

const MarketDataWidget = ({ compact = false, commodities = [] }) => {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');

  // Mock market data - in a real app, this would come from a market data API
  const mockMarketData = {
    commodities: [
      {
        name: 'Maize',
        symbol: 'MAIZE',
        price: 420,
        currency: '₦',
        unit: '/kg',
        change: 18,
        changePercent: 4.5,
        trend: 'up',
        volume: '2.3M kg',
        high24h: 425,
        low24h: 402,
        marketCap: '₦45.2B'
      },
      {
        name: 'Rice',
        symbol: 'RICE',
        price: 680,
        currency: '₦',
        unit: '/kg',
        change: -12,
        changePercent: -1.7,
        trend: 'down',
        volume: '1.8M kg',
        high24h: 695,
        low24h: 675,
        marketCap: '₦38.7B'
      },
      {
        name: 'Yam',
        symbol: 'YAM',
        price: 350,
        currency: '₦',
        unit: '/kg',
        change: 8,
        changePercent: 2.3,
        trend: 'up',
        volume: '950K kg',
        high24h: 355,
        low24h: 340,
        marketCap: '₦22.1B'
      },
      {
        name: 'Cassava',
        symbol: 'CASSAVA',
        price: 180,
        currency: '₦',
        unit: '/kg',
        change: 5,
        changePercent: 2.9,
        trend: 'up',
        volume: '3.1M kg',
        high24h: 185,
        low24h: 175,
        marketCap: '₦31.5B'
      },
      {
        name: 'Plantain',
        symbol: 'PLANTAIN',
        price: 220,
        currency: '₦',
        unit: '/kg',
        change: -3,
        changePercent: -1.3,
        trend: 'down',
        volume: '1.2M kg',
        high24h: 225,
        low24h: 218,
        marketCap: '₦18.9B'
      }
    ],
    marketSummary: {
      totalVolume: '₦156.8M',
      activeTraders: '12,450',
      topGainer: { name: 'Maize', change: '+4.5%' },
      topLoser: { name: 'Rice', change: '-1.7%' }
    },
    priceAlerts: [
      {
        commodity: 'Maize',
        type: 'price_target',
        message: 'Maize reached your target price of ₦420/kg',
        timestamp: '2 min ago',
        priority: 'high'
      },
      {
        commodity: 'Yam',
        type: 'volume_spike',
        message: 'Unusual trading volume detected for Yam',
        timestamp: '15 min ago',
        priority: 'medium'
      }
    ],
    insights: [
      {
        title: 'Seasonal Trend Alert',
        description: 'Maize prices typically increase by 15-20% during harvest season',
        recommendation: 'Consider holding inventory for better prices',
        confidence: 85
      },
      {
        title: 'Supply Chain Update',
        description: 'Transportation costs decreased by 8% this week',
        recommendation: 'Good time for bulk purchases and distribution',
        confidence: 92
      }
    ]
  };

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setMarketData(mockMarketData);
      setLoading(false);
    };

    fetchMarketData();
    
    // Set up real-time updates (every 30 seconds in a real app)
    const interval = setInterval(fetchMarketData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border ${compact ? 'p-4' : 'p-6'}`}>
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Market Prices</h3>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
        <div className="space-y-2">
          {marketData.commodities.slice(0, 3).map((commodity, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">{commodity.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-900">
                  {commodity.currency}{commodity.price}{commodity.unit}
                </span>
                <span className={`text-xs font-medium ${
                  commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {commodity.trend === 'up' ? '↗' : '↘'} {Math.abs(commodity.changePercent)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 rounded-full p-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Market Data</h3>
            <p className="text-sm text-gray-600">Real-time commodity prices</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Live</span>
          </div>
          <div className="flex space-x-1">
            {['1D', '1W', '1M'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-2 py-1 text-xs rounded ${
                  selectedTimeframe === timeframe
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Market Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">Total Volume</p>
          <p className="font-semibold text-gray-900">{marketData.marketSummary.totalVolume}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">Active Traders</p>
          <p className="font-semibold text-gray-900">{marketData.marketSummary.activeTraders}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">Top Gainer</p>
          <p className="font-semibold text-green-700">
            {marketData.marketSummary.topGainer.name} {marketData.marketSummary.topGainer.change}
          </p>
        </div>
        <div className="bg-red-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">Top Loser</p>
          <p className="font-semibold text-red-700">
            {marketData.marketSummary.topLoser.name} {marketData.marketSummary.topLoser.change}
          </p>
        </div>
      </div>

      {/* Commodity Prices */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Commodity Prices</h4>
        <div className="space-y-2">
          {marketData.commodities.map((commodity, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  commodity.trend === 'up' ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                <div>
                  <p className="font-semibold text-gray-900">{commodity.name}</p>
                  <p className="text-xs text-gray-600">Vol: {commodity.volume}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">
                  {commodity.currency}{commodity.price}{commodity.unit}
                </p>
                <p className={`text-sm font-medium ${
                  commodity.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {commodity.trend === 'up' ? '+' : ''}{commodity.change} ({commodity.changePercent}%)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Alerts */}
      {marketData.priceAlerts.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Price Alerts</h4>
          <div className="space-y-2">
            {marketData.priceAlerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                alert.priority === 'high' 
                  ? 'bg-red-50 border-red-400' 
                  : 'bg-yellow-50 border-yellow-400'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{alert.commodity}</p>
                    <p className="text-sm text-gray-600">{alert.message}</p>
                  </div>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Market Insights */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Market Insights</h4>
        <div className="space-y-3">
          {marketData.insights.map((insight, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-medium text-gray-900">{insight.title}</h5>
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${
                    insight.confidence >= 90 ? 'bg-green-400' :
                    insight.confidence >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                  <span className="text-xs text-gray-500">{insight.confidence}%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
                <p className="text-sm text-blue-600 font-medium">{insight.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketDataWidget;