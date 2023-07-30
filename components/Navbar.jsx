import Image from 'next/image';
// import image from '../app/logo.jpg'

const Navbar = ({ image }) => {
  return (
    <div className='navbar'>

      <Image src={image} alt="My Logo" width={50} height={50} />
      <div className='nav-text'>QAIBA HOMES</div>
    </div>
  );
};

export default Navbar;