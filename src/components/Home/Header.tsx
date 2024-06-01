import Sort from './Sort';
import {User} from '@src/store/reducers/types';
import Legend from './Legend';
import {Fragment} from 'react';

type HeaderProps = {
  searchResult: false | User | null;
};

const Header = ({searchResult}: HeaderProps) => {
  return (
    <Fragment>
      {searchResult && <Sort />}
      <Legend />
    </Fragment>
  );
};

export default Header;
