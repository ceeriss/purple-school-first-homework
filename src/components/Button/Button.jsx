import buttonStyles from "./button.module.css";
export default function Button({ btnText }) {
  const Clicked = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <button onClick={Clicked} className={buttonStyles.button}>
      {btnText}
    </button>
  );
}
