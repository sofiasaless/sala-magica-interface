import type { Produto } from "../types/produto.type";

export const categories = [
  'Todos',
  'Painéis',
  'Murais',
  'Móbiles',
  'Letras Decorativas',
  'Calendários',
  'Porta-Recados',
  'Enfeites de Porta',
  'Kits Temáticos'
];

export const products: Produto[] = [
  {
    id: 1,
    titulo: 'Painel de Aniversariantes - Tema Safári',
    descricao: 'Lindo painel decorativo para destacar os aniversariantes do mês. Feito em EVA com detalhes em tecido, inclui espaços para fotos e nomes das crianças. Perfeito para deixar a sala mais alegre e organizada!',
    preco: 89.90,
    // originalpreco: 119.90,
    categoria: 'Painéis',
    imagens: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
      'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=500'
    ],
    materiais: 'EVA, tecido, velcro adesivo',
    altura: 50,
    ativo: true,
    dataAnuncio: new Date(),
    modelagem: 'Lavar à mão com sabão neutro.'
  },
  {
    id: 2,
    titulo: 'Mural "Como Estou Hoje" - Emoções',
    descricao: 'Mural interativo para as crianças expressarem seus sentimentos. Inclui carinhas com diferentes emoções em velcro. Estimula a inteligência emocional de forma lúdica.',
    preco: 65.00,
    categoria: 'Murais',
    imagens: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500'
    ],
    materiais: 'Feltro, velcro, enchimento acrílico',
    altura: 50,
    modelagem: 'Lavar à mão com sabão neutro.',
    ativo: true,
    dataAnuncio: new Date(),
  },
  {
    id: 3,
    titulo: 'Móbile de Nuvens e Estrelas',
    descricao: 'Delicado móbile para decorar o cantinho da leitura ou área de descanso. Movimenta-se suavemente com o vento, criando um ambiente tranquilo e encantador.',
    preco: 45.00,
    categoria: 'Móbiles',
    imagens: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500'
    ],
    materiais: 'Feltro, linha de nylon, estrutura de madeira',
    altura: 50,
    modelagem: 'Manter longe do alcance das crianças pequenas.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 4,
    titulo: 'Kit Alfabeto Colorido - Letras em EVA',
    descricao: 'Conjunto completo com 26 letras do alfabeto em EVA colorido. Ideal para decorar a parede da sala e auxiliar no aprendizado. Cada letra possui aproximadamente 15cm.',
    preco: 75.00,
    // originalpreco: 95.00,
    categoria: 'Letras Decorativas',
    imagens: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500'
    ],
    materiais: 'EVA 3mm, fita dupla face inclusa',
    altura: 50,
    modelagem: 'Evitar dobrar. Armazenar em local seco.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 5,
    titulo: 'Calendário e Clima - Interativo',
    descricao: 'Painel multifuncional com calendário, dia da semana, mês, ano e condição climática. Peças removíveis em velcro. Perfeito para a rodinha da manhã!',
    preco: 120.00,
    categoria: 'Calendários',
    imagens: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500'
    ],
    materiais: 'Feltro, velcro, números em EVA',
    altura: 50,
    modelagem: 'Aspirar suavemente para remover poeira.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 6,
    titulo: 'Porta-Recados "Jardim Encantado"',
    descricao: 'Organizador de recados com tema floral. Possui bolsos para bilhetes, lembretes e comunicados. Deixa a sala mais organizada e bonita!',
    preco: 55.00,
    categoria: 'Porta-Recados',
    imagens: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500'
    ],
    materiais: 'Tecido 100% algodão, manta acrílica',
    altura: 50,
    modelagem: 'Lavar à máquina em ciclo delicado.',
    ativo: false,
    dataAnuncio: new Date(),
  },
  {
    id: 7,
    titulo: 'Enfeite de Porta - Coruja Professora',
    descricao: 'Simpática coruja com óculos e chapéu de formatura. Pode ser personalizada com o nome da professora ou da turma. Acompanha ventosa para fixação.',
    preco: 35.00,
    categoria: 'Enfeites de Porta',
    imagens: [
      'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=500'
    ],
    materiais: 'Feltro, enchimento siliconado',
    altura: 50,
    modelagem: 'Limpar com pano úmido.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 8,
    titulo: 'Kit Completo "Fundo do Mar"',
    descricao: 'Conjunto temático com painel principal, móbile, letras e números decorativos. Transforma completamente a sala em um ambiente submarino mágico!',
    preco: 280.00,
    // originalpreco: 350.00,
    categoria: 'Kits Temáticos',
    imagens: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500'
    ],
    materiais: 'EVA, feltro, tecido, TNT',
    altura: 50,
    modelagem: 'Ver instruções individuais de cada peça.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 9,
    titulo: 'Números de 0 a 9 - Animais',
    descricao: 'Cada número é representado por um animal diferente. Ótimo para decorar e ensinar quantidades. Inclui ilustrações com a quantidade correspondente.',
    preco: 68.00,
    categoria: 'Letras Decorativas',
    imagens: [
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500'
    ],
    materiais: 'EVA e papel cartão plastificado',
    altura: 50,
    modelagem: 'Não molhar. Guardar em local seco.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 10,
    titulo: 'Mural de Regras e Combinados',
    descricao: 'Mural ilustrado com as principais regras da sala de aula. Desenhos fofos e texto em linguagem infantil. Ajuda a estabelecer limites de forma positiva.',
    preco: 58.00,
    categoria: 'Murais',
    imagens: [
      'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500'
    ],
    materiais: 'Lona impressa com acabamento fosco',
    altura: 50,
    modelagem: 'Limpar com pano levemente úmido.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 11,
    titulo: 'Móbile Planetas - Sistema Solar',
    descricao: 'Móbile educativo com os 8 planetas do sistema solar. Cada planeta em escala aproximada com cores realistas. Perfeito para despertar a curiosidade científica!',
    preco: 95.00,
    categoria: 'Móbiles',
    imagens: [
      'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500'
    ],
    materiais: 'Isopor revestido, tinta atóxica, fio de nylon',
    altura: 50,
    modelagem: 'Manter fora do alcance das crianças.',
    ativo: true,
    dataAnuncio: new Date()
  },
  {
    id: 12,
    titulo: 'Kit Cantinho da Leitura',
    descricao: 'Conjunto para criar um espaço aconchegante de leitura. Inclui banner "Cantinho da Leitura", almofadas decorativas e porta-livros de tecido.',
    preco: 185.00,
    categoria: 'Kits Temáticos',
    imagens: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500'
    ],
    materiais: 'Tecido, enchimento, madeira',
    altura: 50,
    modelagem: 'Almofadas laváveis. Banner: limpar com pano.',
    ativo: true,
    dataAnuncio: new Date()
  }
];

export const getProductById = (id: number): Produto | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsBycategoria = (categoria: string): Produto[] => {
  if (categoria === 'Todos') return products;
  return products.filter(p => p.categoria === categoria);
};

export const searchProducts = (query: string): Produto[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.titulo.toLowerCase().includes(lowerQuery) ||
      p.descricao.toLowerCase().includes(lowerQuery) ||
      p.categoria.toLowerCase().includes(lowerQuery)
  );
};
