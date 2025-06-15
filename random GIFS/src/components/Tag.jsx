import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag, setTag] = React.useState('car');
    const {gif, loading,fetchData}=useGif(tag);

    return (
        <div className="bg-white/30 backdrop-blur-md shadow-xl w-full max-w-xl rounded-2xl flex flex-col items-center gap-4 p-6 border border-white/40">
            <h1 className="font-bold text-2xl text-white drop-shadow-lg uppercase tracking-wide">Random <span className="text-yellow-300">{tag}</span> GIF</h1>
            <div className="flex items-center justify-center min-h-[250px]">
              {loading ? <Spinner/> : <img src={gif} alt={tag + " gif"} className="rounded-xl shadow-lg max-h-64 object-contain border border-white/30" />}
            </div>
            <input 
                className="w-full text-center bg-white/70 text-gray-800 text-lg py-2 rounded-xl mb-2 font-medium tracking-wide mt-2 shadow-inner border border-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                onChange={(event) =>  setTag(event.target.value)}
                value={tag}
                placeholder="Enter a tag"
            />
            <button
                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-gray-900 py-2 rounded-xl font-semibold tracking-wide shadow-md hover:scale-105 transition-transform"
                onClick={()=>{fetchData(tag)}}>Generate</button>
        </div>
    )
}

export default Tag