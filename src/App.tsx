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

const APP_STORE_URL = "https://apps.apple.com/us/app/tactix-fantasy/id6751880351";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.jointactix.fantasy";

type BrandPath = {
  d: string;
  fillRule?: "inherit" | "nonzero" | "evenodd";
  clipRule?: "inherit" | "nonzero" | "evenodd";
  fill?: string;
};

const BrandIcon = ({
  viewBox = "0 0 24 24",
  paths,
}: {
  viewBox?: string;
  paths: BrandPath[];
}) => (
  <svg
    viewBox={viewBox}
    className="w-5 h-5 text-white"
    aria-hidden="true"
    role="img"
  >
    {paths.map((path, idx) => (
      <path
        key={idx}
        d={path.d}
        fill={path.fill ?? "currentColor"}
        fillRule={path.fillRule}
        clipRule={path.clipRule}
      />
    ))}
  </svg>
);

const facebookIcon = [
  {
    d: "M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.762v2.313h3.587l-.467 3.622h-3.12V24h6.115C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z",
  },
];

const instagramIcon = [
  {
    d: "M7.5 1C4.462 1 2 3.462 2 6.5v11C2 20.538 4.462 23 7.5 23h9c3.038 0 5.5-2.462 5.5-5.5v-11C22 3.462 19.538 1 16.5 1h-9zM7.5 0h9C21.985 0 24 2.015 24 6.5v11C24 21.985 21.985 24 16.5 24h-9C2.015 24 0 21.985 0 17.5v-11C0 2.015 2.015 0 7.5 0z",
  },
  {
    d: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm6.75-1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z",
  },
];

const youtubeIcon = [
  {
    d: "M23.498 6.186a2.974 2.974 0 0 0-2.09-2.105C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.408.581a2.974 2.974 0 0 0-2.09 2.105C0 7.919 0 12 0 12s0 4.081.502 5.814a2.974 2.974 0 0 0 2.09 2.105C4.309 20.5 12 20.5 12 20.5s7.691 0 9.408-.581a2.974 2.974 0 0 0 2.09-2.105C24 16.081 24 12 24 12s0-4.081-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const xIcon = [
  {
    d: "M19.772 0h3.553l-7.756 8.858 9.102 13.142h-7.132l-5.598-7.315-6.406 7.315H0l8.242-9.406L0 .626h7.277l5.01 6.567L19.772 0z",
  },
];

const telegramIcon = [
  {
    d: "M23.954 3.914a1.2 1.2 0 0 0-1.743-.862L1.588 12.09a1.2 1.2 0 0 0 .095 2.2l5.55 1.749 2.128 6.365a1.2 1.2 0 0 0 2.128.254l3.033-4.733 5.486 4.152a1.2 1.2 0 0 0 1.892-.67l3.096-16.58a1.2 1.2 0 0 0-.642-1.913z",
  },
];

const tiktokIcon = [
  {
    d: "M12.868 0h3.532a6.126 6.126 0 0 0 6.126 5.447v3.526a9.647 9.647 0 0 1-5.447-1.673V17.27a6.681 6.681 0 1 1-6.681-6.682h.353v3.61a3.07 3.07 0 1 0 2.215 2.943V0z",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    handle: "@TactixApp",
    href: "https://www.facebook.com/share/16uh3yQDxK/?mibextid=wwXIfr",
    icon: <BrandIcon paths={facebookIcon} />,
    bg: "from-blue-500 to-blue-600",
  },
  {
    name: "Instagram",
    handle: "@tactix.app",
    href: "https://www.instagram.com/tactix.app?igsh=b3F3NWV5OXVuenR1&utm_source=ig_contact_invite",
    icon: <BrandIcon paths={instagramIcon} />,
    bg: "from-pink-500 to-purple-500",
  },
  {
    name: "X (Twitter)",
    handle: "@jointactixapp",
    href: "https://x.com/jointactixapp",
    icon: <BrandIcon paths={xIcon} />,
    bg: "from-slate-900 to-gray-800",
  },
  {
    name: "YouTube",
    handle: "@TactixApp",
    href: "https://www.youtube.com/@TactixApp",
    icon: <BrandIcon paths={youtubeIcon} />,
    bg: "from-red-500 to-red-600",
  },
  {
    name: "Telegram Group",
    handle: "@JoinTactix",
    href: "https://t.me/JoinTactix",
    icon: <BrandIcon paths={telegramIcon} />,
    bg: "from-sky-500 to-sky-600",
  },
  {
    name: "Telegram Channel",
    handle: "@TactixApp",
    href: "https://t.me/TactixApp",
    icon: <BrandIcon paths={telegramIcon} />,
    bg: "from-sky-500 to-sky-600",
  },
  {
    name: "TikTok",
    handle: "@tactix.app",
    href: "https://www.tiktok.com/@tactix.app",
    icon: <BrandIcon paths={tiktokIcon} />,
    bg: "from-gray-900 via-pink-500 to-cyan-400",
  },
];

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
            Experience fantasy Premier League like never before. Build your dream team, 
            compete with friends, and climb the leaderboards with unlimited transfers, 
            real-time updates, and a beautiful, user-friendly interface designed for the modern manager.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start mb-8 sm:mb-12">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-36 sm:w-44 h-12 sm:h-14 hover:shadow-2xl transition-shadow duration-300">
                <AppStoreBadge />
              </div>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-36 sm:w-44 h-12 sm:h-14 hover:shadow-2xl transition-shadow duration-300">
                <GooglePlayBadge />
              </div>
            </a>
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
              We've reimagined fantasy football from the ground up, focusing on 
              simplicity, beautiful design, and unlimited flexibility. Create your 
              perfect team and compete with friends in the most user-friendly fantasy 
              football experience available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Unlimited Transfers",
                description:
                  "Unlike other fantasy football platforms, Tactix offers unlimited transfers between game weeks. Build, rebuild, and optimize your team as much as you want—strategize freely without restrictions.",
                color: "from-emerald-400 to-lime-400",
                stats: "No transfer limits",
              },
              {
                icon: Users,
                title: "Real-Time Updates",
                description:
                  "Track your points and rankings as real matches unfold. Watch your team's performance update in real-time with live point calculations and instant leaderboard updates.",
                color: "from-emerald-400 to-lime-400",
                stats: "Live match updates",
              },
              {
                icon: Users,
                title: "Social Leagues",
                description:
                  "Create private leagues with friends, join public competitions, and compete on global leaderboards. Your single team competes across all leagues you're part of.",
                color: "from-emerald-400 to-lime-400",
                stats: "Compete globally",
              },
              {
                icon: Zap,
                title: "Beautiful UI/UX",
                description:
                  "Experience a thoughtfully designed interface that's both beautiful and intuitive. Every screen is crafted to enhance your gaming experience with smooth animations and seamless navigation.",
                color: "from-emerald-400 to-lime-400",
                stats: "User-friendly design",
              },
              {
                icon: Users,
                title: "Secure & Reliable",
                description:
                  "Your data is protected with industry-standard security measures. Play with confidence knowing your information is safe and your progress is always saved.",
                color: "from-emerald-400 to-lime-400",
                stats: "Secure platform",
              },
              {
                icon: Trophy,
                title: "Strategic Gameplay",
                description:
                  "Make smart transfers, set your lineup, and choose your captain and vice-captain wisely. Every decision counts as you compete week by week to climb the rankings.",
                color: "from-emerald-400 to-lime-400",
                stats: "Strategic depth",
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
              Get started with Tactix in three simple steps. Build your team, 
              manage your squad, and compete with friends. It's that easy to 
              begin your fantasy football journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Users,
                title: "Build Your Dream Squad",
                description:
                  "Start with 100 Tactix Coins to select your squad of 15 players: 2 Goalkeepers, 5 Defenders, 5 Midfielders, and 3 Forwards. A maximum of 3 players can be selected from the same team. Choose wisely to maximize your points potential.",
                color: "from-emerald-400 to-lime-400",
                tips: [
                  "Balance your budget across positions",
                  "Select a strong captain and vice-captain",
                  "Consider fixture difficulty when choosing players",
                ],
              },
              {
                icon: Target,
                title: "Master Every Matchday",
                description:
                  "Make smart transfers between game weeks with unlimited flexibility. Set your lineup, choose your captain and vice-captain, and react to real-time match updates. Every decision counts as you compete week by week.",
                color: "from-emerald-400 to-lime-400",
                tips: [
                  "Use unlimited transfers to optimize your team",
                  "Monitor player form and fixtures",
                  "Set your lineup before each game week deadline",
                ],
              },
              {
                icon: Trophy,
                title: "Compete & Climb the Ranks",
                description:
                  "Join leagues with friends, compete in global leaderboards, and prove your tactical skills. Track your progress across all your leagues and see how you rank against players worldwide.",
                color: "from-emerald-400 to-lime-400",
                tips: [
                  "Create private leagues with friends",
                  "Compete on global leaderboards",
                  "Stay consistent with your strategy",
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
              Video Tutorials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-['Space_Grotesk'] bg-black bg-clip-text text-transparent">
              Watch &{" "}
              <span className="bg-black bg-clip-text text-transparent">
                Learn
              </span>
            </h2>
            <p className="mt-2 max-w-xl mx-auto text-black">
              Quick guides to help you master Tactix faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "How to Get Started",
                description:
                  "From creating your team to joining leagues, this guide shows you how to hit the ground running.",
                videoId: "kEByZPW_Vs0",
                url: "https://youtu.be/kEByZPW_Vs0",
              },
              {
                title: "How to Play Tactix",
                description:
                  "Walk through every gameplay mechanic and see how points, transfers, and captain choices work.",
                videoId: "K-1UQtNS1c4",
                url: "https://youtu.be/K-1UQtNS1c4",
              },
            ].map((video) => (
              <div
                key={video.videoId}
                className="p-6 rounded-2xl shadow-md bg-white border border-emerald-100 flex flex-col"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-black/5">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-xl font-semibold font-['Space_Grotesk'] text-black mb-2">
                  {video.title}
                </h4>
                <p className="text-gray-700 flex-1">{video.description}</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 text-white font-semibold hover:from-emerald-500 hover:to-lime-500 transition-colors"
                >
                  Watch on YouTube
                </a>
              </div>
            ))}
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
            Join the Tactix community and experience fantasy football like never before. 
            Available on iOS and Android with seamless sync across all your devices. 
            Free to play, unlimited transfers, and designed for the modern manager.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-44 h-14 hover:shadow-2xl transition-shadow duration-300">
                <AppStoreBadge />
              </div>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-44 h-14 hover:shadow-2xl transition-shadow duration-300">
                <GooglePlayBadge />
              </div>
            </a>
          </div>

          <div className="bg-white/70 border-emerald-400/50 backdrop-blur-sm rounded-2xl p-8 border">
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-black mb-4">
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "⚽ Build your dream team of 15 players",
                "💰 100 Tactix Coins starting budget",
                "🔄 Unlimited transfers between game weeks",
                "👑 Captain and vice-captain selection",
                "📊 Real-time points and rankings",
                "🏆 Compete in leagues and global leaderboards",
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
              Our support team is here to help you get the most out of Tactix. 
              Whether you need help with your account, have questions about gameplay, 
              or want to share feedback, we're here to assist you.
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
                    We'll get back to you soon
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
                  <p className="text-sm text-gray-600">Mon-Fri, 9am-5pm PST</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={`${link.name}-${link.handle}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors text-sm"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${link.bg} flex items-center justify-center`}
                      >
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm">
                          {link.name}
                        </p>
                        <p className="text-xs text-gray-600">{link.handle}</p>
                      </div>
                    </a>
                  ))}
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
                    rows={8}
                    placeholder="Tell us how we can help you dominate your fantasy league..."
                    className="w-full px-4 py-3 bg-white/70 border-emerald-400/50 text-gray-900 placeholder-gray-500 focus:border-emerald-400 border rounded-xl focus:outline-none transition-colors duration-300 resize-none min-h-[220px]"
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
                The most user-friendly fantasy Premier League platform. Build your 
                dream team, compete with friends, and climb the leaderboards with 
                unlimited transfers and real-time updates. Free to play, beautifully 
                designed, and built for the modern manager.
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
                <a
                  href="/termsofuse"
                  className="block bg-gradient-to-br from-emerald-400 to-lime-400 bg-clip-text text-transparent hover:text-emerald-400 transition-colors"
                >
                  Terms of Use
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
