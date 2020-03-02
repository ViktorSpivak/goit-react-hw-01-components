import React from "react";
import style from "./styles/transaction.module.css";
const TransactionsTable = ({ transactions }) =>
  transactions.map((elem, idx) => {
    const colorLine = idx % 2 === 0 ? "white" : "lightcoral";
    return (
      <tbody key={idx}>
        <tr>
          <td align="center" height="30" bgcolor={colorLine} width="200">
            {elem.type}
          </td>
          <td align="center" height="30" bgcolor={colorLine} width="200">
            {elem.amount}
          </td>
          <td align="center" height="30" bgcolor={colorLine} width="200">
            {elem.currency}
          </td>
        </tr>
      </tbody>
    );
  });

export default TransactionsTable;
