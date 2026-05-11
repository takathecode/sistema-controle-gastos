import { useEffect } from "react";
import { View, Text } from "react-native";
import { supabase } from "../src/services/supabase";

export default function App() {
  useEffect(() => {
    testarConexao();
  }, []);

  async function testarConexao() {
    const { data, error } = await supabase.from("teste").select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
  }

  return (
    <View>
      <Text>Testando Supabase...</Text>
    </View>
  );
}
