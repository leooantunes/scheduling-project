import { ButtonHTMLAttributes } from 'react';

export const Button = (
  props: React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className="rounded-3xl p-2 bg-primaryOrange text-primaryBlack w-44 m-3"
    />
  );
};
