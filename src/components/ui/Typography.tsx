import React from 'react';
import styles from './Typography.module.css';

export interface TypographyProps {
  /**
   * Typography variant
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline';
  /**
   * Color variant
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'white'
    | 'brand'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * No wrap text
   */
  noWrap?: boolean;
  /**
   * Add bottom margin
   */
  gutterBottom?: boolean;
  /**
   * Component to render
   */
  component?: React.ElementType;
  /**
   * Children
   */
  children: React.ReactNode;
  /**
   * Additional className
   */
  className?: string;
}

const variantMapping: Record<string, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
  caption: 'span',
  overline: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color,
  align,
  noWrap = false,
  gutterBottom = false,
  component,
  className,
  children,
  ...props
}) => {
  const Component = component || variantMapping[variant] || 'p';

  const colorClass = color ? `color${color.charAt(0).toUpperCase()}${color.slice(1)}` : '';
  const alignClass = align ? `align${align.charAt(0).toUpperCase()}${align.slice(1)}` : '';

  const classes = [
    styles.typography,
    styles[variant],
    colorClass && styles[colorClass],
    alignClass && styles[alignClass],
    noWrap && styles.noWrap,
    gutterBottom && styles.gutterBottom,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Convenience components
export const Heading1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h1" {...props} />
);

export const Heading2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h2" {...props} />
);

export const Heading3: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h3" {...props} />
);

export const Heading4: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h4" {...props} />
);

export const Heading5: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h5" {...props} />
);

export const Heading6: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="h6" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body1" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
);

export default Typography;
