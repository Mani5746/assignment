import Image from 'next/image';

import image from './logo.jpg';
import Navbar from '@component/components/Navbar';
import bodyimage from './chair.jpg';
import Body from '@component/components/Body';
import Secondpage from '@component/components/Secondpage';

const Page = () => {
  // const image='./logo.jpg'
  const img = image;
  return (
    <div>
      <Navbar image={image} />
      {/* <Body   image={bodyimage}  /> */}

      <div className="body-container">
        <div className="body-content">
          <div style={{ fontSize: '5rem' }}>
            Unique housing solutions for you
          </div>
          <div style={{ fontSize: '1.5rem', fontFamily: 'roboto' }}>
            {' '}
            High-Quality,Hasle-Free,and Personalized Buying Made Easy
          </div>

          <button>Browse properties</button>
        </div>

        <div className="body-image">
          <Image src={bodyimage} alt="My Logo" width={370} height={370} />
        </div>
      </div>

      <Secondpage />
    </div>
  );
};

export default Page;
