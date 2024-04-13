import React from 'react';

const handleReset = () => {
  window.location.reload();
};

function UserDetail({ user, repositories }) {
  return (
    <div className="UserDetail">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <p className="bio">{user.bio}</p>
      <p className="location">Location: {user.location}</p>

      <div className="repositories">
        <h3>REPOSITORIES:</h3>
        {repositories.map((repo) => (
          <div key={repo.id} className="repo">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </div>
        ))}
      </div>
      <button className="resetButton" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default UserDetail;
