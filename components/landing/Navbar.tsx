import { Show } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"
        >
          <Image src="/globe.svg" alt="" width={24} height={24} />
          AI Web App Creator
        </Link>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:brightness-100"
              asChild
            >
              <Link href="/sign-in">Log In</Link>
            </Button>

            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </Show>

          <Show when="signed-in">
            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </Show>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
