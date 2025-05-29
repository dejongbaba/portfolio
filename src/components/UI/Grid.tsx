import React from 'react';
import { cn } from '../../lib/utils';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('grid grid-cols-12 gap-4', className)} {...props}>
      {children}
    </div>
  );
};

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex flex-wrap mx-4', className)} {...props}>
      {children}
    </div>
  );
};

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const Col: React.FC<ColProps> = ({ 
  children, 
  xs, 
  sm, 
  md, 
  lg, 
  xl, 
  className, 
  ...props 
}) => {
  const colClasses = [
    xs && `col-span-${xs}`,
    sm && `sm:col-span-${sm}`,
    md && `md:col-span-${md}`,
    lg && `lg:col-span-${lg}`,
    xl && `xl:col-span-${xl}`,
  ].filter(Boolean);

  return (
    <div className={cn('px-4', colClasses, className)} {...props}>
      {children}
    </div>
  );
};
