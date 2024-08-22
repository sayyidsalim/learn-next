export default function Button({ children, className, id, type, click }) {
  return (
    <button type={type} className={className} id={id} onClick={click}>
      {children}
    </button>
  );
}
