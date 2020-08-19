import React, { useState, useEffect } from 'react';
import wikipedia from '../../api/wikipedia';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get('', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term
        }
      })
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if(term){
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className='item'>
        <div className="right floated content">
          <a 
            href={`https://en.wikipedia.org?curid=${result.pageid}`} 
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input 
            value={term}
            type="text" 
            className="input" 
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search;