import './FigmaButton.css';

export default function FigmaButton({ children, onClick, type = 'button' }) {
  return (
    <button className="figma-btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
