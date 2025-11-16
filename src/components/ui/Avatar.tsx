import React from 'react';
import { User } from 'lucide-react';
import styles from './Avatar.module.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar size
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Avatar shape
   */
  shape?: 'circular' | 'rounded' | 'square';
  /**
   * Image source
   */
  src?: string;
  /**
   * Alt text for image
   */
  alt?: string;
  /**
   * Initials to display (if no image)
   */
  initials?: string;
  /**
   * Status indicator
   */
  status?: 'online' | 'offline' | 'busy' | 'away';
  /**
   * Icon to display (if no image or initials)
   */
  icon?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = 'medium',
      shape = 'circular',
      src,
      alt = 'Avatar',
      initials,
      status,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const getInitials = (text: string): string => {
      const words = text.trim().split(' ');
      if (words.length >= 2) {
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
      }
      return text.slice(0, 2).toUpperCase();
    };

    const displayInitials = initials ? getInitials(initials) : null;

    const avatarClasses = [
      styles.avatar,
      styles[size],
      styles[shape],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const statusClass = status
      ? styles[`status${status.charAt(0).toUpperCase()}${status.slice(1)}`]
      : '';

    return (
      <div ref={ref} className={avatarClasses} {...props}>
        {src ? (
          <img src={src} alt={alt} />
        ) : displayInitials ? (
          <span>{displayInitials}</span>
        ) : icon ? (
          icon
        ) : (
          <User size={size === 'small' ? 16 : size === 'large' ? 24 : size === 'xlarge' ? 32 : 20} />
        )}
        {status && <span className={`${styles.statusIndicator} ${statusClass}`} />}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum number of avatars to show
   */
  max?: number;
  /**
   * Size of avatars
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Children (Avatar components)
   */
  children: React.ReactNode;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  max = 5,
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const displayedChildren = max ? childrenArray.slice(0, max) : childrenArray;
  const remainingCount = childrenArray.length - displayedChildren.length;

  return (
    <div className={`${styles.avatarGroup} ${className || ''}`} {...props}>
      {displayedChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { key: index, size } as any);
        }
        return child;
      })}
      {remainingCount > 0 && (
        <Avatar size={size} initials={`+${remainingCount}`} />
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export default Avatar;
