import React from 'react';
import styles from './Spinner.module.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Spinner size
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Spinner color variant
   */
  variant?: 'primary' | 'secondary' | 'white';
  /**
   * Text to display next to spinner
   */
  text?: string;
  /**
   * Center spinner in container
   */
  centered?: boolean;
  /**
   * Show as full page overlay
   */
  overlay?: boolean;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = 'medium',
      variant = 'primary',
      text,
      centered = false,
      overlay = false,
      className,
      ...props
    },
    ref
  ) => {
    const spinnerClasses = [
      styles.spinner,
      styles[size],
      styles[variant],
    ]
      .filter(Boolean)
      .join(' ');

    const spinner = (
      <div className={spinnerClasses} role="status" aria-label="Loading">
        <span className="sr-only">Loading...</span>
      </div>
    );

    if (overlay) {
      return (
        <div className={styles.overlay} ref={ref} {...props}>
          {text ? (
            <div className={styles.container}>
              {spinner}
              {text && <span className={styles.text}>{text}</span>}
            </div>
          ) : (
            spinner
          )}
        </div>
      );
    }

    if (centered) {
      return (
        <div className={`${styles.centered} ${className || ''}`} ref={ref} {...props}>
          {text ? (
            <div className={styles.container}>
              {spinner}
              {text && <span className={styles.text}>{text}</span>}
            </div>
          ) : (
            spinner
          )}
        </div>
      );
    }

    if (text) {
      return (
        <div className={`${styles.container} ${className || ''}`} ref={ref} {...props}>
          {spinner}
          <span className={styles.text}>{text}</span>
        </div>
      );
    }

    return spinner;
  }
);

Spinner.displayName = 'Spinner';

export default Spinner;
