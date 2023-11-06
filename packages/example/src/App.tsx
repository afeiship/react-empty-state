import EmptyState from '@jswork/react-empty-state/src';
import '@jswork/react-empty-state/src/style.scss';
import './App.css';

function App() {
  return (
    <>
      <EmptyState title="404">
        <p>
          11,535 inspirational designs, illustrations, and graphic elements from the world’s best
          designers.
        </p>
        <button>Try Again</button>
      </EmptyState>
    </>
  );
}

export default App;
