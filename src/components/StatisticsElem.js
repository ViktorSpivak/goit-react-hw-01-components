import React from "react";
import style from "./styles/statistics.module.css";
const StatisticsElem = ({ stats }) =>
  stats.map(
    (elem, idx) =>
      (elem = (
        <li className={style.statisticsItem} key={idx}>
          <span className={style.label}>{elem.label}</span>
          <span className={style.percentage}>{elem.percentage}%</span>
        </li>
      ))
  );

export default StatisticsElem;
