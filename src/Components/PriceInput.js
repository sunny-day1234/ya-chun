import ErrorTip from "./ErrorTip";
import {
  PriceInputWrapper,
  BoxWrapper,
  CurrencyWrapper,
  InputWrapper,
  TextWrapper,
} from "../style/PriceInput";
import { addComma, isEmpty, getValidInputValue } from "../common/util";
import {
  EMPTY_ERROR_MESSAGE,
  STAY_FEE,
  TWD_CURRENCY,
  KEY_IN_FEE,
  FREE_TIP,
} from "../common/constant";

const PriceInput = ({ price, index, changeAllPrices }) => {
  const changeStayFeeInput = (input) => {
    let validInput = getValidInputValue(input.value);
    changeAllPrices(index, addComma(validInput));
  };

  return (
    <PriceInputWrapper>
      <TextWrapper>{STAY_FEE}</TextWrapper>
      <BoxWrapper>
        <CurrencyWrapper>{TWD_CURRENCY}</CurrencyWrapper>
        <InputWrapper
          type="text"
          placeholder={KEY_IN_FEE}
          value={price}
          onChange={(e) => changeStayFeeInput(e.target)}
          isShowError={isEmpty(price)}
        ></InputWrapper>
      </BoxWrapper>
      <ErrorTip isShowError={isEmpty(price)} tipMessage={EMPTY_ERROR_MESSAGE} />
      <TextWrapper className="info">{FREE_TIP}</TextWrapper>
    </PriceInputWrapper>
  );
};

export default PriceInput;
