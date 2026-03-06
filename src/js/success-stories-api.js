import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://paw-hut.b.goit.study/api/',
    params: { page: 4, limit: 10 },
});

export async function fetchStories() {
    try {
        const { data } = await apiClient.get('/feedbacks');
        return data.feedbacks;
    } catch {
        return null;
    }
}