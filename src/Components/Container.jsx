import { useState } from 'react';
import Input from './Serch';
import List from './List';
import repoService from '../Services/repoService';

const Container = () => {
  const [reposList, setReposList] = useState([]);

  const handleSubmit = async (user) => {
    try {
      const reposListFromServer = await repoService(user);
      setReposList(reposListFromServer);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div>
      <div data-testid="general-repo-container">
        <h2>מציאת משתמש בגיטהאב</h2>
        <Input handleSubmit={handleSubmit} />
        <List repos={reposList} />
      </div>
    </div>
  );
};

export default Container;
