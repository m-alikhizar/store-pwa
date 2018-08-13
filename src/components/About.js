import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  margin: 100px;
`;

const A = styled.a ``;

const About = () => (
  <Wrapper>
    Github: <A href="https://github.com/khizar-ali/store" target="_blank">https://github.com/khizar-ali/store</A>
  </Wrapper>
);

export default About;
