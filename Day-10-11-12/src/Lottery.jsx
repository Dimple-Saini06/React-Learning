import { useState } from 'react';
import './Lottery.css'
import { genTicket, sum } from './helper.js'
import Ticket from './Ticket.jsx'

export default function Lottery({n=3, winningSum=15}) {
    // let [random, setRandom] = useState(Math.floor(Math.random() * 900) + 100);
    // let [result, setResult] = useState("Lottery");

    // function printResult(digitSum){
    //     if(digitSum == 15){
    //         setResult("Lottery 'Congratulation, you won!'");
    //     }else{
    //         setResult('Lottery');
    //     }
    // }

    // function checkCond(count){
    //     console.log(count);
    //     const hundreds = Math.floor(random / 100);
    //     const tens = Math.floor((random % 100) / 10);
    //     const ones = random % 10;
    //     const digitSum = hundreds + tens + ones;
    //     console.log(digitSum);
    //     printResult(digitSum);
    // }

    // function randomNum() {
    //     let count = Math.floor(Math.random() * 900) + 100
    //     setRandom(count);
    //     checkCond(count);
    // }

    // return(
    //     <div>
        //     <h2>
        //         {result}
        //     </h2>
        //     <h3>Lottery Ticket = {random}</h3>
        //     <button onClick={randomNum}>Get New Ticket</button>
        // </div>
    // )
    
    // let [ticket, setTicket] = useState(genTicket(3));
    // let isWinning = sum(ticket) === 15;

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}