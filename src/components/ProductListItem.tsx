import { StyleSheet, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import { Product } from '../types';
type ProductListItemProps ={ 
    product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
  return(
    <View style={styles.container}>
    <Image source={{ uri: product.image }} style= {styles.image} resizeMode="contain"/>
    <Text style= {styles.title}>{product.name}</Text>
    <Text style={styles.price}>SAR {product.price}</Text>
    
  </View>
  )
}
export default ProductListItem;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    flex: 1,
    borderRightColor:'white',
    borderRightWidth: 0.5 ,
    // borderWidth: 0.5 ,
    // borderColor: 'white',
    
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5 ,
    color: 'white'
    
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
