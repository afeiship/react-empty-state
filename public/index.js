import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactEmptyState from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-empty-state">
        <ReactEmptyState centered title="暂无数据" />
      </ReactDemokit>
    );
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
