import Link from "next/link";
import { ChartNoAxesCombinedIcon, LogOutIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
    user: {
        name?: string | null,
        email?: string | null,
        image?: string | null
    }
}

const Header = ({ user }: HeaderProps) => {
    console.log('User in Header:', user);
    return (
        <header className="max-w-7xl mx-auto py-2">
            <div className="flex justify-between items-center p-4">

                <Link className="flex items-center gap-2 " href={'/'}>
                    <ChartNoAxesCombinedIcon className="w-6 h-6" />
                    <h1 className="text-2xl font-semibold tracking-tight">AmazonPriceTracker</h1>
                </Link>

                <div className="flex gap-4  items-center relative">
                    <div className="flex items-center ">
                        <SearchIcon className="w-4 h-4 absolute left-2 text-gray-600 pointer-events-none" />
                        <Input type="text" placeholder="Search..." className="pl-8 w-54 " />
                    </div>

                    <div className="cursor-pointer">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage src={user?.image || ''} />
                                    <AvatarFallback className="text-sm">{user?.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="mt-1.4">
                                <DropdownMenuLabel>
                                    <form className="flex items-center justify-center w-full text-center p-0 m-0" action={async () => {
                                        'use server'
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
            </div>
            <div>
            </div>
        </header>
    )
}

export default Header
