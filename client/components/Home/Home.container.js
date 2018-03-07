/* @flow */

import { connect } from 'react-redux';
import setMessage from '../../actions/message';
import Home from 'components/Home/Home.component';

const mapStateToProps = (state) => {
  const setMessage = state.get('setMessage');
  return {
    message: setMessage.get('message'),
  };
};

const mapDispatchToProps = dispatch => ({
  setMessage: message => dispatch(setMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
