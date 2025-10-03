import { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";

export default function Profile() {
  const { user, updateProfile, isLoading, error } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    location: "",
    farmSize: "",
    poultryType: "",
    specialization: "",
    yearsExperience: "",
    bio: "",
  });

  // Mock user stats and achievements
  const userStats = {
    postsCount: 24,
    helpfulAnswers: 18,
    reputation: 450,
    joinDate: "January 2023",
    lastActive: "2 hours ago"
  };

  const achievements = [
    { id: 1, title: "Helpful Contributor", description: "Provided 10+ helpful answers", icon: "🏆", earned: true },
    { id: 2, title: "Active Member", description: "Posted 20+ discussions", icon: "💬", earned: true },
    { id: 3, title: "Expert Farmer", description: "5+ years of experience", icon: "🌾", earned: true },
    { id: 4, title: "Community Leader", description: "100+ reputation points", icon: "⭐", earned: true },
    { id: 5, title: "Mentor", description: "Helped 50+ farmers", icon: "🎓", earned: false },
    { id: 6, title: "Innovation Pioneer", description: "Shared innovative techniques", icon: "💡", earned: false }
  ];

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
        bio: user.bio || "",
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(formData);
    setIsEditing(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
            </svg>
          </div>
          <p className="text-secondary text-lg">Please sign in to view your profile.</p>
          <button className="btn-primary mt-4">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 shadow-sm border-b border-slate-200">
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-heading font-bold text-primary">My Profile</h1>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 text-primary hover:bg-success/10 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto space-y-8">
        {/* Enhanced Profile Header */}
        <div className="card">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-r from-success to-brand-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  getInitials(formData.name || "User")
                )}
              </div>
              {isEditing && (
                <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">{formData.name || "User Name"}</h2>
              <p className="text-secondary mb-2">{formData.location || "Location not specified"}</p>
              <p className="text-sm text-secondary mb-6">{formData.bio || "No bio available"}</p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <div className="flex items-center space-x-2 text-secondary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Joined {userStats.joinDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Active {userStats.lastActive}</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:w-48">
              <div className="bg-success/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-success">{user.followers || 0}</p>
                <p className="text-sm text-secondary">Followers</p>
              </div>
              <div className="bg-info/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-info">{userStats.reputation}</p>
                <p className="text-sm text-secondary">Reputation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Stats */}
        <div className="card">
          <h3 className="text-lg font-heading font-semibold text-primary mb-6">Activity Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{userStats.postsCount}</p>
              <p className="text-sm text-secondary">Posts</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{userStats.helpfulAnswers}</p>
              <p className="text-sm text-secondary">Helpful Answers</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{user.following || 0}</p>
              <p className="text-sm text-secondary">Following</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{formData.yearsExperience || 0}</p>
              <p className="text-sm text-secondary">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="card">
          <h3 className="text-lg font-heading font-semibold text-primary mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned 
                    ? 'border-success/20 bg-success/10' 
                    : 'border-slate-200 bg-slate-50 opacity-60'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h4 className={`font-medium ${achievement.earned ? 'text-success' : 'text-secondary'}`}>
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-secondary">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Form */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-heading font-semibold text-primary">Profile Information</h3>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                className="btn-outline"
              >
                Edit Profile
              </button>
            )}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-error/10 border border-error/20 text-error rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-primary font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`input ${
                    isEditing 
                      ? 'bg-white' 
                      : 'bg-slate-100 text-secondary'
                  }`}
                />
              </div>

              {/* Contact Info */}
              <div>
                <label className="block text-primary font-medium mb-2">Contact Information</label>
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Phone number or email"
                  className={`input ${
                    isEditing 
                      ? 'bg-white' 
                      : 'bg-slate-100 text-secondary'
                  }`}
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-primary font-medium mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="City, State/Region"
                  className={`input ${
                    isEditing 
                      ? 'bg-white' 
                      : 'bg-slate-100 text-secondary'
                  }`}
                />
              </div>

              {/* Farm Size */}
              <div>
                <label className="block text-primary font-medium mb-2">Farm Size</label>
                <input
                  type="text"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="e.g., 2 acres, 500 birds"
                  className={`input ${
                    isEditing 
                      ? 'bg-white' 
                      : 'bg-slate-100 text-secondary'
                  }`}
                />
              </div>

              {/* Poultry Type */}
              <div>
                <label className="block text-primary font-medium mb-2">Poultry Type</label>
                <input
                  type="text"
                  name="poultryType"
                  value={formData.poultryType}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="e.g., Broilers, Layers, Mixed"
                  className={`input ${
                    isEditing 
                      ? 'bg-white' 
                      : 'bg-slate-100 text-secondary'
                  }`}
                />
              </div>

              {/* Specialization */}
              <div>
                <label className="block text-primary font-medium mb-2">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="e.g., Egg Production, Meat Production"
                  className={`input ${
                    isEditing 
                      ? 'bg-white' 
                      : 'bg-slate-100 text-secondary'
                  }`}
                />
              </div>
            </div>

            {/* Years of Experience */}
            <div className="md:w-1/2">
              <label className="block text-primary font-medium mb-2">Years of Experience</label>
              <input
                type="number"
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="e.g., 5"
                className={`input ${
                  isEditing 
                    ? 'bg-white' 
                    : 'bg-slate-100 text-secondary'
                }`}
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-primary font-medium mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={4}
                placeholder="Tell us about yourself and your farming experience..."
                className={`input resize-none ${
                  isEditing 
                    ? 'bg-white' 
                    : 'bg-slate-100 text-secondary'
                }`}
              />
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn-outline"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
