import { useSelector } from "react-redux";
import { getActualSpecification } from "../../store/automakers/automakers-selectors.ts";

export const SpecificationPage = () => {
  const actualSpecification = useSelector(getActualSpecification);
  console.log("actualSpecification", actualSpecification);
  return <div>
      alarm!
  </div>;
};

SpecificationPage.displayName = "SpecificationPage";
