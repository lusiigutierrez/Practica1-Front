import Axios from "npm:axios";

export default async function Home() {
  try {
    const frase = await Axios.get<string>(
      "https://learnyourlesson.deno.dev/",
    );

    const frase2 = await Axios.get<string>(
      "https://learnyourlesson.deno.dev/",
    );

    return (
      <body>
        <div style={{ background: "black" }}>
          <header>
            <h1 class="colorear3d">
              SI QUIERES SABER TU FRASE DEL DIA{" "}
              <strong>PULSA EL BOTÓN !!!</strong>
            </h1>
          </header>

          <div class="rotating-text-wrapper">
            <h2>VAMOS PULSALO !!</h2>
            <h2>PULSA EL BOTÓN</h2>
            <h2>¿A QUÉ ESPERAS?</h2>
          </div>

          <div class="centrar">
            <button class="button1">PULSA</button>
          </div>

          <table class="centrar">
            <tbody>
              <tr>
                <td>
                  <img src="https://i.pinimg.com/originals/80/2f/6b/802f6b55de54cec2eeacc6df2d7cb464.gif" />
                </td>
                <td class="imgopacidad">
                  <img src="https://i.pinimg.com/originals/85/ca/8b/85ca8ba5a21f8746c21f7720eb220419.gif" />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="rotacion" style={{ background: "pink" }}>
            <p>{frase.data}</p>

            <div class="imagenfondo">
              <a style={{ float: "right" }} class="link2" href="/dimefrase/1">
                Pincha aquí para ir viendo frase por frase!!
              </a>
              <table class="centrar">
                <thead>
                  <div class="stitch">
                    <img src="https://eltallerdehector.com/wp-content/uploads/2022/06/63caa-stitch-tierno-png.png" />
                  </div>
                  <div>
                    <iframe
                      align="right"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/HJwL0dc10j4?si=xO3pObe12aWhJcRN"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    >
                    </iframe>
                  </div>
                </thead>

                <tbody>
                  <tr>
                    <td class="rotacion">
                      <img
                        src="https://i.pinimg.com/originals/66/83/da/6683da6fc8f5321d2dcb6023e03df4fb.png"
                        style={{ maxWidth: "300px" }}
                      />
                    </td>
                    <td class="card">
                      <img src="https://media.tenor.com/vfY3krFQf7MAAAAj/hola-pocoyo.gif" />
                    </td>
                    <td class="imagen3">
                      <img src="https://i.pinimg.com/originals/0a/61/d1/0a61d169ebb64b3578deed06d2f2b2bc.gif" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ background: "#D85C3D" }}>
                <h2 class="frase2">{frase2.data}</h2>

                <a href="https://learnyourlesson.deno.dev/" target="_blank">
                  PULSA Y VERÁS
                </a>

                <div class="dropdown">
                  <span>Pasa el ratón por aquí ...</span>
                  <div class="dropdown-content">
                    <p>Hola cara cola!!</p>
                  </div>
                </div>
                <div>
                  <form>
                    <textarea style={{ float: "right" }}>
                      Continua la canción: A de alfa, altura, alien B de bandid
                      C de coqueta D de dinamita E de expensiva, emperatriz,
                      enigma, enterada F de Flux Æon G de guapa ...
                    </textarea>
                  </form>
                </div>

                <div class="leopardo">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/027/125/695/original/jaguar-isolated-on-transparent-background-leopard-wildcat-clipart-generative-ai-png.png"
                    style={{ maxWidth: "300px" }}
                  />
                </div>
                <div class="centrar">
                  <ul>
                    <li>
                      <a href="https://www.hola.com/">HOLA</a>
                    </li>
                    <li>
                      <a href="#news">SOY</a>
                    </li>
                    <li>
                      <a href="#contact">UN</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=0k7nMnQt0yg">
                        LEOPARDO
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="imagenfondo2">
                  <img
                    src="https://images.hola.com/imagenes/belleza/actualidad/20230118224707/miley-cyrus-hannah-montana-evolucion-looks/1-217-496/hannah-montana-cordon11-a.jpg"
                    style={{ maxWidth: "300px" }}
                  />
                  <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGExbWlub3I2dm90aG9sM2E3eGVpZGRxcTE2bHlxa3BqOXluOWZ0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fDqGThpuG6vS/giphy.gif"
                    style={{ float: "right", maxWidth: "400px" }}
                  />
                  <h1 class="h12">
                    Suscribete a nuestra revista de Hannah Montana
                  </h1>
                  <form action="/action_page.php">
                    <label for="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Your name.."
                    >
                    </input>
                    <label for="lname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Your last name.."
                    >
                    </input>
                    <label for="country">Country</label>
                    <select id="country" name="country">
                      <option value="australia">Australia</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                      <option value="Europa">Europa</option>
                    </select>
                    <p>Ya estas suscrito!!</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
