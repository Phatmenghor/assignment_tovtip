// src/utils/toastUtils.ts
import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info';

const ShowToast = (
  type: ToastType,
  text1: string,
  text2?: string,
  topOffset?: number,
) => {
  Toast.show({
    type,
    position: 'top',
    text1,
    text2,
    visibilityTime: 6000,
    autoHide: true,
    topOffset: topOffset || 50,
  });
};

export default ShowToast;
