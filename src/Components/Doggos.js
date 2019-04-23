import React from 'react'


export default ()=>{

const getDoggo = JSON.parse(localStorage.getItem('doggo'));
console.log(getDoggo)


return(
    <>
        {getDoggo.map((element, index)=>{
            return(<div key={index}>
                <img src={element.URL} />
                <h3>You rated this fella: {element.Rating}</h3>
            </div>
            )
        })}
        
    </>




)
}