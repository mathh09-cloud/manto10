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
];