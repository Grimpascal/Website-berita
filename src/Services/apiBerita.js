import axios from "axios";

const url = "https://api-berita-indonesia-gules.vercel.app";

export const getApiberita = async (provider, category) => {
  try {
    const response = await axios.get(`${url}/${provider}/${category}`);
    if (response.data && response.data.success) {
      return response.data.data.posts;
    }
    return [];
  } catch (error) {
    console.error(`Gagal memuat berita dari ${provider}/${category}:`, error);
    return[];
  }
};
