import React, { useState } from 'react';

export default function BulkPurchasing() {
  const [activeTab, setActiveTab] = useState('group-buying');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mock data for bulk purchasing opportunities
  const groupBuyingOffers = [
    {
      id: 1,
      product: 'Premium Maize Seeds',
      organizer: 'Lagos Farmers Cooperative',
      currentParticipants: 45,
      targetParticipants: 100,
      pricePerUnit: '₦2,500/bag',
      bulkPrice: '₦2,000/bag',
      savings: '20%',
      deadline: '2024-02-15',
      minOrder: 10,
      status: 'active'
    },
    {
      id: 2,
      product: 'Organic Fertilizer',
      organizer: 'Northern States Alliance',
      currentParticipants: 78,
      targetParticipants: 150,
      pricePerUnit: '₦8,000/bag',
      bulkPrice: '₦6,500/bag',
      savings: '18.75%',
      deadline: '2024-02-20',
      minOrder: 5,
      status: 'active'
    },
    {
      id: 3,
      product: 'Poultry Feed',
      organizer: 'Southwest Poultry Network',
      currentParticipants: 120,
      targetParticipants: 120,
      pricePerUnit: '₦4,500/bag',
      bulkPrice: '₦3,800/bag',
      savings: '15.5%',
      deadline: '2024-02-10',
      minOrder: 20,
      status: 'completed'
    }
  ];

  const wholesaleDeals = [
    {
      id: 1,
      supplier: 'AgriSupply Nigeria Ltd',
      product: 'Hybrid Rice Seeds',
      quantity: '500 bags available',
      price: '₦3,200/bag',
      originalPrice: '₦4,000/bag',
      discount: '20%',
      location: 'Kaduna',
      contact: '+234 801 234 5678'
    },
    {
      id: 2,
      supplier: 'FarmTech Solutions',
      product: 'Irrigation Equipment Set',
      quantity: '25 sets available',
      price: '₦85,000/set',
      originalPrice: '₦110,000/set',
      discount: '22.7%',
      location: 'Kano',
      contact: '+234 802 345 6789'
    }
  ];

  const renderGroupBuying = () => (
    <div className="space-y-4">
      {groupBuyingOffers.map((offer) => (
        <div key={offer.id} className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-primary">{offer.product}</h3>
              <p className="text-sm text-gray-600">by {offer.organizer}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              offer.status === 'active' ? 'bg-green-100 text-green-800' :
              offer.status === 'completed' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {offer.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Current Price</p>
              <p className="font-semibold text-red-600 line-through">{offer.pricePerUnit}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Bulk Price</p>
              <p className="font-semibold text-green-600">{offer.bulkPrice}</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{offer.currentParticipants}/{offer.targetParticipants} farmers</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${(offer.currentParticipants / offer.targetParticipants) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>Min. Order: {offer.minOrder} bags</span>
            <span>Deadline: {offer.deadline}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="text-green-600 font-semibold">Save {offer.savings}</span>
            </div>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                offer.status === 'active' 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={offer.status !== 'active'}
            >
              {offer.status === 'active' ? 'Join Group' : 'Completed'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWholesaleDeals = () => (
    <div className="space-y-4">
      {wholesaleDeals.map((deal) => (
        <div key={deal.id} className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-primary">{deal.product}</h3>
              <p className="text-sm text-gray-600">{deal.supplier}</p>
            </div>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              {deal.discount} OFF
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Wholesale Price</p>
              <p className="font-semibold text-green-600">{deal.price}</p>
              <p className="text-xs text-gray-500 line-through">{deal.originalPrice}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Available</p>
              <p className="font-semibold text-primary">{deal.quantity}</p>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>📍 {deal.location}</span>
            <span>📞 {deal.contact}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
            Contact Supplier
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold text-secondary text-center">Bulk Purchasing</h1>
        <p className="text-sm text-gray-600 text-center mt-1">
          Save money through group buying and wholesale deals
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'group-buying'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('group-buying')}
          >
            Group Buying
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'wholesale'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('wholesale')}
          >
            Wholesale Deals
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'group-buying' && renderGroupBuying()}
        {activeTab === 'wholesale' && renderWholesaleDeals()}
      </div>

      {/* Create Group Buying Button */}
      <div className="fixed bottom-20 right-4">
        <button className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}