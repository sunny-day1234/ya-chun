import React from "react";
import styled from "styled-components";

const AgeGroupPriceListWrapper = styled.div`
  margin: auto;
  width: 550px;
`;

const GroupWrapper = styled.div`
  margin-bottom: 25px;

  border-top: ${({ index }) => {
    return index > 0 ? "1px solid gray" : "none";
  }};
`;

const SettingBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -10px;
  font-weight: bold;
`;

const RemoveBoxWrapper = styled.div`
  color: #ff2626;
  cursor: pointer;
`;

const AddNewBoxWrapper = styled.div`
  width: 100px;
  max-width: 200px;
  font-weight: bold;
  cursor: pointer;

  color: ${({ isEnableAddNewOne }) => {
    return isEnableAddNewOne ? "#009933" : "gray";
  }};

  cursor: ${({ isEnableAddNewOne }) => {
    return isEnableAddNewOne ? "pointer" : "not-allowed";
  }};
`;

export {
  AgeGroupPriceListWrapper,
  GroupWrapper,
  TextBoxWrapper,
  SettingBoxWrapper,
  RemoveBoxWrapper,
  AddNewBoxWrapper,
};
