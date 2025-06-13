import React from 'react';
import { ReactReader } from 'react-reader';
import { applyCustomTheme } from '../utils/themeUtils';
import { getCustomReaderTheme } from '../styles/customReaderTheme';

const ReaderDisplay = ({
  epubFile,
  location,
  handleLocationChange,
  renditionRef,
  fontSize,
  fontColor,
  fontType,
  pageColor,
  turnType,
}) => { 
  const readerStyles = getCustomReaderTheme(pageColor, fontColor);

  return epubFile ? (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600&display=swap" rel="stylesheet"></link>
    <ReactReader
      key={turnType}
      url={epubFile}
      epubOptions={{
        flow: turnType,
        manager: turnType === 'scrolled' ? 'continuous' : 'default',
      }}
      location={location}
      locationChanged={handleLocationChange}
      readerStyles={readerStyles}
      getRendition={(r) => {
        
        renditionRef.current = r;
        r.themes.override('background', { pageColor });
        applyCustomTheme(r, fontSize, fontColor, fontType, pageColor);

        r.on('selected', (cfiRange, contents) => {
          const selectedText = contents.window.getSelection().toString().trim();
          const output = document.getElementById('highlight-definition');

          if (/^[a-zA-Z]+$/.test(selectedText)) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
              .then(res => res.json())
              .then(data => {
                const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
                output.innerText = definition
                  ? `Definition of "${selectedText}": ${definition}`
                  : `No definition found for "${selectedText}".`;
              })
              .catch(() => output.innerText = 'Failed to fetch definition.');
          } else {
            output.innerText = 'Please select a single word.';
        
          }

          r.annotations.remove(cfiRange, 'highlight');
        });
      }}
    />
   </>) : (
    <p></p>
  );

 
};

export default ReaderDisplay;
