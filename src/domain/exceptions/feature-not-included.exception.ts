export class FeatureNotIncludedException extends Error {
  constructor(featureId: string, planId: string) {
    super(`Feature "${featureId}" is not included in plan "${planId}"`);
    this.name = 'FeatureNotIncludedException';
  }
}
