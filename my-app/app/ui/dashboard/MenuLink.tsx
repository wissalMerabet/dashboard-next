"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for routing

interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface Props {
  item: MenuItem;
}

const MenuLink = ({ item }: Props) => {
  const pathname = usePathname(); 
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      passHref
      className={`flex items-center space-x-3 p-3 m-1 rounded-lg ${
        isActive
          ? "bg-BgGreen text-white" 
          : "text-white hover:bg-BgGreen hover:text-white" 
      }`}
    >
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
};

export default MenuLink;
