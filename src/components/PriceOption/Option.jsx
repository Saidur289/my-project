import PropTypes from "prop-types";
import Feature from "./Feature";

const Option = ({option}) => {
    const {name, price, features} = option
    return (
        <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
            <h1 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
                <p className="text-3xl my-8 text-center">{name}</p>
            </h1>
            {
                features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature> )
            }
            <button className="mt-6 hover:bg-blue-500 bg-blue-900 px-4 py-2 rounded-lg">Buy Now</button>
            
        </div>
    );
};
Option.propTypes = {
    option: PropTypes.object
}

export default Option;