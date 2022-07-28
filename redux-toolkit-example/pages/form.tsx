import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../app/core/hooks/useAppSelector';
import { exampleSchema } from '../app/core/validators/exampleValidator';
import {
    incrementByAmount,
    selectCount,
} from '../app/features/counter/counterSlice';

type Inputs = {
    number: number;
    example: string;
};

const Forms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(exampleSchema),
        defaultValues: {
            example: 'Hello World',
        },
    });
    const dispatch = useDispatch();
    const count = useAppSelector(selectCount);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(incrementByAmount(data.number));
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register('number')} />
            <br />
            {errors.number?.message} <br />
            <input {...register('example')} />
            <br />
            {errors.example?.message}
            <br />
            <input type="submit" />
            {count}
        </form>
    );
};

export default Forms;
