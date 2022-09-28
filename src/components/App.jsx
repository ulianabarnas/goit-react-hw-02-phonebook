import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';

const initialValues = {
  name: '',
}

// const schema = yup.object().shape({
//     name: yup.string().required(),
// })

export default class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    const handleSubmit = (values, {resetForm}) => {
      console.log(values);
      resetForm();
    };
    return (
      <div>
        <h2>Phonebook</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}>
          <Form autoComplete='off'>
            <label htmlFor=''>Name</label>
            <Field
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name"/>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <ul>

        </ul>
      </div>
    )
  }
}
