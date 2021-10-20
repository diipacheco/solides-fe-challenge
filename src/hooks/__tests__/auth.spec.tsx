import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useAuth, AuthProvider } from '../auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: '123',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        created_at: '2021-10-19T12:46:17.870Z',
        updated_at: '2021-10-19T12:46:17.870Z',
      },
      token: 'tokenTest',
    };

    apiMock.onPost('/session').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@gmail.com',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@Solides-Challenge:user',
      JSON.stringify(apiResponse.user),
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      '@Solides-Challenge:token',
      'tokenTest',
    );

    expect(result.current.user.name).toEqual('John Doe');
  });

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@Solides-Challenge:token':
          return 'tokenTest';
        case '@Solides-Challenge:user':
          return JSON.stringify({
            id: '123',
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            created_at: '2021-10-19T12:46:17.870Z',
            updated_at: '2021-10-19T12:46:17.870Z',
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.name).toEqual('John Doe');
  });

  it('should be able to sign out', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@Solides-Challenge:token':
          return 'token-123';
        case '@Solides-Challenge:user':
          return JSON.stringify({
            user: {
              id: '123',
              name: 'John Doe',
              email: 'johndoe@gmail.com',
              created_at: '2021-10-19T12:46:17.870Z',
              updated_at: '2021-10-19T12:46:17.870Z',
            },
            token: 'tokenTest',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });
});
