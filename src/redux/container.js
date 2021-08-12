import {connect} from 'react-redux';
import {addScrollListAction,clearScrollListAction} from '../redux/action';
import Page from '../pages';

const mapStateToProps = (state) => {
    return {
        ...state,
        options: state.options
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      add: (count) => dispatch(addScrollListAction(count)),
      clear: () => dispatch(clearScrollListAction())
    }
  }

const Component =  connect(mapStateToProps, mapDispatchToProps)(Page)
export default Component;