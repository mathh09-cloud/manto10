const produtos = [
  {
    id: 1,
    codigo: "00001",
    nome: "Camisa São Paulo 2025 Comemorativa",
    categoria: "Clubes Brasileiros",
    tipo: "normal",
    marca: "New Balance",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 1,
        M: 1,
        G: 1,
        GG: 1
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
    nome: "Camisa Lyon 25/26 Visitante",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "2025/2026",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 1,
        M: 1,
        G: 1,
        GG: 1
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
    nome: "Camisa Noruega 2026 Casa",
    categoria: "Seleções",
    tipo: "normal",
    marca: "Nike",
    temporada: "2025",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 1,
        M: 1,
        G: 1,
        GG: 1
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
    nome: "Camisa Milan Retrô 06/07 Casa",
    categoria: "Retrôs",
    tipo: "retro",
    marca: "Adidas",
    temporada: "2006/2007",
    versao: "Torcedor",

    estoque: {
      prontaEntrega: {
        P: 1,
        M: 1,
        G: 1,
        GG: 1
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
    nome: "Camisa Boca Juniors 25/26 Casa",
    categoria: "Clubes Internacionais",
    tipo: "normal",
    marca: "Adidas",
    temporada: "25/26",
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
];