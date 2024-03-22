import connectMongoDB from "@/libs/mongodb";
import Material from "@/models/material";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongoDB();
  const materials = await Material.find({});
  return NextResponse.json(materials);
};

export const POST = async (req) => {
  const {
    nivel,
    privilegios,
    tipo,
    titulo,
    urlImagen,
    urlTitulo,
    palabrasClave,
    descripcion,
  } = await req.json();
  await connectMongoDB();
  await Material.create({ nivel, privilegios, tipo, titulo, urlImagen, urlTitulo, palabrasClave, descripcion });
  return NextResponse.json({ message: "Material Created" }, { status: 201 });
};

