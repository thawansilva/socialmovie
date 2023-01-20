import Skeleton from "react-loading-skeleton";

const LoadingCards = ({ quant, width = 240, height = 400 }) => {
  return Array(quant)
    .fill(0)
    .map((item, index) => {
      return <Skeleton key={index} width={width} height={height} />;
    });
};

export default LoadingCards;
