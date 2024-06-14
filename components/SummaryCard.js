import { StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import Card from './Card';

function SummaryCard({ title, content }) {
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

export default SummaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.neutral500,
    width: '90%',
  },
  content: {
    color: Colors.primary600,
    //fontWeight: 'bold',
  },
});
