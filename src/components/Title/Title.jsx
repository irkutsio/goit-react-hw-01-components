import css from './Title.module.css';

export const Title = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};
