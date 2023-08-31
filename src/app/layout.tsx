import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/ui/navBar';
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
        <main className="h-full min-h-inherit">
          <NavBar />
          <div className="flex flex-col justify-center items-center w-full">
            <div className="max-w-screen-2xl w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
