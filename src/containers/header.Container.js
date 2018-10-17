import { connect } from 'react-redux';
import header from '../components/header';

const mapStateToProps = state => ({
    isLogin: state.status
})

export default connect(
    mapStateToProps,
    null
)(header);







