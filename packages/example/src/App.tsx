import EmptyState from '@jswork/react-empty-state/src';
import '@jswork/react-empty-state/src/style.scss';
import './App.css';

function App() {
  return (
    <>
      <div className='box'>
      <EmptyState title="404">
        <p>
          11,535 inspirational designs, illustrations, and graphic elements from the world’s best
          designers.
        </p>
        <button>Try Again</button>
      </EmptyState>
      </div>

      <div className='box'>
      <EmptyState style={{'--centered': '50%'}} icon={<img width={120} src="https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg" />}>
        <p className='is-title'>
         程序员紧张开发中，敬请期待！
        </p>
      </EmptyState>
      </div>
    </>
  );
}

export default App;
