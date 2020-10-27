import React, { useMemo } from 'react';
import { Layout } from '../../components';
import { DATA } from './SummaryRiskTest.helpers';
import SummaryRiskTest from './SummaryRiskTest';
import useTriage from '../../hooks/useTriage';

const SummaryRiskTestContainer = () => {
  const { isExposure, triageRiskLevel } = useTriage();

  const screenData = useMemo(() => {
    if (triageRiskLevel === 1 && !isExposure) {
      return DATA.TOR_GREEN_EN_NOT_RED;
    }
    if (triageRiskLevel === 2 && !isExposure) {
      return DATA.TOR_ORANGE_EN_NOT_RED;
    }
    if (triageRiskLevel === 3 && !isExposure) {
      return DATA.TOR_RED_EN_NOT_RED;
    }
    if (triageRiskLevel === 1 && isExposure) {
      return DATA.TOR_GREEN_EN_RED;
    }
    if (triageRiskLevel === 2 && isExposure) {
      return DATA.TOR_ORANGE_EN_RED;
    }
    if (triageRiskLevel === 3 && isExposure) {
      return DATA.TOR_RED_EN_RED;
    }
    return DATA.TOR_RED_EN_RED;
  }, [triageRiskLevel, isExposure]);

  return (
    <Layout hideBackButton noPadding fullHeight>
      <SummaryRiskTest data={screenData} />
    </Layout>
  );
};

export default SummaryRiskTestContainer;
