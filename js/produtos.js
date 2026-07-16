const produtos = [
  {
    id: 1,
    codigo: "00001",
    nome: "Camisa São Paulo III 2025",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/sao-paulo/sao-paulo-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/sao-paulo/sao-paulo-frente.jpeg",
      "img/produtos/brasileiros/sao-paulo/sao-paulo-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 2,
    codigo: "00002",
    nome: "Camisa Lyon II 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/lyon/lyon-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/lyon/lyon-frente.jpeg",
      "img/produtos/internacionais/lyon/lyon-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 3,
    codigo: "00003",
    nome: "Camisa Noruega I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/noruega/noruega-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/noruega/noruega-frente.jpeg",
      "img/produtos/selecoes/noruega/noruega-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 4,
    codigo: "00004",
    nome: "Camisa Milan I 06/07",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/milan/milan-frente.jpeg",
    imagens: [
      "img/produtos/retros/milan/milan-frente.jpeg",
      "img/produtos/retros/milan/milan-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 5,
    codigo: "00005",
    nome: "Camisa Boca Juniors I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 1,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/boca-juniors-25-26-casa/boca-juniors-25-26-casa-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/boca-juniors-25-26-casa/boca-juniors-25-26-casa-frente.jpeg",
      "img/produtos/internacionais/boca-juniors-25-26-casa/boca-juniors-25-26-casa-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 6,
    codigo: "00006",
    nome: "Camisa Uruguai I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 1,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/uruguai-25-26/uruguai-25-26-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/uruguai-25-26/uruguai-25-26-frente.jpeg",
      "img/produtos/selecoes/uruguai-25-26/uruguai-25-26-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 7,
    codigo: "00007",
    nome: "Camisa Corinthians II 2000",
    categoria: "Retrôs",
    tipo: "normal",
    marca: "Topper",
    temporada: "2000",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/corinthians-2000-visitante/corinthians-2000-visitante-frente.jpeg",
    imagens: [
      "img/produtos/retros/corinthians-2000-visitante/corinthians-2000-visitante-frente.jpeg",
      "img/produtos/retros/corinthians-2000-visitante/corinthians-2000-visitante-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 8,
    codigo: "00008",
    nome: "Camisa Remo II 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Volt",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/remo-2026-ii/remo-2026-ii-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/remo-2026-ii/remo-2026-ii-frente.jpeg",
      "img/produtos/brasileiros/remo-2026-ii/remo-2026-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 9,
    codigo: "00009",
    nome: "Camisa Flamengo I 2026",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/brasileiros/flamengo-2026/flamengo-2026-frente.jpeg",
    imagens: [
      "img/produtos/brasileiros/flamengo-2026/flamengo-2026-frente.jpeg",
      "img/produtos/brasileiros/flamengo-2026/flamengo-2026-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 10,
    codigo: "00010",
    nome: "Camisa Portugal I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Puma",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/portugal-2026/portugal-2026-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/portugal-2026/portugal-2026-frente.jpeg",
      "img/produtos/selecoes/portugal-2026/portugal-2026-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 11,
    codigo: "00011",
    nome: "Camisa França I 26/27",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/selecoes/franca-2026/franca-2026-frente.jpeg",
    imagens: [
      "img/produtos/selecoes/franca-2026/franca-2026-frente.jpeg",
      "img/produtos/selecoes/franca-2026/franca-2026-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 12,
    codigo: "00012",
    nome: "Camisa Corinthians I 2000",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Topper",
    temporada: "2000",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/corinthians-2000-casa/corinthians-2000-casa-frente.jpeg",
    imagens: [
      "img/produtos/retros/corinthians-2000-casa/corinthians-2000-casa-frente.jpeg",
      "img/produtos/retros/corinthians-2000-casa/corinthians-2000-casa-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 13,
    codigo: "00013",
    nome: "Camisa Barcelona II 03/04",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2003/2004",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-03-04-visitante/barcelona-03-04-visitante-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-03-04-visitante/barcelona-03-04-visitante-frente.jpeg",
      "img/produtos/retros/barcelona-03-04-visitante/barcelona-03-04-visitante-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 14,
    codigo: "00014",
    nome: "Camisa Real Madrid II 06/07",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-06-07-ii/real-madrid-06-07-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-06-07-ii/real-madrid-06-07-ii-frente.jpeg",
      "img/produtos/retros/real-madrid-06-07-ii/real-madrid-06-07-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 15,
    codigo: "00015",
    nome: "Camisa Inter de Milão II 97/98",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Umbro",
    temporada: "1997/1998",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/inter-milao-97-98-ii/inter-milao-97-98-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/inter-milao-97-98-ii/inter-milao-97-98-ii-frente.jpeg",
      "img/produtos/retros/inter-milao-97-98-ii/inter-milao-97-98-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 16,
    codigo: "00016",
    nome: "Camisa Milan II 06/07",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/milan-06-07-ii/milan-06-07-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/milan-06-07-ii/milan-06-07-ii-frente.jpeg",
      "img/produtos/retros/milan-06-07-ii/milan-06-07-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 17,
    codigo: "00017",
    nome: "Camisa Barcelona I 96/97",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Kappa",
    temporada: "1996/1997",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-96-97-i/barcelona-96-97-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-96-97-i/barcelona-96-97-i-frente.jpeg",
      "img/produtos/retros/barcelona-96-97-i/barcelona-96-97-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 18,
    codigo: "00018",
    nome: "Camisa Barcelona I 20/21",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2020/2021",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-20-21-i/barcelona-20-21-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-20-21-i/barcelona-20-21-i-frente.jpeg",
      "img/produtos/retros/barcelona-20-21-i/barcelona-20-21-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 19,
    codigo: "00019",
    nome: "Camisa Barcelona I 15/16",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2015/2016",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-15-16-i/barcelona-15-16-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-15-16-i/barcelona-15-16-i-frente.jpeg",
      "img/produtos/retros/barcelona-15-16-i/barcelona-15-16-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 20,
    codigo: "00020",
    nome: "Camisa Barcelona I 07/08",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2007/2008",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-07-08-i/barcelona-07-08-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-07-08-i/barcelona-07-08-i-frente.jpeg",
      "img/produtos/retros/barcelona-07-08-i/barcelona-07-08-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 21,
    codigo: "00021",
    nome: "Camisa Barcelona I 02/03",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2002/2003",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/barcelona-02-03-ii/barcelona-02-03-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/barcelona-02-03-ii/barcelona-02-03-ii-frente.jpeg",
      "img/produtos/retros/barcelona-02-03-ii/barcelona-02-03-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 22,
    codigo: "00022",
    nome: "Camisa Corinthians I 12/13",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2012/2013",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/corinthians-12-13-i/corinthians-12-13-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/corinthians-12-13-i/corinthians-12-13-i-frente.jpeg",
      "img/produtos/retros/corinthians-12-13-i/corinthians-12-13-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 23,
    codigo: "00023",
    nome: "Camisa Portugal II 04/05",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Nike",
    temporada: "2004/2005",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/portugal-04-05-ii/portugal-04-05-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/portugal-04-05-ii/portugal-04-05-ii-frente.jpeg",
      "img/produtos/retros/portugal-04-05-ii/portugal-04-05-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 24,
    codigo: "00024",
    nome: "Camisa Real Madrid II 05/06",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2005/2006",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-05-06-ii/real-madrid-05-06-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-05-06-ii/real-madrid-05-06-ii-frente.jpeg",
      "img/produtos/retros/real-madrid-05-06-ii/real-madrid-05-06-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 25,
    codigo: "00025",
    nome: "Camisa Real Madrid I 11/12",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2011/2012",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-11-12-i/real-madrid-11-12-i-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-11-12-i/real-madrid-11-12-i-frente.jpeg",
      "img/produtos/retros/real-madrid-11-12-i/real-madrid-11-12-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 26,
    codigo: "00026",
    nome: "Camisa Real Madrid II 98/99",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "1998/1999",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 175,
      encomenda: 170
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/retros/real-madrid-98-99-ii/real-madrid-98-99-ii-frente.jpeg",
    imagens: [
      "img/produtos/retros/real-madrid-98-99-ii/real-madrid-98-99-ii-frente.jpeg",
      "img/produtos/retros/real-madrid-98-99-ii/real-madrid-98-99-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 27,
    codigo: "00027",
    nome: "Camisa Arsenal I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/arsenal-26-27-i/arsenal-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/arsenal-26-27-i/arsenal-26-27-i-frente.jpeg",
      "img/produtos/internacionais/arsenal-26-27-i/arsenal-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 28,
    codigo: "00028",
    nome: "Camisa PSG I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Nike",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/psg-26-27-i/psg-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/psg-26-27-i/psg-26-27-i-frente.jpeg",
      "img/produtos/internacionais/psg-26-27-i/psg-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 29,
    codigo: "00029",
    nome: "Camisa Real Madrid I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-madrid-25-26-i/real-madrid-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-madrid-25-26-i/real-madrid-25-26-i-frente.jpeg",
      "img/produtos/internacionais/real-madrid-25-26-i/real-madrid-25-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 30,
    codigo: "00030",
    nome: "Camisa Real Madrid II 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-madrid-25-26-ii/real-madrid-25-26-ii-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-madrid-25-26-ii/real-madrid-25-26-ii-frente.jpeg",
      "img/produtos/internacionais/real-madrid-25-26-ii/real-madrid-25-26-ii-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 31,
    codigo: "00031",
    nome: "Camisa Real Madrid I 26/27",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2026/2027",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/real-madrid-26-27-i/real-madrid-26-27-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/real-madrid-26-27-i/real-madrid-26-27-i-frente.jpeg",
      "img/produtos/internacionais/real-madrid-26-27-i/real-madrid-26-27-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 32,
    codigo: "00032",
    nome: "Camisa Inter Miami I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/miami-25-26-i/miami-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/miami-25-26-i/miami-25-26-i-frente.jpeg",
      "img/produtos/internacionais/miami-25-26-i/miami-25-26-i-costas.jpeg"
    ],

    destaque: true
  },

  {
    id: 33,
    codigo: "00033",
    nome: "Camisa Lyon I 25/26",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 0,
        M: 0,
        G: 0,
        GG: 0
      },
      encomenda: ["P", "M", "G", "GG"]
    },

    preco: {
      prontaEntrega: 145,
      encomenda: 140
    },

    personalizacao: true,
    valorPersonalizacao: 20,

    imagem: "img/produtos/internacionais/lyon-25-26-i/lyon-25-26-i-frente.jpeg",
    imagens: [
      "img/produtos/internacionais/lyon-25-26-i/lyon-25-26-i-frente.jpeg",
      "img/produtos/internacionais/lyon-25-26-i/lyon-25-26-i-costas.jpeg"
    ],

    destaque: true
  },
];