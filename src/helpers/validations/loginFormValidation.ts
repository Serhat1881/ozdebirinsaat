import * as yup from 'yup';

const loginFormValidation = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
});

export default loginFormValidation;
