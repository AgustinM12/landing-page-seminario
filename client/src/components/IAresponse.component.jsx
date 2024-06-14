import rotate from "../assets/rotate.png";

export const IAresponseComponent = ({ iaData, loading }) => {

    const displayData = typeof iaData === 'string' ? iaData.replace(/"/g, "") : JSON.stringify(iaData, null, 2);


    return (
        <section className={`flex justify-center items-center flex-col px-5 pb-5`}>
            <h3 className="font-semibold underline text-white pb-3">Respuesta de la IA:</h3>

            <img className={`items-center justify-center animate-spin ${!loading && "hidden"}`} width={"40px"} height={"40px"} src={rotate} alt="loading..." />

            <p className={`bg-gray-800 border-2 text-center border-white rounded text-white min-w-full ${iaData == "Aqui se mostrara las correcciones de la IA" && "animate-pulse"}`}>{displayData}</p>
        </section>
    );
};

