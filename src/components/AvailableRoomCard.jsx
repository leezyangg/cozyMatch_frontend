
import PropTypes from 'prop-types';

export default function AvailableRoomCard(props) {

    return (
        
        <div>
            <h1>hello</h1>
        </div>
      
    )
}

AvailableRoomCard.propTypes = {
    name: PropTypes.string.isRequired,
    roommates: PropTypes.string.isRequired,
    rent:PropTypes.number.isRequired,
    facilities: PropTypes.string.isRequired,
    roomavailable: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
  };