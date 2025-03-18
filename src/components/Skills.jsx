import "../portfolio.css";
import Skill from "./Skill";

export default function Skills()
{
    const skill1=[
        {src:"javascript.png",language:"Javascript",background:"rgba(240, 219, 79, 0.1)",border: "1px solid rgb(240, 219, 79)",color:"rgb(240, 219, 79)"},
        {src:"node_js.png",language:"Node.js",background:"rgba(104, 160, 99, 0.1)",border:"1px solid rgb(104, 160, 99)",color:"rgb(104, 160, 99)"},
        {src:"react.png",language:"React.js",background:"rgba(97, 218, 251, 0.1)",border:"1px solid rgb(97, 218, 251)",color:"rgb(97, 218, 251)"},
        {src:"java.png",language:"Java",background:"rgba(0, 115, 150, 0.1)",border:"1px solid rgb(0, 115, 150)",color:"rgb(0, 115, 150)"},
    ]

    const skill2=[
        {src:"mysql.png",language:"Mysql",background:"rgba(68, 121, 161, 0.1)",border:"1px solid rgb(68, 121, 161)",color:"rgb(68, 121, 161)"},
        {src:"html.png",language:"HTML/CSS",background:"rgba(228, 77, 38, 0.1)",border: "1px solid rgb(228, 77, 38)",color:"rgb(228, 77, 38)"},
        {src:"linux_logo.png",language:"Linux Command",background:"rgba(240, 219, 79, 0.1)",border: "1px solid rgb(240, 219, 79)",color:"rgb(240, 219, 79)"},
        {src:"scratch.png",language:"Scratch",background:"rgba(77, 179, 61, 0.1)",border:"1px solid rgb(77, 179, 61)",color:"rgb(77, 179, 61)"},
        // {src:"",language:"",background:"",border:"",color:""}
    ]

    return(
        <div id="skills">
            <h1 style={{fontSize:"49px",color:"white"}}>Skills</h1>
            <div className="skillDiv">
                {
                    skill1.map((skill)=>{
                        return(<Skill src={skill.src} language={skill.language} background={skill.background} border={skill.border} color={skill.color}/>)
                    })
                }
            </div>
            <div  className="skillDiv">
                {
                    skill2.map((skill)=>{
                        return(<Skill src={skill.src} language={skill.language} background={skill.background} border={skill.border} color={skill.color}/>)
                    })
                }
            </div>
        </div>
    )
}