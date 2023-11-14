import PropTypes from "prop-types";
import { useState } from "react";

export function ButtonVote({ name }) {
  //let votes = 0;
  let [votes, setVote] = useState(0);

  function onClick() {
    setVote(votes + 1);
    //votes += 1;
    console.log(`Voted for ${name} votes=${votes}`);
  }
  console.log("render buttonVote", name, votes);
  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={onClick}>
        vote for {name}
      </button>
      <output>
        {name} has {votes} votes
      </output>
    </div>
  );
}
ButtonVote.propTypes = {
  name: PropTypes.string.isRequired,
};
