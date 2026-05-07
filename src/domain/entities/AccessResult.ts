import { SubscriptionStatus } from './Subscription';

export type AccessDenialReason = 
  | 'no_active_subscription' 
  | 'subscription_expired' 
  | 'feature_not_in_plan' 
  | null;

export class AccessResult {
  constructor(
    public readonly hasAccess: boolean,
    public readonly reason: AccessDenialReason,
    public readonly customerId: string,
    public readonly featureId: string,
    public readonly subscriptionStatus: SubscriptionStatus | null,
  ) {}
}
