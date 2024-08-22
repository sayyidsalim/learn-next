export default function Button({ text, className, id, type, click }) {
  return (
    <button type={type} className={className} id={id} onClick={click}>
      {text}
    </button>
  );
}
