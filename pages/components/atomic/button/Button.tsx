import React from 'react';
import clsx from 'clsx';
import { IntentProps } from '../../../../lib/common/props/IntentProps';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    IntentProps {
  icon?: React.ReactNode;
  loading?: boolean;
}

function Button({
  children,
  loading,
  icon,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <React.Fragment>
      <button
        className={clsx(
          'flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary m-1',
          className,
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {icon}
        {loading && (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white ml-1 mr-1" />
        )}
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;
