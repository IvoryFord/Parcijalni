import React, { useState } from 'react';

function UserForm({ fetchUser }) {
  const [inputValue, setInputValue] = useState('');

  const extractUsername = (input) => {
    const match = input.match(/github\.com\/(?!.*\/)([a-zA-Z0-9-]+)/);
    return match ? match[1] : input.trim(); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = extractUsername(inputValue);

    if (username) {
      fetchUser(username);
    } else {
      console.error('Invalid GitHub input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username/URL:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username or URL"
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default UserForm;
