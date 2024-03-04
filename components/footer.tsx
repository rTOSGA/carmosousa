import Logo from "./logo";

export default function Footer() {
  return (
    <footer className=" bg-green-800 text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-32">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        

        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a href="#!" className="text-white dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={150}
                height={38}
                viewBox="0 0 883.000000 209.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,209.000000) scale(0.100000,-0.100000)"
                  fill="#ffffff"
                  stroke="none"
                >
                  <path
                    d="M5459 2027 c-104 -30 -234 -138 -347 -290 -80 -108 -97 -135 -150
-242 -77 -155 -112 -311 -98 -428 14 -110 77 -163 273 -228 208 -68 292 -119
335 -202 91 -180 -126 -401 -377 -384 -82 5 -119 20 -134 54 -21 46 -70 11
-57 -41 10 -41 77 -101 142 -127 116 -45 288 -23 404 51 66 42 151 136 184
201 l26 53 0 -52 c0 -68 21 -117 73 -170 75 -77 180 -119 254 -100 52 13 129
78 170 144 20 32 45 54 85 76 32 17 83 57 114 90 l57 59 -6 -48 c-27 -212 -19
-253 56 -298 58 -33 110 -42 144 -24 50 27 122 151 210 364 30 72 52 116 49
99 -31 -199 -31 -271 1 -306 25 -28 83 -56 132 -64 34 -5 48 -2 81 20 69 45
190 239 275 439 21 48 41 89 44 92 5 3 66 -150 108 -271 2 -6 -7 -14 -20 -18
-41 -10 -60 -75 -32 -112 8 -10 15 -22 15 -25 0 -3 -22 -18 -50 -33 -47 -26
-71 -30 -134 -24 -72 7 -50 -83 34 -134 68 -42 125 -46 194 -15 70 32 153 114
189 186 l27 55 0 -60 c0 -49 5 -68 29 -106 31 -48 72 -83 112 -93 78 -20 198
105 311 324 28 53 51 97 52 98 1 2 -1 -21 -5 -50 -15 -106 -11 -153 16 -185
32 -38 101 -72 146 -72 19 0 49 9 66 20 69 42 188 238 282 464 48 114 51 136
18 136 -19 0 -31 -17 -71 -98 -112 -226 -209 -341 -231 -272 -3 10 8 103 24
205 36 215 37 208 -53 293 -61 57 -160 109 -216 113 -94 6 -101 3 -170 -69
-36 -38 -85 -104 -109 -148 -25 -43 -52 -88 -61 -99 -9 -11 -36 -55 -60 -98
-24 -42 -56 -92 -71 -109 l-26 -32 -27 52 c-15 29 -42 76 -60 105 -82 129
-143 282 -129 325 3 10 16 39 31 66 l25 49 -32 29 c-24 22 -41 28 -75 28 -37
0 -48 -5 -71 -32 -44 -52 -48 -74 -35 -164 10 -65 10 -95 0 -150 -27 -146
-206 -426 -252 -398 -16 10 -6 107 34 327 l41 228 -29 30 c-63 66 -167 108
-191 77 -6 -7 -47 -125 -91 -263 -91 -277 -164 -440 -197 -440 -18 0 -20 6
-17 75 4 95 46 347 67 396 20 48 20 48 -16 89 -33 37 -121 71 -153 59 -19 -7
-47 -95 -76 -236 -15 -76 -28 -112 -60 -162 -36 -57 -116 -143 -125 -134 -2 2
5 35 16 73 30 106 35 211 15 273 -36 106 -167 212 -263 212 -52 0 -87 -16
-130 -62 -34 -35 -93 -142 -93 -169 0 -8 -12 -26 -26 -40 -28 -25 -103 -173
-105 -205 0 -11 -7 2 -14 28 -19 72 -59 131 -117 178 -65 52 -120 80 -265 136
-143 55 -190 79 -203 103 -5 11 -10 52 -10 91 0 176 145 458 329 641 96 95
158 139 240 170 75 28 101 19 120 -41 18 -56 6 -131 -38 -246 -56 -144 -225
-370 -306 -408 -47 -23 -44 -43 11 -68 87 -38 180 -4 284 102 130 133 212 326
214 505 1 70 -2 86 -26 126 -30 52 -94 97 -173 124 -65 22 -216 29 -276 12z
m2833 -1074 c10 -9 18 -28 18 -42 0 -33 -106 -251 -194 -398 -106 -179 -136
-201 -136 -101 0 67 46 204 119 353 88 180 143 233 193 188z m-2181 -9 c20
-25 24 -170 5 -260 -30 -149 -42 -178 -80 -197 -61 -29 -77 -72 -51 -138 9
-23 -50 -89 -80 -89 -30 0 -43 17 -51 67 -18 118 58 315 134 344 30 12 28 40
-7 73 -25 24 -28 32 -20 58 33 118 110 190 150 142z m1626 -556 c-3 -7 -5 -2
-5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z"
                  />
                  <path
                    d="M654 1991 c-236 -138 -520 -744 -575 -1231 -33 -292 59 -543 230
-627 49 -25 67 -28 146 -27 134 1 194 35 304 174 l39 49 4 -50 c9 -85 92 -179
160 -179 41 0 76 21 129 77 67 71 93 109 160 235 l59 113 -7 -55 c-16 -111
-11 -156 21 -189 41 -42 120 -74 164 -66 48 9 123 88 187 196 50 84 184 381
185 409 1 31 28 62 68 80 23 11 42 16 42 12 0 -4 -9 -54 -20 -112 -36 -190
-70 -444 -70 -522 0 -72 2 -80 30 -112 31 -35 101 -66 149 -66 48 0 128 78
192 187 l26 45 -1 -72 c-1 -72 -1 -73 37 -105 63 -55 185 -75 180 -30 -7 60
62 312 134 495 73 184 173 373 190 357 2 -3 -5 -56 -16 -118 -62 -342 -78
-536 -49 -581 23 -35 103 -72 157 -73 l44 0 3 50 c4 87 62 287 141 490 40 101
133 287 163 325 19 25 20 25 20 3 0 -12 -6 -52 -14 -90 -28 -133 -66 -421 -66
-500 0 -92 14 -120 79 -152 79 -41 137 -35 185 18 22 25 36 19 36 -15 0 -64
87 -165 180 -208 62 -29 124 -33 175 -11 41 16 123 99 150 149 13 24 35 42 69
58 61 28 158 123 204 201 58 96 102 208 91 229 -18 34 -37 18 -97 -84 -57 -98
-130 -188 -153 -188 -6 0 -8 8 -5 18 27 94 39 160 40 227 0 68 -4 88 -26 130
-42 81 -138 159 -221 179 -82 20 -172 -51 -238 -188 -67 -139 -162 -282 -201
-302 -25 -13 -29 -13 -34 1 -10 24 3 121 42 314 44 226 44 240 -3 281 -47 42
-108 69 -153 70 -30 0 -43 -9 -95 -63 -33 -35 -87 -109 -121 -165 l-60 -100 4
56 c3 47 0 62 -17 84 -24 30 -133 88 -165 88 -53 0 -133 -83 -218 -225 -71
-118 -67 -116 -65 -44 l2 63 -50 38 c-51 39 -120 68 -142 61 -8 -3 -13 -22
-13 -47 0 -69 -59 -374 -79 -414 -33 -63 -115 -174 -144 -196 -58 -42 -58 -3
-1 304 19 102 35 200 36 218 1 38 -26 72 -87 107 -66 39 -100 40 -203 7 -51
-17 -92 -27 -90 -24 22 47 88 170 115 215 44 73 40 97 -21 126 -57 28 -140 38
-162 21 -27 -23 -55 -89 -80 -188 -33 -128 -32 -191 2 -231 34 -40 61 -54 101
-53 23 1 33 -3 33 -13 0 -8 -31 -77 -70 -152 -70 -140 -138 -230 -175 -235
-31 -5 -31 52 1 233 15 89 24 169 20 184 -12 46 -103 132 -180 171 -191 94
-267 49 -435 -256 -93 -169 -235 -348 -326 -410 -182 -125 -299 10 -282 327
20 369 237 941 422 1112 144 133 190 -76 74 -337 -36 -80 -65 -121 -95 -132
-30 -12 -30 -21 0 -49 35 -33 85 -38 118 -11 81 63 178 342 178 510 0 102 -26
142 -125 193 -49 25 -75 31 -140 34 -74 4 -84 2 -131 -26z m715 -1057 c25 -31
22 -48 -26 -154 -42 -93 -182 -338 -229 -403 -29 -40 -38 -46 -50 -36 -20 16
-18 61 7 149 57 209 202 470 260 470 10 0 27 -12 38 -26z m2580 -8 c32 -38 20
-229 -23 -378 -15 -50 -23 -60 -61 -83 -56 -32 -68 -72 -41 -135 10 -24 -57
-92 -86 -88 -37 5 -50 43 -45 133 7 125 64 249 126 276 39 17 39 29 0 74 l-31
35 18 51 c35 96 109 156 143 115z"
                  />
                  <path
                    d="M4525 1431 c-55 -25 -108 -87 -135 -157 -61 -158 -24 -446 76 -597
l26 -39 -21 -104 c-34 -165 -26 -223 38 -277 27 -22 42 -27 89 -27 72 0 138
36 209 113 49 55 51 55 89 47 89 -21 200 -8 246 29 l23 19 -60 7 c-33 4 -91
14 -128 22 -57 12 -67 18 -61 31 79 184 83 307 14 366 -35 29 -95 41 -134 26
-34 -13 -29 -33 9 -40 39 -7 52 -51 38 -128 -13 -66 -51 -172 -62 -172 -35 0
-181 154 -181 190 0 10 20 85 45 166 123 402 125 473 11 525 -51 23 -80 23
-131 0z m141 -49 c22 -35 25 -80 10 -153 -18 -88 -117 -399 -126 -399 -4 0
-15 28 -26 63 -55 180 11 507 103 507 16 0 33 -8 39 -18z m-53 -861 c29 -21
67 -46 85 -55 17 -9 32 -19 32 -22 0 -3 -13 -25 -29 -48 -35 -50 -96 -106
-116 -106 -29 0 -45 42 -45 120 0 74 9 150 17 150 2 0 27 -17 56 -39z"
                  />
                </g>
              </svg>
            </h6>
            <p>
              Catálago de flores, plantas e produtos de florista meramente
              ilustrativos.
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Produtos
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                Flores
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                Plantas
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                Ramos
              </a>
            </p>
            <p>
              <a href="#!" className="text-white dark:text-neutral-200">
                Funeral
              </a>
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Links Utéis
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                Preços
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                Comprar
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white dark:text-neutral-200">
                Pedidos
              </a>
            </p>
            <p>
              <a href="#!" className="text-white dark:text-neutral-200">
                Ajuda
              </a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contactos
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Rua Dr. Luís de Almeida N°4<br></br>4705-472 Tadim, Braga
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              hortofloriculturacs@sapo.pt
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              + 351 253 339 363
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-900 p-6 text-center dark:bg-neutral-700">
        <span>©2024 Copyright: </span>
        <a
          className="font-semibold text-white dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          Carmo&Sousa
        </a>
      </div>
    </footer>
  );
}
