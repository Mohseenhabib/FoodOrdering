import { StyleSheet, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
const product = products[0];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style= {styles.image} />
      <Text style= {styles.title}>{product.name}</Text>
      <Text style={styles.price}>SAR {product.price}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 0,
    borderRadius: 20
    
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5 ,
    color: 'black'
    
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  price: {
    fontStyle: 'italic',
    fontWeight: '500',
    color: '#2f95dc'
  },
  
});
