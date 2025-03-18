import { useState } from "react";
import OtherProjectHeader from "./OtherProjectHeader";
import OtherProjectDetails from "./OtherProjectDetails";


export default function OtherProjects()
{
    const [skill,setSkill] = useState("react");
    
    return(
        <div id="other_project" style={{marginTop:"100px"}}>
            <center>
                <h1 style={{fontSize:"45px"}}>Other <span style={{color:"#F06E4A"}}>Projects</span></h1>
            </center>
            <OtherProjectHeader skill={skill} setSkill={setSkill}/>
            <OtherProjectDetails skill={skill} setSkill={setSkill}/>
        </div>
    )
}