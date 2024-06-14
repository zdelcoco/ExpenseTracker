import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Card = ({ title, content, cardStyle, titleStyle, contentStyle }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.content, contentStyle]}>{content}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.primary900,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});
