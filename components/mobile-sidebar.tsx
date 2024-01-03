"use client"

import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "./sidebar"

interface MobileSidebarProps {
    apiLimitCount: number
}

const MobileSidebar = ({apiLimitCount}: MobileSidebarProps) => {
    // Avoid hydration errors
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => { setIsMounted(true) }, [])
    if (!isMounted) return null

    return (
        <Sheet>
            <SheetTrigger> 
                <Menu className="md:hidden" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar apiLimitCount={apiLimitCount} />
            </SheetContent>
        </Sheet>
    )
}
 
export default MobileSidebar