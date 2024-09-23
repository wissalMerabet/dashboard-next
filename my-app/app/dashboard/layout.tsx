import { ReactNode } from 'react';
import SideBar from '../ui/dashboard/SideBar';
import NavBar from '../ui/dashboard/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen ">
      <div className="w-64">
        <SideBar />
      </div>
      <div  className="flex-1">
        <NavBar />
        {children}
        
      </div>
    </div>
  );
};

export default Layout;
