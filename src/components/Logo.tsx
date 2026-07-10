type LogoProps = {
  light?: boolean;
};

export function LogoMark({ light = false }: LogoProps) {
  const fill = light ? "#fff7ea" : "#2f3f2d";
  const foreground = light ? "#2f3f2d" : "#fff7ea";
  const leaf = light ? "rgba(255,247,234,0.62)" : "#dce4d0";

  return (
    <svg className="logo-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill={fill} />
      <path
        d="M20 30C20 30 13 24.2 13 18.1C13 13.6 16.4 10 20 10C23.6 10 27 13.6 27 18.1C27 24.2 20 30 20 30Z"
        fill={foreground}
      />
      <path d="M20 30V14" stroke="#c76a35" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 22C17 20 14 20 14 17" stroke={leaf} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M20 19C23 17 26 17 26 14" stroke={leaf} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="20" cy="13" r="2" fill="#c76a35" />
    </svg>
  );
}

export function Logo({ light = false }: LogoProps) {
  return (
    <a className="brand" href="#top" aria-label="Olive & Ember home">
      <LogoMark light={light} />
      <span className="brand-copy">
        <strong>Olive &amp; Ember</strong>
        <span>Mediterranean Kitchen</span>
      </span>
    </a>
  );
}
