import './globals.css';
import type { Metadata } from 'next';
import { LayoutProps } from '@/interfaces/pages';

export const metadata: Metadata = {
  authors: [{ name: 'Andrea Hernandez' }],
  title: 'Creative Cook',
  description: 'Creative Cook, is an app where you will find many recipes to speed up the process of cooking and eating healthy, you will have the list of ingredients and its nutritional table',
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
