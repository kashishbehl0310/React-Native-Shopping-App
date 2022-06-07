import React from "react";
import {
  View,
  TouchableOpacity,
  Text
} from "react-native";

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator
} from "@react-navigation/stack"
import { Ionicons } from '@expo/vector-icons'; 

import {
  Home, SignIn, Product, CategoryType, Filters
} from "../screens";

import CategoryTabNavigator from "./CategoryTabNavigator";
import FilterSelector from "../screens/FilterSelector";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import PaymentMethods from "../screens/PaymentMethods";
import ShippingAddress from "../screens/ShippingAddress";
import AddressForm from "../screens/AddressForm";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import OrderSummary from "../screens/OrderSummary";
import Settings from "../screens/Settings";
import ProcessingOrder from "../screens/ProcessingOrder";
import Success from "../screens/Success";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress, ...props}) => {
  // console.log(props);
  var isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 60,
        borderTopColor: isSelected ? "#ff8c00" : "#fff",
        borderTopWidth: "4px",
        position: "relative"
      }}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
};

const CustomTabBar = (props) => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: 30,
          backgroundColor: '#fff',
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};

const BottomTabNavigator = () => {
  const cart = useSelector(state => state.cart);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: "#ff8c00",
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen> 
      <BottomTab.Screen
        name="Search"
        component={CategoryNavigator}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Wishlist"
        component={FavoritesNavigator}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen> 
      <BottomTab.Screen
        name="Cart"
        component={BagNavigator}
        options={(nav) => {
          const currentRoute = getFocusedRouteNameFromRoute(nav.route);
          let tabBarVisible = true;
          if (currentRoute && currentRoute === "processing-order") {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
          return ({
            tabBarVisible,
            tabBarButton: (props) => <TabBarCustomButton {...props}></TabBarCustomButton>,
            tabBarIcon: ({ color }) => (
              <View>
                <Ionicons name="cart-outline" size={30} color={color} style={{ marginBottom: -3 }} />
                {
                  cart && cart.cartQuantity > 0
                  ? <View
                    style={{
                      position: "absolute",
                      backgroundColor: "red",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      right: -10,
                      top: -10
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff"
                      }}
                    >{cart.cartQuantity}</Text>
                  </View>
                  : null
                }                
              </View>
            )
          });
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Settings"
        component={ProfileNavigator}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={30} color={color} style={{ marginBottom: -3 }} />
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

const HomeStackNavigator = createStackNavigator();
const CategoryStackNavigator = createStackNavigator();
const FilterStackNavigator = createStackNavigator();
const FavoritesStackNavigator = createStackNavigator();
const BagStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <HomeStackNavigator.Screen
        name="main"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
      <HomeStackNavigator.Screen
        name="productScreen"
        component={Product}
        options={{ headerTitle: 'Product' }}
      />
    </HomeStackNavigator.Navigator>
  );
}

function CategoryNavigator() {
  return (
    <CategoryStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <CategoryStackNavigator.Screen
        name="category-main"
        component={CategoryTabNavigator}
      />
      <CategoryStackNavigator.Screen
        name="category-individual"
        component={CategoryType}
      />
      <CategoryStackNavigator.Screen
        name="filters"
        component={filterNavigator}
      />
    </CategoryStackNavigator.Navigator>
  );
}

function filterNavigator() {
  return (
    <FilterStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <FilterStackNavigator.Screen 
        name="filters-home"
        component={Filters}
      />
      <FilterStackNavigator.Screen
        name="filter-individual"
        component={FilterSelector}
      />
    </FilterStackNavigator.Navigator>
  );
}

function FavoritesNavigator() {
  return (
    <FavoritesStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <FavoritesStackNavigator.Screen
        name="favorites"
        component={Favorites}
      />
    </FavoritesStackNavigator.Navigator>
  );
}

function BagNavigator() {
  return (
    <BagStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <BagStackNavigator.Screen
        name="bag"
        component={Cart}
      />
      <BagStackNavigator.Screen
        name="checkout"
        component={Checkout}
      />
      <BagStackNavigator.Screen
        name="payment-methods"
        component={PaymentMethods}
      />
      <BagStackNavigator.Screen
        name="address"
        component={ShippingAddress}
      />
      <BagStackNavigator.Screen
        name="address-form"
        component={AddressForm}
      />
       <BagStackNavigator.Screen
        name="processing-order"
        component={ProcessingOrder}
      />
      <BagStackNavigator.Screen
        name="order-success"
        component={Success}
      />
    </BagStackNavigator.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{ headerShown: false }}
    >
      <ProfileStackNavigator.Screen
        name="Settings"
        component={Profile}
      />
      <ProfileStackNavigator.Screen
        name="profile-settings"
        component={Settings}
      />
      <ProfileStackNavigator.Screen
        name="orders"
        component={Orders}
      />
      <ProfileStackNavigator.Screen
        name="order-summary"
        component={OrderSummary}
      />
       <ProfileStackNavigator.Screen
        name="address"
        component={ShippingAddress}
      />
      <ProfileStackNavigator.Screen
        name="payment-methods"
        component={PaymentMethods}
      />
       <ProfileStackNavigator.Screen
        name="address-form"
        component={AddressForm}
      />
    </ProfileStackNavigator.Navigator>
  );
}

export default BottomTabNavigator;
