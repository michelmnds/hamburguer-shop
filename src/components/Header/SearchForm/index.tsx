import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';

const SearchForm = () => (
  <StyledSearchForm>
    <input type='text' placeholder='Search' />
    <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
      <MdSearch />
    </StyledButton>
  </StyledSearchForm>
);

export default SearchForm;
