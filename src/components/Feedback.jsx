import { Form, FormGroup, Label, Input } from 'reactstrap'
import React from 'react';
import './Feedback.scss';

const Result = (props) => {
  const { id } = props;
  
  return (
     <Form
       className={"FeedbackForm"}
       action="https://api.hsforms.com/submissions/v3/integration/submit/2685480/21d02dcf-b335-448d-a6f4-e97b1b8f5867"
       encType="multipart/form-data"
       method="POST"
       target="target_iframe_21d02dcf-b335-448d-a6f4-e97b1b8f5867"
     >
       <FormGroup>
         <Label for={`text-${id}`}>Kysy lisätietoja tai anna palautetta siitä, miltä palkkamallimme vaikuttaa.</Label>
         <Input
           type="textarea"
           name="kysy_lisatietoja"
           id={`text-${id}`}
           placeholder="Kirjoita palautteesi tähän"
           required
         />
       </FormGroup>
       <FormGroup>
         <Label for={`email-${id}`}>Sähköpostiosoite (ei pakollinen)</Label>
         <Input type="email" name="email" id={`email-${id}`} placeholder="esimerkki@palveluntarjoaja.tld" />
       </FormGroup>
       <FormGroup>
         <Label for={`email-${id}`}>Sähköpostiosoite (ei pakollinen)</Label>
         <Input
           type="checkbox"
           name="rekryviestien_tilaus"
           id={`rekryviestien_tilaus-${id}`}
           />
       </FormGroup>
       <button className={"LinkButton ActionButton"}>Lähetä</button>
     </Form>
  );
};

export default Result;
