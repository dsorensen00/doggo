import React, { useEffect } from 'react'
import Navbar from './Navbar';


export default ()=>{

const getDoggo = JSON.parse(localStorage.getItem('doggo'));

useEffect(
    ()=>{
        JSON.parse(localStorage.getItem('doggo'));
    }
)

return(
    <>
        <div className="container-fluid">
            <div className="row nav-top">    
                <Navbar className="col-sm-3 "/>
                <div className="col-sm-9 text-center top">         
                    
                        {getDoggo.map((element, index)=>{
                            return(
                            <div key={index} >
                                <div className="img-thumbnail">
                                    <img height="500" width="500" src={element.URL} alt="" />
                                    <h3>You rated this fella: {element.Rating}</h3>
                                </div>
                            </div>
                            )
                        })}

                </div>
            </div>
        </div>
    
    
    
    </>




)
}