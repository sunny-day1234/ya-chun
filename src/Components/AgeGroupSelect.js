import { useEffect, useState, useMemo } from "react";
import ErrorTip from "./ErrorTip";
import {
  AgeGroupSelectWrapper,
  TextWrapper,
  BoxWrapper,
  RangeWrapper,
  SelectWrapper,
} from "../style/AgeGroupSelect";

import { getIsOverlap } from "../common/util";
import { AGE_RANGE_ERROR_MESSAGE, AGE } from "../common/constant";

const AgeGroupSelect = ({
  minAge,
  maxAge,
  currentMinAge,
  currentMaxAge,
  index,
  changeAllAgeGroups,
  overlap,
}) => {
  const [ageRange, setAgeRange] = useState([]);

  const memoizedIsOverlap = useMemo(
    () => getIsOverlap([currentMinAge, currentMaxAge], overlap),
    [overlap]
  );

  const generateAgeRange = () => {
    let ageRange = [];
    for (let i = minAge; i <= maxAge; i++) {
      ageRange.push(i);
    }
    setAgeRange(ageRange);
  };

  useEffect(() => {
    generateAgeRange();
  }, []);

  return (
    <AgeGroupSelectWrapper>
      <TextWrapper>{AGE}</TextWrapper>
      <BoxWrapper>
        <SelectWrapper
          value={currentMinAge}
          onChange={(e) => {
            changeAllAgeGroups(index, [Number(e.target.value), currentMaxAge]);
          }}
          className="left"
          isShowError={memoizedIsOverlap}
        >
          {ageRange.map((age) => {
            return (
              <option disabled={age > currentMaxAge} key={age + "min"}>
                {age}
              </option>
            );
          })}
        </SelectWrapper>
        <RangeWrapper> ~ </RangeWrapper>
        <SelectWrapper
          value={currentMaxAge}
          onChange={(e) => {
            changeAllAgeGroups(index, [currentMinAge, Number(e.target.value)]);
          }}
          className="right"
          isShowError={memoizedIsOverlap}
        >
          {ageRange.map((age) => {
            return (
              <option disabled={age < currentMinAge} key={age + "max"}>
                {age}
              </option>
            );
          })}
        </SelectWrapper>
      </BoxWrapper>
      <ErrorTip
        isShowError={memoizedIsOverlap}
        tipMessage={AGE_RANGE_ERROR_MESSAGE}
      />
    </AgeGroupSelectWrapper>
  );
};

export default AgeGroupSelect;
