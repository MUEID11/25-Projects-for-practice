
import './App.css'
import List from './List'

function App() {
 

  return (
    <main className='text-left'>
      <div className='bg-white shadow-md p-6 rounded-md space-y-4 text-gray-600'>
        <h1 className='text-4xl font-bold text-center'>Birthday reminder project</h1>
        <h3 className='text-2xl font-semibold'>0 birthdays today</h3>
        <List  />
      </div>
    </main>
  )
}

export default App
