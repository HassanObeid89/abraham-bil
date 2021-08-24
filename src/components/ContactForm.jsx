import React from 'react'
import { Formik, Form } from 'formik'
import {TextField} from './TextField'
import * as Yup from 'yup'

export default function ContactForm() {
    const validate = Yup.object({
      Namn: Yup.string().max(15).required("Required"),
      Epost: Yup.string().email("Email is invalid").required("Required"),
      TelefonNummer: Yup.number().required("Required"),
      RegistreringNummer: Yup.number("Must be a number").required("Required"),
      ÖnskatPris: Yup.number().max(15),
      EventuellaDefekter: Yup.string(),
    });
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
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
      >
        {(formik) => (
          <div>
            
            <Form>
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
              <button mailto='hassan.obeid.ho@hotmail.com' type='submit'>SKICKA</button>
            </Form>
          </div>
        )}
      </Formik>
    );
}
