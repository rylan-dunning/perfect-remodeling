import axios from 'axios';

// Replace with your actual API Gateway endpoint after deployment
const API_URL = 'https://dx3r1qdu69.execute-api.us-east-2.amazonaws.com/v1';

export const fetchGalleryImages = async () => {
  try {
    const response = await axios.get(`${API_URL}/images`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    // Fallback to mock data for development
    return getMockImages();
  }
};

export const fetchBeforeAfterImages = async () => {
  try {
    const response = await axios.get(`${API_URL}/before-after`);
    return response.data;
  } catch (error) {
    console.error('Error fetching before/after images:', error);
    return getMockBeforeAfterImages();
  }
};

// Mock data for development/testing
const getMockImages = () => [
  {
    id: "bathroom-2024-01",
    category: "Bathroom",
    title: "Large 10X12 bathroom - Acrylic alcove tub with Delta faucet",
    year: "2024",
    thumbnail_url: "/assets/img/portfolio/thumbnails/1.JPG",
    fullsize_url: "/assets/img/portfolio/fullsize/1.JPG",
    filename: "31.jpg"
  }
];

const getMockBeforeAfterImages = () => [
  {
    id: "before-after-bathroom-01",
    project_name: "Bathroom",
    before_image: "/assets/img/before-after/before_bath.JPG",
    after_image: "/assets/img/before-after/after_bath.JPG"
  }
];