import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' },
  ]

  get(ctx: HttpContext): { id: string; name: string } {
    const id = ctx.params.id
    const currentUser = this.users.find((u) => u.id === id)

    if (!currentUser) {
      throw new Error('Not found')
    }

    return currentUser
  }
  list() {
    return this.users
  }
}
