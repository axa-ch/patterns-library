import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';

class MetaNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

window.customElements.define('axa-meta-navigation-mobile', MetaNavigationMobile);
