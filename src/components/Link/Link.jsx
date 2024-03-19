
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div>
            <li className="mr-6" ><a href={route.path}></a>{route.name}</li>
        </div>
    );
};
Link.propTypes={
    route:PropTypes.object.isRequired,
}

export default Link;