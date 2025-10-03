import React, { useState } from 'react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalRevenue: '₦2,450,000',
      totalOrders: 156,
      avgOrderValue: '₦15,705',
      growthRate: '+12.5%'
    },
    revenueData: [
      { month: 'Jan', revenue: 180000, orders: 12 },
      { month: 'Feb', revenue: 220000, orders: 15 },
      { month: 'Mar', revenue: 280000, orders: 18 },
      { month: 'Apr', revenue: 320000, orders: 22 },
      { month: 'May', revenue: 380000, orders: 25 },
      { month: 'Jun', revenue: 450000, orders: 28 }
    ],
    topProducts: [
      { name: 'Poultry Feed', sales: '₦680,000', units: 340, growth: '+15%' },
      { name: 'Day Old Chicks', sales: '₦520,000', units: 1486, growth: '+8%' },
      { name: 'Egg Crates', sales: '₦380,000', units: 152, growth: '+22%' },
      { name: 'Organic Manure', sales: '₦290,000', units: 242, growth: '+5%' }
    ],
    marketInsights: [
      { 
        title: 'Peak Selling Season',
        description: 'Poultry products show 25% higher demand during dry season',
        impact: 'High',
        action: 'Increase inventory for Nov-Feb'
      },
      {
        title: 'Price Optimization',
        description: 'Your egg prices are 8% below market average',
        impact: 'Medium',
        action: 'Consider 5-10% price increase'
      },
      {
        title: 'Customer Retention',
        description: 'Bulk buyers have 40% higher retention rate',
        impact: 'High',
        action: 'Expand bulk discount programs'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Farm Analytics</h1>
            <div className="flex space-x-2">
              {['week', 'month', 'quarter', 'year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPeriod === period
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold">{analyticsData.overview.totalRevenue}</p>
                  <p className="text-green-100 text-sm">{analyticsData.overview.growthRate} vs last month</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalOrders}</p>
                  <p className="text-green-600 text-sm">+8 this week</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C21.1 4 22 4.9 22 6V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4H7Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Avg Order Value</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.avgOrderValue}</p>
                  <p className="text-green-600 text-sm">+12% increase</p>
                </div>
                <div className="bg-yellow-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Growth Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.growthRate}</p>
                  <p className="text-gray-500 text-sm">Monthly growth</p>
                </div>
                <div className="bg-purple-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Revenue Trends</h2>
            <div className="flex space-x-2">
              {['revenue', 'orders', 'customers'].map((metric) => (
                <button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedMetric === metric
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Simple Chart Representation */}
          <div className="space-y-4">
            {analyticsData.revenueData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm text-gray-600 font-medium">{data.month}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{width: `${(data.revenue / 450000) * 100}%`}}
                      ></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 w-20">
                      ₦{(data.revenue / 1000).toFixed(0)}k
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performing Products</h2>
            <div className="space-y-4">
              {analyticsData.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.units} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{product.sales}</p>
                    <p className="text-sm text-green-600">{product.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Market Insights</h2>
            <div className="space-y-4">
              {analyticsData.marketInsights.map((insight, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'High' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                    </svg>
                    <p className="text-sm text-blue-600 font-medium">{insight.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weather & Market Data Integration Preview */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Weather & Market Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.74 5.47C15.1 6.5 16.35 9.03 15.92 11.46C17.19 12.56 18 14.19 18 16V16.17C18.31 16.06 18.65 16 19 16C20.68 16 22.09 17.37 22 19.04C21.93 20.5 20.68 21.75 19.21 21.75H6C3.79 21.75 2 19.96 2 17.75S3.79 13.75 6 13.75C6.58 13.75 7.13 13.86 7.63 14.07C8.22 12.09 9.89 10.5 12 10.5C12.26 10.5 12.51 10.53 12.74 5.47Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Weather Forecast</h3>
                  <p className="text-sm text-gray-600">Next 7 days</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Today</span>
                  <span className="text-sm font-medium">28°C, Sunny</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tomorrow</span>
                  <span className="text-sm font-medium">26°C, Cloudy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Weekend</span>
                  <span className="text-sm font-medium">24°C, Rain</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Market Trends</h3>
                  <p className="text-sm text-gray-600">Price movements</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Maize</span>
                  <span className="text-sm font-medium text-green-600">↗ +5.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rice</span>
                  <span className="text-sm font-medium text-green-600">↗ +2.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Poultry</span>
                  <span className="text-sm font-medium text-red-600">↘ -1.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;