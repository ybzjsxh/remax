import * as React from 'react';
import './helpers/setupGlobals';
import App from './helpers/App';
import { useAppEvent } from '../hooks';
import createAppConfig from '../createAppConfig';

describe('app', () => {
  it('lifecycle methods', () => {
    const log: string[] = [];
    class Foo extends React.Component {
      onLaunch() {
        log.push('onLaunch');
      }

      onShow() {
        log.push('onShow');
      }

      onHide() {
        log.push('onHide');
      }

      onError(error: any) {
        log.push(error);
        log.push('onError');
      }

      onShareAppMessage(object: any) {
        log.push(object.from);
        log.push('onShareAppMessage');
      }

      onPageNotFound(object: any) {
        log.push(object.path);
        log.push('onPageNotFound');
      }

      render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
      }
    }

    const app = App(createAppConfig(Foo));
    app.launch();
    app.show();
    app.shareAppMessage();
    app.pageNotFound();
    app.error();
    app.hide();

    expect(log).toEqual([
      'onLaunch',
      'onShow',
      'menu',
      'onShareAppMessage',
      'path',
      'onPageNotFound',
      'error',
      'onError',
      'onHide',
    ]);
  });

  it('hooks', () => {
    const log: string[] = [];

    function Foo(props: any) {
      useAppEvent('onLaunch', () => {
        log.push('launch');
      });
      useAppEvent('onShow', () => {
        log.push('show');

        return () => {
          log.push('unregister show');
        };
      });
      useAppEvent('onShow', () => {
        log.push('appEventShow');
      });
      useAppEvent('onPageNotFound', () => {
        log.push('pageNotFound');
      });
      useAppEvent('onShareAppMessage', () => {
        log.push('shareAppMessage');
      });
      useAppEvent('onError', () => {
        log.push('error');
      });
      useAppEvent('onHide', () => {
        log.push('hide');
      });
      return props.children;
    }

    const app = App(createAppConfig(Foo));
    app.launch();
    app.show();
    app.pageNotFound();
    app.shareAppMessage();
    app.error();
    app.hide();

    expect(log).toEqual(['launch', 'show', 'appEventShow', 'pageNotFound', 'shareAppMessage', 'error', 'hide']);
  });
});
