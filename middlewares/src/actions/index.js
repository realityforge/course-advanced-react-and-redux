import {FETCH_USERS} from './types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { id: 1, name: 'Bobba' },
      { id: 2, name: 'Jango' },
      { id: 3, name: 'Luke' }
    ]
  };
}
