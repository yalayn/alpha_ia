export class PlanAlreadyExistsException extends Error {
  constructor(name: string) {
    super(`Plan with name "${name}" already exists`);
    this.name = 'PlanAlreadyExistsException';
  }
}
