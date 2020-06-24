import { apiBase, getUsers } from  './api';
import nock from 'nock';

describe('API', () => {
  describe('users endpoint', () => {
    it('should return error if one is thrown', async () => {
      nock(apiBase)
        .get('/users')
        .replyWithError({ message: 'there was an error' });

      const results = await getUsers();
      expect(results.error.message).toEqual('there was an error');

    });

    it('should return empty array if no users found within area', async () => {
      nock(apiBase)
        .get('/users')
        .reply(200, [ 
          { latitude: 43.9087, longitude: 1.212 }, 
          { latitude: 40.9087, longitude: 1.212} 
        ]);

      const results = await getUsers();
      expect(results).toEqual([]);

    });
    
    it('should return good data within X miles of London', async () => {
      const goodData = { latitude: 51.5074, longitude: 0.1278 };
      nock(apiBase)
        .get('/users')
        .reply(200, [ 
          goodData, 
          { latitude: 43.9087, longitude: 1.212 } 
        ]);

      const results = await getUsers();
      expect(results).toEqual([goodData]);
    });
  });
});
