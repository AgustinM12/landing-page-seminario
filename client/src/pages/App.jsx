import { useState } from "react";
import { useToggle } from "../hooks/useToggle";

import { IDEcomponent } from "../components/IDE.component";
import { IDEresultComponent } from "../components/IDEresult.component";
import { SwitchButtonComponent } from "../components/SwitchButtom.component";
import { IAresponseComponent } from "../components/IAresponse.component";

import { LuSplitSquareHorizontal } from "react-icons/lu";
import { LuSplitSquareVertical } from "react-icons/lu";

export const App = () => {

  const { toggle, handleToggle } = useToggle();

  const [result, setResult] = useState(""); //* Estado para almacenar el resultado del código
  const [loading, setLoading] = useState(false)
  const [iaData, setIaData] = useState("Aqui se mostrara las correcciones de la IA");
  console.log(iaData);

  return (
    <>
      <article className="bg-slate-800 flex flex-col max-w-screen min-h-screen">

        <div className="pb-5 text">
          <h1 className="text-white text-3xl text-center font-bold">Zona de practica</h1>
        </div>

        <div className="text-right pb-3 pr-3 invisible lg:visible">
          <SwitchButtonComponent
            icon={<LuSplitSquareHorizontal />}
            secondaryIcon={<LuSplitSquareVertical />}
            toggle={toggle}
            handleToggle={handleToggle} />
        </div>

        <section className={`grid grid-rows-2 grid-cols-1 ${toggle && "lg:grid-cols-2 lg:grid-rows-1"}  border-b border-t border-white pb-5`}>

          {/* //* EDITOR DE CODIGO */}
          <IDEcomponent language={"javascript"} setResult={setResult} setIaData={setIaData} setLoading={setLoading} toggle={toggle} />

          {/* //* EJECUTOR DEL CODIGO */}
          <IDEresultComponent result={result} />

        </section>

        {/* //* RESPUESTA DE LA IA */}
        <IAresponseComponent loading={loading} iaData={iaData} />
      </article>
    </>
  );
};
