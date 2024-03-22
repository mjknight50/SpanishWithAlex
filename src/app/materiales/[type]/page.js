import { getMateriales } from "@/app/lib/api";
import List from "@/app/list/layout";

const Type = async ({ params }) => {
  const materiales = await getMateriales();
  const materialesFiltrados = materiales.filter(
    (material) => material.tipo == params.type
  );
  return <List materiales={materialesFiltrados} />;
};

export default Type;
