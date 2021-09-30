import React from "react";

export const QuoteCard = ({ quote }) => (
  <blockquote className="quote__element">
  <p className="quote__text">{quote.text}</p>
  <cite className="quote__author">  &mdash;{quote.author}</cite>
</blockquote>
)