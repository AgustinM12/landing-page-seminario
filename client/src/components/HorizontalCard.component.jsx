import React from 'react';

// HorizontalCardComponent
export const HorizontalCardComponent = ({ img = "", title = "", cardTitle = "", description = "", icon = "", orientation = 0, children = "" }) => {
    return (
        <div className={`h-72 flex group overflow-hidden ${!orientation && "flex-row-reverse"}`}>
            {/* //* IMAGEN */}
            <div
                className={`h-72 w-56 bg-center flex-none bg-cover relative ${orientation ? " rounded-l" : " rounded-r"}`}
                style={{
                    backgroundImage: `url(${img || "https://ui-avatars.com/api?background=random&name="+title})`,
                    zIndex: 1
                }}
            >
                <h2 style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }} className="font-bold px-5 text-xl pt-[55%] z-20 relative text-white">{cardTitle}</h2>
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
            </div>

            {/* //* CUERPO */}
            <div className={`border-r border-b border-l-0 border-t border-gray-400 bg-white rounded-b-none p-4 leading-normal transition-all duration-300 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 flex-1  ${orientation ? "-translate-x-full rounded-r" : "translate-x-full rounded-l"}`}>
                {/* // * CONTENIDO */}
                <div className="">
                    <p className="text-gray-900 font-bold text-xl mb-2">{title}</p>
                    <p className="text-gray-700 text-base">{description}</p>

                    <div className='flex gap-3 pb-2'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}