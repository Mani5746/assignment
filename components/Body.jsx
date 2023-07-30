import React from 'react'
import Image from 'next/image';


const Body = ({bodyimage}) => {
  return (
    <div>

      <div className="body-container">
        <div className="body-content">
          

         <div style={{ fontSize: '5rem' }}>Unique housing solutions for you</div>
          <div  style={{ fontSize: '1.5rem' ,fontFamily: 'roboto' }}>  High-Quality,Hasle-Free,and Personalized Buying Made Easy</div>
          

            <button>
              Browse properties
            </button>
          
        </div>

        <div className="body-image">
          <Image src={bodyimage} alt="My Logo" width={370} height={370}  />
        </div>
      </div>

    </div>
  )
}

export default Body