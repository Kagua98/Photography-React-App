import React from 'react';

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {

    return (
        <div className="app__social">
            <div>
               <FaLinkedin />
            </div>

            <div>
              <FaGithub />
            </div>

            <div>
                <BsTwitter />
            </div>

            <div>
                <BsInstagram />
            </div>
        </div>
    )

}

export default SocialMedia