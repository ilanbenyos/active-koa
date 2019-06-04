import { ensureUser } from '../../../middleware/validators'
import * as user from './controller'
import * as getUser from './getUser'
import * as getMe from './getMe'
import * as serchUsers from './searchUsers'

export const baseUrl = '/users'

export default [
  {
    route: '/markSystemMsgAsDone',
    method: 'POST',
    handlers: [
      ensureUser,
      user.getAllMySystemMsgs
    ]
  }, {
    route: '/getAllMySystemMsgs',
    method: 'POST',
    handlers: [
      ensureUser,
      user.getAllMySystemMsgs
    ]
  },
  {
    route: '/createUser',
    method: 'POST',
    handlers: [
      user.createUser
    ]
  },
  {
    route: '/getMe',
    method: 'POST',
    handlers: [
      ensureUser,
      getMe.getMe
    ]
  },
  {
    route: '/updateUser',
    method: 'POST',
    handlers: [
      ensureUser,
      user.updateUser
    ]
  },
  {
    route: '/deleteUser',
    method: 'POST',
    handlers: [
      ensureUser,
      user.deleteUser
    ]
  },
  {
    route: '/test',
    method: 'POST',
    handlers: [
      user.test
    ]
  },
  {
    route: '/uploadAvatar',
    method: 'POST',
    handlers: [
      ensureUser,
      user.uploadAvatar
    ]
  },
  {
    route: '/getUser',
    method: 'POST',
    handlers: [
      getUser.getUser
    ]
  },
  {
    route: '/uploadAvatarFromPath',
    method: 'POST',
    handlers: [
      ensureUser,
      user.uploadAvatarFromPath
    ]
  },
  {
    method: 'POST',
    route: '/recoverPassword',
    handlers: [
      getMe.getMeByRecoverToken,
      user.recoverPassword
    ]
  },
  {
    method: 'POST',
    route: '/uploadImage',
    handlers: [
      ensureUser,
      user.uploadImage
    ]
  },
  {
    method: 'POST',
    route: '/searchUsers',
    handlers: [
      serchUsers.searchUsers
    ]
  }
]
