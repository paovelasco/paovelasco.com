import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class PowerFlagPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  getRandomQuote(){
    const randomId = Math.floor(Math.random() * (this.props.motivationList.length - 1));
    return (this.props.motivationList[randomId]).quote;
  }

  render(){
    return (
      <div className="powerflag-content">
        <h3>READY PLAYER 1...</h3>
        <h2>{this.getRandomQuote()}</h2>
        <p><Link to="/motivation">motivation</Link></p>
      </div>
    );
  }
}

PowerFlagPage.propTypes = {
  motivationList: PropTypes.array.isRequired
};

function mapStateToProps(state){
  return {
    motivationList: state.motivationList
  };
}

export default connect(mapStateToProps, null)(PowerFlagPage);