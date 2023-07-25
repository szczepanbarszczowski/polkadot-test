import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Card from './Card';
import Tag from './Tag';
import Text from './Text';
import Button from './Button';
import Eye from './icons/Eye';
import { TypographyTypes } from '../theme/typography';

const styles = StyleSheet.create({
  contentContainer: {
    gap: 16,
    flexDirection: 'row',
  },
  column: {
    gap: 16,
    flex: 1,
  },
  blurContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
    position: 'absolute',
    alignItems: 'center',
  },
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    width: 100,
  },
});

interface SeedPhrasesProps {
  phrases: string[];
}

const splitPhrases = (phrases: string[]) => {
  const phrasesCopy = [...phrases];
  const middleIndex = Math.ceil(phrasesCopy.length / 2);
  const firstHalf = phrasesCopy?.splice(0, middleIndex);
  const secondHalf = phrasesCopy?.splice(-middleIndex);

  return [firstHalf, secondHalf];
};

const SeedPhrases = ({ phrases }: SeedPhrasesProps) => {
  const [firstHalf, secondHalf] = useMemo(() => splitPhrases(phrases), [phrases]);
  const [seedPhraseVisible, setSeedPhraseVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.contentContainer}>
          <View style={styles.column}>
            {firstHalf.map((phrase, index) => (
              <Tag text={`${index + 1}. ${phrase}`} key={index + phrase} />
            ))}
          </View>
          <View style={styles.column}>
            {secondHalf.map((phrase, index) => (
              <Tag text={`${index + firstHalf.length + 1}. ${phrase}`} key={index + phrase} />
            ))}
          </View>
        </View>
      </Card>

      {!seedPhraseVisible && (
        <BlurView intensity={70} tint="dark" style={styles.blurContainer}>
          <Text typographyType={TypographyTypes.paragraphSemiBold} center paddingTop={85}>
            Tap to reveal your seed phrase
          </Text>
          <Text
            typographyType={TypographyTypes.captionSmallRegular}
            center
            paddingTop={12}
            paddingBottom={40}>
            Make sure no one is watching your screen.
          </Text>
          <Button
            buttonType="secondary"
            onPress={() => setSeedPhraseVisible(true)}
            text="View"
            RightIcon={Eye}
            style={styles.button}
          />
        </BlurView>
      )}
    </View>
  );
};

export default SeedPhrases;
