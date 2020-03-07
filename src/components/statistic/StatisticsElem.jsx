import React from "react";
import PropTypes from "prop-types";
import style from "./statistics.module.css";

const StatisticsElem = ({ label, percentage }) => (
  <li className={style.statisticsItem}>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </li>
);
StatisticsElem.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};
export default StatisticsElem;
