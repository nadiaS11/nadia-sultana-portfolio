import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
    return (
      <div className="max-w-3xl">
        <h3 className="text-off font-medium text-xl mb-5">About</h3>
        <p className="tracking-wider  ">
          Embarking on a coding journey during my teenage years, my fascination
          with programming languages and web development ignited. At 15 in 2013,
          I dove into the realm by creating a WordPress blog, incorporating C++.
          Though academic commitments briefly diverted me, my statistics major
          sparked a struggle with R programming, casting doubt on my tech path.
          Overcoming this, I resurfaced with newfound determination, realizing
          that even as a statistics graduate, I could bridge the gap and evolve
          into a passionate web developer.
          <br /> <br />
          Today, with <strong className="text-off">MERN stack</strong>{" "}
          expertise, I am capable creating responsive websites and user-friendly
          digital experience. From{" "}
          <strong className="text-off">MongoDB, Express.js to React</strong>, I
          navigate tech challenges, turning them into opportunities for growth.
        </p>
      </div>
    );
};

About.propTypes = {
    
};

export default About;