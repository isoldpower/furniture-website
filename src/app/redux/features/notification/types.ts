export type NotificationType = 'success' | 'error' | 'overall';

export interface Notification {
    element: string;
    duration: number;
    type?: NotificationType;
}

export interface UniqueNotification extends Notification {
    id: number;
}

export interface NotificationState {
    idCounter: number;
    notification: UniqueNotification;
}
