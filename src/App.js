import './App.css';
import Article from './components/article/article';
import Button from './components/Button/button';

const showLabel = (label)=>{
  alert(label);
}

function App() {
  return (
    <>
      <div className='articles'>
        <Article bgColor='rgb(255, 175, 125)' label={'Lista dos 10 jogos mais vendidos de todos os tempos'}/>
        <Article bgColor='rgb(194, 255, 229)' label={'Jogos que sairão em 2024 que você não pode perder'}/>
        <Article label={'Qual jogo merece um remake? Vote agora.'}/>
        
      </div>
      <div className='buttons'>
        <Button label={'buscar jogos'} showLabel={showLabel}/>
        <Button showLabel={showLabel}/>
      </div>
    </>
    
  );
}

export default App;
