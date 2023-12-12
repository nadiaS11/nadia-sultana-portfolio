import React from 'react';
import PropTypes from 'prop-types';
import img1 from '../assets/images/c1.png'
import { Link } from 'react-router-dom';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
const ProjectsSection = props => {
    return (
      <div className="max-w-3xl">
        <h3 className="text-off font-medium text-xl mb-16">Projects</h3>

        <div className='flex flex-col gap-20'>
           
        <ProjectOne/>
        <ProjectTwo/>
        <ProjectThree/>
        </div>
      </div>
    );
};

ProjectsSection.propTypes = {
    
};

export default ProjectsSection;