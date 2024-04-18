"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode,
    className?: string
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();

    const handleLogout = () => {
        //handle logout
    }
    return (
        <div
            className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `,
                className
            )}
        >
            <div
                className="w-full mb-4 flex items-center justify-between"
            >
                <div
                    className="hidden md:flex gap-x-2 items-center"
                >
                    <button
                        onClick={() => router.back()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-60 transition">
                        <RxCaretLeft className="text-white" size={26} />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-60 transition">
                        <RxCaretRight className="text-white" size={26} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-60 transition"
                    >
                        <HiHome className="text-black" size={26} />
                    </button>
                    <button
                        className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-60 transition"
                    >
                        <BiSearch className="text-black" size={26} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button onClick={() => { }}
                                className="bg-transparent text-neutral-300 font-medium"
                            >
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => { }}
                                className="bg-white px-6 py-2"
                            >
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header;