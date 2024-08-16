import { apiClient } from "./config";

export const fetchHospitals = async (filters) => {
    try {
        const response = await apiClient.get('/hospitals', {
            params: filters, // This will send the filters as query parameters
        });
        return response;
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        throw error;
    }
};
