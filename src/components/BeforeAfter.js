import React, { useState, useEffect } from 'react';
import { fetchBeforeAfterImages } from '../services/api';

const BeforeAfter = () => {
  const [beforeAfterPairs, setBeforeAfterPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBeforeAfterImages = async () => {
      try {
        setIsLoading(true);
        const images = await fetchBeforeAfterImages();
        setBeforeAfterPairs(images);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load before & after images');
        setIsLoading(false);
        console.error(err);
      }
    };

    getBeforeAfterImages();
  }, []);

  if (beforeAfterPairs.length === 0 && !isLoading) {
    return null;
  }

  return (
    <section className="page-section bg-light" id="before-after">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Before & After</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              See the dramatic transformations we've achieved for our clients.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-5">
            <p className="text-danger">{error}</p>
          </div>
        ) : (
          <div className="row g-4">
            {beforeAfterPairs.map((pair) => (
              <div className="col-lg-6 mb-5" key={pair.id}>
                <div className="before-after-container">
                  <h4 className="text-center mb-4">{pair.project_name} Transformation</h4>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="before-after-image-wrapper">
                        <img 
                          className="img-fluid rounded shadow" 
                          src={pair.before_image} 
                          alt={`${pair.project_name} - Before`}
                        />
                        <div className="image-label before-label">BEFORE</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="before-after-image-wrapper">
                        <img 
                          className="img-fluid rounded shadow" 
                          src={pair.after_image} 
                          alt={`${pair.project_name} - After`}
                        />
                        <div className="image-label after-label">AFTER</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BeforeAfter;