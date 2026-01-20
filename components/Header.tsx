import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className={styles.container}>
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Título */}
      <View className={styles.titleContainer}>
        <Text className={styles.title}>Denuncias</Text>
        <Text className={styles.subtitle}>Seguimiento y Control</Text>
      </View>

      {/* Acciones */}
      <View className={styles.actions}>
        <TouchableOpacity className={styles.iconButton}>
          <Ionicons name="add" size={20} color="#2563eb" />
        </TouchableOpacity>

        <TouchableOpacity className={styles.iconButton}>
          <Ionicons name="refresh" size={20} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: "flex-row items-center justify-between px-4 py-3 bg-white",

  titleContainer: "items-center",
  title: "text-lg font-bold",
  subtitle: "text-xs text-gray-500",

  actions: "flex-row space-x-2",
  iconButton:
    "border border-gray-300 rounded-lg p-2 items-center justify-center",
};
