import NavBar from '@/components/ui/navBar';
import { LayoutProps } from '@/interfaces/pages';

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full min-h-inherit">
      <NavBar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-screen-2xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
