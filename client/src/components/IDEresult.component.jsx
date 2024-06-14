export const IDEresultComponent = ({ result }) => {

  return (
    <section className={`flex flex-col justify-center items-center space-y-2 px-5`}>
      <h2 className="text-white font-semibold text-center underline">Resultado del codigo:</h2>

      <div className="rounded-md text-white bg-gray-700 border-2 border-white p-5 w-full">
        {typeof result === 'object' && result !== null ? (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        ) : (
          <pre className="h-[50vh] min-w-full">{result}</pre>
        )}
      </div>

    </section>)
}
