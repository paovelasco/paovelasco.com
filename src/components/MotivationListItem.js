import React from 'react';
import PropTypes from 'prop-types';

const MotivationListItem = ({motivation}) => {
  return (
    <li>{motivation.speaker} - <a href={motivation.link} target="_blank">{motivation.quotePartOne.concat(" ").concat(motivation.quotePartTwo)}</a></li>
  );
};

MotivationListItem.propTypes = {
  motivation: PropTypes.object.isRequired
};

export default MotivationListItem;