import "./button.scss";

type ButtonProps = {
  type?: "submit" | "button";
  text: string;
  onClick?: () => void;
  styling?: string;
  disabled?: boolean;
};

function Button({
  type,
  text,
  onClick,
  disabled = false,
  styling = "default",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn__${styling}`}
    >
      {text}
    </button>
  );
}

export default Button;
