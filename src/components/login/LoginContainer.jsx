import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";


class LoginContainer extends React.Component {

    componentDidMount() {
      //  this.props.toggleIsFetching(true);
       this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {getAuthUserData})(LoginContainer);
