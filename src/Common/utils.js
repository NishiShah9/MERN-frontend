import { notification } from 'antd';

export const toast = ( message, type ) => {
    return notification[type]({
        message: message
      });
  };