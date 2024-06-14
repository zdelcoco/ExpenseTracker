import { StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import Card from './Card';

function ExpenseCard({ title, content }) {
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

export default ExpenseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary400,
    width: '90%',
  },
  title: {
    color: Colors.neutral200,
  },
  content: {
    color: Colors.neutral300,
  },
});
