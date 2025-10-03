import React, { useState } from 'react';
import Chart from '../components/Chart';

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
      { name: 'Poultry Feed', sales: '₦680,000', units: 340, growth: '+15%', value: 680000 },
      { name: 'Day Old Chicks', sales: '₦520,000', units: 1486, growth: '+8%', value: 520000 },
      { name: 'Egg Crates', sales: '₦380,000', units: 152, growth: '+22%', value: 380000 },
      { name: 'Organic Manure', sales: '₦290,000', units: 242, growth: '+5%', value: 290000 }
    ],
    categoryData: [
      { label: 'Poultry Feed', value: 680000 },
      { label: 'Day Old Chicks', value: 520000 },
      { label: 'Egg Crates', value: 380000 },
      { label: 'Organic Manure', value: 290000 },
      { label: 'Others', value: 580000 }
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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h1 className="text-2xl font-heading font-bold text-primary">Farm Analytics</h1>
            <div className="flex flex-wrap gap-2">
              {['week', 'month', 'quarter', 'year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedPeriod === period
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-slate-100 text-secondary hover:bg-slate-200 hover:text-primary'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-success to-success/90 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold mt-1">{analyticsData.overview.totalRevenue}</p>
                  <p className="text-white/80 text-sm mt-2">{analyticsData.overview.growthRate} vs last month</p>
                </div>
                <div className="bg-white/20 rounded-full p-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary text-sm font-medium">Total Orders</p>
                  <p className="text-2xl font-bold text-primary mt-1">{analyticsData.overview.totalOrders}</p>
                  <p className="text-success text-sm font-medium mt-2">+8 this week</p>
                </div>
                <div className="bg-info/10 rounded-full p-3">
                  <svg className="w-6 h-6 text-info" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H20C21.1 4 22 4.9 22 6V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4H7Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary text-sm font-medium">Avg Order Value</p>
                  <p className="text-2xl font-bold text-primary mt-1">{analyticsData.overview.avgOrderValue}</p>
                  <p className="text-success text-sm font-medium mt-2">+12% this month</p>
                </div>
                <div className="bg-warning/10 rounded-full p-3">
                  <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary text-sm font-medium">Growth Rate</p>
                  <p className="text-2xl font-bold text-primary mt-1">{analyticsData.overview.growthRate}</p>
                  <p className="text-secondary text-sm mt-2">Monthly growth</p>
                </div>
                <div className="bg-brand-secondary/10 rounded-full p-3">
                  <svg className="w-6 h-6 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Revenue Chart */}
        <div className="card">
          <Chart 
            data={analyticsData.revenueData} 
            type="line" 
            title="Revenue Trends" 
            height={300}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sales Distribution Chart */}
          <div className="card">
            <Chart 
              data={analyticsData.categoryData} 
              type="donut" 
              title="Sales Distribution by Category" 
              height={300}
            />
          </div>

          {/* Top Products Chart */}
          <div className="card">
            <Chart 
              data={analyticsData.topProducts.map(product => ({
                label: product.name,
                value: product.value
              }))} 
              type="bar" 
              title="Top Products Performance" 
              height={300}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Products List */}
          <div className="card">
            <h2 className="card-title text-xl mb-6">Product Performance Details</h2>
            <div className="space-y-4">
              {analyticsData.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <span className="text-success font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{product.name}</p>
                      <p className="text-sm text-secondary">{product.units} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{product.sales}</p>
                    <p className={`text-sm font-medium ${
                      product.growth.startsWith('+') ? 'text-success' : 'text-error'
                    }`}>
                      {product.growth}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="card">
            <h2 className="card-title text-xl mb-6">Market Insights</h2>
            <div className="space-y-4">
              {analyticsData.marketInsights.map((insight, index) => (
                <div key={index} className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-primary">{insight.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'High' 
                        ? 'bg-error/10 text-error' 
                        : 'bg-warning/10 text-warning'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-secondary text-sm mb-4">{insight.description}</p>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-info" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                    </svg>
                    <p className="text-sm text-info font-medium">{insight.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weather & Market Data Integration Preview */}
        <div className="card">
          <h2 className="card-title text-xl mb-6">Weather & Market Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-info/5 rounded-xl p-6 border border-info/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-info/10 rounded-full p-3">
                  <svg className="w-6 h-6 text-info" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.74 5.47C15.1 6.5 16.35 9.03 15.92 11.46C17.19 12.56 18 14.19 18 16V16.17C18.31 16.06 18.65 16 19 16C20.68 16 22.09 17.37 22 19.04C21.93 20.5 20.68 21.75 19.21 21.75H6C3.79 21.75 2 19.96 2 17.75S3.79 13.75 6 13.75C6.58 13.75 7.13 13.86 7.63 14.07C8.22 12.09 9.89 10.5 12 10.5C12.26 10.5 12.51 10.53 12.74 5.47Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Weather Forecast</h3>
                  <p className="text-sm text-secondary">Next 7 days</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">Today</span>
                  <span className="text-sm font-medium text-primary">28°C, Sunny</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">Tomorrow</span>
                  <span className="text-sm font-medium text-primary">26°C, Cloudy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">Weekend</span>
                  <span className="text-sm font-medium text-primary">24°C, Rain</span>
                </div>
              </div>
            </div>

            <div className="bg-success/5 rounded-xl p-6 border border-success/10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-success/10 rounded-full p-3">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Market Trends</h3>
                  <p className="text-sm text-secondary">Price movements</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">Maize</span>
                  <span className="text-sm font-medium text-success">↗ +5.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">Rice</span>
                  <span className="text-sm font-medium text-success">↗ +2.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">Poultry</span>
                  <span className="text-sm font-medium text-error">↘ -1.5%</span>
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