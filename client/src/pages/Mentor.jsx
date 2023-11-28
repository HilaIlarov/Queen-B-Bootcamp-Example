import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";
import DOMPurify from "dompurify";

const Mentor = () => {
    const [mentor, setMentor] = useState({});

    const  location = useLocation();

    const mentorId = location.pathname.split("/")[1];
    console.log("hey?   ############");

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/mentors/${mentorId}`);
                setMentor(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [mentorId]);

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="Mentor">
            <div className="content">
                <img src={`${mentor.img}`} alt="" />
                <h1>{getText(mentor.first_name)} {getText(mentor.last_name)}</h1>
                <p>{getText(mentor.profession)}</p>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(mentor.description),
                    }}
                ></p>
                <div className="media">
                    <a href={mentor.instagram} target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://www.pngkit.com/png/full/1-13187_instagram-logo-new-vector-eps-free-download-logo.png"
                            alt="Instagram"
                            style={{ width: "100px", height: "100px" }} // Adjust the image size as needed
                        />
                    </a>
                </div>

            </div>
        </div>
    );

};
export default Mentor;