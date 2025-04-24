'use client';

import Header from '@/components/header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Banknote, 
  Clock, 
  CreditCard, 
  FileText, 
  Shield, 
  Zap, 
  Cloud,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import FooterButtons from '@/components/footer-buttons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Link 
              href="https://app.solendr.co.ke"
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-4">Are you a Lender?</h2>
                <p className="text-gray-600 mb-6">Streamline your lending operations with our comprehensive loan management system.</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started →</Button>
              </div>
            </Link>
            
            <Link 
              href="https://loan.solendr.co.ke"
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-4">Do You Need A Loan?</h2>
                <p className="text-gray-600 mb-6">Find trusted lenders with competitive rates and quick approval process.</p>
                <Button className="bg-purple-600 hover:bg-purple-700">Apply Now →</Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          
          <div className="space-y-20">
            {/* For Loanees */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">For Borrowers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-6">
                  <Users className="h-12 w-12 mb-4 text-purple-600" />
                  <h4 className="text-xl font-semibold mb-2">Find Nearby Lenders</h4>
                  <p className="text-gray-600">Connect with trusted lenders in your area for personalized loan solutions.</p>
                </Card>
                
                <Card className="p-6">
                  <Banknote className="h-12 w-12 mb-4 text-purple-600" />
                  <h4 className="text-xl font-semibold mb-2">Competitive Rates</h4>
                  <p className="text-gray-600">Access loans with competitive interest rates from multiple lenders.</p>
                </Card>
                
                <Card className="p-6">
                  <Clock className="h-12 w-12 mb-4 text-purple-600" />
                  <h4 className="text-xl font-semibold mb-2">Fast Turnaround</h4>
                  <p className="text-gray-600">Quick loan processing and approval for your urgent financial needs.</p>
                </Card>
                
                <Card className="p-6">
                  <CreditCard className="h-12 w-12 mb-4 text-purple-600" />
                  <h4 className="text-xl font-semibold mb-2">Flexible Payments</h4>
                  <p className="text-gray-600">Pay easily through M-Pesa or Visa with our integrated payment system.</p>
                </Card>
              </div>
            </div>

            {/* For Lenders */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">For Lenders</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-6">
                  <Shield className="h-12 w-12 mb-4 text-blue-600" />
                  <h4 className="text-xl font-semibold mb-2">KYC Validation</h4>
                  <p className="text-gray-600">Integrated APIs for quick and secure customer verification.</p>
                </Card>
                
                <Card className="p-6">
                  <Zap className="h-12 w-12 mb-4 text-blue-600" />
                  <h4 className="text-xl font-semibold mb-2">Fast Processing</h4>
                  <p className="text-gray-600">Originate and service loans from a single dashboard.</p>
                </Card>
                
                <Card className="p-6">
                  <Cloud className="h-12 w-12 mb-4 text-blue-600" />
                  <h4 className="text-xl font-semibold mb-2">Cloud Storage</h4>
                  <p className="text-gray-600">Unlimited document storage and management in the cloud.</p>
                </Card>
                
                <Card className="p-6">
                  <CreditCard className="h-12 w-12 mb-4 text-blue-600" />
                  <h4 className="text-xl font-semibold mb-2">Payment Integration</h4>
                  <p className="text-gray-600">Seamless integration with M-Pesa and Visa.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Solendr</h2>
              <p className="text-gray-600 mb-6">
                Solendr is revolutionizing the lending industry in East Africa by connecting borrowers with trusted lenders through our innovative platform. Our comprehensive loan management system streamlines the entire lending process, making it easier and more efficient for both lenders and borrowers.
              </p>
              <p className="text-gray-600">
                We're committed to financial inclusion and believe that everyone deserves access to fair and transparent lending services. Our platform combines cutting-edge technology with local market expertise to create a seamless lending experience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80"
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team members would go here - using placeholder for now */}
            <Card className="p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </Card>
            <Card className="p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </Card>
            <Card className="p-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Head of Operations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-gray-600" />
                  <p>+254 717 158 091</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-gray-600" />
                  <p>joe@solendr.co.ke</p>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-gray-600" />
                  <p>P.O Box 0717158091-00100<br />Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="h-32" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
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
              <FooterButtons />
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