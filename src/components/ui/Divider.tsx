import React from 'react';
import styles from './Divider.module.css';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Divider orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Divider spacing
   */
  spacing?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Divider variant
   */
  variant?: 'light' | 'medium' | 'dark';
  /**
   * Text to display in divider
   */
  text?: string;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      spacing = 'medium',
      variant = 'light',
      text,
      className,
      ...props
    },
    ref
  ) => {
    const spacingClass = `spacing${spacing.charAt(0).toUpperCase()}${spacing.slice(1)}`;

    const dividerClasses = [
      styles.divider,
      styles[orientation],
      styles[spacingClass],
      styles[variant],
      text && styles.withText,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if (text && orientation === 'horizontal') {
      return (
        <div className={dividerClasses} role="separator" {...props}>
          <span className={styles.text}>{text}</span>
        </div>
      );
    }

    return <hr ref={ref} className={dividerClasses} role="separator" {...props} />;
  }
);

Divider.displayName = 'Divider';

export default Divider;
