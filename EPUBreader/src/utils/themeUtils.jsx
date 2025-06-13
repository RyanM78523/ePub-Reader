export const applyCustomTheme = (rendition, fontSize, fontColor, fontType, pageColor) => {
  if (!rendition) return;

  rendition.themes.register('custom', {
    'div *': {
      'font-size': `${fontSize}px !important`,
      'color': `${fontColor} !important`,
      'font-family': `${fontType} !important`,
      'background-color': `${pageColor} `,
    },
    'body *': {
      'font-size': `${fontSize}px !important`,
      'color': `${fontColor} !important`,
      'font-family': `${fontType} !important`,
      'background-color': `${pageColor} `,
    },
     'span *': {
      'font-size': `${fontSize}px !important`,
      'color': `${fontColor} !important`,
      'font-family': `${fontType} !important`,
      'background-color': `${pageColor} `,
    },
     'div ': {
      'font-size': `${fontSize}px !important`,
      'color': `${fontColor} !important`,
      'font-family': `${fontType} !important`,
      'background-color': `${pageColor} `,
    },
  });

  rendition.themes.select('custom');
};
