import { View } from "react-native";

import ProductivityHeader from "./productivity-header";
import ProductivityScore from "./productivity-score";
import ProductivityProgress from "./productivity-progress";
import { productivityStyles as styles } from "./productivity.styles";

interface Props {
  score: number;
}

export default function ProductivityCard({ score }: Props) {
  return (
    <View style={styles.card}>
      <ProductivityHeader />
      <ProductivityScore score={score} />
      <ProductivityProgress score={score} />
    </View>
  );
}
