type ButtonProps = {
    size: 'sm' | 'md' | 'lg';
    variant: 'primary' | 'secondary' | 'danger';
    content: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
};


const Button = ({size, variant, content, onClick, disabled}: ButtonProps) => {
  return (
    <button
      className={`btn ${size} ${variant}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: size === 'sm' ? '5px 10px' : size === 'md' ? '10px 20px' : '15px 30px',
        backgroundColor: variant === 'primary' ? '#007bff' : variant === 'secondary' ? '#6c757d' : '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
      >
      {content}
    </button>
  )
}

export default Button
