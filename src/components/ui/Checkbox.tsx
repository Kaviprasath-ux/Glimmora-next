import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Checkbox label
   */
  label?: string;
  /**
   * Checkbox size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'medium',
      error = false,
      errorMessage,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const containerClasses = [
      styles.container,
      styles[size],
      error && styles.error,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const iconSize = size === 'small' ? 10 : size === 'large' ? 16 : 14;

    return (
      <div>
        <label className={containerClasses}>
          <div className={styles.checkboxWrapper}>
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={styles.checkbox}
              disabled={disabled}
              aria-invalid={error}
              aria-describedby={errorMessage ? `${checkboxId}-error` : undefined}
              {...props}
            />
            <span className={styles.checkboxBox}>
              <Check size={iconSize} className={styles.checkIcon} />
            </span>
          </div>
          {label && <span className={styles.label}>{label}</span>}
        </label>
        {errorMessage && (
          <div id={`${checkboxId}-error`} className={styles.errorMessage} role="alert">
            <AlertCircle size={12} />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
