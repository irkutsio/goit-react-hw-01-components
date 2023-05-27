import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className="title">Upload stats</h2>}
        <ul className={css.stat_list}>
          {stats.map(stat => (
            <li key={stat.id} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
