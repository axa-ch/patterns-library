/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Footer', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer - default', () => {
    const content = JSON.stringify([
      {
        title: 'axa & you',
        items: [
          { text: 'Contact', link: 'https://axa.ch/en/private-customers.html' },
          {
            text: 'Report a claim',
            link: 'https://axa.ch/en/private-customers.html',
          },
          {
            text: 'Job vacancies',
            link: 'https://axa.ch/en/private-customers.html',
          },
          { text: 'MyAXA', link: 'https://axa.ch/en/private-customers.html' },
          {
            text: 'Customer reviews',
            link: 'https://axa.ch/en/private-customers.html',
          },
          {
            text: 'Garage Portal',
            link: 'https://axa.ch/en/private-customers.html',
          },
        ],
      },
      {
        title: 'axa worldwide',
        items: [
          {
            text: 'AXA worldwide',
            link: 'https://axa.ch/en/private-customers.html',
          },
        ],
      },
    ]);

    const iconArea = JSON.stringify({
      title: 'stay in touch',
      icons: [
        { title: 'facebook', link: 'https://www.facebook.com/axach/' },
        {
          title: 'instagram',
          link: 'https://www.instagram.com/axaswitzerland/',
        },
        { title: 'twitter', link: 'https://twitter.com/axa_schweiz' },
        { title: 'xing', link: 'https://www.xing.com/companies/AXAWINTERTHUR' },
        { title: 'youtube', link: 'https://www.youtube.com/axaschweiz' },
        { title: 'linkedin', link: 'https://www.linkedin.com/company/axa/' },
      ],
    });

    return `<axa-footer content='${content}' iconarea='${iconArea}'></axa-footer>`;
  });