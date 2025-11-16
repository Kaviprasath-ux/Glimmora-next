import React from 'react';
import styles from './Flex.module.css';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Flex direction
   */
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  /**
   * Justify content
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /**
   * Align items
   */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /**
   * Flex wrap
   */
  wrap?: 'wrap' | 'noWrap' | 'wrapReverse';
  /**
   * Gap size
   */
  gap?: 'none' | 1 | 2 | 3 | 4 | 6 | 8;
  /**
   * Full width
   */
  fullWidth?: boolean;
  /**
   * Full height
   */
  fullHeight?: boolean;
  /**
   * Children
   */
  children: React.ReactNode;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      justify = 'start',
      align = 'stretch',
      wrap = 'noWrap',
      gap = 'none',
      fullWidth = false,
      fullHeight = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const directionClass = direction;
    const justifyClass = `justify${justify.charAt(0).toUpperCase()}${justify.slice(1)}`;
    const alignClass = `align${align.charAt(0).toUpperCase()}${align.slice(1)}`;
    const gapClass = gap === 'none' ? 'gapNone' : `gap${gap}`;

    const flexClasses = [
      styles.flex,
      styles[directionClass],
      styles[justifyClass],
      styles[alignClass],
      styles[wrap],
      styles[gapClass],
      fullWidth && styles.fullWidth,
      fullHeight && styles.fullHeight,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={flexClasses} {...props}>
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;
