import { View, Text, TouchableOpacity } from "react-native";

export default function FilterTabs() {
  return (
    <View className={styles.container}>
      <TouchableOpacity className={styles.tabActive}>
        <Text className={styles.tabActiveText}>Todas</Text>
      </TouchableOpacity>

      <TouchableOpacity className={styles.tab}>
        <Text className={styles.tabText}>Pendientes</Text>
      </TouchableOpacity>

      <TouchableOpacity className={styles.tab}>
        <Text className={styles.tabText}>Resueltas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: "flex-row px-4 mb-3",
  tab: "bg-gray-200 px-4 py-2 rounded-full mr-2",
  tabActive: "bg-blue-600 px-4 py-2 rounded-full mr-2",
  tabText: "text-gray-600 text-sm",
  tabActiveText: "text-white text-sm",
};
