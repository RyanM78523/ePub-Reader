import React, { useState } from 'react';
import '../styles/fileIO.css';



const ReaderControls = ({
  resizedFont,
  handleFontChange,
  pageColor,
  setPageColor,
  wordColor,
  setWordColor,
  turnType,
  setTurnType,
  fontType,
  setFontType,
  handleFileUpload,
  showDefinitionBox, 
  handleDefinitionBoxChange
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', marginBottom: '1rem' }}>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600&display=swap" rel="stylesheet"></link>
            <label style={{
        padding: '10px',
        backgroundColor: '#444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: "'Libre Franklin', sans-serif",
        fontWeight: 'bold',
        fontSize: '14px',
        marginRight: '10px',
        paddingRight: '10px',
        }}>
        Change EPUB
        <input 
            type="file" 
            accept=".epub"
            onChange={handleFileUpload}
            style={{
            display: 'none'
            }}
        />
        </label>

      <button
        onClick={() => setOpen(!open)}
        style={{
       

          padding: '11px',
          backgroundColor: '#444',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px',
          fontFamily: "'Libre Franklin', sans-serif",
          fontWeight:'bold'
          
          
        }}
      >
         Customize
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '0%',
            backgroundColor: '#444',
            border: '0px',
            borderRadius: '6px',
            padding: '20px',
            zIndex: 100,
            width: '250px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'
          }}
        >
     

          <label>Font Size: {resizedFont}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={resizedFont}
            onChange={handleFontChange}
            style={{ width: '100%' }}
          />

          <label>Background Color:</label>
          <input type="color" value={pageColor} onChange={(e) => setPageColor(e.target.value)} />
          <br/><br/>
          <label>Text Color:</label>
          <input type="color" value={wordColor} onChange={(e) => setWordColor(e.target.value)} />
          <br/><br/>
          <label>Page Type:</label>
          <select value={turnType} onChange={(e) => setTurnType(e.target.value)} style={{ width: '100%' }}>
            <option value="paginated">Pages</option>
            <option value="scrolled">Scroll</option>
          </select>
          <br/><br/>
          <label>Font Type:</label>
          <select value={fontType} onChange={(e) => setFontType(e.target.value)} style={{ width: '100%' }}>
            <option value="Times New Roman" style={{fontFamily: 'Times New Roman'}}>Times New Roman</option>
            <option value="Arial" style={{fontFamily: 'Arial'}}>Arial</option>
            <option value="Courier New" style={{fontFamily: 'Courier New'}}>Courier New</option>
            <option value="Calibri" style={{fontFamily: 'Calibri'}}>Calibri</option>
            <option value="Georgia" style={{fontFamily: 'Georgia'}}>Georgia</option>
            <option value="Verdana" style={{fontFamily: 'Verdana'}}>Verdana</option>
            <option value="Helvetica" style={{fontFamily: 'Helvetica'}}>Helvetica</option>
            <option value="Trebuchet MS" style={{fontFamily: 'Trebuchet MS'}}>Trebuchet MS</option>
            <option value="Tahoma" style={{fontFamily: 'Tahoma'}}>Tahoma</option>
            <option value="Garamond" style={{fontFamily: 'Garamond'}}>Garamond</option>
          </select>
          <br/><br/>
        <label>Definition Box:</label>
          <input
            type="checkbox"
            checked={showDefinitionBox}
            onClick={handleDefinitionBoxChange}
          />
 
        </div>
      )}
    </div>
  );
};

export default ReaderControls;
