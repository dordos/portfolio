import React from "react";
import {
  ContactContainer,
  ContactDescription,
  ContactInputs,
  InputFirst,
  InputThird,
  InputSecond,
  ContactSocials,
} from "./style";

const Contact = () => {
  const socialsTitle = `.socials {`;
  return (
    <ContactContainer>
      <ContactDescription>
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          harum amet consectetur, voluptates tenetur exercitationem suscipit sed
          accusamus esse repudiandae blanditiis, et dolorum quibusdam sit ipsa
          quidem animi! Pariatur, magni?
        </p>

        <ContactInputs>
          <InputFirst>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </InputFirst>
          <InputSecond>
            <input type="text" placeholder="Subject" />
          </InputSecond>
          <InputThird>
            <textarea placeholder="Message" />
          </InputThird>
        </ContactInputs>

        <button>Send message</button>
      </ContactDescription>
      <ContactSocials>
        <h1>{socialsTitle}</h1>
        <div>
          <span>e-mail : </span>
          <a>pdhssf@gmail.com</a>
        </div>
        <div>
          <span>web-site : </span>
          <a>www.abc.com</a>
        </div>
        <div>
          <span>github : </span>
          <a>https://github.com/dordos</a>
        </div>
        <div>
          <span>linkedin : </span>
          <a>wwww</a>
        </div>
      </ContactSocials>
    </ContactContainer>
  );
};

export default Contact;
