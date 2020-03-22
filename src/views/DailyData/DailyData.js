import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import Background from '../../assets/img/banners/banner-1.png';
import {
  Back,
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../components';

import { Form } from './components';
import './DailyData.scss';

const DailyData = ({ onBack, isViewMode }) => {
  const { dirty, submitForm } = useFormikContext();

  return (
    <div className="view view__data">
      <Banner background={Background}>
        <Back onClick={onBack} />
        <Brand content={false} small white />
      </Banner>
      <Container className="container__content">
        <h4 className="title medium">Dziennik zdrowia</h4>
        <p className="date medium">czwartek 19-03-2020</p>
        <Form isViewMode={isViewMode} />
      </Container>
      <div className="footer">
        <Container className="container__footer">
          <FieldSet>
            <Button
              onClick={!dirty || isViewMode ? onBack : submitForm}
              text={!dirty || isViewMode ? 'Powrót' : 'Zapisz'}
              type="primary"
            />
          </FieldSet>
        </Container>
      </div>
    </div>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired
};

export default DailyData;