import {
  TopBar
} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function TopBarLayout() {

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const userMenuMarkup = (
      <TopBar.UserMenu
          name="Dharma"
          detail="Jaded Pixel"
          initials="D"
      />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      placeholder="Search"
      showFocusBorder
      value={searchValue}
      onChange={handleSearchChange}/>
  );

  return (
      <TopBar
          userMenu={userMenuMarkup}
          searchResultsVisible={isSearchActive}
          showNavigationToggle
          searchField={searchFieldMarkup}
      />
  );
}

export default TopBarLayout;