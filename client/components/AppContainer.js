import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';

function mapStateToProps(state) {
    return {
        //courses: state.courses
    };
}

const App = connect(mapStateToProps)(Main);

export default App;