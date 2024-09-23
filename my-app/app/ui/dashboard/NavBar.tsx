import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="p-5 bg-Green rounded-lg m-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">dashboard</div>
        <div className="flex items-center flex-row space-x-3">
          <div className="flex items-center bg-white rounded-lg px-3 py-1">
            <MdSearch className="text-gray-500"/>
            <input type="text" 
            placeholder="Search ..."
            className=" w-28 bg-transparent focus:outline-none ml-2 text-black" />
          </div>

          <div className="flex flex-row space-x-3">
            <MdOutlineChat />
            <MdNotifications />
            <MdPublic />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
