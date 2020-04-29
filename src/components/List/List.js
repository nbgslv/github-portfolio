import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`;

const Title = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: bolder;
`;

const List = ({ items, title }) => (
  <>
    <Title>{title}</Title>
    <ListWrapper>
      {items.map(item => (
        <ListItem key={item.label}>
          <Label>{item.label}:</Label> {item.value}
        </ListItem>
      ))}
    </ListWrapper>
  </>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default List;
