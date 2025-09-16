import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      // Auth state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Sign up action
      signUp: async (userData) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call - replace with actual API
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock user creation
          const newUser = {
            id: Date.now(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            profileComplete: false,
            createdAt: new Date().toISOString(),
          };

          set({
            user: newUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          return { success: true, user: newUser };
        } catch (error) {
          set({
            isLoading: false,
            error: error.message || "Sign up failed",
          });
          return { success: false, error: error.message };
        }
      },

      // Sign in action
      signIn: async (credentials) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call - replace with actual API
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock user authentication
          const mockUser = {
            id: 1,
            firstName: "Ngozi",
            lastName: "Ngwueze",
            email: credentials.email,
            profileComplete: true,
            farmSize: "2 acres",
            poultryType: "Layers",
            specialization: "Egg Production",
            yearsExperience: 5,
            location: "Lagos, Nigeria",
            contactInfo: "+234 801 234 5678",
            followers: 0,
            following: 0,
            createdAt: "2024-01-01T00:00:00.000Z",
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          return { success: true, user: mockUser };
        } catch (error) {
          set({
            isLoading: false,
            error: error.message || "Sign in failed",
          });
          return { success: false, error: error.message };
        }
      },

      // Sign out action
      signOut: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      // Update profile action
      updateProfile: async (profileData) => {
        set({ isLoading: true, error: null });

        try {
          const currentUser = get().user;
          if (!currentUser) throw new Error("No user found");

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 500));

          const updatedUser = {
            ...currentUser,
            ...profileData,
            profileComplete: true,
          };

          set({
            user: updatedUser,
            isLoading: false,
            error: null,
          });

          return { success: true, user: updatedUser };
        } catch (error) {
          set({
            isLoading: false,
            error: error.message || "Profile update failed",
          });
          return { success: false, error: error.message };
        }
      },

      // Clear error action
      clearError: () => set({ error: null }),

      // Reset loading state
      setLoading: (loading) => set({ isLoading: loading }),

      // Check if user has completed profile
      isProfileComplete: () => {
        const user = get().user;
        return user && user.profileComplete;
      },

      // Get user display name
      getUserDisplayName: () => {
        const user = get().user;
        if (!user) return "Guest";
        return `${user.firstName} ${user.lastName}`;
      },

      // Mock saved courses (can be moved to separate store later)
      savedCourses: [
        {
          id: 1,
          title: "Disease Prevention",
          description: "Learn how to prevent common poultry diseases",
          category: "Health",
          savedAt: new Date().toISOString(),
        },
        {
          id: 2,
          title: "Poultry Management",
          description: "Best practices for managing your poultry farm",
          category: "Management",
          savedAt: new Date().toISOString(),
        },
        {
          id: 3,
          title: "Business Skill",
          description: "Develop business skills for farm success",
          category: "Business",
          savedAt: new Date().toISOString(),
        },
      ],

      // Add course to saved
      saveCourse: (course) => {
        const currentCourses = get().savedCourses;
        const isAlreadySaved = currentCourses.some((c) => c.id === course.id);

        if (!isAlreadySaved) {
          set({
            savedCourses: [
              ...currentCourses,
              { ...course, savedAt: new Date().toISOString() },
            ],
          });
        }
      },

      // Remove course from saved
      removeSavedCourse: (courseId) => {
        const currentCourses = get().savedCourses;
        set({
          savedCourses: currentCourses.filter((c) => c.id !== courseId),
        });
      },
    }),
    {
      name: "agrosphere-auth", // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        savedCourses: state.savedCourses,
      }),
    },
  ),
);

export default useAuthStore;
