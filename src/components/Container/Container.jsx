import style from './Conatainer';
export const Conatainer = ({ children }) => {
  return <div className={style.conatainer}>{children}</div>;
};
