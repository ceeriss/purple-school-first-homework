import Button from "./components/Button/Button";
import Paragraph from "./components/Paragpaph/Paragraph"
import Zagolovok from "./components/Zagolovok.jsx/Zagolovok"

function App() {
  const text = "Поиск"
  const pText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  const btnText = 'Искать'
  return (
    <>
      <Zagolovok text={text} />
      <Paragraph pText={pText} />
      <Button btnText  = {btnText}/>
    </>
  );
}

export default App
