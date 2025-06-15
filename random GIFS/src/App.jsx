import Random from './components/Random'
import Tag from './components/Tag'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <h1 className="backdrop-blur-md bg-white/30 shadow-lg rounded-lg h-16 text-black w-11/12 max-w-2xl text-center text-4xl mt-10 font-extrabold tracking-wider border border-white/40 p-2">
        Random GIFS
      </h1>
      <div className="flex flex-col items-center gap-8 mt-8 w-full max-w-2xl">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
