import Typed from 'typed.js';
import React, { Component } from 'react';
import styled from 'styled-components';

const Element = styled.span`
  text-align: center;
`;

const words = ['Welcome to STEMBridge.', 'Here We Educate the Future.', 'Our Courses Boost the Next Generation.'];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <Element
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
