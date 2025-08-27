import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes"; // ✅ dark/light theme hook

interface NavigationProps {
  isNewUI: boolean;
  setIsNewUI: (value: boolean) => void;
}

const Navigation = ({ isNewUI, setIsNewUI }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme(); // ✅ theme state

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
        isNewUI
          ? "bg-white/20 backdrop-blur-md shadow-lg border-white/30"
          : "bg-background/80 backdrop-blur-md border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className={`text-2xl font-bold ${
                isNewUI
                  ? "text-white drop-shadow-lg"
                  : "bg-gradient-text bg-clip-text text-transparent"
              }`}
            >
              Vundela Bhavitha
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isNewUI
                      ? "text-white hover:text-yellow-300"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* UI Toggle Button */}
            <Button
              variant="outline-hero"
              size="sm"
              onClick={() => setIsNewUI(!isNewUI)}
              className={`transition-all duration-300 ${
                isNewUI
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "animate-none"
              }`}
            >
              {isNewUI ? "Back to Classic UI" : "Click to see New UI"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-500 ${
            isNewUI
              ? "bg-white/10 border-white/30"
              : "bg-background border-border"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isNewUI
                  ? "text-white hover:text-yellow-300"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="px-3 py-2 flex gap-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="flex-1"
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile UI Toggle */}
            <Button
              variant="outline-hero"
              size="sm"
              className="flex-1"
              onClick={() => {
                setIsNewUI(!isNewUI);
                setIsMenuOpen(false);
              }}
            >
              {isNewUI ? "Classic UI" : "New UI"}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
