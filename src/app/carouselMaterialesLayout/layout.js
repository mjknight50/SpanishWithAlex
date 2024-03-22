import CarouselMateriales from "../carouselMateriales/layout";
import { getMateriales } from "../lib/api";

const CarouselMaterialesLayout = async () => {
  const materiales = await getMateriales();

  const sortedAsc = materiales.sort(
    (objA, objB) => Number(objA.fecha) - Number(objB.fecha)
  );

  const lastMaterials = sortedAsc.reverse();
  // console.log(lastMaterials);

  return <CarouselMateriales materiales={lastMaterials} />;
};

export default CarouselMaterialesLayout;
