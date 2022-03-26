import React, {useState} from 'react'
import "./formContact.css"
import { ErrorMessage, Formik } from 'formik'

const FormContact = () => {

    const [formularioEnviado, SetformularioEnviado] = useState(false)

    return (
        <div className='formContactContainer'>
            <Formik
                onSubmit={ (valores, {resetForm}) => {     // Desde aca podemos enviar estos valores a una BDD o API o lo q sea.
                    resetForm()    // resetea el form
                    console.log(valores)
                    SetformularioEnviado(true)
                    setTimeout(() => SetformularioEnviado(false),5000)
                }}
                initialValues = {{
                    nombre: "",
                    correo: ""
                }}

                validate = { (values) =>{
                    
                    let errors = {}
                    //validacion nombre
                    if(!values.nombre){
                        errors.nombre = ("Please enter a name")

                    }
                    //validacion correo
                    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                    if(!values.correo){
                        errors.correo = ("Please enter a email")
                    }else if(!validEmail.test(values.correo)){
                        errors.correo = "Please enter a valid email"
                    }

                    return errors

                    }
                } 
        
            >
                {/* values = acceder a valores y podes poner valores por defecto. 
                habdleChange = permite que el usuario escriba en el form.  
                errors = accede a los errores. 
                touched = sabe si el usuario toco el campo
                onBlur = sirve para q toched funcione, con esto formik sabe a que campos entraste. En un principio creo que evita que se muestren errores hasta q el usuario termine de escribir y toque en otro lado*/}
                { ({values, handleSubmit, handleChange, handleBlur, errors, touched})=>(
                    <form action='' className='formulario' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='nombre'>Name</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name='nombre' 
                                placeholder='John Doe' 
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                            {touched.nombre && errors.nombre && <div className='error'>{errors.nombre} </div> }

                        </div>

                        <div>
                            <label htmlFor='correo'>Email</label>
                            <input 
                                type="text" 
                                id="correo" 
                                name='correo' 
                                placeholder="correo@correo.com" 
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}   
                            />
                            {touched.correo && errors.correo && <div className='error'>{errors.correo} </div> }
                        </div>

                        <button type='submit'>Send</button>

                        {formularioEnviado && <p className='exito'> You will recive an email soon !</p>}
                    </form>
              ) }  
            </Formik>
        </div>
    
    )
}

export default FormContact