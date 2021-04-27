import axiosClient from "./BaseApiService"

const ENDPOINTS = {
    SEND_REACTION : '/reactions',
    ADD_COMMENT : '/comments',
    GET_COMMENTS : '/comments?movie_id='
};

class FeedbackService {

    async processLikeOrDislike(payload) {
        const response = await axiosClient.post(ENDPOINTS.SEND_REACTION,payload);
        return response
    }

    async addComment(payload) {
        const response = await axiosClient.post(ENDPOINTS.ADD_COMMENT,payload);
        return response
    }

    async getComments(payload) {
        const response = await axiosClient.get(ENDPOINTS.GET_COMMENTS + payload);
        return response.data;
    }

}

const feedbackService = new FeedbackService();
export default feedbackService