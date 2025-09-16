import { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";

export default function Profile() {
  const { user, updateProfile, isLoading, error } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    location: "",
    farmSize: "",
    poultryType: "",
    specialization: "",
    yearsExperience: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: `${user.firstName} ${user.lastName}` || "",
        contactInfo: user.contactInfo || "",
        location: user.location || "",
        farmSize: user.farmSize || "",
        poultryType: user.poultryType || "",
        specialization: user.specialization || "",
        yearsExperience: user.yearsExperience || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(formData);
  };

  if (!user) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Please sign in to view your profile.</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
          {/* Profile Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6.5L12 6.5V7.5C12 8.1 11.6 8.5 11 8.5S10 8.1 10 7.5V6.5L9 6.5V7.5C9 8.1 8.6 8.5 8 8.5S7 8.1 7 7.5V6.5L3 7V9C3 10.1 3.9 11 5 11V12.5C5 13.3 5.7 14 6.5 14S8 13.3 8 12.5V11H16V12.5C16 13.3 16.7 14 17.5 14S19 13.3 19 12.5V11C20.1 11 21 10.1 21 9Z" />
              </svg>
            </div>
          </div>

          {/* Followers/Following */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between text-center">
              <div>
                <p className="text-gray-800 font-semibold text-lg">Followers</p>
                <p className="text-2xl font-bold text-green-700">
                  {user.followers || 0}
                </p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-lg">Following</p>
                <p className="text-2xl font-bold text-green-700">
                  {user.following || 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Contact Info:
              </label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleInputChange}
                placeholder="Phone number or email"
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Location:
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State/Region"
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Farm Size */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Farm Size:
              </label>
              <input
                type="text"
                name="farmSize"
                value={formData.farmSize}
                onChange={handleInputChange}
                placeholder="e.g., 2 acres, 500 birds"
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Poultry Type */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Poultry Type:
              </label>
              <input
                type="text"
                name="poultryType"
                value={formData.poultryType}
                onChange={handleInputChange}
                placeholder="e.g., Broilers, Layers, Mixed"
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Specialization:
              </label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="e.g., Egg Production, Meat Production"
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Years of Experience:
              </label>
              <input
                type="number"
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleInputChange}
                placeholder="e.g., 5"
                className="w-full p-3 bg-gray-200 border-0 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Saving..." : "Save Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
