/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import { File_downloadSvg } from '@axa-ch/materials/icons';
import AXAIcon from './index';

describe('Icon', () => {
  test('firstUpdated() should set icon if svg string is given', () => {
    const mySvgString = '<svg></svg>';
    AXAIcon.prototype.icon = mySvgString;

    AXAIcon.prototype.updated();

    expect(AXAIcon.prototype._loadedSvg).toBe(mySvgString);
    expect(AXAIcon.prototype.size).toBe('auto');
  });
  test('firstUpdated() should map icon correctly', () => {
    AXAIcon.prototype.icon = 'download';

    AXAIcon.prototype.updated();

    expect(AXAIcon.prototype._loadedSvg).toBe(File_downloadSvg);
  });
  test('firstUpdated() should set _loadedSvg to empty string', () => {
    AXAIcon.prototype.icon = 'thisIsNotValid';

    AXAIcon.prototype.updated();

    expect(AXAIcon.prototype._loadedSvg).toBe('');
  });
});
