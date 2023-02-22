import React from "react";

import "../App.css";

export const COMPLETED_ITEMS_KEY = "COMPLETED_ITEMS";

const CompletedList: React.FC = () => {
  const completedStr = localStorage.getItem(COMPLETED_ITEMS_KEY);
  const completedItems: string[] = completedStr ? JSON.parse(completedStr) : [];
  return (
    <div className="Page">
      {completedItems.map((c) => (
        <div>
          <p>{c}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedList;
