import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Mentors = () => {
    const [mentors, setMentors] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const res = await axios.get("/mentors");
                setMentors(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, []);
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="Mentors">
            <div className="members">
                {mentors.map((mentor) => (
                    <div className="member" key={mentor.mentor_id}>
                        <div className="img">
                            <Link className="link" to={`/${mentor.mentor_id}`}>
                                <img src={`${mentor.img}`} alt="" />
                            </Link>
                        </div>
                        <div className="content">
                            <p>{getText(mentor.first_name)} {getText(mentor.last_name)}</p>
                            <p>{getText(mentor.profession)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mentors;