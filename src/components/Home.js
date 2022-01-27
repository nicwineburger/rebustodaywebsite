import React, { useEffect, useState } from 'react';
import './Home.css'


function Home(props) {
    const [todayDate, setTodayDate] = useState("");
    const [isRebus, setIsRebus] = useState("");
    const [crosswordURL, setCrossWordURL] = useState("");

    async function getRSSdata() {
        let today = new Date();
        let year = `${today.getFullYear()}`;
        let monthUnchecked = (today.getMonth() + 1);
        let dayUnchecked = today.getDate();
        
        let month;
        if (monthUnchecked <= 9) {
            month = `0${monthUnchecked}`;
        } else {
            month = `${monthUnchecked}`;
        }

        let day;
        if (dayUnchecked <= 9) {
            day = `0${monthUnchecked}`;
        } else {
            day = `${dayUnchecked}`;
        }

        // All of this will likely break on year change overs and month change overs
        // Don't have a solution right now but will fix it eventually

        let date = `${year}-${month}-${day}`;
        setTodayDate(date);
        setCrossWordURL(`https://www.nytimes.com/crosswords/game/daily/${year}/${month}/${day}`);
        
        let todayURL = `https://waypointanywhere.herokuapp.com/https://www.nytimes.com/${year}/${month}/${day - 1}/crosswords/daily-puzzle-${year}-${month}-${day}.html`;

        let response = await fetch(todayURL, {
            mode: 'cors'
        })

        let pageHTML = await response.text();
        if (pageHTML.includes("rebus")) {
            setIsRebus("YES");
        } else {
            setIsRebus("NO")
        }
    }

    useEffect(() => {
        getRSSdata();
    }, [])
    return (
        <div id="text">
            <p>Does the New York Times Crossword for <a href={crosswordURL}>{todayDate}</a> have a rebus?</p>
            <div id="newNumber">
               {isRebus}
            </div>
        </div>

    );
}

export default Home;