/* global document */
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import Changelog from '../CHANGELOG.md';
import AXAInputText from './AXAInputText';

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

const storyInputText = storiesOf('Examples/Input Text/React', module);
storyInputText.addDecorator(withKnobs);
storyInputText.addParameters({
  changelog: Changelog,
});

storyInputText.add('Story', () => {
  const label = text('label*', '');
  const name = text('name*', '');
  const refId = text('refId', '');
  const placeholder = text('placeholder', '');
  const error = text('error', '');
  const info = text('info', '');
  const currency = text('currency', '');
  const defaultValue = text('defaultValue', '');
  const value = text('value', '');
  const checkMark = boolean('checkMark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const types = radios('type', typeOptions, 'text');
  const pattern = text('pattern', '');
  const inputmode = text('inputmode', '');
  const autofocus = boolean('autofocus', false);

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <AXAInputText
      refId={refId}
      name={name}
      label={label}
      placeholder={placeholder}
      checkMark={checkMark}
      disabled={disabled}
      required={required}
      invalid={invalid}
      defaultValue={defaultValue}
      value={value}
      type={types}
      error={error}
      info={info}
      pattern={pattern}
      inputmode={inputmode}
      autofocus={autofocus}
      currency={currency}
    />,
    wrapper
  );

  return wrapper;
});

storyInputText.add('Story - Simulate autocomplete', () => {
  const label = text('label*', '');
  const placeholder = text('placeholder', '');
  const error = text('error', '');
  const info = text('info', '');
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const counter = text('counter', 'Still ##counter## characters left');
  const counterMax = text('counterMax', 'Over character limit!');
  const autofocus = boolean('autofocus', false);

  const wrapper = document.createElement('div');
  // there are two input fields because with only one is not possible to
  // activate the Safari's autocomplete feature.
  ReactDOM.render(
    <form>
      <AXAInputText refid="fix-id-fake" name="Name" />
      <AXAInputText
        refid="fix-id-86452623"
        name="Adresse"
        label={label}
        placeholder={placeholder}
        checkMark={checkMark}
        disabled={disabled}
        required={required}
        invalid={invalid}
        type="text"
        counter={counter}
        counterMax={counterMax}
        maxlength="5"
        error={error}
        info={info}
        autofocus={autofocus}
      />
    </form>,
    wrapper
  );

  // simulate autocomplete
  setTimeout(() => {
    const input = document.querySelector('#fix-id-86452623');
    input.value = '123456789';
    if ('createEvent' in document) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('input', false, true);
      input.dispatchEvent(evt);
    } else {
      input.fireEvent('input');
    }
  }, 1);

  return wrapper;
});
