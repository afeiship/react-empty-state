# react-empty-state
> Empty state for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-empty-state
```

## properties
| Name      | Type   | Required | Default    | Description                           |
| --------- | ------ | -------- | ---------- | ------------------------------------- |
| className | string | false    | -          | The extended className for component. |
| centered  | bool   | false    | false      | If absoute center.                    |
| icon      | any    | false    | -          | The icon element.                     |
| title     | any    | false    | '暂无数据' | The empty status title.               |


## usage
1. import css
  ```scss
  @import "~@jswork/react-empty-state/dist/style.css";

  // or use sass
  @import "~@jswork/react-empty-state/dist/style.scss";

  // customize your styles:
  $react-empty-state-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import ReactEmptyState from '@jswork/react-empty-state';
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

  ```

## documentation
- https://afeiship.github.io/react-empty-state/


## license
Code released under [the MIT license](https://github.com/afeiship/react-empty-state/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-empty-state
[version-url]: https://npmjs.org/package/@jswork/react-empty-state

[license-image]: https://img.shields.io/npm/l/@jswork/react-empty-state
[license-url]: https://github.com/afeiship/react-empty-state/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-empty-state
[size-url]: https://github.com/afeiship/react-empty-state/blob/master/dist/react-empty-state.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-empty-state
[download-url]: https://www.npmjs.com/package/@jswork/react-empty-state
