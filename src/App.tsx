import { useState } from 'react'
import './App.scss'
import useData from './hooks/useData';
import UserCard from './components/UserCard';

function App() {
  const data = useData();
  const [sortAscending, setSortAscending] = useState<boolean>();
  const [search, setSearch] = useState('');

  return (
    <div className='userList'>
      <header>
        <input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => setSortAscending((v) => !v)}>Sort Rating {sortAscending != undefined ? (sortAscending ? '▲' : '▼') : ''}</button>
      </header>
      <section>
        {
          data.results.map((v) => (
            <UserCard data={v}/>
          ))
        }
      </section>
    </div>
  )
}

export default App
