/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from './README.md';
import './index';

storiesOf('Molecules/Datepicker/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Feature - Datepicker in a form', () => {
    const handleSubmit = event => {
      event.preventDefault();
      document.getElementById('form-data').open = true;
      const formData = new window.FormData(event.target);
      let n = 0;
      for (const entries = formData.entries(); !entries.next().done; n++);
      document.getElementById('form-data-date').textContent = `${formData.get(
        'date'
      )} (of ${n}  submittable elements)`;
    };

    const template = html`
      <form id="datepicker-form" @submit="${handleSubmit}">
        <fieldset>
          <legend>Language</legend>
          <axa-datepicker
            data-test-id="datepicker-forms"
            name="date"
            inputfield
            placeholder="Bitte Datum wählen"
            year="2020"
            month="1"
            day="2"
          ></axa-datepicker>
          <axa-button type="submit" id="datepicker-forms-submit">OK</axa-button>
          <details
            id="form-data"
            style="display: inline-block;margin-left: 2rem"
          >
            <summary
              style="background:rgb(0,0,143);color:#fff;padding:11px;font-family:sans-serif;outline:none"
              >form content</summary
            >
            <div
              id="datepicker-forms-content"
              style="display:table; padding: 5px 0"
            >
              date = <span id="form-data-date"></span>
            </div>
          </details>
        </fieldset>
      </form>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });