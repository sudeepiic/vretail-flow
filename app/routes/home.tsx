import AmCards from "~/components/am";
import type { Route } from "./+types/home";
import AdminCards from "~/components/admin";
import DataVault from "~/components/data-vaults";
import CollabCards from "~/components/collab";
import { useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {


  const tabs = [
    { label: "Account Manager", component: <AmCards /> },
    { label: "Vretail Admin", component: <AdminCards /> },
    { label: "Data Vaults", component: <DataVault /> },
    { label: "Collab", component: <CollabCards /> },
  ];



  const [activeTab, setActiveTab] = useState(0);


  return <div className="mb-8">
    <div className="flex space-x-4 border-b ml-[10rem] fixed top-0 pt-10 bg-white z-10 h-34 w-[85%]">
      {tabs.map((tab, idx) => (
        <button
          key={tab.label}
          className={`py-2 px-4 font-semibold cursor-pointer ${activeTab === idx
            ? "border-b-2 border-violet-700 text-violet-700"
            : "text-gray-500"
            }`}
          onClick={() => setActiveTab(idx)}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div className="mt-6">{tabs[activeTab].component}</div>
  </div>

}
