import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export const createNotification = (type: NotificationType) => {
  const [api] = notification.useNotification();
  api[type]({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  });
};
