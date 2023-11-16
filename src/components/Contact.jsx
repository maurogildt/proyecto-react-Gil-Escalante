import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit} = useForm()

    const send = (data) =>{
        console.log(data);
    }

    return (
        <div className="container">
            <h1 className="card-panel center purple lighten-4">Contacto</h1>
            <form className="col s12" onSubmit={handleSubmit(send)}>
                <div className="input-field col s12">
                    <input
                        id="nombre"
                        type="text"
                        className="validate"
                        placeholder="Ingresa tu nombre"
                        {...register("nombre")}
                    />
                </div>
                <div className="input-field col s12">
                    <input
                        id="mail"
                        type="email"
                        className="validate"
                        placeholder="Ingresa tu mail"
                        {...register("mail")}
                    />
                </div>
                <div className="input-field col s12">
                    <input
                        id="telefono"
                        type="tel"
                        className="validate"
                        placeholder="Ingresa tu teléfono"
                        {...register("telefono")}
                    />
                </div>
                <button className="btn-large purple lighten-4" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}
 
export default Contact;

