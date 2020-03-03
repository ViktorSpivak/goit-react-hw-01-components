import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./styles/statistics.module.css";

const StatisticsElem = ({ id, label, percentage }) => (
  <Fragment>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </Fragment>
);
StatisticsElem.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};
export default StatisticsElem;
