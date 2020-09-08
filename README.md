# react-empty-state
> Empty state for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-empty-state
```

## update
```shell
npm update @feizheng/react-empty-state
```

## properties
| Name      | Type    | Required | Default   | Description                           |
| --------- | ------- | -------- | --------- | ------------------------------------- |
| className | string  | false    | -         | The extended className for component. |
| centered  | bool    | false    | false     | If absoute center.                    |
| element   | element | false    | -         | The core element(picture).            |
| title     | union   | false    | 'No data' | The empty status title.               |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-empty-state/dist/style.scss";

  // customize your styles:
  $react-empty-state-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import ReactGithubCorner from '@feizheng/react-github-corner';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactEmptyState from '@feizheng/react-empty-state';
  import './assets/style.scss';

  class App extends React.Component {
    state = { hasUpdate: false };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    render() {
      return (
        <div className="p-3 app-container">
          <ReactEmptyState centered title="暂无数据" />
          <ReactSwUpdateTips value={this.state.hasUpdate} />
          <ReactGithubCorner value="https://github.com/afeiship/react-empty-state" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-empty-state/


## license
Code released under [the MIT license](https://github.com/afeiship/react-empty-state/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-empty-state
[version-url]: https://npmjs.org/package/@feizheng/react-empty-state

[license-image]: https://img.shields.io/npm/l/@feizheng/react-empty-state
[license-url]: https://github.com/afeiship/react-empty-state/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-empty-state
[size-url]: https://github.com/afeiship/react-empty-state/blob/master/dist/react-empty-state.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-empty-state
[download-url]: https://www.npmjs.com/package/@feizheng/react-empty-state
