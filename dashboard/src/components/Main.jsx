import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";

export default function Main () {
    return (
        <div className="Main">
            <Header/>
            <div className="mainLayout">
                <Aside/>
                <Outlet/>
            </div>
        </div>
    );
}