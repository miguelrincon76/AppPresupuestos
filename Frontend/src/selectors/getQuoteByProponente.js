import { Apiurl } from "../services/apiusuarios";
import axios from "axios";
import { quotes } from "../data/quotes";

export const getQuoteByProponente = (proponenteId) => {
  // let quotes =| () => {
  //   let url = Apiurl + "/cotizaciones/";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       this.setState({
  //         quote: res.data,
  //       });
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return quotes.filter((quote) => quote.proponenteId === proponenteId);
};
