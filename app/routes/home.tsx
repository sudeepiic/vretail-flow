import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ScrollableCards from "~/components/admin";
import ScrollableCard from "~/components/am";
// import ScrollableCard from "~/components/collab";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ScrollableCard />;  
}
