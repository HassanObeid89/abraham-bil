import React, { useState } from 'react'
import { Formik, Form} from "formik";
import {TextField} from './TextField'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import ConfirmationModal from "./ConfirmationModal";
import { Loader, Button, Icon } from "semantic-ui-react";


export default function ContactForm() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    Namn: Yup.string().max(15).required("Obligatoriskt"),
    Epost: Yup.string().email("Ogiltig mejladress").required("Obligatoriskt"),
    TelefonNummer: Yup.number("Ange bara siffror").required("Obligatoriskt"),
    RegistreringNummer:
      Yup.string().required("Obligatoriskt"),
    ÖnskatPris: Yup.number(),
    EventuellaDefekter: Yup.string(),
  });
  
    function sendEmail  (values)  {
        setLoading(true)
          emailjs
            .send(
              process.env.REACT_APP_serviceId,
              process.env.REACT_APP_templateId,
              values,
              process.env.REACT_APP_userId
            )
            .then(
              () => {
                setLoading(false)
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
        isSubmitting={() => {
          <Loader />;
        }}
        validationSchema={schema}
        onSubmit={(values, { isSubmitting, setSubmitting, resetForm }) => {
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
                label="Telefonnummer"
                name="TelefonNummer"
                type="number"
              />
              <div className="regnummer">
                <TextField
                  label="Registreringsnummer"
                  name="RegistreringNummer"
                  type="text"
                />
                <div className="license-plate-search-plate">S</div>
              </div>

              <TextField label="Önskat Pris" name="ÖnskatPris" type="number" />
              <TextField
                label="Eventuella defekter"
                name="EventuellaDefekter"
                type="text"
              />
              <Button
                size={"large"}
                style={{ align: "center" }}
                loading={loading}
                primary
                type="submit"
                animated
              >
                <Button.Content visible>SKICKA</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <ConfirmationModal setOpen={setOpen} open={open} />
            </Form>
          </div>
        )}
      </Formik>
    );
}
