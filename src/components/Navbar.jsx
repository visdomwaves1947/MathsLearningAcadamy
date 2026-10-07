import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ChevronDown,
  Sun,
  Moon,
  User,
  Menu,
  X,
  Sparkles,
  BookOpen,
  BrainCircuit,
  Calculator,
  GraduationCap,
  CheckCircle,
  PhoneCall,
  LogOut,
  Layers,
  Award,
} from "lucide-react";
import { VisdomBrand } from "./VisdomBrand";

export default function Navbar({
  onOpenBooking,
  onOpenPortal,
  onOpenSignIn,
  onOpenSignUp,
  currentUser = null,
  theme = "light",
  toggleTheme,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const dropdownTimeoutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkNavigation = (e, href) => {
    e.preventDefault();
    if (!href || href === "#") {
      if (location.pathname.toLowerCase().includes("demo")) {
        navigate("/maths");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("#")) {
      if (location.pathname.toLowerCase().includes("demo")) {
        navigate(`/maths${href}`);
      } else {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const el =
        document.getElementById("courses") ||
        document.getElementById("interactive-lab");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const handleDropdownEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navLinks = [
    { name: "Mathematics", href: "/maths" },
    { name: "Physics", href: "/physics" },
    { name: "English", href: "/english" },
    { name: "Demo", href: "/demo" },
  ];

  const isLinkActive = (href) => {
    const p = location.pathname.toLowerCase();
    if (href.includes("demo")) return p.includes("demo");
    if (href.includes("physics")) return p.includes("phy");
    if (href.includes("english")) return p.includes("eng");
    if (href.includes("maths")) return p.includes("maths") || p === "/";
    return false;
  };

  const handleSignInClick = onOpenSignIn || onOpenPortal;
  const handleSignUpClick = onOpenSignUp || onOpenPortal;

  return (
    <>
      {/* Top Admissions & Announcement Bar */}
      <aside
        aria-label="Announcement"
        className="bg-[#bae6fd] dark:bg-[#023e50] text-slate-950 dark:text-cyan-50 text-xs py-2 px-3 sm:px-6 lg:px-8 font-semibold relative z-50 border-b border-black/15 dark:border-cyan-900/50"
      >
        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-left">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-700 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-[10px] animate-pulse shrink-0 shadow-xs">
              ★
            </span>
            <span className="text-[11px] sm:text-xs leading-tight font-medium text-slate-950 dark:text-cyan-100">
              <strong className="text-slate-950 dark:text-white font-bold">
                2026 Admissions Open:
              </strong>{" "}
              <span className="text-cyan-950 dark:text-cyan-200 font-bold">
                Intermediate (1st & 2nd Year) & Olympiad Batches
              </span>{" "}
              enrolling now!
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-slate-950 dark:text-cyan-100 shrink-0 font-bold">
            <a
              href="tel:+917997755155"
              className="hover:text-cyan-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall
                size={12}
                className="text-cyan-900 dark:text-cyan-300"
              />{" "}
              +91 79977 55155
            </a>
            <span className="text-slate-500 dark:text-cyan-800">|</span>
            <button
              onClick={handleSignUpClick}
              className="text-cyan-950 dark:text-cyan-300 hover:underline font-extrabold cursor-pointer transition-colors"
            >
              Sign Up Online →
            </button>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-black/20 dark:border-cyan-900/40 bg-[#bae6fd] dark:bg-[#023e50] ${
          isScrolled
            ? "py-2.5 shadow-md backdrop-blur-md"
            : "py-3 sm:py-3.5 shadow-xs"
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Visdom Waves Brand Logo */}
          <div className="flex items-center shrink-0">
            <VisdomBrand
              onClick={() => {
                navigate("/maths");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>

          {/* Right: Navigation, Search, Controls & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 ml-auto">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleDropdownEnter(idx)}
                  onMouseLeave={() => link.dropdown && handleDropdownLeave()}
                >
                  {link.dropdown ? (
                    <button
                      className="flex items-center gap-1 px-3.5 py-2 text-[14px] font-bold text-slate-950 dark:text-white hover:text-cyan-900 dark:hover:text-cyan-300 transition-colors tracking-tight rounded-lg hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === idx ? null : idx)
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 text-slate-950 dark:text-cyan-300 ${activeDropdown === idx ? "rotate-180 text-cyan-900 dark:text-cyan-300" : ""}`}
                      />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkNavigation(e, link.href)}
                      className={`block px-3.5 py-2 text-[14px] transition-colors tracking-tight rounded-lg cursor-pointer ${
                        isLinkActive(link.href)
                          ? "text-slate-950 dark:text-cyan-100 font-extrabold bg-white/80 dark:bg-white/20 shadow-xs"
                          : "text-slate-950 dark:text-white font-bold hover:text-cyan-900 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/10"
                      }`}
                    >
                      {link.name}
                    </a>
                  )}

                  {/* Desktop Dropdown Popover */}
                  {link.dropdown && activeDropdown === idx && (
                    <div
                      className="absolute top-full left-0 mt-1.5 w-72 rounded-2xl bg-white dark:bg-slate-950 border-2 border-black/80 dark:border-cyan-800 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onMouseEnter={() => handleDropdownEnter(idx)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[10px] font-extrabold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider">
                        {link.name} Catalog
                      </div>
                      {link.dropdown.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={(e) => {
                            setActiveDropdown(null);
                            handleLinkNavigation(e, sub.href);
                          }}
                          className="block px-4 py-2.5 hover:bg-cyan-50 dark:hover:bg-slate-900 text-slate-950 dark:text-white transition-colors group cursor-pointer"
                        >
                          <div className="text-xs font-bold group-hover:text-cyan-800 dark:group-hover:text-cyan-300">
                            {sub.name}
                          </div>
                          {sub.desc && (
                            <div className="text-[10px] text-slate-600 dark:text-slate-400 mt-0.5 truncate">
                              {sub.desc}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Box (Desktop / Tablet) */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden xl:flex items-center relative max-w-[190px] w-full"
            >
              <input
                type="text"
                placeholder="Search calculus, algebra..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-white dark:bg-slate-950 border border-slate-400 dark:border-cyan-700 rounded-full py-2 pl-3.5 pr-8 text-slate-950 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 shadow-xs transition-all font-semibold"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-2.5 text-slate-800 hover:text-cyan-900 dark:text-slate-300 dark:hover:text-cyan-400 cursor-pointer"
              >
                <Search size={14} />
              </button>
            </form>

            {/* Right Controls & Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Dark / Light Mode Toggle Pill Switch */}
              <button
                type="button"
                onClick={toggleTheme}
                className="relative flex items-center w-[52px] xs:w-[58px] h-[28px] xs:h-[30px] rounded-full bg-slate-900 dark:bg-slate-700 transition-colors duration-300 focus:outline-none shadow-inner ring-1 ring-slate-900/15 dark:ring-white/20 cursor-pointer shrink-0"
                aria-label="Toggle dark mode"
                title={
                  theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {/* Sliding White Knob */}
                <div
                  className={`absolute top-[2.5px] w-[23px] xs:w-[25px] h-[23px] xs:h-[25px] bg-white rounded-full shadow-md transition-transform duration-300 ease-out z-0 ${
                    theme === "dark"
                      ? "translate-x-[25px] xs:translate-x-[29px]"
                      : "translate-x-[2.5px]"
                  }`}
                />
                <div className="relative flex justify-between items-center w-full px-[6px] xs:px-[7px] z-10 pointer-events-none">
                  <Sun
                    className={`w-3.5 h-3.5 transition-colors duration-300 ${theme === "dark" ? "text-slate-400" : "text-amber-500 font-bold"}`}
                  />
                  <Moon
                    className={`w-3.5 h-3.5 transition-colors duration-300 ${theme === "dark" ? "text-indigo-600 font-bold" : "text-slate-400"}`}
                  />
                </div>
              </button>

              {/* User Account / Unified Auth Action */}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-600 to-sky-500 text-white text-xs font-extrabold shadow-sm hover:scale-105 transition-all focus:outline-none cursor-pointer border border-white dark:border-slate-800"
                    title={currentUser.name || "User Profile"}
                  >
                    {currentUser.name
                      ? currentUser.name.slice(0, 2).toUpperCase()
                      : "ST"}
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2.5 w-60 rounded-2xl bg-white dark:bg-slate-950 border-2 border-black/80 dark:border-cyan-800 shadow-2xl py-3 z-50 text-slate-950 dark:text-white animate-in fade-in duration-150">
                      <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-sm font-bold text-slate-950 dark:text-white truncate">
                          {currentUser.name}
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                          {currentUser.email}
                        </p>
                        <span className="inline-block mt-1 text-[9px] font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/50 px-2 py-0.5 rounded uppercase">
                          {currentUser.role || "Math Scholar"}
                        </span>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            handleSignInClick();
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-bold hover:bg-cyan-50 dark:hover:bg-slate-900 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                        >
                          My Student Portal
                        </button>
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            onOpenBooking();
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-bold hover:bg-cyan-50 dark:hover:bg-slate-900 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                        >
                          Book 1-on-1 Mentorship
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Unified Single Sign In / Sign Up Button */
                <button
                  onClick={handleSignInClick}
                  className="text-xs font-bold text-slate-950 dark:text-white bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-400 dark:border-cyan-600/80 px-3.5 sm:px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer active:scale-95 flex items-center gap-1.5 shrink-0"
                >
                  <User size={13} className="text-cyan-900 dark:text-cyan-300" />
                  <span>Sign In / Sign Up</span>
                </button>
              )}

              {/* Book Free Class CTA Button - Professional & Clean (No Star Icon) */}
              <button
                onClick={onOpenBooking}
                className="hidden md:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all cursor-pointer active:scale-95 border border-cyan-800 dark:border-cyan-400 shrink-0"
              >
                <span>Book Free Class</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg text-slate-950 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[auto] z-40 bg-[#bae6fd] dark:bg-[#023e50] border-b border-black/20 dark:border-cyan-900/30 shadow-2xl overflow-y-auto max-h-[calc(100vh-100px)] py-4 px-4 animate-in slide-in-from-top duration-200">
          {/* Mobile Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center mb-4"
          >
            <input
              type="text"
              placeholder="Search curriculum, labs, lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white dark:bg-slate-950 border border-slate-400 dark:border-cyan-800 rounded-xl py-2.5 pl-3.5 pr-9 text-slate-950 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 shadow-sm font-semibold"
            />
            <button
              type="submit"
              className="absolute right-3 text-slate-800 dark:text-slate-300 hover:text-cyan-800"
            >
              <Search size={16} />
            </button>
          </form>

          {/* Mobile Navigation List */}
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="border-b border-black/10 dark:border-cyan-900/20 last:border-b-0 pb-1"
              >
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(idx)}
                      className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-bold text-slate-950 dark:text-white hover:text-cyan-900 dark:hover:text-cyan-300 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileDropdowns[idx] ? "rotate-180 text-cyan-900" : ""}`}
                      />
                    </button>
                    {mobileDropdowns[idx] && (
                      <div className="pl-4 pr-2 pb-2 space-y-2 bg-white/50 dark:bg-black/30 rounded-xl p-2.5 my-1">
                        {link.dropdown.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.href}
                            onClick={(e) => {
                              setMobileMenuOpen(false);
                              handleLinkNavigation(e, sub.href);
                            }}
                            className="block py-1.5 px-2 text-xs font-bold text-slate-950 dark:text-cyan-100 hover:text-cyan-800 dark:hover:text-cyan-300 cursor-pointer"
                          >
                            • {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkNavigation(e, link.href);
                    }}
                    className={`block py-2.5 px-2 text-sm font-bold transition-colors cursor-pointer ${
                      isLinkActive(link.href)
                        ? "text-cyan-950 dark:text-cyan-200 font-extrabold"
                        : "text-slate-950 dark:text-white hover:text-cyan-900 dark:hover:text-cyan-300"
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-5 pt-4 border-t border-black/15 dark:border-cyan-900/30 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center shadow-xs transition-colors"
            >
              <span>Book Free Diagnostic Class</span>
            </button>

            {!currentUser ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignInClick();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-400 dark:border-slate-700 text-slate-950 dark:text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-xs"
              >
                <User size={14} className="text-cyan-800 dark:text-cyan-400" />
                <span>Sign In / Sign Up</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignInClick();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white font-bold text-xs transition-colors"
              >
                Open Student Portal ({currentUser.name})
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
