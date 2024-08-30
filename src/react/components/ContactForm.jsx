import '../../css/css_components/contactForm.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    console.log(formData);
  };

  return (
    <Form onsubmit={handleFormSubmit} id="form">

      <Form.Group controlId="formName" class="form-input">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail" class="form-input">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formMessage" class="form-input">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}