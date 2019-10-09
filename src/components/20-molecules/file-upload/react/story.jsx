/* global document */
import { storiesOf } from '@storybook/html';
import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAFileUploadReact from './AXAFileUploadReact';
import Readme from '../README.md';

const iconOptions = {
  none: '',
  'arrow-right': 'arrow-right',
  collapse: 'collapse',
  document: 'document',
  download: 'download',
  email: 'email',
  expand: 'expand',
  mobile: 'mobile',
  phone: 'phone',
  search: 'search',
  upload: 'upload',
  'cloud-upload': 'cloud-upload',
  'axa-logo': 'axa-logo',
  'axa-logo-open': 'axa-logo-open',
};

storiesOf('Molecules/File Upload/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('File Upload', () => {
    const sizeSliderOptions = {
      range: true,
      min: 1,
      max: 500,
      step: 10,
    };
    const numberOfFilesSliderOptions = {
      range: true,
      min: 1,
      max: 20,
      step: 1,
    };
    const inputFileText = text('inputFileText', 'Upload file');
    const maxSizeOfSingleFileKB = number(
      'maxSizeOfSingleFileKB',
      100,
      sizeSliderOptions
    );
    const maxSizeOfAllFilesKB = number(
      'maxSizeOfAllFilesKB',
      500,
      sizeSliderOptions
    );
    const maxNumberOfFiles = number(
      'maxNumberOfFiles',
      10,
      numberOfFilesSliderOptions
    );
    const deleteStatusText = text('deleteStatusText', 'Delete');
    const addStatusText = text('addStatusText', 'Add more');
    const fileTooBigStatusText = text(
      'fileTooBigStatusText',
      `File size exceeds maximum size`
    );
    const filesTooBigStatusText = text(
      'filesTooBigStatusText',
      `File sizes exceed maximum size`
    );
    const tooManyFilesStatusText = text(
      'tooManyFilesStatusText',
      `You exceeded the maximum number of files`
    );
    const orText = text('orText', 'or');
    const infoText = text('infoText', 'Drag and drop to upload your file');
    const wrongFileTypeStatusText = text(
      'wrongFileTypeText',
      'Your file does not correspond with our allowed file-types'
    );
    const icon = select('icon', iconOptions, 'cloud-upload');
    const headerText = text('headerText', 'The following files are being transferred:');

    const div = document.createElement('div');
    ReactDOM.render(
      <div style={{ width: '455px' }}>
        <AXAFileUploadReact
          inputFileText={inputFileText}
          maxSizeOfSingleFileKB={maxSizeOfSingleFileKB}
          maxSizeOfAllFilesKB={maxSizeOfAllFilesKB}
          maxNumberOfFiles={maxNumberOfFiles}
          deleteStatusText={deleteStatusText}
          addStatusText={addStatusText}
          fileTooBigStatusText={fileTooBigStatusText}
          filesTooBigStatusText={filesTooBigStatusText}
          tooManyFilesStatusText={tooManyFilesStatusText}
          orText={orText}
          infoText={infoText}
          wrongFileTypeStatusText={wrongFileTypeStatusText}
          icon={icon}
        >{headerText}
        </AXAFileUploadReact>
      </div>
      , div
    );
    return div;
  });
