
import Blogs from './blogs/Blogs'
import Header from './components/Header'

function App() {
 

  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <div className='grid grid-cols-3 justify-center'>
        <div className='col-span-2'>

        <Blogs/>
        </div>
        <div>
          something comming soon
        </div>
      </div>
    </div>
  )
}

export default App
