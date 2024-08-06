import { Link, useLocation } from "react-router-dom";
import { pazadark, profile } from "../../assets";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { DashContext } from "../../context/AuthContext";
export default function NavBar() {
  const location = useLocation();
  const { account, user } = useContext(DashContext);
  const menu = [
    { id: 4, title: "Dashboard", path: "/overview" },
    { id: 2, title: "Job Board" },
    { id: 3, title: "Showcase" },
    {
      id: 1,
      title: "Profile",
      path: `${
        account.type === "Creator"
          ? "/profile?type=Creator"
          : account.type === "Brand"
          ? "/profile?type=Brand"
          : "/accountype"
      }`,
    },
  ];
  return (
    <nav className="flex items-center justify-between text-white px-4 py-3 text-sm border-b border-zinc-800">
      <img src={pazadark} alt="pazalogo" className="w-36 object-contain" />
      <div className="hidden 2xl:flex xl:flex lg:flex md:hidden justify-center space-x-8 2xl:space-x-24 cursor-pointer text-zinc-300 font-bold">
        {menu.map((item) => {
          return (
            <Link
              to={item.path}
              key={item.id}
              className={`${
                location.pathname === item.path ||
                location.pathname + location.search === item.path
                  ? "text-orange-700"
                  : null
              } hover:scale-90 hover:text-orange-700`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="hidden 2xl:flex xl:flex lg:flex md:flex items-center space-x-4 2xl:space-x-8 cursor-pointer ">
        <i className="bi bi-search"></i>
        <i className="bi bi-chat-dots-fill"></i>
        <i className="bi bi-bell-fill"></i>
        <i className="bi bi-gear"></i>
        <Avatar
          src={profile}
          alt="profile"
          variant="rounded"
          sx={{
            border: "2px solid #FB5607",
            borderStyle: "double",
            width: 30,
            height: 26,
          }}
        />
        <p className="text-zinc-300 font-semibold">
          {account.type === "Creator" ? (
            account.creatorname
          ) : account.type === "Brand" ? (
            account.company
          ) : (
            <span>
              {user.firstname} {user.lastname}
            </span>
          )}
        </p>
        <i className="bi bi-caret-down-fill text-orange-700 text-xs"></i>
      </div>
    </nav>
  );
}
