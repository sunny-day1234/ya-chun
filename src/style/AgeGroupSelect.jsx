import React from "react";
import styled from "styled-components";

const AgeGroupSelectWrapper = styled.div`
  margin: 10px 0;
  width: 250px;
  height: 100px;
`;

const TextWrapper = styled.p`
  margin-bottom: 5px;
  color: gray;
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;

const RangeWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  border: 1px solid #808080;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
`;

const SelectWrapper = styled.select`
  width: 45%;
  height: 100%;
  padding-left: 5px;

  &.left {
    border-radius: 5px 0 0 5px;
  }

  &.right {
    border-radius: 0 5px 5px 0;
  }

  border-color: ${({ isShowError }) => {
    return isShowError ? "red" : "normal";
  }};
`;

export {
  AgeGroupSelectWrapper,
  TextWrapper,
  BoxWrapper,
  RangeWrapper,
  SelectWrapper,
};
