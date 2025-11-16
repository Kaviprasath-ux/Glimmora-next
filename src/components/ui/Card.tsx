import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   */
  variant?: 'elevated' | 'outlined' | 'flat';
  /**
   * Padding size
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Hoverable effect
   */
  hoverable?: boolean;
  /**
   * Clickable effect
   */
  clickable?: boolean;
  /**
   * Card children
   */
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'medium',
      hoverable = false,
      clickable = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const paddingClass =
      padding === 'none'
        ? styles.noPadding
        : padding === 'small'
        ? styles.smallPadding
        : padding === 'large'
        ? styles.largePadding
        : styles.mediumPadding;

    const cardClasses = [
      styles.card,
      styles[variant],
      paddingClass,
      hoverable && styles.hoverable,
      clickable && styles.clickable,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={cardClasses} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => {
  return (
    <div className={`${styles.header} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ className, children, ...props }) => {
  return (
    <div className={`${styles.body} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, children, ...props }) => {
  return (
    <div className={`${styles.footer} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';

export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className, ...props }) => {
  return (
    <div className={`${styles.image} ${className || ''}`} {...props}>
      <img src={src} alt={alt} />
    </div>
  );
};

CardImage.displayName = 'CardImage';

export default Card;
