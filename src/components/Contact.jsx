import { FaRegIdCard } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";

export default function Contact()
{
    return(
        <div id="contact">
            <div id="empId">
                <FaRegIdCard className="icons"/>
                <p style={{color:"white",fontSize:"18px"}}>Vennila-zsttk384</p>
            </div>
            <div id="corpId">
                <CgMail className="icons"/>
                <p style={{color:"white",fontSize:"18px"}}>vennila.vennila@zohocorp.com</p>
            </div>
            <div id="mobileNumber">
                <IoCallOutline className="icons"/>
                <p style={{color:"white",fontSize:"18px"}}>9363617629</p>
            </div>
        </div>
    )
}