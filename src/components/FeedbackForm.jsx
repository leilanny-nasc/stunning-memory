import { useState } from "react";

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email:  '',
        comentario: ''
    })

    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDeFault();
        setSubmit(true)
    }

    return ( 
        <div>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                        <input 
                        type="text" 
                        name="nome" 
                        value={formData.nome} 
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Comentário:</label>
                        <textarea 
                        name="comentario" 
                        value={formData.comentario} 
                        onChange={handleChange} />
                </div>
                <button type="submit">Enviar</button>
            </form>

            {submit &&(
                <div>
                    <h2>Informações Coletadas</h2>
                    <p><strong>Nome:</strong>{formData.nome}</p>
                    <p><strong>Email:</strong>{formData.email}</p>
                    <p><strong>Comentario:</strong>{formData.comentario}</p>

                </div>
            )}

        </div>
     );
}
 
export default FeedbackForm;