import { UserContext } from "../Context/Context";
import { UseContext, useContext } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart,AreaChart, Area,Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';

function Home() {
    const DataNew = [
        {
            icon: "mail",
            numbers: "12,361",
            title: "Email sent",
            value:"+14%"
        },
        {
            icon: "real_estate_agent",
            numbers: "431,225",
            title: "Sales Obtained",
            value:"+21%"
        },
        {
            icon: "person_add",
            numbers: "32,441",
            title: "New Clients",
            value:"+5%"
        },
        {
            icon: "traffic",
            numbers: "1,325,134",
            title: "Traffic Received",
            value:"+43%"
        },
    ]
    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
        { name: "Jully", Total: 1000 },
        { name: "August", Total: 1900 },
        { name: "September", Total: 3000 },
        { name: "October", Total: 1700 },
        { name: "November", Total: 1500 },
        { name: "December", Total: 3000 },
      ];
    const Ctx = useContext(UserContext);
    const userCtx = Ctx.colors;
    // console.log(userCtx.colors);
    return (<>
      <div style={{margin:'20px'}}>
            <div style={{lineHeight:'12px',marginTop:'20px'}}>
                <h1>DASHBOARD</h1>
                <p style={{color:userCtx.forwordsgreen}}>Welcome to your dashboard</p>
            </div>
            <div class="boxes">
                {
                    DataNew.map((val) => {
                        return (
                            <div style={{ backgroundColor: '#1F2A40',width:'20%',padding:"20px",lineHeight:'2px',display:'flex',justifyContent:'space-between' }}>
                                <div >
                                <i className="material-icons" style={{ color: userCtx.foricons }}>{val.icon}</i>
                                <h4>{val.numbers}</h4>
                    <p style={{ color: userCtx.forwordsgreen }}>{val.title}</p>
                                </div>
                                <div>
                                <div style={{ width: '70px', height: '70px',alignItems:'center' }}>
      <CircularProgressbar value={val.value} text={`${val.value}`} />
    </div>
                                </div>
                            </div>
                       )
                    })
                }
              
            </div>
            {/* chart */}
        </div>
        <div className='chart'>
            <AreaChart width={650} height={300} data={data}
        margin={{ top: 2, right: 30, left: 22, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            
        </div>
        </>
    )
}
export default Home;