import { StyledShowMore } from "../../styles/Buttons/Buttons";

const ButtonMore = ({ quant, handleShow, showMore }) => {
  return (
    <>
      {quant > 8 && (
        <StyledShowMore
          onClick={() => {
            handleShow(!showMore);
          }}
        >
          See {showMore ? "Less" : "More"}
        </StyledShowMore>
      )}
    </>
  );
};

export default ButtonMore;
