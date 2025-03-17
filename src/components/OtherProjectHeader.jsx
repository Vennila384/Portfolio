
export default function OtherProjectHeader({skill,setSkill})
{
    return(
        <div id="otherProjectHeader">
            <button onClick={()=>{setSkill("react")}} style={{backgroundColor:skill=="react" ? "#F86840" : "black"}} className="button">React</button>
            <button onClick={()=>{setSkill("js")}} style={{backgroundColor:skill=="js" ? "#F86840" : "black"}} className="button">Javascript</button>
            <button onClick={()=>{setSkill("java")}} style={{backgroundColor:skill=="java" ? "#F86840" : "black"}} className="button">Java</button>
            <button onClick={()=>{setSkill("html")}} style={{backgroundColor:skill=="html" ? "#F86840" : "black"}} className="button">HTML & CSS</button>
            <button onClick={()=>{setSkill("scratch")}} style={{backgroundColor:skill=="scratch" ? "#F86840" : "black"}} className="button">Scratch</button>
        </div>
    )
}