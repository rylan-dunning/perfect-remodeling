import React from 'react';

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Based in Littleton, Colorado, Perfect Remodeling, LLC believes every project is an opportunity to do our best work! We deliver quality
              workmanship, prompt service, strong planning & communication, clean work practices, and efficient time
              utilization.
            </p>
            
            <p className="text-white-75 mb-4">
              We specialize in remodeling kitchen, bath, basement, laundry room, outdoor living spaces, and everything in
              between. We'll also handle your smaller projects: water heaters, faucets, toilets, plumbing, electrical, lighting
              fixtures, switches, outlets, windows, doors, floors, tile, drywall repairs, texturizing, painting, and many others!
            </p>
            
            <p className="text-white-75 mb-4">
              By performing every task ourselves, we streamline every project in terms of time and money! We take care
              of designing, planning, demolition, inspection, installations, details, and clean up. The initial visit is free, and
              you'll have a quote within 3 days. For your next project, give Perfect Remodeling, LLC a call! (720)771-2363
            </p>
            <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;