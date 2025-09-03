import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Star,
  Trophy,
  Users,
  Target,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Play,
  Shield,
  FileText,
  Zap,
  TrendingUp,
  Award,
  Clock,
  BarChart3,
  Gamepad2,
} from "lucide-react";

// Custom App Store SVG Component
const AppStoreBadge = ({ isDark }: { isDark: boolean }) => (
  <svg width="135" height="40" viewBox="0 0 135 40" className="w-full h-auto">
    <defs>
      <linearGradient id="appStoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isDark ? "#15803d" : "#22c55e"} />
        <stop offset="100%" stopColor={isDark ? "#4ade80" : "#86efac"} />
      </linearGradient>
    </defs>
    <rect width="135" height="40" rx="8" fill="url(#appStoreGradient)" />
    <path
      d="M25.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.438-1.331 3.349-2.664a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.949-4.406z"
      fill="white"
    />
    <path
      d="M22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66A4.636 4.636 0 0 0 18.8 13.74a4.1 4.1 0 0 0 3.237-1.53z"
      fill="white"
    />
    <text x="42" y="15" fill="white" fontSize="9" fontFamily="Inter">
      Download on the
    </text>
    <text
      x="42"
      y="28"
      fill="white"
      fontSize="17"
      fontFamily="Inter"
      fontWeight="bold"
    >
      App Store
    </text>
  </svg>
);

// Custom Google Play SVG Component
const GooglePlayBadge = ({ isDark }: { isDark: boolean }) => (
  <svg width="135" height="40" viewBox="0 0 135 40" className="w-full h-auto">
    <defs>
      <linearGradient
        id="playStoreGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor={isDark ? "#15803d" : "#22c55e"} />
        <stop offset="100%" stopColor={isDark ? "#4ade80" : "#86efac"} />
      </linearGradient>
    </defs>
    <rect width="135" height="40" rx="8" fill="url(#playStoreGradient)" />
    <path
      d="M8.842 7.158c-.184.063-.321.202-.321.467v24.75c0 .265.137.404.321.467l.063.047 13.859-13.858v-.329L8.905 7.11l-.063.048z"
      fill="#22c55e"
    />
    <path
      d="M27.379 22.667l-4.615-4.615v-.104l4.615-4.615.105.062 5.468 3.106c1.563.889 1.563 2.335 0 3.224l-5.468 3.106-.105-.164z"
      fill="#4ade80"
    />
    <path
      d="M27.484 22.503L22.764 17.948 8.842 32.842c.512.544 1.351.606 2.294.062l16.348-9.401z"
      fill="#86efac"
    />
    <path
      d="M27.484 17.393L11.136 7.992c-.943-.544-1.782-.482-2.294.062l13.922 14.894 4.72-5.555z"
      fill="#16a34a"
    />
    <text x="42" y="12" fill="white" fontSize="8" fontFamily="Inter">
      GET IT ON
    </text>
    <text
      x="42"
      y="24"
      fill="white"
      fontSize="14"
      fontFamily="Inter"
      fontWeight="bold"
    >
      Google Play
    </text>
  </svg>
);

// Football Field Background Component
const FootballField = ({
  mousePosition,
  isDark,
}: {
  mousePosition: { x: number; y: number };
  isDark: boolean;
}) => {
  const [arrows, setArrows] = useState<
    Array<{ id: number; x: number; y: number; angle: number; delay: number }>
  >([]);

  useEffect(() => {
    const generateArrows = () => {
      const newArrows = [];
      for (let i = 0; i < 12; i++) {
        newArrows.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          angle: Math.random() * 360,
          delay: Math.random() * 5,
        });
      }
      setArrows(newArrows);
    };

    generateArrows();
    const interval = setInterval(generateArrows, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Football Field Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
      >
        <rect
          x="100"
          y="100"
          width="1000"
          height="600"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <line
          x1="600"
          y1="100"
          x2="600"
          y2="700"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <circle
          cx="600"
          cy="400"
          r="80"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <rect
          x="100"
          y="250"
          width="150"
          height="300"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <rect
          x="950"
          y="250"
          width="150"
          height="300"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <rect
          x="100"
          y="325"
          width="60"
          height="150"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <rect
          x="1040"
          y="325"
          width="60"
          height="150"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <path
          d="M 100 100 Q 120 100 120 120"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <path
          d="M 1100 100 Q 1100 120 1080 120"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <path
          d="M 100 700 Q 120 700 120 680"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
        <path
          d="M 1100 700 Q 1100 680 1080 680"
          fill="none"
          stroke={isDark ? "#4ade80" : "#22c55e"}
          strokeWidth="2"
        />
      </svg>

      {/* Tactical Arrows */}
      {arrows.map((arrow) => (
        <div
          key={arrow.id}
          className="absolute animate-pulse"
          style={{
            left: `${arrow.x}%`,
            top: `${arrow.y}%`,
            transform: `rotate(${arrow.angle}deg)`,
            animationDelay: `${arrow.delay}s`,
            animationDuration: "3s",
          }}
        >
          <svg width="40" height="8" viewBox="0 0 40 8" className="opacity-30">
            <defs>
              <linearGradient
                id={`arrowGradient${arrow.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor={isDark ? "#4ade80" : "#22c55e"}
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor={isDark ? "#4ade80" : "#22c55e"}
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor={isDark ? "#86efac" : "#4ade80"}
                  stopOpacity="1"
                />
              </linearGradient>
            </defs>
            <path
              d="M0 4 L32 4 M28 1 L32 4 L28 7"
              stroke={`url(#arrowGradient${arrow.id})`}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

// Terms and Privacy Modal Component
const LegalModal = ({
  isOpen,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy";
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl max-h-[80vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-green-100 dark:hover:bg-green-700/50 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-green-500 dark:text-green-400" />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {type === "terms" ? "Terms of Service" : "Privacy Policy"}
        </h2>

        <div className="prose dark:prose-invert max-w-none">
          {type === "terms" ? (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By downloading, installing, or using the Tactix™ fantasy
                  football application, you agree to be bound by these Terms of
                  Service. If you do not agree to these terms, please do not use
                  our service.
                </p>
              </section>
              {/* Other sections remain unchanged */}
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">
                  Information We Collect
                </h3>
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, participate in leagues, or contact
                  us for support. This may include your name, email address, and
                  gameplay preferences.
                </p>
              </section>
              {/* Other sections remain unchanged */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: "terms" | "privacy" | null;
  }>({
    isOpen: false,
    type: null,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const openLegalModal = (type: "terms" | "privacy") => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  return (
    <div className="relative min-h-screen bg-green-50 overflow-x-hidden">
      {/* Football Field Background */}
      <FootballField isDark mousePosition={mousePosition} />

      {/* Dynamic Background Light Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
        rgba(74, 222, 128, 0.08) 0%, rgba(22, 163, 74, 0.04) 25%, transparent 50%)`,
        }}
      />

      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lime-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-around px-6 py-6 backdrop-blur-md bg-green-50/80 border-b border-green-200/50 transition-colors duration-300">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-['Space_Grotesk']">
            Tactix<span>™</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-green-600 hover:text-green-900 transition-colors duration-300 font-medium"
          >
            Features
          </a>
          <a
            href="#how-to-play"
            className="text-green-600 hover:text-green-900 transition-colors duration-300 font-medium"
          >
            How to Play
          </a>
          <a
            href="#download"
            className="text-green-600 hover:text-green-900 transition-colors duration-300 font-medium"
          >
            Download
          </a>
          <a
            href="#contact"
            className="text-green-600 hover:text-green-900 transition-colors duration-300 font-medium"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-green-800 hover:bg-green-700 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 z-40 bg-green-50/95 backdrop-blur-md border-b border-green-200 p-6">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-green-600 font-medium">
              Features
            </a>
            <a href="#how-to-play" className="text-green-600 font-medium">
              How to Play
            </a>
            <a href="#download" className="text-green-600 font-medium">
              Download
            </a>
            <a href="#contact" className="text-green-600 font-medium">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-green-400/30">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-xs sm:text-sm font-medium text-green-700">
                The Future of Fantasy Football
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-['Space_Grotesk']">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Dominate Every
              </span>
              <br />
              <span className="text-green-900">Gameweek</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-green-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-['Poppins']">
              Experience the most advanced fantasy Premier League platform ever
              created. Powered by AI-driven insights, real-time analytics, and
              professional-grade tactical tools that give you the edge over
              millions of managers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start mb-8 sm:mb-12">
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="w-36 sm:w-44 h-12 sm:h-14 hover:shadow-2xl transition-shadow duration-300">
                  <AppStoreBadge isDark />
                </div>
              </div>
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="w-36 sm:w-44 h-12 sm:h-14 hover:shadow-2xl transition-shadow duration-300">
                  <GooglePlayBadge isDark />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-500">2000+ Active Players</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-green-500">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* iPhone Mockups */}
          <div className="relative hidden sm:flex justify-center">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 max-w-full">
              {/* iPhone Frame 1 - Team Management */}
              <div
                className="relative transform hover:scale-105 transition-all duration-500 w-[70vw] sm:w-40 md:w-48 lg:w-56 max-w-[260px]"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <div className="h-[400px] sm:h-[460px] md:h-[500px] bg-black rounded-[2.5rem] p-2 shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-200 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute top-2 sm:top-6 left-1/2 transform -translate-x-1/2 w-20 h-5 sm:h-6 bg-black rounded-full"></div>
                    <div className="pt-10 sm:pt-12 p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-green-900 font-['Space_Grotesk']">
                          My Squad
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              1
                            </span>
                          </div>
                          <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        {[
                          {
                            name: "Haaland",
                            pos: "FWD",
                            points: "+15",
                            price: "14.0",
                          },
                          {
                            name: "Salah",
                            pos: "MID",
                            points: "+12",
                            price: "13.2",
                          },
                          {
                            name: "De Bruyne",
                            pos: "MID",
                            points: "+8",
                            price: "12.5",
                          },
                          {
                            name: "Van Dijk",
                            pos: "DEF",
                            points: "+6",
                            price: "6.5",
                          },
                          {
                            name: "Alisson",
                            pos: "GK",
                            points: "+4",
                            price: "5.5",
                          },
                        ].map((player, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 sm:space-x-3 bg-green-100/70 p-2 sm:p-3 rounded-lg backdrop-blur-sm shadow-md"
                          >
                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {player.pos}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-sm sm:text-base text-green-900">
                                {player.name}
                              </div>
                              <div className="text-xs text-green-500">
                                £{player.price}m
                              </div>
                            </div>
                            <div className="text-green-400 font-bold text-sm">
                              {player.points}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg border border-green-400/30 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-green-700">
                            Total Points
                          </span>
                          <span className="text-lg sm:text-2xl font-bold text-green-400">
                            2,456
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone Frame 2 - League Table */}
              <div
                className="relative transform hover:scale-105 transition-all duration-500 w-[70vw] sm:w-40 md:w-48 lg:w-56 max-w-[260px]"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              >
                <div className="h-[400px] sm:h-[460px] md:h-[500px] bg-black rounded-[2.5rem] p-2 shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-200 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute top-2 sm:top-6 left-1/2 transform -translate-x-1/2 w-20 h-5 sm:h-6 bg-black rounded-full"></div>
                    <div className="pt-10 sm:pt-12 p-3 sm:p-4">
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-green-900 font-['Space_Grotesk']">
                          Global Ranking
                        </h3>
                        <div className="flex justify-center space-x-4 sm:space-x-6">
                          <div className="text-center">
                            <div className="text-lg sm:text-2xl font-bold text-green-400">
                              1st
                            </div>
                            <div className="text-xs text-green-500">
                              Position
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg sm:text-2xl font-bold text-green-400">
                              2,456
                            </div>
                            <div className="text-xs text-green-500">Points</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg sm:text-2xl font-bold text-green-400">
                              98%
                            </div>
                            <div className="text-xs text-green-500">Top</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          { rank: 1, name: "You", points: 2456, change: "+3" },
                          {
                            rank: 2,
                            name: "TacticalGenius",
                            points: 2445,
                            change: "-1",
                          },
                          {
                            rank: 3,
                            name: "PremierPro",
                            points: 2432,
                            change: "+1",
                          },
                          {
                            rank: 4,
                            name: "FantasyKing",
                            points: 2428,
                            change: "-2",
                          },
                          {
                            rank: 5,
                            name: "GoalMachine",
                            points: 2415,
                            change: "0",
                          },
                          {
                            rank: 6,
                            name: "MidfieldMaster",
                            points: 2401,
                            change: "+1",
                          },
                        ].map((player, i) => (
                          <div
                            key={i}
                            className={`flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg ${
                              i === 0 ? "bg-green-100" : "bg-green-100/50"
                            } shadow-md`}
                          >
                            <div
                              className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                i === 0
                                  ? "bg-green-400 text-white"
                                  : "bg-green-300 text-green-700"
                              }`}
                            >
                              {player.rank}
                            </div>
                            <div className="flex-1">
                              <div
                                className={`font-semibold text-sm sm:text-base ${
                                  i === 0 ? "text-green-900" : "text-green-700"
                                }`}
                              >
                                {player.name}
                              </div>
                            </div>
                            <div
                              className={`text-xs ${
                                player.change.startsWith("+")
                                  ? "text-green-400"
                                  : player.change.startsWith("-")
                                  ? "text-red-400"
                                  : "text-green-500"
                              }`}
                            >
                              {player.change}
                            </div>
                            <div
                              className={`font-bold text-sm ${
                                i === 0 ? "text-green-400" : "text-green-600"
                              }`}
                            >
                              {player.points}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone Frame 3 - Player Insights */}
              <div
                className="relative transform hover:scale-105 transition-all duration-500 w-[70vw] sm:w-40 md:w-48 lg:w-56 max-w-[260px]"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <div className="h-[400px] sm:h-[460px] md:h-[500px] bg-black rounded-[2.5rem] p-2 shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-200 rounded-[2rem] relative overflow-hidden">
                    <div className="absolute top-2 sm:top-6 left-1/2 transform -translate-x-1/2 w-20 h-5 sm:h-6 bg-black rounded-full"></div>
                    <div className="pt-10 sm:pt-12 p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-green-900 font-['Space_Grotesk']">
                          Player Insights
                        </h3>
                        <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        {[
                          {
                            name: "Haaland",
                            stat: "Goals",
                            value: "12",
                            trend: "+2",
                          },
                          {
                            name: "Salah",
                            stat: "Assists",
                            value: "8",
                            trend: "+1",
                          },
                          {
                            name: "De Bruyne",
                            stat: "Passes",
                            value: "245",
                            trend: "+15",
                          },
                          {
                            name: "Van Dijk",
                            stat: "Clean Sheets",
                            value: "5",
                            trend: "0",
                          },
                        ].map((player, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 sm:space-x-3 bg-green-100/70 p-2 sm:p-3 rounded-lg backdrop-blur-sm shadow-md"
                          >
                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {player.stat[0]}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-sm sm:text-base text-green-900">
                                {player.name}
                              </div>
                              <div className="text-xs text-green-500">
                                {player.stat}: {player.value}
                              </div>
                            </div>
                            <div className="text-green-400 font-bold text-sm">
                              {player.trend}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg border border-green-400/30 shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-green-700">
                            AI Prediction
                          </span>
                          <span className="text-lg sm:text-2xl font-bold text-green-400">
                            High
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-20 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-green-400/30">
              <Gamepad2 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-700">
                Game-Changing Features
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 font-['Space_Grotesk']">
              Why Tactix™ is{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-['Poppins']">
              We've reimagined fantasy football from the ground up, combining
              cutting-edge technology with deep football intelligence to create
              the ultimate management experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "AI-Powered Predictions",
                description:
                  "Our advanced machine learning algorithms analyze thousands of data points to predict player performance with unprecedented accuracy.",
                color: "from-green-400 to-emerald-400",
                stats: "94% accuracy rate",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Analytics",
                description:
                  "Get instant insights on player form, fixture difficulty, and market trends to make informed transfer decisions.",
                color: "from-emerald-400 to-lime-400",
                stats: "Live data updates",
              },
              {
                icon: Users,
                title: "Social Leagues",
                description:
                  "Create private leagues with friends, join public competitions, and climb the global leaderboards with our enhanced social features.",
                color: "from-green-400 to-teal-400",
                stats: "2.3M+ active users",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Built with cutting-edge technology for instant loading, smooth animations, and real-time updates that keep you ahead of the game.",
                color: "from-lime-400 to-green-400",
                stats: "<0.5s load time",
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description:
                  "Your data is protected with bank-level encryption and security measures. Play with confidence knowing your information is safe.",
                color: "from-teal-400 to-emerald-400",
                stats: "256-bit encryption",
              },
              {
                icon: Award,
                title: "Expert Insights",
                description:
                  "Access exclusive content from Premier League analysts, former players, and fantasy football experts to gain the competitive edge.",
                color: "from-green-400 to-lime-400",
                stats: "50+ expert contributors",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-green-100/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 hover:border-green-300/50 transition-all duration-500 hover:transform hover:scale-105 shadow-md"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-4 font-['Space_Grotesk']">
                  {feature.title}
                </h3>
                <p className="text-green-600 leading-relaxed mb-4 font-['Poppins']">
                  {feature.description}
                </p>
                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-green-600">
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                  <span>{feature.stats}</span>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section
        id="how-to-play"
        className="relative z-20 py-20 px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-green-400/30">
              <Trophy className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-700">
                Master the Game
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 font-['Space_Grotesk']">
              How to play ?
            </h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto font-['Poppins']">
              Follow our proven strategy guide to transform from a casual player
              into a fantasy football legend. These are the exact steps used by
              our top-ranked managers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Users,
                title: "Build Your Dream Squad",
                description:
                  "Start with £100m budget to select 15 players. Use our AI recommendations to identify undervalued gems and avoid popular traps. Choose your formation wisely - it's the foundation of success.",
                color: "from-green-400 to-emerald-400",
                tips: [
                  "Focus on consistent performers",
                  "Avoid injury-prone players",
                  "Balance premium picks with budget options",
                ],
              },
              {
                icon: Target,
                title: "Master the Art of Timing",
                description:
                  "Use your transfers strategically, activate chips at optimal moments, and captain the right player each week. Our advanced analytics show you exactly when to make your moves.",
                color: "from-emerald-400 to-lime-400",
                tips: [
                  "Save transfers for double gameweeks",
                  "Use chips during favorable fixtures",
                  "Captain differential picks for big gains",
                ],
              },
              {
                icon: Trophy,
                title: "Dominate Your Leagues",
                description:
                  "Track your progress across multiple leagues, analyze your rivals' strategies, and use our exclusive insights to stay ahead. Consistency beats luck every time.",
                color: "from-green-400 to-teal-400",
                tips: [
                  "Join multiple league types",
                  "Study top managers' strategies",
                  "Stay patient with long-term planning",
                ],
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-green-100/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 hover:border-green-300/50 transition-all duration-500 hover:transform hover:scale-105 shadow-md"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-900">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-green-900 mb-4 font-['Space_Grotesk']">
                  {step.title}
                </h3>
                <p className="text-green-600 leading-relaxed mb-6 font-['Poppins']">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-600 mb-2">
                    Pro Tips:
                  </h4>
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-green-500">{tip}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="bg-green-100/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-md">
            <div className="text-center mb-12">
              <span className="px-4 py-1 rounded-full border border-green-400 text-green-400 text-sm">
                User Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-green-900">
                What <span className="text-green-400">Players</span> Say
              </h2>
              <p className="text-green-600 mt-2 max-w-xl mx-auto">
                Hear from our top managers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Nebeyu Y.",
                  quote:
                    "Best fantasy soccer app I've used. The interface is clean and real-time updates are amazing!",
                },
                {
                  name: "Abenezer W.",
                  quote:
                    "Finally, a fantasy app that gets it right. Love the team building feature and weekly prizes!",
                },
                {
                  name: "Kaleab T.",
                  quote:
                    "Great fantasy app. The player stats updates and transfers are super easy to manage.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-md bg-green-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex space-x-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                          >
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.801 1.48 8.293L12 18.896l-7.416 4.504 1.48-8.293L0 9.306l8.332-1.151z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                  <p className="mb-4 text-green-600 italic">"{item.quote}"</p>
                  <p className="font-semibold text-green-900">{item.name}</p>
                  <p className="text-sm text-green-500">Player</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold mb-8 text-green-900">
              Our <span className="text-green-400">Partners</span>
            </h3>

            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {["/v.jpg", "/v (3).jpg", "/v (2).jpg", "/v (1).jpg"].map(
                  (logo, i) => (
                    <div
                      key={`logo-${i}`}
                      className="flex-shrink-0 w-24 h-24 rounded-full border border-green-400 flex items-center justify-center bg-green-50 shadow-md mx-6"
                    >
                      <img
                        src={logo}
                        alt={`Partner ${i + 1}`}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  )
                )}
                {["/v.jpg", "/v (3).jpg", "/v (2).jpg", "/v (1).jpg"].map(
                  (logo, i) => (
                    <div
                      key={`logo-duplicate-${i}`}
                      className="flex-shrink-0 w-24 h-24 rounded-full border border-green-400 flex items-center justify-center bg-green-50 shadow-md mx-6"
                    >
                      <img
                        src={logo}
                        alt={`Partner ${i + 1}`}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-green-400/30">
            <Gamepad2 className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-700">
              Available Now
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 font-['Space_Grotesk']">
            Download{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Tactix™
            </span>
          </h2>
          <p className="text-xl text-green-600 mb-12 max-w-2xl mx-auto font-['Poppins']">
            Join millions of managers who've already discovered the future of
            fantasy football. Available on all your favorite platforms with
            seamless sync across devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="w-44 h-14 hover:shadow-2xl transition-shadow duration-300">
                <AppStoreBadge isDark />
              </div>
            </div>
            <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="w-44 h-14 hover:shadow-2xl transition-shadow duration-300">
                <GooglePlayBadge isDark />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Star,
                value: "4.9",
                label: "App Store Rating",
                subtext: "Based on 1700+ reviews",
              },
              {
                icon: Users,
                value: "2000+",
                label: "Active Downloads",
                subtext: "Growing approximately by 500 daily",
              },
              {
                icon: Clock,
                value: "350MB",
                label: "App Size",
                subtext: "fast download",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-green-100/70 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-md"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-green-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-green-500">{stat.subtext}</div>
              </div>
            ))}
          </div>

          <div className="bg-green-100/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-md">
            <h3 className="text-xl font-bold text-green-900 mb-4 font-['Space_Grotesk']">
              What's New in Version 3.0
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "🚀 AI-powered player recommendations",
                "📊 Advanced analytics dashboard",
                "⚡ Real-time price change alerts",
                "🏆 Enhanced league management",
                "📱 Improved mobile experience",
                "🔔 Smart notification system",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-green-700"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 py-20 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-green-400/30">
              <Mail className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-700">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 font-['Space_Grotesk']">
              Need{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Help?
              </span>
            </h2>
            <p className="text-xl text-green-600 font-['Poppins']">
              Our expert support team is here 24/7 to help you dominate your
              fantasy leagues. Whether you need tactical advice or technical
              support, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 font-['Space_Grotesk']">
                    Email Support
                  </h3>
                  <p className="text-green-600">support@tactixapp.com</p>
                  <p className="text-sm text-green-500">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 font-['Space_Grotesk']">
                    Phone Support
                  </h3>
                  <p className="text-green-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-green-500">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 font-['Space_Grotesk']">
                    Headquarters
                  </h3>
                  <p className="text-green-600">Washington</p>
                  <p className="text-sm text-green-500">Spokane Valley</p>
                </div>
              </div>

              <div className="bg-green-100/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-md">
                <h4 className="font-semibold text-green-900 mb-3 font-['Space_Grotesk']">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://t.me/TactixApp"
                    className="block text-green-600 hover:text-green-700 transition-colors"
                  >
                    ✈️ Telegram
                  </a>
                  <a
                    href="https://t.me/TactixApp"
                    className="block text-green-600 hover:text-green-700 transition-colors"
                  >
                    🐥 Twitter
                  </a>
                  <a
                    href="https://t.me/TactixApp"
                    className="block text-green-600 hover:text-green-700 transition-colors"
                  >
                    📸 Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-100/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-green-100/70 border-green-300/50 text-green-900 placeholder-green-500 border rounded-xl focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-green-100/70 border-green-300/50 text-green-900 placeholder-green-500 border rounded-xl focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-green-100/70 border-green-300/50 text-green-900 border rounded-xl focus:outline-none focus:border-green-500 transition-colors duration-300">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Account Issues</option>
                    <option>Feature Request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help you dominate your fantasy league..."
                    className="w-full px-4 py-3 bg-white/70 border-gray-300/50 text-gray-900 placeholder-gray-500 border rounded-xl focus:outline-none focus:border-green-500 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 py-3 rounded-xl text-white font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-200/50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-['Space_Grotesk']">
                  Tactix™
                </span>
              </div>
              <p className="text-gray-600 mb-2 max-w-md font-['Poppins']">
                The most advanced fantasy Premier League platform, trusted by
                millions of managers worldwide. Elevate your game with
                AI-powered insights and professional-grade tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 font-['Space_Grotesk']">
                Product
              </h4>
              <div className="space-y-2">
                <a
                  href="#features"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-to-play"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  How to Play
                </a>
                <a
                  href="#download"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
              <p>
                &copy; 2025/26 Tactix™ Fantasy Football. All rights reserved.
              </p>
              <p className="mt-1">
                Revolutionizing fantasy football, one gameweek at a time.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegalModal}
        type={legalModal.type!}
      />
    </div>
  );
}

export default App;
