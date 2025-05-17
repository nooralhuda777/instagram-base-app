import React from "react";
import Chat from "./Chat";
import Newsfeed from "./NewsFeed";
import Composer from "./Composer";

const Dashboard = () => {
  return (
    <div>
      <Chat />
      <Newsfeed />
      <Composer />
    </div>
  );
};

export default Dashboard;
