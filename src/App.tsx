import { useState } from 'react'
import './App.scss'
import useData from './hooks/useData';
import UserCard from './components/UserCard';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [page, setPage] = useState(1);
  const [sortAscending, setSortAscending] = useState<boolean>();
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce<string>(search, 500)

  const data = useData(debouncedSearch, sortAscending, page);
  
  return (
    <div className='userList'>
      <header>
        <div className='header'>
          <input placeholder='Search' value={search} onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}/>
          <button onClick={() => setSortAscending((v) => v== undefined ? false : !v)}>Sort Rating {sortAscending != undefined ? (sortAscending ? '▲' : '▼') : ''}</button>
        </div>
        {
          data &&
          <div className='paginationWrapper'>
            <button onClick={() => setPage((v) => v - 1)} disabled={page === 1}>←</button>
            <input value={data?.page} onChange={(e) => setPage(Math.max(Math.min(parseInt(e.target.value), data.totalPages), 1))} />
            <button onClick={() => setPage((v) => v + 1)} disabled={page === data?.totalPages}>→</button>
          </div>
        }
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
