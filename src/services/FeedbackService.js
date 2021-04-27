import axiosClient from "./BaseApiService"

const ENDPOINTS = {
    SEND_REACTION : '/reactions',
    ADD_COMMENT : '/comments',
};

class FeedbackService {

    async processLikeOrDislike(payload) {
        return await axiosClient.post(ENDPOINTS.SEND_REACTION,payload);
    }

    async addComment(payload) {
        const response = await axiosClient.post(ENDPOINTS.ADD_COMMENT,payload);
        if (response.status === 201) {
            return response.data;
        }
    }

    async getComments({payload}) {
        let params = {params: payload}
        const result = await axiosClient.get(ENDPOINTS.ADD_COMMENT,params);
        return result.data;
    }
}

const feedbackService = new FeedbackService();
export default feedbackService