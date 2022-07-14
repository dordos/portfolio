import React from 'react';

const Contact = () => {
  const position: [number, number] = [51.505, -0.09];
  return (
    <div>
      <div>
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum amet consectetur, voluptates tenetur
          exercitationem suscipit sed accusamus esse repudiandae blanditiis, et dolorum quibusdam sit ipsa quidem animi!
          Pariatur, magni?
        </p>

        <div>
          <div>
            <input type='text' />
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
        </div>

        <button>Send message</button>
      </div>
    </div>
  );
};

export default Contact;
