import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";
import uuid from "uuid";
import { AsyncSubject } from "rx";

const NOTIFICATION_KEY = "FlashCards:notifications";

export const generatedID = () => {
  return uuid();
};

export const createNotification = () => ({
  title: "It's time to practice",
  body: "Hey, don't forget your flash cards, he want to see you today!",
  ios: { sound: false },
  android: { sound: false, vibrate: false, priority: "high", sticky: false }
});

export const clearLocalNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(12);
            tomorrow.setMinutes(30);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};
