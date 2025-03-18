import "../portfolio.css";
import Project from "./Project";

export default function Projects()
{
    const project1 = [
        {image:"onlinemeeting.jpg",name:"Kathaikalaam",description:"An online meeting is a virtual gathering using the internet.",link:"https://github.com/kesavan06/kathaikalaam-online-meeting"},
        {image:"https://media.istockphoto.com/id/1365264688/vector/weather-forecast-meteorology-widget-app-interface.jpg?s=612x612&w=0&k=20&c=OSQHTnpLnK_p5jpyJ3i1hU7CWPSDUV_9JV69WqANgYk=",name:"Weather Report",description:"A weather forecast is a report that tells you the daily weather conditions.",link:"https://vennila-weather-report.netlify.app/"},
        {image:"mastermind.png",name:"Mastermind",description:"Mastermind is a game where you guess a secret code using logic.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsProject/masterMind.html"},
        {image:"bookStore.png",name:"Online Book Store",description:"An online bookstore is a website where you can buy books.",link:"https://github.com/Vennila384/OnlineBookStore"},
        {image:"game.png",name:"Rock Paper Scissors",description:"Rock Paper Scissors is a game where you choose rock, paper, or scissors to win.",link:"https://github.com/Vennila384/rock-paper-scissor"},
        // {image:"onlinemeeting.jpg",name:"Kathaikalaam",description:"",link:""},
    ]

    const project2 = [
        {image:"onlinemeeting.jpg",name:"Kathaikalaam",link:"https://github.com/Vennila384/OnlineBookStore",description:""},
        {image:"onlinemeeting.jpg",name:"Kathaikalaam",description:"",link:""},
    ]

    return(
        <div id="projects">
            <h1 style={{fontSize:"70px"}}>Best <span style={{color:"#F06E4A"}}>Projects</span></h1>
            <div className="project">
                {
                    project1.map((data)=>{
                        return(<Project src={data.image} name={data.name} description={data.description} link={data.link}></Project>)
                    })
                }
            </div>
            {/* <div className="project">
                {
                    project2.map((data)=>{
                        return(<Project src={data.image} name={data.name} description={data.description}></Project>)
                    })
                }
            </div> */}
        </div>
    )
}
