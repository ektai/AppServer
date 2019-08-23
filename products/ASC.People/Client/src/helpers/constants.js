export const AUTH_KEY = "asc_auth_key";

/**
 * Enum for employee activation status.
 * @readonly
 */
export const EmployeeActivationStatus = Object.freeze({
  NotActivated: 0,
  Activated: 1,
  Pending: 2,
  AutoGenerated: 4
});

/**
 * Enum for employee status.
 * @readonly
 */
export const EmployeeStatus = Object.freeze({
    Active: 1,
    Disabled: 2
  });

/**
 * Enum for employee status.
 * @readonly
 */
export const EmployeeType = Object.freeze({
  User: 1,
  Guest: 2
});