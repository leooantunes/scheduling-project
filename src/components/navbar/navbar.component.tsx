import Logo from '@/assets/logo.svg';

export const Navbar = () => {
  return (
    <nav
      className=" mx-auto bg-secundaryOrange flex items-center justify-center rounded-br-3xl rounded-bl-3xl text-primaryBlack"
      aria-label="Global"
    >
      <img src={Logo} alt="" className="w-32" />
    </nav>
  );
};
