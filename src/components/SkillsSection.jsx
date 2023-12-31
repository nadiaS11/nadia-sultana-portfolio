import React from 'react';
import PropTypes from 'prop-types';
import SkillButton from './SkillButton';

const SkillsSection = props => {
    return (
      <div id='skills' className="  ">
        <h3 className="text-off font-medium text-xl mb-5">Skills</h3>
        <div className=" max-w-lg mb-10">
          <h3 className="pb-2 mb-5 border-lightish border-b-2  ">
            Frontend Tools
          </h3>
          <div className="flex flex-wrap items-center gap-5  ">
            <SkillButton skill={"html 5"} />
            <SkillButton skill={"ES6"} />
            <SkillButton skill={"react"} />
            <SkillButton skill={"Tailwind"} />
            <SkillButton skill={"Javascript"} />
          </div>
        </div>
        <div className=" max-w-lg mb-10">
          <h3 className="pb-2 my-5 border-lightish border-b-2 ">
            Backend Tools
          </h3>
          <div className="flex flex-wrap items-center gap-5  ">
            <SkillButton skill={"Node js"} />
            <SkillButton skill={"Express js"} />
            <SkillButton skill={"Mongo DB"} />
            <SkillButton skill={"Firebase"} />
          </div>
        </div>
      </div>
    );
};

SkillsSection.propTypes = {
    
};

export default SkillsSection;