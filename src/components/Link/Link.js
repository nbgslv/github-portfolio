import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerLink = styled.a`
  color: #61dafb;
`;

const Link = ({ url, title }) => (
  <InnerLink
    className='App-link'
    href={url} target='_blank'
    rel='noopener noreferrer'
  >
    {title}
  </InnerLink>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
