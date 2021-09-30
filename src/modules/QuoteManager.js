export const getAllQuotes = () => {
  // get quotes from the free API https://type.fit/api/quotes
  return fetch(`https://type.fit/api/quotes`).then((res) => res.json());
};
