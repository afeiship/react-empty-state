# react-empty-state
> Empty state for react.

## installation
```shell
npm install -S @feizheng/react-empty-state
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-empty-state/dist/style.scss";

  // customize your styles:
  $react-empty-state-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-empty-state/
