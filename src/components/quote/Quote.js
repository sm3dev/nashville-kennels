import { useEffect, useState } from "react";
import { getAllQuotes } from "../../modules/QuoteManager";
import "./Quote.css"
import { QuoteCard } from "./QuoteCard";

export const QuoteItem = () => {
  // the initial state is an empty array
  const [quotes, setQuotes] = useState([]);

  // the initial state of a single quote is an object
  const [quote, setQuote] = useState({});

  const randomNum = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  // event listener for the new quote button
  const newButton = () => {
    setQuote(quotes[randomNum()]);
  };

  // Get a single quote from the parsed results of getQuotes()
  // Run the random options on the parsed results of getQuotes()
  // Return a single quote item
  const getAQuote = () => {
    return getAllQuotes().then((quotesFromAPI) => {
        setQuotes(quotesFromAPI);
      setQuote(quotesFromAPI[randomNum()]);
    });
  };

  // get the quotes from the API on the component's first render th
  useEffect(() => {
    getAQuote();
  }, []);

  // finally, use .map() to loop over the animals array to show a single Quote card
  return (
    <div className="container-cards">
        {quotes.length > 0 ? <QuoteCard quote={quotes[randomNum()]} /> : <em>loading quotes</em>}
      
      <button className="button" onClick={newButton}>Random Quote</button>
    </div>
  );
};
