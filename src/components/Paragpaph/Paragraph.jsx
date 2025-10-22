import "../../index.css";
import pStyles from "./p.module.css";
export default function Paragraph({ pText }) {
  return <p className={pStyles.Paragraph}>{pText}</p>;
}
