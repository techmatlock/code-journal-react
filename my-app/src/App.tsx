import { Route, Routes } from 'react-router'
import './css/layout.css'
import './css/reset.css'
import './css/styles.css'

import { Header } from './components/Header'
import { EntryList } from './pages/EntryList'
import { EntryForm } from './pages/EntryForm'
import { useState } from 'react'

function App() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<EntryList setIsEditing={setIsEditing}/>}/>
        <Route path='/entry-form/:entryId' element={<EntryForm isEditing={isEditing} setIsEditing={setIsEditing} />}/>
      </Route>
    </Routes>
  )
}

export default App
