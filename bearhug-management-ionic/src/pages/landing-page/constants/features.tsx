import { JSX } from "react";
import LockIcon from "../icon/LockIcon";
import GlobalIcon from "../icon/GlobalIcon";
import ArchiveIcon from "../icon/ArchiveIcon";
import ScaleIcon from "../icon/ScaleIcon";

interface FeaturesProps {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const FEATURE_SECURITY: FeaturesProps = {
  title: "Seguridad",
  description:
    "Utilizamos el más alto nivel de seguridad en línea, cifrando toda tu para garantizar que tus datos estén protegidos.",
  icon: <LockIcon />,
  color: "teal-400",
};

const FEATURE_ACCESS: FeaturesProps = {
  title: "Acceso",
  description:
    "Desde tu computadora de escritorio hasta tu teléfono móvil, podrás acceder a tus archivos en cualquier momento y lugar.",
  icon: <GlobalIcon />,
  color: "violet-400",
};

const FEATURE_FILE: FeaturesProps = {
  title: "Sin pérdidas",
  description:
    "Nunca más perderás información importante debido a fallos locales. Nuestro servicio de almacenamiento en la nube te respalda.",
  icon: <ArchiveIcon />,
  color: "amber-400",
};

const FEATURE_SCALABLE: FeaturesProps = {
  title: "Escalable",
  description:
    "No te preocupes por quedarte sin espacio. Amplía tu almacenamiento según tus necesidades sin comprar más discos duros físicos.",
  icon: <ScaleIcon />,
  color: "pink-400",
};

export const FEATURES = [
  FEATURE_SECURITY,
  FEATURE_ACCESS,
  FEATURE_FILE,
  FEATURE_SCALABLE,
];
