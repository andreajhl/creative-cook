import './globals.css';
import type { Metadata } from 'next';
import { LayoutProps } from '@/interfaces/pages';

export const metadata: Metadata = {
  authors: [{ name: 'Andrea Hernandez' }],
  title: 'Creative Cook',
  description: 'Generated by Golden Cup Drinks',
  keywords: ['cook', 'recipe', 'recipe cook', 'eat']
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="h-full min-h-screen">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
