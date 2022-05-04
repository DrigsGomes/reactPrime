import react from "react";
import { createDrawerNavigator} from '@react-navigation/drawer';

import { MaterialCommunityIcons} from '@expo/vector-icons';

import Movies from '../pages/Movies';
import StackRoutes from "./stackRoutes";

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerSown: false,

            drawerStyle:{
                backgroundColor: '#090A0E',
                paddingTop:20,
            },

            drawerActiveBackgroundColor: '#E72F49',
            drawerActiveTintColor: '#FFF',
            drawerInactiveTintColor: '#FFF'

        }}
        >
            <Drawer.Screen name="HomeDrawer" component={StackRoutes} />
            <Drawer.Screen name="Movies" component={Movies} />
        </Drawer.Navigator>
    )
}

export default Routes;
