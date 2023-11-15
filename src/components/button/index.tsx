
import React from 'react';
import './button.css';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button = ({ className, variant = 'primary', children, onClick }: ButtonProps) => {


    return (
        <button className={twMerge(`button button-${variant}`, className)} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
