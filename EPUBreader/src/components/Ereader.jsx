import React, { useState, useEffect, useRef } from 'react';
import ReaderControls from './ReaderControls';
import ReaderDisplay from './ReaderDisplay';
import { applyCustomTheme } from '../utils/themeUtils';
import '../styles/fileIO.css';

const EReader = () => {
  const [location, setLocation] = useState(null);
  const [epubFile, setEpubFile] = useState(null);
  const rendition = useRef(null);
  const [resizedFont, setResizedFont] = useState(16);
  const [wordColor, setWordColor] = useState('black');
  const [pageColor, setPageColor] = useState('white');
  const [turnType, setTurnType] = useState('auto');
  const [fontType, setFontType] = useState('Times New Roman');
  const [showUploadModal, setShowUploadModal] = useState(true);
  const [showDefinitionBox, setShowDefinitionBox] = useState(true);

  useEffect(() => {
    if (rendition.current) {
     rendition.current.themes.override('background', { pageColor });
    }
  }, [pageColor]);

  useEffect(() => {
    applyCustomTheme(rendition.current, resizedFont, wordColor, fontType, pageColor);
  }, [resizedFont, wordColor, fontType, pageColor]);

  const handleFontChange = (e) => setResizedFont(e.target.value);

  const handleDefinitionBoxChange = (e) => {
    setShowDefinitionBox(e.target.checked);
  };


 const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      setEpubFile(fileContent);
      setShowUploadModal(false); 
    };
    reader.readAsArrayBuffer(file);
  }
};

  return (

     <>


    <div style={{ height: '90vh', backgroundColor: 'black', color: 'white' }}>
      {showUploadModal && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  }}>
    
    <div style={{
      backgroundColor: '#222',
      padding: '30px',
      borderRadius: '8px',
      textAlign: 'center',
      color: 'white',
      fontFamily: "'Libre Franklin', sans-serif"
    }}>
      
      <h2>Upload an EPUB File</h2>
      <input
      className='css-file-input'
        type="file"
        accept=".epub"
        onChange={handleFileUpload}
        value={epubFile ? epubFile.name : ''}
        style={{
          marginTop: '20px',
          padding: '8px',
          backgroundColor: '#444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      />
    </div>
  </div>
)}


      <ReaderControls
        resizedFont={resizedFont}
        handleFontChange={handleFontChange}
        pageColor={pageColor}
        setPageColor={setPageColor}
        wordColor={wordColor}
        setWordColor={setWordColor}
        turnType={turnType}
        setTurnType={setTurnType}
        fontType={fontType}
        setFontType={setFontType}
        handleFileUpload={handleFileUpload}
        showDefinitionBox={showDefinitionBox}
        handleDefinitionBoxChange={handleDefinitionBoxChange}
      />
      <ReaderDisplay
        epubFile={epubFile}
        location={location}
        handleLocationChange={setLocation}
        renditionRef={rendition}
        fontSize={resizedFont}
        fontColor={wordColor}
        fontType={fontType}
        pageColor={pageColor}
        turnType={turnType}
      />
      
    <div>
      {showDefinitionBox && (
      <p id="highlight-definition" style={{
       color: 'white',
       backgroundColor: '#444',
       padding: '10px',
       borderRadius: '4px',
       fontWeight: 'bold',
     }}>Highlight a word for its definition</p>
   )}
    </div>
     
    </div>


    </>
    
   
  );

};

export default EReader;
