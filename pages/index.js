import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <h2 className="font-bold text-2xl">Forms In React</h2>
      <div className="flex flex-col items-center border-b-2 border-indigo-100 py-10 w-60">
        <h2 className="text-xl pb-3">FORMIK</h2>
        <Link href="/oldformik">Formik (old version)</Link>
        <Link href="/formik">Formik</Link>
      </div>
      <div className="flex flex-col items-center border-b-2 border-indigo-100 py-10 w-60">
        <h2 className="text-xl pb-3">REACT HOOK FORM</h2>
        <Link href="/reacthookform">React Hook Form</Link>
      </div>
    </div>
  );
}
