import React from "react";
import { NavSidebar } from "../layouts/NavSidebar";
import { Post } from "../layouts";

export const Home = () => {
  return (
    <NavSidebar>
      <Post />
    </NavSidebar>
  );
};
