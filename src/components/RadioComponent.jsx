import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import React from 'react';
import './RadioComponent.scss';

const RadioComponent = (props) => {
  const { content, handleChoice, selectedOption } = props;

  return (
    <section>
      <Container>
        <h2>{content.title}</h2>
        <p className="Description">{content.description}</p>
        <Form>
          {content.options.map(option => (
            <FormGroup check key={option.id}>
              <Label check className="rad">
                <Input
                  type="radio"
                  name="radio"
                  checked={typeof selectedOption !== 'undefined' && selectedOption === option.id}
                  onChange={() => handleChoice(content.shortTitle, option.id)}
                />
                <i />
                {
                  typeof option.highlightedText !== 'undefined' &&
                  <>
                    <b>{option.highlightedText}</b>
                    <br/>
                  </>
                }
                {option.text}
              </Label>
            </FormGroup>
          ))}
        </Form>
      </Container>
    </section>
  );
};

export default RadioComponent;
