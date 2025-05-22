import axios from "axios";
const API_KEY = "w8YNmvT_FiPJSIKmC5v_1kQDzmiWuOcLKmx24W7GPGs";
const BASE_URL = "https://api.unsplash.com/search/photos";
export interface ImageFlow {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
  };
}
export interface ApiResponse {
  total: number;
  total_pages: number;
  results: ImageFlow[];
}
export const fetchImages = async (
  value: string,
  page: number = 1
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(BASE_URL, {
    params: {
      query: value,
      page,
      per_page: 10,
      client_id: API_KEY,
    },
  });
  return response.data;
};
