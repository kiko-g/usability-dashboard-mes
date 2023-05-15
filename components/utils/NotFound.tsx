import Link from 'next/link';
import React from 'react';

type Props = {
  message?: string;
};

export default function NotFound({ message }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded border border-rose-700 bg-rose-700/10 p-8 dark:bg-rose-700/20">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white md:text-5xl">Uh-oh!</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {message ? message : 'There was a problem loading the content'} ❌
      </p>
    </div>
  );
}
