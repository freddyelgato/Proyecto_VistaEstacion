import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View className={styles.container}>
      <Ionicons name="search" size={20} color="#6b7280" />
      <TextInput
        placeholder="Buscar denuncia"
        className={styles.input}
      />
    </View>
  );
}

const styles = {
  container: "flex-row items-center bg-gray-100 rounded-xl px-3 py-2 mx-4 my-3",
  input: "ml-2 flex-1 text-gray-700",
};
