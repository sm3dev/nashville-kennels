import React from "react";

export const QuoteCard = ({ oneQuote }) => (
  <blockquote className="quote__element">
  <p className="quote__text">{oneQuote.text}</p>
  <cite className="quote__author">Breed: {oneQuote.author}</cite>
</blockquote>
)