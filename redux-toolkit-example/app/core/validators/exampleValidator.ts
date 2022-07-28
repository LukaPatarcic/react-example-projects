import * as yup from 'yup';

export const exampleSchema = yup
    .object({
        number: yup.number().required(),
        example: yup.string().required().min(2),
    })
    .required();
