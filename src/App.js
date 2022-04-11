import { useState, memo, useMemo, useCallback } from 'react';
import './App.css';

const App = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState('red');

  console.log(`app renderd ${appRenderIndex}`);

  const params  = useMemo(() => ({color}), [color]);
  const onClick = useCallback(() => {}, []);
  
  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)} >
        Re-Render App
      </button>
      <button
        onClick={() => setColor(color === 'blue' ? 'red': 'blue')}
      >
        Change Color
      </button>
      <MemoedSwatch params={params} onClick={onClick}/>
    </div>
  );
}


const Swatch = ({ params, onClick }) => {

  console.log(`app renderd ${params.color}`);

  return(
    <div
      onClick={onClick}
      style={{ margin: 3, width: 75, height: 75, backgroundColor: params.color }}
    ></div>
  );
}

const MemoedSwatch = memo(Swatch);


// const MemoedSwatch = memo(Swatch, (prevProps, nextProps) => {
//   return prevProps.params.color === nextProps.params.color;
// });


export default App;
