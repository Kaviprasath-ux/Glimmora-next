import React from 'react';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container max width
   */
  maxWidth?: 'small' | 'medium' | 'large' | 'fluid';
  /**
   * Children
   */
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = 'large', className, children, ...props }, ref) => {
    const containerClasses = [
      styles.container,
      styles[maxWidth],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
