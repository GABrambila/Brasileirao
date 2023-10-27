import Details from "../screens/Details";
import Home from "../screens/Home";

function AppRoutes() {
    
    const {Screen, Navigator} = createNativeStackNavigator(); 

    return( 
       
        <Navigator screenOption= {{headerSchown: false}}>
            
            <Screen name="placar" component={Home} />
            <Screen name="details" component={Details}/>

        </Navigator>
    )

}

export default AppRoutes; 