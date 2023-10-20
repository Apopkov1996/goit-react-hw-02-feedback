import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);

  return (
    <div>
      {options.map(name => (
        <button key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};
