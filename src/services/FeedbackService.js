import axiosClient from "./BaseApiService"

const ENDPOINTS = {
    SEND_REACTION : '/reactions',
    ADD_COMMENT : '/comments',
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

}

const feedbackService = new FeedbackService();
export default feedbackService