import { get } from 'lodash';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../domain';
const AuthDataMock = require('../mocks/auth-data');

export const AuthUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    const userData = token
        ? AuthDataMock.find((authData) => {
              if (authData.token === token) {
                  return true;
              }
              return false;
          })
        : undefined;
    return userData
        ? new User({
              id: get(userData, 'data.userId'),
              name: get(userData, 'data.name'),
          })
        : User.createAnonymousUser();
});
