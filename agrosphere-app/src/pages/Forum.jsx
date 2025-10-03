import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonCard, { SkeletonGrid } from "../components/SkeletonCard";

export default function Forum() {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [dislikedPosts, setDislikedPosts] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Simulate loading when changing categories
  useEffect(() => {
    if (!isLoading) {
      setIsLoadingPosts(true);
      const timer = setTimeout(() => {
        setIsLoadingPosts(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);

  // Mock forum data with enhanced user information
  const forumPosts = [
    {
      id: 1,
      author: "Chika Okafor",
      avatar: "CO",
      timeAgo: "2 hours ago",
      title: "Best feed formula for 6-week old broilers?",
      content: "I'm looking for advice on the most effective feed formula for my 6-week old broilers. Currently using a 22% protein starter feed but wondering if I should switch...",
      category: "Feed & Nutrition",
      categoryColor: "yellow",
      likes: 15,
      dislikes: 2,
      replies: 8,
      isExpert: false
    },
    {
      id: 2,
      author: "Emmanuel Ude",
      avatar: "EU",
      timeAgo: "5 hours ago",
      title: "Dealing with Newcastle disease outbreak",
      content: "My neighbor's farm just reported Newcastle disease. I'm worried about my 300 birds. What preventive measures should I take immediately?",
      category: "Disease Prevention",
      categoryColor: "red",
      likes: 23,
      dislikes: 1,
      replies: 12,
      isExpert: false
    },
    {
      id: 3,
      author: "Grace Nkomo",
      avatar: "GN",
      timeAgo: "1 day ago",
      title: "Egg production dropped suddenly - need help!",
      content: "My layers (18 weeks old) were producing well, but egg production dropped from 85% to 45% in just 3 days. No visible signs of illness. Any ideas?",
      category: "Breeding",
      categoryColor: "blue",
      likes: 18,
      dislikes: 0,
      replies: 15,
      isExpert: false
    },
    {
      id: 4,
      author: "Dr. Adebayo Farms",
      avatar: "DA",
      timeAgo: "2 days ago",
      title: "Seasonal vaccination schedule for poultry",
      content: "Here's a comprehensive vaccination schedule I've developed over 15 years of practice. This has helped reduce mortality rates significantly on farms I consult for...",
      category: "Disease Prevention",
      categoryColor: "red",
      likes: 45,
      dislikes: 3,
      replies: 22,
      isExpert: true
    }
  ];

  const categories = [
    { id: "all", name: "All Topics", color: "green" },
    { id: "feed", name: "Feed & Nutrition", color: "yellow" },
    { id: "disease", name: "Disease Prevention", color: "red" },
    { id: "breeding", name: "Breeding", color: "blue" },
    { id: "business", name: "Business Tips", color: "purple" }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? forumPosts 
    : forumPosts.filter(post => 
        post.category.toLowerCase().includes(selectedCategory) ||
        (selectedCategory === "feed" && post.category.includes("Feed")) ||
        (selectedCategory === "disease" && post.category.includes("Disease")) ||
        (selectedCategory === "breeding" && post.category.includes("Breeding")) ||
        (selectedCategory === "business" && post.category.includes("Business"))
      );

  const handleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    const newDisliked = new Set(dislikedPosts);
    
    if (likedPosts.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
      newDisliked.delete(postId); // Remove dislike if exists
    }
    
    setLikedPosts(newLiked);
    setDislikedPosts(newDisliked);
  };

  const handleDislike = (postId) => {
    const newLiked = new Set(likedPosts);
    const newDisliked = new Set(dislikedPosts);
    
    if (dislikedPosts.has(postId)) {
      newDisliked.delete(postId);
    } else {
      newDisliked.add(postId);
      newLiked.delete(postId); // Remove like if exists
    }
    
    setLikedPosts(newLiked);
    setDislikedPosts(newDisliked);
  };

  const getCategoryColorClasses = (color) => {
    const colorMap = {
      yellow: "bg-yellow-100 text-yellow-800",
      red: "bg-red-100 text-red-800",
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800"
    };
    return colorMap[color] || "bg-gray-100 text-gray-800";
  };

  // Show initial loading screen
  if (isLoading) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="large" text="Loading Forum..." />
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
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-heading font-bold text-primary">Forum</h1>
          <button className="p-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b border-slate-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search discussions..."
            className="input pl-4 pr-12"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-slate-100 rounded transition-colors">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Categories */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b border-slate-200">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-success text-white shadow-sm"
                  : "bg-white text-secondary hover:bg-slate-50 hover:text-primary border border-slate-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-secondary">
          Showing {filteredPosts.length} discussions
        </div>
      </div>

      {/* Enhanced Forum Posts */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {isLoadingPosts ? (
          <SkeletonGrid count={4} />
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="card hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                {/* Enhanced Avatar */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    post.isExpert ? 'bg-gradient-to-r from-success to-brand-secondary ring-2 ring-success/20' : 'bg-slate-400'
                  }`}>
                    {post.avatar}
                  </div>
                  {post.isExpert && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-warning rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  )}
                </div>
              
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="font-semibold text-primary">{post.author}</h3>
                    {post.isExpert && (
                      <span className="text-xs bg-warning/10 text-warning px-3 py-1 rounded-full font-medium">
                        Expert
                      </span>
                    )}
                    <span className="text-sm text-secondary">{post.timeAgo}</span>
                  </div>
                  
                  <h4 className="card-title text-lg mb-3 hover:text-success cursor-pointer transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="card-description mb-6 line-clamp-3">
                    {post.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Enhanced Like/Dislike */}
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-2 transition-colors ${
                            likedPosts.has(post.id) 
                              ? 'text-success' 
                              : 'text-secondary hover:text-success'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558-.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
                          </svg>
                          <span className="text-sm font-medium">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                        
                        <button 
                          onClick={() => handleDislike(post.id)}
                          className={`flex items-center space-x-2 transition-colors ${
                            dislikedPosts.has(post.id) 
                              ? 'text-error' 
                              : 'text-secondary hover:text-error'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521C4.537 3.997 5.136 3.75 5.754 3.75h4.016c.483 0 .964.078 1.423.23l3.114 1.04a4.501 4.501 0 001.423.23zM21.669 13.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z"/>
                          </svg>
                          <span className="text-sm font-medium">{post.dislikes + (dislikedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-secondary hover:text-info transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-sm font-medium">{post.replies} replies</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        <span className="text-sm font-medium">Share</span>
                      </button>
                    </div>
                    
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getCategoryColorClasses(post.categoryColor)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-success text-white rounded-full shadow-lg hover:bg-success/90 transition-all duration-200 flex items-center justify-center hover:scale-105">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
