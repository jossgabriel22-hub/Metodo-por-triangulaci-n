function numero(numero) {
    return Number(Number(numero).toFixed(11)).toString();
}

function numeroLimpio(numero) {
    return Number(numero).toString();
}

function segundosDMS(segundos) {
    const entero = Math.floor(segundos);
    const decimal = segundos - entero;

    if (decimal === 0.5) {
        return entero + 0.5;
    }

    if (decimal > 0.5) {
        return entero + 1;
    }

    return entero;
}

function convertirDMS(grados) {
    const gradosEnteros = Math.floor(grados);

    const minutosDecimales =
        (grados - gradosEnteros) * 60;

    const minutos =
        Math.floor(minutosDecimales);

    const segundosOriginales =
        (minutosDecimales - minutos) * 60;

    const segundos =
        segundosDMS(segundosOriginales);

    return {
        grados: gradosEnteros,
        minutos: minutos,
        segundos: segundos,
        segundosOriginales: segundosOriginales,
        texto:
            `${gradosEnteros}° ${minutos}' ${segundos}"`
    };
}

function calcular() {

    const aTexto =
        document.getElementById("a").value;

    const bTexto =
        document.getElementById("b").value;

    const cTexto =
        document.getElementById("c").value;

    const error =
        document.getElementById("error");

    const resultado =
        document.getElementById("resultado");

    error.textContent = "";
    resultado.style.display = "none";

    if (
        aTexto === "" ||
        bTexto === "" ||
        cTexto === ""
    ) {
        error.textContent =
            "Ingresa los valores de a, b y c.";

        return;
    }

    const a = Number(aTexto);
    const b = Number(bTexto);
    const c = Number(cTexto);

    if (
        !Number.isFinite(a) ||
        !Number.isFinite(b) ||
        !Number.isFinite(c) ||
        a <= 0 ||
        b <= 0 ||
        c <= 0
    ) {
        error.textContent =
            "Ingresa valores positivos.";

        return;
    }

    if (
        a + b <= c ||
        a + c <= b ||
        b + c <= a
    ) {
        error.textContent =
            "Las dimensiones no forman un triángulo.";

        return;
    }

    const s =
        (a + b + c) / 2;

    const sTexto =
        numero(s);

    const sa =
        s - a;

    const sb =
        s - b;

    const sc =
        s - c;

    const saTexto =
        numero(sa);

    const sbTexto =
        numero(sb);

    const scTexto =
        numero(sc);

    const tanA =
        Math.sqrt(
            (sb * sc) /
            (s * sa)
        );

    const tanB =
        Math.sqrt(
            (sa * sc) /
            (s * sb)
        );

    const tanC =
        Math.sqrt(
            (sa * sb) /
            (s * sc)
        );

    const tanATexto =
        numero(tanA);

    const tanBTexto =
        numero(tanB);

    const tanCTexto =
        numero(tanC);

    /*
     * Se redondea a 11 decimales,
     * igual que el procedimiento que quieres mostrar.
     */
    const tanARedondeada =
        Number(tanATexto);

    const tanBRedondeada =
        Number(tanBTexto);

    const tanCRedondeada =
        Number(tanCTexto);

    const A2 =
        Math.atan(tanARedondeada) *
        180 /
        Math.PI;

    const B2 =
        Math.atan(tanBRedondeada) *
        180 /
        Math.PI;

    const C2 =
        Math.atan(tanCRedondeada) *
        180 /
        Math.PI;

    const A =
        A2 * 2;

    const B =
        B2 * 2;

    const C =
        C2 * 2;

    const A2Texto =
        numero(A2);

    const B2Texto =
        numero(B2);

    const C2Texto =
        numero(C2);

    const ATexto =
        numero(A);

    const BTexto =
        numero(B);

    const CTexto =
        numero(C);

    const dA =
        convertirDMS(A);

    const dB =
        convertirDMS(B);

    const dC =
        convertirDMS(C);

    /*
     * La suma se hace directamente:
     * grados + grados
     * minutos + minutos
     * segundos + segundos
     */
    const sumaGrados =
        dA.grados +
        dB.grados +
        dC.grados;

    const sumaMinutos =
        dA.minutos +
        dB.minutos +
        dC.minutos;

    const sumaSegundos =
        dA.segundos +
        dB.segundos +
        dC.segundos;

    const area =
        Math.sqrt(
            s *
            sa *
            sb *
            sc
        );

    const areaTexto =
        numero(area);

    resultado.innerHTML = `

        <div class="procedimiento">

            <h2>Triángulo</h2>

            <div class="paso">
                S = (${aTexto} + ${bTexto} + ${cTexto}) / 2
            </div>

            <div class="paso">
                S = ${aTexto} + ${bTexto} + ${cTexto} / 2
            </div>

            <div class="paso">
                S = ${sTexto} m
            </div>

            <br>

            <div class="paso">
                (S-a) = ${sTexto} - ${aTexto} = ${saTexto} m
            </div>

            <div class="paso">
                (S-b) = ${sTexto} - ${bTexto} = ${sbTexto} m
            </div>

            <div class="paso">
                (S-c) = ${sTexto} - ${cTexto} = ${scTexto} m
            </div>

            <br>

            <div class="paso">
                Tan 1/2 A =
                √[(${sbTexto})(${scTexto}) /
                (${sTexto})(${saTexto})]
            </div>

            <div class="paso">
                Tan 1/2 A =
                ${tanATexto}
            </div>

            <div class="paso">
                A/2 =
                tan⁻¹(${tanATexto})
                =
                ${A2Texto}°
            </div>

            <div class="paso">
                A =
                2(${A2Texto})
                =
                ${ATexto}°
            </div>

            <div class="paso">
                A =
                ${dA.texto}
            </div>

            <br>

            <div class="paso">
                Tan 1/2 B =
                √[(${saTexto})(${scTexto}) /
                (${sTexto})(${sbTexto})]
            </div>

            <div class="paso">
                Tan 1/2 B =
                ${tanBTexto}
            </div>

            <div class="paso">
                B/2 =
                tan⁻¹(${tanBTexto})
                =
                ${B2Texto}°
            </div>

            <div class="paso">
                B =
                2(${B2Texto})
                =
                ${BTexto}°
            </div>

            <div class="paso">
                B =
                ${dB.texto}
            </div>

            <br>

            <div class="paso">
                Tan 1/2 C =
                √[(${saTexto})(${sbTexto}) /
                (${sTexto})(${scTexto})]
            </div>

            <div class="paso">
                Tan 1/2 C =
                ${tanCTexto}
            </div>

            <div class="paso">
                C/2 =
                tan⁻¹(${tanCTexto})
                =
                ${C2Texto}°
            </div>

            <div class="paso">
                C =
                2(${C2Texto})
                =
                ${CTexto}°
            </div>

            <div class="paso">
                C =
                ${dC.texto}
            </div>

            <br>

            <div class="paso">
                A + B + C =
                ${dA.texto}
                +
                ${dB.texto}
                +
                ${dC.texto}
            </div>

            <div class="paso">
                A + B + C =
                ${sumaGrados}°
                ${sumaMinutos}'
                ${sumaSegundos}"
            </div>

            <br>

            <div class="paso">
                S₁ =
                √[(${sTexto})
                (${saTexto})
                (${sbTexto})
                (${scTexto})]
            </div>

            <div class="paso">
                S₁ =
                ${areaTexto} m²
            </div>

        </div>

    `;

    resultado.style.display = "block";

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            calcular();
        }

    }
);