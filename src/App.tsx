import { useState } from 'react'
import './App.scss'

function App() {
  const [sortAscending, setSortAscending] = useState<boolean>();
  const [search, setSearch] = useState('');
  
  return (
    <div className='userList'>
      <header>
        <input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => setSortAscending((v) => !v)}>Sort Rating {sortAscending != undefined ? (sortAscending ? '▲' : '▼') : ''}</button>
      </header>
      <section>

      </section>
    </div>
  )
}

export default App
