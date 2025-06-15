import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    const {gif, loading,fetchData}=useGif();
    
    return (
        <div className="bg-white/30 backdrop-blur-md shadow-xl w-full max-w-xl rounded-2xl flex flex-col items-center gap-4 p-6 border border-white/40">
            <h1 className="font-bold text-2xl text-white drop-shadow-lg uppercase tracking-wide">A Random GIF</h1>
            <div className="flex items-center justify-center min-h-[250px]">
              {loading ? <Spinner/> : <img src={gif} alt="Random GIF" className="rounded-xl shadow-lg max-h-64 object-contain border border-white/30" />}
            </div>
            <button
  className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-gray-900 py-2 rounded-xl font-semibold tracking-wide shadow-md hover:scale-105 transition-transform"
  onClick={fetchData}>Generate</button>
        </div>
    )
}

export default Random