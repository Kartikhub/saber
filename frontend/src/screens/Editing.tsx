import React, { useState } from "react";
import { MainContent } from "../components/MainContent"
import { SideBar } from "../components/SideBar"
import { TopBar } from "../components/TopBar"

export const Editing = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelection = (item: string) => {
        setSelectedItem(item);
    };


    return (
        <div className="absolute inset-0 bg-slate-100 overflow-hidden">
            <div className="w-full bg-blue-300 p-1">
                <TopBar />
            </div>
            <div className="flex h-full w-full">
                <div className="w-80 h-full">
                    <SideBar onSelection={handleSelection} />
                </div>
                <div className="flex-grow overflow-auto">
                    <MainContent selectedItem={selectedItem} />
                </div>
            </div>
        </div>
    )
}