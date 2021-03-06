import {
  SET_CURRENT_USER, SET_MODULES, SET_SETTINGS, SET_IS_LOADED, LOGOUT, SET_PASSWORD_SETTINGS, SET_NEW_EMAIL,
  SET_PORTAL_CULTURES, SET_PORTAL_LANGUAGE_AND_TIME, SET_TIMEZONES, SET_CURRENT_PRODUCT_ID, SET_CURRENT_PRODUCT_HOME_PAGE, SET_GREETING_SETTINGS,
  SET_CUSTOM_NAMES } from './actions';
import isEmpty from "lodash/isEmpty";
import { LANGUAGE, AUTH_KEY } from '../../constants';

const initialState = {
  isAuthenticated: false,
  isLoaded: false,
  user: {},
  modules: [],
  settings: {
      currentProductId: "",
      culture: "en-US",
      cultures: [],
      trustedDomains: [],
      trustedDomainsType: 1,
      timezone: "UTC",
      timezones: [],
      utcOffset: "00:00:00",
      utcHoursOffset: 0,
      homepage: "", //config.homepage,
      datePattern: "M/d/yyyy",
      datePatternJQ: "00/00/0000",
      dateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
      datepicker: {
          datePattern: "mm/dd/yy",
          dateTimePattern: "DD, mm dd, yy h:mm:ss tt",
          timePattern: "h:mm tt"
      },
      greetingSettings: 'Web Office Applications'
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_CURRENT_USER:
        action.user.cultureName 
        && localStorage.getItem(LANGUAGE) !== action.user.cultureName
        && localStorage.setItem(LANGUAGE, action.user.cultureName);
          return Object.assign({}, state, {
              isAuthenticated: !isEmpty(action.user) || localStorage.getItem(AUTH_KEY),
              user: action.user
          });
      case SET_MODULES:
          return Object.assign({}, state, {
              modules: action.modules
          });
      case SET_SETTINGS:
        if (!localStorage.getItem(LANGUAGE)) {
            localStorage.setItem(LANGUAGE, action.settings.culture);
        }
          return Object.assign({}, state, {
              settings: { ...state.settings, ...action.settings }
          });
      case SET_PORTAL_CULTURES:
          return Object.assign({}, state, {
              settings: { ...state.settings, cultures: action.cultures }
          });
      case SET_PASSWORD_SETTINGS:
          return Object.assign({}, state, {
              settings: { ...state.settings, passwordSettings: action.passwordSettings }
          });
      case SET_IS_LOADED:
          return Object.assign({}, state, {
              isLoaded: action.isLoaded
          });
      case SET_NEW_EMAIL:
          return Object.assign({}, state, {
              user: { ...state.user, email: action.email }
          });
      case SET_PORTAL_LANGUAGE_AND_TIME:
        if (!state.user.cultureName) {
            localStorage.setItem(LANGUAGE, action.newSettings.lng);
        }
          return Object.assign({}, state, {
              settings: { ...state.settings, culture: action.newSettings.lng, timezone: action.newSettings.timeZoneID }
          });
      case SET_TIMEZONES:
          return Object.assign({}, state, {
              settings: { ...state.settings, timezones: action.timezones }
          });
      case SET_CURRENT_PRODUCT_ID:
          return Object.assign({}, state, {
              settings: { ...state.settings, currentProductId: action.currentProductId }
          });
      case SET_CURRENT_PRODUCT_HOME_PAGE:
          return Object.assign({}, state, {
              settings: { ...state.settings, homepage: action.homepage }
          });
      case SET_GREETING_SETTINGS:
          return Object.assign({}, state, {
              settings: { ...state.settings, greetingSettings: action.title }
          });
      case SET_CUSTOM_NAMES:
          return Object.assign({}, state, {
              settings: { ...state.settings, customNames: action.customNames }
          });
      case LOGOUT:
          return Object.assign({}, initialState, {
              settings: state.settings
          });
      default:
          return state;
  }
}

export default authReducer;
