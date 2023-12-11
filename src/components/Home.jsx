import React from 'react';
import PropTypes from 'prop-types';
import About from './About';
import SkillButton from './SkillButton';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

const Home = props => {
    return (
      <div className="text-dulche flex flex-col gap-20 my-32 lg:my-0">
        <About />
        <ProjectsSection/>
        <SkillsSection/>
      </div>
    );
};

Home.propTypes = {
    
};

export default Home;