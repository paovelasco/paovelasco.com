import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MotivationListItem from './MotivationListItem';


class MotivationPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div className="motivation-content">
        <h2>MOTIVATION</h2>
        <ul>
          {this.props.motivationList.map((item, index)=><MotivationListItem motivation={item} key={index}/>)}
        </ul>
      </div>
    );
  }
}

MotivationPage.propTypes = {
  motivationList: PropTypes.array.isRequired
};

function mapStateToProps(state){
  return {
    motivationList: state.motivationList
  };
}

export default connect(mapStateToProps, null)(MotivationPage);