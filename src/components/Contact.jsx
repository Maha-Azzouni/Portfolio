import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <p>GET IN TOUCH</p>

        <h2>
          LET'S
          <br />
          TALK
        </h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="standard"
          multiline
          rows={4}
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          className="contact-button"
        >
          SEND MESSAGE ↗
        </Button>

      </form>
    </section>
  );
}

export default Contact;