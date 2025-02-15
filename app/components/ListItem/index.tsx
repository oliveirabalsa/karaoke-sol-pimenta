import React from "react";

interface ListItemProps {
  text: string;
}

export const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="p-4 bg-gray-800 text-white border-b border-gray-700">
      {text}
    </li>
  );
};
