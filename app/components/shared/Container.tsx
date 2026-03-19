/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
  'aria-labelledby'?: string;
}

const Container = forwardRef<any, ContainerProps>(
  ({ 
    children, 
    className = '', 
    as: Component = 'div',
    id,
    'aria-labelledby': ariaLabelledby,
    ...props 
  }, ref) => {
    const containerClasses = [
      'container-elegant',
      className
    ].filter(Boolean).join(' ');

    return (
      <Component
        ref={ref}
        className={containerClasses}
        id={id}
        aria-labelledby={ariaLabelledby}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;