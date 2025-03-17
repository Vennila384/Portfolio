import "../portfolio.css";


export default function Skill({src,language,background,border,color})
{
    return(
        <div className="skill" style={{backgroundColor:background,border:border}}>
            <img className="image" src={src}/>
            <p style={{color:color,fontSize:"18px"}}>{language}</p>
        </div>
    )
}