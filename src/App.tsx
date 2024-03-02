import { useState } from 'react'
import './App.scss'
import useData from './hooks/useData';
import UserCard from './components/UserCard';

function App() {
  const [page, setPage] = useState(1);
  const [sortAscending, setSortAscending] = useState<boolean>();
  const [search, setSearch] = useState('');
  const data = useData(search, sortAscending, page);
  
  return (
    <div className='userList'>
      <header>
        <input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => setSortAscending((v) => v== undefined ? false : !v)}>Sort Rating {sortAscending != undefined ? (sortAscending ? '▲' : '▼') : ''}</button>
      </header>
      <section>
        {
          data?.docs ?
            data?.docs?.map((v) => (
              <UserCard key={v._id} data={v}/>
            ))
            : <p>Loading...</p>
        }
      </section>
    </div>
  )
}

export default App
