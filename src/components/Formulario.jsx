import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
            
            email: Yup.string()
            .email("Correo no valido")
            .min(3, "Este correo electrónico es incorrecto")
            .required("Por favor, ingresa un correo electrónico válido"),
            
            password: Yup.string()
            .equals([Yup.ref('comfirPass'), null], "las contraseñas no son iguales")
            .min(3, "La clave debe contener más de 3 caractes")
            .required("Por favor ingrese una contraseña"),

            comfirPass: Yup.string()
            .equals([Yup.ref('password'), null], "las contraseñas no son iguales")
            .min(3, "La clave debe contener más de 3 caractes")
            .required("Por favor ingrese la confirmación de la contraseña"),
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

                         <label className="col-sm-2 col-form-label">Password</label>
                         <Field  id= 'password' type="password" placeholder="Password" className="form-control" name='password'/>
                         {errors.password && touched.password && <p>{errors.password}</p>}

                         <label className="col-sm-2 col-form-label"> Confirm Password</label>
                         <Field  id= 'comfirPass' type="password" placeholder="Confirmar password" className="form-control" name='comfirPass'/>
                         {errors.comfirPass && touched.comfirPass && <p>{errors.comfirPass}</p>}
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
