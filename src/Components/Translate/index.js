import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Convert from '../Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Portuguese',
    value: 'pt'
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  
  return (
    <div>
      <div className="ui form" style={{marginBottom: '20px'}}>
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown 
        selected={language} 
        onSelectedChange={setLanguage}
        options={options} 
        labelText="Select a Language"
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert
        text={text}
        language={language}
      />

    </div>
  )
}
export default Translate;