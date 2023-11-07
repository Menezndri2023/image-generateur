import { useState , useEffect } from 'react'
import "./Compteur.css"


const Compteur = () =>{ 
const [count, setCount] = useState(0)
const Image = [
    { id: 1, src:"https://www.google.com/search?q=image&oq=image+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgkIAhAjGCcYigUyCQgDECMYJxiKBTIGCAQQRRg7Mg0IBRAAGIMBGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCTExOTI3ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#vhid=5WV5lEKRaB63fM&vssid=l" },
    { id: 2, src: "https://www.google.com/search?q=image&oq=image+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgkIAhAjGCcYigUyCQgDECMYJxiKBTIGCAQQRRg7Mg0IBRAAGIMBGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCTExOTI3ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#imgrc=sc-95DlELfMZnM&imgdii=fyzehDjTXkbGPM" },
    { id: 3, src: "https://www.google.com/search?q=image&oq=image+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgkIAhAjGCcYigUyCQgDECMYJxiKBTIGCAQQRRg7Mg0IBRAAGIMBGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCTExOTI3ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#imgrc=5WV5lEKRaB63fM&imgdii=foHsjouGZ_V_fM" },
]
  
const clickMe = () => {
    setCount(count + 1)
};

useEffect(()=>{
    console.log(count)
}[Image]);

return ( 
    <div>
        <h1>{count}</h1>
        <button onClick={clickMe}>Click Me</button>
    </div>
)
}

export default Compteur