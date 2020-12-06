import './App.css'
import Header from './Header'
import NewsFeed from './NewsFeed.js'
import Stats from './Stats'
function App() {
  return (
    <div className='App'>
      <div className='app__header'>
        <Header />
      </div>
      <div className='app__body'>
        <div className='app__container'>
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  )
}

export default App
