import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.label}>
        <strong>{item.label}:</strong> {item.value}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ).isRequired,
};

export default List;
