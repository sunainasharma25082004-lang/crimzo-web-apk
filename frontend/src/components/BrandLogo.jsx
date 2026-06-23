const LOGO_SRC = '/assets/logo.png';

export function BrandName({ className = '' }) {
  return (
    <span className={`brand-name ${className}`.trim()} aria-label="CRIMZO">
      <span className="brand-letter brand-red">C</span>
      <span className="brand-letter brand-white">R</span>
      <span className="brand-letter brand-red">I</span>
      <span className="brand-letter brand-white">M</span>
      <span className="brand-letter brand-red">Z</span>
      <span className="brand-letter brand-white">O</span>
    </span>
  );
}

export default function BrandLogo({ size = 40, showName = true, className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <img src={LOGO_SRC} alt="" width={size} height={size} aria-hidden="true" />
      {showName && <BrandName />}
    </span>
  );
}