//servicios
//import { Apiurl } from "../../services/apiusuarios";

import { quotes } from "../data/quotes";

export const getQuoteById = (id = "") => {
  return quotes.find((quote) => quote.id === id);
};
