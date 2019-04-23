import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'



export default ()=>{

    const [url, setUrl]= useState()
    const [doggo, setDoggo]=useState([])

    const check =()=>{ if(doggo === undefined){
            setDoggo([])
    }else if(doggo === null){
            setDoggo([])
    };
    }


    const fetchMyDoggo= async()=>{
        await fetch(`https://dog.ceo/api/breeds/image/random`)
            .then( response =>  response.json() )
            .then(data => data.message)
            .then(theUrl => setUrl(theUrl));
    }

    
    const cacheMyDoggo = async (e)=>{
        console.log(e.target)
        e.preventDefault();
        e.persist();
        await check();
        await doggo.unshift({
            "URL":`${url}`,
            "Rating":e.target.value
        });
        await localStorage.setItem('doggo', JSON.stringify(doggo));
        
    }

    const makeBark = () =>{
        const bark = new Audio();
        bark.src = "./Sounds/bark.wav"
    }

    useEffect(
        ()=>{
            fetchMyDoggo();
            check()
        }, []
    )

    
    return(
        <>
           
           <div className="container-fluid">
                <div className="row nav-top">    
                    <Navbar className="col-sm-3 "/>
                    <div className="col-sm-9 text-center top">    
                        <div >
                            <h1>Random Doggos!</h1>    
                            <div>    
                                <img src={url} alt="Cute Dog" height="500px" width="500px"/>
                            </div>
                            <button onClick={ fetchMyDoggo } className="btn btn-danger button-hover">GIVE ME A NEW DOGGO</button>
                            <h1>Rate this Doggo out of 10 between 10-16</h1>
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
                    </div>
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