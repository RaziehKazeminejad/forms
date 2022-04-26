import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import * as Yup from 'yup';
import TextError from '../components/TextError';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  comments: '',
  age: '',
  gender: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

// const validate = values => {
//   let errors = {}

//   if(!values.firstName) {
//     errors.firstName = 'Required!'
//   }
//   if(!values.lastName) {
//     errors.lastName = 'Required!'
//   }
//   if(!values.email) {
//     errors.email = 'Required!'
//   }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }
//   if(!values.age) {
//     errors.age = 'Required!'
//   }
//   return errors
// }

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required!'),
  lastName: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format!').required('Required!'),
  age: Yup.string().required('Required!'),
  gender: Yup.string().required('Reqired!'),
});

export default function formik() {
  // console.log('Visited fields', formik.touched)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          y
          onSubmit={onSubmit}
        >
          <Form className="mt-8 space-y-6">
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="FirstName"
            />
            <ErrorMessage name="firstName" component={TextError} />
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="LastName"
            />
            <ErrorMessage name="lastName">
              {(errorMsg) => <div className="text-red-500">{errorMsg}</div>}
            </ErrorMessage>
            <Field
              type="email"
              id="email"
              name="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <ErrorMessage name="email" component={TextError} />
            <Field
              as="textarea"
              id="comments"
              name="comments"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="comments"
            />
            <Field
              type="number"
              id="age"
              name="age"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="age"
            />
            <ErrorMessage name="age" component={TextError} />
            <select
              name="gender"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <FastField name="address">
              {(props) => {
                console.log('Field render');
                const { field, form, meta } = props;
                return (
                  <div>
                    <input
                      type="text"
                      id="address"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Address"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </FastField>
            <Field
              type="text"
              id="facebook"
              name="social.facebook"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="facebook"
            />
            <Field
              type="text"
              id="twitter"
              name="social.twitter"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="twitter"
            />
            <Field
              type="text"
              id="primaryPh"
              name="phoneNumbers[0]"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="primaryPh"
            />
            <Field
              type="text"
              id="secondaryPh"
              name="phoneNumbers[1]"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="secondaryPh"
            />
            <FieldArray
              type="text"
              id="secondaryPh"
              name="phNumbers"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="List Of PhoneNumbers"
            >
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((phNumbers, index) => (
                      <div key={index}>
                        <Field
                          name={`phNumbers[${index}]`}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            className="mr-0"
                            onClick={() => remove(index)}
                          >
                            {' '}
                            -{' '}
                          </button>
                        )}
                        <button
                          type="button"
                          className="mr-"
                          onClick={() => push('')}
                        >
                          {' '}
                          +{' '}
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
