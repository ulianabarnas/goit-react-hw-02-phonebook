import FormError from 'components/FormError/FormError';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: '',
    number: '',
}

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = yup.object().shape({
    name: yup.string().matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces.').required('Please fill in the name'),

    number: yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Please fill in the number'),
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
                    />
                </label>
                <FormError name="name" />

                <label>Number
                    <Field
                        type="tel"
                        name="number"
                    />
                </label>
                <FormError name="number" />
                
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}
