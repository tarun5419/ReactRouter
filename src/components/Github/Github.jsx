import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json)
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
    <img className='' src="data.avtar_url" alt="git picture" width={300}/></div>
    
  )
}

export default Github;



export const githubInfoFollowers = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    // https://github.com/tarun5419
    return response.json();
}