import React from 'react';

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      {...props}
      className="rounded-3xl outline-none border-4 border-primaryOrange m-3 p-2 w-full placeholder:text-primaryBlack"
    />
  );
};
