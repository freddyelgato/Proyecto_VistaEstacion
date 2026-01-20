import { View, Text } from "react-native";

type Props = {
  title: string;
  value: string;
  color: "green" | "red" | "blue";
};

export default function StatsCard({ title, value, color }: Props) {
  return (
    <View className={styles.card}>
      <Text className={`${styles.value} ${styles[color]}`}>
        {value}
      </Text>
      <Text className={styles.title}>{title}</Text>
    </View>
  );
}

const styles = {
  card: "bg-white rounded-xl p-4 w-[30%] items-center shadow",
  value: "text-xl font-bold",
  title: "text-gray-500 text-sm",
  green: "text-green-600",
  red: "text-red-600",
  blue: "text-blue-600",
};
