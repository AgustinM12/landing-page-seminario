import Editor from "@monaco-editor/react";
import { useState, useRef, useEffect } from "react";
import { useFetchAI } from "../hooks/useFetchAI";

export const IDEcomponent = ({ language, setResult, setIaData, setLoading, toggle }) => {
    const { fetchAI, iaResponse } = useFetchAI()
    const editorRef = useRef(null);
    const [code, setCode] = useState("");
    const [firstLoad, setFirstLoad] = useState(true)

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false)
        } else {
            setIaData(iaResponse);
        }
    }, [iaResponse]);

    const handleCodeDidMount = (editor) => {
        editorRef.current = editor;
    };

    const handleTest = async () => {
        const codeValue = editorRef.current.getValue();
        setLoading(true);

        try {
            if (language === "javascript") {
                const result = await eval(codeValue);
                setResult(result);
            } else if (language === "python") {
                let pyodide = await loadPyodide();
                setResult(pyodide.runPython(codeValue));
            }

            await fetchAI(codeValue); // Espera a que fetchAI termine

            setIaData(iaResponse); // Luego de que fetchAI termine, actualiza el estado con la respuesta
        } catch (error) {
            console.error("Error al ejecutar el código:", error);
            setResult(error.toString());
        } finally {
            setLoading(false)
        }
    };

    return (
        <section className={`${!toggle && "px-5"} space-y-2`}>
            <h2 className="text-white font-semibold text-center underline">
                Editor de codigo
            </h2>

            <div className={`${toggle && "pl-3"}`}>
                <div className="border-2 border-white rounded-md">
                    <Editor
                        height={"50vh"}
                        theme={"vs-dark"}
                        defaultLanguage={language}
                        value={code}
                        onChange={(value) => setCode(value)}
                        onMount={handleCodeDidMount}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center pt-3">
                <button className="p-1 font-semibold bg-yellow-500 rounded border-2 border-black hover:bg-yellow-800 hover:text-gray-300 transition-colors" onClick={handleTest}>¡Probar!</button>
            </div>

        </section>
    )
}