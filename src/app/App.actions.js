import * as constants from './App.constants';

function handleSetAuthorizedStatusEvent(status) {
  return ({
    type: constants.APPLICATION__SET__AUTHORIZED__STATUS,
    data: status
  });
}

export const handleSetAuthorizedStatus = handleSetAuthorizedStatusEvent;
