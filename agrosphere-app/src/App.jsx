import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNavigation from "./components/BottomNavigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Farmers from "./pages/Farmers";
import Forum from "./pages/Forum";
import Marketplace from "./pages/Marketplace";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Menu from "./pages/Menu";
import Training from "./pages/Training";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import BulkPurchasing from "./components/BulkPurchasing";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar - visible on all screen sizes */}
        <Navbar />

        <main className="flex-grow pb-20 md:pb-0">
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
