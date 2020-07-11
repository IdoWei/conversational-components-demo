import axios from 'axios';

const API_URL = "http://localhost:4000";

const BackendService = {
    EchoMessage: (message) => axios.post(`${API_URL}/messages/echo-message`, {message})
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.error('Caught error while trying to invoke API: EchoMessage', error)
            const errorMessage = "Seems like I have an issue. Please try again in few moments."; // notify the user there's an issue (only for better ux)
        
            return errorMessage;
        }),
}

export default BackendService;