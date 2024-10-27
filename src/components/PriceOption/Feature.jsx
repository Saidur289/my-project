import PropTypes from "prop-types";
import { MdVerified } from "react-icons/md";
const Feature = ({feature}) => {
    return (
        <div className="ml-10 flex-grow">
          <p className="flex items-center"><MdVerified className="mr-2"></MdVerified>{feature}</p> 
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;