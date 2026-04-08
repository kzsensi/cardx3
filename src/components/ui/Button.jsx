import React from 'react';

function Button({ children, variant = 'primary', className = '', style = {}, ...props }) {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: 'none',
    outline: 'none',
    ...style
  };

  let variantStyle = {};
  
  if (variant === 'primary') {
    variantStyle = {
      background: 'var(--accent-gradient)',
      color: '#fff',
      boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
    };
  } else if (variant === 'outline') {
    variantStyle = {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-light)',
    };
  }

  const classNames = `btn btn-${variant} ${className}`;

  return (
    <>
      <button className={classNames} style={{ ...baseStyle, ...variantStyle }} {...props}>
        {children}
      </button>
      <style>{`
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn-primary:hover {
          box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
        }
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #fff !important;
        }
      `}</style>
    </>
  );
}

export default Button;
