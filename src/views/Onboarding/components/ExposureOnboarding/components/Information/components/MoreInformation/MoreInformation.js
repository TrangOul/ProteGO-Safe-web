import React from 'react';
import './MoreInformation.scss';
import {
  OnboardingContent,
  Button,
  GovFooter
} from '../../../../../../../../components';
import { View, Container, Content } from '../../../../../../../../theme/grid';
import Header from '../../../../../../../../components/Header/Header';
import { Icon } from './MoreInformation.styled';

const MoreInformation = ({ onNext }) => {
  const buttons = [
    {
      border: false,
      text: 'Dalej',
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(button => (
    <Button
      key={button.text}
      onClick={button.onClick}
      text={button.text}
      border={button.border}
    />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent icon={<Icon />} title="" buttons={renderButton}>
            <p>Więcej informacji</p>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default MoreInformation;