import React from "react";
import { Outlet } from "react-router-dom";
import Chats from "../components/Chats/Chats";

export default function Messages() {
    return (
        <div className="flex h-full gap-[20px]">
            <Chats />
            <Outlet />
        </div>
    );
}
