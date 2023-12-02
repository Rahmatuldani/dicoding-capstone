import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

function AlertUtil (type, text) {
    switch (type) {
    case 'success':
        return Swal.fire({
            icon: 'success',
            title: 'Success',
            text: text
        });
            
    case 'error':
        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: text
        });

    }
}

AlertUtil.propTypes = {
    type: PropTypes.oneOf(['error', 'success']).isRequired,
    text: PropTypes.string.isRequired,
};

export default AlertUtil;