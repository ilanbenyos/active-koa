import User from '../models/users'
import config from '../../config'
import { getToken } from '../utils/auth'
import { verify } from 'jsonwebtoken'

export async function ensureUser (ctx, next) {
  const token = getToken(ctx)
  if (!token) {
    ctx.throw(422, 'LOGIN_REQUIRED')

    ctx.throw(401)
  }
  let decoded = null
  try {
    decoded = verify(token, config.token)
  } catch (err) {
    ctx.throw(401)
  }
  ctx.state.user = await User.findById(decoded.id, '-password')
  if (!ctx.state.user) {
    ctx.throw(401)
  }
  return next()
}

export async function getMeUser (ctx, next) {
  const token = getToken(ctx)
  ctx.state.user = null
  if (!token) {
    return next()
  }
  let decoded = null
  try {
    decoded = verify(token, config.token)
  } catch (err) {
    return next()
  }
  let res = await User.findById(decoded.id, '-password')
  if (res) ctx.state.user = res
  return next()
}
