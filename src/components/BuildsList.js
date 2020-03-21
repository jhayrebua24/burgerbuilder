import React from 'react';
import PropTypes from 'prop-types';
import { BurgerLists } from './StyledComponents';
import BurgerCards from './BurgerCards';

const BuildsList = ({ builds }) => (
  <BurgerLists>
    {builds.map((build) => (
      <BurgerCards
        key={build.id}
        data={build}
      />
    ))}
  </BurgerLists>
)

BuildsList.propTypes = {
  builds: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default BuildsList
