import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./transaction.module.css";

const TransactionsTable = ({ type, amount, currency, idx }) => {
  const colorLine = idx % 2 === 0 ? "white" : "lightcoral";
  return (
    <Fragment>
      <td className={style.transactionLine} bgcolor={colorLine} width="200">
        {type}
      </td>
      <td className={style.transactionLine} bgcolor={colorLine} width="200">
        {amount}
      </td>
      <td className={style.transactionLine} bgcolor={colorLine} width="200">
        {currency}
      </td>
    </Fragment>
  );
};

TransactionsTable.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string
};
export default TransactionsTable;
