import React, {useState, useEffect} from "react";
import "../Quote_Generator/Quote.module.css"

function getRandomQuote(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)];
   }


export default function Quote(){

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);


   useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
    });
   }, []);

   function getNewQuote(){
    setQuote(getRandomQuote(quotes));
   }

   return (
    <main>
        <h1>Alex's Quote Genertator</h1>
        <section>
            <button onClick={getNewQuote}>New Quote</button>
             <h3>
                <span>"</span>
                {quote?.text}"
             </h3>
             <i>- {quote?.author}</i>
        </section>
    </main>
   );

}
