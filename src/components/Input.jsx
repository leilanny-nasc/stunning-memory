import { useState } from "react";

const Input = () => {

    const [nome, setnome] = useState("");

    return (  
        <>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setnome(e.target.value)}/>
            <button>mostrar</button>
            <h1>{nome}</h1>
        </>
    );
}
 
export default Input;