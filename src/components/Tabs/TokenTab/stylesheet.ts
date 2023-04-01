import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    backgroundColor: '#1b1c1d',
    padding: 15,
    borderRadius: 15,
    rowGap: 15,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  balanceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  income: {
    display: 'flex',
    alignItems: 'center',
  },
});
