import React, { useEffect } from "react";
import { servicesInfo } from "../../data.jsx";
import { CarouselDefault } from "./CarouselDefault.jsx";

export const ServicesSeccion = () => {
  const [serviceSelected, setServiceSelected] = React.useState("Compra");

  const [titleServices, setTitleServices] = React.useState(
    servicesInfo[0].title,
  );
  const [descriptionService, setDescriptionService] = React.useState(
    servicesInfo[0].description,
  );
  const [imagesService, setImagesService] = React.useState(
    servicesInfo[0].imagesUrl,
  );

  const claseOfButton = `bg-white text-amber-300 p-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer transition-all hover:text-amber-400`;
  const claseOfButtonActive = ` bg-gray-200 text-amber-400 p-2 rounded-xl hover:bg-gray-300 hover:cursor-pointer transition-all`;

  const setServiceInfo = (service) => {
    // Aquí puedes actualizar el estado con la información del servicio seleccionado
    setTitleServices(service.title);
    setDescriptionService(service.description);
    setImagesService(service.imagesUrl);
  };

  const handleServiceButton = (valor) => {
    switch (valor) {
      case "Compra":
        setServiceInfo(servicesInfo[0]);
        break;
      case "Venta":
        setServiceInfo(servicesInfo[1]);
        break;
      case "Alquiler":
        setServiceInfo(servicesInfo[2]);
        break;
      case "Asesoría":
        setServiceInfo(servicesInfo[3]);
        break;
      default:
        setServiceInfo(servicesInfo[0]);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-start flex-col w-full bg-amber-300 rounded-tr-4xl p-4 shadow-lg shadow-black/30 md:w-2/3">
      <h4 className="text-2xl font-display mb-2 font-bold ">Servicios</h4>

      <div className="flex gap-1 flex-wrap m-1">
        <button
          onClick={() => handleServiceButton("Compra")}
          className={claseOfButton}
        >
          Compra
        </button>
        <button
          onClick={() => handleServiceButton("Venta")}
          className={claseOfButton}
        >
          Venta
        </button>
        <button
          onClick={() => handleServiceButton("Alquiler")}
          className={claseOfButton}
        >
          Alquiler
        </button>
        <button
          onClick={() => handleServiceButton("Asesoría")}
          className={
            serviceSelected === "Asesoría" ? claseOfButtonActive : claseOfButton
          }
        >
          Asesoría
        </button>
      </div>

      <div className="bg-white p-6 text-amber-500 flex flex-col gap-4 rounded-xl shadow-md shadow-black/20">
        <h5 className="font-bold text-lg mb-2">{titleServices}</h5>

        <div className="flex flex-col items-center">
          <p className="bg-gray-500 p-2 w-full  md:w-2/3 rounded-lg mb-2">
            {descriptionService}
          </p>
          <CarouselDefault UrlList={imagesService} />
        </div>
      </div>
    </div>
  );
};
