import React from 'react'
import "./formContact.css"
import { Formik } from 'formik'

const FormContact = () => {

    return (
        <div className='formContactContainer'>
            <Formik
                onSubmit={ (valores) => {
                    console.log(valores)
                }}
                initialValues = {{
                    nombre: "",
                    correo: ""
                }}

                validate = { (values) =>{
                    
                    let errors = {}

                    if(!values.nombre){
                        errors.nombre = ("Ingresar un nombre")

                    }

                    if(!values.correo){
                        errors.correo = ("Ingresar un correo")
                    }

                    return errors

                    }
                } 
          
            >
                { ({values, handleSubmit, handleChange, handleBlur, errors})=>(
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
                            {errors.nombre && <div className='error'>{errors.nombre} </div> }

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
                            {errors.correo && <div className='error'>{errors.correo} </div> }
                        </div>

                        <button type='submit'>Request Invite</button>
                    </form>
              ) }  
            </Formik>
        </div>
    
    )
}

export default FormContact