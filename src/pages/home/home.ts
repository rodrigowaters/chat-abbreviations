import {Component} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor() {

    this.items = [
      {
        "title": "121",
        "description": {
          "enUS": "one to one",
          "ptBR":"um para um"
        }
      },
      {
        "title": "AFAIK",
        "description": {
          "enUS": "as far as I know",
          "ptBR":"tanto quanto eu sei"
        }
      },
      {
        "title": "AFK",
        "description": {
          "enUS": "away from keyboard",
          "ptBR":"longe do teclado"
        }
      },
      {
        "title": "AKA",
        "description": {
          "enUS": "also known as",
          "ptBR":"tambem conhecido como"
        }
      },
      {
        "title": "ARE",
        "description": {
          "enUS": "acronym-rich environment",
          "ptBR":"ambiente rico em sigla"
        }
      },
      {
        "title": "ASAP",
        "description": {
          "enUS": "as soon as possible",
          "ptBR":"o mais breve possível"
        }
      },
      {
        "title": "A_S_L",
        "description": {
          "enUS": "age, sex, location",
          "ptBR":"idade, sexo, cidade"
        }
      },
      {
        "title": "B4",
        "description": {
          "enUS": "before",
          "ptBR":"depois"
        }
      },
      {
        "title": "B4N",
        "description": {
          "enUS": "bye for now",
          "ptBR":"por enquanto, tchau"
        }
      },
      {
        "title": "BAK",
        "description": {
          "enUS": "back at the keyboard",
          "ptBR":"de volta para o teclado"
        }
      },
      {
        "title": "BBIAB",
        "description": {
          "enUS": "back in a bit",
          "ptBR":"volto em seguida"
        }
      },
      {
        "title": "BBL",
        "description": {
          "enUS": "be back later",
          "ptBR":"volto depois"
        }
      },
      {
        "title": "BBML",
        "description": {
          "enUS": "be back much later",
          "ptBR":"volto mais tarde"
        }
      },
      {
        "title": "BBN",
        "description": {
          "enUS": "bye bye now",
          "ptBR":"bye bye, por enquanto"
        }
      },
      {
        "title": "BBS",
        "description": {
          "enUS": "be back soon",
          "ptBR":"voltarei"
        }
      },
      {
        "title": "BEG",
        "description": {
          "enUS": "big evil grin",
          "ptBR":"grande sorriso maligno"
        }
      },
      {
        "title": "BF",
        "description": {
          "enUS": "boyfriend",
          "ptBR":"namorado"
        }
      },
      {
        "title": "BFN",
        "description": {
          "enUS": "bye for now",
          "ptBR":"tchau, por enquanto"
        }
      },
      {
        "title": "BG",
        "description": {
          "enUS": "big grin",
          "ptBR":"grande sorriso"
        }
      },
      {
        "title": "BL",
        "description": {
          "enUS": "belly laughing",
          "ptBR":"belly laughing"
        }
      },
      {
        "title": "BRB",
        "description": {
          "enUS": "be right back",
          "ptBR":"voltarei"
        }
      },
      {
        "title": "BTA",
        "description": {
          "enUS": "but then again",
          "ptBR":"mas mais uma vez"
        }
      },
      {
        "title": "BTW",
        "description": {
          "enUS": "by the way",
          "ptBR":"a proposito"
        }
      },
      {
        "title": "BWL",
        "description": {
          "enUS": "bursting with laughter",
          "ptBR":"explodindo de rir"
        }
      },
      {
        "title": "BWTHDIK",
        "description": {
          "enUS": "but what the heck do I know",
          "ptBR":"mas o que diabos e que eu sei"
        }
      },
      {
        "title": "C&",
        "description": {
          "enUS": "=chuckle & grin",
          "ptBR":"G=risada e sorriso"
        }
      },
      {
        "title": "CID",
        "description": {
          "enUS": "crying in disgrace",
          "ptBR":"chorando em desgraca"
        }
      },
      {
        "title": "CNP",
        "description": {
          "enUS": "continued (in my) next post",
          "ptBR":"continua no meu proximo post"
        }
      },
      {
        "title": "CP",
        "description": {
          "enUS": "chat post",
          "ptBR":"pos conversar"
        }
      },
      {
        "title": "CRBT",
        "description": {
          "enUS": "crying real big tears",
          "ptBR":"chorando grandes lagrimas"
        }
      },
      {
        "title": "CSG",
        "description": {
          "enUS": "chuckle, snicker, grin",
          "ptBR":"risada, risadinha, sorrindo"
        }
      },
      {
        "title": "CU",
        "description": {
          "enUS": "see you",
          "ptBR":"te vejo"
        }
      },
      {
        "title": "CUL",
        "description": {
          "enUS": "see you later",
          "ptBR":"te vejo depois"
        }
      },
      {
        "title": "CUL8ER",
        "description": {
          "enUS": "see you later",
          "ptBR":"te vejo depois"
        }
      },
      {
        "title": "CUZ",
        "description": {
          "enUS": "because",
          "ptBR":"porque"
        }
      },
      {
        "title": "CYO",
        "description": {
          "enUS": "see you online",
          "ptBR":"te vejo online"
        }
      },
      {
        "title": "DIKU",
        "description": {
          "enUS": "do I know you?",
          "ptBR":"eu sei quem e voce?"
        }
      },
      {
        "title": "DL",
        "description": {
          "enUS": "dead link",
          "ptBR":"link morto"
        }
      },
      {
        "title": "DLTBBB",
        "description": {
          "enUS": "don't let the bed bugs bite",
          "ptBR":"don't let the bed bugs bite"
        }
      },
      {
        "title": "DQMOT",
        "description": {
          "enUS": "don't quote me on this",
          "ptBR":"nao cite isso"
        }
      },
      {
        "title": "EG",
        "description": {
          "enUS": "evil grin",
          "ptBR":"sorriso maligno"
        }
      },
      {
        "title": "EMFBI",
        "description": {
          "enUS": "excuse me for butting in",
          "ptBR":"desculpe-me por intrometer"
        }
      },
      {
        "title": "EOM",
        "description": {
          "enUS": "end of message",
          "ptBR":"fim da mensagem"
        }
      },
      {
        "title": "EOT",
        "description": {
          "enUS": "end of thread",
          "ptBR":"fim da thread"
        }
      },
      {
        "title": "F2F",
        "description": {
          "enUS": "face to face",
          "ptBR":"cara a cara"
        }
      },
      {
        "title": "FAQ",
        "description": {
          "enUS": "frequently asked question(s)",
          "ptBR":"perguntas frequentes"
        }
      },
      {
        "title": "FC",
        "description": {
          "enUS": "fingers crossed",
          "ptBR":"dedos cruzados"
        }
      },
      {
        "title": "FISH",
        "description": {
          "enUS": "first in, stilI here",
          "ptBR":"eu estou aqui pela primeira vez"
        }
      },
      {
        "title": "FMTYEWTK",
        "description": {
          "enUS": "far more than you ever wanted to know",
          "ptBR":"muito mais do que voce sempre quis saber"
        }
      },
      {
        "title": "FOMCL",
        "description": {
          "enUS": "falling off my chair laughing",
          "ptBR":"cai da cadeira de tanto rir"
        }
      },
      {
        "title": "FTBOMH",
        "description": {
          "enUS": "from the bottom of my heart",
          "ptBR":"do fundo do meu coracao"
        }
      },
      {
        "title": "FUD",
        "description": {
          "enUS": "fear, uncertainty, and doubt",
          "ptBR":"medo, incerteza e duvida"
        }
      },
      {
        "title": "FWIW",
        "description": {
          "enUS": "for what it's worth",
          "ptBR":"para o que vale a pena"
        }
      },
      {
        "title": "FYI",
        "description": {
          "enUS": "for your information",
          "ptBR":"para sua informacao"
        }
      },
      {
        "title": "GA",
        "description": {
          "enUS": "go ahead :",
          "ptBR":"continuando"
        }
      },
      {
        "title": "GAL",
        "description": {
          "enUS": "get a life :",
          "ptBR":"ter uma vida"
        }
      },
      {
        "title": "GD",
        "description": {
          "enUS": "R=grinning, ducking, & running",
          "ptBR":"R=sorrindo, esquivando-se e em acao"
        }
      },
      {
        "title": "GF",
        "description": {
          "enUS": "girlfriend",
          "ptBR":"namorada"
        }
      },
      {
        "title": "GFN",
        "description": {
          "enUS": "gone for now",
          "ptBR":"terminei agora"
        }
      },
      {
        "title": "GIWIST",
        "description": {
          "enUS": "gee, I wish I'd said that",
          "ptBR":"caramba, eu gostara de ter dito isso"
        }
      },
      {
        "title": "GMBO",
        "description": {
          "enUS": "giggling my butt off",
          "ptBR":"giggling my butt off"
        }
      },
      {
        "title": "GMT_A",
        "description": {
          "enUS": "great minds think alike",
          "ptBR":"grandes mentes pensam da mesma forma"
        }
      },
      {
        "title": "GOL",
        "description": {
          "enUS": "giggling out loud",
          "ptBR":"rindo em voz alta"
        }
      },
      {
        "title": "GTRM",
        "description": {
          "enUS": "going to read mail",
          "ptBR":"leia seu email"
        }
      },
      {
        "title": "GTSY",
        "description": {
          "enUS": "glad to see you",
          "ptBR":"contente em ver voce"
        }
      },
      {
        "title": "H&",
        "description": {
          "enUS": "=h ug and kiss",
          "ptBR":"K=abraco e beijos"
        }
      },
      {
        "title": "HAGN",
        "description": {
          "enUS": "have a good night",
          "ptBR":"tenha uma boa noite"
        }
      },
      {
        "title": "HHIS",
        "description": {
          "enUS": "hanging head in shame",
          "ptBR":"hanging head in shame"
        }
      },
      {
        "title": "HTH",
        "description": {
          "enUS": "hope this helps",
          "ptBR":"espero que isso ajude"
        }
      },
      {
        "title": "lAC",
        "description": {
          "enUS": "in any case:",
          "ptBR":"em todo caso"
        }
      },
      {
        "title": "IAE",
        "description": {
          "enUS": "in any event",
          "ptBR":"em qualquer caso"
        }
      },
      {
        "title": "IANAL",
        "description": {
          "enUS": "I am not a lawyer",
          "ptBR":"eu nao sou um advogado"
        }
      },
      {
        "title": "IC",
        "description": {
          "enUS": "I see",
          "ptBR":"Estou vendo"
        }
      },
      {
        "title": "IDK",
        "description": {
          "enUS": "I don't know",
          "ptBR":"eu nao sei"
        }
      },
      {
        "title": "IHA",
        "description": {
          "enUS": "I hate acronyms",
          "ptBR":"eu odeio siglas"
        }
      },
      {
        "title": "IIRC",
        "description": {
          "enUS": "if I remember correctly",
          "ptBR":"se bem me lembro"
        }
      },
      {
        "title": "ILU",
        "description": {
          "enUS": "I love you",
          "ptBR":"eu amo voce"
        }
      },
      {
        "title": "IM",
        "description": {
          "enUS": "instant message",
          "ptBR":"mensageiro"
        }
      },
      {
        "title": "IMHO",
        "description": {
          "enUS": "in my humble opinion",
          "ptBR":"na minha humilde opniao"
        }
      },
      {
        "title": "IMing",
        "description": {
          "enUS": "chatting with someone online",
          "ptBR":"conversando com qualquer pessoa"
        }
      },
      {
        "title": "IMNSHO",
        "description": {
          "enUS": "in my not so humble opinion",
          "ptBR":"na minha nao tao humilde opniao"
        }
      },
      {
        "title": "IMO",
        "description": {
          "enUS": "in my op inion",
          "ptBR":"na minha opniao"
        }
      },
      {
        "title": "lOW",
        "description": {
          "enUS": "in other words",
          "ptBR":"em outras palavras"
        }
      },
      {
        "title": "IPN",
        "description": {
          "enUS": "I'm posting naked",
          "ptBR":"eu estou postando nu"
        }
      },
      {
        "title": "IRL",
        "description": {
          "enUS": "in real life",
          "ptBR":"na realidade"
        }
      },
      {
        "title": "IWALU",
        "description": {
          "enUS": "I will always love you",
          "ptBR":"eu sempre vou te amar"
        }
      },
      {
        "title": "IYSWIM",
        "description": {
          "enUS": "if you see what I mean",
          "ptBR":"se voce ver o que eu quero dizer"
        }
      },
      {
        "title": "JBOD",
        "description": {
          "enUS": "just a bunch of disks",
          "ptBR":"apenas um monte de discos"
        }
      },
      {
        "title": "JIC",
        "description": {
          "enUS": "just in case",
          "ptBR":"apenas no caso de"
        }
      },
      {
        "title": "JK",
        "description": {
          "enUS": "just kidding",
          "ptBR":"apenas uma brincadeira"
        }
      },
      {
        "title": "JMO",
        "description": {
          "enUS": "just my opinion",
          "ptBR":"apenas uma opniao"
        }
      },
      {
        "title": "JTLYK",
        "description": {
          "enUS": "just to let you know",
          "ptBR":"apenas para que voce saiba"
        }
      },
      {
        "title": "JW",
        "description": {
          "enUS": "just wondering",
          "ptBR":"apenas imaginando"
        }
      },
      {
        "title": "K=",
        "description": {
          "enUS": "kay",
          "ptBR":"okay"
        }
      },
      {
        "title": "KIT",
        "description": {
          "enUS": "keep in touch",
          "ptBR":"mantenha contato"
        }
      },
      {
        "title": "KOC",
        "description": {
          "enUS": "kiss on cheek",
          "ptBR":"beijo na bochecha"
        }
      },
      {
        "title": "KOL",
        "description": {
          "enUS": "kiss on lips",
          "ptBR":"beijar na boca"
        }
      },
      {
        "title": "KWIM",
        "description": {
          "enUS": "know what Imean?",
          "ptBR":"sabe o que eu quero dizer ?"
        }
      },
      {
        "title": "L2M",
        "description": {
          "enUS": "listening to music",
          "ptBR":"ouvindo musica"
        }
      },
      {
        "title": "L8R",
        "description": {
          "enUS": "later",
          "ptBR":"mais tarde"
        }
      },
      {
        "title": "LD",
        "description": {
          "enUS": "later, dude",
          "ptBR":"mais tarde, cara"
        }
      },
      {
        "title": "LDR",
        "description": {
          "enUS": "long distance relationship",
          "ptBR":"relacionamento de longa distancia"
        }
      },
      {
        "title": "LHM",
        "description": {
          "enUS": "lord help me",
          "ptBR":"senhor, me ajuda"
        }
      },
      {
        "title": "LHU",
        "description": {
          "enUS": "lord help us",
          "ptBR":"senhor, nos ajuda"
        }
      },
      {
        "title": "LLTA",
        "description": {
          "enUS": "lots and lots of thunderous applause",
          "ptBR":"muitos e muitos aplausos"
        }
      },
      {
        "title": "LMIRL",
        "description": {
          "enUS": "let's meet in real life",
          "ptBR":"vamos nos encontrar na vida real"
        }
      },
      {
        "title": "LMSO",
        "description": {
          "enUS": "laughing my socks off",
          "ptBR":"laughing my socks off"
        }
      },
      {
        "title": "LOL",
        "description": {
          "enUS": "laughing out loud",
          "ptBR":"rindo alto"
        }
      },
      {
        "title": "LRF",
        "description": {
          "enUS": "little rubber feet",
          "ptBR":"pezinhos de borracha"
        }
      },
      {
        "title": "LSHMBB",
        "description": {
          "enUS": "laughing so hard my belly isbouncing",
          "ptBR":"estou rindo tanto que minha barriga esta doendo"
        }
      },
      {
        "title": "LSHMBH",
        "description": {
          "enUS": "laughing so, hard my belly hurts",
          "ptBR":"rindo assim, dificil minha barriga nao doer"
        }
      },
      {
        "title": "LSHTTARDML",
        "description": {
          "enUS": "laughing so hard the tears are running down my leg",
          "ptBR":"rindo tando que minhas lagrimas entao escorrendo pelas minhas pernas"
        }
      },
      {
        "title": "LTM",
        "description": {
          "enUS": "laugh to myself",
          "ptBR":"rindo para mim mesmo"
        }
      },
      {
        "title": "PMP",
        "description": {
          "enUS": "peed my pants",
          "ptBR":"mijei nas calcas"
        }
      },
      {
        "title": "POAHF",
        "description": {
          "enUS": "put on a happy face",
          "ptBR":"faca uma cara feliz"
        }
      },
      {
        "title": "POS",
        "description": {
          "enUS": "parent over shoulder",
          "ptBR":"parent over shoulder"
        }
      },
      {
        "title": "POTS",
        "description": {
          "enUS": "plain old telephone service",
          "ptBR":"servico de telefone antigo"
        }
      },
      {
        "title": "PU",
        "description": {
          "enUS": "that stinks",
          "ptBR":"isso fede"
        }
      },
      {
        "title": "QSL",
        "description": {
          "enUS": "reply",
          "ptBR":"responder"
        }
      },
      {
        "title": "QSO",
        "description": {
          "enUS": "conversation",
          "ptBR":"conversacao"
        }
      },
      {
        "title": "QT",
        "description": {
          "enUS": "cutie",
          "ptBR":"uva"
        }
      },
      {
        "title": "RL",
        "description": {
          "enUS": "real life",
          "ptBR":"vida real"
        }
      },
      {
        "title": "ROL",
        "description": {
          "enUS": "raffing out loud",
          "ptBR":"raffing out loud"
        }
      },
      {
        "title": "ROTFL",
        "description": {
          "enUS": "rolling on the floor laughing",
          "ptBR":"rolando no chao de tanto rir"
        }
      },
      {
        "title": "RPG",
        "description": {
          "enUS": "role playing games",
          "ptBR":"jogo de RPG"
        }
      },
      {
        "title": "RSN",
        "description": {
          "enUS": "real soon now",
          "ptBR":"em breve"
        }
      },
      {
        "title": "RYO",
        "description": {
          "enUS": "roll your own",
          "ptBR":"role o seu"
        }
      },
      {
        "title": "S4L",
        "description": {
          "enUS": "spam for life",
          "ptBR":"spam para vida"
        }
      },
      {
        "title": "SETE",
        "description": {
          "enUS": "smiling ear.to ear",
          "ptBR":"sorrindo de orelha a orelha"
        }
      },
      {
        "title": "SF",
        "description": {
          "enUS": "surfer friendly",
          "ptBR":"surfista amigavel"
        }
      },
      {
        "title": "SHCOON",
        "description": {
          "enUS": "shoot hot coffee out of nose",
          "ptBR":"atirar cafe quente para fora do nariz"
        }
      },
      {
        "title": "SHID",
        "description": {
          "enUS": "slaps head in disgust",
          "ptBR":"slaps head in disgust"
        }
      },
      {
        "title": "SNERT",
        "description": {
          "enUS": "snot nosed egotistical rude teenager",
          "ptBR":"ranho nojento de adolescente saindo pelo nariz"
        }
      },
      {
        "title": "SO",
        "description": {
          "enUS": "significant other",
          "ptBR":"outro significado"
        }
      },
      {
        "title": "SO_MY",
        "description": {
          "enUS": "sick of me yet?",
          "ptBR":"doente de mim ainda?"
        }
      },
      {
        "title": "SOT",
        "description": {
          "enUS": "short of time",
          "ptBR":"tempo esta curto"
        }
      },
      {
        "title": "SOTMG",
        "description": {
          "enUS": "short of time, must go",
          "ptBR":"o tempo esta curto, devemos ir"
        }
      },
      {
        "title": "STW",
        "description": {
          "enUS": "search the web",
          "ptBR":"procure na web"
        }
      },
      {
        "title": "SUP",
        "description": {
          "enUS": "what's up",
          "ptBR":"o que esta acontecendo"
        }
      },
      {
        "title": "WU",
        "description": {
          "enUS": "sealed with a kiss",
          "ptBR":"selado com um beijo"
        }
      },
      {
        "title": "SWAK",
        "description": {
          "enUS": "sealed with a kiss",
          "ptBR":"selado com um beijo"
        }
      },
      {
        "title": "SWL",
        "description": {
          "enUS": "screaming with laughter",
          "ptBR":"gritando com um sorriso"
        }
      },
      {
        "title": "SYS",
        "description": {
          "enUS": "see you s09n",
          "ptBR":"te vejo em breve"
        }
      },
      {
        "title": "TA",
        "description": {
          "enUS": "thanks again",
          "ptBR":"obrigado novamente"
        }
      },
      {
        "title": "TAFN",
        "description": {
          "enUS": "that's all for now",
          "ptBR":"isso tudo e para agora"
        }
      },
      {
        "title": "TAW",
        "description": {
          "enUS": "teachers are watching",
          "ptBR":"professor esta olhando"
        }
      },
      {
        "title": "TCOB",
        "description": {
          "enUS": "taking care of business",
          "ptBR":"cuidando dos negocios"
        }
      },
      {
        "title": "TCOY",
        "description": {
          "enUS": "take care of yourself",
          "ptBR":"cuide-se"
        }
      },
      {
        "title": "TFH",
        "description": {
          "enUS": "thread from hell",
          "ptBR":"thread do inferno"
        }
      },
      {
        "title": "TGIF",
        "description": {
          "enUS": "thank God .it's Friday",
          "ptBR":"obrigado Deus, e sexta-feira"
        }
      },
      {
        "title": "THX",
        "description": {
          "enUS": "thanks",
          "ptBR":"obrigado"
        }
      },
      {
        "title": "TIA",
        "description": {
          "enUS": "thanks in advance",
          "ptBR":"obrigado antecipadamente"
        }
      },
      {
        "title": "TILII",
        "description": {
          "enUS": "tell it like it is",
          "ptBR":"diga como ela e"
        }
      },
      {
        "title": "TLK2UL8R",
        "description": {
          "enUS": "talk to you Iater",
          "ptBR":"falarei com voce depois"
        }
      },
      {
        "title": "TMI",
        "description": {
          "enUS": "too much information",
          "ptBR":"muita informacao"
        }
      },
      {
        "title": "TNT",
        "description": {
          "enUS": "'till next time",
          "ptBR":"ate a proxima vez"
        }
      },
      {
        "title": "TOPCA",
        "description": {
          "enUS": "'til our paths cross again.",
          "ptBR":"ate que os nossos caminhos se cruzem novamente"
        }
      },
      {
        "title": "TOY",
        "description": {
          "enUS": "thinking of;you",
          "ptBR":"pensando em voce"
        }
      },
      {
        "title": "TPTB",
        "description": {
          "enUS": "the powers that be",
          "ptBR":"os poderes de ser"
        }
      },
      {
        "title": "TTFN",
        "description": {
          "enUS": "ta ta for now",
          "ptBR":"obrigado novamente, obrigado novamente, por enquanto"
        }
      },
      {
        "title": "TTT",
        "description": {
          "enUS": "thought that too",
          "ptBR":"pensei que tambem"
        }
      },
      {
        "title": "TTYL",
        "description": {
          "enUS": "talk to you later",
          "ptBR":"falarei com voce mais tarde"
        }
      },
      {
        "title": "TU",
        "description": {
          "enUS": "thank you",
          "ptBR":"obrigado"
        }
      },
      {
        "title": "UW",
        "description": {
          "enUS": "you're welcome",
          "ptBR":"seja bem-vindo"
        }
      },
      {
        "title": "VBG",
        "description": {
          "enUS": "very big grin",
          "ptBR":"sorriso muito grande"
        }
      },
      {
        "title": "WB",
        "description": {
          "enUS": "welcome back",
          "ptBR":"seja bem-vindo de volta"
        }
      },
      {
        "title": "WDALYIC",
        "description": {
          "enUS": "who died and left you in charge?",
          "ptBR":"quem morreu e deixou voce no comando ?"
        }
      },
      {
        "title": "W_E",
        "description": {
          "enUS": "whatever",
          "ptBR":"seja o que for"
        }
      },
      {
        "title": "WFM",
        "description": {
          "enUS": "works for me",
          "ptBR":"funciona para mim"
        }
      },
      {
        "title": "WIBNI",
        "description": {
          "enUS": "wouldn't it be nice if",
          "ptBR":"nao seria bom se"
        }
      },
      {
        "title": "WTG",
        "description": {
          "enUS": "way to go",
          "ptBR":"cominho para percorrer"
        }
      },
      {
        "title": "WTGP",
        "description": {
          "enUS": "want to go private?",
          "ptBR":"quer ir privado?"
        }
      },
      {
        "title": "WTH",
        "description": {
          "enUS": "what/who the heck",
          "ptBR":"o que/ quem diabos"
        }
      },
      {
        "title": "WUF",
        "description": {
          "enUS": "where are you from?",
          "ptBR":"de onde voce e?"
        }
      },
      {
        "title": "WYSIWYG",
        "description": {
          "enUS": "what you see is what you get",
          "ptBR":"o que voce ve e o que voce tem"
        }
      },
      {
        "title": "YBS",
        "description": {
          "enUS": "you'll be sorry",
          "ptBR":"voce vai se arrepender"
        }
      },
      {
        "title": "YG",
        "description": {
          "enUS": "young gentleman",
          "ptBR":"jovem cavalheiro"
        }
      },
      {
        "title": "YL",
        "description": {
          "enUS": "young lady",
          "ptBR":"jovem ( feminino )"
        }
      },
      {
        "title": "YM",
        "description": {
          "enUS": "young man",
          "ptBR":"jovem ( masculino )"
        }
      },
    ];

  }

}
