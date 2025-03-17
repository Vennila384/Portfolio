import "../portfolio.css";

export default function MyDetails()
{
    return(
        <div id="wholeDiv">
            <div id="details">
                <div id="imageDiv">
                    <img src="myImage.jpg" style={{width:"400px",height:"550px",borderRadius:"50%"}}/>
                </div>
                <div id="nameDiv">
                    <h1 style={{fontSize:"50px"}}>I'm Vennila</h1>
                    <h1 style={{fontSize:"70px"}}>A Frontend Developer</h1>
                </div>
            </div>
            {/* <div id="bgDiv"></div> */}
        </div>
        // <div className="container">
        //     <div className="left-div">Left Side</div>
        //     <div className="right-div">Right Side</div>
        // </div>
    )
}



