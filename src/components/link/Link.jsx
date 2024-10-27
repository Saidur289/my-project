import PropTypes from "prop-types";
const Link = ({route}) => {
    const {id, name} = route
    return (
        <li className="mr-10 px-6 hover:bg-yellow-500" key={id}><a href={`path`}>{name}</a></li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;