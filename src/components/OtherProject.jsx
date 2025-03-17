

export default function OtherProject({image,description,link})
{
    return(
        <div id="otherProjectDetails">
            <div id="otherProject">
                <img src={image} id="otherProjectImage"/>
            </div>
            <a href={link} target="_blank">
                <div id="otherProjectDescription">
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}