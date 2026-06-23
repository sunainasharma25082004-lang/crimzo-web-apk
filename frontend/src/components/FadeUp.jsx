export default function FadeUp({ children, className = '', delay }) {
  const delayClass = delay ? `delay-${delay}` : '';
  return <div className={`fade-up ${delayClass} ${className}`.trim()}>{children}</div>;
}