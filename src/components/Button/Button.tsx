import "./Button.scss";

interface Props {
    btnType: string;
    clicked?: any;
    children: React.ReactNode;
}

const Button: React.FC<Props> = ({ btnType, clicked, children }) => (
  <div
    className={["button", [btnType]].join(" ")}
    onClick={clicked}
  >
    {children}
  </div>
);

export default Button;