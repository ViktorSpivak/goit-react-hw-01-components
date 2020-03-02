import React from "react";
import StatisticsElem from "./StatisticsElem";
import style from "./styles/statistics.module.css";

const StatisticsCard = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {{ title } && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        <StatisticsElem stats={stats} />
      </ul>
    </section>
  );
};
export default StatisticsCard;
