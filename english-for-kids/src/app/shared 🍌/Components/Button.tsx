/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function Button(props: ButtonProps) {
  const {
    children,
    type = 'button',
    className,
    ...restProps
  } = props;

  return (
    <button className={classNames('btn', className)} type={type} {...restProps}>
      {children}
    </button>
  );
}
