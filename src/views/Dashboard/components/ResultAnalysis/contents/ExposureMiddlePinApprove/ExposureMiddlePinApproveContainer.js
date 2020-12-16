import React from 'react';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import ExposureMiddlePinApprove from './ExposureMiddlePinApprove';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const ExposureMiddlePinApproveContainer = () => {
  const { goTo } = useNavigation();

  return (
    <ExposureMiddlePinApprove
      handleInstallApp={() => null}
      handleLabTestResult={() => goTo(Routes.LabTestResult)}
      handleRecommendation={() => goTo(Routes.Recommendations, { component: RecommendationsComponents.ExposureMiddle })}
      isInfected
    />
  );
};

export default ExposureMiddlePinApproveContainer;
