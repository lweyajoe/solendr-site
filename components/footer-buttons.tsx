'use client';

import Link from 'next/link';

export default function FooterButtons() {
  return (
    <ul className="space-y-2">
      <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300">About</button></li>
      <li><button onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300">Team</button></li>
      <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300">Contact</button></li>
    </ul>
  );
}