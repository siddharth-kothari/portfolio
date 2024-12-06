import DarkModeToggle from "@/components/DarkModeToggle";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Hero />
    </div>
  );
}
