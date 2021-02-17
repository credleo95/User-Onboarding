import * as yup from 'yup'; 


    const Schema = yup.object().shape({
        name: yup.string().required('name is required').min(2, 'name needs to have more than 2 characters'),
        email: yup.string().email().required('email is required'),
        password: yup.string().required('password is required'),
        agree: yup.boolean().oneOf([true],'You must agree to the Terms of Service.')
    })

    export default Schema 