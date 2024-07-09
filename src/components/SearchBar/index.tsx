
import FilterSearch from './FilterSearch';
import FilterPannel from './FilterPanel';


const SearchBar = () => {
    return (
     
        <div className='grid md:grid-col-1 sm:grid-cols-2 my-6'>
            <FilterSearch />
            <FilterPannel />
        </div>
    );
};

export default SearchBar;
