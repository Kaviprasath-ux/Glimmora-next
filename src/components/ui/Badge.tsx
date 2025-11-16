import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge variant
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'successLight'
    | 'warning'
    | 'warningLight'
    | 'error'
    | 'errorLight'
    | 'info'
    | 'infoLight';
  /**
   * Badge size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Outlined style
   */
  outlined?: boolean;
  /**
   * Dot style (no text)
   */
  dot?: boolean;
  /**
   * Icon to display
   */
  icon?: React.ReactNode;
  /**
   * Badge children
   */
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      outlined = false,
      dot = false,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const badgeClasses = [
      styles.badge,
      styles[variant],
      styles[size],
      outlined && styles.outlined,
      dot && styles.dot,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={badgeClasses} {...props}>
        {!dot && (
          <>
            {icon && <span>{icon}</span>}
            {children}
          </>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
