import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//a dropdown menu for setting the filter
const FilterDropDown = props => {
    const {currFilter, filtOptions, handleFilterChange} = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleClick = (event) => {
        handleFilterChange(event.target.id);
    }

    return(
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            {currFilter} 
        </DropdownToggle>
        <DropdownMenu>
            {filtOptions.map((option, index) =>(
                <DropdownItem 
                  key ={index}
                  id={index}
                  onClick={handleClick}
                >
                  {option}
                </DropdownItem>
            ))}
        </DropdownMenu>
    </Dropdown>
    )
}

export default FilterDropDown
