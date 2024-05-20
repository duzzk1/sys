import Image from "next/image";
import LateralMenu from "./components/LateralMenu";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-200">
      <LateralMenu />
      <Main />
    </main>
  );
}
