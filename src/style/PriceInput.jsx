import React from "react";
import styled from "styled-components";

const PriceInputWrapper = styled.div`
  margin: 10px 0;
  width: 250px;
  height: 100px;
`;

const TextWrapper = styled.p`
  margin-bottom: 5px;
  color: gray;
  &.info {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;

const CurrencyWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  border: 1px solid #808080;
  border-right: none;
  border-radius: 5px 0 0 5px;
  box-sizing: border-box;
`;

const InputWrapper = styled.input`
  width: 75%;
  height: 100%;
  border: 1px solid #808080;
  border-radius: 0 5px 5px 0;
  box-sizing: border-box;
  padding-left: 10px;
  &:focus {
    outline: ${({ isShowError }) => {
      return isShowError ? "none" : "normal";
    }};
    border-color: ${({ isShowError }) => {
      return isShowError ? "red" : "blue";
    }};
  }
`;

export {
  PriceInputWrapper,
  BoxWrapper,
  CurrencyWrapper,
  InputWrapper,
  TextWrapper,
};
