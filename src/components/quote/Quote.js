import { useEffect, useState } from "react";
import { getAllQuotes } from "../../modules/QuoteManager";

export const QuoteItem = () => {
  // the initial state is an empty array
  const [quote, changeQuote] = useState([]);

  // the initial state of a single quote is an object
  const [singleQuote, changeSingle] = useState({});

  const randomNum = () => {
    return Math.floor(Math.random() * quote.length);
  };

  // event listener for the new quote button
  const newButton = () => {
    changeSingle(quote[randomNum()]);
  };

  // Get a single quote from the parsed results of getQuotes()
  // Run the random options on the parsed results of getQuotes()
  // Return a single quote item
  const getAQuote = () => {
    return getAllQuotes().then((quotesFromAPI) => {
      changeQuote(quotesFromAPI);
      changeSingle(quotesFromAPI[randomNum()]);
    });
  };

  // get the quotes from the API on the component's first render th
  useEffect(() => {
    getAQuote();
  }, []);

  // finally, use .map() to loop over the animals array to show a single Quote card
  return (
    <div className="container-cards">
      <blockquote className="quote__element">
        <p className="quote__text">{singleQuote.text}</p>
        <cite className="quote__author">&mdash;{singleQuote.author}</cite>
      </blockquote>
      <button className="button" onClick={newButton}>Random Quote</button>
    </div>
  );
};
