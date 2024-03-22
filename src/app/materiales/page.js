import { getMateriales } from "../lib/api";
import List from "../list/layout";

const Materiales = async () => {
  const materiales = await getMateriales();

  return <List materiales={materiales} />;
};

export default Materiales;
