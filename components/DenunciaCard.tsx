import { View, Text } from "react-native";

type Props = {
  title: string;
  station: string;
  report: string;
  date: string;
  status: string;
};

export default function DenunciaCard({
  title,
  station,
  report,
  date,
  status,
}: Props) {
  return (
    <View className={styles.card}>
      <View className={styles.header}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.status}>{status}</Text>
      </View>

      <Text className={styles.text}>{station}</Text>
      <Text className={styles.text}>Reporta: {report}</Text>
      <Text className={styles.date}>Registrado: {date}</Text>
    </View>
  );
}

const styles = {
  card: "bg-white rounded-xl p-4 mx-4 mb-3 shadow",
  header: "flex-row justify-between items-center mb-1",
  title: "font-semibold",
  status: "text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full",
  text: "text-gray-500 text-sm",
  date: "text-gray-400 text-xs mt-1",
};
