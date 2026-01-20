import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import DenunciaCard from "../components/DenunciaCard";

export default function DenunciasScreen() {
  return (
    <View className={styles.container}>
      <Header />

      <View className={styles.stats}>
        <StatsCard title="Resultados" value="2" color="green" />
        <StatsCard title="Pendientes" value="6" color="red" />
        <StatsCard title="Total" value="8" color="blue" />
      </View>

      <SearchBar />
      <FilterTabs />

      <ScrollView showsVerticalScrollIndicator={false}>
        <DenunciaCard
          title="Dispensador sin calibración"
          station="Estación Sierra Norte"
          report="Mario C."
          date="2025-12-07"
          status="Pendiente"
        />
        <DenunciaCard
          title="Venta fuera de horario"
          station="Estación Centro Sur"
          report="Vehículo: ABC-531"
          date="2025-12-07"
          status="Pendiente"
        />

        <DenunciaCard
          title="Consumo inusual"
          station="Estación Frontera"
          report="Andrea G. (cliente)"
          date="2025-12-07"
          status="Pendiente"
        />
      </ScrollView>
    </View>
  );
}

const styles = {
  container: "flex-1 bg-gray-100",
  stats: "flex-row justify-between my-4",
};
