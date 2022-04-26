import React from 'react';

export default function Input({ label, name, type = 'text', formik }) {
  return (
    <div>
      <label htmlFor={name} className="text-indigo-600">
        {label}
      </label>
      <input
        {...formik.getFieldProps(name)}
        type={type}
        id={name}
        name={name}
        onBlur={formik.handleBlur}
        className="appearance-none rounded-none relative block w-full px-3 py-2 mt-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
}
