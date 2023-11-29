import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../images/QueenB.png";
import Home from "./Home";


const Mentors = () => {
    const [mentors, setMentors] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const res = await axios.get("http://localhost:5001/mentors");
                setMentors(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <Home/>
    );
};

export default Mentors;