import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: '',
    number: '',
}

const validationSchema = yup.object().shape({
    name: yup.string('Name may contain only letters, apostrophe, dash and spaces').required(),
    number: yup.number("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required(),
})

export default function ContactForm({addContact}) {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        addContact(values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form autoComplete='off'>
                <label>Name
                    <Field
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // required
                    />
                </label>
                <ErrorMessage name="name" />

                <label>Number
                    <Field
                        type="tel"
                        name="number"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // required
                    />
                </label>
                <ErrorMessage name="name" />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}
