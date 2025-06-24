import "./button.scss";

type ButtonProps = {
  type?: "submit" | "button";
  text: string;
  onClick?: () => void;
  styling?: string;
};

function Button({ type, text, onClick, styling = "default" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`btn btn__${styling}`}>
      {text}
    </button>
  );
}

export default Button;
