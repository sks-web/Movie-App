const initialValue = { currentTab: window.location.pathname };
function tabReducer(currentState = initialValue, action) {
  switch (action.type) {
    case "CHANGE_TAB":
      return {
        ...currentState,
        currentTab: action.tab,
      };
    default:
      return currentState;
  }
}

export default tabReducer;
