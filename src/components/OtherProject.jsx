

export default function OtherProject({image,description,link,name})
{
    return(
        <div id="otherProjectDetails">
            <div id="otherProject">
                <img src={image} id="otherProjectImage"/>
                <div id="otherProjectName">{name}</div>
            </div>
            <a href={link} target="_blank">
                <div id="otherProjectDescription">
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}