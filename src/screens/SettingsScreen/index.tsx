import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { textTranslation } from '../../utils/text';
import { useLanguageContext } from '../../context/LanguageContext';

const SettingsScreen = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { language, setLanguage } = useLanguageContext();

  return (
    <View style={styles.content}>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <TouchableOpacity
              onPress={() => {
                setLanguage('ru');

                toggleModal();
              }}>
              <Text style={styles.lang}>Russian</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLanguage('en');
                setLanguage('en');
                toggleModal();
              }}>
              <Text style={styles.lang}>English</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>{textTranslation.settings.title[language]}</Text>
      <View style={styles.row}>
        <Text style={styles.langTitle}>{textTranslation.settings.language[language]}:</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.langValue}>{language === 'ru' ? 'Русский' : 'English'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  content: {
    paddingTop: '12%',
    paddingHorizontal: scale(10),
  },
  modal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalTitle: {
    fontSize: scale(22),
    fontWeight: 'bold',
    marginBottom: verticalScale(12),
  },
  lang: {
    fontSize: scale(18),
    paddingVertical: verticalScale(8),
  },
  title: {
    fontWeight: 'bold',
    fontSize: scale(22),
  },
  row: {
    marginTop: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langTitle: {
    fontSize: scale(18),
  },
  langValue: {
    fontSize: scale(18),
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
