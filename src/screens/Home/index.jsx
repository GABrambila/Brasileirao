import {View, Text} from "react-native"; 
import { styles } from "./styles";
import { Header } from "react-native/Libraries/NewAppScreen";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/native";

export default function Home(){

     const navigation = useNavigation()

     function handleNavigationDetails(){
      
      navigation.navigate('details')

     }


    return(

     <View>
        <Text style={styles.title}>JOGOS</Text>

      <Header rodada='29 RODADA'/>

       <View>

        <Card 
        onPress={handleNavigationDetails}
              stadium= "Arena Palmeiras"
              date= "25/10 - Ontem - 21:30"
              teamHome= "Palmeiras"
              scoreHome= "5"
              teamVisited= "Sao Paulo"
              scoreVisited= "0"
             />
        <Card stadium= "Arena Gremio"
              date= "25/10 - Ontem - 21:30"
              teamHome= "Gremio"
              scoreHome= "3"
              teamVisited= "Flamengo"
              scoreVisited= "2"
             />
        <Card stadium= "Arena Gremio"
              date= "25/10 - Ontem - 21:30"
              teamHome= "Gremio"
              scoreHome= "3"
              teamVisited= "Flamengo"
              scoreVisited= "2"
             />

       </View>       


     </View>

    )
}

