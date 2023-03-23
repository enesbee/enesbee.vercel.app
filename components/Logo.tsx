import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Logo = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="w-60">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 993 196"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <>
            <g
              fill="#ffffff"
              stroke="none"
              transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
            >
              <path
                d="M5975 1708 c-60 -16 -116 -36 -124 -44 -12 -11 -13 -22 -3 -64 16
          -68 16 -67 -15 -75 -50 -12 -211 -115 -248 -157 l-35 -42 -22 20 c-39 34 -75
          54 -130 68 -29 8 -69 20 -88 25 -21 7 -155 11 -346 11 -324 0 -329 0 -462 -47
          -64 -22 -121 -71 -156 -133 l-31 -55 -3 -386 c-3 -375 -2 -388 19 -444 25 -66
          81 -128 142 -156 39 -17 72 -19 492 -19 509 0 495 -1 574 80 61 63 81 128 82
          263 l0 112 48 -170 c26 -93 55 -185 64 -203 28 -52 89 -107 152 -137 100 -47
          130 -42 624 90 406 109 479 133 524 173 20 18 19 20 42 -42 21 -58 80 -120
          138 -147 39 -17 72 -19 492 -19 420 0 453 2 492 19 59 27 119 93 143 157 19
          52 20 77 20 422 0 219 -4 382 -10 404 -25 90 -110 175 -200 199 -25 6 -64 18
          -88 25 -32 11 -118 14 -356 14 -326 0 -331 0 -464 -47 -109 -38 -180 -133
          -191 -255 l-6 -72 -39 150 c-77 292 -81 301 -149 368 -78 76 -124 94 -270 100
          -99 4 -117 2 -232 -30 -140 -38 -165 -41 -165 -19 0 8 -7 33 -16 55 -15 37
          -19 40 -53 39 -20 -1 -85 -14 -146 -31z m190 -131 c17 -65 35 -117 40 -116 6
          1 15 3 20 5 186 56 196 49 259 -187 57 -212 59 -231 29 -268 -18 -22 -156 -65
          -168 -53 -3 4 -9 2 -13 -4 -6 -9 -243 -77 -247 -71 -9 11 -43 162 -39 169 3 4
          12 8 20 8 10 0 13 6 10 18 -3 9 -26 94 -51 187 -25 94 -48 178 -51 187 -3 11
          -14 17 -26 15 -18 -2 -24 7 -39 53 -9 30 -19 69 -23 86 l-7 31 113 30 c62 17
          119 30 127 30 10 -1 25 -42 46 -120z m425 63 c73 -37 82 -58 185 -441 52 -196
          95 -368 95 -383 0 -58 -47 -133 -100 -161 -48 -25 -665 -185 -714 -185 -65 0
          -119 30 -150 82 -29 50 -206 705 -206 761 0 71 48 142 113 166 46 18 62 13 74
          -20 7 -17 21 -33 31 -36 16 -4 27 -30 52 -116 64 -226 61 -209 42 -230 -15
          -17 -15 -24 7 -110 30 -117 36 -127 69 -127 15 0 117 24 227 54 283 77 292 88
          230 322 -56 215 -73 260 -106 289 -42 35 -69 39 -144 24 -36 -7 -67 -11 -69
          -8 -2 2 -7 18 -10 35 l-7 31 133 35 c156 42 195 45 248 18z m162 -13 c55 -22
          112 -81 138 -141 10 -22 64 -215 120 -427 101 -382 102 -386 90 -442 -6 -31
          -15 -57 -19 -57 -5 0 -46 38 -92 86 l-84 85 -1 62 c-1 44 -27 160 -93 405 -50
          188 -96 355 -102 370 -6 15 -24 42 -42 60 l-31 32 34 -6 c19 -4 56 -16 82 -27z
          m-1422 -233 c19 -11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23
          -390 -12 -19 -38 -43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21
          -19 11 -45 35 -57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47
          412 44 297 -2 317 -3 350 -23z m2740 0 c19 -11 45 -35 57 -54 23 -33 23 -36
          23 -390 0 -354 0 -357 -23 -390 -12 -19 -38 -43 -57 -54 -33 -20 -50 -21 -365
          -21 -315 0 -332 1 -365 21 -19 11 -45 35 -57 54 -23 33 -23 36 -23 387 0 375
          1 384 48 426 48 43 81 47 412 44 297 -2 317 -3 350 -23z m-2407 -61 c-4 -51 7
          -102 86 -398 101 -376 104 -385 140 -428 l25 -30 -28 -113 c-16 -62 -33 -118
          -38 -126 -12 -18 -80 58 -101 114 -9 24 -41 140 -72 258 -30 118 -65 249 -77
          290 -65 230 -69 270 -37 355 18 48 83 135 102 135 3 0 3 -26 0 -57z m-1160 11
          c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391 16 -30 15 -31 -40 -127 -30
          -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43 -23 47 -23 428 0 425 -1 418
          65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z m1005 -26 c22 -24 22 -26 7
          -84 -21 -82 -20 -92 27 -259 l43 -150 0 -200 c0 -189 -1 -202 -23 -243 -12
          -23 -26 -42 -30 -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16
          391 0 327 -2 363 -17 388 -10 14 -18 29 -18 32 0 11 75 -33 98 -57z m1735 26
          c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391 16 -30 15 -31 -40 -127 -30
          -53 -59 -97 -63 -97 -4 0 -17 19 -29 41 -24 48 -22 85 10 169 29 78 27 152
          -10 289 -29 107 -31 125 -27 236 5 132 16 169 68 229 29 33 100 79 108 71 2
          -2 -5 -16 -15 -31z m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428
          -12 -23 -26 -42 -30 -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16
          82 16 391 0 327 -2 363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z
          m-1313 -672 c37 -38 79 -81 92 -96 l25 -26 -43 -44 c-24 -24 -60 -51 -80 -60
          -31 -13 -801 -222 -888 -241 -37 -7 -132 10 -156 28 -14 11 -12 24 17 132 28
          105 34 120 51 117 107 -18 124 -15 460 76 182 49 348 97 369 107 21 10 47 31
          59 47 11 15 22 28 24 28 1 0 33 -31 70 -68z m-2360 -154 c37 -23 43 -23 378
          -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61 -100 -13
          -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57 100 c31 55
          60 100 64 100 4 0 24 -10 45 -22z m2740 0 c37 -23 43 -23 378 -23 l340 0 42
          24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61 -100 -13 -139 -45 -24
          -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57 100 c31 55 60 100 64 100
          4 0 24 -10 45 -22z"
              />
              <path
                d="M6250 1273 c0 -10 7 -44 16 -74 22 -77 24 -83 30 -77 6 6 -31 156
          -40 166 -3 3 -6 -4 -6 -15z"
              />
              <path
                d="M4816 1340 c-37 -12 -66 -38 -82 -77 -17 -38 -19 -415 -3 -444 9 -18
          24 -19 197 -19 286 0 289 3 276 332 -6 157 -10 184 -26 200 -16 16 -35 18
          -175 17 -87 0 -171 -5 -187 -9z m344 -115 l0 -85 -52 -1 -53 -1 58 -15 57 -15
          0 -100 c0 -165 -3 -167 -232 -168 l-178 0 0 85 0 85 58 1 57 1 -57 15 -58 15
          0 105 c0 102 1 105 29 134 l29 29 171 0 171 0 0 -85z"
              />
              <path d="M4958 1163 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path d="M4958 983 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path
                d="M7546 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
          33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
          238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
          -131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
          -40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
          177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M7680 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
          -15 -7 -15 -15z"
              />
              <path
                d="M495 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
          -2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
          492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
          -110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
          -11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
          -43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
          -57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
          317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
          16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
          -23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
          m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
          -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
          363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
          -23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
          -100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
          100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M706 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
          33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
          238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
          -131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
          -40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
          177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M840 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
          -15 -7 -15 -15z"
              />
              <path
                d="M1855 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
          -2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
          492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
          -110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
          -11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
          -43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
          -57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
          317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
          16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
          -23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
          m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
          -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
          363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
          -23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
          -100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
          100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M1959 1329 c-19 -19 -21 -30 -17 -106 2 -70 6 -87 23 -99 18 -13 20
          -29 23 -162 3 -95 8 -150 16 -154 20 -13 471 -9 484 4 8 8 12 46 12 105 0 82
          -2 94 -20 105 -18 12 -20 24 -20 119 0 94 -3 110 -22 139 -43 62 -68 68 -274
          69 -174 1 -185 0 -205 -20z m413 -35 c15 -8 32 -23 38 -33 5 -11 10 -76 10
          -145 l0 -126 25 0 c24 0 25 -2 25 -75 l0 -75 -120 0 -120 0 -2 158 -2 157 -3
          -157 -4 -158 -99 0 -100 0 0 155 c0 148 -1 155 -20 155 -18 0 -20 7 -20 80 l0
          80 182 -1 c137 0 189 -4 210 -15z"
              />
              <path
                d="M3225 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
          -2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
          492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
          -110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
          -11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
          -43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
          -57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
          317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
          16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
          -23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
          m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
          -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
          363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
          -23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
          -100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
          100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M3446 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
          33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
          238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
          -131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
          -40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
          177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M3580 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
          -15 -7 -15 -15z"
              />
              <path
                d="M8695 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
          -2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
          492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
          -110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
          -11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
          -43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
          -57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
          317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
          16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
          -23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
          m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
          -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
          363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
          -23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
          -100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
          100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M8916 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
          33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
          238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
          -131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
          -40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
          177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M9050 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
          -15 -7 -15 -15z"
              />
            </g>
          </>
        ) : (
          <>
            <g
              transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M5975 1708 c-60 -16 -116 -36 -124 -44 -12 -11 -13 -22 -3 -64 16
-68 16 -67 -15 -75 -50 -12 -211 -115 -248 -157 l-35 -42 -22 20 c-39 34 -75
54 -130 68 -29 8 -69 20 -88 25 -21 7 -155 11 -346 11 -324 0 -329 0 -462 -47
-64 -22 -121 -71 -156 -133 l-31 -55 -3 -386 c-3 -375 -2 -388 19 -444 25 -66
81 -128 142 -156 39 -17 72 -19 492 -19 509 0 495 -1 574 80 61 63 81 128 82
263 l0 112 48 -170 c26 -93 55 -185 64 -203 28 -52 89 -107 152 -137 100 -47
130 -42 624 90 406 109 479 133 524 173 20 18 19 20 42 -42 21 -58 80 -120
138 -147 39 -17 72 -19 492 -19 420 0 453 2 492 19 59 27 119 93 143 157 19
52 20 77 20 422 0 219 -4 382 -10 404 -25 90 -110 175 -200 199 -25 6 -64 18
-88 25 -32 11 -118 14 -356 14 -326 0 -331 0 -464 -47 -109 -38 -180 -133
-191 -255 l-6 -72 -39 150 c-77 292 -81 301 -149 368 -78 76 -124 94 -270 100
-99 4 -117 2 -232 -30 -140 -38 -165 -41 -165 -19 0 8 -7 33 -16 55 -15 37
-19 40 -53 39 -20 -1 -85 -14 -146 -31z m190 -131 c17 -65 35 -117 40 -116 6
1 15 3 20 5 186 56 196 49 259 -187 57 -212 59 -231 29 -268 -18 -22 -156 -65
-168 -53 -3 4 -9 2 -13 -4 -6 -9 -243 -77 -247 -71 -9 11 -43 162 -39 169 3 4
12 8 20 8 10 0 13 6 10 18 -3 9 -26 94 -51 187 -25 94 -48 178 -51 187 -3 11
-14 17 -26 15 -18 -2 -24 7 -39 53 -9 30 -19 69 -23 86 l-7 31 113 30 c62 17
119 30 127 30 10 -1 25 -42 46 -120z m425 63 c73 -37 82 -58 185 -441 52 -196
95 -368 95 -383 0 -58 -47 -133 -100 -161 -48 -25 -665 -185 -714 -185 -65 0
-119 30 -150 82 -29 50 -206 705 -206 761 0 71 48 142 113 166 46 18 62 13 74
-20 7 -17 21 -33 31 -36 16 -4 27 -30 52 -116 64 -226 61 -209 42 -230 -15
-17 -15 -24 7 -110 30 -117 36 -127 69 -127 15 0 117 24 227 54 283 77 292 88
230 322 -56 215 -73 260 -106 289 -42 35 -69 39 -144 24 -36 -7 -67 -11 -69
-8 -2 2 -7 18 -10 35 l-7 31 133 35 c156 42 195 45 248 18z m162 -13 c55 -22
112 -81 138 -141 10 -22 64 -215 120 -427 101 -382 102 -386 90 -442 -6 -31
-15 -57 -19 -57 -5 0 -46 38 -92 86 l-84 85 -1 62 c-1 44 -27 160 -93 405 -50
188 -96 355 -102 370 -6 15 -24 42 -42 60 l-31 32 34 -6 c19 -4 56 -16 82 -27z
m-1422 -233 c19 -11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23
-390 -12 -19 -38 -43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21
-19 11 -45 35 -57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47
412 44 297 -2 317 -3 350 -23z m2740 0 c19 -11 45 -35 57 -54 23 -33 23 -36
23 -390 0 -354 0 -357 -23 -390 -12 -19 -38 -43 -57 -54 -33 -20 -50 -21 -365
-21 -315 0 -332 1 -365 21 -19 11 -45 35 -57 54 -23 33 -23 36 -23 387 0 375
1 384 48 426 48 43 81 47 412 44 297 -2 317 -3 350 -23z m-2407 -61 c-4 -51 7
-102 86 -398 101 -376 104 -385 140 -428 l25 -30 -28 -113 c-16 -62 -33 -118
-38 -126 -12 -18 -80 58 -101 114 -9 24 -41 140 -72 258 -30 118 -65 249 -77
290 -65 230 -69 270 -37 355 18 48 83 135 102 135 3 0 3 -26 0 -57z m-1160 11
c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391 16 -30 15 -31 -40 -127 -30
-53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43 -23 47 -23 428 0 425 -1 418
65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z m1005 -26 c22 -24 22 -26 7
-84 -21 -82 -20 -92 27 -259 l43 -150 0 -200 c0 -189 -1 -202 -23 -243 -12
-23 -26 -42 -30 -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16
391 0 327 -2 363 -17 388 -10 14 -18 29 -18 32 0 11 75 -33 98 -57z m1735 26
c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391 16 -30 15 -31 -40 -127 -30
-53 -59 -97 -63 -97 -4 0 -17 19 -29 41 -24 48 -22 85 10 169 29 78 27 152
-10 289 -29 107 -31 125 -27 236 5 132 16 169 68 229 29 33 100 79 108 71 2
-2 -5 -16 -15 -31z m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428
-12 -23 -26 -42 -30 -42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16
82 16 391 0 327 -2 363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z
m-1313 -672 c37 -38 79 -81 92 -96 l25 -26 -43 -44 c-24 -24 -60 -51 -80 -60
-31 -13 -801 -222 -888 -241 -37 -7 -132 10 -156 28 -14 11 -12 24 17 132 28
105 34 120 51 117 107 -18 124 -15 460 76 182 49 348 97 369 107 21 10 47 31
59 47 11 15 22 28 24 28 1 0 33 -31 70 -68z m-2360 -154 c37 -23 43 -23 378
-23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61 -100 -13
-139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57 100 c31 55
60 100 64 100 4 0 24 -10 45 -22z m2740 0 c37 -23 43 -23 378 -23 l340 0 42
24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61 -100 -13 -139 -45 -24
-46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57 100 c31 55 60 100 64 100
4 0 24 -10 45 -22z"
              />
              <path
                d="M6250 1273 c0 -10 7 -44 16 -74 22 -77 24 -83 30 -77 6 6 -31 156
-40 166 -3 3 -6 -4 -6 -15z"
              />
              <path
                d="M4816 1340 c-37 -12 -66 -38 -82 -77 -17 -38 -19 -415 -3 -444 9 -18
24 -19 197 -19 286 0 289 3 276 332 -6 157 -10 184 -26 200 -16 16 -35 18
-175 17 -87 0 -171 -5 -187 -9z m344 -115 l0 -85 -52 -1 -53 -1 58 -15 57 -15
0 -100 c0 -165 -3 -167 -232 -168 l-178 0 0 85 0 85 58 1 57 1 -57 15 -58 15
0 105 c0 102 1 105 29 134 l29 29 171 0 171 0 0 -85z"
              />
              <path d="M4958 1163 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path d="M4958 983 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path
                d="M7546 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
-131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
-40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M7680 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"
              />
              <path
                d="M495 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
-2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
-110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
-11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
-43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
-57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
-23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
-42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
-23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
-100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M706 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
-131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
-40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M840 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"
              />
              <path
                d="M1855 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
-2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
-110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
-11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
-43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
-57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
-23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
-42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
-23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
-100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M1959 1329 c-19 -19 -21 -30 -17 -106 2 -70 6 -87 23 -99 18 -13 20
-29 23 -162 3 -95 8 -150 16 -154 20 -13 471 -9 484 4 8 8 12 46 12 105 0 82
-2 94 -20 105 -18 12 -20 24 -20 119 0 94 -3 110 -22 139 -43 62 -68 68 -274
69 -174 1 -185 0 -205 -20z m413 -35 c15 -8 32 -23 38 -33 5 -11 10 -76 10
-145 l0 -126 25 0 c24 0 25 -2 25 -75 l0 -75 -120 0 -120 0 -2 158 -2 157 -3
-157 -4 -158 -99 0 -100 0 0 155 c0 148 -1 155 -20 155 -18 0 -20 7 -20 80 l0
80 182 -1 c137 0 189 -4 210 -15z"
              />
              <path
                d="M3225 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
-2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
-110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
-11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
-43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
-57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
-23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
-42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
-23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
-100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M3446 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
-131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
-40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M3580 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"
              />
              <path
                d="M8695 1433 c-153 -46 -201 -78 -249 -163 l-31 -55 -3 -386 c-3 -375
-2 -388 19 -444 25 -66 81 -128 142 -156 39 -17 72 -19 492 -19 420 0 453 2
492 19 59 27 119 93 143 157 19 52 20 77 20 422 0 219 -4 382 -10 404 -25 90
-110 175 -200 199 -25 6 -64 18 -88 25 -65 21 -657 19 -727 -3z m735 -39 c19
-11 45 -35 57 -54 23 -33 23 -36 23 -390 0 -354 0 -357 -23 -390 -12 -19 -38
-43 -57 -54 -33 -20 -50 -21 -365 -21 -315 0 -332 1 -365 21 -19 11 -45 35
-57 54 -23 33 -23 36 -23 387 0 375 1 384 48 426 48 43 81 47 412 44 297 -2
317 -3 350 -23z m-827 -50 c-17 -26 -18 -56 -18 -389 0 -309 2 -364 16 -391
16 -30 15 -31 -40 -127 -30 -53 -59 -97 -63 -97 -4 0 -18 19 -30 42 -23 43
-23 47 -23 428 0 425 -1 418 65 494 29 33 100 79 108 71 2 -2 -5 -16 -15 -31z
m1017 -40 c66 -76 65 -69 65 -494 0 -381 0 -385 -23 -428 -12 -23 -26 -42 -30
-42 -4 0 -33 44 -63 97 -55 96 -56 97 -40 127 14 27 16 82 16 391 0 327 -2
363 -17 388 -10 14 -18 29 -18 32 0 14 81 -38 110 -71z m-933 -826 c37 -23 43
-23 378 -23 l340 0 42 24 c24 14 44 23 47 20 2 -2 28 -48 59 -101 61 -106 61
-100 -13 -139 -45 -24 -46 -24 -450 -27 -430 -3 -465 0 -532 43 l-37 25 57
100 c31 55 60 100 64 100 4 0 24 -10 45 -22z"
              />
              <path
                d="M8916 1340 c-80 -25 -96 -69 -96 -265 0 -169 7 -201 54 -245 27 -24
33 -25 184 -28 151 -3 158 -2 192 20 53 36 61 73 58 267 -3 184 -10 205 -72
238 -36 19 -271 29 -320 13z m299 -44 c18 -8 38 -23 44 -34 6 -12 11 -70 11
-131 l0 -111 -105 0 c-87 0 -105 -3 -105 -15 0 -12 18 -15 105 -15 l105 0 0
-40 c0 -46 -21 -95 -45 -104 -9 -3 -82 -6 -162 -6 l-145 0 -29 29 -29 29 0
177 0 177 29 29 29 29 132 0 c90 0 141 -4 165 -14z"
              />
              <path
                d="M9050 1145 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
-15 -7 -15 -15z"
              />
            </g>
          </>
        )}
      </svg>
    </div>
  )
}

export default Logo

{
  /* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="993.000000pt" height="196.000000pt" viewBox="0 0 993.000000 196.000000"
 preserveAspectRatio="xMidYMid meet"> */
}