import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tokenList: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'flex-end',
    marginTop: 130,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
  },
  tokenButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    marginBottom: 10,
    backgroundColor: 'grey',
    marginHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  addButton: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
