'use client';

import Link from 'next/link';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  Mail,
  Cloud,
  FileText,
  UserCheck,
  Calculator,
  Building2,
  Bell,
  Shield,
  Scale,
  ChevronRight
} from 'lucide-react';

export default function LendersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transform Your Lending Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline operations, reduce risks, and scale your lending business with our comprehensive management system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Modern Lenders</h2>
            <p className="text-xl text-gray-600">Everything you need to manage and grow your lending business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <UserCheck className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">KYC Management</h3>
              <p className="text-gray-600">Automated verification process with integrated APIs for quick and secure customer validation.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Client Onboarding</h3>
              <p className="text-gray-600">Streamlined onboarding process with digital forms and automated approval workflows.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">HR Management</h3>
              <p className="text-gray-600">Complete HR suite for managing staff, roles, and permissions.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Email Notifications</h3>
              <p className="text-gray-600">Automated email alerts for loan approvals, payments, and important updates.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
              <p className="text-gray-600">Secure document storage with easy access and management capabilities.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calculator className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Accounting Tools</h3>
              <p className="text-gray-600">Integrated accounting features for tracking finances and generating reports.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Statements & Receipts</h3>
              <p className="text-gray-600">Automated generation and delivery of professional statements and receipts.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Scale className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Balance Management</h3>
              <p className="text-gray-600">Real-time tracking of loan balances and payment schedules.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Collateral Management</h3>
              <p className="text-gray-600">Digital tracking and management of loan collaterals and securities.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See Solendr in Action</h2>
            <p className="text-xl text-gray-600">Watch how Solendr can transform your lending operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="Solendr Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Want to try it yourself?</h3>
              <p className="text-gray-600">
                Get hands-on experience with Solendr by creating a demo account. No credit card required.
              </p>
              <Link href="https://app.solendr.co.ke" className="inline-block">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Create Demo Account <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Nyati Package</h3>
                <div className="text-4xl font-bold mb-2">KES 10,000<span className="text-lg text-gray-600">/mo</span></div>
                <p className="text-gray-600">Perfect for small lenders</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Up to 100 active loans</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Basic KYC features</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Email support</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> 5GB storage</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Kifaru Package</h3>
                <div className="text-4xl font-bold mb-2">KES 25,000<span className="text-lg text-gray-600">/mo</span></div>
                <p className="text-gray-600">For growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Up to 500 active loans</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Advanced KYC features</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Priority support</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> 20GB storage</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> HR management</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Ndovu Package</h3>
                <div className="text-4xl font-bold mb-2">KES 50,000<span className="text-lg text-gray-600">/mo</span></div>
                <p className="text-gray-600">For large institutions</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Unlimited active loans</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Premium KYC features</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> 24/7 dedicated support</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> 100GB storage</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Advanced analytics</li>
                <li className="flex items-center"><Bell className="h-5 w-5 text-green-500 mr-2" /> Custom integrations</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>
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