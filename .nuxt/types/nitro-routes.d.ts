// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/admin/user/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/admin/user/[id]').default>>>>
    }
    '/api/admin/users': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/admin/users').default>>>>
    }
    '/api/auth/callback/google': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/callback/google').default>>>>
    }
    '/api/auth/callback/line': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/callback/line').default>>>>
    }
    '/api/auth/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/login.post').default>>>>
    }
    '/api/auth/register': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/register.post').default>>>>
    }
    '/api/auth/send-otp': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/send-otp.post').default>>>>
    }
    '/api/delUser': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/delUser').default>>>>
    }
    '/api/otp/register': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/otp/register').default>>>>
    }
    '/api/otp/send-otp': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/otp/send-otp').default>>>>
    }
    '/api/otp/verify-otp': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/otp/verify-otp').default>>>>
    }
    '/api/restaurant': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/restaurant').default>>>>
    }
    '/api/user/restaurant': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/user/restaurant.post').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}