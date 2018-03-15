import classnames from 'classnames';
import styles from './index.scss';
import getAttribute from '../../js/get-attribute';
import template from './_template';
import Stroke from './js/stroke';
import HeaderNavigation from './js/header-navigation';
import BaseComponentGlobal from '../../js/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXAHeaderNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header-main');
  }

  connectedCallback() {
    super.connectedCallback();

    const hyphenate = this.hasAttribute('hyphenate');
    const simpleMenu = getAttribute(this, 'simplemenu');

    const classes = classnames(this.initialClassName, 'm-header-navigation', {
      'm-header-navigation--hyphenate': hyphenate,
    });

    this.className = classes;

    // simple menu nicht mehr brauchen. Stroke checkt if ein submenu da ist. un wenn ja dann mach default action
    this.stroke = new Stroke(this, {
      simpleMenu,
    });
    this.subNavigation = new HeaderNavigation(this, {
      simpleMenu,
    });
  }

  contextCallback(contextNode) {
    this.stroke.contextNode = contextNode;
  }

  disconnectedCallback() {
    this.stroke.destroy();
    delete this.stroke;

    this.subNavigation.destroy();
    delete this.subNavigation;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-navigation', AXAHeaderNavigation);
});

export default AXAHeaderNavigation;
