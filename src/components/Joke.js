import { useState } from "react";
import Axios from "axios";
import LoadImg from "../images/SVG/spin_logo.svg";

function Joke() {
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");

  const getJoke = () => {
    Axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&type=twopart"
    ).then((response) => {
      setDelivery(
        <div className="loading">
          <img src={LoadImg} alt="" />
        </div>
      );
      setSetup("Q: " + response.data.setup);

      setTimeout(() => {
        setDelivery("A: " + response.data.delivery);
      }, 3000);

      console.log(response.data);
    });
  };
  console.log(setup);
  console.log(delivery);

  return (
    <section>
      <button onClick={getJoke}>Get Joke!</button>
      <div className="joke">
        <h2>{setup}</h2>
        <h2>{delivery}</h2>
      </div>
    </section>
  );
}
export default Joke;
