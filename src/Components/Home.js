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
        await doggo.unshift({
            "URL":`${url}`,
            "Rating":e.target.value
        });
        localStorage.setItem('doggo', JSON.stringify(doggo));
        
    }

    const makeBark = () =>{
        const bark = new Audio();
        bark.src = "./Sounds/bark.wav"
    }
   
    useEffect(
         () => {
            fetchMyDoggo();
        }, []
    );

    
    return(
        <>
           
            <div className="container text-center">
                <div className="row justify-content-around">    
                    <img src={url} alt="Cute Dog" height="500px" width="500px"/>
                </div>
                <button onClick={ fetchMyDoggo } className="btn btn-primary button-hover">GIVE ME A NEW DOGGO</button>
                <h1>Rate this Doggo between 10-16</h1>
                <div className="row justify-content-around">
                    <button value='10' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">10</button>
                    <button value='11' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">11</button>
                    <button value='12' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">12</button>
                    <button value='13' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">13</button>
                    <button value='14' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">14</button>
                    <button value='15' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">15</button>
                    <button value='16' onClick={e=>cacheMyDoggo(e)} className="btn btn-primary button-hover-special">16</button>
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