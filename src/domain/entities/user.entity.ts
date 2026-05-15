export type UserRole = 'admin' | 'customer';

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly password: string,
    public readonly role: UserRole,
    public readonly createdAt: Date = new Date(),
  ) {}
}
