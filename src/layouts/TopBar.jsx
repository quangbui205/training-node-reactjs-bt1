import {
  TopBar
} from '@shopify/polaris';
import {
  useState,
  useCallback,
  useEffect
} from 'react';

function TopBarLayout() {

  const [username, setUsername] = useState(localStorage.getItem('username') || "QuangBM");
  const [email, setEmail] = useState(localStorage.getItem('email') || "quangbm@gmail.com");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('submitForm', () => {
      setUsername(localStorage.getItem('username') || "QuangBM");
      setEmail(localStorage.getItem('email') || "quangbm@gmail.com");
    }, false);
  }, [])

  const userMenuMarkup = (
      <TopBar.UserMenu
          name={username}
          detail={email}
          initials={username.charAt(0).toUpperCase()}
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