import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Data = {
  frase: string;
  id: string;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { id } = ctx.params;
    try {
      const response = await Axios.get<string>(
        `https://learnyourlesson.deno.dev/${id}`,
      );

      if (response.status !== 200) {
        throw new Error("Error");
      }
      return ctx.render({ frase: response.data, id });
    } catch (error) {
      console.error("Error fetching character data:", error);
      return ctx.render({ frase: "", id: "" });
    }
  },
};

// Mostramos por pantalla
const Page = (props: PageProps<Data>) => {
  const { frase, id } = props.data;

  return (
    <div class="imagenfondo3">
      <p class="p2">Modifica la URL para poder ver todas las frases !!</p>
      <h1 class="h12">{frase}</h1>
      <p>Estas en la frase {id}</p>
      {parseInt(id) > 1 && (
        <a class="link3" href={`/dimefrase/${parseInt(id) - 1}`}>Previous</a>
      )}
      &nbsp; | &nbsp;
      {parseInt(id) < 100 && (
        <a class="link3" href={`/dimefrase/${parseInt(id) + 1}`}>Next</a>
      )}
    </div>
  );
};

export default Page;
