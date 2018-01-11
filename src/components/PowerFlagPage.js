import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class PowerFlagPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      motivation: this.getRandomMotivation()
    };
  }

  getRandomMotivation(){
    const randomId = Math.floor(Math.random() * (this.props.motivationList.length - 1));
    return (this.props.motivationList[randomId]);
  }

  render(){
    return (
      <div className="powerflag-content">
        <p><span className="goal">Regret Minimization Framework</span> | <span className="goal">Freedom of Location and Money</span></p>
        <div className="quote">
          <h3>{this.state.motivation.quotePartOne.toUpperCase()}</h3>
          <h2>{this.state.motivation.quotePartTwo}</h2>
          <p><Link to="/motivation">...</Link></p>
        </div>
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