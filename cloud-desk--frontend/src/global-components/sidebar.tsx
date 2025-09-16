"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faComments,
  faEnvelope,
  faTable,
  faCalendarDay,
  faFileZipper,
  faFileLines,
  faFilePen,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";

// If using React Router
// import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const links = [
    { name: "My Office", icon: faBuilding, path: "/myoffice" },
    { name: "Chat", icon: faComments, path: "/chatpage" },
    { name: "Worktable", icon: faTable, path: "/worktable" },
    { name: "Today's Task", icon: faCalendarDay, path: "/today" },
  ];

  // Optional: For React Router navigation
  // const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // With React Router:
    // navigate(path);

    // Or with plain JavaScript:
    window.location.href = path;
  };

  // Tailwind class variables
  const sidebarClass = "w-64 h-full bg-gray-900 text-white flex flex-col p-4 space-y-8 overflow-y-scroll";
  const groupClass = "flex flex-col space-y-3";
  const linkItemClass = "h-12 bg-gray-700 rounded-[35px] flex items-center px-4 cursor-pointer hover:bg-gray-600 transition";
  const linkIconClass = "mr-3 w-4 h-4";
  const linkTextClass = "text-base";
  const groupBoxClass = "h-24 bg-gray-700 rounded-[10px] flex items-center justify-center space-x-8 cursor-pointer hover:bg-gray-600 transition";
  const groupBoxLargeClass = "h-48 bg-gray-700 rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-gray-600 transition";
  const groupBoxSmallClass = "h-16 bg-gray-700 rounded-[10px] flex items-center cursor-pointer hover:bg-gray-600 transition";

  return (
    <aside className={sidebarClass}>
      {/* Group 1 - Navigation Links */}
      <div className={groupClass}>
        {links.map((link, i) => (
          <div
            key={i}
            className={linkItemClass}
            onClick={() => handleNavigation(link.path)}
          >
            <FontAwesomeIcon icon={link.icon} className={linkIconClass} />
            <span className={linkTextClass}>{link.name}</span>
          </div>
        ))}
      </div>

      {/* Group 2 - Icon Boxes */}
      <div>
        <div className={groupBoxClass}>
          <div><FontAwesomeIcon icon={faFileZipper} size="2x" className="hover:text-gray-300"/></div>
          <div><FontAwesomeIcon icon={faFileLines}  size="2x" className="hover:text-gray-300"/></div>
          <div><FontAwesomeIcon icon={faFilePen}    size="2x" className="hover:text-gray-300"/></div>
        </div>
      </div>

      {/* Group 3 - Placeholder Boxes */}
      <div className={groupClass}>
        <div className={groupBoxLargeClass}></div>
        <div className={groupBoxLargeClass}></div>
        {/* Profile Card - Small Group Box */}
        <div className={groupBoxSmallClass}>
          <div className="flex items-center space-x-3 w-full px-4">
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>

            {/* Name */}
            <span className="text-white text-sm font-medium">User Name</span>

            {/* Three Dots Icon */}
            <div className="ml-auto cursor-pointer">
              <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-300 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;