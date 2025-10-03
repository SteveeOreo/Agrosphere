import React from 'react';

const Chart = ({ data, type = 'line', title, height = 200 }) => {
  // Simple chart implementation using SVG
  const maxValue = Math.max(...data.map(item => item.value || item.revenue || 0));
  const minValue = Math.min(...data.map(item => item.value || item.revenue || 0));
  const range = maxValue - minValue || 1;
  
  const chartWidth = 400;
  const chartHeight = height;
  const padding = 40;
  
  const getY = (value) => {
    return chartHeight - padding - ((value - minValue) / range) * (chartHeight - 2 * padding);
  };
  
  const getX = (index) => {
    return padding + (index / (data.length - 1)) * (chartWidth - 2 * padding);
  };

  if (type === 'line') {
    const pathData = data.map((item, index) => {
      const x = getX(index);
      const y = getY(item.value || item.revenue || 0);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="relative">
          <svg width={chartWidth} height={chartHeight} className="w-full">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
              <g key={index}>
                <line
                  x1={padding}
                  y1={padding + ratio * (chartHeight - 2 * padding)}
                  x2={chartWidth - padding}
                  y2={padding + ratio * (chartHeight - 2 * padding)}
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
                <text
                  x={padding - 10}
                  y={padding + ratio * (chartHeight - 2 * padding) + 5}
                  fontSize="12"
                  fill="#6b7280"
                  textAnchor="end"
                >
                  {Math.round(maxValue - ratio * range).toLocaleString()}
                </text>
              </g>
            ))}
            
            {/* Chart line */}
            <path
              d={pathData}
              fill="none"
              stroke="#16a34a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            {data.map((item, index) => (
              <circle
                key={index}
                cx={getX(index)}
                cy={getY(item.value || item.revenue || 0)}
                r="4"
                fill="#16a34a"
                className="hover:r-6 transition-all cursor-pointer"
              />
            ))}
            
            {/* X-axis labels */}
            {data.map((item, index) => (
              <text
                key={index}
                x={getX(index)}
                y={chartHeight - 10}
                fontSize="12"
                fill="#6b7280"
                textAnchor="middle"
              >
                {item.month || item.label || index + 1}
              </text>
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'bar') {
    const barWidth = (chartWidth - 2 * padding) / data.length * 0.6;
    
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="relative">
          <svg width={chartWidth} height={chartHeight} className="w-full">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
              <g key={index}>
                <line
                  x1={padding}
                  y1={padding + ratio * (chartHeight - 2 * padding)}
                  x2={chartWidth - padding}
                  y2={padding + ratio * (chartHeight - 2 * padding)}
                  stroke="#f3f4f6"
                  strokeWidth="1"
                />
                <text
                  x={padding - 10}
                  y={padding + ratio * (chartHeight - 2 * padding) + 5}
                  fontSize="12"
                  fill="#6b7280"
                  textAnchor="end"
                >
                  {Math.round(maxValue - ratio * range).toLocaleString()}
                </text>
              </g>
            ))}
            
            {/* Bars */}
            {data.map((item, index) => {
              const x = padding + (index / data.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / data.length * 0.2;
              const y = getY(item.value || item.revenue || 0);
              const height = chartHeight - padding - y;
              
              return (
                <rect
                  key={index}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={height}
                  fill="#16a34a"
                  className="hover:fill-green-600 transition-colors cursor-pointer"
                  rx="4"
                />
              );
            })}
            
            {/* X-axis labels */}
            {data.map((item, index) => (
              <text
                key={index}
                x={padding + (index / data.length) * (chartWidth - 2 * padding) + (chartWidth - 2 * padding) / data.length * 0.5}
                y={chartHeight - 10}
                fontSize="12"
                fill="#6b7280"
                textAnchor="middle"
              >
                {item.month || item.label || index + 1}
              </text>
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'donut') {
    const centerX = chartWidth / 2;
    const centerY = chartHeight / 2;
    const radius = Math.min(chartWidth, chartHeight) / 2 - padding;
    const innerRadius = radius * 0.6;
    
    const total = data.reduce((sum, item) => sum + (item.value || 0), 0);
    let currentAngle = -90; // Start from top
    
    const colors = ['#16a34a', '#22c55e', '#4ade80', '#86efac', '#bbf7d0'];
    
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="flex items-center space-x-6">
          <svg width={chartWidth / 2} height={chartHeight} className="flex-shrink-0">
            {data.map((item, index) => {
              const percentage = (item.value || 0) / total;
              const angle = percentage * 360;
              
              const startAngle = (currentAngle * Math.PI) / 180;
              const endAngle = ((currentAngle + angle) * Math.PI) / 180;
              
              const x1 = centerX / 2 + radius * Math.cos(startAngle);
              const y1 = centerY + radius * Math.sin(startAngle);
              const x2 = centerX / 2 + radius * Math.cos(endAngle);
              const y2 = centerY + radius * Math.sin(endAngle);
              
              const x3 = centerX / 2 + innerRadius * Math.cos(endAngle);
              const y3 = centerY + innerRadius * Math.sin(endAngle);
              const x4 = centerX / 2 + innerRadius * Math.cos(startAngle);
              const y4 = centerY + innerRadius * Math.sin(startAngle);
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const pathData = [
                `M ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `L ${x3} ${y3}`,
                `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
                'Z'
              ].join(' ');
              
              currentAngle += angle;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={colors[index % colors.length]}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              );
            })}
          </svg>
          
          {/* Legend */}
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></div>
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm font-medium text-primary">
                  {((item.value || 0) / total * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Chart;