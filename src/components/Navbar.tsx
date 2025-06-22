'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image';

interface DropdownProps {
  title: string;
  items: Array<{
    name: string;
    href: string;
  }>;
}

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
      >
        {title}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card ring-1 ring-border">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="w-full bg-primary shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="MyNextRobot Logo"
                  width={48}
                  height={48}
                />
              </Link>
            </div>

            {/* Navigation items */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Dropdown
                title="My First Robot"
                items={[
                  { name: 'Demo', href: '/demo' },
                  { name: 'Assembly', href: '/assembly' },
                  { name: 'Modules', href: '/modules' },
                ]}
              />
              <div className="border-l border-primary-foreground/20 h-6 my-auto mx-2" />
              <Dropdown
                title="Community"
                items={[
                  { name: 'Projects', href: '/community/projects' },
                  { name: 'Forums', href: '/community/forums' },
                ]}
              />
              <div className="border-l border-primary-foreground/20 h-6 my-auto mx-2" />
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
              >
                About
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80"
            >
              Dashboard
            </Link>
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-medium bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 