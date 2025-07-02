import axios from 'axios';

// Use environment variable or update with your actual API URL
const API_URL = process.env.REACT_APP_API_URL || 'https://dx3r1qdu69.execute-api.us-east-2.amazonaws.com/v1';

// Single function to fetch all images
export const fetchGalleryImages = async () => {
  try {
    console.log('Fetching images from:', `${API_URL}/images`);
    
    const response = await axios.get(`${API_URL}/images`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('Successfully fetched images:', response.data.length);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    console.error('Error details:', error.response?.data || error.message);
    
    // For development, return empty array instead of throwing
    if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_API_URL) {
      console.warn('No API URL configured. Returning empty array.');
      return [];
    }
    
    throw error;
  }
};

// For backward compatibility, also export a function for before/after images
// This uses the same endpoint but is kept separate for clarity
export const fetchBeforeAfterImages = fetchGalleryImages;