import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { object } from 'yup/lib/locale';

const Formulario = () => {
    
    return (
        <div >
          <Formik
          initialValues={{
          name : "",
          lastName:"",
          email:"",
          password:"",
          comfirPass:"",
        }}
        validationSchema={Yup.object().shape({
            name: Yup.string()
            .min(3, "Tu nombre es muy corto")
            .required ("Por favor ingresa tu nombre"),
            
            lastName: Yup.string()
            .min (3, "El apellido es muy corto")
            .required("Por favor ingrese el apellido correctamente"),
            
            email: Yup.string().email
            .email("Correo no valido")
            .min(3, "Este correo electrónico es incorrecto")
            .required("Por favor, ingresa un correo electrónico válido"),
            /*
            password: Yup.string()
            .min("La clave debe contener más de 3 caractes")
            .require ("Por favor ingrese una contraseña"),
            comfirPass: Yup.string()
            .min("La clave debe contener más de 3 caractes")
            .require ("Por favor ingrese la confirmación de la contraseña"),*/
        })}
        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>erro
                <h1>Formulario con Validación</h1>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <Field id= 'name'type="text" className="form-control" placeholder="Name" name='name'/>
                         {errors.name && touched.name && <p>{errors.name}</p>}
                     
                
                         <label className="col-sm-2 col-form-label">Last Name</label>
                         <Field  id= 'lastName' type="text" placeholder="Last name" className="form-control" name='lastName'/>
                         {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
    
                         <label className="col-sm-2 col-form-label">Email  </label>
                         <Field id= 'email' type="text" placeholder="Email" className="form-control" name='email'/>
                         <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
                        <hr>
                        </hr>
    
                        <button type="submit" disabled={Object.values(errors).length > 0}>Agregar </button>
                </Form>
                </div>
        );
        }}
        </Formik>
        </div>
      );
    }
export default Formulario
