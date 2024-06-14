import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function SummaryCard({ content, summary }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>{summary}</Text>
      </View>
    </View>
  );
}

export default SummaryCard;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.neutral500,
    borderRadius: 6,
    shadowColor: Colors.primary900,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    marginBottom: 16,
  },
  contentContainer: {
    padding: 8,
    marginLeft: 8,
    flex: 3,
  },
  content: {
    color: Colors.primary600,
  },
  summaryContainer: {
    padding: 8,
    flex: 1,
  },
  summary: {
    color: Colors.primary600,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
