"use client";

import { useState } from "react";

const VIDEO_URL =
  "https://www.dropbox.com/scl/fi/hnfqm7sjxeievrcsb0u6d/HEADER-VIDEO.mp4?rlkey=a4nu6vdjbjl81sh3m075o9m6v&raw=1";


const ICON_1 = "data:image/png;base64,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";
const ICON_2 = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAEDAQ0DASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAgJBgcCBAUDAf/EAD0QAAEDBAAFAgMFBgILAAAAAAABAgMEBQYRBwgSIUExURMiYTJxgZHBFCNCUqGxcqQJFRYkM1OCkpTR4f/EABwBAQABBQEBAAAAAAAAAAAAAAAFAgMEBwgBBv/EADYRAAICAQIDBgUDAwMFAAAAAAABAgMEBREhMUEGBxJRYXEygZGx0ROhwRQiIyQzQlJyc7Lh/9oADAMBAAIRAxEAPwCGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsThTwiyrP6xzKCjkp6Zjka6olYqMRfXSr9xi5mbRhVO7ImoxXVlUYuT2RrsE7MG5XsJtCJPelmucr2J1xPXTGr9DZFr4T8Orc3UGJWt+vMsCP8A7mvMzvS0umTjTCU/Xgl+5lxwpvm9issFn1Tw2wGojcyTELLpyaVW0jEX+iGC5by3cN73QrDS2+S2T9XU2WB3p+HsWsbvV06yW11Uorz4MSwZrkyvsG9OLXLhlWJLLX2hEultRyqjmfajaierjRssb4pHRyMVj2rpzVTSopsHTdWw9Tq/VxbFJenT3XQxZ1yg9pI4gAkSgAAAAAAA+tNTz1Mnw6eF8r9b6WN2pvvhTyzZHlEVJcr5Otpt8mnSMcz96qeOlCM1PWMLS6v1cuxRX7v2RXCuU3tFEfztRW+vljSSOhqXsd3RzYnKi/josIxbl+4bWShhgksrLhLGneWo7q770M+pcUxmlp209PYbdHExNNYlO3Sf0NdZfevhwltj0yl6tpfky44MnzZVrU0tTTKiVNPNCrvRJGK3f5nxLP8AI+HWFZBEyO6Y5b5uj7KpCjVT8UNUcR+V7Eb3SyzY499orGxr8Jid43O+pk6f3padfJRyISr3681+f2PJ4U1ye5BcGe8SuE+Y4JXLDdbbJJTuf0RVETepknbfYwJey6U2Ni5lGXWraJqUX1XEw5RcXswADJPAAAAAAAAAAAAAAbC4C4FPn+d0ttjk6IYXtlqNfaSNF7qm+xjZmXVh0TyLntGK3ZVGLk9kZ9yycC6nM6tmRZDG+nssLkWNip3nX/0TdstqoLNborfbaaOnp4k01jE1+fuLJbKOzWqnttBC2KngYjWNamvxO6cwdpe0uTruS7LHtBfDHol+SappjVHZcwAD5ovAAAHGRjJGKx7WvavZUcm0UjZzJ8Ardd4qvK8XovhV6t6qmnhTs7X8bW+m/f6ElT8ciOarXIioqaVF8kto+s5WkZKyMaWz6ro15Mt2VxsWzKm6uB9LVS08muuNytdr02h8iRfOXw1jxq/R5Na4Y2UNe9fiI1PmSTz2TsiEdDqPRdVq1bChlVcpL6PqiEsg65OLAAJQoB2rVQVd0r4aGhgfNUTORrGNTaqp1SXXJfwsiSB2b3eNJmv0lGxUTp2nqvvtCD7Q63VouDLKs4vkl5voi7VW7JeFGYcuPAe34nb6e+5DA2ou0iI9I3ptI/Y3+iIiIiIiInZEQ/Qcwarq2VquQ8jJlu39F6Imq64wWyAAI0rAAAOhfbRbr5bJrdc6VlRTytVrmuT+y+FIO8zHBOpwy6OvNljdNaqhyrpE+wvlCeJ5OXWGgybHayyXKFstPVRqxyL4Xwp9P2X7S5Gh5SnF71v4l6efuWL6VbH1KqwZRxTxOrwrOblj9W1P3Eq/Dc1F05i+ipsxc6gx74ZFUba3vGSTXsyFaaezAALx4AAAAAAAAACa/IhjEdJgtZk8tLH8avndHDNr5uhiq1U+7aEKCwrk3jRnLxjrv55Kt3+ZlT9DXfedkzp0Twxfxzin7bN/wZeEt7DcAAOdiXAAAAAAAAAMH454vDlnDK8W2RyRyNp3SxSdO1a5qb/qVoTxuhmfE/7THK1fvQtknibNC+F6ba9qtVPopVjnMTYM0vcDfsx3Cdqfckim6+6bMnKvIxnyW0l890/sRufHimeMADcRHnpYxbqm75DQW2kb1T1FQyNib13VULQcOtEdixmgtccUcawQta9GJpFfr5l/FSvLlroI7jxpx6mkajm/H69Knlqb/QskNH97GZJ5FGKuSTl9Xt/BJYMeDkAAaiJAAAAAAAAAAijz64tTrR2vLGdST9X7PJpO2vGyIZYNziWltz4JXF/W1j6WWOZFVN+i90K+To3u1zJZGiqEnu4ScflzX3IfMjtZ7gAGwDFAAAAAAAAABYTybSdfLzj7f5JKtv8AmZF/Ur2Jk8h2VU8mN12JzVTVqIpXTwQ77o1e7l/M173m4s8jRPFBfBJSfts1/Jl4UkrCUIAOdCXAAAAAAAAAPhX1DKSinqpOzIY3Pd9yJsqyzKobWZdeKtq7bNXTSJ9yvVSxbj7lMeKcMbtXaZJPJC6KKJztK7qTS/khWtNIssz5FREV7ldpPqbt7p8OUasjJa4SaS+W7f3I3PlxUTgADcBHmwuXOvbbuMmPVLndKftPRv8AxJosoKpMeuVRaL5RXOlk+HNTTNka7XppSz3h/f6bJsOtt6pqmOoSogar3s9OvXzJ+ZpHvYwpq6jKS4NOPzT3X3JLBlwcT3gAagJAAAAAAAAAA0tzk3xlp4NVlP0I+SulZC1FXXbfdSv4lNz65S6pu1pxinlRYKdrppulUVFevoi/cRZOke7nAeJokJSXGxuXy5L9kQ+XLxWewAB94YoAAAAAAAAAMv4S5lV4PmVHeqaaRjI3p8VjV7PT2d9DEAWMnHryapU2reMlsz1Np7otNwPJ7dl+M0l8tkrHxTsRXI1d9LvKHuldXLxxWvPDzKYIGyOqLPVyIyppnP01N/xJv0VCwawXahvlpp7pbZ2zU07Ecxyf2OZ+1vZa7QcrZcapfC/4fqv3Jmi9Wx9TvgA+RMgAAAHyqqiClp5KiplZFDG1XPe5dI1E8n0VURFVV0iEPubHjU+qrqnDbDO1aeB3TUPY7aPcnuqeE8J7k52f0HI1vLWPTy5t+SLVtqrjuzD+bXil/tlkq2S3Iq2qiX91Iq/bXy5NeF+poc5yyPlldLK9Xvcu3OVe6qcDqDSdMp0vEhi0rhFfV9X8yFsm5ycmAASJQCU/JfxWit86YJe6xzYZnK6idIvysd/Kn3/Uiwdm3VtTb6yOrpJXRSsXaORSG17RqdZwp4tvXk/J9GXKrHXLxIthRUVNp3QGheVLi6mbWhbBdpFS6UUadLnfxsT6m+jlzVdLv0vKli3raUf3XRom65qcfEgACOKwAAAYrxQzS24PitVdq6RFlbG74EKKiOkfrsibO5nmU23Dsbqb3dJWtihb8rVXSvd4RCvnjXxRu/EK/TTTTOZRNXUUbVVE6fCa9j7Tsf2Tu1y/xzW1UXxfn6Ixsi9VLbqYrnWS1uW5PWX2v/41S9XKeGAdK1VQpgq4LZJbJehDt7vdgAFw8AAAAAAAAAAAABLjkg4jNklmwavlcj1Ys1M56q5Xu8oi+O3giOZhwbyKfF+I9nusE7YUbUNZI5U7dKrpT57tRpMNV0y2hrjtvH3XIu0WeCaZZ0DhA9JYY5Gqio9qORU87Q5nKjWxOgAHgMB495lDhPDW5XVZ/hVL41hpvl3t6lbVdUy1tbNVzu6pZnq9669VVSWXP1kFSyGzY9DI39nfuaVOyr1eifcRGOh+7TS44ulf1LX91j3+S4IiMyfis28gADYxiAAAAAAGW8JcrqsPze33ancqtjmarmLJ0sXv6u+hZdj90pr1ZaS6UcrJYamJHtcxdou07/1KpCffJjkNZe+EUVNWdK/6umWnjVE0qs9UNSd6ekRnjV58ecX4X7Pl9H9zPwbNpOBu8AGjSTAXsm1Bj/Ea6tsmCXq7OlSFKaje/rVdaXXYu01SusjXHm2l9TxvZbkL+b3ic7Lcukxy3zPW2WyVWba5UbI/yqp50vk0Kdq71ktwulTXTu65J5XPcutb2p1TrXR9Mq0zCrxalsor6vq/myBsm5ycmAASZQAAAAAAAAAAAAAAAD7US6rYF9pG/wBz4ntYNapL3l9rtcbJHOqKljdMTa633LV0411ynLkk2epbss4wqR0uI2qR29upI97/AMKHsHXttOykt9PSxppkUTWIn3Jo7Bx5dJTslJdWz6BcgAC0ekDed/4icYER7l6f2RqtTfZO5oclJz92P4V+st9jplRs0SwySpvuqLtE/Ii2dS9i743aHjuPSO3zXAhMlbWsAA+oLAAAAAAAJcf6P2af4GRQ9TlhR7Ha32RdERycfInaG0fDWtuL6X4UtZV7SRUXb2omj4XvGujXoVil/wAnFL67/wAGTiLe1EhwAc2EyDWXNCsqcD8j+HvvT6d92zZpjPFK0MvvD292p8Hx/j0j2tZ7rrsSGk3Roz6bZcoyi/o0UWLeLRV2Ds3OkmoLjUUdRGsUsMiscxfVFRTrHXkZKSTRAAAHoAAAAAAAAAAAAAAABJ7kcwKStv02Z1kLmwUidFM5dKjnL6mleFGAXXOsjprdRwSLE96dbkT+Hyqr4T6li+AYvbsOxSisFshZHDTxoiq1NdTvKr7msu8XtLDDw3gUv/JZz9I9fryM3EpcpeJ8ke+ADn8lQAADWPMvh65jwwraaJsr56X9/FHGnzPVPBXTWU8tJVS007emWJytem96VC2N7UexWOTbXJpUIW803BOez3KfJrBSq6iqHq+RGJ2jX2VPH0Xz6G3O7TtJXjOWnZEtlJ7xfr1RgZlLl/eiNAP17XMcrHtVrkXSoqd0Pw3iRgAAAAPtR009ZUspqeNXyPXTUQ8bSW7B6GJWWqyDIKS1UkL5pJpEToYunKm++vqWZ8OcfixbCrXYoXOc2lga1VcmlVfVdmhOUngxPZY48vyagSCu2q0kT127Xh/0/Uk4c/d43aOvUcmOJjy3hXzfRy/+Erh0uEfE+bAANaGaD8VNppT9ABAPm24dPxHPai70rHJb7nIssaevSvna+O/g0iWd8WcJoc6xKptNSxnx0arqaRybRj9dtp5T6FcWc4rdsRv1RabtTvikierUcqaRyHRvYHtNHVMJY1r/AMta2910f5IfKp8Et1yZ4IANgGKAAAAAAAAAAAAD1sQsNbk2Q0lkt6I6pqXo1iKeSS05D8KgkbX5pUtVz2OWnp0cxFb9VRfcgu0msR0fTrMp81wXq3yLtNf6k1E31wV4b2nhziVPbaOP4lY9iOqqh6fM5y+qfRPohngByxl5d2ZdK+6W8pPdsm4xUVsgADGKgAAAfKrp4KunfT1MLJonppzHt2i/gfUHqbT3QI7cZeWm0ZH11+KPjtlUrut0Kt+Ryr9pd+u1IrZtwpznE6hWXKw1fwVcqMljjVzVRF+noWZHCaKKZvTNEyRvs5qKh99ofeJqWmwVVu1sF58/r+dzEsxIT4rgVO1FPPTyuhnhfHI31a5ulQ50lFV1bnNpaaWZzU2qMYq6QtCr8KxOundPV49bpZXerlgbtT62rEsZtb1fQWKgp3KmlVsDdn1z72qfBwxn4v8AuW32LH9A9+ZXzw84LZ1mM8a01pnpaRzul1ROxWtb9e/glrwZ5esYwlI7jc2Nud36W7e/vHGqevSn1N1RxxxN6Y2NY32amkOR8Xr3b7U9Wi6ov9OD6R5v3ZkVYsK+PNn41Ea1GtRERE0iJ4P0A+GMoAAAAAAGq+YDhTbs/wAelmihjZdYGK6N69utE8KvubUBmYGffgZEciiW0olM4qa2ZVHfrbPaLvU2+ojkjfC9W6kb0qqJ50dEkrzvYHDaMjgyuhgZDBX/ACzL1d3yfRCNR1VoWqw1bAry4f8AJcfR9UQdsHXJxAAJctgAAAAAAAAAsI5NIWx8vdhejURZZapyqiev+8SJ+hXuWG8nSovLtjSJ4dV7/wDKlNad6ra0ev8A8i/9ZmZg/wC4/Y26ADn0lgAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ3PDbmVPBp1cqJ10lZF0/wDUuiBxYBzqPa3gNcWu9XVdOjf+8r/Oh+6+UpaK0+k5fZETm/7gABsYwwAAAAAAAAATv5Hb5DXcHY7M1NS2yplR3f1R73PT+5BA3FypcQ24NxCjhr5mx2u46hnc96o2NfDj4/tzpE9U0edda3lFqSXntv8Aw2ZGNYoWJssIBwhljmhZNE9HxvajmuT0VF9FOZzG1sTQAB4AAAAAAADyMpySyYxbX3C+XGCiga1XbkdpXa8Ink0BmfNlj1vq2R49a33SByLuV7uhWr9xM6X2f1HVX/pKnJefJfV8C3O2EPiZJYEFbnzWcQp6l76OGgpYlcvSz4fVpPxO3jvNjmlNcI3Xiioqyl/ja1vS78NH1Eu7PXFDxbRb8vFx/BY/ratyb4I+YBzSYjekRmQwLZ5pJUjjRF607+XL4Q3xarlQXWjZWW2rhqqd/wBmSJ3U1T5LUtFztLn4cupx+3yfIvwsjP4WdsAEWXAAAAAAAAfKqnipaaWpmcjY4mK96+yIm1PUm3sjwjjz4X2ngwahsLZ2ftFRUJK6Pq+bpT0XRCg2hzMZu7N+JdVWQ1DZaCnRIaVETXS1Pf6mrzqLsZpUtL0iqmfxP+5+76fIhcifjsbAAPqiwAAAAAAAAADnDI+GVksbul7FRzV9lOAD4gmJyr8daaqpYcQyidIZ2dqad7uzk9lVSUjHNexHscjmqm0VF2ilTdPNLTzsnhkdHIxeprmrpUUkdwP5la/HadLRljFrLexU+DIxP3jE9OlP79zTfbHu+nbZLM01cXxcf5X4JDHy9l4Zk2AYnhnETEcsgV9ovVLJIxqOliWREdHvwuzK2qjkRWqiovoqGnL8e3Hm4WxcWujWxIpp8UfoB5WQZHY7BQy1t3udNSQxJt6vem0/D1KK652SUYLdvyDex6prnjRxWsnDu0yOnkZPcnM3HTovp7Kpqji7zS2mgjnteGQvq6lHKxaxezETX2m+/ciTk+SXvJbhNXXq4TVc0siyKsjt6Vfb2Nm9l+7vJzJq/UI+Cv8A6er/AAv3MK/LjHhDme1xK4i5Lnd6qa6710roZVRGU6L8jGp6IiGHAG9sbGpxa1VTFRiuSRGNuT3YABfPAbG4UcXMmwO6sqIKyeopGtRFpnO21UTxr0TZrkGLmYVGbU6b4qUX0ZVGTi90WW8IuKWO8RbPFU2+ZsNarNy0rnfM1fOvdDPSrHDsqvWJ3NlxstW6Cdio5q77Iqei6Jf8IeZqyXenhoMvc2hq0Zt9T6Roidu/137GiO1Pd7k4M3fgJzr8ucl+USdGXGXCXMkeDoWe8Wq70kVVbLhTVcMretjopEXae53zWs4Sg/DJbMzN9wDi97WNVz3I1qeqqukQxPM+I2IYpDu6XmkbO5iuigbIiuk14T/6XcfGuyZqFMXJvolueOSXFmWvc1jFe9yNaibVVXshFPmu4206Us+HY7UJKj0VlVIx32k9tp4MP42cyV2yFH2zF1Witz9pJ1J872+itd+PfsR2qZ5amd888jpJHrtznLtVU3J2N7v50WRzdRXFcVH182R+RlprwwOCrtdr6n4AbiI8AAAAAAAAAAAAAAAAAA7FHW1dE9X0lTLA5fVY3q1V/Iz618bOJFtpYaamyKo+FC1GtRzlXt9e5rkGJk4GLlLa+tS90mVRlKPJmzpePPE+Re+RTN+jVVP1MFu2Q3y7TyzXG61dS+XfX8SVV3vweWCjG0zDxXvTVGL9EkHOUubAAM4pAAAAAAAAAAAAPdxjLsjxqtiq7NdqqlfF9lGyL069tbM1peP3FCnRUTIHyb/5iK79TVoI/J0rBypeK6mMn6pMrVko8mbFu/GriNdaSakrMgndDM1Wua1yp+XcwGrq6qrcjqqolmcnosj1cqfmfAF3GwMbFW1Faj7JI8cpS5sAAyykAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";
const ICON_3 = "data:image/png;base64,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";
const ICON_4 = "data:image/png;base64,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";
export default function PolysynthLandingPage() {
  const nav = ["Applications", "Materials", "Software", "Company"];

  const stats = [
    { label: "Materials Capability", value: "Up to 8 Materials*" },
    { label: "Starting Price", value: "$4,999+" },
    { label: "Core Innovation", value: "Layer Cleaning System (Patent Pending)" },
  ];

  const useCases = [
    { title: "Multi Material Prototyping", icon: ICON_1, description: "Compress design cycles from weeks to hours. Switch materials mid-print without post-processing or assembly." },
    { title: "Functional Conductive Parts", icon: ICON_4, description: "Print embedded circuits directly into your parts. No wiring, no soldering — functional electronics straight out of the machine." },
    { title: "Dental + Medical", icon: ICON_3, description: "Biocompatible resins with micron-level precision. Built for clinical workflows that demand accuracy and repeatability." },
    { title: "Product Development", icon: ICON_2, description: "From concept to market-ready prototype in one machine. Multi-material, multi-finish, zero compromises." },
  ];

  const materials = [
    { name: "Conductive Resin" },
    { name: "Clear Resin" },
    { name: "Color Resin" },
    { name: "High Detail Resin" },
  ];

  const [activeMaterial, setActiveMaterial] = useState(0);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">

      {/* Navbar — fixed, frosted glass, sits above video */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-zinc-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-[0.25em]">POLYSYNTH</div>
          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex gap-4">
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-white/40">
              Contact Sales
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
              Pre Order Now
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — full viewport height, video starts at very top behind navbar */}
        <section className="relative flex min-h-screen items-end overflow-hidden pb-20">
          {/* Background video — covers entire section including behind navbar */}
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            src={VIDEO_URL}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Bottom fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

          {/* Hero content — pushed down so it clears the navbar */}
          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6">
            <div className="mb-4 text-sm uppercase text-red-400">
              First multi-color resin system
            </div>
            <h1 className="max-w-3xl text-6xl font-semibold leading-tight md:text-7xl">
              The first{" "}
              <span className="text-red-400">multi-material</span> resin
              printer.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Polysynth 1 introduces a new category of 3D printing—combining
              multiple materials in a single print with a proprietary vat
              cleaning system that resets between layers for cleaner transitions
              and higher fidelity output.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
                Pre Order Now
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 transition hover:border-white/60 hover:bg-white/10">
                Talk to Sales
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-sm text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-zinc-500">
              *Interchangeable build volume for high color spectrum
            </div>
          </div>
        </section>

        {/* Conductive Parts Banner */}
        <section className="mx-auto max-w-7xl px-6 pb-0 pt-8">
          <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6 text-center md:p-7">
            <h2 className="mb-3 text-3xl font-semibold text-red-400">
              Functional Conductive Parts
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-zinc-300">
              Print with conductive resin to unlock embedded electronics,
              circuits, and entirely new product workflows.
            </p>
            <button className="rounded-full border border-red-400 px-6 py-3 text-red-400 transition hover:bg-red-400/10">
              Learn more about our groundbreaking technology
            </button>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs tracking-[0.25em] text-zinc-500">APPLICATIONS</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/[0.08]">
            {useCases.map((u, i) => (
              <div
                key={u.title}
                className="group relative overflow-hidden bg-zinc-950 p-7 min-h-[200px] flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <img src={u.icon} alt="" className="w-8 h-8 object-contain mb-5" />
                  <h3 className="text-2xl font-semibold leading-snug mb-3">{u.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">{u.description}</p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Materials Section */}
        <section id="materials" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs tracking-[0.25em] text-zinc-500 mb-10">MATERIALS</p>
          <div className="grid grid-cols-4 gap-6">
            {materials.map((m, i) => (
              <div
                key={m.name}
                className="cursor-pointer"
                onClick={() => setActiveMaterial(i)}
              >
                <div
                  className="mb-4 transition-all duration-300"
                  style={{
                    height: activeMaterial === i ? "2px" : "0.5px",
                    background: activeMaterial === i ? "#f87171" : "rgba(255,255,255,0.15)",
                  }}
                />
                <div className={`text-lg font-semibold mb-1 transition-colors duration-300 ${activeMaterial === i ? "text-white" : "text-zinc-400"}`}>
                  {m.name.split(" ")[0]}
                </div>
                <div className="text-xs text-zinc-500">{m.name.split(" ").slice(1).join(" ")}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center md:p-10">
            <div className="mb-3 text-sm uppercase text-red-400">Software</div>
            <h2 className="mb-4 text-4xl font-semibold">PolySlicer</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-400">
              PolySlicer is the software layer behind Polysynth 1, designed to
              handle material switching, cleaning cycles, and high-precision
              print workflows.
            </p>
            <button className="mt-6 rounded-full border border-white/15 px-6 py-3 transition hover:border-red-500/60 hover:bg-red-500/10">
              Learn More
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-4xl font-semibold">
            Ready to bring Polysynth into your workflow?
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
              Pre Order Now
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 transition hover:border-white/30">
              Contact Sales
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
