import { useState,useEffect} from 'react'
import "./CompteurImage.css"
const images = [
    { id: 1, src:"https://i.pinimg.com/564x/9a/87/88/9a8788a7620bb7ea6dbe419cb69b63d0.jpg" },
    { id: 2, src: "https://i.pinimg.com/736x/99/a2/b9/99a2b982c1c75ba3a1949ed9f91f6bdc.jpg" },
    { id: 3, src: "https://i.pinimg.com/564x/73/5c/30/735c30510cec9dbfc34af4c1ac402b06.jpg" },
];  

const CompteurImage = () =>{ 
const [imageItem, setImageItem] = useState([]);
const [title,setTitle] = useState("");

 useEffect(()=>{
    console.log("welcome to the forest")


    window.scroll({
        top: Number.MAX_SAFE_INTEGER,
        behavior: 'smooth',
      })
 },[imageItem])


  
 useEffect(()=>{
    console.log("title")

    document.title = title
 },[title])

const handleButtonClick = (id) => { 
    const newImage = images.find((item)=> item.id == id)
    if(newImage){ 
      const generate = { id: self.crypto.randomUUID(),
                 src: newImage.src }
         setImageItem(prev =>[...prev, generate])
        }
       };

       const handleImageDelete = (id) => {
        setImageItem(prev => prev.filter(image => image.id !== id))
    }

    
    return (
       <div className='contener'>
           {imageItem.map(({id,src}) =>(
               <img  key={id} src={src} alt='noPhoto' onClick={()=> handleImageDelete(id)}/>  
               ))}
            <h1>  capitaine magalus cretus <br />
                :{title}
            </h1>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />


            <div className='buttonContener'>
                    <button className='button1'onClick ={()=>handleButtonClick(1)}>jerry smile</button>
                    <button className='button1'onClick= {()=>handleButtonClick(2)}>Narutomo</button>
                    <button className='button1'onClick=  {()=>handleButtonClick(3)}>Mamie chou</button>
             </div>
       </div>
    );
    };


export default CompteurImage