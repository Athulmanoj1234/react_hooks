"use client"
import { createContext } from "react";

export interface User {
    isSubscribed: boolean;
    name: string;
}

//we are creating a context

export const DashboardContext = createContext<User | undefined>(undefined);