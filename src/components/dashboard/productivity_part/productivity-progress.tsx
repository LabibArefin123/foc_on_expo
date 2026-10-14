import { Text, View } from "react-native";

import { productivityStyles as styles } from "./productivity.styles";

interface Props {
  score: number;
}

export default function ProductivityProgress({ score }: Props) {
  return (
    <>
      <View style={styles.progressBackground}>
        <View
          style={[styles.progress, { width: `${Math.min(score, 100)}%` }]}
        />
      </View>

      <Text style={styles.footer}>
        Keep it up! You're building better digital habits.
      </Text>
    </>
  );
}
