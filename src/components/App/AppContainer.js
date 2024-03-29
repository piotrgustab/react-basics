import {connect} from 'react-redux';
import App from './App';
import {createActionAddList, getListsForApp} from '../redux/listsRedux';
import {createActionClearChoice} from '../redux/chosenListRedux';
import {createAction_moveCard} from '../redux/cardsRedux';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getListsForApp(state),
  searchString: state.searchString,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
  clearChosenList: listId => dispatch(createActionClearChoice(listId)),
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);