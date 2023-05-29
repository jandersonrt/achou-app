import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import styles from '../Login/style';

export default function CreateProduct(){
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.formInput}
                placeholder='Descrição'
                value={descricao}
                onChangeText={setDescricao}
            />
            <TextInput 
                style={styles.formInput}
                placeholder='Valor'
                value={valor}
                onChangeText={setValor}
            />
            <TouchableOpacity style={styles.formBtn} onPress= {validade}>
                <Text style={styles}></Text>

            </TouchableOpacity>
        </View>
    );
}