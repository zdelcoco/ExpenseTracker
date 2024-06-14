import { StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import Card from './Card';

function NumberCard({ title, content }) {
  return (
    <Card
      title={title}
      content={content}
      cardStyle={ styles.card }
      titleStyle={styles.title}
      contentStyle={styles.content}
    />
  );
}

export default NumberCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.neutral300,
  },
  title: {
    color: Colors.primary600,
  },
});
