import OtherProject from "./OtherProject"


export default function OtherProjectDetails({skill,setSkill})
{
    const jsProject = [
        {image:"rock_paper_scissor.png",description:"Rock Paper Scissors is a game where you choose rock, paper, or scissors to win.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment023/game.html"},
        {image:"mastermind.png",name:"Mastermind",description:"Mastermind is a game where you guess a secret code using logic.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsProject/masterMind.html"},
    ]

    const reactProject = [
        {image:"onlinemeeting.jpg",description:"An online meeting is a virtual gathering using the internet.",link:""}
    ]

    const javaProject = [
        {image:"bookStore.png",description:"An online bookstore is a website where you can buy books.",link:"https://github.com/Vennila384/OnlineBookStore"}
    ]

    const scratchProject = [
        {image:"quiz.png",description:"A quiz application is a fun game with many categories where you answer questions.",link:"https://scratch.mit.edu/projects/1041097324"}
    ]

    const htmlProject = [
        {image:"breezy.png",description:"Breezy.hr is a website for hiring and managing job applications.",link:"https://vennilavennila-6404-8443.zcodeusers.in/htmlproject/main.html"}
    ]

    return(
        <div id="otherProjects">
            {
                skill=="js" ? jsProject.map((data)=>{
                    return(<OtherProject image={data.image} description={data.description} link={data.link}/>)
                }) : skill=="java" ? javaProject.map((data)=>{
                    return(<OtherProject image={data.image} description={data.description} link={data.link}/>)
                }) : skill=="html" ? htmlProject.map((data)=>{
                    return(<OtherProject image={data.image} description={data.description} link={data.link}/>)
                }) : skill=="scratch" ? scratchProject.map((data)=>{
                    return(<OtherProject image={data.image} description={data.description} link={data.link}/>)
                }) : reactProject.map((data)=>{
                    return(<OtherProject image={data.image} description={data.description} link={data.link}/>)
                }) 
            }
        </div>
    )
}