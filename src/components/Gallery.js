import React, { useState, useEffect } from 'react';
import { fetchGalleryImages } from '../services/api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        const imagesData = await fetchGalleryImages();
        setImages(imagesData);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load gallery images');
        setIsLoading(false);
        console.error(err);
      }
    };

    getImages();
  }, []);

  // Initialize SimpleLightbox when images are loaded
  useEffect(() => {
    if (!isLoading && images.length > 0 && window.SimpleLightbox) {
      // Clean up any existing lightbox instances
      const existingInstance = document.querySelector('.sl-wrapper');
      if (existingInstance) {
        existingInstance.remove();
      }

      const options = {
        elements: '#portfolio a.portfolio-box',
        captionsData: 'title',
        captionDelay: 250,
        captionPosition: 'bottom',
        captionClass: 'sl-caption-custom',
        closeText: '×',
        navText: ['←', '→']
      };
      
      new window.SimpleLightbox(options);
      
      // Add custom style for SimpleLightbox captions
      const style = document.createElement('style');
      style.innerHTML = `
        .sl-caption-custom {
          background-color: rgba(244, 98, 58, 0.9) !important;
          color: white !important;
          font-family: 'Merriweather Sans', sans-serif !important;
          padding: 15px !important;
          border-radius: 0 0 4px 4px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        .sl-caption-custom .sl-caption {
          font-size: 16px !important;
          font-weight: 400 !important;
        }
        .sl-wrapper .sl-image {
          border-radius: 4px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [isLoading, images]);

  const renderLoading = () => (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3">Loading gallery images...</p>
    </div>
  );

  return (
    <section className="page-section" id="portfolio">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Our Work</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              Take a look at some of our recent projects. Click on any image to view it in full size.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4">
        <div className="row g-4">
          {isLoading ? (
            <div className="col-12">
              {renderLoading()}
            </div>
          ) : error ? (
            <div className="col-12 text-center py-5">
              <p className="text-danger">{error}</p>
            </div>
          ) : (
            images.map((image, index) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={image.id}>
                <div className="portfolio-item">
                  <a 
                    className="portfolio-box" 
                    href={image.fullsize_url} 
                    title={image.title}
                  >
                    <img 
                      className="img-fluid" 
                      src={image.thumbnail_url} 
                      alt={image.title}
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.filename}`);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">{image.category}</div>
                      <div className="project-name">Click to Expand</div>
                    </div>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;