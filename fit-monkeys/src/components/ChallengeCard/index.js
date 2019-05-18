import React from "react";
import "./ChallengeCard.css";
import img from '../../Images/banana3.png'

function ChallengeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Challenge:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                    <li>
                        <strong>Bananas:</strong>
                         {/* {props.bananas} */}
                         {(() => {
                             return new Array(props.bananas).fill(
                                <img alt={props.name} src={img} />
                             )
                         })()}
                    </li>
                </ul>
            </div>
            =
      </div>
    );
}

export default ChallengeCard;