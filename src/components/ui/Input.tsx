import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from './Input.module.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input label
   */
  label?: string;
  /**
   * Input size
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
  /**
   * Success state
   */
  success?: boolean;
  /**
   * Helper text
   */
  helperText?: string;
  /**
   * Icon to display at start
   */
  startIcon?: React.ReactNode;
  /**
   * Icon to display at end
   */
  endIcon?: React.ReactNode;
  /**
   * Required field indicator
   */
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'large',
      error = false,
      errorMessage,
      success = false,
      helperText,
      startIcon,
      endIcon,
      required = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = [
      styles.input,
      styles[size],
      error && styles.error,
      success && styles.success,
      startIcon && styles.withStartIcon,
      endIcon && styles.withEndIcon,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.inputWrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.inputContainer}>
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={error}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            required={required}
            {...props}
          />
          {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </div>
        {errorMessage && (
          <div id={`${inputId}-error`} className={styles.errorMessage} role="alert">
            <AlertCircle size={12} />
            <span>{errorMessage}</span>
          </div>
        )}
        {helperText && !errorMessage && (
          <div id={`${inputId}-helper`} className={styles.helperText}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
