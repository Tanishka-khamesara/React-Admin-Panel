import { UserContext } from "../Context/Context";
import { UseContext, useContext } from "react";

function Home() {
    const Data = [
        {
            icon: "mail",
            numbers: "12,361",
            title:"Email sent",
        },
        {
            icon: "real_estate_agent",
            numbers: "431,225",
            title:"Sales Obtained",
        },
        {
            icon: "person_add",
            numbers: "32,441",
            title:"New Clients",
        },
        {
            icon: "traffic",
            numbers: "1,325,134",
            title:"Traffic Received",
        },
    ]
    const userCtx = useContext(UserContext);
    // console.log(userCtx.forbgBlue);
    return (
      <div style={{margin:'20px'}}>
            <div style={{lineHeight:'12px',marginTop:'20px'}}>
                <h1>DASHBOARD</h1>
                <p style={{color:userCtx.forwordsgreen}}>Welcome to your dashboard</p>
            </div>
            <div class="boxes">
                {
                    Data.map((val) => {
                        return (
                            <div style={{ backgroundColor: '#1F2A40',width:'20%',padding:"20px",lineHeight:'2px' }}>
                                <i className="material-icons" style={{ color: userCtx.foricons }}>{val.icon}</i>
                                <h4>{val.numbers}</h4>
                    <p style={{ color: userCtx.forwordsgreen }}>{val.title}</p>
                </div>
                       )
                    })
                }
              
            </div>
      </div>
    )
}
export default Home;