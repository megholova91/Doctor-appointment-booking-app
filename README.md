# About

This is a sample project for booking appointment with doctors

## Steps to run the project locally

```
npm i
npm start
```

## Link to application

https://main--aesthetic-pastelito-4df927.netlify.app/

## Scope

1. User can view a list of doctors
2. User can click any doctor in the list to view the details of the doctor along with their available slots
3. User can select slots and then add their names to proceed with the booking
4. User will be provided with the unique booking ID which they can use to modify bookings later.

## Assumptions

1. Bookings can be made within a range of 1 week (including the present date)
2. Bookings can be made only in slots of 1 hour hence slots provided are only in that range
3. API key has been hardcoded

## Potential improvements

1. User should have a login flow to view their booking(s).
2. User should be able to book slots from any start time and end time based on the doctor's availability.
3. User should have an option to modify / cancel their booking(s).

## Technical improvements

1. Usage of a global state management like Redux.js will prevent using browser storage.
2. Testing : unit test cases for each functionality, E2E testing.
3. Adding the API key as part of the environment variables.

## Production consideration

1. Api key should be added as part of config while deploying to production.
