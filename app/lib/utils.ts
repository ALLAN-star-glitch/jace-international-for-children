import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for conditional className merging with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date for copyright
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

// Create slug from string
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Generate meta description from text
export function generateMetaDescription(text: string, maxLength: number = 160): string {
  return truncateText(text.replace(/\s+/g, ' ').trim(), maxLength);
}