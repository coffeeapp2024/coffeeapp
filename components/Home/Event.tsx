import React from "react";
import PostList from "./PostList";
import AboutEventButton from "./AboutEventButton";
import UploadPostDialog from "./UploadPostDialog";

function Event() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 pr-2 mb-2">
        <h3 className="font-bold text-2xl text-white">Event this month</h3>
        <AboutEventButton />
      </div>
      <p className="text-white opacity-90 mb-2">
        Lorem ipsum dolor sit amet elit. Neque, veritatis?
      </p>
      <PostList />
      <div className="flex items-center justify-center">
        <UploadPostDialog />
      </div>
    </div>
  );
}

export default Event;
