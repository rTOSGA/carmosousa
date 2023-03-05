import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-16 w-full justify-center bg-lime-300 shadow-2xl ">
      <div className="flex mx-7 w-full justify-between  items-center px-5 2xl:px-0  text-2xl text-emerald-900 font-semibold tracking-wide">
        <button className="flex lg:hidden hover:bg-lime-200 p-2 rounded-full transition-all duration-300">
          <Bars3Icon className="w-8 h-8 cursor-pointer "></Bars3Icon>
        </button>
        <h1 className="flex w-full lg:w-auto cursor-pointer justify-center transition-all duration-300 ">
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
              fill="#064e3b"
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
        </h1>
        <div className="hidden lg:flex lg:w-full justify-center text-sm space-x-7 transition-all duration-300">
          <span className="hover:underline hover:underline-offset-8 hover:decoration-wavy cursor-pointer transition-all duration-300">
            Flores
          </span>
          <span className="hover:underline hover:underline-offset-8 hover:decoration-wavy cursor-pointer transition-all duration-300">
            Ramos
          </span>
          <span className="hover:underline hover:underline-offset-8 hover:decoration-wavy cursor-pointer transition-all duration-300">
            Plantas
          </span>
        </div>
        <div className="flex justify-center items-center space-x-7">
          <h1 className="hidden lg:flex w-full text-xs cursor-pointer hover:underline hover:underline-offset-2 transition-all duration-300">
            Precisa de ajuda?
          </h1>
          <Link
            href="/"
            className="hover:bg-lime-200 p-2 rounded-full transition-all duration-300"
          >
            <ShoppingCartIcon className="w-8 h-8 cursor-pointer "></ShoppingCartIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
