import Header from "../header/layout";
import { getMateriales } from "../lib/api";

const HeaderSC = async () => {
  const materiales = await getMateriales();

  return <Header materiales={materiales} />;
};

export default HeaderSC;
