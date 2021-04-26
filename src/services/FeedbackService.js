import axiosClient from "./BaseApiService"

const ENDPOINTS = {
    SEND_REACTION : '/reactions',
};

class FeedbackService {

    async processLikeOrDislike(payload) {
        console.log(payload)
        const response = await axiosClient.post(ENDPOINTS.SEND_REACTION,payload);
        return response
    }

}

const feedbackService = new FeedbackService();
export default feedbackService