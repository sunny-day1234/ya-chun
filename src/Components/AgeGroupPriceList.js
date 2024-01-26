import { useEffect, useState, useMemo } from "react";
import {
  AgeGroupPriceListWrapper,
  GroupWrapper,
  TextBoxWrapper,
  SettingBoxWrapper,
  RemoveBoxWrapper,
  AddNewBoxWrapper,
} from "../style/AgeGroupPriceList";
import PriceInput from "./PriceInput";
import AgeGroupSelect from "./AgeGroupSelect";
import { deepClone, getNumberIntervals } from "../common/util";
import {
  PRICE_SETTING,
  REMOVE,
  ADD_NEW_PRICE_SETTING,
} from "../common/constant";

const AgeGroupPriceList = ({ onChange }) => {
  const [allAgeGroups, setAllAgeGroups] = useState([[0, 20]]);
  const [allPrices, setAllPrices] = useState([0]);

  const memoizedNumberIntervals = useMemo(() => {
    let copy = deepClone(allAgeGroups);
    return getNumberIntervals(copy);
  }, [allAgeGroups]);

  const changeAllAgeGroups = (index, newAgeGroup) => {
    let copy = deepClone(allAgeGroups);
    copy[index] = newAgeGroup;
    setAllAgeGroups(copy);
  };

  const changeAllPrices = (index, newPrice) => {
    let copy = deepClone(allPrices);
    copy[index] = newPrice;
    setAllPrices(copy);
  };

  const addNewSetting = () => {
    if (memoizedNumberIntervals["notInclude"].length === 0) return;
    let copyAges = deepClone(allAgeGroups);
    copyAges.push([0, 20]);

    let copyPrices = deepClone(allPrices);
    copyPrices.push(0);

    setAllAgeGroups(copyAges);
    setAllPrices(copyPrices);
  };

  const removeGroup = (index) => {
    let copyAges = deepClone(allAgeGroups);
    copyAges.splice(index, 1);

    let copyPrices = deepClone(allPrices);
    copyPrices.splice(index, 1);

    setAllAgeGroups(copyAges);
    setAllPrices(copyPrices);
  };

  useEffect(() => {
    let result = [];
    for (let i = 0; i < allAgeGroups.length; i++) {
      result.push({ ageGroup: allAgeGroups[i], price: allPrices[i] });
    }
    onChange(result);
  }, [allAgeGroups, allPrices]);

  return (
    <AgeGroupPriceListWrapper>
      {allAgeGroups.map((ageGroup, index) => {
        return (
          <GroupWrapper key={index + "group"} index={index}>
            <TextBoxWrapper>
              <p>
                {PRICE_SETTING}- {index + 1}
              </p>
              {index > 0 && (
                <RemoveBoxWrapper
                  onClick={() => {
                    removeGroup(index);
                  }}
                >
                  x {REMOVE}
                </RemoveBoxWrapper>
              )}
            </TextBoxWrapper>
            <SettingBoxWrapper>
              <AgeGroupSelect
                minAge={0}
                maxAge={20}
                currentMinAge={ageGroup[0]}
                currentMaxAge={ageGroup[1]}
                index={index}
                changeAllAgeGroups={changeAllAgeGroups}
                overlap={memoizedNumberIntervals["overlap"]}
              />
              <PriceInput
                price={allPrices[index]}
                index={index}
                changeAllPrices={changeAllPrices}
              />
            </SettingBoxWrapper>
          </GroupWrapper>
        );
      })}
      <AddNewBoxWrapper
        onClick={addNewSetting}
        isEnableAddNewOne={memoizedNumberIntervals["notInclude"].length > 0}
      >
        + {ADD_NEW_PRICE_SETTING}
      </AddNewBoxWrapper>
    </AgeGroupPriceListWrapper>
  );
};

export default AgeGroupPriceList;
