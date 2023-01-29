import React from "react";

const Grid = ({ column }) => {
  return (
    <table className="table">
      <thread>
        <tr>
          {column.map((column) => {
            <th>{column.title}</th>;
          })}
        </tr>
      </thread>
      <tbody>
        <tr>
          <td className="">Caca</td>
          <td className="">pipi</td>
          <td className="">coucou</td>
          <td className="">proute</td>
          <td className="">proute</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Grid;
