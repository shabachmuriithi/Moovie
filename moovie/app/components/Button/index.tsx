interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '5px 15px',
        backgroundColor: variant === 'primary' ? '#f1c40f' : '#333',
        border: 'none',
        color: variant === 'primary' ? '#000' : '#fff',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      {children}
    </button>
  );
};

export default Button;