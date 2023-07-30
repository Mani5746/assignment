import React from 'react';

import { BiSolidCheckShield } from 'react-icons/bi';

import { BiSolidUserCircle } from 'react-icons/bi';

import { IoDiamondOutline } from 'react-icons/io5';

import { PiSmileyThin } from 'react-icons/pi';
const Secondpage = () => {
  return (
    <div>
      <div className="second-container">
        <h1> We are here to revolutionize your experience</h1>

        <div className="second-content">
          <div className="element">
            <BiSolidCheckShield size={100} color="#8c52ff" />
            <h4> Lorem ipsum</h4>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum
            </div>
          </div>

          <div className="element">
            <BiSolidUserCircle size={100} color="#8c52ff" />
            <h4> Lorem ipsum</h4>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum
            </div>
          </div>

          <div className="element">
            <IoDiamondOutline size={100} color="#8c52ff" />
            <h4> Lorem ipsum</h4>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum
            </div>
          </div>

          <div className="element">
            <PiSmileyThin size={100} color="#8c52ff" />
            <h4> Lorem ipsum</h4>
            <div>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
