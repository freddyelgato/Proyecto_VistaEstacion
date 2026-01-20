import { View } from "react-native";
import DenunciasScreen from "./screens/DenunciasScreen";
import "./global.css";

export default function App() {
  return (
    <View className={styles.container}>
      <DenunciasScreen />
    </View>
  );
}

const styles = {
  container: "flex-1 bg-gray-100",
};
