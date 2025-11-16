import React from 'react';
import styles from './Grid.module.css';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns
   */
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  /**
   * Gap size
   */
  gap?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Children
   */
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 1, gap = 'medium', className, children, ...props }, ref) => {
    const gapClass = `gap${gap.charAt(0).toUpperCase()}${gap.slice(1)}`;

    const gridClasses = [
      styles.grid,
      styles[`cols${cols}`],
      styles[gapClass],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

export default Grid;
