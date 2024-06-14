import React from 'react'

export const HorizontalCardComponent = ({ img = "", title = "", cardTitle = "", description = "", icon = "", orientation = 0 }) => {
    return (

        <div className={`max-w-sm w-fit lg:max-w-full flex group overflow-hidden ${!orientation && "flex-row-reverse"}`}>
            {/* //! IMAGEN DE LA TARJETA */}
            <div
                className={`h-72 lg:w-56 bg-center flex-none bg-cover relative ${orientation ? " rounded-l" : " rounded-r"}`}
                style={{
                    backgroundImage: `url(${"https://ui-avatars.com/api?background=random&name=Agustin+Mazza" || img})`,
                    zIndex: 1
                }}
            >
                <h2 className="font-bold px-5 text-xl pt-[55%] z-20 relative">{cardTitle}</h2>
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
            </div>

            <div className={`border-r border-b border-l-0 border-t border-gray-400 bg-white rounded-b-none p-4 leading-normal transition-all duration-300 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 ${orientation ? "-translate-x-full rounded-r" : "translate-x-full rounded-l"}`}>

                <div className="mb-8">
                    {/* //! CUERPO DE LA TARJETA */}
                    <div className="text-gray-900 font-bold text-xl mb-2 text-left">{title}</div>
                    <p className="text-gray-700 text-base text-left">{description}</p>
                </div>

            </div>
        </div >

    )
}
