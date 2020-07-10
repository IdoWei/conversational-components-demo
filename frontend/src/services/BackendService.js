import axios from 'axios';

const BackendService = {
    EchoMessage: (message) => new Promise((resolve, reject) => setTimeout(() => resolve(message), 2000)),
}

export default BackendService;