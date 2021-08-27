import React, { useState } from 'react'
import { Formik, Form} from 'formik'
import {TextField} from './TextField'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import ConfermationModal from "./ConfermationModal";


export default function ContactForm() {

  const [open, setOpen] = useState(false);

  const schema = Yup.object().shape({
      Namn: Yup.string().max(15).required("Required"),
      Epost: Yup.string().email("Email is invalid").required("Required"),
      TelefonNummer: Yup.number().required("Required"),
      RegistreringNummer: Yup.number("Must be a number").required("Required"),
      ÖnskatPris: Yup.number().max(15),
      EventuellaDefekter: Yup.string(),
    });
  
    function sendEmail  (values)  {
        
          emailjs
            .send(
              process.env.REACT_APP_serviceId,
              process.env.REACT_APP_templateId,
              values,
              process.env.REACT_APP_userId
            )
            .then(
              () => {
               setOpen(true)
              },
              (error) => {
                prompt("Ooopppsss!");
              }
            );
            
    }
    
  
    
    return (
      <Formik
        initialValues={{
          Namn: "",
          Epost: "",
          TelefonNummer: "",
          RegistreringNummer: "",
          ÖnskatPris: "",
          EventuellaDefekter: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          sendEmail(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {(formik) => (
          <div className="l-form">
            <Form className="form" onSubmit={formik.handleSubmit}>
              <TextField label="Namn" name="Namn" type="text" />
              <TextField label="E-post" name="Epost" type="text" />
              <TextField
                label="Telefon Nummer"
                name="TelefonNummer"
                type="number"
              />
              <TextField
                label="Registrering Nummer"
                name="RegistreringNummer"
                type="number"
              />
              <TextField label="Önskat Pris" name="ÖnskatPris" type="number" />
              <TextField
                label="Eventuella Defekter"
                name="EventuellaDefekter"
                type="text"
              />

              <button
                type="submit"
                className="formButton"
              >
                SKICKA
              </button>
              <ConfermationModal
                setOpen={setOpen}
                open={open}
              />
            </Form>
          </div>
        )}
      </Formik>
    );
}
