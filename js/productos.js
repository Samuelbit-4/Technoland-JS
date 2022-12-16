const computadoras = [
    {
      id: 1,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Hewlett-Packard-476S9LTABM-396954-Ki5KZVn4iOiikBoH.jpg",
      itemTitle: "PC de Escritorio HP ProDesk G6",
      price: 16999,
      description:
        "Procesador Intel Core i5 10500T (hasta 3.80 GHz), Memoria de 8GB DDR4, SSD de 256GB, Video UHD Graphics 630, S.O. Windows 10 Pro (64 Bits)",
    },
    {
      id: 2,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Hewlett-Packard-464A8LTABM-388884-Cu8apK0HyCFeksf1.jpg",
      itemTitle: "Computadora All in One HP 200",
      price: 7399,
      description:
        "Procesador Intel Celeron J4025 (hasta 2.90GHz), Memoria de 4GB DDR4, SSD de 128GB, Pantalla de 20.7' LED, Video UHD Graphics 600, S.O. Windows 10 Pro 64 Bits",
    },
    {
      id: 3,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Hewlett-Packard-38S65LTABM-387858-2uLI8vxLvbLRQL0X.jpg",
      itemTitle: "PC All in One HP 200 G4",
      price: 13999,
      description:
        "Procesador Intel Core i3 10110U (hasta 4.10GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 21.5' LED, Video UHD Graphics, S.O. Windows 10 Home.",
    },
    {
      id: 4,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Lenovo-10RX004ULM-402322-oeeHquqi4nrHsVfp.jpg",
      itemTitle: "PC All in One Lenovo V130-20IGM",
      price: 6499,
      description:
        "Procesador Intel Celeron J4025 (hasta 2.90 GHz), Memoria de 4GB DDR4, Disco Duro de 1TB, Pantalla de 19.5' LED, Video UHD Graphics 600, Unidad Óptica DVD±R/RW, S.O. Windows 10 Home (64 Bits)",
    },
    {
      id: 5,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Huawei-53012CPK-401782-2uJNSMYjOuFw6oXp.jpg",
      itemTitle: "PC de Escritorio MateStation B515",
      price: 11999,
      description:
        "Procesador AMD Ryzen 5 4600G (hasta 4.20 GHz), Memoria de 8GB DDR4, SSD de 256GB, Video Radeon Graphics, S.O. Windows 10 Pro (64 Bits).",
    },
    {
      id: 6,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-DELL-HKFK0-432466-J39QvIR16yyiDtCr.jpg",
      itemTitle: "PC All in One DELL Inspiron 5410",
      price: 28999,
      description:
        "Procesador Intel Core i7 1255U (hasta 4.70 GHz), Memoria de 16GB DDR4, Disco Duro de 1TB, SSD de 256GB, Pantalla de 23.8' LED, Video NVIDIA GeForce MX550, S.O. Windows 11 Home (64 Bits)",
    },
    {
      id: 7,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Hewlett-Packard-434F4LAABM-434326-40j9gPcEmQp73AF8.jpg",
      itemTitle: "PC All in One HP 24-df1505la",
      price: 13999,
      description:
        "Procesador Intel Core i3 1115G4 (hasta 4.10 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, SSD de 256GB, Pantalla de 23.8' LED, Video UHD Graphics, S.O. Windows 11 Home (64 Bits).",
    },
    {
      id: 8,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Hewlett-Packard-61U00LS-432218-Sh6YuMZn6dNGGUsc.jpg",
      itemTitle: "PC de Escritorio HP ProDesk 400 G7 SFF",
      price: 15499,
      description:
        "Procesador Intel Core i5 10505 (hasta 4.60 GHz), Memoria de 8GB DDR4, SSD de 512GB, Video UHD Graphics 630, S.O. Windows 10 Pro (64 Bits)",
    },
    {
      id: 9,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Huawei-53012CPK-401782-NHvlfKoa2A3t0aA7.jpg",
      itemTitle: "PC de Escritorio MateStation S B515",
      price: 16999,
      description:
        "Procesador AMD Ryzen 5 4600G (hasta 4.20 GHz), Memoria de 8GB DDR4, SSD de 256GB, Video Radeon Graphics, S.O. Windows 10 Pro (64 Bits) Incluye Monitor Huawei AD80HW de 23.8' FHD.",
    },
    {
      id: 10,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Lenovo-MX1XLD06MX-1-434518-ebCm7YmTAWRFm3mB.jpg",
      itemTitle: "All in One Lenovo IdeaCentre 3",
      price: 13999,
      description:
        " Procesador AMD Ryzen 3 4300U (hasta 3.70 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 23.8' LED, Video Radeon Graphics, S.O. Windows 10 Home (64 Bits), Incluye Tablet Lenovo Tab M10.",
    },
    {
      id: 11,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-VORAGO-10400-NOS-5-417072-9TGQ1CnCDx1xl95n.jpg",
      itemTitle: "PC de Escritorio VORAGO GF CHOOSE",
      price: 18999,
      description:
        "Procesador Intel Core i5 11400 (hasta 4.40 GHz), Memoria de 16GB DDR4, SSD de 512GB, Video GeForce GTX 1660 SUPER, S.O. No Incluye.",
    },
    {
      id: 12,
      img: "https://images.pcel.com/1600/Computadoras-Desktops-Hewlett-Packard-200R9LTABM-377726-oypfoZdz0SURN293.jpg",
      itemTitle: "PC All in One HP 400 G6",
      price: 22399,
      description:
        " Procesador Intel Core i5 10500 (hasta 4.50 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 23.8' LED, Video UHD Graphics 630, S.O. Windows 10 Pro (64 Bits)",
    },
  ];
  
  const laptop = [
    {
      id: 1,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Lenovo-82C3001JLM-362862-nea4ZxmzSjSi4GWn.jpg",
      itemTitle: "Laptop Lenovo V15",
      price: 5499,
      description:
        "Procesador Intel Celeron N 4020 (hasta 2.80 GHz), Memoria de 4GB DDR4, Disco Duro de 500GB, Pantalla de 15.6' LED, Video UHD Graphics 600, S.O. Windows 10 Home (64 Bits)",
    },
    {
      id: 2,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-DELL-R6DCW-406054-NtjG4jmFo9g1K8BY.jpg",
      itemTitle: "Laptop DELL Inspiron 3511",
      price: 10999,
      description:
        "Procesador Intel Core i3 1115G4 (hasta 4.10 GHz), Memoria de 8GB DDR4, SSD de 256GB, Pantalla de 15.6' LED, Video UHD Graphics, S.O. Windows 11 Home (64 Bits)",
    },
    {
      id: 3,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Lenovo-81WA00DFLM-371248-Ye0Idpi2pOdtCwTs.jpg",
      itemTitle: "Laptop Lenovo IdeaPad 3 14IML05",
      price: 8999,
      description:
        "Procesador Intel Core i3 10110U (hasta 4.10GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 14' LED, Video UHD Graphics, S.O. Windows 10 Home (64 Bits)",
    },
    {
      id: 4,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-ASUS-X712JA-212-V17WN-11-443202-Z51ncJI7rm43Uj9k.jpg",
      itemTitle: "Laptop ASUS VivoBook X712JA",
      price: 12499,
      description:
        "Procesador Intel Core i5 1035G1 (hasta 3.60 GHz), Memoria de 12GB DDR4, Disco Duro de 1TB, Pantalla de 17.3' LED, Video UHD Graphics, S.O. Windows 10 Home en modo S, Teclado versión en inglés.",
    },
    {
      id: 5,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Gigabyte-G5-GD-51US123SO-434938-a41Y3cImJABbHI7L.jpg",
      itemTitle: "Laptop Gigabyte G5 GD-51US123SO",
      price: 22999,
      description:
        "Video GeForce RTX 3050, Procesador Intel Core i5 11400H (hasta 4.50 GHz), Memoria de 16GB DDR4, SSD de 512GB, Pantalla de 15.6' LED, S.O. Windows 11 Home (64 Bits).",
    },
    {
      id: 6,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-MSI-GF63-Thin-10SCXR-391438-qwHAdtCWTyBzxFsd.jpg",
      itemTitle: "Laptop MSI GF63 Thin 10SCXR-222",
      price: 14999,
      description:
        "Video GeForce GTX 1650 con 4GB GDDR6, Procesador Intel Core i5 10300H (hasta 4.5 GHz), Memoria de 8GB DDR4, SSD de 256GB, Pantalla de 15.6' LED, S.O. Windows 10 Home (64 Bits). Teclado versión en inglés",
    },
    {
      id: 7,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Lenovo-20TES3DG00-424172-v4jr9Kb3C8DWmJV8.jpg",
      itemTitle: "Laptop Lenovo ThinkPad E15 G2",
      price: 31999,
      description:
        "Procesador Intel Core i7 1165G7 (hasta 4.70 GHz), Memoria de 16GB DDR4, SSD de 512GB, Pantalla de 15.6' LED, Video Iris Xe Graphics, S.O. Windows 10 Pro (64 Bits)",
    },
    {
      id: 8,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-DELL-107NN-425668-BQWWZlsbz74q2uFF.jpg",
      itemTitle: "Laptop DELL Alienware M15 R7",
      price: 39999,
      description:
        "Video GeForce RTX 3060, Procesador Intel Core i7 12700H (hasta 4.70 GHz), Memoria de 16GB DDR5, SSD de 512GB, Pantalla de 15.6' LED, S.O. Windows 11 Home (64 Bits)",
    },
    {
      id: 9,
      img: "/images/tienda/computadoras/compu-desk-9.jpg",
      itemTitle: "Laptop Lenovo V14 IML",
      price: 7999,
      description:
        "Procesador Intel Core i3 10110U (hasta 4.10 GHz), Memoria de 8GB DDR4, Disco Duro de 1TB, Pantalla de 14' LED, Video UHD Graphics, S.O. Windows 10 Pro (64 Bits)",
    },
    {
      id: 10,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Acer-NX-A28AL-003-427818-lyEYMs3SRZjDlXA6.jpg",
      itemTitle: "Laptop Acer Aspire 5",
      price: 12999,
      description:
        "Procesador Intel Core i5 1135G7 (hasta 4.20 GHz), Memoria de 8GB DDR4, SSD de 512GB, Pantalla de 14' LED, Video Iris Xe Graphics, S.O. Windows 10 Home (64 Bits)",
    },
    {
      id: 11,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Hewlett-Packard-840G3-i52416-256-387806-2I1d27FY1GZEcWdK.jpg",
      itemTitle: "Laptop HP EliteBook 840",
      price: 9999,
      description:
        "Procesador Intel Core i5 6300U (hasta 3.0 GHz), Memoria de 16GB DDR4, SSD de 256GB, Pantalla de 14' LED, Video HD Graphics 520, S.O. Windows 10 Pro (64 Bits). Reacondicionada clase A",
    },
    {
      id: 12,
      img: "https://images.pcel.com/1600/Computadoras-Laptops-Lenovo-20W1S03200-386384-BOWNOLpz7nAYgOqw.jpg",
      itemTitle: "Laptop Lenovo ThinkPad T14 Gen2",
      price: "$22,399.00",
      description:
        "Procesador Intel Core i7 1165G7 (hasta 4.7 GHz), Memoria de 16GB DDR4, SSD M.2 de 512GB, Pantalla de 14' LED, Video Iris Xe Graphics, S.O. Windows 10 Pro (64 Bits).",
    },
  ];