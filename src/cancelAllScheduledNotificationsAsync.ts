import { UnavailabilityError } from '@unimodules/core';

import NotificationScheduler from './NotificationScheduler';

export default async function cancelScheduledNotificationAsync(): Promise<void> {
  if (!NotificationScheduler.cancelScheduledNotificationAsync) {
    throw new UnavailabilityError('Notifications', 'cancelScheduledNotificationAsync');
  }

  return await NotificationScheduler.cancelAllScheduledNotificationsAsync();
}
