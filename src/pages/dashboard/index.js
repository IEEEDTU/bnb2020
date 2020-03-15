import React from "react";

import Button from "../../components/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1>BnB coming soon...</h1>
      <Button onClick={() => console.log("I was clicked")}>
        I am a button
      </Button>
    </div>
  );
}

export default Dashboard;