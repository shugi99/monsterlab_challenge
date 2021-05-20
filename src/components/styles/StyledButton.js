import styled from 'styled-components';

export const StyledBtn = styled.button`
  background: #000;
  width: 35%;
  min-width: 200px;
  height: 70px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Abel', sans-serif;
  font-size: 24px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const StyledBtnSmall = styled.button`
  background: #000;
  width: 35%;
  min-width: 100px;
  height: 35px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Abel', sans-serif;
  font-size: 24px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
