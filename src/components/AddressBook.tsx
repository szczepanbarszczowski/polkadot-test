import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useTruncateFromMiddle } from '../hooks/useTruncateFromMiddle';
import Text from './Text';
import {
  AddressBookProps,
  pickContact,
  removeContact,
  selectContacts,
  setAddressToSend,
} from '../store/addressBook';
import { TypographyTypes } from '../theme/typography';
import Profile from './icons/Profile';
import { useAppDispatch } from '../store';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  scrollView: {
    marginBottom: 20,
    maxHeight: 300,
  },
  scrollViewContent: {
    gap: 10,
  },
  noContactsContainer: {
    borderRadius: 5,
    backgroundColor: colors.gray21,
    height: 30,
    justifyContent: 'center',
  },
  addContactButton: {
    position: 'absolute',
    right: 20,
    zIndex: 2,
  },
});

export const ContactProfile = ({ address, name }: AddressBookProps) => {
  const addr = useTruncateFromMiddle({
    fullStr: address,
    strLen: 10,
  });

  return (
    <View style={styles.profileContainer}>
      <Profile />
      <View>
        <Text typographyType={TypographyTypes.title1}>{name}</Text>
        <Text typographyType={TypographyTypes.captionLargeSemiBold} paddingBottom={10}>
          {addr}
        </Text>
      </View>
    </View>
  );
};

const AddressBook = ({ onAdd }: { onAdd: () => void }) => {
  const dispatch = useAppDispatch();
  const contacts: AddressBookProps[] = useSelector(selectContacts) || [];

  const createButtonAlert = (uuid: string) =>
    Alert.alert('Actions', 'Click one of this buttons to perform an action', [
      {
        text: 'Delete Address',
        onPress: () => {
          dispatch(removeContact(uuid));
        },
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  const handlePress = (contact: AddressBookProps) => () => {
    dispatch(pickContact(contact));
    dispatch(setAddressToSend(null));
  };

  return (
    <View>
      <Pressable style={styles.addContactButton} onPress={onAdd}>
        <Text
          paddingTop={20}
          paddingBottom={20}
          typographyType={TypographyTypes.captionLargeSemiBold}
          color={colors.blue3}>
          Add +
        </Text>
      </Pressable>
      <Text
        paddingTop={20}
        paddingBottom={20}
        typographyType={TypographyTypes.captionLargeSemiBold}>
        Contacts
      </Text>
      {contacts.length === 0 && (
        <View style={styles.noContactsContainer}>
          <Text center typographyType={TypographyTypes.captionLargeRegular} color={colors.gray16}>
            No contacts
          </Text>
        </View>
      )}
      {contacts.length > 0 && (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          {contacts.map((contact, index) => (
            <Pressable
              onPress={handlePress(contact)}
              onLongPress={() => createButtonAlert(contact.uuid)}
              key={`${contact.uuid}-${index}`}>
              <ContactProfile address={contact.address} name={contact.name} uuid={contact.uuid} />
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default AddressBook;
