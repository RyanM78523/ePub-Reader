import { ReactReaderStyle } from 'react-reader';

export const getCustomReaderTheme = (pageColor, wordColor) => ({
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    transition: undefined,
    backgroundColor: pageColor,
  },
  arrow: {
    ...ReactReaderStyle.arrow,
    color: wordColor,
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: pageColor,
  },
  tocButtonExpanded: {
    ...ReactReaderStyle.tocButtonExpanded,
    background: pageColor,
  },
  tocButtonBar: {
    ...ReactReaderStyle.tocButtonBar,
    background: wordColor,
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: pageColor,
  },
  tocButtonBottom: {
    ...ReactReaderStyle.tocButtonBottom,
    color: pageColor,
  },
  tocAreaButton: {
    ...ReactReaderStyle.tocAreaButton,
    color: wordColor,
  },
});
