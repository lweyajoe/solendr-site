'use client';

import Link from 'next/link';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bell,
  MapPin,
  Clock,
  ChevronRight,
  Calendar,
  Smartphone
} from 'lucide-react';

export default function LoaneesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Financial Freedom at Your Fingertips
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access quick and flexible credit facilities right from your mobile phone. No paperwork, no hassle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://loans.solendr.co.ke">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Experience hassle-free borrowing with our innovative features</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Bell className="h-12 w-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Stay updated with automated SMS and email alerts for loan status and payments.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Nearest Lender</h3>
              <p className="text-gray-600">Connect with trusted lenders in your area for personalized loan solutions.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Flexible Repayment</h3>
              <p className="text-gray-600">Choose from daily, weekly, or monthly repayment schedules that suit your needs.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="How to Apply for a Loan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
              <p className="text-gray-600">
                Create your account now and access flexible credit facilities within minutes.
              </p>
              <div className="space-y-4">
                <Link href="https://loans.solendr.co.ke" className="block">
                  <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                    Create Account <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://loans.solendr.co.ke" className="block">
                  <Button size="lg" variant="outline" className="w-full">
                    Apply for a Loan <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/lenders" className="hover:text-gray-300">For Lenders</Link></li>
                <li><Link href="/loanees" className="hover:text-gray-300">For Borrowers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/#about" className="hover:text-gray-300">About</Link></li>
                <li><Link href="/#team" className="hover:text-gray-300">Team</Link></li>
                <li><Link href="/#contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>+254 717 158 091</li>
                <li>joe@solendr.co.ke</li>
                <li>P.O Box 0717158091-00100<br />Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Solendr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}