import { useState } from "react";

const Button = () => {
    const [contador, setContador] = useState(0);

    
    return ( 
        <button onClick={ ()=>setContador(contador + 1)}>Click me {contador}</button>
     );
}

export default Button;