import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import Button from './Button';
import SendIcon from './icons/Send';

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 100,
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Send = () => {
  const [bottomSheetVisible, setBottomSheetVisibility] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        buttonType="secondary"
        LeftIcon={SendIcon}
        text="Send"
        style={styles.button}
        onPress={() => setBottomSheetVisibility(true)}
      />

      <BottomSheet
        visible={bottomSheetVisible}
        onBackButtonPress={() => setBottomSheetVisibility(false)}
        onBackdropPress={() => setBottomSheetVisibility(false)}>
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}></View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Send;
