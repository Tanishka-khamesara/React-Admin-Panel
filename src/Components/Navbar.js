function Navbar() {
    return (
        <div style={{display:'flex',justifyContent:'space-between', height: "28px",margin:"18px",alignItems: 'center'}}>
            <div style={{ display: "flex", alignItems: 'center', backgroundColor: "#1F2A40"}}>
                <input type="text" placeholder="Search" style={{backgroundColor:'transparent',border:"none",outline:'none',}} />
                <button><i className="material-icons">search</i></button>
            </div>
            <div>
                <i className="material-icons">dark_mode</i>
                <i className="material-icons">notifications</i>
                <i className="material-icons">settings</i>
                <i className="material-icons">person</i>
                
            </div>
        </div>
    )
}
export default Navbar;