import { useState } from "react";

export function useFetchAI() {
    const [iaResponse, setIaResponse] = useState("")

    async function fetchAI(codeValue) {
        if (codeValue !== "") {
            let fullResponse = ''; // Variable para almacenar la respuesta completa

            const gemini = await fetch("http://localhost:3000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ model: "phi3", prompt: codeValue }),
            });
            const reader = gemini.body.getReader();
            let decoder = new TextDecoder();
            let chunk = await reader.read();

            while (!chunk.done) {
                fullResponse += decoder.decode(chunk.value, { stream: true });
                chunk = await reader.read();
            }

            setIaResponse(fullResponse); // Establecer la respuesta completa una vez
        }
    }


    return { iaResponse, fetchAI }
}
