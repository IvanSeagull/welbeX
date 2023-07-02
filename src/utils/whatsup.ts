import { Linking, Alert, Platform } from 'react-native';

export const sendWhatsApp = (phone: string) => {
  let msg = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
  let phoneWithCountryCode = phone;

  let mobile = Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
      Linking.openURL(url)
        .then((data) => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('Make sure WhatsApp installed on your device');
        });
    } else {
      alert('Please insert message to send');
    }
  } else {
    alert('Please insert mobile no');
  }
};
