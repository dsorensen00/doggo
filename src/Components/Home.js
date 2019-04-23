import React, { useEffect, useState } from 'react'




export default ()=>{

    const [url, setUrl]= useState()

    const doggo = JSON.parse(localStorage.getItem('doggo'))

    const fetchMyDoggo= async()=>{
        await fetch(`https://dog.ceo/api/breeds/image/random`)
            .then( response =>  response.json() )
            .then(data => data.message)
            .then(theUrl => setUrl(theUrl));
    }

    
    const cacheMyDoggo = async (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        await doggo.push({
            "URL":`${url}`,
            "Rating":e.target.value
        });
        localStorage.setItem('doggo', JSON.stringify(doggo));
        console.log(doggo)
    }

   
    useEffect(
         () => {
            fetchMyDoggo();
        }, []
    );

    
    return(
        <>
           
            <div>
                <img src={url} alt="Cute Dog"/>
                <button onClick={ fetchMyDoggo }>GIVE ME A NEW DOGGO</button>
                <div>
                    <h1>Rate this Doggo between 10-16</h1>
                    <button value='10' onClick={e=>cacheMyDoggo(e)}>10</button>
                    <button value='11' onClick={e=>cacheMyDoggo(e)}>11</button>
                    <button value='12' onClick={e=>cacheMyDoggo(e)}>12</button>
                    <button value='13' onClick={e=>cacheMyDoggo(e)}>13</button>
                    <button value='14' onClick={e=>cacheMyDoggo(e)}>14</button>
                    <button value='15' onClick={e=>cacheMyDoggo(e)}>15</button>
                    <button value='16' onClick={e=>cacheMyDoggo(e)}>16</button>
                </div>
            </div>
        </>
    )

    // const giveMeRandom = (max)=>{ 
        
    //     return(
    //         Math.ceil(Math.random()* Math.ceil(max))
    //     )
    // }



    // const fetchMyDoggos= async()=>
    //     await fetch('https://dog.ceo/api/breed/hound/images')
    //         .then( response =>  response.json() )
    //         .then(data => data.message[giveMeRandom(1000)])
    //         .then(myRul => setUrl(myRul))

}