import React, { useState } from 'react';

    function CharacterCounter() {
      const [text, setText] = useState('');
      const maxLength = 250;

      const handleChange = (event) => {
        const inputText = event.target.value;
        if (inputText.length <= maxLength) {
          setText(inputText);
        }
      };

      const isLimitReached = text.length >= maxLength;

      return (
        <div className="container">
          <textarea
            placeholder="Start typing ..."
            value={text}
            onChange={handleChange}
            className={isLimitReached ? 'limit-reached' : ''}
          />
          <div className="counter">
            {text.length}/{maxLength}
          </div>
        </div>
      );
    }

    export default CharacterCounter;
