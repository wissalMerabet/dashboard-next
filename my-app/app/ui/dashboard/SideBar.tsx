import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className="bg-Green p-5 h-full flex flex-col space-y-6">
      <div className="flex items-center space-x-3">
        <img src="picture.png" alt="user img" width="50" height="50" className="rounded-full" />

        <div className="flex flex-col text-sm">
          <span className="font-bold">user</span>
          <span className="font-light">Admin</span>
        </div>
      </div>

      <ul >
        {menuItems.map((item, index) => (
          <li className="" key={index}>
            <span className="font-bold text-lg">{item.title}</span>
            <div className="p-2">
              {item.list.map((itm, index) => (
                <MenuLink item={itm} key={index} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
