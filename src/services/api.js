import axios from 'axios';

// Replace with your actual API endpoint after setting up API Gateway
const API_URL = 'https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod';

export const fetchGalleryImages = async () => {
  try {
    // For development/testing, you might want a fallback
    if (process.env.NODE_ENV === 'development') {
      // Simulated API response with sample data
      return mockGalleryImages;
    }

    const response = await axios.get(`${API_URL}/images`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
};

// Mock data for development/testing - replace with your actual gallery data
const mockGalleryImages = [
  {
    id: "bathroom-01",
    category: "Bathroom",
    title: "30\" x 60\" shower base - 12\" x 36\" wavy tile w/ 1/16\" grout, custom niche",
    thumbnailUrl: "/assets/img/portfolio/thumbnails/1.JPG",
    fullsizeUrl: "/assets/img/portfolio/fullsize/1.JPG",
    order: 1
  },
  {
    id: "bathroom-02",
    category: "Bathroom",
    title: "Dual vanity, lighting split, texture, paint, electrical, flooring",
    thumbnailUrl: "/assets/img/portfolio/thumbnails/2.JPG",
    fullsizeUrl: "/assets/img/portfolio/fullsize/2.JPG",
    order: 2
  },
  {
    id: "bathroom-03",
    category: "Bathroom",
    title: "Old built in vanity, wall mirror replaced with contemporary materials",
    thumbnailUrl: "/assets/img/portfolio/thumbnails/3.JPG",
    fullsizeUrl: "/assets/img/portfolio/fullsize/3.JPG",
    order: 3
  },
  // Add more mock images as needed
];