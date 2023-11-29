/* eslint-disable react/prop-types */
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';


export const SearchInput = ({ value, onChange }) => {
    return (
        <InputGroup className="mb-3">
            <Form.Control
                type="search"  
                className='border-primary-subtle'
                placeholder="Buku yang anda cari"
                aria-label="Buku yang anda cari"
                aria-describedby="basic-addon2"
                value={value}
                onChange={onChange} 
            />
            <Button variant="outline-primary" disabled id="button-addon2">
                <BsSearch />
            </Button>
        </InputGroup>
    );
};