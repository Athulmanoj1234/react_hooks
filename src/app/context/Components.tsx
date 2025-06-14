"use client"

// import { useUserContext } from './context';

import { useContext } from "react";
import { DashboardContext } from "./context";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  
    //consuming the context value
    const user = useContext(DashboardContext);

  return (
    <div>
      <div>{user?.name}</div>
      <div>Subscription Status: {user?.isSubscribed}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {

    const user = useContext(DashboardContext);

  return <div>{user?.name}</div>
}