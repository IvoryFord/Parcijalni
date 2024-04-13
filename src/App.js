import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import UserDetail from './UserDetail';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const fetchUser = async (username) => {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      
      setUser(userResponse.data);
      setRepositories(repoResponse.data);
    } catch (error) {
      console.error('Error fetching user and repositories:', error);
    }
  };

  return (
    <div className="App">
      <h1>Users & repos</h1>
      <UserForm fetchUser={fetchUser} />
      {user && <UserDetail user={user} repositories={repositories} />}
    </div>
  );
}

export default App;
