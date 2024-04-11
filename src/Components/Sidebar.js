import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div class="sidebar">
            <div class="topper">
                <h2>ADMINIS</h2>
                <i className="material-icons">menu</i>
            </div>
            <hr></hr>
            <div>
                <ul>
                <li> <Link to="/">DashBoard</Link></li>    
                </ul>
            </div>
            <div>
                <h5>Data</h5>
                <ul>
                <li> <Link to="/ManageTeam">Manage Team</Link></li>    
                <li> <Link to="/Contacts">Contact Information</Link></li>    
                    <li> <Link to="/Invoices">Invoices Balances</Link></li>    
                </ul>
            </div>
            <div>
                <h5>Pages</h5>
                <ul>
                <li> <Link to="/ProfileForm">Profile Form</Link></li>    
                <li> <Link to="/Calendar">Calendar</Link></li>    
                <li> <Link to="/FAQ">FAQ Page</Link></li>     
                </ul>
            </div>
            <div>
                <h5>Charts</h5>
                <ul>
                    <li> <Link to="/BarChart">Bar Chart</Link></li>    
                    <li> <Link to="/PieChart">Pie Chart</Link></li>    
                    <li> <Link to="/LineChart">Line Chart</Link></li>    
                    <li> <Link to="/GeographyChart">Geography Chart</Link></li>    
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;