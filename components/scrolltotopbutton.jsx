import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const StyledButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: teal;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;
  opacity: ${props => (props.isVisible ? '1' : '0')};
`;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);
    return () => {
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledButton isVisible={isVisible} onClick={scrollToTop}>
      <FaArrowCircleUp />
    </StyledButton>
  );
}

export default ScrollToTopButton;
