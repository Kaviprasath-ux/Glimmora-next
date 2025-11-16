import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from './Form.module.css';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children (usually Input, Checkbox, etc.)
   */
  children: React.ReactNode;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.formField} ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Label text
   */
  children: React.ReactNode;
  /**
   * Required field indicator
   */
  required?: boolean;
}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ required = false, className, children, ...props }, ref) => {
    return (
      <label ref={ref} className={`${styles.formLabel} ${className || ''}`} {...props}>
        {children}
        {required && <span className={styles.required}>*</span>}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';

export interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Error message
   */
  children: React.ReactNode;
}

export const FormError = React.forwardRef<HTMLDivElement, FormErrorProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.formError} ${className || ''}`} role="alert" {...props}>
        <AlertCircle size={12} />
        <span>{children}</span>
      </div>
    );
  }
);

FormError.displayName = 'FormError';

export interface FormHelperTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Helper text
   */
  children: React.ReactNode;
}

export const FormHelperText = React.forwardRef<HTMLDivElement, FormHelperTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.formHelperText} ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

FormHelperText.displayName = 'FormHelperText';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children (FormField components)
   */
  children: React.ReactNode;
}

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.formGroup} ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

FormGroup.displayName = 'FormGroup';

export interface FormRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children (FormField components)
   */
  children: React.ReactNode;
}

export const FormRow = React.forwardRef<HTMLDivElement, FormRowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.formRow} ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

FormRow.displayName = 'FormRow';

export default {
  FormField,
  FormLabel,
  FormError,
  FormHelperText,
  FormGroup,
  FormRow,
};
