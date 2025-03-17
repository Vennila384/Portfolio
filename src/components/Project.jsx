import "../portfolio.css";

export default function Project({src,name,description,link})
{
    return(
        <div id="singleProject">
            <div id="projectImage">
                <img src={src} style={{width:"875px",height:"430px"}}/>
            </div>
            <div id="projectDetail">
                <center>
                    <h2>{name}</h2>
                </center>
            </div>
            <a href={link} target="_blank">
                <div className="projectDetails">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}
