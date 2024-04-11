import { UserContext } from "../../Context/Context";
import {  useContext, useState } from "react";

function ManageTeams() {
    const Ctx = useContext(UserContext);
    const userCtx = Ctx.colors;
    const detailCtx = Ctx.details;
   
    return (
        <div style={{margin:'20px'}}>
            <div style={{lineHeight:'12px',marginTop:'20px'}}>
                <h1>TEAM</h1>
                <p style={{color:userCtx.forwordsgreen}}>Managing the Team Members</p>
            </div>
            <div>
                <table>
                    <thead id="ids">Id</thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <button style={{backgroundColor:"red",}}>hide</button>
                        </tr>
                    </tbody>
                </table>
            </div>
          
      </div>
    )
}
export default ManageTeams;