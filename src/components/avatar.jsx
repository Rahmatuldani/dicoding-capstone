import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

function Avatar1({name}) {
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        function getInitials(str) {
            const words = str.split(' ');
          
            const initials = words
                .map(word => word[0].toUpperCase())
                .join('');
          
            return initials;
        }

        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: getInitials(name),
        };
    }

    return (
        <Avatar {...stringAvatar(name)}/>
    );
}

Avatar1.propTypes = {
    name: PropTypes.string
};

function AvatarComponent({name, image}) {
    if (image === null) {
        return <Avatar1 name={name}/>;
    }

    return (
        <Avatar1 name={name}/>
    );
}

AvatarComponent.propTypes = {
    name: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.string,
        null
    ]),
};

export default AvatarComponent;