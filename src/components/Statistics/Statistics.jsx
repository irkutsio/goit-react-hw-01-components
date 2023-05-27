import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span
              className={css.percentage}
              style={{
                background: `${getRandomHexColor()}`,
              }}
            >
              {stat.percentage}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
