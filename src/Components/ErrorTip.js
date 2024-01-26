import { ErrorTipWrapper } from "../style/ErrorTip";

const ErrorTip = ({ isShowError, tipMessage }) => {
  return (
    <>{isShowError ? <ErrorTipWrapper>{tipMessage}</ErrorTipWrapper> : ""}</>
  );
};

export default ErrorTip;
