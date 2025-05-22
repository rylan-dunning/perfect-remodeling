import React from 'react';

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Contact Us</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              Once we break ground on your project, it will be our only focus until your project is complete. We get in there, get the job done, then move to the next project. We don't juggle multiple jobs because it creates delays and logistical issues for all parties involved. <br /><br />
              
              At Perfect Remodeling, LLC, we bring excitement to every project, every task, achieving the best results possible! We love the fact that no two jobs are alike, and therefore the strategies employed are unique to each project. We like the challenge and the satisfaction of a job well done! <br /><br />
              
              Next time you are thinking of renovating one of your spaces, give us a call so we can come and take a look, and give you a free estimate.
            </p>
            <img className="img-fluid" src="/assets/img/gregkesler.jpg" alt="Company Owner" /> <br /><br /><br /><br />
          </div>
        </div>
                
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="fa-solid fa-phone fs-1"></i>
            <p className="text-muted mb-0">(720) 771-2363</p>
            <br />
            <i className="fa-solid fa-envelope fs-1"></i>
            <p className="text-muted mb-0">greg@perfectremodeling.llc</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;