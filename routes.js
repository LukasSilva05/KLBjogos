const express = require('express')
const router = express.Router()
router.use(express.json())

const db = [
    {
        id: 1,
        name: "Grand Theft Auto 5",
        value: "R$ 66,66",
        image: "./assets/gta.jpg",
        data: "17 de setembro de 2013",
        desenvolvedor: "Rockstar",
        plataforma:
            "PlayStation 4, Xbox Series X, Xbox One, PlayStation 3, PlayStation 5, Xbox 360, Microsoft Windows",
        genero: "Aventura, Ação",
        idade: "./assets/classificacao-16-anos.png",
        sobre: 'Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS (quadros por segundo).',
        requisitos: {
            so: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
            processador: 'Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)',
            memoria: '8 GB de RAM',
            placa: 'NVIDIA GTX 660 2 GB / AMD HD7870 2 GB',
            armazenamento: '72 GB'
        }
    },
    {
        id: 2,
        name: "Call Of Duty: Modern Warfare",
        value: "R$ 65,96",
        image: "./assets/cod.jpg",
        data: "25 de outubro de 2019",
        desenvolvedor: "Infinity Ward",
        plataforma: "PlayStation 4, Xbox One, Microsoft Windows",
        genero: "Ação",
        idade: "./assets/classificacao-16-anos.png",
        sobre: 'Um dos jogos mais aclamados pela crítica na história, Call of Duty®4: Modern Warfare® está de volta, remasterizado em alta definição com melhores texturas, renderização mais realista, efeitos de luz dinâmicos e muito mais para uma nova geração.',
        requisitos: {
            so: 'Windows 7 64-Bit or later',
            processador: 'Intel Core i3-3225 @ 3.30GHz or equivalent',
            memoria: '8 GB de RAM',
            placa: 'NVIDIA GeForce GTX 660 2GB / AMD Radeon HD 7850 2GB',
            armazenamento: '20 GB'
        }
    },
    {
        id: 3,
        name: "Fortnite",
        value: "Gratuito",
        image: "./assets/fort.jpg",
        data: "21 de julho de 2017",
        desenvolvedor: "Epic Games",
        plataforma:
            "Nintendo Switch, PlayStation 4, iOS, Xbox One, Xbox Series X, Android, PlayStation 5, macOS, Microsoft Windows",
        genero: "Battle Royale, Ação",
        idade: "./assets/classificacao-14-anos.png",
        sobre: 'Fortnite é um jogo multijogador grátis que está sempre em evolução e permite que você e os seus amigos escolham entre batalhar para ver quem é o último a ficar de pé ou colaborar uns com os outros para criar o mundo dos sonhos no jogo. Jogue Battle Royale e o Modo Criativo do Fortnite GRÁTIS. Baixe agora e mergulhe de cabeça na ação. Esse download também te dá a oportunidade de adquirir a campanha JxA cooperativa Salve o Mundo.',
        requisitos: {
            so: 'Windows 10 64-bit',
            processador: 'Core i5-7300U 3.5 GHz',
            memoria: '8 GB RAM',
            placa: 'Nvidia GTX 960, AMD R9 280, or equivalent DX11 GPU',
            armazenamento: '50 GB'
        }
    },
    {
        id: 4,
        name: "Euro Truck Simulator 2",
        value: "R$ 39,99",
        image: "./assets/ETS2.jpg",
        data: "19 de outubro de 2012",
        desenvolvedor: "SCS Software",
        plataforma: "Microsoft Windows, Linux, Mac OS",
        genero: "Simulador",
        idade: "./assets/classificacao-14-anos.png",
        sobre: 'Viaje pela Europa como o rei da estrada, um caminhoneiro que entrega cargas importantes em distâncias impressionantes! Com dezenas de cidades para explorar, sua resistência, habilidade e velocidade serão levadas ao limite.',
        requisitos: {
            so: 'Windows 7/8.1/10 64-bit',
            processador: 'Quad core CPU 3.0 GHz',
            memoria: '6 GB RAM',
            placa: 'GeForce GTX 760-class (2 GB)',
            armazenamento: '12 GB'
        }
    },
]

const dbCarrinho = [
    {
        id: 4,
        name: "Microsoft Flight Simulator",
        value: "R$ 249,95",
        image: "./assets/pesado.jpg",
        data: "18 de agosto de 2020",
        desenvolvedor: "Asobo Studio",
        plataforma: "Xbox Series X, Microsoft Windows, Xbox Cloud Gaming, OpenXR",
        genero: "Simulação",
        idade: "./assets/classificacao-14-anos.png",
        sobre: 'Obrigado aos nossos fãs, novos e de longa data! A Edição de Jogo do Ano (GOTY do Microsoft Flight Simulator oferece 5 aeronaves inéditas, 8 aeroportos feitos à mão, 6 novos Voos de Descoberta, novos tutoriais e atualizações para o sistema de clima.',
        requisitos: {
            so: 'Windows 10',
            processador: 'Intel i5-8400 | AMD Ryzen 5 1500X',
            memoria: '16 GB de RAM',
            placa: ' NVIDIA GTX 970 | AMD Radeon RX 590',
            armazenamento: '150 GB'
        }
    },
]

router.get('/jogos', (req, res) => {
    res.json(db)
})

router.get('/carrinho', (req, res) => {
    res.json(dbCarrinho)
})

module.exports = router