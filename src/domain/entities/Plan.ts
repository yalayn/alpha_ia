export class Plan {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly currency: string,
    public readonly interval: 'month' | 'year',
    public readonly features: string[],
    public readonly createdAt: Date,
  ) {}

  hasFeature(featureId: string): boolean {
    return this.features.includes(featureId);
  }
}
