import "../portfolio.css";

export default function Header()
{
    return(
        <div id="header">
            <div id="name">
                <h1>Vennila</h1>
            </div>
            <div id="headerDetails">
                <a href="#wholeDiv"><p style={{fontSize:"18px"}}>Home</p></a>
                <a href="#projects"><p style={{fontSize:"18px"}}>Projects</p></a>
                <a href="#skills"><p style={{fontSize:"18px"}}>Skills</p></a>
                <a href="#other_project"><p style={{fontSize:"18px"}}>Other projects</p></a>
            </div>
        </div>
    )
}
