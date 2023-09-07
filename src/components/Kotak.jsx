export default function Kotak({ children, style }) {
  console.log(children);
  return <div className={style}>{children}</div>;
}
