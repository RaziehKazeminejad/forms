/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import Select from '../components/Select';

const selectOptions = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
];

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required!'),
  lastName: Yup.string().required('Last name is required!'),
  email: Yup.string()
    .email('Invalid email format!')
    .required('Email is required!'),
  age: Yup.string().required('Age is required!'),
  gender: Yup.string().required('Gender is required!'),
});

export default function oldformik() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log('Visited fields', formik.touched);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          <Input label="First Name" name="firstName" formik={formik} />
          <Input label="Last Name" name="lastName" formik={formik} />
          <Input label="Email" name="email" formik={formik} />
          <Input label="Age" name="age" formik={formik} />
          <Select selectOptions={selectOptions} name="gender" formik={formik} />
          {/* <select
            onBlur={formik.handleBlur}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
