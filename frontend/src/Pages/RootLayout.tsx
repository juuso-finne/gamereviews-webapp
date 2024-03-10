import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

const RootLayout = () => {
    return(
        <div className="w-4/5 mx-auto">
            <MainNavigation/>
            <Outlet></Outlet>
        </div>
    )
}


export default RootLayout;