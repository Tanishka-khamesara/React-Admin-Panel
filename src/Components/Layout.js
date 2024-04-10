import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div style={{display:"flex"}}>
                <div style={{width:'20%'}}>
                    <Sidebar/>
                </div>
                <div style={{width:'80%'}}>
                    <Navbar />
                   <Outlet/>
                </div>
            </div>
           
        </>
    )
}
export default Layout;