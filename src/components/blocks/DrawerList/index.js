import React from 'react';
import Text from '../../elements/Text';
import { ListItem, ListTitle } from './styled';

const DrawerList = ({ listTitle, list }) => {
  const renderList = list => {
    return list.map(item => (
      <ListItem key={item} size="small" fontFamily="GothamBold">
        - {item}
      </ListItem>
    ));
  };
  return (
    <div>
      <ListTitle
        as="h5"
        size="regular"
        fontFamily="GothamBold"
        color="secondary"
      >
        {listTitle}
      </ListTitle>
      {renderList(list)}
    </div>
  );
};

export default DrawerList;
