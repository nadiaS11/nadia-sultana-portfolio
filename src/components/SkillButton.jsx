import React from 'react';
import PropTypes from 'prop-types';
import './css/buttons.css'
import { Link } from 'react-router-dom';
const SkillButton = ({skill}) => {
    return (
      <div className="flex">
        <Link  className="btn rounded after:rounded border-off border-2 text-off after:bg-off btn-animate">
          {skill}
        </Link>
      </div>
    );
};

SkillButton.propTypes = {
    
};

export default SkillButton;