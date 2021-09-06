import React from "react";
import { connect } from "react-redux";
import { map } from "lodash";
import { Name } from "./name";
import { MyVote } from "./myVote";
import { OtherVote } from "./otherVote";

const vote = user => participant => {
  let isCurrentUser = participant.id === user.id;
  return (
    <tr key={participant.id} className="vote">
      <td className="participant">
        {isCurrentUser ? <Name /> : participant.name || "anon"}
      </td>
      <td className="value">
        {isCurrentUser ? (
          <MyVote participant={participant} />
        ) : (
          <OtherVote participant={participant} />
        )}
      </td>
    </tr>
  );
};

const view = ({ participants, user, nextRound }) => (
  <table className="votes">
    {map(participants, vote(user))}
    <tr className="next-round">
      <td>
        <button className="next-round" onClick={nextRound}>Next round!</button>
        <small>facilitator only</small>
      </td>
    </tr>
  </table>
);

const mapToProps = ({ participants, user }) => ({
  participants,
  user
});

const mapToDispatch = dispatch => ({
  nextRound: () => {
    dispatch({
      type: "NEXT"
    });
  }
});

export const Votes = connect(mapToProps, mapToDispatch)(view);
