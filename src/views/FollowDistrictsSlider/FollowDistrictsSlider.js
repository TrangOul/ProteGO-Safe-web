import React from 'react';
import PropTypes from 'prop-types';
import { StatusItem } from '../../components/StatusItem';
import { NavLink, T } from '../../components';
import { Routes } from '../../services/navigationService/routes';
import * as Styled from './FollowDistrictsSlider.styled';

import { ReactComponent as IconAdd } from '../../assets/img/icons/plus.svg';

const FollowDistrictsSlider = ({ items }) => {
  const renderItems = items.map(({ id, name, state }) => (
    <StatusItem isShadow id={id} key={id} name={name} status={state} />
  ));

  return (
    <Styled.Wrapper>
      {items.length > 0 ? (
        <>
          <Styled.Title>
            <T i18nKey="follow_district_title" />
          </Styled.Title>

          <Styled.Slider>{renderItems}</Styled.Slider>

          <Styled.ButtonWrapper>
            <NavLink to={Routes.CurrentRestrictions}>
              <Styled.Add>
                <IconAdd />
                <T i18nKey="follow_district_text_1" />
              </Styled.Add>
            </NavLink>
          </Styled.ButtonWrapper>
        </>
      ) : (
        <NavLink to={Routes.CurrentRestrictions}>
          <Styled.Button>
            <T i18nKey="follow_district_button_name" />
            <Styled.Icon />
          </Styled.Button>
        </NavLink>
      )}
    </Styled.Wrapper>
  );
};

FollowDistrictsSlider.defaultProps = {
  items: []
};

FollowDistrictsSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      state: PropTypes.number
    })
  )
};

export default FollowDistrictsSlider;
