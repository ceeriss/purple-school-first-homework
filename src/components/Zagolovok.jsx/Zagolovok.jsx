import '../../index.css'
import ZagolovokStyles from './Zagolovok.module.css'
export default function Zagolovok ({text}) {
	return <h1 className={ZagolovokStyles.Zagalovok}>{text}</h1>;
}