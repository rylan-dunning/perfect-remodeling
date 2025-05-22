import React from 'react';

const Header = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <img className="img-fluidex" src="/assets/img/perfectremodellingllclogo.jpg" style={{maxHeight: '210px', objectFit: 'contain'}} title="PerfectRemodelingLLC logo" alt="Perfect Remodeling LLC Logo" />
            <br /><br />
            <h1 className="text-white font-weight-bold">Welcome to Perfect Remodeling, LLC!</h1>
            <h3 className="text-white font-weight-bold mb-5">Based in Littleton, Colorado</h3>
            <hr className="divider" />
            <br />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">At Perfect Remodeling, LLC, it is the satisfaction of a job well done that keeps us striving for perfection!</p>
            <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;