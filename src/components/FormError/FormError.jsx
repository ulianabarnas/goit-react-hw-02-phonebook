import { ErrorMessage } from "formik";
import styled from "styled-components";


export default function FormError({ name }) {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    );
};

const ErrorText = styled.p`
    color: red;
`