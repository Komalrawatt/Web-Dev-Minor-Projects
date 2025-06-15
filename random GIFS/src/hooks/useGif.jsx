import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
// import { useState } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = (tag) => {
    const [gif, setgif] = React.useState('');
    const [loading,setLoading]=React.useState(false);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData() {
        setLoading(true);
        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_large.url;
            setgif(imageSource);
        } catch (e) {
            setgif('');
            console.error(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {gif,loading, fetchData};
}

export default useGif