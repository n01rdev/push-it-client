import axios from 'axios';
import {Posit} from '../../domain/model/Posit';

const createPositService = {
    async create(posit: Posit) {
        const token = localStorage.getItem('authToken');
        posit.authorUuid = localStorage.getItem('userUuid') || '';
        const response = await axios.post('/api/v1/posit', posit, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }
};

export default createPositService;