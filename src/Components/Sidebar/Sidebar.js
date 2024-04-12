import './Sidebar.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../Context/Context';
import { useContext, useState } from 'react';

function Sidebar() {
    const ctx = useContext(UserContext);
    const useCtx = ctx.color;
    
    return (
        <div class="sidebar" >
            <div class="topper">
                <h2>ADMINIS</h2>
            </div>
            <div>
                <ul>
                <li> <Link to="/"><i className="material-icons">dashboard</i>DashBoard</Link></li>    
                </ul>
            </div>
            <div >
                <h3 >Data</h3>
                <ul >
                <li> <Link to="/ManageTeam"><i className="material-icons">group</i>Manage Team</Link></li>    
                <li> <Link to="/Contacts"><i className="material-icons">contacts</i>Contact Information</Link></li>    
                    <li> <Link to="/Invoices"><i className="material-icons">description</i>Invoices Balances</Link></li>    
                </ul>
            </div>
            <div>
                <h3>Pages</h3>
                <ul>
                <li> <Link to="/ProfileForm"><i className="material-icons">person</i>Profile Form</Link></li>    
                <li> <Link to="/Calendar"><i className="material-icons">calendar_month</i>Calendar</Link></li>    
                <li> <Link to="/FAQ"><i className="material-icons">quiz</i>FAQ Page</Link></li>     
                </ul>
            </div>
            <div>
                <h3>Charts</h3>
                <ul>
                <li> <Link to="/BarChart"><i className="material-icons">bar_chart</i>Bar Chart</Link></li>
                    <li> <Link to="/PieChart"><i className="material-icons">pie_chart</i>Pie Chart</Link></li>    
                    <li> <Link to="/LineChart"><i className="material-icons">stacked_line_chart</i>Line Chart</Link></li>    
                    <li> <Link to="/GeographyChart"><i className="material-icons">person</i>Geography Chart</Link></li> 
                    
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;