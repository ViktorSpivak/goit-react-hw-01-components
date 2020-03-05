import React from "react";
import PropTypes from "prop-types";
import StatisticsElem from "./StatisticsElem";
import style from "./statistics.module.css";

const StatisticsCard = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {{ title } && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map((elem, idx) => (
          <li className={style.statisticsItem} key={idx}>
            <StatisticsElem {...elem} />
          </li>
        ))}
      </ul>
    </section>
  );
};
StatisticsCard.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};
export default StatisticsCard;
