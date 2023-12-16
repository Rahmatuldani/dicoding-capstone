import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

function Avatar1({name, sx}) {
    function stringToColor(string) {
        let hash = 0;
        let i;

        console.log(string);

        /* eslint-disable no-bitwise */
        if (string) {
            for (i = 0; i < string.length; i += 1) {
                hash = string.charCodeAt(i) + ((hash << 5) - hash);
            }
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
        <Avatar {...stringAvatar(name)} sx={sx}/>
    );
}

Avatar1.propTypes = {
    name: PropTypes.string,
    sx: PropTypes.object
};

function AvatarComponent({name, image, sx}) {
    if (!image) {
        return <Avatar1 name={name} sx={sx}/>;
    }
    
    if (!name) {
        return <Avatar1 name={'Testing'} sx={sx}/>;
    }

    return (
        <Avatar alt={name} src={`http://localhost:5001/api/users/${image}/avatar`} sx={sx}/>
    );
}

AvatarComponent.propTypes = {
    name: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
    ]),
    sx: PropTypes.object
};

export default AvatarComponent;