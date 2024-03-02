import { useState } from 'react'
import './App.scss'

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className='userList'>
      <header>
        <input value={search} onChange={(e) => setSearch(e.target.value)}/>
      </header>
    </div>
  )
}

export default App
