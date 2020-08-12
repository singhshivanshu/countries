import React from "react";

function Card(props) {
  const { name, alpha3Code, region } = props.datum;


  return (
    <div className="card" onClick={() => window.location.href = `${alpha3Code}/country` }>
      <div className="card-heading">{name}</div>
      <div className="card-body">
        <table>
          <tbody>
            <tr className="card-table">
              <th>Country code:</th>
              <th>{alpha3Code}</th>
            </tr>

            <tr className="card-table">
              <th>Region:</th>
              <th>{region}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
