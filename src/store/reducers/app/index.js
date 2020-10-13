import {
  APP_STATE_CLEARED,
  BLUETOOTH_DATA_CLEARED,
  DATA_FROM_NEWEST_VERSION_MARKED,
  EXPOSURE_ONBOARDING_FINISHED,
  FIRST_DIAGNOSIS_FINISHED,
  LANGUAGE_CHANGED,
  MIGRATION_FINISHED,
  ONBOARDING_FINISHED,
  REGISTRATION_FINISHED,
  RESTRICTIONS_MODAL_SHOWED,
  START_SCREEN_SHOWED,
  UPLOAD_HISTORICAL_DATA_ENDED,
  UPLOAD_HISTORICAL_DATA_ERROR_MESSAGE_HIDDEN,
  UPLOAD_HISTORICAL_DATA_FINISHED,
  UPLOAD_HISTORICAL_DATA_REQUESTED
} from '../../types/app';
import { UPLOAD_HISTORICAL_DATA_STATE as uploadState } from './app.constants';
import createUploadHistoricalDataState from './app.helpers';

const INITIAL_STATE = {
  applicationReseted: false,
  exposureOnboardingFinished: false,
  dataFromNewestVersionMarked: false,
  language: null,
  languageChangedByUser: false,
  migrations: [],
  onboardingFinished: false,
  startScreenShowed: false,
  uploadHistoricalDataState: {
    errorMessageVisible: false,
    date: null,
    status: uploadState.EMPTY,
    unsuccessfulAttempts: []
  },
  registrationFinished: false,
  restrictionsModalShowed: false
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONBOARDING_FINISHED:
      return {
        ...state,
        onboardingFinished: true
      };
    case EXPOSURE_ONBOARDING_FINISHED:
      return {
        ...state,
        exposureOnboardingFinished: true
      };

    case START_SCREEN_SHOWED:
      return {
        ...state,
        startScreenShowed: true
      };
    case UPLOAD_HISTORICAL_DATA_REQUESTED:
      return {
        ...state,
        uploadHistoricalDataState: {
          ...state.uploadHistoricalDataState,
          status: uploadState.REQUESTED,
          date: new Date().getTime()
        }
      };
    case UPLOAD_HISTORICAL_DATA_ENDED:
      return {
        ...state,
        uploadHistoricalDataState: {
          ...state.uploadHistoricalDataState,
          status: uploadState.EMPTY
        }
      };
    case FIRST_DIAGNOSIS_FINISHED:
      return {
        ...state,
        firstDiagnosisFinished: true
      };
    case UPLOAD_HISTORICAL_DATA_FINISHED:
      return (() => {
        const { result } = action;

        return {
          ...state,
          uploadHistoricalDataState: createUploadHistoricalDataState(
            result,
            state
          )
        };
      })();
    case DATA_FROM_NEWEST_VERSION_MARKED: {
      return {
        ...state,
        dataFromNewestVersionMarked: true
      };
    }
    case MIGRATION_FINISHED: {
      const { data } = action;
      return {
        ...state,
        migrations: [...(state.migrations || []), data]
      };
    }
    case LANGUAGE_CHANGED: {
      const { data } = action;
      return {
        ...state,
        language: data,
        languageChangedByUser: true
      };
    }
    case APP_STATE_CLEARED: {
      return {
        ...state,
        applicationReseted: true
      };
    }
    case BLUETOOTH_DATA_CLEARED: {
      return {
        ...state,
        applicationReseted: false
      };
    }
    case UPLOAD_HISTORICAL_DATA_ERROR_MESSAGE_HIDDEN: {
      const { uploadHistoricalDataState } = state;
      return {
        ...state,
        uploadHistoricalDataState: {
          ...uploadHistoricalDataState,
          errorMessageVisible: false
        }
      };
    }
    case REGISTRATION_FINISHED: {
      return {
        ...state,
        registrationFinished: true
      };
    }
    case RESTRICTIONS_MODAL_SHOWED: {
      return {
        ...state,
        restrictionsModalShowed: true
      };
    }

    default:
      return state;
  }
};

export default appReducer;
