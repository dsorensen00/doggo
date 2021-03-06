import React, { useState } from 'react'
import Navbar from './Navbar'

export default ()=>{
    
    const [breed, setBreed] = useState('/affenpinscher')
    const [url, setUrl] = useState('https://images.dog.ceo/breeds/germanshepherd/n02106662_3815.jpg')
    const [doggo, setDoggo]=useState([])

    
    const check =()=>{ if(doggo === undefined){
        setDoggo([])
    }else if(doggo === null){
            setDoggo([])
    };
    }

    const chooseBreed = async(e) =>{
        e.preventDefault();
        await fetch(`https://dog.ceo/api/breed${breed}/images/random`)
            .then( response =>  response.json() )
            .then(data => data.message)
            .then(theUrl => setUrl(theUrl));
    }

    const cacheMyDoggo = async (e)=>{
        e.preventDefault();
        e.persist();
        await check()
        await doggo.unshift({
            "URL":`${url}`,
            "Rating":e.target.value
        });
        localStorage.setItem('doggo', JSON.stringify(doggo));
        console.log(doggo)
    }

    
    

    return(
        <>
            <div className="container-fluid">
                <div className="row">    
                    <Navbar className="col-sm-3"/>
                    <div className="col-sm-9 top">    
                        <div className="row text-center">    
                            <div className="col-sm-12 col-md-8">    
                                <img src={url} alt="Cute Dog" height="500px" width="500px"/>
                            </div>
                            <div className="col-sm-4 text-left">    
                                <h3>Choose Your Doggo</h3>
                                <form onSubmit={e=>chooseBreed(e)}>
                                    <select onChange={e=>setBreed(e.target.value)} className="input-group-select">
                                            <option value="/affenpinscher">affenpinscher</option>
                                            <option value="/african">african</option>
                                            <option value="/airedale">airedale</option>
                                            <option value="/akita">akita</option>
                                            <option value="/appenzeller">appenzeller</option>
                                            <option value="/basenji">basenji</option>
                                            <option value="/beagle">beagle</option>
                                            <option value="/bluetick">bluetick</option>
                                            <option value="/borzoi">borzoi</option>
                                            <option value="/bouvier">bouvier</option>
                                            <option value="/boxer">boxer</option>
                                            <option value="/brabancon">brabancon</option>
                                            <option value="/briard">briard</option>
                                            <option value="/bulldog-boston">boston bulldog</option>
                                            <option value="/bulldog-english">english bulldog</option>
                                            <option value="/bulldog-french">french bulldog</option>
                                            <option value="/bullterrier-staffordshire">staffordshire bullterrier</option>
                                            <option value="/cairn">cairn</option>
                                            <option value="/cattledog-australian">australian cattledog</option>
                                            <option value="/chihuahua">chihuahua</option>
                                            <option value="/chow">chow</option>
                                            <option value="/clumber">clumber</option>
                                            <option value="/cockapoo">cockapoo</option>
                                            <option value="/collie-border">border collie</option>
                                            <option value="/coonhound">coonhound</option>
                                            <option value="/corgi-cardigan">cardigan corgi</option>
                                            <option value="/cotondetulear">cotondetulear</option>
                                            <option value="/dachshund">dachshund</option>
                                            <option value="/dalmatian">dalmatian</option>
                                            <option value="/dane-great">great dane</option>
                                            <option value="/deerhound-scottish">scottish deerhound</option>
                                            <option value="/dhole">dhole</option>
                                            <option value="/dingo">dingo</option>
                                            <option value="/doberman">doberman</option>
                                            <option value="/elkhound-norwegian">norwegian elkhound</option>
                                            <option value="/entlebucher">entlebucher</option>
                                            <option value="/eskimo">eskimo</option>
                                            <option value="/frise-bichon">bichon frise</option>
                                            <option value="/germanshepherd">germanshepherd</option>
                                            <option value="/greyhound-italian">italian greyhound</option>
                                            <option value="/groenendael">groenendael</option>
                                            <option value="/hound-afghan">afghan hound</option>
                                            <option value="/hound-basset">basset hound</option>
                                            <option value="/hound-blood">blood hound</option>
                                            <option value="/hound-english">english hound</option>
                                            <option value="/hound-ibizan">ibizan hound</option>
                                            <option value="/hound-walker">walker hound</option>
                                            <option value="/husky">husky</option>
                                            <option value="/keeshond">keeshond</option>
                                            <option value="/kelpie">kelpie</option>
                                            <option value="/komondor">komondor</option>
                                            <option value="/kuvasz">kuvasz</option>
                                            <option value="/labrador">labrador</option>
                                            <option value="/leonberg">leonberg</option>
                                            <option value="/lhasa">lhasa</option>
                                            <option value="/malamute">malamute</option>
                                            <option value="/malinois">malinois</option>
                                            <option value="/maltese">maltese</option>
                                            <option value="/mastiff-bull">bull mastiff</option>
                                            <option value="/mastiff-english">english mastiff</option>
                                            <option value="/mastiff-tibetan">tibetan mastiff</option>
                                            <option value="/mexicanhairless">mexicanhairless</option>
                                            <option value="/mix">mix</option>
                                            <option value="/mountain-bernese">bernese mountain</option>
                                            <option value="/mountain-swiss">swiss mountain</option>
                                            <option value="/newfoundland">newfoundland</option>
                                            <option value="/otterhound">otterhound</option>
                                            <option value="/papillon">papillon</option>
                                            <option value="/pekinese">pekinese</option>
                                            <option value="/pembroke">pembroke</option>
                                            <option value="/pinscher-miniature">miniature pinscher</option>
                                            <option value="/pointer-german">german pointer</option>
                                            <option value="/pointer-germanlonghair">germanlonghair pointer</option>
                                            <option value="/pomeranian">pomeranian</option>
                                            <option value="/poodle-miniature">miniature poodle</option>
                                            <option value="/poodle-standard">standard poodle</option>
                                            <option value="/poodle-toy">toy poodle</option>
                                            <option value="/pug">pug</option>
                                            <option value="/puggle">puggle</option>
                                            <option value="/pyrenees">pyrenees</option>
                                            <option value="/redbone">redbone</option>
                                            <option value="/retriever-chesapeake">chesapeake retriever</option>
                                            <option value="/retriever-curly">curly retriever</option>
                                            <option value="/retriever-flatcoated">flatcoated retriever</option>
                                            <option value="/retriever-golden">golden retriever</option>
                                            <option value="/ridgeback-rhodesian">rhodesian ridgeback</option>
                                            <option value="/rottweiler">rottweiler</option>
                                            <option value="/saluki">saluki</option>
                                            <option value="/samoyed">samoyed</option>
                                            <option value="/schipperke">schipperke</option>
                                            <option value="/schnauzer-giant">giant schnauzer</option>
                                            <option value="/schnauzer-miniature">miniature schnauzer</option>
                                            <option value="/setter-english">english setter</option>
                                            <option value="/setter-gordon">gordon setter</option>
                                            <option value="/setter-irish">irish setter</option>
                                            <option value="/sheepdog-english">english sheepdog</option>
                                            <option value="/sheepdog-shetland">shetland sheepdog</option>
                                            <option value="/shiba">shiba</option>
                                            <option value="/shihtzu">shihtzu</option>
                                            <option value="/spaniel-blenheim">blenheim spaniel</option>
                                            <option value="/spaniel-brittany">brittany spaniel</option>
                                            <option value="/spaniel-cocker">cocker spaniel</option>
                                            <option value="/spaniel-irish">irish spaniel</option>
                                            <option value="/spaniel-japanese">japanese spaniel</option>
                                            <option value="/spaniel-sussex">sussex spaniel</option>
                                            <option value="/spaniel-welsh">welsh spaniel</option>
                                            <option value="/springer-english">english springer</option>
                                            <option value="/stbernard">stbernard</option>
                                            <option value="/terrier-american">american terrier</option>
                                            <option value="/terrier-australian">australian terrier</option>
                                            <option value="/terrier-bedlington">bedlington terrier</option>
                                            <option value="/terrier-border">border terrier</option>
                                            <option value="/terrier-dandie">dandie terrier</option>
                                            <option value="/terrier-fox">fox terrier</option>
                                            <option value="/terrier-irish">irish terrier</option>
                                            <option value="/terrier-kerryblue">kerryblue terrier</option>
                                            <option value="/terrier-lakeland">lakeland terrier</option>
                                            <option value="/terrier-norfolk">norfolk terrier</option>
                                            <option value="/terrier-norwich">norwich terrier</option>
                                            <option value="/terrier-patterdale">patterdale terrier</option>
                                            <option value="/terrier-russell">russell terrier</option>
                                            <option value="/terrier-scottish">scottish terrier</option>
                                            <option value="/terrier-sealyham">sealyham terrier</option>
                                            <option value="/terrier-silky">silky terrier</option>
                                            <option value="/terrier-tibetan">tibetan terrier</option>
                                            <option value="/terrier-toy">toy terrier</option>
                                            <option value="/terrier-westhighland">westhighland terrier</option>
                                            <option value="/terrier-wheaten">wheaten terrier</option>
                                            <option value="/terrier-yorkshire">yorkshire terrier</option>
                                            <option value="/vizsla">vizsla</option>
                                            <option value="/weimaraner">weimaraner</option>
                                            <option value="/whippet">whippet</option>
                                            <option value="/wolfhound-irish">irish wolfhound</option>
                                    </select>
                                    <button type="submit" className="btn btn-primary button-hover">Give me a Doggo!</button>
                                </form>
                            </div>
                        </div>
                        <div className="container text-center">
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
}