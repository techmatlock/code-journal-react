import { Route, Routes } from 'react-router'
import './css/layout.css'
import './css/reset.css'
import './css/styles.css'

import { Header } from './components/Header'
import { EntryList } from './pages/EntryList'
import { EntryForm } from './pages/EntryForm'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<EntryList />}/>
        <Route path='/entry-form/:entryId' element={<EntryForm />}/>
      </Route>
    </Routes>
  )
}

export default App
