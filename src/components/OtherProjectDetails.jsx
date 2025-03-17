import OtherProject from "./OtherProject"


export default function OtherProjectDetails({skill,setSkill})
{
    const jsProject = [
        {image:"rock_paper_scissor.png",name:"Rock Paper Scissor",description:"Rock Paper Scissors is a game where you choose rock, paper, or scissors to win.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment023/game.html"},
        {image:"mastermind.png",name:"Mastermind",description:"Mastermind is a game where you guess a secret code using logic.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsProject/masterMind.html"},
        {image:"tipCalculator.png",name:"Tip Calculator",description:"A tip calculator helps you calculate the tip amount.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment024/tip.html"},
        {image:"calculator.png",name:"Calculator",description:"A calculator is a tool for solving math problems.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment021/calculator.html"}
    ]

    const reactProject = [
        {image:"onlinemeeting.jpg",name:"Kathaikalaam",description:"An online meeting is a virtual gathering using the internet.",link:"https://github.com/kesavan06/kathaikalaam-online-meeting"}
    ]

    const javaProject = [
        {image:"bookStore.png",name:"Online book store",description:"An online bookstore is a website where you can buy books.",link:"https://github.com/Vennila384/OnlineBookStore"}
    ]

    const scratchProject = [
        {image:"quiz.png",description:"A quiz application is a fun game with many categories where you answer questions.",name:"Quiz",link:"https://scratch.mit.edu/projects/1041097324"},
        {image:"spiral.png",description:"Spiral drawing is an art technique that creates curved, looping patterns.",name:"Spiral Drawing",link:"https://scratch.mit.edu/projects/1030484448"},
        {image:"calendar.png",description:"A day finder is a tool that tells you the day of the week for any date.",name:"Day Finder",link:"https://scratch.mit.edu/projects/1034779853"},
        // {image:"",description:"",name:"Drawing Shapes",link:"https://scratch.mit.edu/projects/1035635393"},
        {image:"guess-the-number.png",description:"Guess the Number is a game where you try to find a hidden number with hints.",name:"Guess the Number",link:"https://scratch.mit.edu/projects/1028896818"}
    ]

    const htmlProject = [
        {image:"breezy.png",name:"Breezy.hr",description:"Breezy.hr is a website for hiring and managing job applications.",link:"https://vennilavennila-6404-8443.zcodeusers.in/htmlproject/main.html"},
        {image:"vortex.jpg",description:"Vortex by Pixelarity",name:"Vortex",link:"https://vennilavennila-6404-8443.zcodeusers.in/Assignment015/page1.html"},
        {image:"magnetic.jpg",description:"Magnetic by Pixelarity",name:"Magnetic",link:"https://vennilavennila-6404-8443.zcodeusers.in/Assignment010/magnetic.html"},
        {image:"cascade.jpg",description:"Cascade by Pixelarity",name:"Cascade",link:"https://vennilavennila-6404-8443.zcodeusers.in/Assignment018/page2.html"},
        {image:"hyperspace.jpg",description:"Hyperspace is a sleek and modern website template designed for startups and businesses.",name:"Hyperspace",link:"https://vennilavennila-6404-8443.zcodeusers.in/Assignment019/page1.html"},
        {image:"3d.png",description:"A 3D rotating cube is an effect where a cube spins, showing family photos on its sides.",name:"Cube",link:"https://vennilavennila-6404-8443.zcodeusers.in/Assignment022/cube.html"}
    ]

    return(
        <div id="otherProjects">
            {
                skill=="js" ? jsProject.map((data)=>{
                    return(<OtherProject image={data.image} name={data.name} description={data.description} link={data.link}/>)
                }) : skill=="java" ? javaProject.map((data)=>{
                    return(<OtherProject image={data.image} name={data.name} description={data.description} link={data.link}/>)
                }) : skill=="html" ? htmlProject.map((data)=>{
                    return(<OtherProject image={data.image} name={data.name} description={data.description} link={data.link}/>)
                }) : skill=="scratch" ? scratchProject.map((data)=>{
                    return(<OtherProject image={data.image} name={data.name} description={data.description} link={data.link}/>)
                }) : reactProject.map((data)=>{
                    return(<OtherProject image={data.image} name={data.name} description={data.description} link={data.link}/>)
                }) 
            }
        </div>
    )
}