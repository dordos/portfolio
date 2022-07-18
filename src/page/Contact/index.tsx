import React from "react";
import {
  ContactContainer,
  ContactDescription,
  ContactMap,
  ContactInputs,
  InputFirst,
  InputThird,
  InputSecond,
} from "./style";
import Map from "../../components/Map";

const Contact = () => {
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

      <ContactMap>
        <Map></Map>
      </ContactMap>
    </ContactContainer>
  );
};

export default Contact;
