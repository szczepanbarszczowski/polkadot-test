import { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ScreenNames } from '../../navigation/screenNames';
import { AuthStackParamList } from '../../navigation/AuthStackNavigator';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { colors } from '../../theme/colors';
import { TypographyTypes } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray24,
    justifyContent: 'space-between',
  },
  image: {
    width: 295,
    height: 295,
    marginTop: 158,
  },
  paginationContainer: {},
  paginationDot: {
    width: 8,
    height: 8,
  },
  slideText: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 56,
  },
  slideContainer: {
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 24,
  },
});

const entries = [
  {
    title: 'Property',
    subtitle: 'Diversity',
    illustration: require('../../images/property-diversity.png'),
  },
  {
    title: 'Safe',
    subtitle: 'Security',
    illustration: require('../../images/safe-security.png'),
  },
  {
    title: 'Convenient',
    subtitle: 'Transaction',
    illustration: require('../../images/convenient-transaction.png'),
  },
];

interface SlideItemProps {
  item: (typeof entries)[0];
  index: number;
}

const SlideItem = ({ item }: SlideItemProps) => (
  <View style={styles.slideContainer}>
    <Image source={item.illustration} style={styles.image} />
    <Text typographyType={TypographyTypes.h5} style={styles.slideText}>
      {item.title}
      {'\n'}
      {item.subtitle}
    </Text>
  </View>
);

function Welcome({ navigation }: NativeStackScreenProps<AuthStackParamList, ScreenNames.Welcome>) {
  const width = Dimensions.get('window').width;
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={sliderRef}
        data={entries}
        renderItem={SlideItem}
        sliderWidth={width}
        itemWidth={width}
        firstItem={0}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => setSlide(index)}
        onBeforeSnapToItem={(index) => setSlide(index)}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={slide}
        containerStyle={styles.paginationContainer}
        dotColor={colors.primary5}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationDot}
        inactiveDotColor={colors.gray18}
      />
      <Button
        buttonType="secondary"
        small
        onPress={() => navigation.navigate(ScreenNames.WalletSetup)}
        text="Get started"
        style={styles.button}
        disabled={slide < 2}
      />
    </View>
  );
}

export default Welcome;
