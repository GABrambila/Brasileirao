import {View, Text} from "react-native"; 
import { styles } from "./styles";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function Home(){

    return(

     <View>
        <Text style={styles.title}>JOGOS</Text>

      <Header rodada='29 RODADA'/>

     </View>

    )
}