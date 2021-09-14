import React from 'react';
import { withRouter } from 'react-router';
import Color from '../HOC/Color';
class HomeComponent extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push('/todo');
  //   }, 3000);
  // }
  render() {
    console.log(this.props);
    return <div>Home</div>;
  }
}

// export default withRouter(HomeComponent);
export default Color(HomeComponent);
