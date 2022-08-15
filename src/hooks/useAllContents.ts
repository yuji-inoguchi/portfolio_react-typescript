import axios from "axios";
import { useEffect, useState } from "react";

export const useAllContents = () => {
  
    const [post, setPosts] = useState([])

    useEffect(() => {
        axios.get('../../public/img')
        .then(res => {
            setPosts(res.data)
        })
        
    }, [])
    console.log(useEffect);
    return { post };
  };