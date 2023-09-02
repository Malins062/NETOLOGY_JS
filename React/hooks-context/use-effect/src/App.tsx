import { useState } from 'react';

import { List } from './components/List';
import { Details } from './components/Details';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface User {
  id: number;
  name: string;
}

type Detail = {
  city: string,
  company: string,
  position: string,
}

interface DetailsUser extends User {
  avatar: string;
  details: Detail;
}

export const initialDetailsUser = {
  id: 0,
  name: '',
  avatar: '',
  details: {
    city: '',
    company: '',
    position: '',
  }
}

const undefinedUser: User = {
  id: 0,
  name: '',
}

function App() {
  const usersInterval: number = import.meta.env.VITE_INTERVAL_USERS ? import.meta.env.VITE_INTERVAL_USERS : 5; 
  const usersUrl: string = import.meta.env.VITE_USERS_URL;
  const userUrl: string = import.meta.env.VITE_USER_URL;

  const [infoUser, setInfoUser] = useState(undefinedUser);

  const handleClickItem = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const id = event.currentTarget.getAttribute('data-id');
    const name = event.currentTarget.innerHTML;
    
    const info = {
      id: id ? Number(id) : 0,
      name: name,
    }
    
    setInfoUser(info);
    console.log(`Click on user #${info.id}-${info.name}`);
  }

  return (
    <>
      <div className="container p-2">
       <div className="row">
          <div className="col-md-6">
            <List 
              url={usersUrl} 
              interval={usersInterval}
              onClick={handleClickItem}
            />
          </div>
          <div className="col-md-6">
            <Details 
              url={userUrl} 
              info={infoUser}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
export type { User, DetailsUser };