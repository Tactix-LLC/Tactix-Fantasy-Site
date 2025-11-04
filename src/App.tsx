import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Trophy,
  Users,
  Target,
  Menu,
  X,
  Zap,
  Gamepad2,
} from "lucide-react";
import { API_BASE_URL } from "./config";

const AppStoreBadge = () => (
  <svg width="135" height="40" viewBox="0 0 135 40" className="w-full h-auto">
    <defs>
      <linearGradient id="appStoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#064e3b" /> {/* emerald-900 */}
        <stop offset="100%" stopColor="#15803d" /> {/* emerald-700 */}
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

const GooglePlayBadge = () => (
  <svg width="135" height="40" viewBox="0 0 135 40" className="w-full h-auto">
    <defs>
      <linearGradient
        id="playStoreGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#064e3b" /> {/* emerald-900 */}
        <stop offset="100%" stopColor="#15803d" /> {/* emerald-700 */}
      </linearGradient>
    </defs>
    <rect width="135" height="40" rx="8" fill="url(#playStoreGradient)" />
    <path
      d="M8.842 7.158c-.184.063-.321.202-.321.467v24.75c0 .265.137.404.321.467l.063.047 13.859-13.858v-.329L8.905 7.11l-.063.048z"
      fill="#EA4335"
    />
    <path
      d="M27.379 22.667l-4.615-4.615v-.104l4.615-4.615.105.062 5.468 3.106c1.563.889 1.563 2.335 0 3.224l-5.468 3.106-.105-.164z"
      fill="#FBBC05"
    />
    <path
      d="M27.484 22.503L22.764 17.948 8.842 32.842c.512.544 1.351.606 2.294.062l16.348-9.401z"
      fill="#34A853"
    />
    <path
      d="M27.484 17.393L11.136 7.992c-.943-.544-1.782-.482-2.294.062l13.922 14.894 4.72-5.555z"
      fill="#1A73E8"
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

const FootballField = () => {
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
        {/* Field outline */}
        <rect
          x="100"
          y="100"
          width="1000"
          height="600"
          fill="none"
          stroke="#15803d" // emerald-700
          strokeWidth="2"
        />

        {/* Center line */}
        <line
          x1="600"
          y1="100"
          x2="600"
          y2="700"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />

        {/* Center circle */}
        <circle
          cx="600"
          cy="400"
          r="80"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />

        {/* Penalty areas */}
        <rect
          x="100"
          y="250"
          width="150"
          height="300"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />
        <rect
          x="950"
          y="250"
          width="150"
          height="300"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />

        {/* Goal areas */}
        <rect
          x="100"
          y="325"
          width="60"
          height="150"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />
        <rect
          x="1040"
          y="325"
          width="60"
          height="150"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />

        {/* Corner arcs */}
        <path
          d="M 100 100 Q 120 100 120 120"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />
        <path
          d="M 1100 100 Q 1100 120 1080 120"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />
        <path
          d="M 100 700 Q 120 700 120 680"
          fill="none"
          stroke="#34d399" // emerald-400
          strokeWidth="2"
        />
        <path
          d="M 1100 700 Q 1100 680 1080 680"
          fill="none"
          stroke="#34d399" // emerald-400
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
                  stopColor="#34d399" // emerald-400
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="#34d399" // emerald-400
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor="#a3e635" // lime-400
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

const HeroSection = ({ scrollY }: { scrollY: number }) => {
  const images = ["/tactic.png", "/screen2.png", "/screen3.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-r from-emerald-400 to-lime-400">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border bg-black border-black/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white">
              The Future of Fantasy Football
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-['Space_Grotesk'] bg-black bg-clip-text text-transparent">
            <span className="bg-black bg-clip-text text-transparent">
              Dominate Every
            </span>
            <br />
            <span className="bg-black bg-clip-text text-transparent">
              Gameweek
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-['Poppins'] text-black">
            Experience the most advanced fantasy Premier League platform ever
            created. Powered by AI-driven insights, real-time analytics, and
            professional-grade tactical tools that give you the edge over
            millions of managers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start mb-8 sm:mb-12">
            <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="w-36 sm:w-44 h-12 sm:h-14 hover:shadow-2xl transition-shadow duration-300">
                <AppStoreBadge />
              </div>
            </div>
            <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="w-36 sm:w-44 h-12 sm:h-14 hover:shadow-2xl transition-shadow duration-300">
                <GooglePlayBadge />
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockups */}
        <div className="relative flex justify-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-4 md:space-x-8 max-w-full">
            {/* iPhone Frame - Sliding Images */}
            <div
              className="relative transform hover:scale-105 transition-all duration-500 w-[70vw] sm:w-48 md:w-56 lg:w-64 max-w-[280px]"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <div className="h-[420px] sm:h-[480px] md:h-[520px] bg-black rounded-[2.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-lime-400 rounded-[2rem] relative overflow-hidden">
                  <div
                    className="w-full h-full transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateY(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {images.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`App Screenshot ${index + 1}`}
                        style={{ objectFit: "cover" }}
                        className="w-full h-full rounded-[2rem]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });

        setFormStatus({
          type: "success",
          message:
            data.message ||
            "Message sent successfully! Check your email for confirmation.",
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setFormStatus({
        type: "error",
        message:
          "Unable to send message. Please email us directly at support@jointactix.app",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-lime-400 overflow-x-hidden">
      {/* Football Field Background */}
      <FootballField />

      {/* Dynamic Background Light Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(6, 78, 59, 0.08) 0%, rgba(6, 78, 59, 0.04) 25%, transparent 50%)`,
        }}
      />

      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between sm:justify-around px-6 py-6 backdrop-blur-md bg-gradient-to-r from-emerald-400 to-lime-40">
        <div className="flex items-center space-x-3">
          <img
            src="/Tactix_logo_black.svg"
            alt="Tactix Logo"
            className="h-14 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-black hover:text-gray-900 transition-colors duration-300 font-medium"
          >
            Features
          </a>
          <a
            href="#how-to-play"
            className="text-black hover:text-gray-900 transition-colors duration-300 font-medium"
          >
            How to Play
          </a>
          <a
            href="#download"
            className="text-black hover:text-gray-900 transition-colors duration-300 font-medium"
          >
            Download
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-900 transition-colors duration-300 font-medium"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-black hover:bg-gray-800 transition-colors"
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
  <div
    className="md:hidden fixed inset-0 top-20 z-40 bg-transparent backdrop-blur-xl  border-emerald-400/50 p-6"
  >
    <div className="flex flex-col text-center space-y-6">
      {[
        { href: "#features",   label: "Features" },
        { href: "#how-to-play",label: "How to Play" },
        { href: "#download",   label: "Download" },
        { href: "#contact",    label: "Contact" },
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setIsMenuOpen(false)}   
          className="
            relative block py-2 text-lg font-bold text-black/80
            overflow-hidden hover:text-black
            transition-colors duration-200
          "
        >
          <span className="relative z-10">{item.label}</span>

          {/* Horizontal hover fill */}
          <span
            className="
              absolute inset-x-0 bottom-0 bg-emerald-400/40
              origin-left scale-x-0 transition-transform duration-300
              group-hover:scale-x-100
            "
          />
        </a>
      ))}
    </div>
  </div>
)}


      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* Features Section */}
      <section id="features" className="relative z-20 py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6 border bg-gradient-to-r from-emerald-400/20 to-lime-400/20 border-emerald-400/30 backdrop-blur-sm">
              <Gamepad2 className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">
                Game-Changing Features
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] bg-black bg-clip-text text-transparent mb-6">
              Why Tactix is <br />
              <span className="bg-black bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-['Poppins'] text-black">
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
                color: "from-emerald-400 to-lime-400",
                stats: "94% accuracy rate",
              },
              {
                icon: Users,
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
                color: "from-emerald-400 to-lime-400",
                stats: "2300+ active users",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Built with cutting-edge technology for instant loading, smooth animations, and real-time updates that keep you ahead of the game.",
                color: "from-emerald-400 to-lime-400",
                stats: "<0.5s load time",
              },
              {
                icon: Users,
                title: "Advanced Security",
                description:
                  "Your data is protected with bank-level encryption and security measures. Play with confidence knowing your information is safe.",
                color: "from-emerald-400 to-lime-400",
                stats: "256-bit encryption",
              },
              {
                icon: Trophy,
                title: "Expert Insights",
                description:
                  "Access exclusive content from Premier League analysts, former players, and fantasy football experts to gain the competitive edge.",
                color: "from-emerald-400 to-lime-400",
                stats: "50+ expert contributors",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/70 border-emerald-400/50 hover:border-lime-400/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-black mb-4">
                  {feature.title}
                </h3>
                <p className="leading-relaxed mb-4 font-['Poppins'] text-black">
                  {feature.description}
                </p>
                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-emerald-400"></div>
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
        className="relative z-20 py-20 px-6 bg-gradient-to-br from-emerald-400 to-lime-400"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6 border bg-gradient-to-r from-emerald-400/20 to-lime-400/20 border-emerald-400/30 backdrop-blur-sm">
              <Trophy className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">
                Master the Game
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] bg-black bg-clip-text text-transparent mb-6">
              How to play ?
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-['Poppins'] text-black">
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
                color: "from-emerald-400 to-lime-400",
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
                color: "from-emerald-400 to-lime-400",
                tips: [
                  "Join multiple league types",
                  "Study top managers' strategies",
                  "Stay patient with long-term planning",
                ],
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/80 border-emerald-400/50 hover:border-lime-400/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold bg-emerald-400/50 text-black">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-black mb-4">
                  {step.title}
                </h3>
                <p className="leading-relaxed mb-6 font-['Poppins'] text-gray-700">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                    Pro Tips:
                  </h4>
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r from-emerald-400 to-lime-400"></div>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>

          <div className="bg-white/60 border-emerald-400/50 backdrop-blur-sm rounded-2xl p-8 border">
            <div className="text-center mb-12">
              <span className="px-4 py-1 rounded-full border text-sm border-emerald-400 text-emerald-400">
                User Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 font-['Space_Grotesk'] bg-black bg-clip-text text-transparent">
                What{" "}
                <span className="bg-black bg-clip-text text-transparent">
                  Players
                </span>{" "}
                Say
              </h2>
              <p className="mt-2 max-w-xl mx-auto text-black">
                Hear from our top players
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
                <div key={index} className="p-6 rounded-xl shadow-md bg-white">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 text-emerald-400">
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
                  <p className="mb-4 italic text-gray-600">"{item.quote}"</p>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-gray-700">Player</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-center text-2xl lg:text-5xl font-bold mb-8 font-['Space_Grotesk'] bg-black bg-clip-text text-transparent">
              Our{" "}
              <span className="bg-black bg-clip-text text-transparent">
                Partners
              </span>
            </h3>

            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {["/v.jpg", "/v (3).jpg", "/v (2).jpg", "/v (1).jpg"].map(
                  (logo, i) => (
                    <div
                      key={`logo-${i}`}
                      className="flex-shrink-0 w-24 h-24 rounded-full border flex items-center justify-center shadow-md mx-6 bg-white border-emerald-400/50"
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
                      className="flex-shrink-0 w-24 h-24 rounded-full border flex items-center justify-center shadow-md mx-6 bg-white border-emerald-400/50"
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
      <section id="download" className="relative z-20 py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6 border bg-gradient-to-r from-emerald-400/20 to-lime-400/20 border-emerald-400/30 backdrop-blur-sm">
            <Gamepad2 className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">
              Available Now
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] bg-black bg-clip-text text-transparent mb-6">
            Download{" "}
            <span className="bg-black bg-clip-text text-transparent">
              Tactix™
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-['Poppins'] text-black">
            Join millions of managers who've already discovered the future of
            fantasy football. Available on all your favorite platforms with
            seamless sync across devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="w-44 h-14 hover:shadow-2xl transition-shadow duration-300">
                <AppStoreBadge />
              </div>
            </div>
            <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="w-44 h-14 hover:shadow-2xl transition-shadow duration-300">
                <GooglePlayBadge />
              </div>
            </div>
          </div>

          <div className="bg-white/70 border-emerald-400/50 backdrop-blur-sm rounded-2xl p-8 border">
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-black mb-4">
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
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-20 py-20 px-6 bg-gradient-to-br from-emerald-400 to-lime-400"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6 border bg-gradient-to-r from-emerald-400/20 to-lime-400/20 border-emerald-400/30 backdrop-blur-sm">
              <Mail className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] bg-black bg-clip-text text-transparent mb-6">
              Need{" "}
              <span className="bg-white bg-clip-text text-transparent">
                Help?
              </span>
            </h2>
            <p className="text-xl font-['Poppins'] text-black">
              Our expert support team is here 24/7 to help you dominate your
              fantasy leagues. Whether you need tactical advice or technical
              support, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-black">
                    Email Support
                  </h3>
                  <p className="text-white">support@jointactix.app</p>
                  <p className="text-sm text-gray-600">
                    Response within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-black">
                    Phone Support
                  </h3>
                  <p className="text-white">+1 509 608 8947</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-black">
                    Headquarters
                  </h3>
                  <p className="text-white">Washington</p>
                  <p className="text-sm text-gray-600">Spokane Valley</p>
                </div>
              </div>

              <div className="bg-white border-emerald-400/50 backdrop-blur-sm rounded-2xl p-6 border">
                <h4 className="font-semibold font-['Space_Grotesk'] text-black mb-3">
                  Follow Us
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://www.facebook.com/share/16uh3yQDxK/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-emerald-400 transition-colors"
                  >
                    📘 Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/tactix.app?igsh=b3F3NWV5OXVuenR1&utm_source=ig_contact_invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-emerald-400 transition-colors"
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="https://x.com/jointactixapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-emerald-400 transition-colors"
                  >
                    🐦 Twitter
                  </a>
                  <a
                    href="https://www.youtube.com/@TactixApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-emerald-400 transition-colors"
                  >
                    📺 YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border-emerald-400/50 backdrop-blur-sm rounded-2xl p-8 border">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/70 border-emerald-400/50 text-gray-900 placeholder-gray-500 focus:border-emerald-400 border rounded-xl focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/70 border-emerald-400/50 text-gray-900 placeholder-gray-500 focus:border-emerald-400 border rounded-xl focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/70 border-emerald-400/50 text-gray-900 focus:border-emerald-400 border rounded-xl focus:outline-none transition-colors duration-300"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Account Issues</option>
                    <option>Feature Request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us how we can help you dominate your fantasy league..."
                    className="w-full px-4 py-3 bg-white/70 border-emerald-400/50 text-gray-900 placeholder-gray-500 focus:border-emerald-400 border rounded-xl focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                {formStatus.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      formStatus.type === "success"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-500 hover:to-lime-500 py-3 rounded-xl text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-black/95  py-12 px-6">
        <div className="max-w-6xl mx-auto ">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent font-['Space_Grotesk']">
                  Tactix™
                </span>
              </div>
              <p className="mb-2 max-w-md font-['Poppins'] bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent ">
                The most advanced fantasy Premier League platform, trusted by
                millions of managers worldwide. Elevate your game with
                AI-powered insights and professional-grade tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold font-['Space_Grotesk'] bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-4">
                Product
              </h4>
              <div className="space-y-2">
                <a
                  href="#features"
                  className="block bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-to-play"
                  className="block bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent hover:text-emerald-400 transition-colors"
                >
                  How to Play
                </a>
                <a
                  href="#download"
                  className="block bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent hover:text-emerald-400 transition-colors"
                >
                  Download
                </a>
                <a
                  href="/privacypolicy"
                  className="block bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm flex justify-center items-center  text-center md:text-left mb-4 md:mb-0 bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent">
            <p className="px-3">
              &copy; {new Date().getFullYear()} Tactix™ Fantasy Football. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
