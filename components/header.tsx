'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If we're on the homepage, just scroll to the section
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to homepage with the section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <video 
                className="h-8 w-auto" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="https://solendr.co.ke/solendr-new-design-logo.mp4" type="video/mp4" />
              </video>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigateToSection('services')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => navigateToSection('about')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => navigateToSection('team')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => navigateToSection('contact')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => navigateToSection('services')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Services
              </button>
              <button
                onClick={() => navigateToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => navigateToSection('team')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Team
              </button>
              <button
                onClick={() => navigateToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}