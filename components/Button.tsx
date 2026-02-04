
import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'glass' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    ...props
}: ButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 outline-none";

    const variants = {
        primary: "bg-np-orange text-white hover:bg-black hover:text-white uppercase disabled:opacity-50 disabled:cursor-not-allowed",
        glass: "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm",
        outline: "border border-current bg-transparent hover:bg-white/10"
    };

    const sizes = {
        sm: "text-sm px-4 py-2 rounded-sm",
        md: "text-base px-6 py-3 rounded-lg",
        lg: "text-lg px-8 py-4 rounded-xl"
    };

    // Special handling for primary buttons often being rounded-sm in this design system (based on Let's Talk)
    // but Creative Services uses rounded-lg.
    // I'll stick to a default map but allow className override.
    // Actually, looking at the design, Primary uses "rounded-sm" in Header but "rounded-lg" in CreativeServices.
    // I will use `rounded-sm` as default for primary in this design system if it looks more "tech", or `rounded-lg`.
    // Let's use `rounded-lg` as a safer modern default for `md` size, and allow override.
    // Wait, Header Let's Talk is `rounded-sm`. I'll strictly use the map above.

    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];

    const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
