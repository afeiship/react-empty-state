import ReactEmptyState from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactEmptyState centered title="暂无数据"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
