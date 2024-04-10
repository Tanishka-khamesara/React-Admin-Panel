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
                    <li><i class="material-icons">dashboard</i>Dashboard</li>
                </ul>
            </div>
            <div>
                <h5>Data</h5>
                <ul>
                    <li><button>Manage Teams</button></li>
                    <li><button>Contacts Information</button></li>
                    <li> <Link to="/Invoices">Invoices Balances</Link></li>    
                </ul>
            </div>
            <div>
                <h5>Pages</h5>
                <ul>
                    <li><button>Profile Form</button></li>
                    <li><button>Calendar</button></li>
                    <li><button>FAQ Page</button></li>    
                </ul>
            </div>
            <div>
                <h5>Charts</h5>
                <ul>
                    <li><button>Bar Chart</button></li>
                    <li><button>Pie Chart</button></li>
                    <li><button>Line Chart</button></li> 
                    <li><button>Geography Chart</button></li> 
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;