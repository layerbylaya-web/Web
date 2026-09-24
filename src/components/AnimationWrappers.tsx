import type { CSSProperties, ReactNode } from 'react';

interface WrapperProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

const delayedStyle = (delay: number): CSSProperties => ({
  animationDelay: `${Math.max(0, delay)}s`,
});

export function FadeIn({ children, className = '', delay = 0 }: WrapperProps) {
  return (
    <div className={`reveal-soft ${className}`} style={delayedStyle(delay)}>
      {children}
    </div>
  );
}

export function SlideUp({ children, className = '', delay = 0 }: WrapperProps) {
  return (
    <div className={`reveal-rise ${className}`} style={delayedStyle(delay)}>
      {children}
    </div>
  );
}

export function SlowScale({ children, className = '', delay = 0 }: WrapperProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="slow-scale-media h-full w-full" style={delayedStyle(delay)}>
        {children}
      </div>
    </div>
  );
}

export function StaggerContainer({ children, className = '' }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = '' }: WrapperProps) {
  return <div className={`reveal-rise ${className}`}>{children}</div>;
}

export function GoldLine({ className = '', delay = 0 }: WrapperProps) {
  return (
    <div
      aria-hidden="true"
      className={`gold-line-reveal h-px origin-left bg-metallic-gold/40 ${className}`}
      style={delayedStyle(delay)}
    />
  );
}
