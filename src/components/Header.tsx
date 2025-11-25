'use client'

import Link from "next/link";
import { ChartNoAxesCombinedIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

interface HeaderProps {
    user: {
        name?: string | null,
        email?: string | null,
        image?: string | null
    }
}

const Header = ({ user }: HeaderProps) => {
    return (
        <header className="max-w-7xl mx-auto py-2">
            <div className="flex justify-between items-center">

                <Link className="flex items-center gap-2 p-4" href={'/'}>
                    <ChartNoAxesCombinedIcon />
                    <h1>AmazonPriceTracker</h1>
                </Link>

                <div className="cursor-pointer">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src={`${user?.image}`} />
                                <AvatarFallback className="text-sm">{user?.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="mt-1.4">
                            <DropdownMenuLabel>
                                <form className="flex items-center justify-center w-full text-center p-0 m-0" action={async () => {
                                    'use client'
                                    await signOut()
                                }}>
                                    <Button
                                        type='submit'
                                        variant={"secondary"}
                                        className='flex items-center gap-2 cursor-pointer  rounded-lg'>
                                        <LogOutIcon /> Logout
                                    </Button>
                                </form>
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </header>
    )
}

export default Header
