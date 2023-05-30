import AdminHeader from "../Components/AdminHeader";
import DashboardButton from "../Components/DashboardButton";

export default function Dashboard() {
    return (
        <>
            <AdminHeader />
            <div className="min-h-screen min-w-full flex flex-col gap-8 justify-center items-center bg-blue-800">
                <DashboardButton title={"Usuários"} />
                <DashboardButton title={"Missas"} />
            </div>
        </>
    )
}