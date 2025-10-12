import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNavigation from "./components/BottomNavigation";
import PageLoader from "./components/PageLoader";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Farmers = lazy(() => import("./pages/Farmers"));
const Forum = lazy(() => import("./pages/Forum"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Menu = lazy(() => import("./pages/Menu"));
const Training = lazy(() => import("./pages/Training"));
const Settings = lazy(() => import("./pages/Settings"));
const Analytics = lazy(() => import("./pages/Analytics"));
const BulkPurchasing = lazy(() => import("./pages/BulkPurchasing"));
const Notifications = lazy(() => import("./pages/Notifications"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar - visible on all screen sizes */}
        <Navbar />

        <main className="flex-grow pb-20 md:pb-0">
          <Suspense fallback={<PageLoader message="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/farmers" element={<Farmers />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/training" element={<Training />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/bulk-purchasing" element={<BulkPurchasing />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </Suspense>
        </main>

        {/* Desktop Footer - hidden on mobile */}
        <div className="hidden md:block mt-auto">
          <Footer />
        </div>

        {/* Mobile Bottom Navigation - hidden on desktop */}
        <div className="md:hidden">
          <BottomNavigation />
        </div>
      </div>
    </Router>
  );
}

export default App;
