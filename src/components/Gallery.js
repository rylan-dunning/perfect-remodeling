import React, { useState, useEffect } from 'react';
import { fetchGalleryImages } from '../services/api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Initialize SimpleLightbox with custom options
  useEffect(() => {
    if (!isLoading && images.length > 0 && window.SimpleLightbox) {
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

  // Fallback to display before API data is available
  const renderLoading = () => (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3">Loading gallery images...</p>
    </div>
  );

  return (
    <div id="portfolio" className="py-4">
      <div className="container-fluid px-4">
        <div className="row g-4">
          {isLoading ? (
            renderLoading()
          ) : error ? (
            <div className="col-12 text-center py-5">
              <p className="text-danger">{error}</p>
            </div>
          ) : (
            images.map((image, index) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={image.id || index}>
                <div className="portfolio-item">
                  {/* Create title that includes both category and title for the lightbox popup */}
                  <a 
                    className="portfolio-box" 
                    href={image.fullsizeUrl} 
                    title={`${image.category}: ${image.title}`}
                  >
                    <img className="img-fluid" src={image.thumbnailUrl} alt={image.title} />
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
    </div>
  );
};

export default Gallery;