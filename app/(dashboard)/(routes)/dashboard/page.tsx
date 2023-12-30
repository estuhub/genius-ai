import { UserButton } from "@clerk/nextjs"

const DashboardPage = () => {
    return (
        <div>
            <div>Dashboard (Protected)</div>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
 
export default DashboardPage