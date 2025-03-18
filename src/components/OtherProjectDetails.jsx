import OtherProject from "./OtherProject"


export default function OtherProjectDetails({skill,setSkill})
{
    const jsProject = [
        {image:"rock_paper_scissor.png",name:"Rock Paper Scissor",description:"Rock Paper Scissors is a game where you choose rock, paper, or scissors to win.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment023/game.html"},
        {image:"mastermind.png",name:"Mastermind",description:"Mastermind is a game where you guess a secret code using logic.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsProject/masterMind.html"},
        {image:"tipCalculator.png",name:"Tip Calculator",description:"A tip calculator helps you calculate the tip amount.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment024/tip.html"},
        {image:"calculator.png",name:"Calculator",description:"A calculator is a tool for solving math problems.",link:"https://vennilavennila-6404-8443.zcodeusers.in/jsAssignment021/calculator.html"},
        {image:"data:image/jpeg;base64,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",name:"Filter Fun",description:"Filter Fun is an app that applies cool filters to photos.",link:"https://vennilavennila-6404-8443.zcodeusers.in/course/miniProject.html"}
    ]

    const reactProject = [
        {image:"onlinemeeting.jpg",name:"Kathaikalaam",description:"An online meeting is a virtual gathering using the internet.",link:"https://github.com/kesavan06/kathaikalaam-online-meeting"},
        {image:"game.png",name:"Rock Paper Scissors",description:"Rock Paper Scissors is a game where you choose rock, paper, or scissors to win.",link:"https://rock-paper-scissor-1-opku.onrender.com/"},
        {image:"https://img.freepik.com/free-vector/solar-system-background_1284-12725.jpg",name:"Solar System",description:"A solar system website is a site that provides information about the planets.",link:"https://solar-system-lmy9.onrender.com/"},
        {image:"recording.png",name:"Screen Recorder",description:"A screen recorder extension is a browser add-on that records your screen.",link:"https://github.com/Vennila384/extension"}
    ]

    const javaProject = [
        {image:"bookStore.png",name:"Online book store",description:"An online bookstore is a website where you can buy books.",link:"https://github.com/Vennila384/OnlineBookStore"},
        {image:"https://happay.com/blog/wp-content/uploads/sites/12/2022/09/baas-banking-as-a-service-.png",name:"Bank Application",description:"A simple bank application helps you check balances, transfer money, and manage accounts.",link:"https://github.com/Vennila384/BankAccount"}
    ]

    const scratchProject = [
        {image:"quiz.png",description:"A quiz application is a fun game with many categories where you answer questions.",name:"Quiz",link:"https://scratch.mit.edu/projects/1041097324"},
        {image:"spiral.png",description:"Spiral drawing is an art technique that creates curved, looping patterns.",name:"Spiral Drawing",link:"https://scratch.mit.edu/projects/1030484448"},
        {image:"calendar.png",description:"A day finder is a tool that tells you the day of the week for any date.",name:"Day Finder",link:"https://scratch.mit.edu/projects/1034779853"},
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