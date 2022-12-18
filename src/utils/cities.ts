const cities = [
    {
        estadoid: 'AC',
        value: 'Acrelândia',
        label: 'Acrelândia',
    },
    {
        estadoid: 'AC',
        value: 'Assis Brasil',
        label: 'Assis Brasil',
    },
    {
        estadoid: 'AC',
        value: 'Brasiléia',
        label: 'Brasiléia',
    },
    {
        estadoid: 'AC',
        value: 'Bujari',
        label: 'Bujari',
    },
    {
        estadoid: 'AC',
        value: 'Capixaba',
        label: 'Capixaba',
    },
    {
        estadoid: 'AC',
        value: 'Cruzeiro do Sul',
        label: 'Cruzeiro do Sul',
    },
    {
        estadoid: 'AC',
        value: 'Epitaciolândia',
        label: 'Epitaciolândia',
    },
    {
        estadoid: 'AC',
        value: 'Feijó',
        label: 'Feijó',
    },
    {
        estadoid: 'AC',
        value: 'Jordão',
        label: 'Jordão',
    },
    {
        estadoid: 'AC',
        value: 'Mâncio Lima',
        label: 'Mâncio Lima',
    },
    {
        estadoid: 'AC',
        value: 'Manoel Urbano',
        label: 'Manoel Urbano',
    },
    {
        estadoid: 'AC',
        value: 'Marechal Thaumaturgo',
        label: 'Marechal Thaumaturgo',
    },
    {
        estadoid: 'AC',
        value: 'Plácido de Castro',
        label: 'Plácido de Castro',
    },
    {
        estadoid: 'AC',
        value: 'Porto Acre',
        label: 'Porto Acre',
    },
    {
        estadoid: 'AC',
        value: 'Porto Walter',
        label: 'Porto Walter',
    },
    {
        estadoid: 'AC',
        label: 'Rio Branco',
        value: 'Rio Branco',
    },
    {
        estadoid: 'AC',
        value: 'Rodrigues Alves',
        label: 'Rodrigues Alves',
    },
    {
        estadoid: 'AC',
        value: 'Santa Rosa do Purus',
        label: 'Santa Rosa do Purus',
    },
    {
        estadoid: 'AC',
        value: 'Sena Madureira',
        label: 'Sena Madureira',
    },
    {
        estadoid: 'AC',
        value: 'Senador Guiomard',
        label: 'Senador Guiomard',
    },
    {
        estadoid: 'AC',
        value: 'Tarauacá',
        label: 'Tarauacá',
    },
    {
        estadoid: 'AC',
        value: 'Xapuri',
        label: 'Xapuri',
    },
    {
        estadoid: 'AL',
        value: 'Água Branca',
        label: 'Água Branca',
    },
    {
        estadoid: 'AL',
        value: 'Anadia',
        label: 'Anadia',
    },
    {
        estadoid: 'AL',
        value: 'Arapiraca',
        label: 'Arapiraca',
    },
    {
        estadoid: 'AL',
        value: 'Atalaia',
        label: 'Atalaia',
    },
    {
        estadoid: 'AL',
        value: 'Barra de Santo Antônio',
        label: 'Barra de Santo Antônio',
    },
    {
        estadoid: 'AL',
        value: 'Barra de São Miguel',
        label: 'Barra de São Miguel',
    },
    {
        estadoid: 'AL',
        value: 'Batalha',
        label: 'Batalha',
    },
    {
        estadoid: 'AL',
        value: 'Belém',
        label: 'Belém',
    },
    {
        estadoid: 'AL',
        value: 'Belo Monte',
        label: 'Belo Monte',
    },
    {
        estadoid: 'AL',
        value: 'Boca da Mata',
        label: 'Boca da Mata',
    },
    {
        estadoid: 'AL',
        value: 'Branquinha',
        label: 'Branquinha',
    },
    {
        estadoid: 'AL',
        value: 'Cacimbinhas',
        label: 'Cacimbinhas',
    },
    {
        estadoid: 'AL',
        value: 'Cajueiro',
        label: 'Cajueiro',
    },
    {
        estadoid: 'AL',
        value: 'Campestre',
        label: 'Campestre',
    },
    {
        estadoid: 'AL',
        value: 'Campo Alegre',
        label: 'Campo Alegre',
    },
    {
        estadoid: 'AL',
        value: 'Campo Grande',
        label: 'Campo Grande',
    },
    {
        estadoid: 'AL',
        value: 'Canapi',
        label: 'Canapi',
    },
    {
        estadoid: 'AL',
        value: 'Capela',
        label: 'Capela',
    },
    {
        estadoid: 'AL',
        value: 'Carneiros',
        label: 'Carneiros',
    },
    {
        estadoid: 'AL',
        value: 'Chã Preta',
        label: 'Chã Preta',
    },
    {
        estadoid: 'AL',
        value: 'Coité do Nóia',
        label: 'Coité do Nóia',
    },
    {
        estadoid: 'AL',
        value: 'Colônia Leopoldina',
        label: 'Colônia Leopoldina',
    },
    {
        estadoid: 'AL',
        value: 'Coqueiro Seco',
        label: 'Coqueiro Seco',
    },
    {
        estadoid: 'AL',
        value: 'Coruripe',
        label: 'Coruripe',
    },
    {
        estadoid: 'AL',
        value: 'Craíbas\',  \'Delmiro Gouveia',
        label: 'Craíbas\',  \'Delmiro Gouveia',
    },
    {
        estadoid: 'AL',
        value: 'Dois Riachos',
        label: 'Dois Riachos',
    },
    {
        estadoid: 'AL',
        value: 'Estrela de Alagoas',
        label: 'Estrela de Alagoas',
    },
    {
        estadoid: 'AL',
        value: 'Feira Grande',
        label: 'Feira Grande',
    },
    {
        estadoid: 'AL',
        value: 'Feliz Deserto',
        label: 'Feliz Deserto',
    },
    {
        estadoid: 'AL',
        value: 'Flexeiras',
        label: 'Flexeiras',
    },
    {
        estadoid: 'AL',
        value: 'Girau do Ponciano',
        label: 'Girau do Ponciano',
    },
    {
        estadoid: 'AL',
        value: 'Ibateguara',
        label: 'Ibateguara',
    },
    {
        estadoid: 'AL',
        value: 'Igaci',
        label: 'Igaci',
    },
    {
        estadoid: 'AL',
        value: 'Igreja Nova',
        label: 'Igreja Nova',
    },
    {
        estadoid: 'AL',
        value: 'Inhapi',
        label: 'Inhapi',
    },
    {
        estadoid: 'AL',
        value: 'Jacaré dos Homens',
        label: 'Jacaré dos Homens',
    },
    {
        estadoid: 'AL',
        value: 'Jacuípe',
        label: 'Jacuípe',
    },
    {
        estadoid: 'AL',
        value: 'Japaratinga',
        label: 'Japaratinga',
    },
    {
        estadoid: 'AL',
        value: 'Jaramataia',
        label: 'Jaramataia',
    },
    {
        estadoid: 'AL',
        value: 'Jequiá da Praia',
        label: 'Jequiá da Praia',
    },
    {
        estadoid: 'AL',
        value: 'Joaquim Gomes',
        label: 'Joaquim Gomes',
    },
    {
        estadoid: 'AL',
        value: 'Jundiá',
        label: 'Jundiá',
    },
    {
        estadoid: 'AL',
        value: 'Junqueiro',
        label: 'Junqueiro',
    },
    {
        estadoid: 'AL',
        value: 'Lagoa da Canoa',
        label: 'Lagoa da Canoa',
    },
    {
        estadoid: 'AL',
        value: 'Limoeiro de Anadia',
        label: 'Limoeiro de Anadia',
    },
    {
        estadoid: 'AL',
        label: 'Maceió',
        value: 'Maceió',
    },
    {
        estadoid: 'AL',
        value: 'Major Isidoro',
        label: 'Major Isidoro',
    },
    {
        estadoid: 'AL',
        value: 'Mar Vermelho',
        label: 'Mar Vermelho',
    },
    {
        estadoid: 'AL',
        value: 'Maragogi',
        label: 'Maragogi',
    },
    {
        estadoid: 'AL',
        value: 'Maravilha',
        label: 'Maravilha',
    },
    {
        estadoid: 'AL',
        value: 'Marechal Deodoro',
        label: 'Marechal Deodoro',
    },
    {
        estadoid: 'AL',
        value: 'Maribondo',
        label: 'Maribondo',
    },
    {
        estadoid: 'AL',
        value: 'Mata Grande',
        label: 'Mata Grande',
    },
    {
        estadoid: 'AL',
        value: 'Matriz de Camaragibe',
        label: 'Matriz de Camaragibe',
    },
    {
        estadoid: 'AL',
        value: 'Messias',
        label: 'Messias',
    },
    {
        estadoid: 'AL',
        value: 'Minador do Negrão',
        label: 'Minador do Negrão',
    },
    {
        estadoid: 'AL',
        value: 'Monteirópolis',
        label: 'Monteirópolis',
    },
    {
        estadoid: 'AL',
        value: 'Murici',
        label: 'Murici',
    },
    {
        estadoid: 'AL',
        value: 'Novo Lino',
        label: 'Novo Lino',
    },
    {
        estadoid: 'AL',
        value: 'Olho d\'Água das Flores',
        label: 'Olho d\'Água das Flores',
    },
    {
        estadoid: 'AL',
        value: 'Olho d\'Água do Casado',
        label: 'Olho d\'Água do Casado',
    },
    {
        estadoid: 'AL',
        value: 'Olho d\'Água Grande',
        label: 'Olho d\'Água Grande',
    },
    {
        estadoid: 'AL',
        value: 'Olivença',
        label: 'Olivença',
    },
    {
        estadoid: 'AL',
        value: 'Ouro Branco',
        label: 'Ouro Branco',
    },
    {
        estadoid: 'AL',
        value: 'Palestina',
        label: 'Palestina',
    },
    {
        estadoid: 'AL',
        value: 'Palmeira dos Índios',
        label: 'Palmeira dos Índios',
    },
    {
        estadoid: 'AL',
        value: 'Pão de Açúcar',
        label: 'Pão de Açúcar',
    },
    {
        estadoid: 'AL',
        value: 'Pariconha',
        label: 'Pariconha',
    },
    {
        estadoid: 'AL',
        value: 'Paripueira',
        label: 'Paripueira',
    },
    {
        estadoid: 'AL',
        value: 'Passo de Camaragibe',
        label: 'Passo de Camaragibe',
    },
    {
        estadoid: 'AL',
        value: 'Paulo Jacinto\', \'Penedo',
        label: 'Paulo Jacinto\', \'Penedo',
    },
    {
        estadoid: 'AL',
        value: 'Piaçabuçu',
        label: 'Piaçabuçu',
    },
    {
        estadoid: 'AL',
        value: 'Pilar',
        label: 'Pilar',
    },
    {
        estadoid: 'AL',
        value: 'Pindoba',
        label: 'Pindoba',
    },
    {
        estadoid: 'AL',
        value: 'Piranhas',
        label: 'Piranhas',
    },
    {
        estadoid: 'AL',
        value: 'Poço das Trincheiras',
        label: 'Poço das Trincheiras',
    },
    {
        estadoid: 'AL',
        value: 'Porto Calvo',
        label: 'Porto Calvo',
    },
    {
        estadoid: 'AL',
        value: 'Porto de Pedras',
        label: 'Porto de Pedras',
    },
    {
        estadoid: 'AL',
        value: 'Porto Real do Colégio',
        label: 'Porto Real do Colégio',
    },
    {
        estadoid: 'AL',
        value: 'Quebrangulo',
        label: 'Quebrangulo',
    },
    {
        estadoid: 'AL',
        value: 'Rio Largo',
        label: 'Rio Largo',
    },
    {
        estadoid: 'AL',
        value: 'Roteiro',
        label: 'Roteiro',
    },
    {
        estadoid: 'AL',
        value: 'Santa Luzia do Norte',
        label: 'Santa Luzia do Norte',
    },
    {
        estadoid: 'AL',
        value: 'Santana do Ipanema',
        label: 'Santana do Ipanema',
    },
    {
        estadoid: 'AL',
        value: 'Santana do Mundaú',
        label: 'Santana do Mundaú',
    },
    {
        estadoid: 'AL',
        value: 'São Brás',
        label: 'São Brás',
    },
    {
        estadoid: 'AL',
        value: 'São José da Laje',
        label: 'São José da Laje',
    },
    {
        estadoid: 'AL',
        value: 'São José da Tapera',
        label: 'São José da Tapera',
    },
    {
        estadoid: 'AL',
        value: 'São Luís do Quitunde',
        label: 'São Luís do Quitunde',
    },
    {
        estadoid: 'AL',
        value: 'São Miguel dos Campos',
        label: 'São Miguel dos Campos',
    },
    {
        estadoid: 'AL',
        value: 'São Miguel dos Milagres',
        label: 'São Miguel dos Milagres',
    },
    {
        estadoid: 'AL',
        value: 'São Sebastião',
        label: 'São Sebastião',
    },
    {
        estadoid: 'AL',
        value: 'Satuba',
        label: 'Satuba',
    },
    {
        estadoid: 'AL',
        value: 'Senador Rui Palmeira',
        label: 'Senador Rui Palmeira',
    },
    {
        estadoid: 'AL',
        value: 'Tanque d\'Arca',
        label: 'Tanque d\'Arca',
    },
    {
        estadoid: 'AL',
        value: 'Taquarana',
        label: 'Taquarana',
    },
    {
        estadoid: 'AL',
        value: 'Teotônio Vilela',
        label: 'Teotônio Vilela',
    },
    {
        estadoid: 'AL',
        value: 'Traipu',
        label: 'Traipu',
    },
    {
        estadoid: 'AL',
        value: 'União dos Palmares',
        label: 'União dos Palmares',
    },
    {
        estadoid: 'AL',
        value: 'Viçosa',
        label: 'Viçosa',
    },
    {
        estadoid: 'AM',
        value: 'Alvarães',
        label: 'Alvarães',
    },
    {
        estadoid: 'AM',
        value: 'Amaturá',
        label: 'Amaturá',
    },
    {
        estadoid: 'AM',
        value: 'Anamã',
        label: 'Anamã',
    },
    {
        estadoid: 'AM',
        value: 'Anori',
        label: 'Anori',
    },
    {
        estadoid: 'AM',
        value: 'Apuí',
        label: 'Apuí',
    },
    {
        estadoid: 'AM',
        value: 'Atalaia do Norte',
        label: 'Atalaia do Norte',
    },
    {
        estadoid: 'AM',
        value: 'Autazes',
        label: 'Autazes',
    },
    {
        estadoid: 'AM',
        value: 'Barcelos',
        label: 'Barcelos',
    },
    {
        estadoid: 'AM',
        value: 'Barreirinha',
        label: 'Barreirinha',
    },
    {
        estadoid: 'AM',
        value: 'Benjamin Constant',
        label: 'Benjamin Constant',
    },
    {
        estadoid: 'AM',
        value: 'Beruri',
        label: 'Beruri',
    },
    {
        estadoid: 'AM',
        value: 'Boa Vista do Ramos',
        label: 'Boa Vista do Ramos',
    },
    {
        estadoid: 'AM',
        value: 'Boca do Acre',
        label: 'Boca do Acre',
    },
    {
        estadoid: 'AM',
        value: 'Borba',
        label: 'Borba',
    },
    {
        estadoid: 'AM',
        value: 'Caapiranga',
        label: 'Caapiranga',
    },
    {
        estadoid: 'AM',
        value: 'Canutama',
        label: 'Canutama',
    },
    {
        estadoid: 'AM',
        value: 'Carauari',
        label: 'Carauari',
    },
    {
        estadoid: 'AM',
        value: 'Careiro',
        label: 'Careiro',
    },
    {
        estadoid: 'AM',
        value: 'Careiro da Várzea',
        label: 'Careiro da Várzea',
    },
    {
        estadoid: 'AM',
        value: 'Coari',
        label: 'Coari',
    },
    {
        estadoid: 'AM',
        value: 'Codajás',
        label: 'Codajás',
    },
    {
        estadoid: 'AM',
        value: 'Eirunepé',
        label: 'Eirunepé',
    },
    {
        estadoid: 'AM',
        value: 'Envira',
        label: 'Envira',
    },
    {
        estadoid: 'AM',
        value: 'Fonte Boa',
        label: 'Fonte Boa',
    },
    {
        estadoid: 'AM',
        value: 'Guajará',
        label: 'Guajará',
    },
    {
        estadoid: 'AM',
        value: 'Humaitá',
        label: 'Humaitá',
    },
    {
        estadoid: 'AM',
        value: 'Ipixuna',
        label: 'Ipixuna',
    },
    {
        estadoid: 'AM',
        value: 'Iranduba',
        label: 'Iranduba',
    },
    {
        estadoid: 'AM',
        value: 'Itacoatiara',
        label: 'Itacoatiara',
    },
    {
        estadoid: 'AM',
        value: 'Itamarati',
        label: 'Itamarati',
    },
    {
        estadoid: 'AM',
        value: 'Itapiranga',
        label: 'Itapiranga',
    },
    {
        estadoid: 'AM',
        value: 'Japurá',
        label: 'Japurá',
    },
    {
        estadoid: 'AM',
        value: 'Juruá',
        label: 'Juruá',
    },
    {
        estadoid: 'AM',
        value: 'Jutaí',
        label: 'Jutaí',
    },
    {
        estadoid: 'AM',
        value: 'Lábrea',
        label: 'Lábrea',
    },
    {
        estadoid: 'AM',
        value: 'Manacapuru',
        label: 'Manacapuru',
    },
    {
        estadoid: 'AM',
        value: 'Manaquiri',
        label: 'Manaquiri',
    },
    {
        estadoid: 'AM',
        label: 'Manaus',
        value: 'Manaus',
    },
    {
        estadoid: 'AM',
        value: 'Manicoré',
        label: 'Manicoré',
    },
    {
        estadoid: 'AM',
        value: 'Maraã',
        label: 'Maraã',
    },
    {
        estadoid: 'AM',
        value: 'Maués',
        label: 'Maués',
    },
    {
        estadoid: 'AM',
        value: 'Nhamundá',
        label: 'Nhamundá',
    },
    {
        estadoid: 'AM',
        value: 'Nova Olinda do Norte',
        label: 'Nova Olinda do Norte',
    },
    {
        estadoid: 'AM',
        value: 'Novo Airão',
        label: 'Novo Airão',
    },
    {
        estadoid: 'AM',
        value: 'Novo Aripuanã',
        label: 'Novo Aripuanã',
    },
    {
        estadoid: 'AM',
        value: 'Parintins',
        label: 'Parintins',
    },
    {
        estadoid: 'AM',
        value: 'Pauini',
        label: 'Pauini',
    },
    {
        estadoid: 'AM',
        value: 'Presidente Figueiredo',
        label: 'Presidente Figueiredo',
    },
    {
        estadoid: 'AM',
        value: 'Rio Preto da Eva',
        label: 'Rio Preto da Eva',
    },
    {
        estadoid: 'AM',
        value: 'Santa Isabel do Rio Negro',
        label: 'Santa Isabel do Rio Negro',
    },
    {
        estadoid: 'AM',
        value: 'Santo Antônio do Içá',
        label: 'Santo Antônio do Içá',
    },
    {
        estadoid: 'AM',
        value: 'São Gabriel da Cachoeira',
        label: 'São Gabriel da Cachoeira',
    },
    {
        estadoid: 'AM',
        value: 'São Paulo de Olivença',
        label: 'São Paulo de Olivença',
    },
    {
        estadoid: 'AM',
        value: 'São Sebastião do Uatumã',
        label: 'São Sebastião do Uatumã',
    },
    {
        estadoid: 'AM',
        value: 'Silves',
        label: 'Silves',
    },
    {
        estadoid: 'AM',
        value: 'Tabatinga',
        label: 'Tabatinga',
    },
    {
        estadoid: 'AM',
        value: 'Tapauá',
        label: 'Tapauá',
    },
    {
        estadoid: 'AM',
        value: 'Tefé',
        label: 'Tefé',
    },
    {
        estadoid: 'AM',
        value: 'Tonantins',
        label: 'Tonantins',
    },
    {
        estadoid: 'AM',
        value: 'Uarini',
        label: 'Uarini',
    },
    {
        estadoid: 'AM',
        value: 'Urucará',
        label: 'Urucará',
    },
    {
        estadoid: 'AM',
        value: 'Urucurituba',
        label: 'Urucurituba',
    },
    {
        estadoid: 'AP',
        value: 'Amapá',
        label: 'Amapá',
    },
    {
        estadoid: 'AP',
        value: 'Calçoene',
        label: 'Calçoene',
    },
    {
        estadoid: 'AP',
        value: 'Cutias',
        label: 'Cutias',
    },
    {
        estadoid: 'AP',
        value: 'Ferreira Gomes',
        label: 'Ferreira Gomes',
    },
    {
        estadoid: 'AP',
        value: 'Itaubal',
        label: 'Itaubal',
    },
    {
        estadoid: 'AP',
        value: 'Laranjal do Jari',
        label: 'Laranjal do Jari',
    },
    {
        estadoid: 'AP',
        label: 'Macapá',
        value: 'Macapá',
    },
    {
        estadoid: 'AP',
        value: 'Mazagão',
        label: 'Mazagão',
    },
    {
        estadoid: 'AP',
        value: 'Oiapoque',
        label: 'Oiapoque',
    },
    {
        estadoid: 'AP',
        value: 'Pedra Branca do Amapari',
        label: 'Pedra Branca do Amapari',
    },
    {
        estadoid: 'AP',
        value: 'Porto Grande',
        label: 'Porto Grande',
    },
    {
        estadoid: 'AP',
        value: 'Pracuúba',
        label: 'Pracuúba',
    },
    {
        estadoid: 'AP',
        value: 'Santana',
        label: 'Santana',
    },
    {
        estadoid: 'AP',
        value: 'Serra do Navio',
        label: 'Serra do Navio',
    },
    {
        estadoid: 'AP',
        value: 'Tartarugalzinho',
        label: 'Tartarugalzinho',
    },
    {
        estadoid: 'AP',
        value: 'Vitória do Jari',
        label: 'Vitória do Jari',
    },
    {
        estadoid: 'BA',
        value: 'Abaíra',
        label: 'Abaíra',
    },
    {
        estadoid: 'BA',
        value: 'Abaré',
        label: 'Abaré',
    },
    {
        estadoid: 'BA',
        value: 'Acajutiba',
        label: 'Acajutiba',
    },
    {
        estadoid: 'BA',
        value: 'Adustina',
        label: 'Adustina',
    },
    {
        estadoid: 'BA',
        value: 'Água Fria',
        label: 'Água Fria',
    },
    {
        estadoid: 'BA',
        value: 'Aiquara',
        label: 'Aiquara',
    },
    {
        estadoid: 'BA',
        value: 'Alagoinhas',
        label: 'Alagoinhas',
    },
    {
        estadoid: 'BA',
        value: 'Alcobaça',
        label: 'Alcobaça',
    },
    {
        estadoid: 'BA',
        value: 'Almadina',
        label: 'Almadina',
    },
    {
        estadoid: 'BA',
        value: 'Amargosa',
        label: 'Amargosa',
    },
    {
        estadoid: 'BA',
        value: 'Amélia Rodrigues',
        label: 'Amélia Rodrigues',
    },
    {
        estadoid: 'BA',
        value: 'América Dourada',
        label: 'América Dourada',
    },
    {
        estadoid: 'BA',
        value: 'Anagé',
        label: 'Anagé',
    },
    {
        estadoid: 'BA',
        value: 'Andaraí',
        label: 'Andaraí',
    },
    {
        estadoid: 'BA',
        value: 'Andorinha',
        label: 'Andorinha',
    },
    {
        estadoid: 'BA',
        value: 'Angical',
        label: 'Angical',
    },
    {
        estadoid: 'BA',
        value: 'Anguera',
        label: 'Anguera',
    },
    {
        estadoid: 'BA',
        value: 'Antas',
        label: 'Antas',
    },
    {
        estadoid: 'BA',
        value: 'Antônio Cardoso',
        label: 'Antônio Cardoso',
    },
    {
        estadoid: 'BA',
        value: 'Antônio Gonçalves',
        label: 'Antônio Gonçalves',
    },
    {
        estadoid: 'BA',
        value: 'Aporá',
        label: 'Aporá',
    },
    {
        estadoid: 'BA',
        value: 'Apuarema',
        label: 'Apuarema',
    },
    {
        estadoid: 'BA',
        value: 'Araças',
        label: 'Araças',
    },
    {
        estadoid: 'BA',
        value: 'Aracatu',
        label: 'Aracatu',
    },
    {
        estadoid: 'BA',
        value: 'Araci',
        label: 'Araci',
    },
    {
        estadoid: 'BA',
        value: 'Aramari',
        label: 'Aramari',
    },
    {
        estadoid: 'BA',
        value: 'Arataca',
        label: 'Arataca',
    },
    {
        estadoid: 'BA',
        value: 'Aratuípe',
        label: 'Aratuípe',
    },
    {
        estadoid: 'BA',
        value: 'Aurelino Leal',
        label: 'Aurelino Leal',
    },
    {
        estadoid: 'BA',
        value: 'Baianópolis',
        label: 'Baianópolis',
    },
    {
        estadoid: 'BA',
        value: 'Baixa Grande',
        label: 'Baixa Grande',
    },
    {
        estadoid: 'BA',
        value: 'Banzaê',
        label: 'Banzaê',
    },
    {
        estadoid: 'BA',
        value: 'Barra',
        label: 'Barra',
    },
    {
        estadoid: 'BA',
        value: 'Barra da Estiva',
        label: 'Barra da Estiva',
    },
    {
        estadoid: 'BA',
        value: 'Barra do Choça',
        label: 'Barra do Choça',
    },
    {
        estadoid: 'BA',
        value: 'Barra do Mendes',
        label: 'Barra do Mendes',
    },
    {
        estadoid: 'BA',
        value: 'Barra do Rocha',
        label: 'Barra do Rocha',
    },
    {
        estadoid: 'BA',
        value: 'Barreiras',
        label: 'Barreiras',
    },
    {
        estadoid: 'BA',
        value: 'Barro Alto',
        label: 'Barro Alto',
    },
    {
        estadoid: 'BA',
        value: 'Barrocas',
        label: 'Barrocas',
    },
    {
        estadoid: 'BA',
        value: 'Barro Preto',
        label: 'Barro Preto',
    },
    {
        estadoid: 'BA',
        value: 'Belmonte',
        label: 'Belmonte',
    },
    {
        estadoid: 'BA',
        value: 'Belo Campo',
        label: 'Belo Campo',
    },
    {
        estadoid: 'BA',
        value: 'Biritinga',
        label: 'Biritinga',
    },
    {
        estadoid: 'BA',
        value: 'Boa Nova',
        label: 'Boa Nova',
    },
    {
        estadoid: 'BA',
        value: 'Boa Vista do Tupim',
        label: 'Boa Vista do Tupim',
    },
    {
        estadoid: 'BA',
        value: 'Bom Jesus da Lapa',
        label: 'Bom Jesus da Lapa',
    },
    {
        estadoid: 'BA',
        value: 'Bom Jesus da Serra',
        label: 'Bom Jesus da Serra',
    },
    {
        estadoid: 'BA',
        value: 'Boninal',
        label: 'Boninal',
    },
    {
        estadoid: 'BA',
        value: 'Bonito',
        label: 'Bonito',
    },
    {
        estadoid: 'BA',
        value: 'Boquira',
        label: 'Boquira',
    },
    {
        estadoid: 'BA',
        value: 'Botuporã',
        label: 'Botuporã',
    },
    {
        estadoid: 'BA',
        value: 'Brejões',
        label: 'Brejões',
    },
    {
        estadoid: 'BA',
        value: 'Brejolândia',
        label: 'Brejolândia',
    },
    {
        estadoid: 'BA',
        value: 'Brotas de Macaúbas',
        label: 'Brotas de Macaúbas',
    },
    {
        estadoid: 'BA',
        value: 'Brumado',
        label: 'Brumado',
    },
    {
        estadoid: 'BA',
        value: 'Buerarema',
        label: 'Buerarema',
    },
    {
        estadoid: 'BA',
        value: 'Buritirama',
        label: 'Buritirama',
    },
    {
        estadoid: 'BA',
        value: 'Caatiba',
        label: 'Caatiba',
    },
    {
        estadoid: 'BA',
        value: 'Cabaceiras do Paraguaçu',
        label: 'Cabaceiras do Paraguaçu',
    },
    {
        estadoid: 'BA',
        value: 'Cachoeira',
        label: 'Cachoeira',
    },
    {
        estadoid: 'BA',
        value: 'Caculé',
        label: 'Caculé',
    },
    {
        estadoid: 'BA',
        value: 'Caém',
        label: 'Caém',
    },
    {
        estadoid: 'BA',
        value: 'Caetanos',
        label: 'Caetanos',
    },
    {
        estadoid: 'BA',
        value: 'Caetité',
        label: 'Caetité',
    },
    {
        estadoid: 'BA',
        value: 'Cafarnaum',
        label: 'Cafarnaum',
    },
    {
        estadoid: 'BA',
        value: 'Cairu',
        label: 'Cairu',
    },
    {
        estadoid: 'BA',
        value: 'Caldeirão Grande',
        label: 'Caldeirão Grande',
    },
    {
        estadoid: 'BA',
        value: 'Camacan',
        label: 'Camacan',
    },
    {
        estadoid: 'BA',
        value: 'Camaçari',
        label: 'Camaçari',
    },
    {
        estadoid: 'BA',
        value: 'Camamu',
        label: 'Camamu',
    },
    {
        estadoid: 'BA',
        value: 'Campo Alegre de Lourdes',
        label: 'Campo Alegre de Lourdes',
    },
    {
        estadoid: 'BA',
        value: 'Campo Formoso',
        label: 'Campo Formoso',
    },
    {
        estadoid: 'BA',
        value: 'Canápolis',
        label: 'Canápolis',
    },
    {
        estadoid: 'BA',
        value: 'Canarana',
        label: 'Canarana',
    },
    {
        estadoid: 'BA',
        value: 'Canavieiras',
        label: 'Canavieiras',
    },
    {
        estadoid: 'BA',
        value: 'Candeal',
        label: 'Candeal',
    },
    {
        estadoid: 'BA',
        value: 'Candeias',
        label: 'Candeias',
    },
    {
        estadoid: 'BA',
        value: 'Candiba',
        label: 'Candiba',
    },
    {
        estadoid: 'BA',
        value: 'Cândido Sales',
        label: 'Cândido Sales',
    },
    {
        estadoid: 'BA',
        value: 'Cansanção',
        label: 'Cansanção',
    },
    {
        estadoid: 'BA',
        value: 'Canudos',
        label: 'Canudos',
    },
    {
        estadoid: 'BA',
        value: 'Capela do Alto Alegre',
        label: 'Capela do Alto Alegre',
    },
    {
        estadoid: 'BA',
        value: 'Capim Grosso',
        label: 'Capim Grosso',
    },
    {
        estadoid: 'BA',
        value: 'Caraíbas',
        label: 'Caraíbas',
    },
    {
        estadoid: 'BA',
        value: 'Caravelas',
        label: 'Caravelas',
    },
    {
        estadoid: 'BA',
        value: 'Cardeal da Silva',
        label: 'Cardeal da Silva',
    },
    {
        estadoid: 'BA',
        value: 'Carinhanha',
        label: 'Carinhanha',
    },
    {
        estadoid: 'BA',
        value: 'Casa Nova',
        label: 'Casa Nova',
    },
    {
        estadoid: 'BA',
        value: 'Castro Alves',
        label: 'Castro Alves',
    },
    {
        estadoid: 'BA',
        value: 'Catolândia',
        label: 'Catolândia',
    },
    {
        estadoid: 'BA',
        value: 'Catu',
        label: 'Catu',
    },
    {
        estadoid: 'BA',
        value: 'Caturama',
        label: 'Caturama',
    },
    {
        estadoid: 'BA',
        value: 'Central',
        label: 'Central',
    },
    {
        estadoid: 'BA',
        value: 'Chorrochó',
        label: 'Chorrochó',
    },
    {
        estadoid: 'BA',
        value: 'Cícero Dantas',
        label: 'Cícero Dantas',
    },
    {
        estadoid: 'BA',
        value: 'Cipó',
        label: 'Cipó',
    },
    {
        estadoid: 'BA',
        value: 'Coaraci',
        label: 'Coaraci',
    },
    {
        estadoid: 'BA',
        value: 'Cocos',
        label: 'Cocos',
    },
    {
        estadoid: 'BA',
        value: 'Conceição da Feira',
        label: 'Conceição da Feira',
    },
    {
        estadoid: 'BA',
        value: 'Conceição do Almeida',
        label: 'Conceição do Almeida',
    },
    {
        estadoid: 'BA',
        value: 'Conceição do Coité',
        label: 'Conceição do Coité',
    },
    {
        estadoid: 'BA',
        value: 'Conceição do Jacuípe',
        label: 'Conceição do Jacuípe',
    },
    {
        estadoid: 'BA',
        value: 'Conde',
        label: 'Conde',
    },
    {
        estadoid: 'BA',
        value: 'Condeúba',
        label: 'Condeúba',
    },
    {
        estadoid: 'BA',
        value: 'Contendas do Sincorá',
        label: 'Contendas do Sincorá',
    },
    {
        estadoid: 'BA',
        value: 'Coração de Maria',
        label: 'Coração de Maria',
    },
    {
        estadoid: 'BA',
        value: 'Cordeiros',
        label: 'Cordeiros',
    },
    {
        estadoid: 'BA',
        value: 'Coribe',
        label: 'Coribe',
    },
    {
        estadoid: 'BA',
        value: 'Coronel João Sá',
        label: 'Coronel João Sá',
    },
    {
        estadoid: 'BA',
        value: 'Correntina',
        label: 'Correntina',
    },
    {
        estadoid: 'BA',
        value: 'Cotegipe',
        label: 'Cotegipe',
    },
    {
        estadoid: 'BA',
        value: 'Cravolândia',
        label: 'Cravolândia',
    },
    {
        estadoid: 'BA',
        value: 'Crisópolis',
        label: 'Crisópolis',
    },
    {
        estadoid: 'BA',
        value: 'Cristópolis',
        label: 'Cristópolis',
    },
    {
        estadoid: 'BA',
        value: 'Cruz das Almas',
        label: 'Cruz das Almas',
    },
    {
        estadoid: 'BA',
        value: 'Curaçá',
        label: 'Curaçá',
    },
    {
        estadoid: 'BA',
        value: 'Dário Meira',
        label: 'Dário Meira',
    },
    {
        estadoid: 'BA',
        value: 'Dias d\'Ávila',
        label: 'Dias d\'Ávila',
    },
    {
        estadoid: 'BA',
        value: 'Dom Basílio',
        label: 'Dom Basílio',
    },
    {
        estadoid: 'BA',
        value: 'Dom Macedo Costa',
        label: 'Dom Macedo Costa',
    },
    {
        estadoid: 'BA',
        value: 'Elísio Medrado',
        label: 'Elísio Medrado',
    },
    {
        estadoid: 'BA',
        value: 'Encruzilhada',
        label: 'Encruzilhada',
    },
    {
        estadoid: 'BA',
        value: 'Entre Rios',
        label: 'Entre Rios',
    },
    {
        estadoid: 'BA',
        value: 'Érico Cardoso',
        label: 'Érico Cardoso',
    },
    {
        estadoid: 'BA',
        value: 'Esplanada',
        label: 'Esplanada',
    },
    {
        estadoid: 'BA',
        value: 'Euclides da Cunha',
        label: 'Euclides da Cunha',
    },
    {
        estadoid: 'BA',
        value: 'Eunápolis',
        label: 'Eunápolis',
    },
    {
        estadoid: 'BA',
        value: 'Fátima',
        label: 'Fátima',
    },
    {
        estadoid: 'BA',
        value: 'Feira da Mata',
        label: 'Feira da Mata',
    },
    {
        estadoid: 'BA',
        value: 'Feira de Santana',
        label: 'Feira de Santana',
    },
    {
        estadoid: 'BA',
        value: 'Filadélfia',
        label: 'Filadélfia',
    },
    {
        estadoid: 'BA',
        value: 'Firmino Alves',
        label: 'Firmino Alves',
    },
    {
        estadoid: 'BA',
        value: 'Floresta Azul',
        label: 'Floresta Azul',
    },
    {
        estadoid: 'BA',
        value: 'Formosa do Rio Preto',
        label: 'Formosa do Rio Preto',
    },
    {
        estadoid: 'BA',
        value: 'Gandu',
        label: 'Gandu',
    },
    {
        estadoid: 'BA',
        value: 'Gavião',
        label: 'Gavião',
    },
    {
        estadoid: 'BA',
        value: 'Gentio do Ouro',
        label: 'Gentio do Ouro',
    },
    {
        estadoid: 'BA',
        value: 'Glória',
        label: 'Glória',
    },
    {
        estadoid: 'BA',
        value: 'Gongogi',
        label: 'Gongogi',
    },
    {
        estadoid: 'BA',
        value: 'Governador Mangabeira',
        label: 'Governador Mangabeira',
    },
    {
        estadoid: 'BA',
        value: 'Guajeru',
        label: 'Guajeru',
    },
    {
        estadoid: 'BA',
        value: 'Guanambi',
        label: 'Guanambi',
    },
    {
        estadoid: 'BA',
        value: 'Guaratinga',
        label: 'Guaratinga',
    },
    {
        estadoid: 'BA',
        value: 'Heliópolis',
        label: 'Heliópolis',
    },
    {
        estadoid: 'BA',
        value: 'Iaçu',
        label: 'Iaçu',
    },
    {
        estadoid: 'BA',
        value: 'Ibiassucê',
        label: 'Ibiassucê',
    },
    {
        estadoid: 'BA',
        value: 'Ibicaraí',
        label: 'Ibicaraí',
    },
    {
        estadoid: 'BA',
        value: 'Ibicoara',
        label: 'Ibicoara',
    },
    {
        estadoid: 'BA',
        value: 'Ibicuí',
        label: 'Ibicuí',
    },
    {
        estadoid: 'BA',
        value: 'Ibipeba',
        label: 'Ibipeba',
    },
    {
        estadoid: 'BA',
        value: 'Ibipitanga',
        label: 'Ibipitanga',
    },
    {
        estadoid: 'BA',
        value: 'Ibiquera',
        label: 'Ibiquera',
    },
    {
        estadoid: 'BA',
        value: 'Ibirapitanga',
        label: 'Ibirapitanga',
    },
    {
        estadoid: 'BA',
        value: 'Ibirapuã',
        label: 'Ibirapuã',
    },
    {
        estadoid: 'BA',
        value: 'Ibirataia',
        label: 'Ibirataia',
    },
    {
        estadoid: 'BA',
        value: 'Ibitiara',
        label: 'Ibitiara',
    },
    {
        estadoid: 'BA',
        value: 'Ibititá',
        label: 'Ibititá',
    },
    {
        estadoid: 'BA',
        value: 'Ibotirama',
        label: 'Ibotirama',
    },
    {
        estadoid: 'BA',
        value: 'Ichu',
        label: 'Ichu',
    },
    {
        estadoid: 'BA',
        value: 'Igaporã',
        label: 'Igaporã',
    },
    {
        estadoid: 'BA',
        value: 'Igrapiúna',
        label: 'Igrapiúna',
    },
    {
        estadoid: 'BA',
        value: 'Iguaí',
        label: 'Iguaí',
    },
    {
        estadoid: 'BA',
        value: 'Ilhéus',
        label: 'Ilhéus',
    },
    {
        estadoid: 'BA',
        value: 'Inhambupe',
        label: 'Inhambupe',
    },
    {
        estadoid: 'BA',
        value: 'Ipecaetá',
        label: 'Ipecaetá',
    },
    {
        estadoid: 'BA',
        value: 'Ipiaú',
        label: 'Ipiaú',
    },
    {
        estadoid: 'BA',
        value: 'Ipirá',
        label: 'Ipirá',
    },
    {
        estadoid: 'BA',
        value: 'Ipupiara',
        label: 'Ipupiara',
    },
    {
        estadoid: 'BA',
        value: 'Irajuba',
        label: 'Irajuba',
    },
    {
        estadoid: 'BA',
        value: 'Iramaia',
        label: 'Iramaia',
    },
    {
        estadoid: 'BA',
        value: 'Iraquara',
        label: 'Iraquara',
    },
    {
        estadoid: 'BA',
        value: 'Irará',
        label: 'Irará',
    },
    {
        estadoid: 'BA',
        value: 'Irecê',
        label: 'Irecê',
    },
    {
        estadoid: 'BA',
        value: 'Itabela',
        label: 'Itabela',
    },
    {
        estadoid: 'BA',
        value: 'Itaberaba',
        label: 'Itaberaba',
    },
    {
        estadoid: 'BA',
        value: 'Itabuna',
        label: 'Itabuna',
    },
    {
        estadoid: 'BA',
        value: 'Itacaré',
        label: 'Itacaré',
    },
    {
        estadoid: 'BA',
        value: 'Itaeté',
        label: 'Itaeté',
    },
    {
        estadoid: 'BA',
        value: 'Itagi',
        label: 'Itagi',
    },
    {
        estadoid: 'BA',
        value: 'Itagibá',
        label: 'Itagibá',
    },
    {
        estadoid: 'BA',
        value: 'Itagimirim',
        label: 'Itagimirim',
    },
    {
        estadoid: 'BA',
        value: 'Itaguaçu da Bahia',
        label: 'Itaguaçu da Bahia',
    },
    {
        estadoid: 'BA',
        value: 'Itaju do Colônia',
        label: 'Itaju do Colônia',
    },
    {
        estadoid: 'BA',
        value: 'Itajuípe',
        label: 'Itajuípe',
    },
    {
        estadoid: 'BA',
        value: 'Itamaraju',
        label: 'Itamaraju',
    },
    {
        estadoid: 'BA',
        value: 'Itamari',
        label: 'Itamari',
    },
    {
        estadoid: 'BA',
        value: 'Itambé',
        label: 'Itambé',
    },
    {
        estadoid: 'BA',
        value: 'Itanagra',
        label: 'Itanagra',
    },
    {
        estadoid: 'BA',
        value: 'Itanhém',
        label: 'Itanhém',
    },
    {
        estadoid: 'BA',
        value: 'Itaparica',
        label: 'Itaparica',
    },
    {
        estadoid: 'BA',
        value: 'Itapé',
        label: 'Itapé',
    },
    {
        estadoid: 'BA',
        value: 'Itapebi',
        label: 'Itapebi',
    },
    {
        estadoid: 'BA',
        value: 'Itapetinga',
        label: 'Itapetinga',
    },
    {
        estadoid: 'BA',
        value: 'Itapicuru',
        label: 'Itapicuru',
    },
    {
        estadoid: 'BA',
        value: 'Itapitanga',
        label: 'Itapitanga',
    },
    {
        estadoid: 'BA',
        value: 'Itaquara',
        label: 'Itaquara',
    },
    {
        estadoid: 'BA',
        value: 'Itarantim',
        label: 'Itarantim',
    },
    {
        estadoid: 'BA',
        value: 'Itatim',
        label: 'Itatim',
    },
    {
        estadoid: 'BA',
        value: 'Itiruçu',
        label: 'Itiruçu',
    },
    {
        estadoid: 'BA',
        value: 'Itiúba',
        label: 'Itiúba',
    },
    {
        estadoid: 'BA',
        value: 'Itororó',
        label: 'Itororó',
    },
    {
        estadoid: 'BA',
        value: 'Ituaçu',
        label: 'Ituaçu',
    },
    {
        estadoid: 'BA',
        value: 'Ituberá',
        label: 'Ituberá',
    },
    {
        estadoid: 'BA',
        value: 'Iuiú',
        label: 'Iuiú',
    },
    {
        estadoid: 'BA',
        value: 'Jaborandi',
        label: 'Jaborandi',
    },
    {
        estadoid: 'BA',
        value: 'Jacaraci',
        label: 'Jacaraci',
    },
    {
        estadoid: 'BA',
        value: 'Jacobina',
        label: 'Jacobina',
    },
    {
        estadoid: 'BA',
        value: 'Jaguaquara',
        label: 'Jaguaquara',
    },
    {
        estadoid: 'BA',
        value: 'Jaguarari',
        label: 'Jaguarari',
    },
    {
        estadoid: 'BA',
        value: 'Jaguaripe',
        label: 'Jaguaripe',
    },
    {
        estadoid: 'BA',
        value: 'Jandaíra',
        label: 'Jandaíra',
    },
    {
        estadoid: 'BA',
        value: 'Jequié',
        label: 'Jequié',
    },
    {
        estadoid: 'BA',
        value: 'Jeremoabo',
        label: 'Jeremoabo',
    },
    {
        estadoid: 'BA',
        value: 'Jiquiriçá',
        label: 'Jiquiriçá',
    },
    {
        estadoid: 'BA',
        value: 'Jitaúna',
        label: 'Jitaúna',
    },
    {
        estadoid: 'BA',
        value: 'João Dourado',
        label: 'João Dourado',
    },
    {
        estadoid: 'BA',
        value: 'Juazeiro',
        label: 'Juazeiro',
    },
    {
        estadoid: 'BA',
        value: 'Jucuruçu',
        label: 'Jucuruçu',
    },
    {
        estadoid: 'BA',
        value: 'Jussara',
        label: 'Jussara',
    },
    {
        estadoid: 'BA',
        value: 'Jussari',
        label: 'Jussari',
    },
    {
        estadoid: 'BA',
        value: 'Jussiape',
        label: 'Jussiape',
    },
    {
        estadoid: 'BA',
        value: 'Lafaiete Coutinho',
        label: 'Lafaiete Coutinho',
    },
    {
        estadoid: 'BA',
        value: 'Lagoa Real',
        label: 'Lagoa Real',
    },
    {
        estadoid: 'BA',
        value: 'Laje',
        label: 'Laje',
    },
    {
        estadoid: 'BA',
        value: 'Lajedão',
        label: 'Lajedão',
    },
    {
        estadoid: 'BA',
        value: 'Lajedinho',
        label: 'Lajedinho',
    },
    {
        estadoid: 'BA',
        value: 'Lajedo do Tabocal',
        label: 'Lajedo do Tabocal',
    },
    {
        estadoid: 'BA',
        value: 'Lamarão',
        label: 'Lamarão',
    },
    {
        estadoid: 'BA',
        value: 'Lapão',
        label: 'Lapão',
    },
    {
        estadoid: 'BA',
        value: 'Lauro de Freitas',
        label: 'Lauro de Freitas',
    },
    {
        estadoid: 'BA',
        value: 'Lençóis',
        label: 'Lençóis',
    },
    {
        estadoid: 'BA',
        value: 'Licínio de Almeida',
        label: 'Licínio de Almeida',
    },
    {
        estadoid: 'BA',
        value: 'Livramento de Nossa Senhora',
        label: 'Livramento de Nossa Senhora',
    },
    {
        estadoid: 'BA',
        value: 'Luís Eduardo Magalhães',
        label: 'Luís Eduardo Magalhães',
    },
    {
        estadoid: 'BA',
        value: 'Macajuba',
        label: 'Macajuba',
    },
    {
        estadoid: 'BA',
        value: 'Macarani',
        label: 'Macarani',
    },
    {
        estadoid: 'BA',
        value: 'Macaúbas',
        label: 'Macaúbas',
    },
    {
        estadoid: 'BA',
        value: 'Macururé',
        label: 'Macururé',
    },
    {
        estadoid: 'BA',
        value: 'Madre de Deus',
        label: 'Madre de Deus',
    },
    {
        estadoid: 'BA',
        value: 'Maetinga',
        label: 'Maetinga',
    },
    {
        estadoid: 'BA',
        value: 'Maiquinique',
        label: 'Maiquinique',
    },
    {
        estadoid: 'BA',
        value: 'Mairi',
        label: 'Mairi',
    },
    {
        estadoid: 'BA',
        value: 'Malhada',
        label: 'Malhada',
    },
    {
        estadoid: 'BA',
        value: 'Malhada de Pedras',
        label: 'Malhada de Pedras',
    },
    {
        estadoid: 'BA',
        value: 'Manoel Vitorino',
        label: 'Manoel Vitorino',
    },
    {
        estadoid: 'BA',
        value: 'Mansidão',
        label: 'Mansidão',
    },
    {
        estadoid: 'BA',
        value: 'Maracás',
        label: 'Maracás',
    },
    {
        estadoid: 'BA',
        value: 'Maragogipe',
        label: 'Maragogipe',
    },
    {
        estadoid: 'BA',
        value: 'Maraú',
        label: 'Maraú',
    },
    {
        estadoid: 'BA',
        value: 'Marcionílio Souza',
        label: 'Marcionílio Souza',
    },
    {
        estadoid: 'BA',
        value: 'Mascote',
        label: 'Mascote',
    },
    {
        estadoid: 'BA',
        value: 'Mata de São João',
        label: 'Mata de São João',
    },
    {
        estadoid: 'BA',
        value: 'Matina',
        label: 'Matina',
    },
    {
        estadoid: 'BA',
        value: 'Medeiros Neto',
        label: 'Medeiros Neto',
    },
    {
        estadoid: 'BA',
        value: 'Miguel Calmon',
        label: 'Miguel Calmon',
    },
    {
        estadoid: 'BA',
        value: 'Milagres',
        label: 'Milagres',
    },
    {
        estadoid: 'BA',
        value: 'Mirangaba',
        label: 'Mirangaba',
    },
    {
        estadoid: 'BA',
        value: 'Mirante',
        label: 'Mirante',
    },
    {
        estadoid: 'BA',
        value: 'Monte Santo',
        label: 'Monte Santo',
    },
    {
        estadoid: 'BA',
        value: 'Morpará',
        label: 'Morpará',
    },
    {
        estadoid: 'BA',
        value: 'Morro do Chapéu',
        label: 'Morro do Chapéu',
    },
    {
        estadoid: 'BA',
        value: 'Mortugaba',
        label: 'Mortugaba',
    },
    {
        estadoid: 'BA',
        value: 'Mucugê',
        label: 'Mucugê',
    },
    {
        estadoid: 'BA',
        value: 'Mucuri',
        label: 'Mucuri',
    },
    {
        estadoid: 'BA',
        value: 'Mulungu do Morro',
        label: 'Mulungu do Morro',
    },
    {
        estadoid: 'BA',
        value: 'Mundo Novo',
        label: 'Mundo Novo',
    },
    {
        estadoid: 'BA',
        value: 'Muniz Ferreira',
        label: 'Muniz Ferreira',
    },
    {
        estadoid: 'BA',
        value: 'Muquém de São Francisco',
        label: 'Muquém de São Francisco',
    },
    {
        estadoid: 'BA',
        value: 'Muritiba',
        label: 'Muritiba',
    },
    {
        estadoid: 'BA',
        value: 'Mutuípe',
        label: 'Mutuípe',
    },
    {
        estadoid: 'BA',
        value: 'Nazaré',
        label: 'Nazaré',
    },
    {
        estadoid: 'BA',
        value: 'Nilo Peçanha',
        label: 'Nilo Peçanha',
    },
    {
        estadoid: 'BA',
        value: 'Nordestina',
        label: 'Nordestina',
    },
    {
        estadoid: 'BA',
        value: 'Nova Canaã',
        label: 'Nova Canaã',
    },
    {
        estadoid: 'BA',
        value: 'Nova Fátima',
        label: 'Nova Fátima',
    },
    {
        estadoid: 'BA',
        value: 'Nova Ibiá',
        label: 'Nova Ibiá',
    },
    {
        estadoid: 'BA',
        value: 'Nova Itarana',
        label: 'Nova Itarana',
    },
    {
        estadoid: 'BA',
        value: 'Nova Redenção',
        label: 'Nova Redenção',
    },
    {
        estadoid: 'BA',
        value: 'Nova Soure',
        label: 'Nova Soure',
    },
    {
        estadoid: 'BA',
        value: 'Nova Viçosa',
        label: 'Nova Viçosa',
    },
    {
        estadoid: 'BA',
        value: 'Novo Horizonte',
        label: 'Novo Horizonte',
    },
    {
        estadoid: 'BA',
        value: 'Novo Triunfo',
        label: 'Novo Triunfo',
    },
    {
        estadoid: 'BA',
        value: 'Olindina',
        label: 'Olindina',
    },
    {
        estadoid: 'BA',
        value: 'Oliveira dos Brejinhos',
        label: 'Oliveira dos Brejinhos',
    },
    {
        estadoid: 'BA',
        value: 'Ouriçangas',
        label: 'Ouriçangas',
    },
    {
        estadoid: 'BA',
        value: 'Ourolândia',
        label: 'Ourolândia',
    },
    {
        estadoid: 'BA',
        value: 'Palmas de Monte Alto',
        label: 'Palmas de Monte Alto',
    },
    {
        estadoid: 'BA',
        value: 'Palmeiras',
        label: 'Palmeiras',
    },
    {
        estadoid: 'BA',
        value: 'Paramirim',
        label: 'Paramirim',
    },
    {
        estadoid: 'BA',
        value: 'Paratinga',
        label: 'Paratinga',
    },
    {
        estadoid: 'BA',
        value: 'Paripiranga',
        label: 'Paripiranga',
    },
    {
        estadoid: 'BA',
        value: 'Pau Brasil',
        label: 'Pau Brasil',
    },
    {
        estadoid: 'BA',
        value: 'Paulo Afonso',
        label: 'Paulo Afonso',
    },
    {
        estadoid: 'BA',
        value: 'Pé de Serra',
        label: 'Pé de Serra',
    },
    {
        estadoid: 'BA',
        value: 'Pedrão',
        label: 'Pedrão',
    },
    {
        estadoid: 'BA',
        value: 'Pedro Alexandre',
        label: 'Pedro Alexandre',
    },
    {
        estadoid: 'BA',
        value: 'Piatã',
        label: 'Piatã',
    },
    {
        estadoid: 'BA',
        value: 'Pilão Arcado',
        label: 'Pilão Arcado',
    },
    {
        estadoid: 'BA',
        value: 'Pindaí',
        label: 'Pindaí',
    },
    {
        estadoid: 'BA',
        value: 'Pindobaçu',
        label: 'Pindobaçu',
    },
    {
        estadoid: 'BA',
        value: 'Pintadas',
        label: 'Pintadas',
    },
    {
        estadoid: 'BA',
        value: 'Piraí do Norte',
        label: 'Piraí do Norte',
    },
    {
        estadoid: 'BA',
        value: 'Piripá',
        label: 'Piripá',
    },
    {
        estadoid: 'BA',
        value: 'Piritiba',
        label: 'Piritiba',
    },
    {
        estadoid: 'BA',
        value: 'Planaltino',
        label: 'Planaltino',
    },
    {
        estadoid: 'BA',
        value: 'Planalto',
        label: 'Planalto',
    },
    {
        estadoid: 'BA',
        value: 'Poções',
        label: 'Poções',
    },
    {
        estadoid: 'BA',
        value: 'Pojuca',
        label: 'Pojuca',
    },
    {
        estadoid: 'BA',
        value: 'Ponto Novo',
        label: 'Ponto Novo',
    },
    {
        estadoid: 'BA',
        value: 'Porto Seguro',
        label: 'Porto Seguro',
    },
    {
        estadoid: 'BA',
        value: 'Potiraguá',
        label: 'Potiraguá',
    },
    {
        estadoid: 'BA',
        value: 'Prado',
        label: 'Prado',
    },
    {
        estadoid: 'BA',
        value: 'Presidente Dutra',
        label: 'Presidente Dutra',
    },
    {
        estadoid: 'BA',
        value: 'Presidente Jânio Quadros',
        label: 'Presidente Jânio Quadros',
    },
    {
        estadoid: 'BA',
        value: 'Presidente Tancredo Neves',
        label: 'Presidente Tancredo Neves',
    },
    {
        estadoid: 'BA',
        value: 'Queimadas',
        label: 'Queimadas',
    },
    {
        estadoid: 'BA',
        value: 'Quijingue',
        label: 'Quijingue',
    },
    {
        estadoid: 'BA',
        value: 'Quixabeira',
        label: 'Quixabeira',
    },
    {
        estadoid: 'BA',
        value: 'Rafael Jambeiro',
        label: 'Rafael Jambeiro',
    },
    {
        estadoid: 'BA',
        value: 'Remanso',
        label: 'Remanso',
    },
    {
        estadoid: 'BA',
        value: 'Retirolândia',
        label: 'Retirolândia',
    },
    {
        estadoid: 'BA',
        value: 'Riachão das Neves',
        label: 'Riachão das Neves',
    },
    {
        estadoid: 'BA',
        value: 'Riachão do Jacuípe',
        label: 'Riachão do Jacuípe',
    },
    {
        estadoid: 'BA',
        value: 'Riacho de Santana',
        label: 'Riacho de Santana',
    },
    {
        estadoid: 'BA',
        value: 'Ribeira do Amparo',
        label: 'Ribeira do Amparo',
    },
    {
        estadoid: 'BA',
        value: 'Ribeira do Pombal',
        label: 'Ribeira do Pombal',
    },
    {
        estadoid: 'BA',
        value: 'Ribeirão do Largo',
        label: 'Ribeirão do Largo',
    },
    {
        estadoid: 'BA',
        value: 'Rio de Contas',
        label: 'Rio de Contas',
    },
    {
        estadoid: 'BA',
        value: 'Rio do Antônio',
        label: 'Rio do Antônio',
    },
    {
        estadoid: 'BA',
        value: 'Rio do Pires',
        label: 'Rio do Pires',
    },
    {
        estadoid: 'BA',
        value: 'Rio Real',
        label: 'Rio Real',
    },
    {
        estadoid: 'BA',
        value: 'Rodelas',
        label: 'Rodelas',
    },
    {
        estadoid: 'BA',
        value: 'Ruy Barbosa',
        label: 'Ruy Barbosa',
    },
    {
        estadoid: 'BA',
        value: 'Salinas da Margarida',
        label: 'Salinas da Margarida',
    },
    {
        estadoid: 'BA',
        label: 'Salvador',
        value: 'Salvador',
    },
    {
        estadoid: 'BA',
        value: 'Santa Bárbara',
        label: 'Santa Bárbara',
    },
    {
        estadoid: 'BA',
        value: 'Santa Brígida',
        label: 'Santa Brígida',
    },
    {
        estadoid: 'BA',
        value: 'Santa Cruz Cabrália',
        label: 'Santa Cruz Cabrália',
    },
    {
        estadoid: 'BA',
        value: 'Santa Cruz da Vitória',
        label: 'Santa Cruz da Vitória',
    },
    {
        estadoid: 'BA',
        value: 'Santa Inês',
        label: 'Santa Inês',
    },
    {
        estadoid: 'BA',
        value: 'Santa Luzia',
        label: 'Santa Luzia',
    },
    {
        estadoid: 'BA',
        value: 'Santa Maria da Vitória',
        label: 'Santa Maria da Vitória',
    },
    {
        estadoid: 'BA',
        value: 'Santa Rita de Cássia',
        label: 'Santa Rita de Cássia',
    },
    {
        estadoid: 'BA',
        value: 'Santa Teresinha',
        label: 'Santa Teresinha',
    },
    {
        estadoid: 'BA',
        value: 'Santaluz',
        label: 'Santaluz',
    },
    {
        estadoid: 'BA',
        value: 'Santana',
        label: 'Santana',
    },
    {
        estadoid: 'BA',
        value: 'Santanópolis',
        label: 'Santanópolis',
    },
    {
        estadoid: 'BA',
        value: 'Santo Amaro',
        label: 'Santo Amaro',
    },
    {
        estadoid: 'BA',
        value: 'Santo Antônio de Jesus',
        label: 'Santo Antônio de Jesus',
    },
    {
        estadoid: 'BA',
        value: 'Santo Estêvão',
        label: 'Santo Estêvão',
    },
    {
        estadoid: 'BA',
        value: 'São Desidério',
        label: 'São Desidério',
    },
    {
        estadoid: 'BA',
        value: 'São Domingos',
        label: 'São Domingos',
    },
    {
        estadoid: 'BA',
        value: 'São Felipe',
        label: 'São Felipe',
    },
    {
        estadoid: 'BA',
        value: 'São Félix',
        label: 'São Félix',
    },
    {
        estadoid: 'BA',
        value: 'São Félix do Coribe',
        label: 'São Félix do Coribe',
    },
    {
        estadoid: 'BA',
        value: 'São Francisco do Conde',
        label: 'São Francisco do Conde',
    },
    {
        estadoid: 'BA',
        value: 'São Gabriel',
        label: 'São Gabriel',
    },
    {
        estadoid: 'BA',
        value: 'São Gonçalo dos Campos',
        label: 'São Gonçalo dos Campos',
    },
    {
        estadoid: 'BA',
        value: 'São José da Vitória',
        label: 'São José da Vitória',
    },
    {
        estadoid: 'BA',
        value: 'São José do Jacuípe',
        label: 'São José do Jacuípe',
    },
    {
        estadoid: 'BA',
        value: 'São Miguel das Matas',
        label: 'São Miguel das Matas',
    },
    {
        estadoid: 'BA',
        value: 'São Sebastião do Passé',
        label: 'São Sebastião do Passé',
    },
    {
        estadoid: 'BA',
        value: 'Sapeaçu',
        label: 'Sapeaçu',
    },
    {
        estadoid: 'BA',
        value: 'Sátiro Dias',
        label: 'Sátiro Dias',
    },
    {
        estadoid: 'BA',
        value: 'Saubara',
        label: 'Saubara',
    },
    {
        estadoid: 'BA',
        value: 'Saúde',
        label: 'Saúde',
    },
    {
        estadoid: 'BA',
        value: 'Seabra',
        label: 'Seabra',
    },
    {
        estadoid: 'BA',
        value: 'Sebastião Laranjeiras',
        label: 'Sebastião Laranjeiras',
    },
    {
        estadoid: 'BA',
        value: 'Senhor do Bonfim',
        label: 'Senhor do Bonfim',
    },
    {
        estadoid: 'BA',
        value: 'Sento Sé',
        label: 'Sento Sé',
    },
    {
        estadoid: 'BA',
        value: 'Serra do Ramalho',
        label: 'Serra do Ramalho',
    },
    {
        estadoid: 'BA',
        value: 'Serra Dourada',
        label: 'Serra Dourada',
    },
    {
        estadoid: 'BA',
        value: 'Serra Preta',
        label: 'Serra Preta',
    },
    {
        estadoid: 'BA',
        value: 'Serrinha',
        label: 'Serrinha',
    },
    {
        estadoid: 'BA',
        value: 'Serrolândia',
        label: 'Serrolândia',
    },
    {
        estadoid: 'BA',
        value: 'Simões Filho',
        label: 'Simões Filho',
    },
    {
        estadoid: 'BA',
        value: 'Sítio do Mato',
        label: 'Sítio do Mato',
    },
    {
        estadoid: 'BA',
        value: 'Sítio do Quinto',
        label: 'Sítio do Quinto',
    },
    {
        estadoid: 'BA',
        value: 'Sobradinho',
        label: 'Sobradinho',
    },
    {
        estadoid: 'BA',
        value: 'Souto Soares',
        label: 'Souto Soares',
    },
    {
        estadoid: 'BA',
        value: 'Tabocas do Brejo Velho',
        label: 'Tabocas do Brejo Velho',
    },
    {
        estadoid: 'BA',
        value: 'Tanhaçu',
        label: 'Tanhaçu',
    },
    {
        estadoid: 'BA',
        value: 'Tanque Novo',
        label: 'Tanque Novo',
    },
    {
        estadoid: 'BA',
        value: 'Tanquinho',
        label: 'Tanquinho',
    },
    {
        estadoid: 'BA',
        value: 'Taperoá',
        label: 'Taperoá',
    },
    {
        estadoid: 'BA',
        value: 'Tapiramutá',
        label: 'Tapiramutá',
    },
    {
        estadoid: 'BA',
        value: 'Teixeira de Freitas',
        label: 'Teixeira de Freitas',
    },
    {
        estadoid: 'BA',
        value: 'Teodoro Sampaio',
        label: 'Teodoro Sampaio',
    },
    {
        estadoid: 'BA',
        value: 'Teofilândia',
        label: 'Teofilândia',
    },
    {
        estadoid: 'BA',
        value: 'Teolândia',
        label: 'Teolândia',
    },
    {
        estadoid: 'BA',
        value: 'Terra Nova',
        label: 'Terra Nova',
    },
    {
        estadoid: 'BA',
        value: 'Tremedal',
        label: 'Tremedal',
    },
    {
        estadoid: 'BA',
        value: 'Tucano',
        label: 'Tucano',
    },
    {
        estadoid: 'BA',
        value: 'Uauá',
        label: 'Uauá',
    },
    {
        estadoid: 'BA',
        value: 'Ubaíra',
        label: 'Ubaíra',
    },
    {
        estadoid: 'BA',
        value: 'Ubaitaba',
        label: 'Ubaitaba',
    },
    {
        estadoid: 'BA',
        value: 'Ubatã',
        label: 'Ubatã',
    },
    {
        estadoid: 'BA',
        value: 'Uibaí',
        label: 'Uibaí',
    },
    {
        estadoid: 'BA',
        value: 'Umburanas',
        label: 'Umburanas',
    },
    {
        estadoid: 'BA',
        value: 'Una',
        label: 'Una',
    },
    {
        estadoid: 'BA',
        value: 'Urandi',
        label: 'Urandi',
    },
    {
        estadoid: 'BA',
        value: 'Uruçuca',
        label: 'Uruçuca',
    },
    {
        estadoid: 'BA',
        value: 'Utinga',
        label: 'Utinga',
    },
    {
        estadoid: 'BA',
        value: 'Valença',
        label: 'Valença',
    },
    {
        estadoid: 'BA',
        value: 'Valente',
        label: 'Valente',
    },
    {
        estadoid: 'BA',
        value: 'Várzea da Roça',
        label: 'Várzea da Roça',
    },
    {
        estadoid: 'BA',
        value: 'Várzea do Poço',
        label: 'Várzea do Poço',
    },
    {
        estadoid: 'BA',
        value: 'Várzea Nova',
        label: 'Várzea Nova',
    },
    {
        estadoid: 'BA',
        value: 'Varzedo',
        label: 'Varzedo',
    },
    {
        estadoid: 'BA',
        value: 'Vera Cruz',
        label: 'Vera Cruz',
    },
    {
        estadoid: 'BA',
        value: 'Vereda',
        label: 'Vereda',
    },
    {
        estadoid: 'BA',
        value: 'Vitória da Conquista',
        label: 'Vitória da Conquista',
    },
    {
        estadoid: 'BA',
        value: 'Wagner',
        label: 'Wagner',
    },
    {
        estadoid: 'BA',
        value: 'Wanderley',
        label: 'Wanderley',
    },
    {
        estadoid: 'BA',
        value: 'Wenceslau Guimarães',
        label: 'Wenceslau Guimarães',
    },
    {
        estadoid: 'BA',
        value: 'Xique-Xique',
        label: 'Xique-Xique',
    },
    {
        estadoid: 'CE',
        value: 'Abaiara',
        label: 'Abaiara',
    },
    {
        estadoid: 'CE',
        value: 'Acarapé',
        label: 'Acarapé',
    },
    {
        estadoid: 'CE',
        value: 'Acaraú',
        label: 'Acaraú',
    },
    {
        estadoid: 'CE',
        value: 'Acopiara',
        label: 'Acopiara',
    },
    {
        estadoid: 'CE',
        value: 'Aiuaba',
        label: 'Aiuaba',
    },
    {
        estadoid: 'CE',
        value: 'Alcântaras',
        label: 'Alcântaras',
    },
    {
        estadoid: 'CE',
        value: 'Altaneira',
        label: 'Altaneira',
    },
    {
        estadoid: 'CE',
        value: 'Alto Santo',
        label: 'Alto Santo',
    },
    {
        estadoid: 'CE',
        value: 'Amontada',
        label: 'Amontada',
    },
    {
        estadoid: 'CE',
        value: 'Antonina do Norte',
        label: 'Antonina do Norte',
    },
    {
        estadoid: 'CE',
        value: 'Apuiarés',
        label: 'Apuiarés',
    },
    {
        estadoid: 'CE',
        value: 'Aquiraz',
        label: 'Aquiraz',
    },
    {
        estadoid: 'CE',
        value: 'Aracati',
        label: 'Aracati',
    },
    {
        estadoid: 'CE',
        value: 'Aracoiaba',
        label: 'Aracoiaba',
    },
    {
        estadoid: 'CE',
        value: 'Ararendá',
        label: 'Ararendá',
    },
    {
        estadoid: 'CE',
        value: 'Araripe',
        label: 'Araripe',
    },
    {
        estadoid: 'CE',
        value: 'Aratuba',
        label: 'Aratuba',
    },
    {
        estadoid: 'CE',
        value: 'Arneiroz',
        label: 'Arneiroz',
    },
    {
        estadoid: 'CE',
        value: 'Assaré',
        label: 'Assaré',
    },
    {
        estadoid: 'CE',
        value: 'Aurora',
        label: 'Aurora',
    },
    {
        estadoid: 'CE',
        value: 'Baixio',
        label: 'Baixio',
    },
    {
        estadoid: 'CE',
        value: 'Banabuiú',
        label: 'Banabuiú',
    },
    {
        estadoid: 'CE',
        value: 'Barbalha',
        label: 'Barbalha',
    },
    {
        estadoid: 'CE',
        value: 'Barreira',
        label: 'Barreira',
    },
    {
        estadoid: 'CE',
        value: 'Barro',
        label: 'Barro',
    },
    {
        estadoid: 'CE',
        value: 'Barroquinha',
        label: 'Barroquinha',
    },
    {
        estadoid: 'CE',
        value: 'Baturité',
        label: 'Baturité',
    },
    {
        estadoid: 'CE',
        value: 'Beberibe',
        label: 'Beberibe',
    },
    {
        estadoid: 'CE',
        value: 'Bela Cruz',
        label: 'Bela Cruz',
    },
    {
        estadoid: 'CE',
        value: 'Boa Viagem',
        label: 'Boa Viagem',
    },
    {
        estadoid: 'CE',
        value: 'Brejo Santo',
        label: 'Brejo Santo',
    },
    {
        estadoid: 'CE',
        value: 'Camocim',
        label: 'Camocim',
    },
    {
        estadoid: 'CE',
        value: 'Campos Sales',
        label: 'Campos Sales',
    },
    {
        estadoid: 'CE',
        value: 'Canindé',
        label: 'Canindé',
    },
    {
        estadoid: 'CE',
        value: 'Capistrano',
        label: 'Capistrano',
    },
    {
        estadoid: 'CE',
        value: 'Caridade',
        label: 'Caridade',
    },
    {
        estadoid: 'CE',
        value: 'Cariré',
        label: 'Cariré',
    },
    {
        estadoid: 'CE',
        value: 'Caririaçu',
        label: 'Caririaçu',
    },
    {
        estadoid: 'CE',
        value: 'Cariús',
        label: 'Cariús',
    },
    {
        estadoid: 'CE',
        value: 'Carnaubal',
        label: 'Carnaubal',
    },
    {
        estadoid: 'CE',
        value: 'Cascavel',
        label: 'Cascavel',
    },
    {
        estadoid: 'CE',
        value: 'Catarina',
        label: 'Catarina',
    },
    {
        estadoid: 'CE',
        value: 'Catunda',
        label: 'Catunda',
    },
    {
        estadoid: 'CE',
        value: 'Caucaia',
        label: 'Caucaia',
    },
    {
        estadoid: 'CE',
        value: 'Cedro',
        label: 'Cedro',
    },
    {
        estadoid: 'CE',
        value: 'Chaval',
        label: 'Chaval',
    },
    {
        estadoid: 'CE',
        value: 'Choró',
        label: 'Choró',
    },
    {
        estadoid: 'CE',
        value: 'Chorozinho',
        label: 'Chorozinho',
    },
    {
        estadoid: 'CE',
        value: 'Coreaú',
        label: 'Coreaú',
    },
    {
        estadoid: 'CE',
        value: 'Crateús',
        label: 'Crateús',
    },
    {
        estadoid: 'CE',
        value: 'Crato',
        label: 'Crato',
    },
    {
        estadoid: 'CE',
        value: 'Croatá',
        label: 'Croatá',
    },
    {
        estadoid: 'CE',
        value: 'Cruz',
        label: 'Cruz',
    },
    {
        estadoid: 'CE',
        value: 'Deputado Irapuan Pinheiro',
        label: 'Deputado Irapuan Pinheiro',
    },
    {
        estadoid: 'CE',
        value: 'Ererê',
        label: 'Ererê',
    },
    {
        estadoid: 'CE',
        value: 'Eusébio',
        label: 'Eusébio',
    },
    {
        estadoid: 'CE',
        value: 'Farias Brito',
        label: 'Farias Brito',
    },
    {
        estadoid: 'CE',
        value: 'Forquilha',
        label: 'Forquilha',
    },
    {
        estadoid: 'CE',
        label: 'Fortaleza',
        value: 'Fortaleza',
    },
    {
        estadoid: 'CE',
        value: 'Fortim',
        label: 'Fortim',
    },
    {
        estadoid: 'CE',
        value: 'Frecheirinha',
        label: 'Frecheirinha',
    },
    {
        estadoid: 'CE',
        value: 'General Sampaio',
        label: 'General Sampaio',
    },
    {
        estadoid: 'CE',
        value: 'Graça',
        label: 'Graça',
    },
    {
        estadoid: 'CE',
        value: 'Granja',
        label: 'Granja',
    },
    {
        estadoid: 'CE',
        value: 'Granjeiro',
        label: 'Granjeiro',
    },
    {
        estadoid: 'CE',
        value: 'Groaíras',
        label: 'Groaíras',
    },
    {
        estadoid: 'CE',
        value: 'Guaiúba',
        label: 'Guaiúba',
    },
    {
        estadoid: 'CE',
        value: 'Guaraciaba do Norte',
        label: 'Guaraciaba do Norte',
    },
    {
        estadoid: 'CE',
        value: 'Guaramiranga',
        label: 'Guaramiranga',
    },
    {
        estadoid: 'CE',
        value: 'Hidrolândia',
        label: 'Hidrolândia',
    },
    {
        estadoid: 'CE',
        value: 'Horizonte',
        label: 'Horizonte',
    },
    {
        estadoid: 'CE',
        value: 'Ibaretama',
        label: 'Ibaretama',
    },
    {
        estadoid: 'CE',
        value: 'Ibiapina',
        label: 'Ibiapina',
    },
    {
        estadoid: 'CE',
        value: 'Ibicuitinga',
        label: 'Ibicuitinga',
    },
    {
        estadoid: 'CE',
        value: 'Icapuí',
        label: 'Icapuí',
    },
    {
        estadoid: 'CE',
        value: 'Icó',
        label: 'Icó',
    },
    {
        estadoid: 'CE',
        value: 'Iguatu',
        label: 'Iguatu',
    },
    {
        estadoid: 'CE',
        value: 'Independência',
        label: 'Independência',
    },
    {
        estadoid: 'CE',
        value: 'Ipaporanga',
        label: 'Ipaporanga',
    },
    {
        estadoid: 'CE',
        value: 'Ipaumirim',
        label: 'Ipaumirim',
    },
    {
        estadoid: 'CE',
        value: 'Ipu',
        label: 'Ipu',
    },
    {
        estadoid: 'CE',
        value: 'Ipueiras',
        label: 'Ipueiras',
    },
    {
        estadoid: 'CE',
        value: 'Iracema',
        label: 'Iracema',
    },
    {
        estadoid: 'CE',
        value: 'Irauçuba',
        label: 'Irauçuba',
    },
    {
        estadoid: 'CE',
        value: 'Itaiçaba',
        label: 'Itaiçaba',
    },
    {
        estadoid: 'CE',
        value: 'Itaitinga',
        label: 'Itaitinga',
    },
    {
        estadoid: 'CE',
        value: 'Itapagé',
        label: 'Itapagé',
    },
    {
        estadoid: 'CE',
        value: 'Itapipoca',
        label: 'Itapipoca',
    },
    {
        estadoid: 'CE',
        value: 'Itapiúna',
        label: 'Itapiúna',
    },
    {
        estadoid: 'CE',
        value: 'Itarema',
        label: 'Itarema',
    },
    {
        estadoid: 'CE',
        value: 'Itatira',
        label: 'Itatira',
    },
    {
        estadoid: 'CE',
        value: 'Jaguaretama',
        label: 'Jaguaretama',
    },
    {
        estadoid: 'CE',
        value: 'Jaguaribara',
        label: 'Jaguaribara',
    },
    {
        estadoid: 'CE',
        value: 'Jaguaribe',
        label: 'Jaguaribe',
    },
    {
        estadoid: 'CE',
        value: 'Jaguaruana',
        label: 'Jaguaruana',
    },
    {
        estadoid: 'CE',
        value: 'Jardim',
        label: 'Jardim',
    },
    {
        estadoid: 'CE',
        value: 'Jati',
        label: 'Jati',
    },
    {
        estadoid: 'CE',
        value: 'Jijoca de Jericoaroara',
        label: 'Jijoca de Jericoaroara',
    },
    {
        estadoid: 'CE',
        value: 'Juazeiro do Norte',
        label: 'Juazeiro do Norte',
    },
    {
        estadoid: 'CE',
        value: 'Jucás',
        label: 'Jucás',
    },
    {
        estadoid: 'CE',
        value: 'Lavras da Mangabeira',
        label: 'Lavras da Mangabeira',
    },
    {
        estadoid: 'CE',
        value: 'Limoeiro do Norte',
        label: 'Limoeiro do Norte',
    },
    {
        estadoid: 'CE',
        value: 'Madalena',
        label: 'Madalena',
    },
    {
        estadoid: 'CE',
        value: 'Maracanaú',
        label: 'Maracanaú',
    },
    {
        estadoid: 'CE',
        value: 'Maranguape',
        label: 'Maranguape',
    },
    {
        estadoid: 'CE',
        value: 'Marco',
        label: 'Marco',
    },
    {
        estadoid: 'CE',
        value: 'Martinópole',
        label: 'Martinópole',
    },
    {
        estadoid: 'CE',
        value: 'Massapê',
        label: 'Massapê',
    },
    {
        estadoid: 'CE',
        value: 'Mauriti',
        label: 'Mauriti',
    },
    {
        estadoid: 'CE',
        value: 'Meruoca',
        label: 'Meruoca',
    },
    {
        estadoid: 'CE',
        value: 'Milagres',
        label: 'Milagres',
    },
    {
        estadoid: 'CE',
        value: 'Milhã',
        label: 'Milhã',
    },
    {
        estadoid: 'CE',
        value: 'Miraíma',
        label: 'Miraíma',
    },
    {
        estadoid: 'CE',
        value: 'Missão Velha',
        label: 'Missão Velha',
    },
    {
        estadoid: 'CE',
        value: 'Mombaça',
        label: 'Mombaça',
    },
    {
        estadoid: 'CE',
        value: 'Monsenhor Tabosa',
        label: 'Monsenhor Tabosa',
    },
    {
        estadoid: 'CE',
        value: 'Morada Nova',
        label: 'Morada Nova',
    },
    {
        estadoid: 'CE',
        value: 'Moraújo',
        label: 'Moraújo',
    },
    {
        estadoid: 'CE',
        value: 'Morrinhos',
        label: 'Morrinhos',
    },
    {
        estadoid: 'CE',
        value: 'Mucambo',
        label: 'Mucambo',
    },
    {
        estadoid: 'CE',
        value: 'Mulungu',
        label: 'Mulungu',
    },
    {
        estadoid: 'CE',
        value: 'Nova Olinda',
        label: 'Nova Olinda',
    },
    {
        estadoid: 'CE',
        value: 'Nova Russas',
        label: 'Nova Russas',
    },
    {
        estadoid: 'CE',
        value: 'Novo Oriente',
        label: 'Novo Oriente',
    },
    {
        estadoid: 'CE',
        value: 'Ocara',
        label: 'Ocara',
    },
    {
        estadoid: 'CE',
        value: 'Orós',
        label: 'Orós',
    },
    {
        estadoid: 'CE',
        value: 'Pacajus',
        label: 'Pacajus',
    },
    {
        estadoid: 'CE',
        value: 'Pacatuba',
        label: 'Pacatuba',
    },
    {
        estadoid: 'CE',
        value: 'Pacoti',
        label: 'Pacoti',
    },
    {
        estadoid: 'CE',
        value: 'Pacujá',
        label: 'Pacujá',
    },
    {
        estadoid: 'CE',
        value: 'Palhano',
        label: 'Palhano',
    },
    {
        estadoid: 'CE',
        value: 'Palmácia',
        label: 'Palmácia',
    },
    {
        estadoid: 'CE',
        value: 'Paracuru',
        label: 'Paracuru',
    },
    {
        estadoid: 'CE',
        value: 'Paraipaba',
        label: 'Paraipaba',
    },
    {
        estadoid: 'CE',
        value: 'Parambu',
        label: 'Parambu',
    },
    {
        estadoid: 'CE',
        value: 'Paramoti',
        label: 'Paramoti',
    },
    {
        estadoid: 'CE',
        value: 'Pedra Branca',
        label: 'Pedra Branca',
    },
    {
        estadoid: 'CE',
        value: 'Penaforte',
        label: 'Penaforte',
    },
    {
        estadoid: 'CE',
        value: 'Pentecoste',
        label: 'Pentecoste',
    },
    {
        estadoid: 'CE',
        value: 'Pereiro',
        label: 'Pereiro',
    },
    {
        estadoid: 'CE',
        value: 'Pindoretama',
        label: 'Pindoretama',
    },
    {
        estadoid: 'CE',
        value: 'Piquet Carneiro',
        label: 'Piquet Carneiro',
    },
    {
        estadoid: 'CE',
        value: 'Pires Ferreira',
        label: 'Pires Ferreira',
    },
    {
        estadoid: 'CE',
        value: 'Poranga',
        label: 'Poranga',
    },
    {
        estadoid: 'CE',
        value: 'Porteiras',
        label: 'Porteiras',
    },
    {
        estadoid: 'CE',
        value: 'Potengi',
        label: 'Potengi',
    },
    {
        estadoid: 'CE',
        value: 'Potiretama',
        label: 'Potiretama',
    },
    {
        estadoid: 'CE',
        value: 'Quiterianópolis',
        label: 'Quiterianópolis',
    },
    {
        estadoid: 'CE',
        value: 'Quixadá',
        label: 'Quixadá',
    },
    {
        estadoid: 'CE',
        value: 'Quixelô',
        label: 'Quixelô',
    },
    {
        estadoid: 'CE',
        value: 'Quixeramobim',
        label: 'Quixeramobim',
    },
    {
        estadoid: 'CE',
        value: 'Quixeré',
        label: 'Quixeré',
    },
    {
        estadoid: 'CE',
        value: 'Redenção',
        label: 'Redenção',
    },
    {
        estadoid: 'CE',
        value: 'Reriutaba',
        label: 'Reriutaba',
    },
    {
        estadoid: 'CE',
        value: 'Russas',
        label: 'Russas',
    },
    {
        estadoid: 'CE',
        value: 'Saboeiro',
        label: 'Saboeiro',
    },
    {
        estadoid: 'CE',
        value: 'Salitre',
        label: 'Salitre',
    },
    {
        estadoid: 'CE',
        value: 'Santa Quitéria',
        label: 'Santa Quitéria',
    },
    {
        estadoid: 'CE',
        value: 'Santana do Acaraú',
        label: 'Santana do Acaraú',
    },
    {
        estadoid: 'CE',
        value: 'Santana do Cariri',
        label: 'Santana do Cariri',
    },
    {
        estadoid: 'CE',
        value: 'São Benedito',
        label: 'São Benedito',
    },
    {
        estadoid: 'CE',
        value: 'São Gonçalo do Amarante',
        label: 'São Gonçalo do Amarante',
    },
    {
        estadoid: 'CE',
        value: 'São João do Jaguaribe',
        label: 'São João do Jaguaribe',
    },
    {
        estadoid: 'CE',
        value: 'São Luís do Curu',
        label: 'São Luís do Curu',
    },
    {
        estadoid: 'CE',
        value: 'Senador Pompeu',
        label: 'Senador Pompeu',
    },
    {
        estadoid: 'CE',
        value: 'Senador Sá',
        label: 'Senador Sá',
    },
    {
        estadoid: 'CE',
        value: 'Sobral',
        label: 'Sobral',
    },
    {
        estadoid: 'CE',
        value: 'Solonópole',
        label: 'Solonópole',
    },
    {
        estadoid: 'CE',
        value: 'Tabuleiro do Norte',
        label: 'Tabuleiro do Norte',
    },
    {
        estadoid: 'CE',
        value: 'Tamboril',
        label: 'Tamboril',
    },
    {
        estadoid: 'CE',
        value: 'Tarrafas',
        label: 'Tarrafas',
    },
    {
        estadoid: 'CE',
        value: 'Tauá',
        label: 'Tauá',
    },
    {
        estadoid: 'CE',
        value: 'Tejuçuoca',
        label: 'Tejuçuoca',
    },
    {
        estadoid: 'CE',
        value: 'Tianguá',
        label: 'Tianguá',
    },
    {
        estadoid: 'CE',
        value: 'Trairi',
        label: 'Trairi',
    },
    {
        estadoid: 'CE',
        value: 'Tururu',
        label: 'Tururu',
    },
    {
        estadoid: 'CE',
        value: 'Ubajara',
        label: 'Ubajara',
    },
    {
        estadoid: 'CE',
        value: 'Umari',
        label: 'Umari',
    },
    {
        estadoid: 'CE',
        value: 'Umirim',
        label: 'Umirim',
    },
    {
        estadoid: 'CE',
        value: 'Uruburetama',
        label: 'Uruburetama',
    },
    {
        estadoid: 'CE',
        value: 'Uruoca',
        label: 'Uruoca',
    },
    {
        estadoid: 'CE',
        value: 'Varjota',
        label: 'Varjota',
    },
    {
        estadoid: 'CE',
        value: 'Várzea Alegre',
        label: 'Várzea Alegre',
    },
    {
        estadoid: 'CE',
        value: 'Viçosa do Ceará',
        label: 'Viçosa do Ceará',
    },
    {
        estadoid: 'DF',
        label: 'Brasília',
        value: 'Brasília',
    },
    {
        estadoid: 'ES',
        value: 'Afonso Cláudio',
        label: 'Afonso Cláudio',
    },
    {
        estadoid: 'ES',
        value: 'Água Doce do Norte',
        label: 'Água Doce do Norte',
    },
    {
        estadoid: 'ES',
        value: 'Águia Branca',
        label: 'Águia Branca',
    },
    {
        estadoid: 'ES',
        value: 'Alegre',
        label: 'Alegre',
    },
    {
        estadoid: 'ES',
        value: 'Alfredo Chaves',
        label: 'Alfredo Chaves',
    },
    {
        estadoid: 'ES',
        value: 'Alto Rio Novo',
        label: 'Alto Rio Novo',
    },
    {
        estadoid: 'ES',
        value: 'Anchieta',
        label: 'Anchieta',
    },
    {
        estadoid: 'ES',
        value: 'Apiacá',
        label: 'Apiacá',
    },
    {
        estadoid: 'ES',
        value: 'Aracruz',
        label: 'Aracruz',
    },
    {
        estadoid: 'ES',
        value: 'Atilio Vivacqua',
        label: 'Atilio Vivacqua',
    },
    {
        estadoid: 'ES',
        value: 'Baixo Guandu',
        label: 'Baixo Guandu',
    },
    {
        estadoid: 'ES',
        value: 'Barra de São Francisco',
        label: 'Barra de São Francisco',
    },
    {
        estadoid: 'ES',
        value: 'Boa Esperança',
        label: 'Boa Esperança',
    },
    {
        estadoid: 'ES',
        value: 'Bom Jesus do Norte',
        label: 'Bom Jesus do Norte',
    },
    {
        estadoid: 'ES',
        value: 'Brejetuba',
        label: 'Brejetuba',
    },
    {
        estadoid: 'ES',
        value: 'Cachoeiro de Itapemirim',
        label: 'Cachoeiro de Itapemirim',
    },
    {
        estadoid: 'ES',
        value: 'Cariacica',
        label: 'Cariacica',
    },
    {
        estadoid: 'ES',
        value: 'Castelo',
        label: 'Castelo',
    },
    {
        estadoid: 'ES',
        value: 'Colatina',
        label: 'Colatina',
    },
    {
        estadoid: 'ES',
        value: 'Conceição da Barra',
        label: 'Conceição da Barra',
    },
    {
        estadoid: 'ES',
        value: 'Conceição do Castelo',
        label: 'Conceição do Castelo',
    },
    {
        estadoid: 'ES',
        value: 'Divino de São Lourenço',
        label: 'Divino de São Lourenço',
    },
    {
        estadoid: 'ES',
        value: 'Domingos Martins',
        label: 'Domingos Martins',
    },
    {
        estadoid: 'ES',
        value: 'Dores do Rio Preto',
        label: 'Dores do Rio Preto',
    },
    {
        estadoid: 'ES',
        value: 'Ecoporanga',
        label: 'Ecoporanga',
    },
    {
        estadoid: 'ES',
        value: 'Fundão',
        label: 'Fundão',
    },
    {
        estadoid: 'ES',
        value: 'Governador Lindenberg',
        label: 'Governador Lindenberg',
    },
    {
        estadoid: 'ES',
        value: 'Guaçuí',
        label: 'Guaçuí',
    },
    {
        estadoid: 'ES',
        value: 'Guarapari',
        label: 'Guarapari',
    },
    {
        estadoid: 'ES',
        value: 'Ibatiba',
        label: 'Ibatiba',
    },
    {
        estadoid: 'ES',
        value: 'Ibiraçu',
        label: 'Ibiraçu',
    },
    {
        estadoid: 'ES',
        value: 'Ibitirama',
        label: 'Ibitirama',
    },
    {
        estadoid: 'ES',
        value: 'Iconha',
        label: 'Iconha',
    },
    {
        estadoid: 'ES',
        value: 'Irupi',
        label: 'Irupi',
    },
    {
        estadoid: 'ES',
        value: 'Itaguaçu',
        label: 'Itaguaçu',
    },
    {
        estadoid: 'ES',
        value: 'Itapemirim',
        label: 'Itapemirim',
    },
    {
        estadoid: 'ES',
        value: 'Itarana',
        label: 'Itarana',
    },
    {
        estadoid: 'ES',
        value: 'Iúna',
        label: 'Iúna',
    },
    {
        estadoid: 'ES',
        value: 'Jaguaré',
        label: 'Jaguaré',
    },
    {
        estadoid: 'ES',
        value: 'Jerônimo Monteiro',
        label: 'Jerônimo Monteiro',
    },
    {
        estadoid: 'ES',
        value: 'João Neiva',
        label: 'João Neiva',
    },
    {
        estadoid: 'ES',
        value: 'Laranja da Terra',
        label: 'Laranja da Terra',
    },
    {
        estadoid: 'ES',
        value: 'Linhares',
        label: 'Linhares',
    },
    {
        estadoid: 'ES',
        value: 'Mantenópolis',
        label: 'Mantenópolis',
    },
    {
        estadoid: 'ES',
        value: 'Marataizes',
        label: 'Marataizes',
    },
    {
        estadoid: 'ES',
        value: 'Marechal Floriano',
        label: 'Marechal Floriano',
    },
    {
        estadoid: 'ES',
        value: 'Marilândia',
        label: 'Marilândia',
    },
    {
        estadoid: 'ES',
        value: 'Mimoso do Sul',
        label: 'Mimoso do Sul',
    },
    {
        estadoid: 'ES',
        value: 'Montanha',
        label: 'Montanha',
    },
    {
        estadoid: 'ES',
        value: 'Mucurici',
        label: 'Mucurici',
    },
    {
        estadoid: 'ES',
        value: 'Muniz Freire',
        label: 'Muniz Freire',
    },
    {
        estadoid: 'ES',
        value: 'Muqui',
        label: 'Muqui',
    },
    {
        estadoid: 'ES',
        value: 'Nova Venécia',
        label: 'Nova Venécia',
    },
    {
        estadoid: 'ES',
        value: 'Pancas',
        label: 'Pancas',
    },
    {
        estadoid: 'ES',
        value: 'Pedro Canário',
        label: 'Pedro Canário',
    },
    {
        estadoid: 'ES',
        value: 'Pinheiros',
        label: 'Pinheiros',
    },
    {
        estadoid: 'ES',
        value: 'Piúma',
        label: 'Piúma',
    },
    {
        estadoid: 'ES',
        value: 'Ponto Belo',
        label: 'Ponto Belo',
    },
    {
        estadoid: 'ES',
        value: 'Presidente Kennedy',
        label: 'Presidente Kennedy',
    },
    {
        estadoid: 'ES',
        value: 'Rio Bananal',
        label: 'Rio Bananal',
    },
    {
        estadoid: 'ES',
        value: 'Rio Novo do Sul',
        label: 'Rio Novo do Sul',
    },
    {
        estadoid: 'ES',
        value: 'Santa Leopoldina',
        label: 'Santa Leopoldina',
    },
    {
        estadoid: 'ES',
        value: 'Santa Maria de Jetibá',
        label: 'Santa Maria de Jetibá',
    },
    {
        estadoid: 'ES',
        value: 'Santa Teresa',
        label: 'Santa Teresa',
    },
    {
        estadoid: 'ES',
        value: 'São Domingos do Norte',
        label: 'São Domingos do Norte',
    },
    {
        estadoid: 'ES',
        value: 'São Gabriel da Palha',
        label: 'São Gabriel da Palha',
    },
    {
        estadoid: 'ES',
        value: 'São José do Calçado',
        label: 'São José do Calçado',
    },
    {
        estadoid: 'ES',
        value: 'São Mateus',
        label: 'São Mateus',
    },
    {
        estadoid: 'ES',
        value: 'São Roque do Canaã',
        label: 'São Roque do Canaã',
    },
    {
        estadoid: 'ES',
        value: 'Serra',
        label: 'Serra',
    },
    {
        estadoid: 'ES',
        value: 'Sooretama',
        label: 'Sooretama',
    },
    {
        estadoid: 'ES',
        value: 'Vargem Alta',
        label: 'Vargem Alta',
    },
    {
        estadoid: 'ES',
        value: 'Venda Nova do Imigrante',
        label: 'Venda Nova do Imigrante',
    },
    {
        estadoid: 'ES',
        value: 'Viana',
        label: 'Viana',
    },
    {
        estadoid: 'ES',
        value: 'Vila Pavão',
        label: 'Vila Pavão',
    },
    {
        estadoid: 'ES',
        value: 'Vila Valério',
        label: 'Vila Valério',
    },
    {
        estadoid: 'ES',
        value: 'Vila Velha',
        label: 'Vila Velha',
    },
    {
        estadoid: 'ES',
        label: 'Vitória',
        value: 'Vitória',
    },
    {
        estadoid: 'GO',
        value: 'Abadia de Goiás',
        label: 'Abadia de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Abadiânia',
        label: 'Abadiânia',
    },
    {
        estadoid: 'GO',
        value: 'Acreúna',
        label: 'Acreúna',
    },
    {
        estadoid: 'GO',
        value: 'Adelândia',
        label: 'Adelândia',
    },
    {
        estadoid: 'GO',
        value: 'Água Fria de Goiás',
        label: 'Água Fria de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Água Limpa',
        label: 'Água Limpa',
    },
    {
        estadoid: 'GO',
        value: 'Águas Lindas de Goiás',
        label: 'Águas Lindas de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Alexânia',
        label: 'Alexânia',
    },
    {
        estadoid: 'GO',
        value: 'Aloândia',
        label: 'Aloândia',
    },
    {
        estadoid: 'GO',
        value: 'Alto Horizonte',
        label: 'Alto Horizonte',
    },
    {
        estadoid: 'GO',
        value: 'Alto Paraíso de Goiás',
        label: 'Alto Paraíso de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Alvorada do Norte',
        label: 'Alvorada do Norte',
    },
    {
        estadoid: 'GO',
        value: 'Amaralina',
        label: 'Amaralina',
    },
    {
        estadoid: 'GO',
        value: 'Americano do Brasil',
        label: 'Americano do Brasil',
    },
    {
        estadoid: 'GO',
        value: 'Amorinópolis',
        label: 'Amorinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Anápolis',
        label: 'Anápolis',
    },
    {
        estadoid: 'GO',
        value: 'Anhanguera',
        label: 'Anhanguera',
    },
    {
        estadoid: 'GO',
        value: 'Anicuns',
        label: 'Anicuns',
    },
    {
        estadoid: 'GO',
        value: 'Aparecida de Goiânia',
        label: 'Aparecida de Goiânia',
    },
    {
        estadoid: 'GO',
        value: 'Aparecida do Rio Doce',
        label: 'Aparecida do Rio Doce',
    },
    {
        estadoid: 'GO',
        value: 'Aporé',
        label: 'Aporé',
    },
    {
        estadoid: 'GO',
        value: 'Araçu',
        label: 'Araçu',
    },
    {
        estadoid: 'GO',
        value: 'Aragarças',
        label: 'Aragarças',
    },
    {
        estadoid: 'GO',
        value: 'Aragoiânia',
        label: 'Aragoiânia',
    },
    {
        estadoid: 'GO',
        value: 'Araguapaz',
        label: 'Araguapaz',
    },
    {
        estadoid: 'GO',
        value: 'Arenópolis',
        label: 'Arenópolis',
    },
    {
        estadoid: 'GO',
        value: 'Aruanã',
        label: 'Aruanã',
    },
    {
        estadoid: 'GO',
        value: 'Aurilândia',
        label: 'Aurilândia',
    },
    {
        estadoid: 'GO',
        value: 'Avelinópolis',
        label: 'Avelinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Baliza',
        label: 'Baliza',
    },
    {
        estadoid: 'GO',
        value: 'Barro Alto',
        label: 'Barro Alto',
    },
    {
        estadoid: 'GO',
        value: 'Bela Vista de Goiás',
        label: 'Bela Vista de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Bom Jardim de Goiás',
        label: 'Bom Jardim de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Bom Jesus de Goiás',
        label: 'Bom Jesus de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Bonfinópolis',
        label: 'Bonfinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Bonópolis',
        label: 'Bonópolis',
    },
    {
        estadoid: 'GO',
        value: 'Brazabrantes',
        label: 'Brazabrantes',
    },
    {
        estadoid: 'GO',
        value: 'Britânia',
        label: 'Britânia',
    },
    {
        estadoid: 'GO',
        value: 'Buriti Alegre',
        label: 'Buriti Alegre',
    },
    {
        estadoid: 'GO',
        value: 'Buriti de Goiás',
        label: 'Buriti de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Buritinópolis',
        label: 'Buritinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Cabeceiras',
        label: 'Cabeceiras',
    },
    {
        estadoid: 'GO',
        value: 'Cachoeira Alta',
        label: 'Cachoeira Alta',
    },
    {
        estadoid: 'GO',
        value: 'Cachoeira de Goiás',
        label: 'Cachoeira de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Cachoeira Dourada',
        label: 'Cachoeira Dourada',
    },
    {
        estadoid: 'GO',
        value: 'Caçu',
        label: 'Caçu',
    },
    {
        estadoid: 'GO',
        value: 'Caiapônia',
        label: 'Caiapônia',
    },
    {
        estadoid: 'GO',
        value: 'Caldas Novas',
        label: 'Caldas Novas',
    },
    {
        estadoid: 'GO',
        value: 'Caldazinha',
        label: 'Caldazinha',
    },
    {
        estadoid: 'GO',
        value: 'Campestre de Goiás',
        label: 'Campestre de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Campinaçu',
        label: 'Campinaçu',
    },
    {
        estadoid: 'GO',
        value: 'Campinorte',
        label: 'Campinorte',
    },
    {
        estadoid: 'GO',
        value: 'Campo Alegre de Goiás',
        label: 'Campo Alegre de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Campos Limpo de Goiás',
        label: 'Campos Limpo de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Campos Belos',
        label: 'Campos Belos',
    },
    {
        estadoid: 'GO',
        value: 'Campos Verdes',
        label: 'Campos Verdes',
    },
    {
        estadoid: 'GO',
        value: 'Carmo do Rio Verde',
        label: 'Carmo do Rio Verde',
    },
    {
        estadoid: 'GO',
        value: 'Castelândia',
        label: 'Castelândia',
    },
    {
        estadoid: 'GO',
        value: 'Catalão',
        label: 'Catalão',
    },
    {
        estadoid: 'GO',
        value: 'Caturaí',
        label: 'Caturaí',
    },
    {
        estadoid: 'GO',
        value: 'Cavalcante',
        label: 'Cavalcante',
    },
    {
        estadoid: 'GO',
        value: 'Ceres',
        label: 'Ceres',
    },
    {
        estadoid: 'GO',
        value: 'Cezarina',
        label: 'Cezarina',
    },
    {
        estadoid: 'GO',
        value: 'Chapadão do Céu',
        label: 'Chapadão do Céu',
    },
    {
        estadoid: 'GO',
        value: 'Cidade Ocidental',
        label: 'Cidade Ocidental',
    },
    {
        estadoid: 'GO',
        value: 'Cocalzinho de Goiás',
        label: 'Cocalzinho de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Colinas do Sul',
        label: 'Colinas do Sul',
    },
    {
        estadoid: 'GO',
        value: 'Córrego do Ouro',
        label: 'Córrego do Ouro',
    },
    {
        estadoid: 'GO',
        value: 'Corumbá de Goiás',
        label: 'Corumbá de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Corumbaíba',
        label: 'Corumbaíba',
    },
    {
        estadoid: 'GO',
        value: 'Cristalina',
        label: 'Cristalina',
    },
    {
        estadoid: 'GO',
        value: 'Cristianópolis',
        label: 'Cristianópolis',
    },
    {
        estadoid: 'GO',
        value: 'Crixás',
        label: 'Crixás',
    },
    {
        estadoid: 'GO',
        value: 'Cromínia',
        label: 'Cromínia',
    },
    {
        estadoid: 'GO',
        value: 'Cumari',
        label: 'Cumari',
    },
    {
        estadoid: 'GO',
        value: 'Damianópolis',
        label: 'Damianópolis',
    },
    {
        estadoid: 'GO',
        value: 'Damolândia',
        label: 'Damolândia',
    },
    {
        estadoid: 'GO',
        value: 'Davinópolis',
        label: 'Davinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Diorama',
        label: 'Diorama',
    },
    {
        estadoid: 'GO',
        value: 'Divinópolis de Goiás',
        label: 'Divinópolis de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Doverlândia',
        label: 'Doverlândia',
    },
    {
        estadoid: 'GO',
        value: 'Edealina',
        label: 'Edealina',
    },
    {
        estadoid: 'GO',
        value: 'Edéia',
        label: 'Edéia',
    },
    {
        estadoid: 'GO',
        value: 'Estrela do Norte',
        label: 'Estrela do Norte',
    },
    {
        estadoid: 'GO',
        value: 'Faina',
        label: 'Faina',
    },
    {
        estadoid: 'GO',
        value: 'Fazenda Nova',
        label: 'Fazenda Nova',
    },
    {
        estadoid: 'GO',
        value: 'Firminópolis',
        label: 'Firminópolis',
    },
    {
        estadoid: 'GO',
        value: 'Flores de Goiás',
        label: 'Flores de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Formosa',
        label: 'Formosa',
    },
    {
        estadoid: 'GO',
        value: 'Formoso',
        label: 'Formoso',
    },
    {
        estadoid: 'GO',
        value: 'Gameleira de Goiás',
        label: 'Gameleira de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Goianápolis',
        label: 'Goianápolis',
    },
    {
        estadoid: 'GO',
        value: 'Goiandira',
        label: 'Goiandira',
    },
    {
        estadoid: 'GO',
        value: 'Goianésia',
        label: 'Goianésia',
    },
    {
        estadoid: 'GO',
        value: 'Goianira',
        label: 'Goianira',
    },
    {
        estadoid: 'GO',
        value: 'Goiás',
        label: 'Goiás',
    },
    {
        estadoid: 'GO',
        label: 'Goiânia',
        value: 'Goiânia',
    },
    {
        estadoid: 'GO',
        value: 'Goiatuba',
        label: 'Goiatuba',
    },
    {
        estadoid: 'GO',
        value: 'Gouvelândia',
        label: 'Gouvelândia',
    },
    {
        estadoid: 'GO',
        value: 'Guapó',
        label: 'Guapó',
    },
    {
        estadoid: 'GO',
        value: 'Guaraíta',
        label: 'Guaraíta',
    },
    {
        estadoid: 'GO',
        value: 'Guarani de Goiás',
        label: 'Guarani de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Guarinos',
        label: 'Guarinos',
    },
    {
        estadoid: 'GO',
        value: 'Heitoraí',
        label: 'Heitoraí',
    },
    {
        estadoid: 'GO',
        value: 'Hidrolândia',
        label: 'Hidrolândia',
    },
    {
        estadoid: 'GO',
        value: 'Hidrolina',
        label: 'Hidrolina',
    },
    {
        estadoid: 'GO',
        value: 'Iaciara',
        label: 'Iaciara',
    },
    {
        estadoid: 'GO',
        value: 'Inaciolândia',
        label: 'Inaciolândia',
    },
    {
        estadoid: 'GO',
        value: 'Indiara',
        label: 'Indiara',
    },
    {
        estadoid: 'GO',
        value: 'Inhumas',
        label: 'Inhumas',
    },
    {
        estadoid: 'GO',
        value: 'Ipameri',
        label: 'Ipameri',
    },
    {
        estadoid: 'GO',
        value: 'Ipiranga de Goiás',
        label: 'Ipiranga de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Iporá',
        label: 'Iporá',
    },
    {
        estadoid: 'GO',
        value: 'Israelândia',
        label: 'Israelândia',
    },
    {
        estadoid: 'GO',
        value: 'Itaberaí',
        label: 'Itaberaí',
    },
    {
        estadoid: 'GO',
        value: 'Itaguari',
        label: 'Itaguari',
    },
    {
        estadoid: 'GO',
        value: 'Itaguaru',
        label: 'Itaguaru',
    },
    {
        estadoid: 'GO',
        value: 'Itajá',
        label: 'Itajá',
    },
    {
        estadoid: 'GO',
        value: 'Itapaci',
        label: 'Itapaci',
    },
    {
        estadoid: 'GO',
        value: 'Itapirapuã',
        label: 'Itapirapuã',
    },
    {
        estadoid: 'GO',
        value: 'Itapuranga',
        label: 'Itapuranga',
    },
    {
        estadoid: 'GO',
        value: 'Itarumã',
        label: 'Itarumã',
    },
    {
        estadoid: 'GO',
        value: 'Itauçu',
        label: 'Itauçu',
    },
    {
        estadoid: 'GO',
        value: 'Itumbiara',
        label: 'Itumbiara',
    },
    {
        estadoid: 'GO',
        value: 'Ivolândia',
        label: 'Ivolândia',
    },
    {
        estadoid: 'GO',
        value: 'Jandaia',
        label: 'Jandaia',
    },
    {
        estadoid: 'GO',
        value: 'Jaraguá',
        label: 'Jaraguá',
    },
    {
        estadoid: 'GO',
        value: 'Jataí',
        label: 'Jataí',
    },
    {
        estadoid: 'GO',
        value: 'Jaupaci',
        label: 'Jaupaci',
    },
    {
        estadoid: 'GO',
        value: 'Jesúpolis',
        label: 'Jesúpolis',
    },
    {
        estadoid: 'GO',
        value: 'Joviânia',
        label: 'Joviânia',
    },
    {
        estadoid: 'GO',
        value: 'Jussara',
        label: 'Jussara',
    },
    {
        estadoid: 'GO',
        value: 'Lagoa Santa',
        label: 'Lagoa Santa',
    },
    {
        estadoid: 'GO',
        value: 'Leopoldo de Bulhões',
        label: 'Leopoldo de Bulhões',
    },
    {
        estadoid: 'GO',
        value: 'Luziânia',
        label: 'Luziânia',
    },
    {
        estadoid: 'GO',
        value: 'Mairipotaba',
        label: 'Mairipotaba',
    },
    {
        estadoid: 'GO',
        value: 'Mambaí',
        label: 'Mambaí',
    },
    {
        estadoid: 'GO',
        value: 'Mara Rosa',
        label: 'Mara Rosa',
    },
    {
        estadoid: 'GO',
        value: 'Marzagão',
        label: 'Marzagão',
    },
    {
        estadoid: 'GO',
        value: 'Matrinchã',
        label: 'Matrinchã',
    },
    {
        estadoid: 'GO',
        value: 'Maurilândia',
        label: 'Maurilândia',
    },
    {
        estadoid: 'GO',
        value: 'Mimoso de Goiás',
        label: 'Mimoso de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Minaçu',
        label: 'Minaçu',
    },
    {
        estadoid: 'GO',
        value: 'Mineiros',
        label: 'Mineiros',
    },
    {
        estadoid: 'GO',
        value: 'Moiporá',
        label: 'Moiporá',
    },
    {
        estadoid: 'GO',
        value: 'Monte Alegre de Goiás',
        label: 'Monte Alegre de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Montes Claros de Goiás',
        label: 'Montes Claros de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Montividiu',
        label: 'Montividiu',
    },
    {
        estadoid: 'GO',
        value: 'Montividiu do Norte',
        label: 'Montividiu do Norte',
    },
    {
        estadoid: 'GO',
        value: 'Morrinhos',
        label: 'Morrinhos',
    },
    {
        estadoid: 'GO',
        value: 'Morro Agudo de Goiás',
        label: 'Morro Agudo de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Mossâmedes',
        label: 'Mossâmedes',
    },
    {
        estadoid: 'GO',
        value: 'Mozarlândia',
        label: 'Mozarlândia',
    },
    {
        estadoid: 'GO',
        value: 'Mundo Novo',
        label: 'Mundo Novo',
    },
    {
        estadoid: 'GO',
        value: 'Mutunópolis',
        label: 'Mutunópolis',
    },
    {
        estadoid: 'GO',
        value: 'Nazário',
        label: 'Nazário',
    },
    {
        estadoid: 'GO',
        value: 'Nerópolis',
        label: 'Nerópolis',
    },
    {
        estadoid: 'GO',
        value: 'Niquelândia',
        label: 'Niquelândia',
    },
    {
        estadoid: 'GO',
        value: 'Nova América',
        label: 'Nova América',
    },
    {
        estadoid: 'GO',
        value: 'Nova Aurora',
        label: 'Nova Aurora',
    },
    {
        estadoid: 'GO',
        value: 'Nova Crixás',
        label: 'Nova Crixás',
    },
    {
        estadoid: 'GO',
        value: 'Nova Glória',
        label: 'Nova Glória',
    },
    {
        estadoid: 'GO',
        value: 'Nova Iguaçu de Goiás',
        label: 'Nova Iguaçu de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Nova Roma',
        label: 'Nova Roma',
    },
    {
        estadoid: 'GO',
        value: 'Nova Veneza',
        label: 'Nova Veneza',
    },
    {
        estadoid: 'GO',
        value: 'Novo Brasil',
        label: 'Novo Brasil',
    },
    {
        estadoid: 'GO',
        value: 'Novo Gama',
        label: 'Novo Gama',
    },
    {
        estadoid: 'GO',
        value: 'Novo Planalto',
        label: 'Novo Planalto',
    },
    {
        estadoid: 'GO',
        value: 'Orizona',
        label: 'Orizona',
    },
    {
        estadoid: 'GO',
        value: 'Ouro Verde de Goiás',
        label: 'Ouro Verde de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Ouvidor',
        label: 'Ouvidor',
    },
    {
        estadoid: 'GO',
        value: 'Padre Bernardo',
        label: 'Padre Bernardo',
    },
    {
        estadoid: 'GO',
        value: 'Palestina de Goiás',
        label: 'Palestina de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Palmeiras de Goiás',
        label: 'Palmeiras de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Palmelo',
        label: 'Palmelo',
    },
    {
        estadoid: 'GO',
        value: 'Palminópolis',
        label: 'Palminópolis',
    },
    {
        estadoid: 'GO',
        value: 'Panamá',
        label: 'Panamá',
    },
    {
        estadoid: 'GO',
        value: 'Paranaiguara',
        label: 'Paranaiguara',
    },
    {
        estadoid: 'GO',
        value: 'Paraúna',
        label: 'Paraúna',
    },
    {
        estadoid: 'GO',
        value: 'Perolândia',
        label: 'Perolândia',
    },
    {
        estadoid: 'GO',
        value: 'Petrolina de Goiás',
        label: 'Petrolina de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Pilar de Goiás',
        label: 'Pilar de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Piracanjuba',
        label: 'Piracanjuba',
    },
    {
        estadoid: 'GO',
        value: 'Piranhas',
        label: 'Piranhas',
    },
    {
        estadoid: 'GO',
        value: 'Pirenópolis',
        label: 'Pirenópolis',
    },
    {
        estadoid: 'GO',
        value: 'Pires do Rio',
        label: 'Pires do Rio',
    },
    {
        estadoid: 'GO',
        value: 'Planaltina',
        label: 'Planaltina',
    },
    {
        estadoid: 'GO',
        value: 'Pontalina',
        label: 'Pontalina',
    },
    {
        estadoid: 'GO',
        value: 'Porangatu',
        label: 'Porangatu',
    },
    {
        estadoid: 'GO',
        value: 'Porteirão',
        label: 'Porteirão',
    },
    {
        estadoid: 'GO',
        value: 'Portelândia',
        label: 'Portelândia',
    },
    {
        estadoid: 'GO',
        value: 'Posse',
        label: 'Posse',
    },
    {
        estadoid: 'GO',
        value: 'Professor Jamil',
        label: 'Professor Jamil',
    },
    {
        estadoid: 'GO',
        value: 'Quirinópolis',
        label: 'Quirinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Rialma',
        label: 'Rialma',
    },
    {
        estadoid: 'GO',
        value: 'Rianápolis',
        label: 'Rianápolis',
    },
    {
        estadoid: 'GO',
        value: 'Rio Quente',
        label: 'Rio Quente',
    },
    {
        estadoid: 'GO',
        value: 'Rio Verde',
        label: 'Rio Verde',
    },
    {
        estadoid: 'GO',
        value: 'Rubiataba',
        label: 'Rubiataba',
    },
    {
        estadoid: 'GO',
        value: 'Sanclerlândia',
        label: 'Sanclerlândia',
    },
    {
        estadoid: 'GO',
        value: 'Santa Bárbara de Goiás',
        label: 'Santa Bárbara de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santa Cruz de Goiás',
        label: 'Santa Cruz de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santa Fé de Goiás',
        label: 'Santa Fé de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santa Helena de Goiás',
        label: 'Santa Helena de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santa Isabel',
        label: 'Santa Isabel',
    },
    {
        estadoid: 'GO',
        value: 'Santa Rita do Araguaia',
        label: 'Santa Rita do Araguaia',
    },
    {
        estadoid: 'GO',
        value: 'Santa Rita do Novo Destino',
        label: 'Santa Rita do Novo Destino',
    },
    {
        estadoid: 'GO',
        value: 'Santa Rosa de Goiás',
        label: 'Santa Rosa de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santa Tereza de Goiás',
        label: 'Santa Tereza de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santa Terezinha de Goiás',
        label: 'Santa Terezinha de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santo Antônio da Barra',
        label: 'Santo Antônio da Barra',
    },
    {
        estadoid: 'GO',
        value: 'Santo Antônio de Goiás',
        label: 'Santo Antônio de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Santo Antônio do Descoberto',
        label: 'Santo Antônio do Descoberto',
    },
    {
        estadoid: 'GO',
        value: 'São Domingos',
        label: 'São Domingos',
    },
    {
        estadoid: 'GO',
        value: 'São Francisco de Goiás',
        label: 'São Francisco de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'São João d\'Aliança',
        label: 'São João d\'Aliança',
    },
    {
        estadoid: 'GO',
        value: 'São João da Paraúna',
        label: 'São João da Paraúna',
    },
    {
        estadoid: 'GO',
        value: 'São Luís de Montes Belos',
        label: 'São Luís de Montes Belos',
    },
    {
        estadoid: 'GO',
        value: 'São Luíz do Norte',
        label: 'São Luíz do Norte',
    },
    {
        estadoid: 'GO',
        value: 'São Miguel do Araguaia',
        label: 'São Miguel do Araguaia',
    },
    {
        estadoid: 'GO',
        value: 'São Miguel do Passa Quatro',
        label: 'São Miguel do Passa Quatro',
    },
    {
        estadoid: 'GO',
        value: 'São Patrício',
        label: 'São Patrício',
    },
    {
        estadoid: 'GO',
        value: 'São Simão',
        label: 'São Simão',
    },
    {
        estadoid: 'GO',
        value: 'Senador Canedo',
        label: 'Senador Canedo',
    },
    {
        estadoid: 'GO',
        value: 'Serranópolis',
        label: 'Serranópolis',
    },
    {
        estadoid: 'GO',
        value: 'Silvânia',
        label: 'Silvânia',
    },
    {
        estadoid: 'GO',
        value: 'Simolândia',
        label: 'Simolândia',
    },
    {
        estadoid: 'GO',
        value: 'Sítio d\'Abadia',
        label: 'Sítio d\'Abadia',
    },
    {
        estadoid: 'GO',
        value: 'Taquaral de Goiás',
        label: 'Taquaral de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Teresina de Goiás',
        label: 'Teresina de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Terezópolis de Goiás',
        label: 'Terezópolis de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Três Ranchos',
        label: 'Três Ranchos',
    },
    {
        estadoid: 'GO',
        value: 'Trindade',
        label: 'Trindade',
    },
    {
        estadoid: 'GO',
        value: 'Trombas',
        label: 'Trombas',
    },
    {
        estadoid: 'GO',
        value: 'Turvânia',
        label: 'Turvânia',
    },
    {
        estadoid: 'GO',
        value: 'Turvelândia',
        label: 'Turvelândia',
    },
    {
        estadoid: 'GO',
        value: 'Uirapuru',
        label: 'Uirapuru',
    },
    {
        estadoid: 'GO',
        value: 'Uruaçu',
        label: 'Uruaçu',
    },
    {
        estadoid: 'GO',
        value: 'Uruana',
        label: 'Uruana',
    },
    {
        estadoid: 'GO',
        value: 'Urutaí',
        label: 'Urutaí',
    },
    {
        estadoid: 'GO',
        value: 'Valparaíso de Goiás',
        label: 'Valparaíso de Goiás',
    },
    {
        estadoid: 'GO',
        value: 'Varjão',
        label: 'Varjão',
    },
    {
        estadoid: 'GO',
        value: 'Vianópolis',
        label: 'Vianópolis',
    },
    {
        estadoid: 'GO',
        value: 'Vicentinópolis',
        label: 'Vicentinópolis',
    },
    {
        estadoid: 'GO',
        value: 'Vila Boa',
        label: 'Vila Boa',
    },
    {
        estadoid: 'GO',
        value: 'Vila Propício',
        label: 'Vila Propício',
    },
    {
        estadoid: 'MA',
        value: 'Açailândia',
        label: 'Açailândia',
    },
    {
        estadoid: 'MA',
        value: 'Afonso Cunha',
        label: 'Afonso Cunha',
    },
    {
        estadoid: 'MA',
        value: 'Água Doce do Maranhão',
        label: 'Água Doce do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Alcântara',
        label: 'Alcântara',
    },
    {
        estadoid: 'MA',
        value: 'Aldeias Altas',
        label: 'Aldeias Altas',
    },
    {
        estadoid: 'MA',
        value: 'Altamira do Maranhão',
        label: 'Altamira do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Alto Alegre do Maranhão',
        label: 'Alto Alegre do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Alto Alegre do Pindaré',
        label: 'Alto Alegre do Pindaré',
    },
    {
        estadoid: 'MA',
        value: 'Alto Parnaíba',
        label: 'Alto Parnaíba',
    },
    {
        estadoid: 'MA',
        value: 'Amapá do Maranhão',
        label: 'Amapá do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Amarante do Maranhão',
        label: 'Amarante do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Anajatuba',
        label: 'Anajatuba',
    },
    {
        estadoid: 'MA',
        value: 'Anapurus',
        label: 'Anapurus',
    },
    {
        estadoid: 'MA',
        value: 'Apicum-Açu',
        label: 'Apicum-Açu',
    },
    {
        estadoid: 'MA',
        value: 'Araguanã',
        label: 'Araguanã',
    },
    {
        estadoid: 'MA',
        value: 'Araioses',
        label: 'Araioses',
    },
    {
        estadoid: 'MA',
        value: 'Arame',
        label: 'Arame',
    },
    {
        estadoid: 'MA',
        value: 'Arari',
        label: 'Arari',
    },
    {
        estadoid: 'MA',
        value: 'Axixá',
        label: 'Axixá',
    },
    {
        estadoid: 'MA',
        value: 'Bacabal',
        label: 'Bacabal',
    },
    {
        estadoid: 'MA',
        value: 'Bacabeira',
        label: 'Bacabeira',
    },
    {
        estadoid: 'MA',
        value: 'Bacuri',
        label: 'Bacuri',
    },
    {
        estadoid: 'MA',
        value: 'Bacurituba',
        label: 'Bacurituba',
    },
    {
        estadoid: 'MA',
        value: 'Balsas',
        label: 'Balsas',
    },
    {
        estadoid: 'MA',
        value: 'Barão de Grajaú',
        label: 'Barão de Grajaú',
    },
    {
        estadoid: 'MA',
        value: 'Barra do Corda',
        label: 'Barra do Corda',
    },
    {
        estadoid: 'MA',
        value: 'Barreirinhas',
        label: 'Barreirinhas',
    },
    {
        estadoid: 'MA',
        value: 'Bela Vista do Maranhão',
        label: 'Bela Vista do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Belágua',
        label: 'Belágua',
    },
    {
        estadoid: 'MA',
        value: 'Benedito Leite',
        label: 'Benedito Leite',
    },
    {
        estadoid: 'MA',
        value: 'Bequimão',
        label: 'Bequimão',
    },
    {
        estadoid: 'MA',
        value: 'Bernardo do Mearim',
        label: 'Bernardo do Mearim',
    },
    {
        estadoid: 'MA',
        value: 'Boa Vista do Gurupi',
        label: 'Boa Vista do Gurupi',
    },
    {
        estadoid: 'MA',
        value: 'Bom Jardim',
        label: 'Bom Jardim',
    },
    {
        estadoid: 'MA',
        value: 'Bom Jesus das Selvas',
        label: 'Bom Jesus das Selvas',
    },
    {
        estadoid: 'MA',
        value: 'Bom Lugar',
        label: 'Bom Lugar',
    },
    {
        estadoid: 'MA',
        value: 'Brejo',
        label: 'Brejo',
    },
    {
        estadoid: 'MA',
        value: 'Brejo de Areia',
        label: 'Brejo de Areia',
    },
    {
        estadoid: 'MA',
        value: 'Buriti',
        label: 'Buriti',
    },
    {
        estadoid: 'MA',
        value: 'Buriti Bravo',
        label: 'Buriti Bravo',
    },
    {
        estadoid: 'MA',
        value: 'Buriticupu',
        label: 'Buriticupu',
    },
    {
        estadoid: 'MA',
        value: 'Buritirana',
        label: 'Buritirana',
    },
    {
        estadoid: 'MA',
        value: 'Cachoeira Grande',
        label: 'Cachoeira Grande',
    },
    {
        estadoid: 'MA',
        value: 'Cajapió',
        label: 'Cajapió',
    },
    {
        estadoid: 'MA',
        value: 'Cajari',
        label: 'Cajari',
    },
    {
        estadoid: 'MA',
        value: 'Campestre do Maranhão',
        label: 'Campestre do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Cândido Mendes',
        label: 'Cândido Mendes',
    },
    {
        estadoid: 'MA',
        value: 'Cantanhede',
        label: 'Cantanhede',
    },
    {
        estadoid: 'MA',
        value: 'Capinzal do Norte',
        label: 'Capinzal do Norte',
    },
    {
        estadoid: 'MA',
        value: 'Carolina',
        label: 'Carolina',
    },
    {
        estadoid: 'MA',
        value: 'Carutapera',
        label: 'Carutapera',
    },
    {
        estadoid: 'MA',
        value: 'Caxias',
        label: 'Caxias',
    },
    {
        estadoid: 'MA',
        value: 'Cedral',
        label: 'Cedral',
    },
    {
        estadoid: 'MA',
        value: 'Central do Maranhão',
        label: 'Central do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Centro do Guilherme',
        label: 'Centro do Guilherme',
    },
    {
        estadoid: 'MA',
        value: 'Centro Novo do Maranhão',
        label: 'Centro Novo do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Chapadinha',
        label: 'Chapadinha',
    },
    {
        estadoid: 'MA',
        value: 'Cidelândia',
        label: 'Cidelândia',
    },
    {
        estadoid: 'MA',
        value: 'Codó',
        label: 'Codó',
    },
    {
        estadoid: 'MA',
        value: 'Coelho Neto',
        label: 'Coelho Neto',
    },
    {
        estadoid: 'MA',
        value: 'Colinas',
        label: 'Colinas',
    },
    {
        estadoid: 'MA',
        value: 'Conceição do Lago-Açu',
        label: 'Conceição do Lago-Açu',
    },
    {
        estadoid: 'MA',
        value: 'Coroatá',
        label: 'Coroatá',
    },
    {
        estadoid: 'MA',
        value: 'Cururupu',
        label: 'Cururupu',
    },
    {
        estadoid: 'MA',
        value: 'Davinópolis',
        label: 'Davinópolis',
    },
    {
        estadoid: 'MA',
        value: 'Dom Pedro',
        label: 'Dom Pedro',
    },
    {
        estadoid: 'MA',
        value: 'Duque Bacelar',
        label: 'Duque Bacelar',
    },
    {
        estadoid: 'MA',
        value: 'Esperantinópolis',
        label: 'Esperantinópolis',
    },
    {
        estadoid: 'MA',
        value: 'Estreito',
        label: 'Estreito',
    },
    {
        estadoid: 'MA',
        value: 'Feira Nova do Maranhão',
        label: 'Feira Nova do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Fernando Falcão',
        label: 'Fernando Falcão',
    },
    {
        estadoid: 'MA',
        value: 'Formosa da Serra Negra',
        label: 'Formosa da Serra Negra',
    },
    {
        estadoid: 'MA',
        value: 'Fortaleza dos Nogueiras',
        label: 'Fortaleza dos Nogueiras',
    },
    {
        estadoid: 'MA',
        value: 'Fortuna',
        label: 'Fortuna',
    },
    {
        estadoid: 'MA',
        value: 'Godofredo Viana',
        label: 'Godofredo Viana',
    },
    {
        estadoid: 'MA',
        value: 'Gonçalves Dias',
        label: 'Gonçalves Dias',
    },
    {
        estadoid: 'MA',
        value: 'Governador Archer',
        label: 'Governador Archer',
    },
    {
        estadoid: 'MA',
        value: 'Governador Edison Lobão',
        label: 'Governador Edison Lobão',
    },
    {
        estadoid: 'MA',
        value: 'Governador Eugênio Barros',
        label: 'Governador Eugênio Barros',
    },
    {
        estadoid: 'MA',
        value: 'Governador Luiz Rocha',
        label: 'Governador Luiz Rocha',
    },
    {
        estadoid: 'MA',
        value: 'Governador Newton Bello',
        label: 'Governador Newton Bello',
    },
    {
        estadoid: 'MA',
        value: 'Governador Nunes Freire',
        label: 'Governador Nunes Freire',
    },
    {
        estadoid: 'MA',
        value: 'Graça Aranha',
        label: 'Graça Aranha',
    },
    {
        estadoid: 'MA',
        value: 'Grajaú',
        label: 'Grajaú',
    },
    {
        estadoid: 'MA',
        value: 'Guimarães',
        label: 'Guimarães',
    },
    {
        estadoid: 'MA',
        value: 'Humberto de Campos',
        label: 'Humberto de Campos',
    },
    {
        estadoid: 'MA',
        value: 'Icatu',
        label: 'Icatu',
    },
    {
        estadoid: 'MA',
        value: 'Igarapé do Meio',
        label: 'Igarapé do Meio',
    },
    {
        estadoid: 'MA',
        value: 'Igarapé Grande',
        label: 'Igarapé Grande',
    },
    {
        estadoid: 'MA',
        value: 'Imperatriz',
        label: 'Imperatriz',
    },
    {
        estadoid: 'MA',
        value: 'Itaipava do Grajaú',
        label: 'Itaipava do Grajaú',
    },
    {
        estadoid: 'MA',
        value: 'Itapecuru Mirim',
        label: 'Itapecuru Mirim',
    },
    {
        estadoid: 'MA',
        value: 'Itinga do Maranhão',
        label: 'Itinga do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Jatobá',
        label: 'Jatobá',
    },
    {
        estadoid: 'MA',
        value: 'Jenipapo dos Vieiras',
        label: 'Jenipapo dos Vieiras',
    },
    {
        estadoid: 'MA',
        value: 'João Lisboa',
        label: 'João Lisboa',
    },
    {
        estadoid: 'MA',
        value: 'Joselândia',
        label: 'Joselândia',
    },
    {
        estadoid: 'MA',
        value: 'Junco do Maranhão',
        label: 'Junco do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Lago da Pedra',
        label: 'Lago da Pedra',
    },
    {
        estadoid: 'MA',
        value: 'Lago do Junco',
        label: 'Lago do Junco',
    },
    {
        estadoid: 'MA',
        value: 'Lago dos Rodrigues',
        label: 'Lago dos Rodrigues',
    },
    {
        estadoid: 'MA',
        value: 'Lago Verde',
        label: 'Lago Verde',
    },
    {
        estadoid: 'MA',
        value: 'Lagoa do Mato',
        label: 'Lagoa do Mato',
    },
    {
        estadoid: 'MA',
        value: 'Lagoa Grande do Maranhão',
        label: 'Lagoa Grande do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Lajeado Novo',
        label: 'Lajeado Novo',
    },
    {
        estadoid: 'MA',
        value: 'Lima Campos',
        label: 'Lima Campos',
    },
    {
        estadoid: 'MA',
        value: 'Loreto',
        label: 'Loreto',
    },
    {
        estadoid: 'MA',
        value: 'Luís Domingues',
        label: 'Luís Domingues',
    },
    {
        estadoid: 'MA',
        value: 'Magalhães de Almeida',
        label: 'Magalhães de Almeida',
    },
    {
        estadoid: 'MA',
        value: 'Maracaçumé',
        label: 'Maracaçumé',
    },
    {
        estadoid: 'MA',
        value: 'Marajá do Sena',
        label: 'Marajá do Sena',
    },
    {
        estadoid: 'MA',
        value: 'Maranhãozinho',
        label: 'Maranhãozinho',
    },
    {
        estadoid: 'MA',
        value: 'Mata Roma',
        label: 'Mata Roma',
    },
    {
        estadoid: 'MA',
        value: 'Matinha',
        label: 'Matinha',
    },
    {
        estadoid: 'MA',
        value: 'Matões',
        label: 'Matões',
    },
    {
        estadoid: 'MA',
        value: 'Matões do Norte',
        label: 'Matões do Norte',
    },
    {
        estadoid: 'MA',
        value: 'Milagres do Maranhão',
        label: 'Milagres do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Mirador',
        label: 'Mirador',
    },
    {
        estadoid: 'MA',
        value: 'Miranda do Norte',
        label: 'Miranda do Norte',
    },
    {
        estadoid: 'MA',
        value: 'Mirinzal',
        label: 'Mirinzal',
    },
    {
        estadoid: 'MA',
        value: 'Monção',
        label: 'Monção',
    },
    {
        estadoid: 'MA',
        value: 'Montes Altos',
        label: 'Montes Altos',
    },
    {
        estadoid: 'MA',
        value: 'Morros',
        label: 'Morros',
    },
    {
        estadoid: 'MA',
        value: 'Nina Rodrigues',
        label: 'Nina Rodrigues',
    },
    {
        estadoid: 'MA',
        value: 'Nova Colinas',
        label: 'Nova Colinas',
    },
    {
        estadoid: 'MA',
        value: 'Nova Iorque',
        label: 'Nova Iorque',
    },
    {
        estadoid: 'MA',
        value: 'Nova Olinda do Maranhão',
        label: 'Nova Olinda do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Olho d\'Água das Cunhãs',
        label: 'Olho d\'Água das Cunhãs',
    },
    {
        estadoid: 'MA',
        value: 'Olinda Nova do Maranhão',
        label: 'Olinda Nova do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Paço do Lumiar',
        label: 'Paço do Lumiar',
    },
    {
        estadoid: 'MA',
        value: 'Palmeirândia',
        label: 'Palmeirândia',
    },
    {
        estadoid: 'MA',
        value: 'Paraibano',
        label: 'Paraibano',
    },
    {
        estadoid: 'MA',
        value: 'Parnarama',
        label: 'Parnarama',
    },
    {
        estadoid: 'MA',
        value: 'Passagem Franca',
        label: 'Passagem Franca',
    },
    {
        estadoid: 'MA',
        value: 'Pastos Bons',
        label: 'Pastos Bons',
    },
    {
        estadoid: 'MA',
        value: 'Paulino Neves',
        label: 'Paulino Neves',
    },
    {
        estadoid: 'MA',
        value: 'Paulo Ramos',
        label: 'Paulo Ramos',
    },
    {
        estadoid: 'MA',
        value: 'Pedreiras',
        label: 'Pedreiras',
    },
    {
        estadoid: 'MA',
        value: 'Pedro do Rosário',
        label: 'Pedro do Rosário',
    },
    {
        estadoid: 'MA',
        value: 'Penalva',
        label: 'Penalva',
    },
    {
        estadoid: 'MA',
        value: 'Peri Mirim',
        label: 'Peri Mirim',
    },
    {
        estadoid: 'MA',
        value: 'Peritoró',
        label: 'Peritoró',
    },
    {
        estadoid: 'MA',
        value: 'Pindaré Mirim',
        label: 'Pindaré Mirim',
    },
    {
        estadoid: 'MA',
        value: 'Pinheiro',
        label: 'Pinheiro',
    },
    {
        estadoid: 'MA',
        value: 'Pio XII',
        label: 'Pio XII',
    },
    {
        estadoid: 'MA',
        value: 'Pirapemas',
        label: 'Pirapemas',
    },
    {
        estadoid: 'MA',
        value: 'Poção de Pedras',
        label: 'Poção de Pedras',
    },
    {
        estadoid: 'MA',
        value: 'Porto Franco',
        label: 'Porto Franco',
    },
    {
        estadoid: 'MA',
        value: 'Porto Rico do Maranhão',
        label: 'Porto Rico do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Presidente Dutra',
        label: 'Presidente Dutra',
    },
    {
        estadoid: 'MA',
        value: 'Presidente Juscelino',
        label: 'Presidente Juscelino',
    },
    {
        estadoid: 'MA',
        value: 'Presidente Médici',
        label: 'Presidente Médici',
    },
    {
        estadoid: 'MA',
        value: 'Presidente Sarney',
        label: 'Presidente Sarney',
    },
    {
        estadoid: 'MA',
        value: 'Presidente Vargas',
        label: 'Presidente Vargas',
    },
    {
        estadoid: 'MA',
        value: 'Primeira Cruz',
        label: 'Primeira Cruz',
    },
    {
        estadoid: 'MA',
        value: 'Raposa',
        label: 'Raposa',
    },
    {
        estadoid: 'MA',
        value: 'Riachão',
        label: 'Riachão',
    },
    {
        estadoid: 'MA',
        value: 'Ribamar Fiquene',
        label: 'Ribamar Fiquene',
    },
    {
        estadoid: 'MA',
        value: 'Rosário',
        label: 'Rosário',
    },
    {
        estadoid: 'MA',
        value: 'Sambaíba',
        label: 'Sambaíba',
    },
    {
        estadoid: 'MA',
        value: 'Santa Filomena do Maranhão',
        label: 'Santa Filomena do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Santa Helena',
        label: 'Santa Helena',
    },
    {
        estadoid: 'MA',
        value: 'Santa Inês',
        label: 'Santa Inês',
    },
    {
        estadoid: 'MA',
        value: 'Santa Luzia',
        label: 'Santa Luzia',
    },
    {
        estadoid: 'MA',
        value: 'Santa Luzia do Paruá',
        label: 'Santa Luzia do Paruá',
    },
    {
        estadoid: 'MA',
        value: 'Santa Quitéria do Maranhão',
        label: 'Santa Quitéria do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Santa Rita',
        label: 'Santa Rita',
    },
    {
        estadoid: 'MA',
        value: 'Santana do Maranhão',
        label: 'Santana do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Santo Amaro do Maranhão',
        label: 'Santo Amaro do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Santo Antônio dos Lopes',
        label: 'Santo Antônio dos Lopes',
    },
    {
        estadoid: 'MA',
        value: 'São Benedito do Rio Preto',
        label: 'São Benedito do Rio Preto',
    },
    {
        estadoid: 'MA',
        value: 'São Bento',
        label: 'São Bento',
    },
    {
        estadoid: 'MA',
        value: 'São Bernardo',
        label: 'São Bernardo',
    },
    {
        estadoid: 'MA',
        value: 'São Domingos do Azeitão',
        label: 'São Domingos do Azeitão',
    },
    {
        estadoid: 'MA',
        value: 'São Domingos do Maranhão',
        label: 'São Domingos do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'São Félix de Balsas',
        label: 'São Félix de Balsas',
    },
    {
        estadoid: 'MA',
        value: 'São Francisco do Brejão',
        label: 'São Francisco do Brejão',
    },
    {
        estadoid: 'MA',
        value: 'São Francisco do Maranhão',
        label: 'São Francisco do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'São João Batista',
        label: 'São João Batista',
    },
    {
        estadoid: 'MA',
        value: 'São João do Carú',
        label: 'São João do Carú',
    },
    {
        estadoid: 'MA',
        value: 'São João do Paraíso',
        label: 'São João do Paraíso',
    },
    {
        estadoid: 'MA',
        value: 'São João do Soter',
        label: 'São João do Soter',
    },
    {
        estadoid: 'MA',
        value: 'São João dos Patos',
        label: 'São João dos Patos',
    },
    {
        estadoid: 'MA',
        value: 'São José de Ribamar',
        label: 'São José de Ribamar',
    },
    {
        estadoid: 'MA',
        value: 'São José dos Basílios',
        label: 'São José dos Basílios',
    },
    {
        estadoid: 'MA',
        label: 'São Luís',
        value: 'São Luís',
    },
    {
        estadoid: 'MA',
        value: 'São Luís Gonzaga do Maranhão',
        label: 'São Luís Gonzaga do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'São Mateus do Maranhão',
        label: 'São Mateus do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'São Pedro da Água Branca',
        label: 'São Pedro da Água Branca',
    },
    {
        estadoid: 'MA',
        value: 'São Pedro dos Crentes',
        label: 'São Pedro dos Crentes',
    },
    {
        estadoid: 'MA',
        value: 'São Raimundo das Mangabeiras',
        label: 'São Raimundo das Mangabeiras',
    },
    {
        estadoid: 'MA',
        value: 'São Raimundo do Doca Bezerra',
        label: 'São Raimundo do Doca Bezerra',
    },
    {
        estadoid: 'MA',
        value: 'São Roberto',
        label: 'São Roberto',
    },
    {
        estadoid: 'MA',
        value: 'São Vicente Ferrer',
        label: 'São Vicente Ferrer',
    },
    {
        estadoid: 'MA',
        value: 'Satubinha',
        label: 'Satubinha',
    },
    {
        estadoid: 'MA',
        value: 'Senador Alexandre Costa',
        label: 'Senador Alexandre Costa',
    },
    {
        estadoid: 'MA',
        value: 'Senador La Rocque',
        label: 'Senador La Rocque',
    },
    {
        estadoid: 'MA',
        value: 'Serrano do Maranhão',
        label: 'Serrano do Maranhão',
    },
    {
        estadoid: 'MA',
        value: 'Sítio Novo',
        label: 'Sítio Novo',
    },
    {
        estadoid: 'MA',
        value: 'Sucupira do Norte',
        label: 'Sucupira do Norte',
    },
    {
        estadoid: 'MA',
        value: 'Sucupira do Riachão',
        label: 'Sucupira do Riachão',
    },
    {
        estadoid: 'MA',
        value: 'Tasso Fragoso',
        label: 'Tasso Fragoso',
    },
    {
        estadoid: 'MA',
        value: 'Timbiras',
        label: 'Timbiras',
    },
    {
        estadoid: 'MA',
        value: 'Timon',
        label: 'Timon',
    },
    {
        estadoid: 'MA',
        value: 'Trizidela do Vale',
        label: 'Trizidela do Vale',
    },
    {
        estadoid: 'MA',
        value: 'Tufilândia',
        label: 'Tufilândia',
    },
    {
        estadoid: 'MA',
        value: 'Tuntum',
        label: 'Tuntum',
    },
    {
        estadoid: 'MA',
        value: 'Turiaçu',
        label: 'Turiaçu',
    },
    {
        estadoid: 'MA',
        value: 'Turilândia',
        label: 'Turilândia',
    },
    {
        estadoid: 'MA',
        value: 'Tutóia',
        label: 'Tutóia',
    },
    {
        estadoid: 'MA',
        value: 'Urbano Santos',
        label: 'Urbano Santos',
    },
    {
        estadoid: 'MA',
        value: 'Vargem Grande',
        label: 'Vargem Grande',
    },
    {
        estadoid: 'MA',
        value: 'Viana',
        label: 'Viana',
    },
    {
        estadoid: 'MA',
        value: 'Vila Nova dos Martírios',
        label: 'Vila Nova dos Martírios',
    },
    {
        estadoid: 'MA',
        value: 'Vitória do Mearim',
        label: 'Vitória do Mearim',
    },
    {
        estadoid: 'MA',
        value: 'Vitorino Freire',
        label: 'Vitorino Freire',
    },
    {
        estadoid: 'MA',
        value: 'Zé Doca',
        label: 'Zé Doca',
    },
    {
        estadoid: 'MG',
        value: 'Abadia dos Dourados',
        label: 'Abadia dos Dourados',
    },
    {
        estadoid: 'MG',
        value: 'Abaeté',
        label: 'Abaeté',
    },
    {
        estadoid: 'MG',
        value: 'Abre Campo',
        label: 'Abre Campo',
    },
    {
        estadoid: 'MG',
        value: 'Acaiaca',
        label: 'Acaiaca',
    },
    {
        estadoid: 'MG',
        value: 'Açucena',
        label: 'Açucena',
    },
    {
        estadoid: 'MG',
        value: 'Água Boa',
        label: 'Água Boa',
    },
    {
        estadoid: 'MG',
        value: 'Água Comprida',
        label: 'Água Comprida',
    },
    {
        estadoid: 'MG',
        value: 'Aguanil',
        label: 'Aguanil',
    },
    {
        estadoid: 'MG',
        value: 'Águas Formosas',
        label: 'Águas Formosas',
    },
    {
        estadoid: 'MG',
        value: 'Águas Vermelhas',
        label: 'Águas Vermelhas',
    },
    {
        estadoid: 'MG',
        value: 'Aimorés',
        label: 'Aimorés',
    },
    {
        estadoid: 'MG',
        value: 'Aiuruoca',
        label: 'Aiuruoca',
    },
    {
        estadoid: 'MG',
        value: 'Alagoa',
        label: 'Alagoa',
    },
    {
        estadoid: 'MG',
        value: 'Albertina',
        label: 'Albertina',
    },
    {
        estadoid: 'MG',
        value: 'Além Paraíba',
        label: 'Além Paraíba',
    },
    {
        estadoid: 'MG',
        value: 'Alfenas',
        label: 'Alfenas',
    },
    {
        estadoid: 'MG',
        value: 'Alfredo Vasconcelos',
        label: 'Alfredo Vasconcelos',
    },
    {
        estadoid: 'MG',
        value: 'Almenara',
        label: 'Almenara',
    },
    {
        estadoid: 'MG',
        value: 'Alpercata',
        label: 'Alpercata',
    },
    {
        estadoid: 'MG',
        value: 'Alpinópolis',
        label: 'Alpinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Alterosa',
        label: 'Alterosa',
    },
    {
        estadoid: 'MG',
        value: 'Alto Caparaó',
        label: 'Alto Caparaó',
    },
    {
        estadoid: 'MG',
        value: 'Alto Jequitibá',
        label: 'Alto Jequitibá',
    },
    {
        estadoid: 'MG',
        value: 'Alto Rio Doce',
        label: 'Alto Rio Doce',
    },
    {
        estadoid: 'MG',
        value: 'Alvarenga',
        label: 'Alvarenga',
    },
    {
        estadoid: 'MG',
        value: 'Alvinópolis',
        label: 'Alvinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Alvorada de Minas',
        label: 'Alvorada de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Amparo do Serra',
        label: 'Amparo do Serra',
    },
    {
        estadoid: 'MG',
        value: 'Andradas',
        label: 'Andradas',
    },
    {
        estadoid: 'MG',
        value: 'Andrelândia',
        label: 'Andrelândia',
    },
    {
        estadoid: 'MG',
        value: 'Angelândia',
        label: 'Angelândia',
    },
    {
        estadoid: 'MG',
        value: 'Antônio Carlos',
        label: 'Antônio Carlos',
    },
    {
        estadoid: 'MG',
        value: 'Antônio Dias',
        label: 'Antônio Dias',
    },
    {
        estadoid: 'MG',
        value: 'Antônio Prado de Minas',
        label: 'Antônio Prado de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Araçaí',
        label: 'Araçaí',
    },
    {
        estadoid: 'MG',
        value: 'Aracitaba',
        label: 'Aracitaba',
    },
    {
        estadoid: 'MG',
        value: 'Araçuaí',
        label: 'Araçuaí',
    },
    {
        estadoid: 'MG',
        value: 'Araguari',
        label: 'Araguari',
    },
    {
        estadoid: 'MG',
        value: 'Arantina',
        label: 'Arantina',
    },
    {
        estadoid: 'MG',
        value: 'Araponga',
        label: 'Araponga',
    },
    {
        estadoid: 'MG',
        value: 'Araporã',
        label: 'Araporã',
    },
    {
        estadoid: 'MG',
        value: 'Arapuá',
        label: 'Arapuá',
    },
    {
        estadoid: 'MG',
        value: 'Araújos',
        label: 'Araújos',
    },
    {
        estadoid: 'MG',
        value: 'Araxá',
        label: 'Araxá',
    },
    {
        estadoid: 'MG',
        value: 'Arceburgo',
        label: 'Arceburgo',
    },
    {
        estadoid: 'MG',
        value: 'Arcos',
        label: 'Arcos',
    },
    {
        estadoid: 'MG',
        value: 'Areado',
        label: 'Areado',
    },
    {
        estadoid: 'MG',
        value: 'Argirita',
        label: 'Argirita',
    },
    {
        estadoid: 'MG',
        value: 'Aricanduva',
        label: 'Aricanduva',
    },
    {
        estadoid: 'MG',
        value: 'Arinos',
        label: 'Arinos',
    },
    {
        estadoid: 'MG',
        value: 'Astolfo Dutra',
        label: 'Astolfo Dutra',
    },
    {
        estadoid: 'MG',
        value: 'Ataléia',
        label: 'Ataléia',
    },
    {
        estadoid: 'MG',
        value: 'Augusto de Lima',
        label: 'Augusto de Lima',
    },
    {
        estadoid: 'MG',
        value: 'Baependi',
        label: 'Baependi',
    },
    {
        estadoid: 'MG',
        value: 'Baldim',
        label: 'Baldim',
    },
    {
        estadoid: 'MG',
        value: 'Bambuí',
        label: 'Bambuí',
    },
    {
        estadoid: 'MG',
        value: 'Bandeira',
        label: 'Bandeira',
    },
    {
        estadoid: 'MG',
        value: 'Bandeira do Sul',
        label: 'Bandeira do Sul',
    },
    {
        estadoid: 'MG',
        value: 'Barão de Cocais',
        label: 'Barão de Cocais',
    },
    {
        estadoid: 'MG',
        value: 'Barão de Monte Alto',
        label: 'Barão de Monte Alto',
    },
    {
        estadoid: 'MG',
        value: 'Barbacena',
        label: 'Barbacena',
    },
    {
        estadoid: 'MG',
        value: 'Barra Longa',
        label: 'Barra Longa',
    },
    {
        estadoid: 'MG',
        value: 'Barroso',
        label: 'Barroso',
    },
    {
        estadoid: 'MG',
        value: 'Bela Vista de Minas',
        label: 'Bela Vista de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Belmiro Braga',
        label: 'Belmiro Braga',
    },
    {
        estadoid: 'MG',
        label: 'Belo Horizonte',
        value: 'Belo Horizonte',
    },
    {
        estadoid: 'MG',
        value: 'Belo Oriente',
        label: 'Belo Oriente',
    },
    {
        estadoid: 'MG',
        value: 'Belo Vale',
        label: 'Belo Vale',
    },
    {
        estadoid: 'MG',
        value: 'Berilo',
        label: 'Berilo',
    },
    {
        estadoid: 'MG',
        value: 'Berizal',
        label: 'Berizal',
    },
    {
        estadoid: 'MG',
        value: 'Bertópolis',
        label: 'Bertópolis',
    },
    {
        estadoid: 'MG',
        value: 'Betim',
        label: 'Betim',
    },
    {
        estadoid: 'MG',
        value: 'Bias Fortes',
        label: 'Bias Fortes',
    },
    {
        estadoid: 'MG',
        value: 'Bicas',
        label: 'Bicas',
    },
    {
        estadoid: 'MG',
        value: 'Biquinhas',
        label: 'Biquinhas',
    },
    {
        estadoid: 'MG',
        value: 'Boa Esperança',
        label: 'Boa Esperança',
    },
    {
        estadoid: 'MG',
        value: 'Bocaina de Minas',
        label: 'Bocaina de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Bocaiúva',
        label: 'Bocaiúva',
    },
    {
        estadoid: 'MG',
        value: 'Bom Despacho',
        label: 'Bom Despacho',
    },
    {
        estadoid: 'MG',
        value: 'Bom Jardim de Minas',
        label: 'Bom Jardim de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Bom Jesus da Penha',
        label: 'Bom Jesus da Penha',
    },
    {
        estadoid: 'MG',
        value: 'Bom Jesus do Amparo',
        label: 'Bom Jesus do Amparo',
    },
    {
        estadoid: 'MG',
        value: 'Bom Jesus do Galho',
        label: 'Bom Jesus do Galho',
    },
    {
        estadoid: 'MG',
        value: 'Bom Repouso',
        label: 'Bom Repouso',
    },
    {
        estadoid: 'MG',
        value: 'Bom Sucesso',
        label: 'Bom Sucesso',
    },
    {
        estadoid: 'MG',
        value: 'Bonfim',
        label: 'Bonfim',
    },
    {
        estadoid: 'MG',
        value: 'Bonfinópolis de Minas',
        label: 'Bonfinópolis de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Bonito de Minas',
        label: 'Bonito de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Borda da Mata',
        label: 'Borda da Mata',
    },
    {
        estadoid: 'MG',
        value: 'Botelhos',
        label: 'Botelhos',
    },
    {
        estadoid: 'MG',
        value: 'Botumirim',
        label: 'Botumirim',
    },
    {
        estadoid: 'MG',
        value: 'Brás Pires',
        label: 'Brás Pires',
    },
    {
        estadoid: 'MG',
        value: 'Brasilândia de Minas',
        label: 'Brasilândia de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Brasília de Minas',
        label: 'Brasília de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Brasópolis',
        label: 'Brasópolis',
    },
    {
        estadoid: 'MG',
        value: 'Braúnas',
        label: 'Braúnas',
    },
    {
        estadoid: 'MG',
        value: 'Brumadinho',
        label: 'Brumadinho',
    },
    {
        estadoid: 'MG',
        value: 'Bueno Brandão',
        label: 'Bueno Brandão',
    },
    {
        estadoid: 'MG',
        value: 'Buenópolis',
        label: 'Buenópolis',
    },
    {
        estadoid: 'MG',
        value: 'Bugre',
        label: 'Bugre',
    },
    {
        estadoid: 'MG',
        value: 'Buritis',
        label: 'Buritis',
    },
    {
        estadoid: 'MG',
        value: 'Buritizeiro',
        label: 'Buritizeiro',
    },
    {
        estadoid: 'MG',
        value: 'Cabeceira Grande',
        label: 'Cabeceira Grande',
    },
    {
        estadoid: 'MG',
        value: 'Cabo Verde',
        label: 'Cabo Verde',
    },
    {
        estadoid: 'MG',
        value: 'Cachoeira da Prata',
        label: 'Cachoeira da Prata',
    },
    {
        estadoid: 'MG',
        value: 'Cachoeira de Minas',
        label: 'Cachoeira de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Cachoeira de Pajeú',
        label: 'Cachoeira de Pajeú',
    },
    {
        estadoid: 'MG',
        value: 'Cachoeira Dourada',
        label: 'Cachoeira Dourada',
    },
    {
        estadoid: 'MG',
        value: 'Caetanópolis',
        label: 'Caetanópolis',
    },
    {
        estadoid: 'MG',
        value: 'Caeté',
        label: 'Caeté',
    },
    {
        estadoid: 'MG',
        value: 'Caiana',
        label: 'Caiana',
    },
    {
        estadoid: 'MG',
        value: 'Cajuri',
        label: 'Cajuri',
    },
    {
        estadoid: 'MG',
        value: 'Caldas',
        label: 'Caldas',
    },
    {
        estadoid: 'MG',
        value: 'Camacho',
        label: 'Camacho',
    },
    {
        estadoid: 'MG',
        value: 'Camanducaia',
        label: 'Camanducaia',
    },
    {
        estadoid: 'MG',
        value: 'Cambuí',
        label: 'Cambuí',
    },
    {
        estadoid: 'MG',
        value: 'Cambuquira',
        label: 'Cambuquira',
    },
    {
        estadoid: 'MG',
        value: 'Campanário',
        label: 'Campanário',
    },
    {
        estadoid: 'MG',
        value: 'Campanha',
        label: 'Campanha',
    },
    {
        estadoid: 'MG',
        value: 'Campestre',
        label: 'Campestre',
    },
    {
        estadoid: 'MG',
        value: 'Campina Verde',
        label: 'Campina Verde',
    },
    {
        estadoid: 'MG',
        value: 'Campo Azul',
        label: 'Campo Azul',
    },
    {
        estadoid: 'MG',
        value: 'Campo Belo',
        label: 'Campo Belo',
    },
    {
        estadoid: 'MG',
        value: 'Campo do Meio',
        label: 'Campo do Meio',
    },
    {
        estadoid: 'MG',
        value: 'Campo Florido',
        label: 'Campo Florido',
    },
    {
        estadoid: 'MG',
        value: 'Campos Altos',
        label: 'Campos Altos',
    },
    {
        estadoid: 'MG',
        value: 'Campos Gerais',
        label: 'Campos Gerais',
    },
    {
        estadoid: 'MG',
        value: 'Cana Verde',
        label: 'Cana Verde',
    },
    {
        estadoid: 'MG',
        value: 'Canaã',
        label: 'Canaã',
    },
    {
        estadoid: 'MG',
        value: 'Canápolis',
        label: 'Canápolis',
    },
    {
        estadoid: 'MG',
        value: 'Candeias',
        label: 'Candeias',
    },
    {
        estadoid: 'MG',
        value: 'Cantagalo',
        label: 'Cantagalo',
    },
    {
        estadoid: 'MG',
        value: 'Caparaó',
        label: 'Caparaó',
    },
    {
        estadoid: 'MG',
        value: 'Capela Nova',
        label: 'Capela Nova',
    },
    {
        estadoid: 'MG',
        value: 'Capelinha',
        label: 'Capelinha',
    },
    {
        estadoid: 'MG',
        value: 'Capetinga',
        label: 'Capetinga',
    },
    {
        estadoid: 'MG',
        value: 'Capim Branco',
        label: 'Capim Branco',
    },
    {
        estadoid: 'MG',
        value: 'Capinópolis',
        label: 'Capinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Capitão Andrade',
        label: 'Capitão Andrade',
    },
    {
        estadoid: 'MG',
        value: 'Capitão Enéas',
        label: 'Capitão Enéas',
    },
    {
        estadoid: 'MG',
        value: 'Capitólio',
        label: 'Capitólio',
    },
    {
        estadoid: 'MG',
        value: 'Caputira',
        label: 'Caputira',
    },
    {
        estadoid: 'MG',
        value: 'Caraí',
        label: 'Caraí',
    },
    {
        estadoid: 'MG',
        value: 'Caranaíba',
        label: 'Caranaíba',
    },
    {
        estadoid: 'MG',
        value: 'Carandaí',
        label: 'Carandaí',
    },
    {
        estadoid: 'MG',
        value: 'Carangola',
        label: 'Carangola',
    },
    {
        estadoid: 'MG',
        value: 'Caratinga',
        label: 'Caratinga',
    },
    {
        estadoid: 'MG',
        value: 'Carbonita',
        label: 'Carbonita',
    },
    {
        estadoid: 'MG',
        value: 'Careaçu',
        label: 'Careaçu',
    },
    {
        estadoid: 'MG',
        value: 'Carlos Chagas',
        label: 'Carlos Chagas',
    },
    {
        estadoid: 'MG',
        value: 'Carmésia',
        label: 'Carmésia',
    },
    {
        estadoid: 'MG',
        value: 'Carmo da Cachoeira',
        label: 'Carmo da Cachoeira',
    },
    {
        estadoid: 'MG',
        value: 'Carmo da Mata',
        label: 'Carmo da Mata',
    },
    {
        estadoid: 'MG',
        value: 'Carmo de Minas',
        label: 'Carmo de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Carmo do Cajuru',
        label: 'Carmo do Cajuru',
    },
    {
        estadoid: 'MG',
        value: 'Carmo do Paranaíba',
        label: 'Carmo do Paranaíba',
    },
    {
        estadoid: 'MG',
        value: 'Carmo do Rio Claro',
        label: 'Carmo do Rio Claro',
    },
    {
        estadoid: 'MG',
        value: 'Carmópolis de Minas',
        label: 'Carmópolis de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Carneirinho',
        label: 'Carneirinho',
    },
    {
        estadoid: 'MG',
        value: 'Carrancas',
        label: 'Carrancas',
    },
    {
        estadoid: 'MG',
        value: 'Carvalhópolis',
        label: 'Carvalhópolis',
    },
    {
        estadoid: 'MG',
        value: 'Carvalhos',
        label: 'Carvalhos',
    },
    {
        estadoid: 'MG',
        value: 'Casa Grande',
        label: 'Casa Grande',
    },
    {
        estadoid: 'MG',
        value: 'Cascalho Rico',
        label: 'Cascalho Rico',
    },
    {
        estadoid: 'MG',
        value: 'Cássia',
        label: 'Cássia',
    },
    {
        estadoid: 'MG',
        value: 'Cataguases',
        label: 'Cataguases',
    },
    {
        estadoid: 'MG',
        value: 'Catas Altas',
        label: 'Catas Altas',
    },
    {
        estadoid: 'MG',
        value: 'Catas Altas da Noruega',
        label: 'Catas Altas da Noruega',
    },
    {
        estadoid: 'MG',
        value: 'Catuji',
        label: 'Catuji',
    },
    {
        estadoid: 'MG',
        value: 'Catuti',
        label: 'Catuti',
    },
    {
        estadoid: 'MG',
        value: 'Caxambu',
        label: 'Caxambu',
    },
    {
        estadoid: 'MG',
        value: 'Cedro do Abaeté',
        label: 'Cedro do Abaeté',
    },
    {
        estadoid: 'MG',
        value: 'Central de Minas',
        label: 'Central de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Centralina',
        label: 'Centralina',
    },
    {
        estadoid: 'MG',
        value: 'Chácara',
        label: 'Chácara',
    },
    {
        estadoid: 'MG',
        value: 'Chalé',
        label: 'Chalé',
    },
    {
        estadoid: 'MG',
        value: 'Chapada do Norte',
        label: 'Chapada do Norte',
    },
    {
        estadoid: 'MG',
        value: 'Chapada Gaúcha',
        label: 'Chapada Gaúcha',
    },
    {
        estadoid: 'MG',
        value: 'Chiador',
        label: 'Chiador',
    },
    {
        estadoid: 'MG',
        value: 'Cipotânea',
        label: 'Cipotânea',
    },
    {
        estadoid: 'MG',
        value: 'Claraval',
        label: 'Claraval',
    },
    {
        estadoid: 'MG',
        value: 'Claro dos Poções',
        label: 'Claro dos Poções',
    },
    {
        estadoid: 'MG',
        value: 'Cláudio',
        label: 'Cláudio',
    },
    {
        estadoid: 'MG',
        value: 'Coimbra',
        label: 'Coimbra',
    },
    {
        estadoid: 'MG',
        value: 'Coluna',
        label: 'Coluna',
    },
    {
        estadoid: 'MG',
        value: 'Comendador Gomes',
        label: 'Comendador Gomes',
    },
    {
        estadoid: 'MG',
        value: 'Comercinho',
        label: 'Comercinho',
    },
    {
        estadoid: 'MG',
        value: 'Conceição da Aparecida',
        label: 'Conceição da Aparecida',
    },
    {
        estadoid: 'MG',
        value: 'Conceição da Barra de Minas',
        label: 'Conceição da Barra de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Conceição das Alagoas',
        label: 'Conceição das Alagoas',
    },
    {
        estadoid: 'MG',
        value: 'Conceição das Pedras',
        label: 'Conceição das Pedras',
    },
    {
        estadoid: 'MG',
        value: 'Conceição de Ipanema',
        label: 'Conceição de Ipanema',
    },
    {
        estadoid: 'MG',
        value: 'Conceição do Mato Dentro',
        label: 'Conceição do Mato Dentro',
    },
    {
        estadoid: 'MG',
        value: 'Conceição do Pará',
        label: 'Conceição do Pará',
    },
    {
        estadoid: 'MG',
        value: 'Conceição do Rio Verde',
        label: 'Conceição do Rio Verde',
    },
    {
        estadoid: 'MG',
        value: 'Conceição dos Ouros',
        label: 'Conceição dos Ouros',
    },
    {
        estadoid: 'MG',
        value: 'Cônego Marinho',
        label: 'Cônego Marinho',
    },
    {
        estadoid: 'MG',
        value: 'Confins',
        label: 'Confins',
    },
    {
        estadoid: 'MG',
        value: 'Congonhal',
        label: 'Congonhal',
    },
    {
        estadoid: 'MG',
        value: 'Congonhas',
        label: 'Congonhas',
    },
    {
        estadoid: 'MG',
        value: 'Congonhas do Norte',
        label: 'Congonhas do Norte',
    },
    {
        estadoid: 'MG',
        value: 'Conquista',
        label: 'Conquista',
    },
    {
        estadoid: 'MG',
        value: 'Conselheiro Lafaiete',
        label: 'Conselheiro Lafaiete',
    },
    {
        estadoid: 'MG',
        value: 'Conselheiro Pena',
        label: 'Conselheiro Pena',
    },
    {
        estadoid: 'MG',
        value: 'Consolação',
        label: 'Consolação',
    },
    {
        estadoid: 'MG',
        value: 'Contagem',
        label: 'Contagem',
    },
    {
        estadoid: 'MG',
        value: 'Coqueiral',
        label: 'Coqueiral',
    },
    {
        estadoid: 'MG',
        value: 'Coração de Jesus',
        label: 'Coração de Jesus',
    },
    {
        estadoid: 'MG',
        value: 'Cordisburgo',
        label: 'Cordisburgo',
    },
    {
        estadoid: 'MG',
        value: 'Cordislândia',
        label: 'Cordislândia',
    },
    {
        estadoid: 'MG',
        value: 'Corinto',
        label: 'Corinto',
    },
    {
        estadoid: 'MG',
        value: 'Coroaci',
        label: 'Coroaci',
    },
    {
        estadoid: 'MG',
        value: 'Coromandel',
        label: 'Coromandel',
    },
    {
        estadoid: 'MG',
        value: 'Coronel Fabriciano',
        label: 'Coronel Fabriciano',
    },
    {
        estadoid: 'MG',
        value: 'Coronel Murta',
        label: 'Coronel Murta',
    },
    {
        estadoid: 'MG',
        value: 'Coronel Pacheco',
        label: 'Coronel Pacheco',
    },
    {
        estadoid: 'MG',
        value: 'Coronel Xavier Chaves',
        label: 'Coronel Xavier Chaves',
    },
    {
        estadoid: 'MG',
        value: 'Córrego Danta',
        label: 'Córrego Danta',
    },
    {
        estadoid: 'MG',
        value: 'Córrego do Bom Jesus',
        label: 'Córrego do Bom Jesus',
    },
    {
        estadoid: 'MG',
        value: 'Córrego Fundo',
        label: 'Córrego Fundo',
    },
    {
        estadoid: 'MG',
        value: 'Córrego Novo',
        label: 'Córrego Novo',
    },
    {
        estadoid: 'MG',
        value: 'Couto de Magalhães de Minas',
        label: 'Couto de Magalhães de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Crisólita',
        label: 'Crisólita',
    },
    {
        estadoid: 'MG',
        value: 'Cristais',
        label: 'Cristais',
    },
    {
        estadoid: 'MG',
        value: 'Cristália',
        label: 'Cristália',
    },
    {
        estadoid: 'MG',
        value: 'Cristiano Otoni',
        label: 'Cristiano Otoni',
    },
    {
        estadoid: 'MG',
        value: 'Cristina',
        label: 'Cristina',
    },
    {
        estadoid: 'MG',
        value: 'Crucilândia',
        label: 'Crucilândia',
    },
    {
        estadoid: 'MG',
        value: 'Cruzeiro da Fortaleza',
        label: 'Cruzeiro da Fortaleza',
    },
    {
        estadoid: 'MG',
        value: 'Cruzília',
        label: 'Cruzília',
    },
    {
        estadoid: 'MG',
        value: 'Cuparaque',
        label: 'Cuparaque',
    },
    {
        estadoid: 'MG',
        value: 'Curral de Dentro',
        label: 'Curral de Dentro',
    },
    {
        estadoid: 'MG',
        value: 'Curvelo',
        label: 'Curvelo',
    },
    {
        estadoid: 'MG',
        value: 'Datas',
        label: 'Datas',
    },
    {
        estadoid: 'MG',
        value: 'Delfim Moreira',
        label: 'Delfim Moreira',
    },
    {
        estadoid: 'MG',
        value: 'Delfinópolis',
        label: 'Delfinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Delta',
        label: 'Delta',
    },
    {
        estadoid: 'MG',
        value: 'Descoberto',
        label: 'Descoberto',
    },
    {
        estadoid: 'MG',
        value: 'Desterro de Entre Rios',
        label: 'Desterro de Entre Rios',
    },
    {
        estadoid: 'MG',
        value: 'Desterro do Melo',
        label: 'Desterro do Melo',
    },
    {
        estadoid: 'MG',
        value: 'Diamantina',
        label: 'Diamantina',
    },
    {
        estadoid: 'MG',
        value: 'Diogo de Vasconcelos',
        label: 'Diogo de Vasconcelos',
    },
    {
        estadoid: 'MG',
        value: 'Dionísio',
        label: 'Dionísio',
    },
    {
        estadoid: 'MG',
        value: 'Divinésia',
        label: 'Divinésia',
    },
    {
        estadoid: 'MG',
        value: 'Divino',
        label: 'Divino',
    },
    {
        estadoid: 'MG',
        value: 'Divino das Laranjeiras',
        label: 'Divino das Laranjeiras',
    },
    {
        estadoid: 'MG',
        value: 'Divinolândia de Minas',
        label: 'Divinolândia de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Divinópolis',
        label: 'Divinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Divisa Alegre',
        label: 'Divisa Alegre',
    },
    {
        estadoid: 'MG',
        value: 'Divisa Nova',
        label: 'Divisa Nova',
    },
    {
        estadoid: 'MG',
        value: 'Divisópolis',
        label: 'Divisópolis',
    },
    {
        estadoid: 'MG',
        value: 'Dom Bosco',
        label: 'Dom Bosco',
    },
    {
        estadoid: 'MG',
        value: 'Dom Cavati',
        label: 'Dom Cavati',
    },
    {
        estadoid: 'MG',
        value: 'Dom Joaquim',
        label: 'Dom Joaquim',
    },
    {
        estadoid: 'MG',
        value: 'Dom Silvério',
        label: 'Dom Silvério',
    },
    {
        estadoid: 'MG',
        value: 'Dom Viçoso',
        label: 'Dom Viçoso',
    },
    {
        estadoid: 'MG',
        value: 'Dona Euzébia',
        label: 'Dona Euzébia',
    },
    {
        estadoid: 'MG',
        value: 'Dores de Campos',
        label: 'Dores de Campos',
    },
    {
        estadoid: 'MG',
        value: 'Dores de Guanhães',
        label: 'Dores de Guanhães',
    },
    {
        estadoid: 'MG',
        value: 'Dores do Indaiá',
        label: 'Dores do Indaiá',
    },
    {
        estadoid: 'MG',
        value: 'Dores do Turvo',
        label: 'Dores do Turvo',
    },
    {
        estadoid: 'MG',
        value: 'Doresópolis',
        label: 'Doresópolis',
    },
    {
        estadoid: 'MG',
        value: 'Douradoquara',
        label: 'Douradoquara',
    },
    {
        estadoid: 'MG',
        value: 'Durandé',
        label: 'Durandé',
    },
    {
        estadoid: 'MG',
        value: 'Elói Mendes',
        label: 'Elói Mendes',
    },
    {
        estadoid: 'MG',
        value: 'Engenheiro Caldas',
        label: 'Engenheiro Caldas',
    },
    {
        estadoid: 'MG',
        value: 'Engenheiro Navarro',
        label: 'Engenheiro Navarro',
    },
    {
        estadoid: 'MG',
        value: 'Entre Folhas',
        label: 'Entre Folhas',
    },
    {
        estadoid: 'MG',
        value: 'Entre Rios de Minas',
        label: 'Entre Rios de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Ervália',
        label: 'Ervália',
    },
    {
        estadoid: 'MG',
        value: 'Esmeraldas',
        label: 'Esmeraldas',
    },
    {
        estadoid: 'MG',
        value: 'Espera Feliz',
        label: 'Espera Feliz',
    },
    {
        estadoid: 'MG',
        value: 'Espinosa',
        label: 'Espinosa',
    },
    {
        estadoid: 'MG',
        value: 'Espírito Santo do Dourado',
        label: 'Espírito Santo do Dourado',
    },
    {
        estadoid: 'MG',
        value: 'Estiva',
        label: 'Estiva',
    },
    {
        estadoid: 'MG',
        value: 'Estrela Dalva',
        label: 'Estrela Dalva',
    },
    {
        estadoid: 'MG',
        value: 'Estrela do Indaiá',
        label: 'Estrela do Indaiá',
    },
    {
        estadoid: 'MG',
        value: 'Estrela do Sul',
        label: 'Estrela do Sul',
    },
    {
        estadoid: 'MG',
        value: 'Eugenópolis',
        label: 'Eugenópolis',
    },
    {
        estadoid: 'MG',
        value: 'Ewbank da Câmara',
        label: 'Ewbank da Câmara',
    },
    {
        estadoid: 'MG',
        value: 'Extrema',
        label: 'Extrema',
    },
    {
        estadoid: 'MG',
        value: 'Fama',
        label: 'Fama',
    },
    {
        estadoid: 'MG',
        value: 'Faria Lemos',
        label: 'Faria Lemos',
    },
    {
        estadoid: 'MG',
        value: 'Felício dos Santos',
        label: 'Felício dos Santos',
    },
    {
        estadoid: 'MG',
        value: 'Felisburgo',
        label: 'Felisburgo',
    },
    {
        estadoid: 'MG',
        value: 'Felixlândia',
        label: 'Felixlândia',
    },
    {
        estadoid: 'MG',
        value: 'Fernandes Tourinho',
        label: 'Fernandes Tourinho',
    },
    {
        estadoid: 'MG',
        value: 'Ferros',
        label: 'Ferros',
    },
    {
        estadoid: 'MG',
        value: 'Fervedouro',
        label: 'Fervedouro',
    },
    {
        estadoid: 'MG',
        value: 'Florestal',
        label: 'Florestal',
    },
    {
        estadoid: 'MG',
        value: 'Formiga',
        label: 'Formiga',
    },
    {
        estadoid: 'MG',
        value: 'Formoso',
        label: 'Formoso',
    },
    {
        estadoid: 'MG',
        value: 'Fortaleza de Minas',
        label: 'Fortaleza de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Fortuna de Minas',
        label: 'Fortuna de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Francisco Badaró',
        label: 'Francisco Badaró',
    },
    {
        estadoid: 'MG',
        value: 'Francisco Dumont',
        label: 'Francisco Dumont',
    },
    {
        estadoid: 'MG',
        value: 'Francisco Sá',
        label: 'Francisco Sá',
    },
    {
        estadoid: 'MG',
        value: 'Franciscópolis',
        label: 'Franciscópolis',
    },
    {
        estadoid: 'MG',
        value: 'Frei Gaspar',
        label: 'Frei Gaspar',
    },
    {
        estadoid: 'MG',
        value: 'Frei Inocêncio',
        label: 'Frei Inocêncio',
    },
    {
        estadoid: 'MG',
        value: 'Frei Lagonegro',
        label: 'Frei Lagonegro',
    },
    {
        estadoid: 'MG',
        value: 'Fronteira',
        label: 'Fronteira',
    },
    {
        estadoid: 'MG',
        value: 'Fronteira dos Vales',
        label: 'Fronteira dos Vales',
    },
    {
        estadoid: 'MG',
        value: 'Fruta de Leite',
        label: 'Fruta de Leite',
    },
    {
        estadoid: 'MG',
        value: 'Frutal',
        label: 'Frutal',
    },
    {
        estadoid: 'MG',
        value: 'Funilândia',
        label: 'Funilândia',
    },
    {
        estadoid: 'MG',
        value: 'Galiléia',
        label: 'Galiléia',
    },
    {
        estadoid: 'MG',
        value: 'Gameleiras',
        label: 'Gameleiras',
    },
    {
        estadoid: 'MG',
        value: 'Glaucilândia',
        label: 'Glaucilândia',
    },
    {
        estadoid: 'MG',
        value: 'Goiabeira',
        label: 'Goiabeira',
    },
    {
        estadoid: 'MG',
        value: 'Goianá',
        label: 'Goianá',
    },
    {
        estadoid: 'MG',
        value: 'Gonçalves',
        label: 'Gonçalves',
    },
    {
        estadoid: 'MG',
        value: 'Gonzaga',
        label: 'Gonzaga',
    },
    {
        estadoid: 'MG',
        value: 'Gouveia',
        label: 'Gouveia',
    },
    {
        estadoid: 'MG',
        value: 'Governador Valadares',
        label: 'Governador Valadares',
    },
    {
        estadoid: 'MG',
        value: 'Grão Mogol',
        label: 'Grão Mogol',
    },
    {
        estadoid: 'MG',
        value: 'Grupiara',
        label: 'Grupiara',
    },
    {
        estadoid: 'MG',
        value: 'Guanhães',
        label: 'Guanhães',
    },
    {
        estadoid: 'MG',
        value: 'Guapé',
        label: 'Guapé',
    },
    {
        estadoid: 'MG',
        value: 'Guaraciaba',
        label: 'Guaraciaba',
    },
    {
        estadoid: 'MG',
        value: 'Guaraciama',
        label: 'Guaraciama',
    },
    {
        estadoid: 'MG',
        value: 'Guaranésia',
        label: 'Guaranésia',
    },
    {
        estadoid: 'MG',
        value: 'Guarani',
        label: 'Guarani',
    },
    {
        estadoid: 'MG',
        value: 'Guarará',
        label: 'Guarará',
    },
    {
        estadoid: 'MG',
        value: 'Guarda-Mor',
        label: 'Guarda-Mor',
    },
    {
        estadoid: 'MG',
        value: 'Guaxupé',
        label: 'Guaxupé',
    },
    {
        estadoid: 'MG',
        value: 'Guidoval',
        label: 'Guidoval',
    },
    {
        estadoid: 'MG',
        value: 'Guimarânia',
        label: 'Guimarânia',
    },
    {
        estadoid: 'MG',
        value: 'Guiricema',
        label: 'Guiricema',
    },
    {
        estadoid: 'MG',
        value: 'Gurinhatã',
        label: 'Gurinhatã',
    },
    {
        estadoid: 'MG',
        value: 'Heliodora',
        label: 'Heliodora',
    },
    {
        estadoid: 'MG',
        value: 'Iapu',
        label: 'Iapu',
    },
    {
        estadoid: 'MG',
        value: 'Ibertioga',
        label: 'Ibertioga',
    },
    {
        estadoid: 'MG',
        value: 'Ibiá',
        label: 'Ibiá',
    },
    {
        estadoid: 'MG',
        value: 'Ibiaí',
        label: 'Ibiaí',
    },
    {
        estadoid: 'MG',
        value: 'Ibiracatu',
        label: 'Ibiracatu',
    },
    {
        estadoid: 'MG',
        value: 'Ibiraci',
        label: 'Ibiraci',
    },
    {
        estadoid: 'MG',
        value: 'Ibirité',
        label: 'Ibirité',
    },
    {
        estadoid: 'MG',
        value: 'Ibitiúra de Minas',
        label: 'Ibitiúra de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Ibituruna',
        label: 'Ibituruna',
    },
    {
        estadoid: 'MG',
        value: 'Icaraí de Minas',
        label: 'Icaraí de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Igarapé',
        label: 'Igarapé',
    },
    {
        estadoid: 'MG',
        value: 'Igaratinga',
        label: 'Igaratinga',
    },
    {
        estadoid: 'MG',
        value: 'Iguatama',
        label: 'Iguatama',
    },
    {
        estadoid: 'MG',
        value: 'Ijaci',
        label: 'Ijaci',
    },
    {
        estadoid: 'MG',
        value: 'Ilicínea',
        label: 'Ilicínea',
    },
    {
        estadoid: 'MG',
        value: 'Imbé de Minas',
        label: 'Imbé de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Inconfidentes',
        label: 'Inconfidentes',
    },
    {
        estadoid: 'MG',
        value: 'Indaiabira',
        label: 'Indaiabira',
    },
    {
        estadoid: 'MG',
        value: 'Indianópolis',
        label: 'Indianópolis',
    },
    {
        estadoid: 'MG',
        value: 'Ingaí',
        label: 'Ingaí',
    },
    {
        estadoid: 'MG',
        value: 'Inhapim',
        label: 'Inhapim',
    },
    {
        estadoid: 'MG',
        value: 'Inhaúma',
        label: 'Inhaúma',
    },
    {
        estadoid: 'MG',
        value: 'Inimutaba',
        label: 'Inimutaba',
    },
    {
        estadoid: 'MG',
        value: 'Ipaba',
        label: 'Ipaba',
    },
    {
        estadoid: 'MG',
        value: 'Ipanema',
        label: 'Ipanema',
    },
    {
        estadoid: 'MG',
        value: 'Ipatinga',
        label: 'Ipatinga',
    },
    {
        estadoid: 'MG',
        value: 'Ipiaçu',
        label: 'Ipiaçu',
    },
    {
        estadoid: 'MG',
        value: 'Ipuiúna',
        label: 'Ipuiúna',
    },
    {
        estadoid: 'MG',
        value: 'Iraí de Minas',
        label: 'Iraí de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Itabira',
        label: 'Itabira',
    },
    {
        estadoid: 'MG',
        value: 'Itabirinha de Mantena',
        label: 'Itabirinha de Mantena',
    },
    {
        estadoid: 'MG',
        value: 'Itabirito',
        label: 'Itabirito',
    },
    {
        estadoid: 'MG',
        value: 'Itacambira',
        label: 'Itacambira',
    },
    {
        estadoid: 'MG',
        value: 'Itacarambi',
        label: 'Itacarambi',
    },
    {
        estadoid: 'MG',
        value: 'Itaguara',
        label: 'Itaguara',
    },
    {
        estadoid: 'MG',
        value: 'Itaipé',
        label: 'Itaipé',
    },
    {
        estadoid: 'MG',
        value: 'Itajubá',
        label: 'Itajubá',
    },
    {
        estadoid: 'MG',
        value: 'Itamarandiba',
        label: 'Itamarandiba',
    },
    {
        estadoid: 'MG',
        value: 'Itamarati de Minas',
        label: 'Itamarati de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Itambacuri',
        label: 'Itambacuri',
    },
    {
        estadoid: 'MG',
        value: 'Itambé do Mato Dentro',
        label: 'Itambé do Mato Dentro',
    },
    {
        estadoid: 'MG',
        value: 'Itamogi',
        label: 'Itamogi',
    },
    {
        estadoid: 'MG',
        value: 'Itamonte',
        label: 'Itamonte',
    },
    {
        estadoid: 'MG',
        value: 'Itanhandu',
        label: 'Itanhandu',
    },
    {
        estadoid: 'MG',
        value: 'Itanhomi',
        label: 'Itanhomi',
    },
    {
        estadoid: 'MG',
        value: 'Itaobim',
        label: 'Itaobim',
    },
    {
        estadoid: 'MG',
        value: 'Itapagipe',
        label: 'Itapagipe',
    },
    {
        estadoid: 'MG',
        value: 'Itapecerica',
        label: 'Itapecerica',
    },
    {
        estadoid: 'MG',
        value: 'Itapeva',
        label: 'Itapeva',
    },
    {
        estadoid: 'MG',
        value: 'Itatiaiuçu',
        label: 'Itatiaiuçu',
    },
    {
        estadoid: 'MG',
        value: 'Itaú de Minas',
        label: 'Itaú de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Itaúna',
        label: 'Itaúna',
    },
    {
        estadoid: 'MG',
        value: 'Itaverava',
        label: 'Itaverava',
    },
    {
        estadoid: 'MG',
        value: 'Itinga',
        label: 'Itinga',
    },
    {
        estadoid: 'MG',
        value: 'Itueta',
        label: 'Itueta',
    },
    {
        estadoid: 'MG',
        value: 'Ituiutaba',
        label: 'Ituiutaba',
    },
    {
        estadoid: 'MG',
        value: 'Itumirim',
        label: 'Itumirim',
    },
    {
        estadoid: 'MG',
        value: 'Iturama',
        label: 'Iturama',
    },
    {
        estadoid: 'MG',
        value: 'Itutinga',
        label: 'Itutinga',
    },
    {
        estadoid: 'MG',
        value: 'Jaboticatubas',
        label: 'Jaboticatubas',
    },
    {
        estadoid: 'MG',
        value: 'Jacinto',
        label: 'Jacinto',
    },
    {
        estadoid: 'MG',
        value: 'Jacuí',
        label: 'Jacuí',
    },
    {
        estadoid: 'MG',
        value: 'Jacutinga',
        label: 'Jacutinga',
    },
    {
        estadoid: 'MG',
        value: 'Jaguaraçu',
        label: 'Jaguaraçu',
    },
    {
        estadoid: 'MG',
        value: 'Jaíba',
        label: 'Jaíba',
    },
    {
        estadoid: 'MG',
        value: 'Jampruca',
        label: 'Jampruca',
    },
    {
        estadoid: 'MG',
        value: 'Janaúba',
        label: 'Janaúba',
    },
    {
        estadoid: 'MG',
        value: 'Januária',
        label: 'Januária',
    },
    {
        estadoid: 'MG',
        value: 'Japaraíba',
        label: 'Japaraíba',
    },
    {
        estadoid: 'MG',
        value: 'Japonvar',
        label: 'Japonvar',
    },
    {
        estadoid: 'MG',
        value: 'Jeceaba',
        label: 'Jeceaba',
    },
    {
        estadoid: 'MG',
        value: 'Jenipapo de Minas',
        label: 'Jenipapo de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Jequeri',
        label: 'Jequeri',
    },
    {
        estadoid: 'MG',
        value: 'Jequitaí',
        label: 'Jequitaí',
    },
    {
        estadoid: 'MG',
        value: 'Jequitibá',
        label: 'Jequitibá',
    },
    {
        estadoid: 'MG',
        value: 'Jequitinhonha',
        label: 'Jequitinhonha',
    },
    {
        estadoid: 'MG',
        value: 'Jesuânia',
        label: 'Jesuânia',
    },
    {
        estadoid: 'MG',
        value: 'Joaíma',
        label: 'Joaíma',
    },
    {
        estadoid: 'MG',
        value: 'Joanésia',
        label: 'Joanésia',
    },
    {
        estadoid: 'MG',
        value: 'João Monlevade',
        label: 'João Monlevade',
    },
    {
        estadoid: 'MG',
        value: 'João Pinheiro',
        label: 'João Pinheiro',
    },
    {
        estadoid: 'MG',
        value: 'Joaquim Felício',
        label: 'Joaquim Felício',
    },
    {
        estadoid: 'MG',
        value: 'Jordânia',
        label: 'Jordânia',
    },
    {
        estadoid: 'MG',
        value: 'José Gonçalves de Minas',
        label: 'José Gonçalves de Minas',
    },
    {
        estadoid: 'MG',
        value: 'José Raydan',
        label: 'José Raydan',
    },
    {
        estadoid: 'MG',
        value: 'Josenópolis',
        label: 'Josenópolis',
    },
    {
        estadoid: 'MG',
        value: 'Juatuba',
        label: 'Juatuba',
    },
    {
        estadoid: 'MG',
        value: 'Juiz de Fora',
        label: 'Juiz de Fora',
    },
    {
        estadoid: 'MG',
        value: 'Juramento',
        label: 'Juramento',
    },
    {
        estadoid: 'MG',
        value: 'Juruaia',
        label: 'Juruaia',
    },
    {
        estadoid: 'MG',
        value: 'Juvenília',
        label: 'Juvenília',
    },
    {
        estadoid: 'MG',
        value: 'Ladainha',
        label: 'Ladainha',
    },
    {
        estadoid: 'MG',
        value: 'Lagamar',
        label: 'Lagamar',
    },
    {
        estadoid: 'MG',
        value: 'Lagoa da Prata',
        label: 'Lagoa da Prata',
    },
    {
        estadoid: 'MG',
        value: 'Lagoa dos Patos',
        label: 'Lagoa dos Patos',
    },
    {
        estadoid: 'MG',
        value: 'Lagoa Dourada',
        label: 'Lagoa Dourada',
    },
    {
        estadoid: 'MG',
        value: 'Lagoa Formosa',
        label: 'Lagoa Formosa',
    },
    {
        estadoid: 'MG',
        value: 'Lagoa Grande',
        label: 'Lagoa Grande',
    },
    {
        estadoid: 'MG',
        value: 'Lagoa Santa',
        label: 'Lagoa Santa',
    },
    {
        estadoid: 'MG',
        value: 'Lajinha',
        label: 'Lajinha',
    },
    {
        estadoid: 'MG',
        value: 'Lambari',
        label: 'Lambari',
    },
    {
        estadoid: 'MG',
        value: 'Lamim',
        label: 'Lamim',
    },
    {
        estadoid: 'MG',
        value: 'Laranjal',
        label: 'Laranjal',
    },
    {
        estadoid: 'MG',
        value: 'Lassance',
        label: 'Lassance',
    },
    {
        estadoid: 'MG',
        value: 'Lavras',
        label: 'Lavras',
    },
    {
        estadoid: 'MG',
        value: 'Leandro Ferreira',
        label: 'Leandro Ferreira',
    },
    {
        estadoid: 'MG',
        value: 'Leme do Prado',
        label: 'Leme do Prado',
    },
    {
        estadoid: 'MG',
        value: 'Leopoldina',
        label: 'Leopoldina',
    },
    {
        estadoid: 'MG',
        value: 'Liberdade',
        label: 'Liberdade',
    },
    {
        estadoid: 'MG',
        value: 'Lima Duarte',
        label: 'Lima Duarte',
    },
    {
        estadoid: 'MG',
        value: 'Limeira do Oeste',
        label: 'Limeira do Oeste',
    },
    {
        estadoid: 'MG',
        value: 'Lontra',
        label: 'Lontra',
    },
    {
        estadoid: 'MG',
        value: 'Luisburgo',
        label: 'Luisburgo',
    },
    {
        estadoid: 'MG',
        value: 'Luislândia',
        label: 'Luislândia',
    },
    {
        estadoid: 'MG',
        value: 'Luminárias',
        label: 'Luminárias',
    },
    {
        estadoid: 'MG',
        value: 'Luz',
        label: 'Luz',
    },
    {
        estadoid: 'MG',
        value: 'Machacalis',
        label: 'Machacalis',
    },
    {
        estadoid: 'MG',
        value: 'Machado',
        label: 'Machado',
    },
    {
        estadoid: 'MG',
        value: 'Madre de Deus de Minas',
        label: 'Madre de Deus de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Malacacheta',
        label: 'Malacacheta',
    },
    {
        estadoid: 'MG',
        value: 'Mamonas',
        label: 'Mamonas',
    },
    {
        estadoid: 'MG',
        value: 'Manga',
        label: 'Manga',
    },
    {
        estadoid: 'MG',
        value: 'Manhuaçu',
        label: 'Manhuaçu',
    },
    {
        estadoid: 'MG',
        value: 'Manhumirim',
        label: 'Manhumirim',
    },
    {
        estadoid: 'MG',
        value: 'Mantena',
        label: 'Mantena',
    },
    {
        estadoid: 'MG',
        value: 'Mar de Espanha',
        label: 'Mar de Espanha',
    },
    {
        estadoid: 'MG',
        value: 'Maravilhas',
        label: 'Maravilhas',
    },
    {
        estadoid: 'MG',
        value: 'Maria da Fé',
        label: 'Maria da Fé',
    },
    {
        estadoid: 'MG',
        value: 'Mariana',
        label: 'Mariana',
    },
    {
        estadoid: 'MG',
        value: 'Marilac',
        label: 'Marilac',
    },
    {
        estadoid: 'MG',
        value: 'Mário Campos',
        label: 'Mário Campos',
    },
    {
        estadoid: 'MG',
        value: 'Maripá de Minas',
        label: 'Maripá de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Marliéria',
        label: 'Marliéria',
    },
    {
        estadoid: 'MG',
        value: 'Marmelópolis',
        label: 'Marmelópolis',
    },
    {
        estadoid: 'MG',
        value: 'Martinho Campos',
        label: 'Martinho Campos',
    },
    {
        estadoid: 'MG',
        value: 'Martins Soares',
        label: 'Martins Soares',
    },
    {
        estadoid: 'MG',
        value: 'Mata Verde',
        label: 'Mata Verde',
    },
    {
        estadoid: 'MG',
        value: 'Materlândia',
        label: 'Materlândia',
    },
    {
        estadoid: 'MG',
        value: 'Mateus Leme',
        label: 'Mateus Leme',
    },
    {
        estadoid: 'MG',
        value: 'Mathias Lobato',
        label: 'Mathias Lobato',
    },
    {
        estadoid: 'MG',
        value: 'Matias Barbosa',
        label: 'Matias Barbosa',
    },
    {
        estadoid: 'MG',
        value: 'Matias Cardoso',
        label: 'Matias Cardoso',
    },
    {
        estadoid: 'MG',
        value: 'Matipó',
        label: 'Matipó',
    },
    {
        estadoid: 'MG',
        value: 'Mato Verde',
        label: 'Mato Verde',
    },
    {
        estadoid: 'MG',
        value: 'Matozinhos',
        label: 'Matozinhos',
    },
    {
        estadoid: 'MG',
        value: 'Matutina',
        label: 'Matutina',
    },
    {
        estadoid: 'MG',
        value: 'Medeiros',
        label: 'Medeiros',
    },
    {
        estadoid: 'MG',
        value: 'Medina',
        label: 'Medina',
    },
    {
        estadoid: 'MG',
        value: 'Mendes Pimentel',
        label: 'Mendes Pimentel',
    },
    {
        estadoid: 'MG',
        value: 'Mercês',
        label: 'Mercês',
    },
    {
        estadoid: 'MG',
        value: 'Mesquita',
        label: 'Mesquita',
    },
    {
        estadoid: 'MG',
        value: 'Minas Novas',
        label: 'Minas Novas',
    },
    {
        estadoid: 'MG',
        value: 'Minduri',
        label: 'Minduri',
    },
    {
        estadoid: 'MG',
        value: 'Mirabela',
        label: 'Mirabela',
    },
    {
        estadoid: 'MG',
        value: 'Miradouro',
        label: 'Miradouro',
    },
    {
        estadoid: 'MG',
        value: 'Miraí',
        label: 'Miraí',
    },
    {
        estadoid: 'MG',
        value: 'Miravânia',
        label: 'Miravânia',
    },
    {
        estadoid: 'MG',
        value: 'Moeda',
        label: 'Moeda',
    },
    {
        estadoid: 'MG',
        value: 'Moema',
        label: 'Moema',
    },
    {
        estadoid: 'MG',
        value: 'Monjolos',
        label: 'Monjolos',
    },
    {
        estadoid: 'MG',
        value: 'Monsenhor Paulo',
        label: 'Monsenhor Paulo',
    },
    {
        estadoid: 'MG',
        value: 'Montalvânia',
        label: 'Montalvânia',
    },
    {
        estadoid: 'MG',
        value: 'Monte Alegre de Minas',
        label: 'Monte Alegre de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Monte Azul',
        label: 'Monte Azul',
    },
    {
        estadoid: 'MG',
        value: 'Monte Belo',
        label: 'Monte Belo',
    },
    {
        estadoid: 'MG',
        value: 'Monte Carmelo',
        label: 'Monte Carmelo',
    },
    {
        estadoid: 'MG',
        value: 'Monte Formoso',
        label: 'Monte Formoso',
    },
    {
        estadoid: 'MG',
        value: 'Monte Santo de Minas',
        label: 'Monte Santo de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Monte Sião',
        label: 'Monte Sião',
    },
    {
        estadoid: 'MG',
        value: 'Montes Claros',
        label: 'Montes Claros',
    },
    {
        estadoid: 'MG',
        value: 'Montezuma',
        label: 'Montezuma',
    },
    {
        estadoid: 'MG',
        value: 'Morada Nova de Minas',
        label: 'Morada Nova de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Morro da Garça',
        label: 'Morro da Garça',
    },
    {
        estadoid: 'MG',
        value: 'Morro do Pilar',
        label: 'Morro do Pilar',
    },
    {
        estadoid: 'MG',
        value: 'Munhoz',
        label: 'Munhoz',
    },
    {
        estadoid: 'MG',
        value: 'Muriaé',
        label: 'Muriaé',
    },
    {
        estadoid: 'MG',
        value: 'Mutum',
        label: 'Mutum',
    },
    {
        estadoid: 'MG',
        value: 'Muzambinho',
        label: 'Muzambinho',
    },
    {
        estadoid: 'MG',
        value: 'Nacip Raydan',
        label: 'Nacip Raydan',
    },
    {
        estadoid: 'MG',
        value: 'Nanuque',
        label: 'Nanuque',
    },
    {
        estadoid: 'MG',
        value: 'Naque',
        label: 'Naque',
    },
    {
        estadoid: 'MG',
        value: 'Natalândia',
        label: 'Natalândia',
    },
    {
        estadoid: 'MG',
        value: 'Natércia',
        label: 'Natércia',
    },
    {
        estadoid: 'MG',
        value: 'Nazareno',
        label: 'Nazareno',
    },
    {
        estadoid: 'MG',
        value: 'Nepomuceno',
        label: 'Nepomuceno',
    },
    {
        estadoid: 'MG',
        value: 'Ninheira',
        label: 'Ninheira',
    },
    {
        estadoid: 'MG',
        value: 'Nova Belém',
        label: 'Nova Belém',
    },
    {
        estadoid: 'MG',
        value: 'Nova Era',
        label: 'Nova Era',
    },
    {
        estadoid: 'MG',
        value: 'Nova Lima',
        label: 'Nova Lima',
    },
    {
        estadoid: 'MG',
        value: 'Nova Módica',
        label: 'Nova Módica',
    },
    {
        estadoid: 'MG',
        value: 'Nova Ponte',
        label: 'Nova Ponte',
    },
    {
        estadoid: 'MG',
        value: 'Nova Porteirinha',
        label: 'Nova Porteirinha',
    },
    {
        estadoid: 'MG',
        value: 'Nova Resende',
        label: 'Nova Resende',
    },
    {
        estadoid: 'MG',
        value: 'Nova Serrana',
        label: 'Nova Serrana',
    },
    {
        estadoid: 'MG',
        value: 'Nova União',
        label: 'Nova União',
    },
    {
        estadoid: 'MG',
        value: 'Novo Cruzeiro',
        label: 'Novo Cruzeiro',
    },
    {
        estadoid: 'MG',
        value: 'Novo Oriente de Minas',
        label: 'Novo Oriente de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Novorizonte',
        label: 'Novorizonte',
    },
    {
        estadoid: 'MG',
        value: 'Olaria',
        label: 'Olaria',
    },
    {
        estadoid: 'MG',
        value: 'Olhos-d\'Água',
        label: 'Olhos-d\'Água',
    },
    {
        estadoid: 'MG',
        value: 'Olímpio Noronha',
        label: 'Olímpio Noronha',
    },
    {
        estadoid: 'MG',
        value: 'Oliveira',
        label: 'Oliveira',
    },
    {
        estadoid: 'MG',
        value: 'Oliveira Fortes',
        label: 'Oliveira Fortes',
    },
    {
        estadoid: 'MG',
        value: 'Onça de Pitangui',
        label: 'Onça de Pitangui',
    },
    {
        estadoid: 'MG',
        value: 'Oratórios',
        label: 'Oratórios',
    },
    {
        estadoid: 'MG',
        value: 'Orizânia',
        label: 'Orizânia',
    },
    {
        estadoid: 'MG',
        value: 'Ouro Branco',
        label: 'Ouro Branco',
    },
    {
        estadoid: 'MG',
        value: 'Ouro Fino',
        label: 'Ouro Fino',
    },
    {
        estadoid: 'MG',
        value: 'Ouro Preto',
        label: 'Ouro Preto',
    },
    {
        estadoid: 'MG',
        value: 'Ouro Verde de Minas',
        label: 'Ouro Verde de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Padre Carvalho',
        label: 'Padre Carvalho',
    },
    {
        estadoid: 'MG',
        value: 'Padre Paraíso',
        label: 'Padre Paraíso',
    },
    {
        estadoid: 'MG',
        value: 'Pai Pedro',
        label: 'Pai Pedro',
    },
    {
        estadoid: 'MG',
        value: 'Paineiras',
        label: 'Paineiras',
    },
    {
        estadoid: 'MG',
        value: 'Pains',
        label: 'Pains',
    },
    {
        estadoid: 'MG',
        value: 'Paiva',
        label: 'Paiva',
    },
    {
        estadoid: 'MG',
        value: 'Palma',
        label: 'Palma',
    },
    {
        estadoid: 'MG',
        value: 'Palmópolis',
        label: 'Palmópolis',
    },
    {
        estadoid: 'MG',
        value: 'Papagaios',
        label: 'Papagaios',
    },
    {
        estadoid: 'MG',
        value: 'Pará de Minas',
        label: 'Pará de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Paracatu',
        label: 'Paracatu',
    },
    {
        estadoid: 'MG',
        value: 'Paraguaçu',
        label: 'Paraguaçu',
    },
    {
        estadoid: 'MG',
        value: 'Paraisópolis',
        label: 'Paraisópolis',
    },
    {
        estadoid: 'MG',
        value: 'Paraopeba',
        label: 'Paraopeba',
    },
    {
        estadoid: 'MG',
        value: 'Passa Quatro',
        label: 'Passa Quatro',
    },
    {
        estadoid: 'MG',
        value: 'Passa Tempo',
        label: 'Passa Tempo',
    },
    {
        estadoid: 'MG',
        value: 'Passa-Vinte',
        label: 'Passa-Vinte',
    },
    {
        estadoid: 'MG',
        value: 'Passabém',
        label: 'Passabém',
    },
    {
        estadoid: 'MG',
        value: 'Passos',
        label: 'Passos',
    },
    {
        estadoid: 'MG',
        value: 'Patis',
        label: 'Patis',
    },
    {
        estadoid: 'MG',
        value: 'Patos de Minas',
        label: 'Patos de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Patrocínio',
        label: 'Patrocínio',
    },
    {
        estadoid: 'MG',
        value: 'Patrocínio do Muriaé',
        label: 'Patrocínio do Muriaé',
    },
    {
        estadoid: 'MG',
        value: 'Paula Cândido',
        label: 'Paula Cândido',
    },
    {
        estadoid: 'MG',
        value: 'Paulistas',
        label: 'Paulistas',
    },
    {
        estadoid: 'MG',
        value: 'Pavão',
        label: 'Pavão',
    },
    {
        estadoid: 'MG',
        value: 'Peçanha',
        label: 'Peçanha',
    },
    {
        estadoid: 'MG',
        value: 'Pedra Azul',
        label: 'Pedra Azul',
    },
    {
        estadoid: 'MG',
        value: 'Pedra Bonita',
        label: 'Pedra Bonita',
    },
    {
        estadoid: 'MG',
        value: 'Pedra do Anta',
        label: 'Pedra do Anta',
    },
    {
        estadoid: 'MG',
        value: 'Pedra do Indaiá',
        label: 'Pedra do Indaiá',
    },
    {
        estadoid: 'MG',
        value: 'Pedra Dourada',
        label: 'Pedra Dourada',
    },
    {
        estadoid: 'MG',
        value: 'Pedralva',
        label: 'Pedralva',
    },
    {
        estadoid: 'MG',
        value: 'Pedras de Maria da Cruz',
        label: 'Pedras de Maria da Cruz',
    },
    {
        estadoid: 'MG',
        value: 'Pedrinópolis',
        label: 'Pedrinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Pedro Leopoldo',
        label: 'Pedro Leopoldo',
    },
    {
        estadoid: 'MG',
        value: 'Pedro Teixeira',
        label: 'Pedro Teixeira',
    },
    {
        estadoid: 'MG',
        value: 'Pequeri',
        label: 'Pequeri',
    },
    {
        estadoid: 'MG',
        value: 'Pequi',
        label: 'Pequi',
    },
    {
        estadoid: 'MG',
        value: 'Perdigão',
        label: 'Perdigão',
    },
    {
        estadoid: 'MG',
        value: 'Perdizes',
        label: 'Perdizes',
    },
    {
        estadoid: 'MG',
        value: 'Perdões',
        label: 'Perdões',
    },
    {
        estadoid: 'MG',
        value: 'Periquito',
        label: 'Periquito',
    },
    {
        estadoid: 'MG',
        value: 'Pescador',
        label: 'Pescador',
    },
    {
        estadoid: 'MG',
        value: 'Piau',
        label: 'Piau',
    },
    {
        estadoid: 'MG',
        value: 'Piedade de Caratinga',
        label: 'Piedade de Caratinga',
    },
    {
        estadoid: 'MG',
        value: 'Piedade de Ponte Nova',
        label: 'Piedade de Ponte Nova',
    },
    {
        estadoid: 'MG',
        value: 'Piedade do Rio Grande',
        label: 'Piedade do Rio Grande',
    },
    {
        estadoid: 'MG',
        value: 'Piedade dos Gerais',
        label: 'Piedade dos Gerais',
    },
    {
        estadoid: 'MG',
        value: 'Pimenta',
        label: 'Pimenta',
    },
    {
        estadoid: 'MG',
        value: 'Pingo-d\'Água',
        label: 'Pingo-d\'Água',
    },
    {
        estadoid: 'MG',
        value: 'Pintópolis',
        label: 'Pintópolis',
    },
    {
        estadoid: 'MG',
        value: 'Piracema',
        label: 'Piracema',
    },
    {
        estadoid: 'MG',
        value: 'Pirajuba',
        label: 'Pirajuba',
    },
    {
        estadoid: 'MG',
        value: 'Piranga',
        label: 'Piranga',
    },
    {
        estadoid: 'MG',
        value: 'Piranguçu',
        label: 'Piranguçu',
    },
    {
        estadoid: 'MG',
        value: 'Piranguinho',
        label: 'Piranguinho',
    },
    {
        estadoid: 'MG',
        value: 'Pirapetinga',
        label: 'Pirapetinga',
    },
    {
        estadoid: 'MG',
        value: 'Pirapora',
        label: 'Pirapora',
    },
    {
        estadoid: 'MG',
        value: 'Piraúba',
        label: 'Piraúba',
    },
    {
        estadoid: 'MG',
        value: 'Pitangui',
        label: 'Pitangui',
    },
    {
        estadoid: 'MG',
        value: 'Piumhi',
        label: 'Piumhi',
    },
    {
        estadoid: 'MG',
        value: 'Planura',
        label: 'Planura',
    },
    {
        estadoid: 'MG',
        value: 'Poço Fundo',
        label: 'Poço Fundo',
    },
    {
        estadoid: 'MG',
        value: 'Poços de Caldas',
        label: 'Poços de Caldas',
    },
    {
        estadoid: 'MG',
        value: 'Pocrane',
        label: 'Pocrane',
    },
    {
        estadoid: 'MG',
        value: 'Pompéu',
        label: 'Pompéu',
    },
    {
        estadoid: 'MG',
        value: 'Ponte Nova',
        label: 'Ponte Nova',
    },
    {
        estadoid: 'MG',
        value: 'Ponto Chique',
        label: 'Ponto Chique',
    },
    {
        estadoid: 'MG',
        value: 'Ponto dos Volantes',
        label: 'Ponto dos Volantes',
    },
    {
        estadoid: 'MG',
        value: 'Porteirinha',
        label: 'Porteirinha',
    },
    {
        estadoid: 'MG',
        value: 'Porto Firme',
        label: 'Porto Firme',
    },
    {
        estadoid: 'MG',
        value: 'Poté',
        label: 'Poté',
    },
    {
        estadoid: 'MG',
        value: 'Pouso Alegre',
        label: 'Pouso Alegre',
    },
    {
        estadoid: 'MG',
        value: 'Pouso Alto',
        label: 'Pouso Alto',
    },
    {
        estadoid: 'MG',
        value: 'Prados',
        label: 'Prados',
    },
    {
        estadoid: 'MG',
        value: 'Prata',
        label: 'Prata',
    },
    {
        estadoid: 'MG',
        value: 'Pratápolis',
        label: 'Pratápolis',
    },
    {
        estadoid: 'MG',
        value: 'Pratinha',
        label: 'Pratinha',
    },
    {
        estadoid: 'MG',
        value: 'Presidente Bernardes',
        label: 'Presidente Bernardes',
    },
    {
        estadoid: 'MG',
        value: 'Presidente Juscelino',
        label: 'Presidente Juscelino',
    },
    {
        estadoid: 'MG',
        value: 'Presidente Kubitschek',
        label: 'Presidente Kubitschek',
    },
    {
        estadoid: 'MG',
        value: 'Presidente Olegário',
        label: 'Presidente Olegário',
    },
    {
        estadoid: 'MG',
        value: 'Prudente de Morais',
        label: 'Prudente de Morais',
    },
    {
        estadoid: 'MG',
        value: 'Quartel Geral',
        label: 'Quartel Geral',
    },
    {
        estadoid: 'MG',
        value: 'Queluzito',
        label: 'Queluzito',
    },
    {
        estadoid: 'MG',
        value: 'Raposos',
        label: 'Raposos',
    },
    {
        estadoid: 'MG',
        value: 'Raul Soares',
        label: 'Raul Soares',
    },
    {
        estadoid: 'MG',
        value: 'Recreio',
        label: 'Recreio',
    },
    {
        estadoid: 'MG',
        value: 'Reduto',
        label: 'Reduto',
    },
    {
        estadoid: 'MG',
        value: 'Resende Costa',
        label: 'Resende Costa',
    },
    {
        estadoid: 'MG',
        value: 'Resplendor',
        label: 'Resplendor',
    },
    {
        estadoid: 'MG',
        value: 'Ressaquinha',
        label: 'Ressaquinha',
    },
    {
        estadoid: 'MG',
        value: 'Riachinho',
        label: 'Riachinho',
    },
    {
        estadoid: 'MG',
        value: 'Riacho dos Machados',
        label: 'Riacho dos Machados',
    },
    {
        estadoid: 'MG',
        value: 'Ribeirão das Neves',
        label: 'Ribeirão das Neves',
    },
    {
        estadoid: 'MG',
        value: 'Ribeirão Vermelho',
        label: 'Ribeirão Vermelho',
    },
    {
        estadoid: 'MG',
        value: 'Rio Acima',
        label: 'Rio Acima',
    },
    {
        estadoid: 'MG',
        value: 'Rio Casca',
        label: 'Rio Casca',
    },
    {
        estadoid: 'MG',
        value: 'Rio do Prado',
        label: 'Rio do Prado',
    },
    {
        estadoid: 'MG',
        value: 'Rio Doce',
        label: 'Rio Doce',
    },
    {
        estadoid: 'MG',
        value: 'Rio Espera',
        label: 'Rio Espera',
    },
    {
        estadoid: 'MG',
        value: 'Rio Manso',
        label: 'Rio Manso',
    },
    {
        estadoid: 'MG',
        value: 'Rio Novo',
        label: 'Rio Novo',
    },
    {
        estadoid: 'MG',
        value: 'Rio Paranaíba',
        label: 'Rio Paranaíba',
    },
    {
        estadoid: 'MG',
        value: 'Rio Pardo de Minas',
        label: 'Rio Pardo de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Rio Piracicaba',
        label: 'Rio Piracicaba',
    },
    {
        estadoid: 'MG',
        value: 'Rio Pomba',
        label: 'Rio Pomba',
    },
    {
        estadoid: 'MG',
        value: 'Rio Preto',
        label: 'Rio Preto',
    },
    {
        estadoid: 'MG',
        value: 'Rio Vermelho',
        label: 'Rio Vermelho',
    },
    {
        estadoid: 'MG',
        value: 'Ritápolis',
        label: 'Ritápolis',
    },
    {
        estadoid: 'MG',
        value: 'Rochedo de Minas',
        label: 'Rochedo de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Rodeiro',
        label: 'Rodeiro',
    },
    {
        estadoid: 'MG',
        value: 'Romaria',
        label: 'Romaria',
    },
    {
        estadoid: 'MG',
        value: 'Rosário da Limeira',
        label: 'Rosário da Limeira',
    },
    {
        estadoid: 'MG',
        value: 'Rubelita',
        label: 'Rubelita',
    },
    {
        estadoid: 'MG',
        value: 'Rubim',
        label: 'Rubim',
    },
    {
        estadoid: 'MG',
        value: 'Sabará',
        label: 'Sabará',
    },
    {
        estadoid: 'MG',
        value: 'Sabinópolis',
        label: 'Sabinópolis',
    },
    {
        estadoid: 'MG',
        value: 'Sacramento',
        label: 'Sacramento',
    },
    {
        estadoid: 'MG',
        value: 'Salinas',
        label: 'Salinas',
    },
    {
        estadoid: 'MG',
        value: 'Salto da Divisa',
        label: 'Salto da Divisa',
    },
    {
        estadoid: 'MG',
        value: 'Santa Bárbara',
        label: 'Santa Bárbara',
    },
    {
        estadoid: 'MG',
        value: 'Santa Bárbara do Leste',
        label: 'Santa Bárbara do Leste',
    },
    {
        estadoid: 'MG',
        value: 'Santa Bárbara do Monte Verde',
        label: 'Santa Bárbara do Monte Verde',
    },
    {
        estadoid: 'MG',
        value: 'Santa Bárbara do Tugúrio',
        label: 'Santa Bárbara do Tugúrio',
    },
    {
        estadoid: 'MG',
        value: 'Santa Cruz de Minas',
        label: 'Santa Cruz de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Cruz de Salinas',
        label: 'Santa Cruz de Salinas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Cruz do Escalvado',
        label: 'Santa Cruz do Escalvado',
    },
    {
        estadoid: 'MG',
        value: 'Santa Efigênia de Minas',
        label: 'Santa Efigênia de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Fé de Minas',
        label: 'Santa Fé de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Helena de Minas',
        label: 'Santa Helena de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Juliana',
        label: 'Santa Juliana',
    },
    {
        estadoid: 'MG',
        value: 'Santa Luzia',
        label: 'Santa Luzia',
    },
    {
        estadoid: 'MG',
        value: 'Santa Margarida',
        label: 'Santa Margarida',
    },
    {
        estadoid: 'MG',
        value: 'Santa Maria de Itabira',
        label: 'Santa Maria de Itabira',
    },
    {
        estadoid: 'MG',
        value: 'Santa Maria do Salto',
        label: 'Santa Maria do Salto',
    },
    {
        estadoid: 'MG',
        value: 'Santa Maria do Suaçuí',
        label: 'Santa Maria do Suaçuí',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rita de Caldas',
        label: 'Santa Rita de Caldas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rita de Ibitipoca',
        label: 'Santa Rita de Ibitipoca',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rita de Jacutinga',
        label: 'Santa Rita de Jacutinga',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rita de Minas',
        label: 'Santa Rita de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rita do Itueto',
        label: 'Santa Rita do Itueto',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rita do Sapucaí',
        label: 'Santa Rita do Sapucaí',
    },
    {
        estadoid: 'MG',
        value: 'Santa Rosa da Serra',
        label: 'Santa Rosa da Serra',
    },
    {
        estadoid: 'MG',
        value: 'Santa Vitória',
        label: 'Santa Vitória',
    },
    {
        estadoid: 'MG',
        value: 'Santana da Vargem',
        label: 'Santana da Vargem',
    },
    {
        estadoid: 'MG',
        value: 'Santana de Cataguases',
        label: 'Santana de Cataguases',
    },
    {
        estadoid: 'MG',
        value: 'Santana de Pirapama',
        label: 'Santana de Pirapama',
    },
    {
        estadoid: 'MG',
        value: 'Santana do Deserto',
        label: 'Santana do Deserto',
    },
    {
        estadoid: 'MG',
        value: 'Santana do Garambéu',
        label: 'Santana do Garambéu',
    },
    {
        estadoid: 'MG',
        value: 'Santana do Jacaré',
        label: 'Santana do Jacaré',
    },
    {
        estadoid: 'MG',
        value: 'Santana do Manhuaçu',
        label: 'Santana do Manhuaçu',
    },
    {
        estadoid: 'MG',
        value: 'Santana do Paraíso',
        label: 'Santana do Paraíso',
    },
    {
        estadoid: 'MG',
        value: 'Santana do Riacho',
        label: 'Santana do Riacho',
    },
    {
        estadoid: 'MG',
        value: 'Santana dos Montes',
        label: 'Santana dos Montes',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Amparo',
        label: 'Santo Antônio do Amparo',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Aventureiro',
        label: 'Santo Antônio do Aventureiro',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Grama',
        label: 'Santo Antônio do Grama',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Itambé',
        label: 'Santo Antônio do Itambé',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Jacinto',
        label: 'Santo Antônio do Jacinto',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Monte',
        label: 'Santo Antônio do Monte',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Retiro',
        label: 'Santo Antônio do Retiro',
    },
    {
        estadoid: 'MG',
        value: 'Santo Antônio do Rio Abaixo',
        label: 'Santo Antônio do Rio Abaixo',
    },
    {
        estadoid: 'MG',
        value: 'Santo Hipólito',
        label: 'Santo Hipólito',
    },
    {
        estadoid: 'MG',
        value: 'Santos Dumont',
        label: 'Santos Dumont',
    },
    {
        estadoid: 'MG',
        value: 'São Bento Abade',
        label: 'São Bento Abade',
    },
    {
        estadoid: 'MG',
        value: 'São Brás do Suaçuí',
        label: 'São Brás do Suaçuí',
    },
    {
        estadoid: 'MG',
        value: 'São Domingos das Dores',
        label: 'São Domingos das Dores',
    },
    {
        estadoid: 'MG',
        value: 'São Domingos do Prata',
        label: 'São Domingos do Prata',
    },
    {
        estadoid: 'MG',
        value: 'São Félix de Minas',
        label: 'São Félix de Minas',
    },
    {
        estadoid: 'MG',
        value: 'São Francisco',
        label: 'São Francisco',
    },
    {
        estadoid: 'MG',
        value: 'São Francisco de Paula',
        label: 'São Francisco de Paula',
    },
    {
        estadoid: 'MG',
        value: 'São Francisco de Sales',
        label: 'São Francisco de Sales',
    },
    {
        estadoid: 'MG',
        value: 'São Francisco do Glória',
        label: 'São Francisco do Glória',
    },
    {
        estadoid: 'MG',
        value: 'São Geraldo',
        label: 'São Geraldo',
    },
    {
        estadoid: 'MG',
        value: 'São Geraldo da Piedade',
        label: 'São Geraldo da Piedade',
    },
    {
        estadoid: 'MG',
        value: 'São Geraldo do Baixio',
        label: 'São Geraldo do Baixio',
    },
    {
        estadoid: 'MG',
        value: 'São Gonçalo do Abaeté',
        label: 'São Gonçalo do Abaeté',
    },
    {
        estadoid: 'MG',
        value: 'São Gonçalo do Pará',
        label: 'São Gonçalo do Pará',
    },
    {
        estadoid: 'MG',
        value: 'São Gonçalo do Rio Abaixo',
        label: 'São Gonçalo do Rio Abaixo',
    },
    {
        estadoid: 'MG',
        value: 'São Gonçalo do Rio Preto',
        label: 'São Gonçalo do Rio Preto',
    },
    {
        estadoid: 'MG',
        value: 'São Gonçalo do Sapucaí',
        label: 'São Gonçalo do Sapucaí',
    },
    {
        estadoid: 'MG',
        value: 'São Gotardo',
        label: 'São Gotardo',
    },
    {
        estadoid: 'MG',
        value: 'São João Batista do Glória',
        label: 'São João Batista do Glória',
    },
    {
        estadoid: 'MG',
        value: 'São João da Lagoa',
        label: 'São João da Lagoa',
    },
    {
        estadoid: 'MG',
        value: 'São João da Mata',
        label: 'São João da Mata',
    },
    {
        estadoid: 'MG',
        value: 'São João da Ponte',
        label: 'São João da Ponte',
    },
    {
        estadoid: 'MG',
        value: 'São João das Missões',
        label: 'São João das Missões',
    },
    {
        estadoid: 'MG',
        value: 'São João del Rei',
        label: 'São João del Rei',
    },
    {
        estadoid: 'MG',
        value: 'São João do Manhuaçu',
        label: 'São João do Manhuaçu',
    },
    {
        estadoid: 'MG',
        value: 'São João do Manteninha',
        label: 'São João do Manteninha',
    },
    {
        estadoid: 'MG',
        value: 'São João do Oriente',
        label: 'São João do Oriente',
    },
    {
        estadoid: 'MG',
        value: 'São João do Pacuí',
        label: 'São João do Pacuí',
    },
    {
        estadoid: 'MG',
        value: 'São João do Paraíso',
        label: 'São João do Paraíso',
    },
    {
        estadoid: 'MG',
        value: 'São João Evangelista',
        label: 'São João Evangelista',
    },
    {
        estadoid: 'MG',
        value: 'São João Nepomuceno',
        label: 'São João Nepomuceno',
    },
    {
        estadoid: 'MG',
        value: 'São Joaquim de Bicas',
        label: 'São Joaquim de Bicas',
    },
    {
        estadoid: 'MG',
        value: 'São José da Barra',
        label: 'São José da Barra',
    },
    {
        estadoid: 'MG',
        value: 'São José da Lapa',
        label: 'São José da Lapa',
    },
    {
        estadoid: 'MG',
        value: 'São José da Safira',
        label: 'São José da Safira',
    },
    {
        estadoid: 'MG',
        value: 'São José da Varginha',
        label: 'São José da Varginha',
    },
    {
        estadoid: 'MG',
        value: 'São José do Alegre',
        label: 'São José do Alegre',
    },
    {
        estadoid: 'MG',
        value: 'São José do Divino',
        label: 'São José do Divino',
    },
    {
        estadoid: 'MG',
        value: 'São José do Goiabal',
        label: 'São José do Goiabal',
    },
    {
        estadoid: 'MG',
        value: 'São José do Jacuri',
        label: 'São José do Jacuri',
    },
    {
        estadoid: 'MG',
        value: 'São José do Mantimento',
        label: 'São José do Mantimento',
    },
    {
        estadoid: 'MG',
        value: 'São Lourenço',
        label: 'São Lourenço',
    },
    {
        estadoid: 'MG',
        value: 'São Miguel do Anta',
        label: 'São Miguel do Anta',
    },
    {
        estadoid: 'MG',
        value: 'São Pedro da União',
        label: 'São Pedro da União',
    },
    {
        estadoid: 'MG',
        value: 'São Pedro do Suaçuí',
        label: 'São Pedro do Suaçuí',
    },
    {
        estadoid: 'MG',
        value: 'São Pedro dos Ferros',
        label: 'São Pedro dos Ferros',
    },
    {
        estadoid: 'MG',
        value: 'São Romão',
        label: 'São Romão',
    },
    {
        estadoid: 'MG',
        value: 'São Roque de Minas',
        label: 'São Roque de Minas',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião da Bela Vista',
        label: 'São Sebastião da Bela Vista',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião da Vargem Alegre',
        label: 'São Sebastião da Vargem Alegre',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião do Anta',
        label: 'São Sebastião do Anta',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião do Maranhão',
        label: 'São Sebastião do Maranhão',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião do Oeste',
        label: 'São Sebastião do Oeste',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião do Paraíso',
        label: 'São Sebastião do Paraíso',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião do Rio Preto',
        label: 'São Sebastião do Rio Preto',
    },
    {
        estadoid: 'MG',
        value: 'São Sebastião do Rio Verde',
        label: 'São Sebastião do Rio Verde',
    },
    {
        estadoid: 'MG',
        value: 'São Thomé das Letras',
        label: 'São Thomé das Letras',
    },
    {
        estadoid: 'MG',
        value: 'São Tiago',
        label: 'São Tiago',
    },
    {
        estadoid: 'MG',
        value: 'São Tomás de Aquino',
        label: 'São Tomás de Aquino',
    },
    {
        estadoid: 'MG',
        value: 'São Vicente de Minas',
        label: 'São Vicente de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Sapucaí-Mirim',
        label: 'Sapucaí-Mirim',
    },
    {
        estadoid: 'MG',
        value: 'Sardoá',
        label: 'Sardoá',
    },
    {
        estadoid: 'MG',
        value: 'Sarzedo',
        label: 'Sarzedo',
    },
    {
        estadoid: 'MG',
        value: 'Sem-Peixe',
        label: 'Sem-Peixe',
    },
    {
        estadoid: 'MG',
        value: 'Senador Amaral',
        label: 'Senador Amaral',
    },
    {
        estadoid: 'MG',
        value: 'Senador Cortes',
        label: 'Senador Cortes',
    },
    {
        estadoid: 'MG',
        value: 'Senador Firmino',
        label: 'Senador Firmino',
    },
    {
        estadoid: 'MG',
        value: 'Senador José Bento',
        label: 'Senador José Bento',
    },
    {
        estadoid: 'MG',
        value: 'Senador Modestino Gonçalves',
        label: 'Senador Modestino Gonçalves',
    },
    {
        estadoid: 'MG',
        value: 'Senhora de Oliveira',
        label: 'Senhora de Oliveira',
    },
    {
        estadoid: 'MG',
        value: 'Senhora do Porto',
        label: 'Senhora do Porto',
    },
    {
        estadoid: 'MG',
        value: 'Senhora dos Remédios',
        label: 'Senhora dos Remédios',
    },
    {
        estadoid: 'MG',
        value: 'Sericita',
        label: 'Sericita',
    },
    {
        estadoid: 'MG',
        value: 'Seritinga',
        label: 'Seritinga',
    },
    {
        estadoid: 'MG',
        value: 'Serra Azul de Minas',
        label: 'Serra Azul de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Serra da Saudade',
        label: 'Serra da Saudade',
    },
    {
        estadoid: 'MG',
        value: 'Serra do Salitre',
        label: 'Serra do Salitre',
    },
    {
        estadoid: 'MG',
        value: 'Serra dos Aimorés',
        label: 'Serra dos Aimorés',
    },
    {
        estadoid: 'MG',
        value: 'Serrania',
        label: 'Serrania',
    },
    {
        estadoid: 'MG',
        value: 'Serranópolis de Minas',
        label: 'Serranópolis de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Serranos',
        label: 'Serranos',
    },
    {
        estadoid: 'MG',
        value: 'Serro',
        label: 'Serro',
    },
    {
        estadoid: 'MG',
        value: 'Sete Lagoas',
        label: 'Sete Lagoas',
    },
    {
        estadoid: 'MG',
        value: 'Setubinha',
        label: 'Setubinha',
    },
    {
        estadoid: 'MG',
        value: 'Silveirânia',
        label: 'Silveirânia',
    },
    {
        estadoid: 'MG',
        value: 'Silvianópolis',
        label: 'Silvianópolis',
    },
    {
        estadoid: 'MG',
        value: 'Simão Pereira',
        label: 'Simão Pereira',
    },
    {
        estadoid: 'MG',
        value: 'Simonésia',
        label: 'Simonésia',
    },
    {
        estadoid: 'MG',
        value: 'Sobrália',
        label: 'Sobrália',
    },
    {
        estadoid: 'MG',
        value: 'Soledade de Minas',
        label: 'Soledade de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Tabuleiro',
        label: 'Tabuleiro',
    },
    {
        estadoid: 'MG',
        value: 'Taiobeiras',
        label: 'Taiobeiras',
    },
    {
        estadoid: 'MG',
        value: 'Taparuba',
        label: 'Taparuba',
    },
    {
        estadoid: 'MG',
        value: 'Tapira',
        label: 'Tapira',
    },
    {
        estadoid: 'MG',
        value: 'Tapiraí',
        label: 'Tapiraí',
    },
    {
        estadoid: 'MG',
        value: 'Taquaraçu de Minas',
        label: 'Taquaraçu de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Tarumirim',
        label: 'Tarumirim',
    },
    {
        estadoid: 'MG',
        value: 'Teixeiras',
        label: 'Teixeiras',
    },
    {
        estadoid: 'MG',
        value: 'Teófilo Otoni',
        label: 'Teófilo Otoni',
    },
    {
        estadoid: 'MG',
        value: 'Timóteo',
        label: 'Timóteo',
    },
    {
        estadoid: 'MG',
        value: 'Tiradentes',
        label: 'Tiradentes',
    },
    {
        estadoid: 'MG',
        value: 'Tiros',
        label: 'Tiros',
    },
    {
        estadoid: 'MG',
        value: 'Tocantins',
        label: 'Tocantins',
    },
    {
        estadoid: 'MG',
        value: 'Tocos do Moji',
        label: 'Tocos do Moji',
    },
    {
        estadoid: 'MG',
        value: 'Toledo',
        label: 'Toledo',
    },
    {
        estadoid: 'MG',
        value: 'Tombos',
        label: 'Tombos',
    },
    {
        estadoid: 'MG',
        value: 'Três Corações',
        label: 'Três Corações',
    },
    {
        estadoid: 'MG',
        value: 'Três Marias',
        label: 'Três Marias',
    },
    {
        estadoid: 'MG',
        value: 'Três Pontas',
        label: 'Três Pontas',
    },
    {
        estadoid: 'MG',
        value: 'Tumiritinga',
        label: 'Tumiritinga',
    },
    {
        estadoid: 'MG',
        value: 'Tupaciguara',
        label: 'Tupaciguara',
    },
    {
        estadoid: 'MG',
        value: 'Turmalina',
        label: 'Turmalina',
    },
    {
        estadoid: 'MG',
        value: 'Turvolândia',
        label: 'Turvolândia',
    },
    {
        estadoid: 'MG',
        value: 'Ubá',
        label: 'Ubá',
    },
    {
        estadoid: 'MG',
        value: 'Ubaí',
        label: 'Ubaí',
    },
    {
        estadoid: 'MG',
        value: 'Ubaporanga',
        label: 'Ubaporanga',
    },
    {
        estadoid: 'MG',
        value: 'Uberaba',
        label: 'Uberaba',
    },
    {
        estadoid: 'MG',
        value: 'Uberlândia',
        label: 'Uberlândia',
    },
    {
        estadoid: 'MG',
        value: 'Umburatiba',
        label: 'Umburatiba',
    },
    {
        estadoid: 'MG',
        value: 'Unaí',
        label: 'Unaí',
    },
    {
        estadoid: 'MG',
        value: 'União de Minas',
        label: 'União de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Uruana de Minas',
        label: 'Uruana de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Urucânia',
        label: 'Urucânia',
    },
    {
        estadoid: 'MG',
        value: 'Urucuia',
        label: 'Urucuia',
    },
    {
        estadoid: 'MG',
        value: 'Vargem Alegre',
        label: 'Vargem Alegre',
    },
    {
        estadoid: 'MG',
        value: 'Vargem Bonita',
        label: 'Vargem Bonita',
    },
    {
        estadoid: 'MG',
        value: 'Vargem Grande do Rio Pardo',
        label: 'Vargem Grande do Rio Pardo',
    },
    {
        estadoid: 'MG',
        value: 'Varginha',
        label: 'Varginha',
    },
    {
        estadoid: 'MG',
        value: 'Varjão de Minas',
        label: 'Varjão de Minas',
    },
    {
        estadoid: 'MG',
        value: 'Várzea da Palma',
        label: 'Várzea da Palma',
    },
    {
        estadoid: 'MG',
        value: 'Varzelândia',
        label: 'Varzelândia',
    },
    {
        estadoid: 'MG',
        value: 'Vazante',
        label: 'Vazante',
    },
    {
        estadoid: 'MG',
        value: 'Verdelândia',
        label: 'Verdelândia',
    },
    {
        estadoid: 'MG',
        value: 'Veredinha',
        label: 'Veredinha',
    },
    {
        estadoid: 'MG',
        value: 'Veríssimo',
        label: 'Veríssimo',
    },
    {
        estadoid: 'MG',
        value: 'Vermelho Novo',
        label: 'Vermelho Novo',
    },
    {
        estadoid: 'MG',
        value: 'Vespasiano',
        label: 'Vespasiano',
    },
    {
        estadoid: 'MG',
        value: 'Viçosa',
        label: 'Viçosa',
    },
    {
        estadoid: 'MG',
        value: 'Vieiras',
        label: 'Vieiras',
    },
    {
        estadoid: 'MG',
        value: 'Virgem da Lapa',
        label: 'Virgem da Lapa',
    },
    {
        estadoid: 'MG',
        value: 'Virgínia',
        label: 'Virgínia',
    },
    {
        estadoid: 'MG',
        value: 'Virginópolis',
        label: 'Virginópolis',
    },
    {
        estadoid: 'MG',
        value: 'Virgolândia',
        label: 'Virgolândia',
    },
    {
        estadoid: 'MG',
        value: 'Visconde do Rio Branco',
        label: 'Visconde do Rio Branco',
    },
    {
        estadoid: 'MG',
        value: 'Volta Grande',
        label: 'Volta Grande',
    },
    {
        estadoid: 'MG',
        value: 'Wenceslau Braz',
        label: 'Wenceslau Braz',
    },
    {
        estadoid: 'MS',
        value: 'Água Clara',
        label: 'Água Clara',
    },
    {
        estadoid: 'MS',
        value: 'Alcinópolis',
        label: 'Alcinópolis',
    },
    {
        estadoid: 'MS',
        value: 'Amambaí',
        label: 'Amambaí',
    },
    {
        estadoid: 'MS',
        value: 'Anastácio',
        label: 'Anastácio',
    },
    {
        estadoid: 'MS',
        value: 'Anaurilândia',
        label: 'Anaurilândia',
    },
    {
        estadoid: 'MS',
        value: 'Angélica',
        label: 'Angélica',
    },
    {
        estadoid: 'MS',
        value: 'Antônio João',
        label: 'Antônio João',
    },
    {
        estadoid: 'MS',
        value: 'Aparecida do Taboado',
        label: 'Aparecida do Taboado',
    },
    {
        estadoid: 'MS',
        value: 'Aquidauana',
        label: 'Aquidauana',
    },
    {
        estadoid: 'MS',
        value: 'Aral Moreira',
        label: 'Aral Moreira',
    },
    {
        estadoid: 'MS',
        value: 'Bandeirantes',
        label: 'Bandeirantes',
    },
    {
        estadoid: 'MS',
        value: 'Bataguassu',
        label: 'Bataguassu',
    },
    {
        estadoid: 'MS',
        value: 'Bataiporã',
        label: 'Bataiporã',
    },
    {
        estadoid: 'MS',
        value: 'Bela Vista',
        label: 'Bela Vista',
    },
    {
        estadoid: 'MS',
        value: 'Bodoquena',
        label: 'Bodoquena',
    },
    {
        estadoid: 'MS',
        value: 'Bonito',
        label: 'Bonito',
    },
    {
        estadoid: 'MS',
        value: 'Brasilândia',
        label: 'Brasilândia',
    },
    {
        estadoid: 'MS',
        value: 'Caarapó',
        label: 'Caarapó',
    },
    {
        estadoid: 'MS',
        value: 'Camapuã',
        label: 'Camapuã',
    },
    {
        estadoid: 'MS',
        label: 'Campo Grande',
        value: 'Campo Grande',
    },
    {
        estadoid: 'MS',
        value: 'Caracol',
        label: 'Caracol',
    },
    {
        estadoid: 'MS',
        value: 'Cassilândia',
        label: 'Cassilândia',
    },
    {
        estadoid: 'MS',
        value: 'Chapadão do Sul',
        label: 'Chapadão do Sul',
    },
    {
        estadoid: 'MS',
        value: 'Corguinho',
        label: 'Corguinho',
    },
    {
        estadoid: 'MS',
        value: 'Coronel Sapucaia',
        label: 'Coronel Sapucaia',
    },
    {
        estadoid: 'MS',
        value: 'Corumbá',
        label: 'Corumbá',
    },
    {
        estadoid: 'MS',
        value: 'Costa Rica',
        label: 'Costa Rica',
    },
    {
        estadoid: 'MS',
        value: 'Coxim',
        label: 'Coxim',
    },
    {
        estadoid: 'MS',
        value: 'Deodápolis',
        label: 'Deodápolis',
    },
    {
        estadoid: 'MS',
        value: 'Dois Irmãos do Buriti',
        label: 'Dois Irmãos do Buriti',
    },
    {
        estadoid: 'MS',
        value: 'Douradina',
        label: 'Douradina',
    },
    {
        estadoid: 'MS',
        value: 'Dourados',
        label: 'Dourados',
    },
    {
        estadoid: 'MS',
        value: 'Eldorado',
        label: 'Eldorado',
    },
    {
        estadoid: 'MS',
        value: 'Fátima do Sul',
        label: 'Fátima do Sul',
    },
    {
        estadoid: 'MS',
        value: 'Glória de Dourados',
        label: 'Glória de Dourados',
    },
    {
        estadoid: 'MS',
        value: 'Guia Lopes da Laguna',
        label: 'Guia Lopes da Laguna',
    },
    {
        estadoid: 'MS',
        value: 'Iguatemi',
        label: 'Iguatemi',
    },
    {
        estadoid: 'MS',
        value: 'Inocência',
        label: 'Inocência',
    },
    {
        estadoid: 'MS',
        value: 'Itaporã',
        label: 'Itaporã',
    },
    {
        estadoid: 'MS',
        value: 'Itaquiraí',
        label: 'Itaquiraí',
    },
    {
        estadoid: 'MS',
        value: 'Ivinhema',
        label: 'Ivinhema',
    },
    {
        estadoid: 'MS',
        value: 'Japorã',
        label: 'Japorã',
    },
    {
        estadoid: 'MS',
        value: 'Jaraguari',
        label: 'Jaraguari',
    },
    {
        estadoid: 'MS',
        value: 'Jardim',
        label: 'Jardim',
    },
    {
        estadoid: 'MS',
        value: 'Jateí',
        label: 'Jateí',
    },
    {
        estadoid: 'MS',
        value: 'Juti',
        label: 'Juti',
    },
    {
        estadoid: 'MS',
        value: 'Ladário',
        label: 'Ladário',
    },
    {
        estadoid: 'MS',
        value: 'Laguna Carapã',
        label: 'Laguna Carapã',
    },
    {
        estadoid: 'MS',
        value: 'Maracaju',
        label: 'Maracaju',
    },
    {
        estadoid: 'MS',
        value: 'Miranda',
        label: 'Miranda',
    },
    {
        estadoid: 'MS',
        value: 'Mundo Novo',
        label: 'Mundo Novo',
    },
    {
        estadoid: 'MS',
        value: 'Naviraí',
        label: 'Naviraí',
    },
    {
        estadoid: 'MS',
        value: 'Nioaque',
        label: 'Nioaque',
    },
    {
        estadoid: 'MS',
        value: 'Nova Alvorada do Sul',
        label: 'Nova Alvorada do Sul',
    },
    {
        estadoid: 'MS',
        value: 'Nova Andradina',
        label: 'Nova Andradina',
    },
    {
        estadoid: 'MS',
        value: 'Novo Horizonte do Sul',
        label: 'Novo Horizonte do Sul',
    },
    {
        estadoid: 'MS',
        value: 'Paranaíba',
        label: 'Paranaíba',
    },
    {
        estadoid: 'MS',
        value: 'Paranhos',
        label: 'Paranhos',
    },
    {
        estadoid: 'MS',
        value: 'Pedro Gomes',
        label: 'Pedro Gomes',
    },
    {
        estadoid: 'MS',
        value: 'Ponta Porã',
        label: 'Ponta Porã',
    },
    {
        estadoid: 'MS',
        value: 'Porto Murtinho',
        label: 'Porto Murtinho',
    },
    {
        estadoid: 'MS',
        value: 'Ribas do Rio Pardo',
        label: 'Ribas do Rio Pardo',
    },
    {
        estadoid: 'MS',
        value: 'Rio Brilhante',
        label: 'Rio Brilhante',
    },
    {
        estadoid: 'MS',
        value: 'Rio Negro',
        label: 'Rio Negro',
    },
    {
        estadoid: 'MS',
        value: 'Rio Verde de Mato Grosso',
        label: 'Rio Verde de Mato Grosso',
    },
    {
        estadoid: 'MS',
        value: 'Rochedo',
        label: 'Rochedo',
    },
    {
        estadoid: 'MS',
        value: 'Santa Rita do Pardo',
        label: 'Santa Rita do Pardo',
    },
    {
        estadoid: 'MS',
        value: 'São Gabriel do Oeste',
        label: 'São Gabriel do Oeste',
    },
    {
        estadoid: 'MS',
        value: 'Selvíria',
        label: 'Selvíria',
    },
    {
        estadoid: 'MS',
        value: 'Sete Quedas',
        label: 'Sete Quedas',
    },
    {
        estadoid: 'MS',
        value: 'Sidrolândia',
        label: 'Sidrolândia',
    },
    {
        estadoid: 'MS',
        value: 'Sonora',
        label: 'Sonora',
    },
    {
        estadoid: 'MS',
        value: 'Tacuru',
        label: 'Tacuru',
    },
    {
        estadoid: 'MS',
        value: 'Taquarussu',
        label: 'Taquarussu',
    },
    {
        estadoid: 'MS',
        value: 'Terenos',
        label: 'Terenos',
    },
    {
        estadoid: 'MS',
        value: 'Três Lagoas',
        label: 'Três Lagoas',
    },
    {
        estadoid: 'MS',
        value: 'Vicentina',
        label: 'Vicentina',
    },
    {
        estadoid: 'MT',
        value: 'Acorizal',
        label: 'Acorizal',
    },
    {
        estadoid: 'MT',
        value: 'Água Boa',
        label: 'Água Boa',
    },
    {
        estadoid: 'MT',
        value: 'Alta Floresta',
        label: 'Alta Floresta',
    },
    {
        estadoid: 'MT',
        value: 'Alto Araguaia',
        label: 'Alto Araguaia',
    },
    {
        estadoid: 'MT',
        value: 'Alto Boa Vista',
        label: 'Alto Boa Vista',
    },
    {
        estadoid: 'MT',
        value: 'Alto Garças',
        label: 'Alto Garças',
    },
    {
        estadoid: 'MT',
        value: 'Alto Paraguai',
        label: 'Alto Paraguai',
    },
    {
        estadoid: 'MT',
        value: 'Alto Taquari',
        label: 'Alto Taquari',
    },
    {
        estadoid: 'MT',
        value: 'Apiacás',
        label: 'Apiacás',
    },
    {
        estadoid: 'MT',
        value: 'Araguaiana',
        label: 'Araguaiana',
    },
    {
        estadoid: 'MT',
        value: 'Araguainha',
        label: 'Araguainha',
    },
    {
        estadoid: 'MT',
        value: 'Araputanga',
        label: 'Araputanga',
    },
    {
        estadoid: 'MT',
        value: 'Arenápolis',
        label: 'Arenápolis',
    },
    {
        estadoid: 'MT',
        value: 'Aripuanã',
        label: 'Aripuanã',
    },
    {
        estadoid: 'MT',
        value: 'Barão de Melgaço',
        label: 'Barão de Melgaço',
    },
    {
        estadoid: 'MT',
        value: 'Barra do Bugres',
        label: 'Barra do Bugres',
    },
    {
        estadoid: 'MT',
        value: 'Barra do Garças',
        label: 'Barra do Garças',
    },
    {
        estadoid: 'MT',
        value: 'Bom Jesus do Araguaia',
        label: 'Bom Jesus do Araguaia',
    },
    {
        estadoid: 'MT',
        value: 'Brasnorte',
        label: 'Brasnorte',
    },
    {
        estadoid: 'MT',
        value: 'Cáceres',
        label: 'Cáceres',
    },
    {
        estadoid: 'MT',
        value: 'Campinápolis',
        label: 'Campinápolis',
    },
    {
        estadoid: 'MT',
        value: 'Campo Novo do Parecis',
        label: 'Campo Novo do Parecis',
    },
    {
        estadoid: 'MT',
        value: 'Campo Verde',
        label: 'Campo Verde',
    },
    {
        estadoid: 'MT',
        value: 'Campos de Júlio',
        label: 'Campos de Júlio',
    },
    {
        estadoid: 'MT',
        value: 'Canabrava do Norte',
        label: 'Canabrava do Norte',
    },
    {
        estadoid: 'MT',
        value: 'Canarana',
        label: 'Canarana',
    },
    {
        estadoid: 'MT',
        value: 'Carlinda',
        label: 'Carlinda',
    },
    {
        estadoid: 'MT',
        value: 'Castanheira',
        label: 'Castanheira',
    },
    {
        estadoid: 'MT',
        value: 'Chapada dos Guimarães',
        label: 'Chapada dos Guimarães',
    },
    {
        estadoid: 'MT',
        value: 'Cláudia',
        label: 'Cláudia',
    },
    {
        estadoid: 'MT',
        value: 'Cocalinho',
        label: 'Cocalinho',
    },
    {
        estadoid: 'MT',
        value: 'Colíder',
        label: 'Colíder',
    },
    {
        estadoid: 'MT',
        value: 'Colniza',
        label: 'Colniza',
    },
    {
        estadoid: 'MT',
        value: 'Comodoro',
        label: 'Comodoro',
    },
    {
        estadoid: 'MT',
        value: 'Confresa',
        label: 'Confresa',
    },
    {
        estadoid: 'MT',
        value: 'Conquista d\'Oeste',
        label: 'Conquista d\'Oeste',
    },
    {
        estadoid: 'MT',
        value: 'Cotriguaçu',
        label: 'Cotriguaçu',
    },
    {
        estadoid: 'MT',
        label: 'Cuiabá',
        value: 'Cuiabá',
    },
    {
        estadoid: 'MT',
        value: 'Curvelândia',
        label: 'Curvelândia',
    },
    {
        estadoid: 'MT',
        value: 'Denise',
        label: 'Denise',
    },
    {
        estadoid: 'MT',
        value: 'Diamantino',
        label: 'Diamantino',
    },
    {
        estadoid: 'MT',
        value: 'Dom Aquino',
        label: 'Dom Aquino',
    },
    {
        estadoid: 'MT',
        value: 'Feliz Natal',
        label: 'Feliz Natal',
    },
    {
        estadoid: 'MT',
        value: 'Figueirópolis d\'Oeste',
        label: 'Figueirópolis d\'Oeste',
    },
    {
        estadoid: 'MT',
        value: 'Gaúcha do Norte',
        label: 'Gaúcha do Norte',
    },
    {
        estadoid: 'MT',
        value: 'General Carneiro',
        label: 'General Carneiro',
    },
    {
        estadoid: 'MT',
        value: 'Glória d\'Oeste',
        label: 'Glória d\'Oeste',
    },
    {
        estadoid: 'MT',
        value: 'Guarantã do Norte',
        label: 'Guarantã do Norte',
    },
    {
        estadoid: 'MT',
        value: 'Guiratinga',
        label: 'Guiratinga',
    },
    {
        estadoid: 'MT',
        value: 'Indiavaí',
        label: 'Indiavaí',
    },
    {
        estadoid: 'MT',
        value: 'Itaúba',
        label: 'Itaúba',
    },
    {
        estadoid: 'MT',
        value: 'Itiquira',
        label: 'Itiquira',
    },
    {
        estadoid: 'MT',
        value: 'Jaciara',
        label: 'Jaciara',
    },
    {
        estadoid: 'MT',
        value: 'Jangada',
        label: 'Jangada',
    },
    {
        estadoid: 'MT',
        value: 'Jauru',
        label: 'Jauru',
    },
    {
        estadoid: 'MT',
        value: 'Juara',
        label: 'Juara',
    },
    {
        estadoid: 'MT',
        value: 'Juína',
        label: 'Juína',
    },
    {
        estadoid: 'MT',
        value: 'Juruena',
        label: 'Juruena',
    },
    {
        estadoid: 'MT',
        value: 'Juscimeira',
        label: 'Juscimeira',
    },
    {
        estadoid: 'MT',
        value: 'Lambari d\'Oeste',
        label: 'Lambari d\'Oeste',
    },
    {
        estadoid: 'MT',
        value: 'Lucas do Rio Verde',
        label: 'Lucas do Rio Verde',
    },
    {
        estadoid: 'MT',
        value: 'Luciára',
        label: 'Luciára',
    },
    {
        estadoid: 'MT',
        value: 'Marcelândia',
        label: 'Marcelândia',
    },
    {
        estadoid: 'MT',
        value: 'Matupá',
        label: 'Matupá',
    },
    {
        estadoid: 'MT',
        value: 'Mirassol d\'Oeste',
        label: 'Mirassol d\'Oeste',
    },
    {
        estadoid: 'MT',
        value: 'Nobres',
        label: 'Nobres',
    },
    {
        estadoid: 'MT',
        value: 'Nortelândia',
        label: 'Nortelândia',
    },
    {
        estadoid: 'MT',
        value: 'Nossa Senhora do Livramento',
        label: 'Nossa Senhora do Livramento',
    },
    {
        estadoid: 'MT',
        value: 'Nova Bandeirantes',
        label: 'Nova Bandeirantes',
    },
    {
        estadoid: 'MT',
        value: 'Nova Brasilândia',
        label: 'Nova Brasilândia',
    },
    {
        estadoid: 'MT',
        value: 'Nova Canãa do Norte',
        label: 'Nova Canãa do Norte',
    },
    {
        estadoid: 'MT',
        value: 'Nova Guarita',
        label: 'Nova Guarita',
    },
    {
        estadoid: 'MT',
        value: 'Nova Lacerda',
        label: 'Nova Lacerda',
    },
    {
        estadoid: 'MT',
        value: 'Nova Marilândia',
        label: 'Nova Marilândia',
    },
    {
        estadoid: 'MT',
        value: 'Nova Maringá',
        label: 'Nova Maringá',
    },
    {
        estadoid: 'MT',
        value: 'Nova Monte Verde',
        label: 'Nova Monte Verde',
    },
    {
        estadoid: 'MT',
        value: 'Nova Mutum',
        label: 'Nova Mutum',
    },
    {
        estadoid: 'MT',
        value: 'Nova Nazaré',
        label: 'Nova Nazaré',
    },
    {
        estadoid: 'MT',
        value: 'Nova Olímpia',
        label: 'Nova Olímpia',
    },
    {
        estadoid: 'MT',
        value: 'Nova Santa Helena',
        label: 'Nova Santa Helena',
    },
    {
        estadoid: 'MT',
        value: 'Nova Ubiratã',
        label: 'Nova Ubiratã',
    },
    {
        estadoid: 'MT',
        value: 'Nova Xavantina',
        label: 'Nova Xavantina',
    },
    {
        estadoid: 'MT',
        value: 'Novo Horizonte do Norte',
        label: 'Novo Horizonte do Norte',
    },
    {
        estadoid: 'MT',
        value: 'Novo Mundo',
        label: 'Novo Mundo',
    },
    {
        estadoid: 'MT',
        value: 'Novo Santo Antônio',
        label: 'Novo Santo Antônio',
    },
    {
        estadoid: 'MT',
        value: 'Novo São Joaquim',
        label: 'Novo São Joaquim',
    },
    {
        estadoid: 'MT',
        value: 'Paranaíta',
        label: 'Paranaíta',
    },
    {
        estadoid: 'MT',
        value: 'Paranatinga',
        label: 'Paranatinga',
    },
    {
        estadoid: 'MT',
        value: 'Pedra Preta',
        label: 'Pedra Preta',
    },
    {
        estadoid: 'MT',
        value: 'Peixoto de Azevedo',
        label: 'Peixoto de Azevedo',
    },
    {
        estadoid: 'MT',
        value: 'Planalto da Serra',
        label: 'Planalto da Serra',
    },
    {
        estadoid: 'MT',
        value: 'Poconé',
        label: 'Poconé',
    },
    {
        estadoid: 'MT',
        value: 'Pontal do Araguaia',
        label: 'Pontal do Araguaia',
    },
    {
        estadoid: 'MT',
        value: 'Ponte Branca',
        label: 'Ponte Branca',
    },
    {
        estadoid: 'MT',
        value: 'Pontes e Lacerda',
        label: 'Pontes e Lacerda',
    },
    {
        estadoid: 'MT',
        value: 'Porto Alegre do Norte',
        label: 'Porto Alegre do Norte',
    },
    {
        estadoid: 'MT',
        value: 'Porto dos Gaúchos',
        label: 'Porto dos Gaúchos',
    },
    {
        estadoid: 'MT',
        value: 'Porto Esperidião',
        label: 'Porto Esperidião',
    },
    {
        estadoid: 'MT',
        value: 'Porto Estrela',
        label: 'Porto Estrela',
    },
    {
        estadoid: 'MT',
        value: 'Poxoréo',
        label: 'Poxoréo',
    },
    {
        estadoid: 'MT',
        value: 'Primavera do Leste',
        label: 'Primavera do Leste',
    },
    {
        estadoid: 'MT',
        value: 'Querência',
        label: 'Querência',
    },
    {
        estadoid: 'MT',
        value: 'Reserva do Cabaçal',
        label: 'Reserva do Cabaçal',
    },
    {
        estadoid: 'MT',
        value: 'Ribeirão Cascalheira',
        label: 'Ribeirão Cascalheira',
    },
    {
        estadoid: 'MT',
        value: 'Ribeirãozinho',
        label: 'Ribeirãozinho',
    },
    {
        estadoid: 'MT',
        value: 'Rio Branco',
        label: 'Rio Branco',
    },
    {
        estadoid: 'MT',
        value: 'Rondolândia',
        label: 'Rondolândia',
    },
    {
        estadoid: 'MT',
        value: 'Rondonópolis',
        label: 'Rondonópolis',
    },
    {
        estadoid: 'MT',
        value: 'Rosário Oeste',
        label: 'Rosário Oeste',
    },
    {
        estadoid: 'MT',
        value: 'Salto do Céu',
        label: 'Salto do Céu',
    },
    {
        estadoid: 'MT',
        value: 'Santa Carmem',
        label: 'Santa Carmem',
    },
    {
        estadoid: 'MT',
        value: 'Santa Cruz do Xingu',
        label: 'Santa Cruz do Xingu',
    },
    {
        estadoid: 'MT',
        value: 'Santa Rita do Trivelato',
        label: 'Santa Rita do Trivelato',
    },
    {
        estadoid: 'MT',
        value: 'Santa Terezinha',
        label: 'Santa Terezinha',
    },
    {
        estadoid: 'MT',
        value: 'Santo Afonso',
        label: 'Santo Afonso',
    },
    {
        estadoid: 'MT',
        value: 'Santo Antônio do Leste',
        label: 'Santo Antônio do Leste',
    },
    {
        estadoid: 'MT',
        value: 'Santo Antônio do Leverger',
        label: 'Santo Antônio do Leverger',
    },
    {
        estadoid: 'MT',
        value: 'São Félix do Araguaia',
        label: 'São Félix do Araguaia',
    },
    {
        estadoid: 'MT',
        value: 'São José do Povo',
        label: 'São José do Povo',
    },
    {
        estadoid: 'MT',
        value: 'São José do Rio Claro',
        label: 'São José do Rio Claro',
    },
    {
        estadoid: 'MT',
        value: 'São José do Xingu',
        label: 'São José do Xingu',
    },
    {
        estadoid: 'MT',
        value: 'São José dos Quatro Marcos',
        label: 'São José dos Quatro Marcos',
    },
    {
        estadoid: 'MT',
        value: 'São Pedro da Cipa',
        label: 'São Pedro da Cipa',
    },
    {
        estadoid: 'MT',
        value: 'Sapezal',
        label: 'Sapezal',
    },
    {
        estadoid: 'MT',
        value: 'Serra Nova Dourada',
        label: 'Serra Nova Dourada',
    },
    {
        estadoid: 'MT',
        value: 'Sinop',
        label: 'Sinop',
    },
    {
        estadoid: 'MT',
        value: 'Sorriso',
        label: 'Sorriso',
    },
    {
        estadoid: 'MT',
        value: 'Tabaporã',
        label: 'Tabaporã',
    },
    {
        estadoid: 'MT',
        value: 'Tangará da Serra',
        label: 'Tangará da Serra',
    },
    {
        estadoid: 'MT',
        value: 'Tapurah',
        label: 'Tapurah',
    },
    {
        estadoid: 'MT',
        value: 'Terra Nova do Norte',
        label: 'Terra Nova do Norte',
    },
    {
        estadoid: 'MT',
        value: 'Tesouro',
        label: 'Tesouro',
    },
    {
        estadoid: 'MT',
        value: 'Torixoréu',
        label: 'Torixoréu',
    },
    {
        estadoid: 'MT',
        value: 'União do Sul',
        label: 'União do Sul',
    },
    {
        estadoid: 'MT',
        value: 'Vale de São Domingos',
        label: 'Vale de São Domingos',
    },
    {
        estadoid: 'MT',
        value: 'Várzea Grande',
        label: 'Várzea Grande',
    },
    {
        estadoid: 'MT',
        value: 'Vera',
        label: 'Vera',
    },
    {
        estadoid: 'MT',
        value: 'Vila Bela da Santíssima Trindade',
        label: 'Vila Bela da Santíssima Trindade',
    },
    {
        estadoid: 'MT',
        value: 'Vila Rica',
        label: 'Vila Rica',
    },
    {
        estadoid: 'PA',
        value: 'Abaetetuba',
        label: 'Abaetetuba',
    },
    {
        estadoid: 'PA',
        value: 'Abel Figueiredo',
        label: 'Abel Figueiredo',
    },
    {
        estadoid: 'PA',
        value: 'Acará',
        label: 'Acará',
    },
    {
        estadoid: 'PA',
        value: 'Afuá',
        label: 'Afuá',
    },
    {
        estadoid: 'PA',
        value: 'Água Azul do Norte',
        label: 'Água Azul do Norte',
    },
    {
        estadoid: 'PA',
        value: 'Alenquer',
        label: 'Alenquer',
    },
    {
        estadoid: 'PA',
        value: 'Almeirim',
        label: 'Almeirim',
    },
    {
        estadoid: 'PA',
        value: 'Altamira',
        label: 'Altamira',
    },
    {
        estadoid: 'PA',
        value: 'Anajás',
        label: 'Anajás',
    },
    {
        estadoid: 'PA',
        value: 'Ananindeua',
        label: 'Ananindeua',
    },
    {
        estadoid: 'PA',
        value: 'Anapu',
        label: 'Anapu',
    },
    {
        estadoid: 'PA',
        value: 'Augusto Corrêa',
        label: 'Augusto Corrêa',
    },
    {
        estadoid: 'PA',
        value: 'Aurora do Pará',
        label: 'Aurora do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Aveiro',
        label: 'Aveiro',
    },
    {
        estadoid: 'PA',
        value: 'Bagre',
        label: 'Bagre',
    },
    {
        estadoid: 'PA',
        value: 'Baião',
        label: 'Baião',
    },
    {
        estadoid: 'PA',
        value: 'Bannach',
        label: 'Bannach',
    },
    {
        estadoid: 'PA',
        value: 'Barcarena',
        label: 'Barcarena',
    },
    {
        estadoid: 'PA',
        label: 'Belém',
        value: 'Belém',
    },
    {
        estadoid: 'PA',
        value: 'Belterra',
        label: 'Belterra',
    },
    {
        estadoid: 'PA',
        value: 'Benevides',
        label: 'Benevides',
    },
    {
        estadoid: 'PA',
        value: 'Bom Jesus do Tocantins',
        label: 'Bom Jesus do Tocantins',
    },
    {
        estadoid: 'PA',
        value: 'Bonito',
        label: 'Bonito',
    },
    {
        estadoid: 'PA',
        value: 'Bragança',
        label: 'Bragança',
    },
    {
        estadoid: 'PA',
        value: 'Brasil Novo',
        label: 'Brasil Novo',
    },
    {
        estadoid: 'PA',
        value: 'Brejo Grande do Araguaia',
        label: 'Brejo Grande do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'Breu Branco',
        label: 'Breu Branco',
    },
    {
        estadoid: 'PA',
        value: 'Breves',
        label: 'Breves',
    },
    {
        estadoid: 'PA',
        value: 'Bujaru',
        label: 'Bujaru',
    },
    {
        estadoid: 'PA',
        value: 'Cachoeira do Arari',
        label: 'Cachoeira do Arari',
    },
    {
        estadoid: 'PA',
        value: 'Cachoeira do Piriá',
        label: 'Cachoeira do Piriá',
    },
    {
        estadoid: 'PA',
        value: 'Cametá',
        label: 'Cametá',
    },
    {
        estadoid: 'PA',
        value: 'Canaã dos Carajás',
        label: 'Canaã dos Carajás',
    },
    {
        estadoid: 'PA',
        value: 'Capanema',
        label: 'Capanema',
    },
    {
        estadoid: 'PA',
        value: 'Capitão Poço',
        label: 'Capitão Poço',
    },
    {
        estadoid: 'PA',
        value: 'Castanhal',
        label: 'Castanhal',
    },
    {
        estadoid: 'PA',
        value: 'Chaves',
        label: 'Chaves',
    },
    {
        estadoid: 'PA',
        value: 'Colares',
        label: 'Colares',
    },
    {
        estadoid: 'PA',
        value: 'Conceição do Araguaia',
        label: 'Conceição do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'Concórdia do Pará',
        label: 'Concórdia do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Cumaru do Norte',
        label: 'Cumaru do Norte',
    },
    {
        estadoid: 'PA',
        value: 'Curionópolis',
        label: 'Curionópolis',
    },
    {
        estadoid: 'PA',
        value: 'Curralinho',
        label: 'Curralinho',
    },
    {
        estadoid: 'PA',
        value: 'Curuá',
        label: 'Curuá',
    },
    {
        estadoid: 'PA',
        value: 'Curuçá',
        label: 'Curuçá',
    },
    {
        estadoid: 'PA',
        value: 'Dom Eliseu',
        label: 'Dom Eliseu',
    },
    {
        estadoid: 'PA',
        value: 'Eldorado dos Carajás',
        label: 'Eldorado dos Carajás',
    },
    {
        estadoid: 'PA',
        value: 'Faro',
        label: 'Faro',
    },
    {
        estadoid: 'PA',
        value: 'Floresta do Araguaia',
        label: 'Floresta do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'Garrafão do Norte',
        label: 'Garrafão do Norte',
    },
    {
        estadoid: 'PA',
        value: 'Goianésia do Pará',
        label: 'Goianésia do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Gurupá',
        label: 'Gurupá',
    },
    {
        estadoid: 'PA',
        value: 'Igarapé-Açu',
        label: 'Igarapé-Açu',
    },
    {
        estadoid: 'PA',
        value: 'Igarapé-Miri',
        label: 'Igarapé-Miri',
    },
    {
        estadoid: 'PA',
        value: 'Inhangapi',
        label: 'Inhangapi',
    },
    {
        estadoid: 'PA',
        value: 'Ipixuna do Pará',
        label: 'Ipixuna do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Irituia',
        label: 'Irituia',
    },
    {
        estadoid: 'PA',
        value: 'Itaituba',
        label: 'Itaituba',
    },
    {
        estadoid: 'PA',
        value: 'Itupiranga',
        label: 'Itupiranga',
    },
    {
        estadoid: 'PA',
        value: 'Jacareacanga',
        label: 'Jacareacanga',
    },
    {
        estadoid: 'PA',
        value: 'Jacundá',
        label: 'Jacundá',
    },
    {
        estadoid: 'PA',
        value: 'Juruti',
        label: 'Juruti',
    },
    {
        estadoid: 'PA',
        value: 'Limoeiro do Ajuru',
        label: 'Limoeiro do Ajuru',
    },
    {
        estadoid: 'PA',
        value: 'Mãe do Rio',
        label: 'Mãe do Rio',
    },
    {
        estadoid: 'PA',
        value: 'Magalhães Barata',
        label: 'Magalhães Barata',
    },
    {
        estadoid: 'PA',
        value: 'Marabá',
        label: 'Marabá',
    },
    {
        estadoid: 'PA',
        value: 'Maracanã',
        label: 'Maracanã',
    },
    {
        estadoid: 'PA',
        value: 'Marapanim',
        label: 'Marapanim',
    },
    {
        estadoid: 'PA',
        value: 'Marituba',
        label: 'Marituba',
    },
    {
        estadoid: 'PA',
        value: 'Medicilândia',
        label: 'Medicilândia',
    },
    {
        estadoid: 'PA',
        value: 'Melgaço',
        label: 'Melgaço',
    },
    {
        estadoid: 'PA',
        value: 'Mocajuba',
        label: 'Mocajuba',
    },
    {
        estadoid: 'PA',
        value: 'Moju',
        label: 'Moju',
    },
    {
        estadoid: 'PA',
        value: 'Monte Alegre',
        label: 'Monte Alegre',
    },
    {
        estadoid: 'PA',
        value: 'Muaná',
        label: 'Muaná',
    },
    {
        estadoid: 'PA',
        value: 'Nova Esperança do Piriá',
        label: 'Nova Esperança do Piriá',
    },
    {
        estadoid: 'PA',
        value: 'Nova Ipixuna',
        label: 'Nova Ipixuna',
    },
    {
        estadoid: 'PA',
        value: 'Nova Timboteua',
        label: 'Nova Timboteua',
    },
    {
        estadoid: 'PA',
        value: 'Novo Progresso',
        label: 'Novo Progresso',
    },
    {
        estadoid: 'PA',
        value: 'Novo Repartimento',
        label: 'Novo Repartimento',
    },
    {
        estadoid: 'PA',
        value: 'Óbidos',
        label: 'Óbidos',
    },
    {
        estadoid: 'PA',
        value: 'Oeiras do Pará',
        label: 'Oeiras do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Oriximiná',
        label: 'Oriximiná',
    },
    {
        estadoid: 'PA',
        value: 'Ourém',
        label: 'Ourém',
    },
    {
        estadoid: 'PA',
        value: 'Ourilândia do Norte',
        label: 'Ourilândia do Norte',
    },
    {
        estadoid: 'PA',
        value: 'Pacajá',
        label: 'Pacajá',
    },
    {
        estadoid: 'PA',
        value: 'Palestina do Pará',
        label: 'Palestina do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Paragominas',
        label: 'Paragominas',
    },
    {
        estadoid: 'PA',
        value: 'Parauapebas',
        label: 'Parauapebas',
    },
    {
        estadoid: 'PA',
        value: 'Pau d\'Arco',
        label: 'Pau d\'Arco',
    },
    {
        estadoid: 'PA',
        value: 'Peixe-Boi',
        label: 'Peixe-Boi',
    },
    {
        estadoid: 'PA',
        value: 'Piçarra',
        label: 'Piçarra',
    },
    {
        estadoid: 'PA',
        value: 'Placas',
        label: 'Placas',
    },
    {
        estadoid: 'PA',
        value: 'Ponta de Pedras',
        label: 'Ponta de Pedras',
    },
    {
        estadoid: 'PA',
        value: 'Portel',
        label: 'Portel',
    },
    {
        estadoid: 'PA',
        value: 'Porto de Moz',
        label: 'Porto de Moz',
    },
    {
        estadoid: 'PA',
        value: 'Prainha',
        label: 'Prainha',
    },
    {
        estadoid: 'PA',
        value: 'Primavera',
        label: 'Primavera',
    },
    {
        estadoid: 'PA',
        value: 'Quatipuru',
        label: 'Quatipuru',
    },
    {
        estadoid: 'PA',
        value: 'Redenção',
        label: 'Redenção',
    },
    {
        estadoid: 'PA',
        value: 'Rio Maria',
        label: 'Rio Maria',
    },
    {
        estadoid: 'PA',
        value: 'Rondon do Pará',
        label: 'Rondon do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Rurópolis',
        label: 'Rurópolis',
    },
    {
        estadoid: 'PA',
        value: 'Salinópolis',
        label: 'Salinópolis',
    },
    {
        estadoid: 'PA',
        value: 'Salvaterra',
        label: 'Salvaterra',
    },
    {
        estadoid: 'PA',
        value: 'Santa Bárbara do Pará',
        label: 'Santa Bárbara do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Santa Cruz do Arari',
        label: 'Santa Cruz do Arari',
    },
    {
        estadoid: 'PA',
        value: 'Santa Isabel do Pará',
        label: 'Santa Isabel do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Santa Luzia do Pará',
        label: 'Santa Luzia do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Santa Maria das Barreiras',
        label: 'Santa Maria das Barreiras',
    },
    {
        estadoid: 'PA',
        value: 'Santa Maria do Pará',
        label: 'Santa Maria do Pará',
    },
    {
        estadoid: 'PA',
        value: 'Santana do Araguaia',
        label: 'Santana do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'Santarém',
        label: 'Santarém',
    },
    {
        estadoid: 'PA',
        value: 'Santarém Novo',
        label: 'Santarém Novo',
    },
    {
        estadoid: 'PA',
        value: 'Santo Antônio do Tauá',
        label: 'Santo Antônio do Tauá',
    },
    {
        estadoid: 'PA',
        value: 'São Caetano de Odivela',
        label: 'São Caetano de Odivela',
    },
    {
        estadoid: 'PA',
        value: 'São Domingos do Araguaia',
        label: 'São Domingos do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'São Domingos do Capim',
        label: 'São Domingos do Capim',
    },
    {
        estadoid: 'PA',
        value: 'São Félix do Xingu',
        label: 'São Félix do Xingu',
    },
    {
        estadoid: 'PA',
        value: 'São Francisco do Pará',
        label: 'São Francisco do Pará',
    },
    {
        estadoid: 'PA',
        value: 'São Geraldo do Araguaia',
        label: 'São Geraldo do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'São João da Ponta',
        label: 'São João da Ponta',
    },
    {
        estadoid: 'PA',
        value: 'São João de Pirabas',
        label: 'São João de Pirabas',
    },
    {
        estadoid: 'PA',
        value: 'São João do Araguaia',
        label: 'São João do Araguaia',
    },
    {
        estadoid: 'PA',
        value: 'São Miguel do Guamá',
        label: 'São Miguel do Guamá',
    },
    {
        estadoid: 'PA',
        value: 'São Sebastião da Boa Vista',
        label: 'São Sebastião da Boa Vista',
    },
    {
        estadoid: 'PA',
        value: 'Sapucaia',
        label: 'Sapucaia',
    },
    {
        estadoid: 'PA',
        value: 'Senador José Porfírio',
        label: 'Senador José Porfírio',
    },
    {
        estadoid: 'PA',
        value: 'Soure',
        label: 'Soure',
    },
    {
        estadoid: 'PA',
        value: 'Tailândia',
        label: 'Tailândia',
    },
    {
        estadoid: 'PA',
        value: 'Terra Alta',
        label: 'Terra Alta',
    },
    {
        estadoid: 'PA',
        value: 'Terra Santa',
        label: 'Terra Santa',
    },
    {
        estadoid: 'PA',
        value: 'Tomé-Açu',
        label: 'Tomé-Açu',
    },
    {
        estadoid: 'PA',
        value: 'Tracuateua',
        label: 'Tracuateua',
    },
    {
        estadoid: 'PA',
        value: 'Trairão',
        label: 'Trairão',
    },
    {
        estadoid: 'PA',
        value: 'Tucumã',
        label: 'Tucumã',
    },
    {
        estadoid: 'PA',
        value: 'Tucuruí',
        label: 'Tucuruí',
    },
    {
        estadoid: 'PA',
        value: 'Ulianópolis',
        label: 'Ulianópolis',
    },
    {
        estadoid: 'PA',
        value: 'Uruará',
        label: 'Uruará',
    },
    {
        estadoid: 'PA',
        value: 'Vigia',
        label: 'Vigia',
    },
    {
        estadoid: 'PA',
        value: 'Viseu',
        label: 'Viseu',
    },
    {
        estadoid: 'PA',
        value: 'Vitória do Xingu',
        label: 'Vitória do Xingu',
    },
    {
        estadoid: 'PA',
        value: 'Xinguara',
        label: 'Xinguara',
    },
    {
        estadoid: 'PB',
        value: 'Água Branca',
        label: 'Água Branca',
    },
    {
        estadoid: 'PB',
        value: 'Aguiar',
        label: 'Aguiar',
    },
    {
        estadoid: 'PB',
        value: 'Alagoa Grande',
        label: 'Alagoa Grande',
    },
    {
        estadoid: 'PB',
        value: 'Alagoa Nova',
        label: 'Alagoa Nova',
    },
    {
        estadoid: 'PB',
        value: 'Alagoinha',
        label: 'Alagoinha',
    },
    {
        estadoid: 'PB',
        value: 'Alcantil',
        label: 'Alcantil',
    },
    {
        estadoid: 'PB',
        value: 'Algodão de Jandaíra',
        label: 'Algodão de Jandaíra',
    },
    {
        estadoid: 'PB',
        value: 'Alhandra',
        label: 'Alhandra',
    },
    {
        estadoid: 'PB',
        value: 'Amparo',
        label: 'Amparo',
    },
    {
        estadoid: 'PB',
        value: 'Aparecida',
        label: 'Aparecida',
    },
    {
        estadoid: 'PB',
        value: 'Araçagi',
        label: 'Araçagi',
    },
    {
        estadoid: 'PB',
        value: 'Arara',
        label: 'Arara',
    },
    {
        estadoid: 'PB',
        value: 'Araruna',
        label: 'Araruna',
    },
    {
        estadoid: 'PB',
        value: 'Areia',
        label: 'Areia',
    },
    {
        estadoid: 'PB',
        value: 'Areia de Baraúnas',
        label: 'Areia de Baraúnas',
    },
    {
        estadoid: 'PB',
        value: 'Areial',
        label: 'Areial',
    },
    {
        estadoid: 'PB',
        value: 'Aroeiras',
        label: 'Aroeiras',
    },
    {
        estadoid: 'PB',
        value: 'Assunção',
        label: 'Assunção',
    },
    {
        estadoid: 'PB',
        value: 'Baía da Traição',
        label: 'Baía da Traição',
    },
    {
        estadoid: 'PB',
        value: 'Bananeiras',
        label: 'Bananeiras',
    },
    {
        estadoid: 'PB',
        value: 'Baraúna',
        label: 'Baraúna',
    },
    {
        estadoid: 'PB',
        value: 'Barra de Santa Rosa',
        label: 'Barra de Santa Rosa',
    },
    {
        estadoid: 'PB',
        value: 'Barra de Santana',
        label: 'Barra de Santana',
    },
    {
        estadoid: 'PB',
        value: 'Barra de São Miguel',
        label: 'Barra de São Miguel',
    },
    {
        estadoid: 'PB',
        value: 'Bayeux',
        label: 'Bayeux',
    },
    {
        estadoid: 'PB',
        value: 'Belém',
        label: 'Belém',
    },
    {
        estadoid: 'PB',
        value: 'Belém do Brejo do Cruz',
        label: 'Belém do Brejo do Cruz',
    },
    {
        estadoid: 'PB',
        value: 'Bernardino Batista',
        label: 'Bernardino Batista',
    },
    {
        estadoid: 'PB',
        value: 'Boa Ventura',
        label: 'Boa Ventura',
    },
    {
        estadoid: 'PB',
        value: 'Boa Vista',
        label: 'Boa Vista',
    },
    {
        estadoid: 'PB',
        value: 'Bom Jesus',
        label: 'Bom Jesus',
    },
    {
        estadoid: 'PB',
        value: 'Bom Sucesso',
        label: 'Bom Sucesso',
    },
    {
        estadoid: 'PB',
        value: 'Bonito de Santa Fé',
        label: 'Bonito de Santa Fé',
    },
    {
        estadoid: 'PB',
        value: 'Boqueirão',
        label: 'Boqueirão',
    },
    {
        estadoid: 'PB',
        value: 'Borborema',
        label: 'Borborema',
    },
    {
        estadoid: 'PB',
        value: 'Brejo do Cruz',
        label: 'Brejo do Cruz',
    },
    {
        estadoid: 'PB',
        value: 'Brejo dos Santos',
        label: 'Brejo dos Santos',
    },
    {
        estadoid: 'PB',
        value: 'Caaporã',
        label: 'Caaporã',
    },
    {
        estadoid: 'PB',
        value: 'Cabaceiras',
        label: 'Cabaceiras',
    },
    {
        estadoid: 'PB',
        value: 'Cabedelo',
        label: 'Cabedelo',
    },
    {
        estadoid: 'PB',
        value: 'Cachoeira dos Índios',
        label: 'Cachoeira dos Índios',
    },
    {
        estadoid: 'PB',
        value: 'Cacimba de Areia',
        label: 'Cacimba de Areia',
    },
    {
        estadoid: 'PB',
        value: 'Cacimba de Dentro',
        label: 'Cacimba de Dentro',
    },
    {
        estadoid: 'PB',
        value: 'Cacimbas',
        label: 'Cacimbas',
    },
    {
        estadoid: 'PB',
        value: 'Caiçara',
        label: 'Caiçara',
    },
    {
        estadoid: 'PB',
        value: 'Cajazeiras',
        label: 'Cajazeiras',
    },
    {
        estadoid: 'PB',
        value: 'Cajazeirinhas',
        label: 'Cajazeirinhas',
    },
    {
        estadoid: 'PB',
        value: 'Caldas Brandão',
        label: 'Caldas Brandão',
    },
    {
        estadoid: 'PB',
        value: 'Camalaú',
        label: 'Camalaú',
    },
    {
        estadoid: 'PB',
        value: 'Campina Grande',
        label: 'Campina Grande',
    },
    {
        estadoid: 'PB',
        value: 'Campo de Santana',
        label: 'Campo de Santana',
    },
    {
        estadoid: 'PB',
        value: 'Capim',
        label: 'Capim',
    },
    {
        estadoid: 'PB',
        value: 'Caraúbas',
        label: 'Caraúbas',
    },
    {
        estadoid: 'PB',
        value: 'Carrapateira',
        label: 'Carrapateira',
    },
    {
        estadoid: 'PB',
        value: 'Casserengue',
        label: 'Casserengue',
    },
    {
        estadoid: 'PB',
        value: 'Catingueira',
        label: 'Catingueira',
    },
    {
        estadoid: 'PB',
        value: 'Catolé do Rocha',
        label: 'Catolé do Rocha',
    },
    {
        estadoid: 'PB',
        value: 'Caturité',
        label: 'Caturité',
    },
    {
        estadoid: 'PB',
        value: 'Conceição',
        label: 'Conceição',
    },
    {
        estadoid: 'PB',
        value: 'Condado',
        label: 'Condado',
    },
    {
        estadoid: 'PB',
        value: 'Conde',
        label: 'Conde',
    },
    {
        estadoid: 'PB',
        value: 'Congo',
        label: 'Congo',
    },
    {
        estadoid: 'PB',
        value: 'Coremas',
        label: 'Coremas',
    },
    {
        estadoid: 'PB',
        value: 'Coxixola',
        label: 'Coxixola',
    },
    {
        estadoid: 'PB',
        value: 'Cruz do Espírito Santo',
        label: 'Cruz do Espírito Santo',
    },
    {
        estadoid: 'PB',
        value: 'Cubati',
        label: 'Cubati',
    },
    {
        estadoid: 'PB',
        value: 'Cuité',
        label: 'Cuité',
    },
    {
        estadoid: 'PB',
        value: 'Cuité de Mamanguape',
        label: 'Cuité de Mamanguape',
    },
    {
        estadoid: 'PB',
        value: 'Cuitegi',
        label: 'Cuitegi',
    },
    {
        estadoid: 'PB',
        value: 'Curral de Cima',
        label: 'Curral de Cima',
    },
    {
        estadoid: 'PB',
        value: 'Curral Velho',
        label: 'Curral Velho',
    },
    {
        estadoid: 'PB',
        value: 'Damião',
        label: 'Damião',
    },
    {
        estadoid: 'PB',
        value: 'Desterro',
        label: 'Desterro',
    },
    {
        estadoid: 'PB',
        value: 'Diamante',
        label: 'Diamante',
    },
    {
        estadoid: 'PB',
        value: 'Dona Inês',
        label: 'Dona Inês',
    },
    {
        estadoid: 'PB',
        value: 'Duas Estradas',
        label: 'Duas Estradas',
    },
    {
        estadoid: 'PB',
        value: 'Emas',
        label: 'Emas',
    },
    {
        estadoid: 'PB',
        value: 'Esperança',
        label: 'Esperança',
    },
    {
        estadoid: 'PB',
        value: 'Fagundes',
        label: 'Fagundes',
    },
    {
        estadoid: 'PB',
        value: 'Frei Martinho',
        label: 'Frei Martinho',
    },
    {
        estadoid: 'PB',
        value: 'Gado Bravo',
        label: 'Gado Bravo',
    },
    {
        estadoid: 'PB',
        value: 'Guarabira',
        label: 'Guarabira',
    },
    {
        estadoid: 'PB',
        value: 'Gurinhém',
        label: 'Gurinhém',
    },
    {
        estadoid: 'PB',
        value: 'Gurjão',
        label: 'Gurjão',
    },
    {
        estadoid: 'PB',
        value: 'Ibiara',
        label: 'Ibiara',
    },
    {
        estadoid: 'PB',
        value: 'Igaracy',
        label: 'Igaracy',
    },
    {
        estadoid: 'PB',
        value: 'Imaculada',
        label: 'Imaculada',
    },
    {
        estadoid: 'PB',
        value: 'Ingá',
        label: 'Ingá',
    },
    {
        estadoid: 'PB',
        value: 'Itabaiana',
        label: 'Itabaiana',
    },
    {
        estadoid: 'PB',
        value: 'Itaporanga',
        label: 'Itaporanga',
    },
    {
        estadoid: 'PB',
        value: 'Itapororoca',
        label: 'Itapororoca',
    },
    {
        estadoid: 'PB',
        value: 'Itatuba',
        label: 'Itatuba',
    },
    {
        estadoid: 'PB',
        value: 'Jacaraú',
        label: 'Jacaraú',
    },
    {
        estadoid: 'PB',
        value: 'Jericó',
        label: 'Jericó',
    },
    {
        estadoid: 'PB',
        label: 'João Pessoa',
        value: 'João Pessoa',
    },
    {
        estadoid: 'PB',
        value: 'Juarez Távora',
        label: 'Juarez Távora',
    },
    {
        estadoid: 'PB',
        value: 'Juazeirinho',
        label: 'Juazeirinho',
    },
    {
        estadoid: 'PB',
        value: 'Junco do Seridó',
        label: 'Junco do Seridó',
    },
    {
        estadoid: 'PB',
        value: 'Juripiranga',
        label: 'Juripiranga',
    },
    {
        estadoid: 'PB',
        value: 'Juru',
        label: 'Juru',
    },
    {
        estadoid: 'PB',
        value: 'Lagoa',
        label: 'Lagoa',
    },
    {
        estadoid: 'PB',
        value: 'Lagoa de Dentro',
        label: 'Lagoa de Dentro',
    },
    {
        estadoid: 'PB',
        value: 'Lagoa Seca',
        label: 'Lagoa Seca',
    },
    {
        estadoid: 'PB',
        value: 'Lastro',
        label: 'Lastro',
    },
    {
        estadoid: 'PB',
        value: 'Livramento',
        label: 'Livramento',
    },
    {
        estadoid: 'PB',
        value: 'Logradouro',
        label: 'Logradouro',
    },
    {
        estadoid: 'PB',
        value: 'Lucena',
        label: 'Lucena',
    },
    {
        estadoid: 'PB',
        value: 'Mãe d\'Água',
        label: 'Mãe d\'Água',
    },
    {
        estadoid: 'PB',
        value: 'Malta',
        label: 'Malta',
    },
    {
        estadoid: 'PB',
        value: 'Mamanguape',
        label: 'Mamanguape',
    },
    {
        estadoid: 'PB',
        value: 'Manaíra',
        label: 'Manaíra',
    },
    {
        estadoid: 'PB',
        value: 'Marcação',
        label: 'Marcação',
    },
    {
        estadoid: 'PB',
        value: 'Mari',
        label: 'Mari',
    },
    {
        estadoid: 'PB',
        value: 'Marizópolis',
        label: 'Marizópolis',
    },
    {
        estadoid: 'PB',
        value: 'Massaranduba',
        label: 'Massaranduba',
    },
    {
        estadoid: 'PB',
        value: 'Mataraca',
        label: 'Mataraca',
    },
    {
        estadoid: 'PB',
        value: 'Matinhas',
        label: 'Matinhas',
    },
    {
        estadoid: 'PB',
        value: 'Mato Grosso',
        label: 'Mato Grosso',
    },
    {
        estadoid: 'PB',
        value: 'Maturéia',
        label: 'Maturéia',
    },
    {
        estadoid: 'PB',
        value: 'Mogeiro',
        label: 'Mogeiro',
    },
    {
        estadoid: 'PB',
        value: 'Montadas',
        label: 'Montadas',
    },
    {
        estadoid: 'PB',
        value: 'Monte Horebe',
        label: 'Monte Horebe',
    },
    {
        estadoid: 'PB',
        value: 'Monteiro',
        label: 'Monteiro',
    },
    {
        estadoid: 'PB',
        value: 'Mulungu',
        label: 'Mulungu',
    },
    {
        estadoid: 'PB',
        value: 'Natuba',
        label: 'Natuba',
    },
    {
        estadoid: 'PB',
        value: 'Nazarezinho',
        label: 'Nazarezinho',
    },
    {
        estadoid: 'PB',
        value: 'Nova Floresta',
        label: 'Nova Floresta',
    },
    {
        estadoid: 'PB',
        value: 'Nova Olinda',
        label: 'Nova Olinda',
    },
    {
        estadoid: 'PB',
        value: 'Nova Palmeira',
        label: 'Nova Palmeira',
    },
    {
        estadoid: 'PB',
        value: 'Olho d\'Água',
        label: 'Olho d\'Água',
    },
    {
        estadoid: 'PB',
        value: 'Olivedos',
        label: 'Olivedos',
    },
    {
        estadoid: 'PB',
        value: 'Ouro Velho',
        label: 'Ouro Velho',
    },
    {
        estadoid: 'PB',
        value: 'Parari',
        label: 'Parari',
    },
    {
        estadoid: 'PB',
        value: 'Passagem',
        label: 'Passagem',
    },
    {
        estadoid: 'PB',
        value: 'Patos',
        label: 'Patos',
    },
    {
        estadoid: 'PB',
        value: 'Paulista',
        label: 'Paulista',
    },
    {
        estadoid: 'PB',
        value: 'Pedra Branca',
        label: 'Pedra Branca',
    },
    {
        estadoid: 'PB',
        value: 'Pedra Lavrada',
        label: 'Pedra Lavrada',
    },
    {
        estadoid: 'PB',
        value: 'Pedras de Fogo',
        label: 'Pedras de Fogo',
    },
    {
        estadoid: 'PB',
        value: 'Pedro Régis',
        label: 'Pedro Régis',
    },
    {
        estadoid: 'PB',
        value: 'Piancó',
        label: 'Piancó',
    },
    {
        estadoid: 'PB',
        value: 'Picuí',
        label: 'Picuí',
    },
    {
        estadoid: 'PB',
        value: 'Pilar',
        label: 'Pilar',
    },
    {
        estadoid: 'PB',
        value: 'Pilões',
        label: 'Pilões',
    },
    {
        estadoid: 'PB',
        value: 'Pilõezinhos',
        label: 'Pilõezinhos',
    },
    {
        estadoid: 'PB',
        value: 'Pirpirituba',
        label: 'Pirpirituba',
    },
    {
        estadoid: 'PB',
        value: 'Pitimbu',
        label: 'Pitimbu',
    },
    {
        estadoid: 'PB',
        value: 'Pocinhos',
        label: 'Pocinhos',
    },
    {
        estadoid: 'PB',
        value: 'Poço Dantas',
        label: 'Poço Dantas',
    },
    {
        estadoid: 'PB',
        value: 'Poço de José de Moura',
        label: 'Poço de José de Moura',
    },
    {
        estadoid: 'PB',
        value: 'Pombal',
        label: 'Pombal',
    },
    {
        estadoid: 'PB',
        value: 'Prata',
        label: 'Prata',
    },
    {
        estadoid: 'PB',
        value: 'Princesa Isabel',
        label: 'Princesa Isabel',
    },
    {
        estadoid: 'PB',
        value: 'Puxinanã',
        label: 'Puxinanã',
    },
    {
        estadoid: 'PB',
        value: 'Queimadas',
        label: 'Queimadas',
    },
    {
        estadoid: 'PB',
        value: 'Quixabá',
        label: 'Quixabá',
    },
    {
        estadoid: 'PB',
        value: 'Remígio',
        label: 'Remígio',
    },
    {
        estadoid: 'PB',
        value: 'Riachão',
        label: 'Riachão',
    },
    {
        estadoid: 'PB',
        value: 'Riachão do Bacamarte',
        label: 'Riachão do Bacamarte',
    },
    {
        estadoid: 'PB',
        value: 'Riachão do Poço',
        label: 'Riachão do Poço',
    },
    {
        estadoid: 'PB',
        value: 'Riacho de Santo Antônio',
        label: 'Riacho de Santo Antônio',
    },
    {
        estadoid: 'PB',
        value: 'Riacho dos Cavalos',
        label: 'Riacho dos Cavalos',
    },
    {
        estadoid: 'PB',
        value: 'Rio Tinto',
        label: 'Rio Tinto',
    },
    {
        estadoid: 'PB',
        value: 'Salgadinho',
        label: 'Salgadinho',
    },
    {
        estadoid: 'PB',
        value: 'Salgado de São Félix',
        label: 'Salgado de São Félix',
    },
    {
        estadoid: 'PB',
        value: 'Santa Cecília',
        label: 'Santa Cecília',
    },
    {
        estadoid: 'PB',
        value: 'Santa Cruz',
        label: 'Santa Cruz',
    },
    {
        estadoid: 'PB',
        value: 'Santa Helena',
        label: 'Santa Helena',
    },
    {
        estadoid: 'PB',
        value: 'Santa Inês',
        label: 'Santa Inês',
    },
    {
        estadoid: 'PB',
        value: 'Santa Luzia',
        label: 'Santa Luzia',
    },
    {
        estadoid: 'PB',
        value: 'Santa Rita',
        label: 'Santa Rita',
    },
    {
        estadoid: 'PB',
        value: 'Santa Teresinha',
        label: 'Santa Teresinha',
    },
    {
        estadoid: 'PB',
        value: 'Santana de Mangueira',
        label: 'Santana de Mangueira',
    },
    {
        estadoid: 'PB',
        value: 'Santana dos Garrotes',
        label: 'Santana dos Garrotes',
    },
    {
        estadoid: 'PB',
        value: 'Santarém',
        label: 'Santarém',
    },
    {
        estadoid: 'PB',
        value: 'Santo André',
        label: 'Santo André',
    },
    {
        estadoid: 'PB',
        value: 'São Bentinho',
        label: 'São Bentinho',
    },
    {
        estadoid: 'PB',
        value: 'São Bento',
        label: 'São Bento',
    },
    {
        estadoid: 'PB',
        value: 'São Domingos de Pombal',
        label: 'São Domingos de Pombal',
    },
    {
        estadoid: 'PB',
        value: 'São Domingos do Cariri',
        label: 'São Domingos do Cariri',
    },
    {
        estadoid: 'PB',
        value: 'São Francisco',
        label: 'São Francisco',
    },
    {
        estadoid: 'PB',
        value: 'São João do Cariri',
        label: 'São João do Cariri',
    },
    {
        estadoid: 'PB',
        value: 'São João do Rio do Peixe',
        label: 'São João do Rio do Peixe',
    },
    {
        estadoid: 'PB',
        value: 'São João do Tigre',
        label: 'São João do Tigre',
    },
    {
        estadoid: 'PB',
        value: 'São José da Lagoa Tapada',
        label: 'São José da Lagoa Tapada',
    },
    {
        estadoid: 'PB',
        value: 'São José de Caiana',
        label: 'São José de Caiana',
    },
    {
        estadoid: 'PB',
        value: 'São José de Espinharas',
        label: 'São José de Espinharas',
    },
    {
        estadoid: 'PB',
        value: 'São José de Piranhas',
        label: 'São José de Piranhas',
    },
    {
        estadoid: 'PB',
        value: 'São José de Princesa',
        label: 'São José de Princesa',
    },
    {
        estadoid: 'PB',
        value: 'São José do Bonfim',
        label: 'São José do Bonfim',
    },
    {
        estadoid: 'PB',
        value: 'São José do Brejo do Cruz',
        label: 'São José do Brejo do Cruz',
    },
    {
        estadoid: 'PB',
        value: 'São José do Sabugi',
        label: 'São José do Sabugi',
    },
    {
        estadoid: 'PB',
        value: 'São José dos Cordeiros',
        label: 'São José dos Cordeiros',
    },
    {
        estadoid: 'PB',
        value: 'São José dos Ramos',
        label: 'São José dos Ramos',
    },
    {
        estadoid: 'PB',
        value: 'São Mamede',
        label: 'São Mamede',
    },
    {
        estadoid: 'PB',
        value: 'São Miguel de Taipu',
        label: 'São Miguel de Taipu',
    },
    {
        estadoid: 'PB',
        value: 'São Sebastião de Lagoa de Roça',
        label: 'São Sebastião de Lagoa de Roça',
    },
    {
        estadoid: 'PB',
        value: 'São Sebastião do Umbuzeiro',
        label: 'São Sebastião do Umbuzeiro',
    },
    {
        estadoid: 'PB',
        value: 'Sapé',
        label: 'Sapé',
    },
    {
        estadoid: 'PB',
        value: 'Seridó',
        label: 'Seridó',
    },
    {
        estadoid: 'PB',
        value: 'Serra Branca',
        label: 'Serra Branca',
    },
    {
        estadoid: 'PB',
        value: 'Serra da Raiz',
        label: 'Serra da Raiz',
    },
    {
        estadoid: 'PB',
        value: 'Serra Grande',
        label: 'Serra Grande',
    },
    {
        estadoid: 'PB',
        value: 'Serra Redonda',
        label: 'Serra Redonda',
    },
    {
        estadoid: 'PB',
        value: 'Serraria',
        label: 'Serraria',
    },
    {
        estadoid: 'PB',
        value: 'Sertãozinho',
        label: 'Sertãozinho',
    },
    {
        estadoid: 'PB',
        value: 'Sobrado',
        label: 'Sobrado',
    },
    {
        estadoid: 'PB',
        value: 'Solânea',
        label: 'Solânea',
    },
    {
        estadoid: 'PB',
        value: 'Soledade',
        label: 'Soledade',
    },
    {
        estadoid: 'PB',
        value: 'Sossêgo',
        label: 'Sossêgo',
    },
    {
        estadoid: 'PB',
        value: 'Sousa',
        label: 'Sousa',
    },
    {
        estadoid: 'PB',
        value: 'Sumé',
        label: 'Sumé',
    },
    {
        estadoid: 'PB',
        value: 'Taperoá',
        label: 'Taperoá',
    },
    {
        estadoid: 'PB',
        value: 'Tavares',
        label: 'Tavares',
    },
    {
        estadoid: 'PB',
        value: 'Teixeira',
        label: 'Teixeira',
    },
    {
        estadoid: 'PB',
        value: 'Tenório',
        label: 'Tenório',
    },
    {
        estadoid: 'PB',
        value: 'Triunfo',
        label: 'Triunfo',
    },
    {
        estadoid: 'PB',
        value: 'Uiraúna',
        label: 'Uiraúna',
    },
    {
        estadoid: 'PB',
        value: 'Umbuzeiro',
        label: 'Umbuzeiro',
    },
    {
        estadoid: 'PB',
        value: 'Várzea',
        label: 'Várzea',
    },
    {
        estadoid: 'PB',
        value: 'Vieirópolis',
        label: 'Vieirópolis',
    },
    {
        estadoid: 'PB',
        value: 'Vista Serrana',
        label: 'Vista Serrana',
    },
    {
        estadoid: 'PB',
        value: 'Zabelê',
        label: 'Zabelê',
    },
    {
        estadoid: 'PE',
        value: 'Abreu e Lima',
        label: 'Abreu e Lima',
    },
    {
        estadoid: 'PE',
        value: 'Afogados da Ingazeira',
        label: 'Afogados da Ingazeira',
    },
    {
        estadoid: 'PE',
        value: 'Afrânio',
        label: 'Afrânio',
    },
    {
        estadoid: 'PE',
        value: 'Agrestina',
        label: 'Agrestina',
    },
    {
        estadoid: 'PE',
        value: 'Água Preta',
        label: 'Água Preta',
    },
    {
        estadoid: 'PE',
        value: 'Águas Belas',
        label: 'Águas Belas',
    },
    {
        estadoid: 'PE',
        value: 'Alagoinha',
        label: 'Alagoinha',
    },
    {
        estadoid: 'PE',
        value: 'Aliança',
        label: 'Aliança',
    },
    {
        estadoid: 'PE',
        value: 'Altinho',
        label: 'Altinho',
    },
    {
        estadoid: 'PE',
        value: 'Amaraji',
        label: 'Amaraji',
    },
    {
        estadoid: 'PE',
        value: 'Angelim',
        label: 'Angelim',
    },
    {
        estadoid: 'PE',
        value: 'Araçoiaba',
        label: 'Araçoiaba',
    },
    {
        estadoid: 'PE',
        value: 'Araripina',
        label: 'Araripina',
    },
    {
        estadoid: 'PE',
        value: 'Arcoverde',
        label: 'Arcoverde',
    },
    {
        estadoid: 'PE',
        value: 'Barra de Guabiraba',
        label: 'Barra de Guabiraba',
    },
    {
        estadoid: 'PE',
        value: 'Barreiros',
        label: 'Barreiros',
    },
    {
        estadoid: 'PE',
        value: 'Belém de Maria',
        label: 'Belém de Maria',
    },
    {
        estadoid: 'PE',
        value: 'Belém de São Francisco',
        label: 'Belém de São Francisco',
    },
    {
        estadoid: 'PE',
        value: 'Belo Jardim',
        label: 'Belo Jardim',
    },
    {
        estadoid: 'PE',
        value: 'Betânia',
        label: 'Betânia',
    },
    {
        estadoid: 'PE',
        value: 'Bezerros',
        label: 'Bezerros',
    },
    {
        estadoid: 'PE',
        value: 'Bodocó',
        label: 'Bodocó',
    },
    {
        estadoid: 'PE',
        value: 'Bom Conselho',
        label: 'Bom Conselho',
    },
    {
        estadoid: 'PE',
        value: 'Bom Jardim',
        label: 'Bom Jardim',
    },
    {
        estadoid: 'PE',
        value: 'Bonito',
        label: 'Bonito',
    },
    {
        estadoid: 'PE',
        value: 'Brejão',
        label: 'Brejão',
    },
    {
        estadoid: 'PE',
        value: 'Brejinho',
        label: 'Brejinho',
    },
    {
        estadoid: 'PE',
        value: 'Brejo da Madre de Deus',
        label: 'Brejo da Madre de Deus',
    },
    {
        estadoid: 'PE',
        value: 'Buenos Aires',
        label: 'Buenos Aires',
    },
    {
        estadoid: 'PE',
        value: 'Buíque',
        label: 'Buíque',
    },
    {
        estadoid: 'PE',
        value: 'Cabo de Santo Agostinho',
        label: 'Cabo de Santo Agostinho',
    },
    {
        estadoid: 'PE',
        value: 'Cabrobó',
        label: 'Cabrobó',
    },
    {
        estadoid: 'PE',
        value: 'Cachoeirinha',
        label: 'Cachoeirinha',
    },
    {
        estadoid: 'PE',
        value: 'Caetés',
        label: 'Caetés',
    },
    {
        estadoid: 'PE',
        value: 'Calçado',
        label: 'Calçado',
    },
    {
        estadoid: 'PE',
        value: 'Calumbi',
        label: 'Calumbi',
    },
    {
        estadoid: 'PE',
        value: 'Camaragibe',
        label: 'Camaragibe',
    },
    {
        estadoid: 'PE',
        value: 'Camocim de São Félix',
        label: 'Camocim de São Félix',
    },
    {
        estadoid: 'PE',
        value: 'Camutanga',
        label: 'Camutanga',
    },
    {
        estadoid: 'PE',
        value: 'Canhotinho',
        label: 'Canhotinho',
    },
    {
        estadoid: 'PE',
        value: 'Capoeiras',
        label: 'Capoeiras',
    },
    {
        estadoid: 'PE',
        value: 'Carnaíba',
        label: 'Carnaíba',
    },
    {
        estadoid: 'PE',
        value: 'Carnaubeira da Penha',
        label: 'Carnaubeira da Penha',
    },
    {
        estadoid: 'PE',
        value: 'Carpina',
        label: 'Carpina',
    },
    {
        estadoid: 'PE',
        value: 'Caruaru',
        label: 'Caruaru',
    },
    {
        estadoid: 'PE',
        value: 'Casinhas',
        label: 'Casinhas',
    },
    {
        estadoid: 'PE',
        value: 'Catende',
        label: 'Catende',
    },
    {
        estadoid: 'PE',
        value: 'Cedro',
        label: 'Cedro',
    },
    {
        estadoid: 'PE',
        value: 'Chã de Alegria',
        label: 'Chã de Alegria',
    },
    {
        estadoid: 'PE',
        value: 'Chã Grande',
        label: 'Chã Grande',
    },
    {
        estadoid: 'PE',
        value: 'Condado',
        label: 'Condado',
    },
    {
        estadoid: 'PE',
        value: 'Correntes',
        label: 'Correntes',
    },
    {
        estadoid: 'PE',
        value: 'Cortês',
        label: 'Cortês',
    },
    {
        estadoid: 'PE',
        value: 'Cumaru',
        label: 'Cumaru',
    },
    {
        estadoid: 'PE',
        value: 'Cupira',
        label: 'Cupira',
    },
    {
        estadoid: 'PE',
        value: 'Custódia',
        label: 'Custódia',
    },
    {
        estadoid: 'PE',
        value: 'Dormentes',
        label: 'Dormentes',
    },
    {
        estadoid: 'PE',
        value: 'Escada',
        label: 'Escada',
    },
    {
        estadoid: 'PE',
        value: 'Exu',
        label: 'Exu',
    },
    {
        estadoid: 'PE',
        value: 'Feira Nova',
        label: 'Feira Nova',
    },
    {
        estadoid: 'PE',
        value: 'Fernando de Noronha',
        label: 'Fernando de Noronha',
    },
    {
        estadoid: 'PE',
        value: 'Ferreiros',
        label: 'Ferreiros',
    },
    {
        estadoid: 'PE',
        value: 'Flores',
        label: 'Flores',
    },
    {
        estadoid: 'PE',
        value: 'Floresta',
        label: 'Floresta',
    },
    {
        estadoid: 'PE',
        value: 'Frei Miguelinho',
        label: 'Frei Miguelinho',
    },
    {
        estadoid: 'PE',
        value: 'Gameleira',
        label: 'Gameleira',
    },
    {
        estadoid: 'PE',
        value: 'Garanhuns',
        label: 'Garanhuns',
    },
    {
        estadoid: 'PE',
        value: 'Glória do Goitá',
        label: 'Glória do Goitá',
    },
    {
        estadoid: 'PE',
        value: 'Goiana',
        label: 'Goiana',
    },
    {
        estadoid: 'PE',
        value: 'Granito',
        label: 'Granito',
    },
    {
        estadoid: 'PE',
        value: 'Gravatá',
        label: 'Gravatá',
    },
    {
        estadoid: 'PE',
        value: 'Iati',
        label: 'Iati',
    },
    {
        estadoid: 'PE',
        value: 'Ibimirim',
        label: 'Ibimirim',
    },
    {
        estadoid: 'PE',
        value: 'Ibirajuba',
        label: 'Ibirajuba',
    },
    {
        estadoid: 'PE',
        value: 'Igarassu',
        label: 'Igarassu',
    },
    {
        estadoid: 'PE',
        value: 'Iguaraci',
        label: 'Iguaraci',
    },
    {
        estadoid: 'PE',
        value: 'Inajá',
        label: 'Inajá',
    },
    {
        estadoid: 'PE',
        value: 'Ingazeira',
        label: 'Ingazeira',
    },
    {
        estadoid: 'PE',
        value: 'Ipojuca',
        label: 'Ipojuca',
    },
    {
        estadoid: 'PE',
        value: 'Ipubi',
        label: 'Ipubi',
    },
    {
        estadoid: 'PE',
        value: 'Itacuruba',
        label: 'Itacuruba',
    },
    {
        estadoid: 'PE',
        value: 'Itaíba',
        label: 'Itaíba',
    },
    {
        estadoid: 'PE',
        value: 'Itamaracá',
        label: 'Itamaracá',
    },
    {
        estadoid: 'PE',
        value: 'Itambé',
        label: 'Itambé',
    },
    {
        estadoid: 'PE',
        value: 'Itapetim',
        label: 'Itapetim',
    },
    {
        estadoid: 'PE',
        value: 'Itapissuma',
        label: 'Itapissuma',
    },
    {
        estadoid: 'PE',
        value: 'Itaquitinga',
        label: 'Itaquitinga',
    },
    {
        estadoid: 'PE',
        value: 'Jaboatão dos Guararapes',
        label: 'Jaboatão dos Guararapes',
    },
    {
        estadoid: 'PE',
        value: 'Jaqueira',
        label: 'Jaqueira',
    },
    {
        estadoid: 'PE',
        value: 'Jataúba',
        label: 'Jataúba',
    },
    {
        estadoid: 'PE',
        value: 'Jatobá',
        label: 'Jatobá',
    },
    {
        estadoid: 'PE',
        value: 'João Alfredo',
        label: 'João Alfredo',
    },
    {
        estadoid: 'PE',
        value: 'Joaquim Nabuco',
        label: 'Joaquim Nabuco',
    },
    {
        estadoid: 'PE',
        value: 'Jucati',
        label: 'Jucati',
    },
    {
        estadoid: 'PE',
        value: 'Jupi',
        label: 'Jupi',
    },
    {
        estadoid: 'PE',
        value: 'Jurema',
        label: 'Jurema',
    },
    {
        estadoid: 'PE',
        value: 'Lagoa do Carro',
        label: 'Lagoa do Carro',
    },
    {
        estadoid: 'PE',
        value: 'Lagoa do Itaenga',
        label: 'Lagoa do Itaenga',
    },
    {
        estadoid: 'PE',
        value: 'Lagoa do Ouro',
        label: 'Lagoa do Ouro',
    },
    {
        estadoid: 'PE',
        value: 'Lagoa dos Gatos',
        label: 'Lagoa dos Gatos',
    },
    {
        estadoid: 'PE',
        value: 'Lagoa Grande',
        label: 'Lagoa Grande',
    },
    {
        estadoid: 'PE',
        value: 'Lajedo',
        label: 'Lajedo',
    },
    {
        estadoid: 'PE',
        value: 'Limoeiro',
        label: 'Limoeiro',
    },
    {
        estadoid: 'PE',
        value: 'Macaparana',
        label: 'Macaparana',
    },
    {
        estadoid: 'PE',
        value: 'Machados',
        label: 'Machados',
    },
    {
        estadoid: 'PE',
        value: 'Manari',
        label: 'Manari',
    },
    {
        estadoid: 'PE',
        value: 'Maraial',
        label: 'Maraial',
    },
    {
        estadoid: 'PE',
        value: 'Mirandiba',
        label: 'Mirandiba',
    },
    {
        estadoid: 'PE',
        value: 'Moreilândia',
        label: 'Moreilândia',
    },
    {
        estadoid: 'PE',
        value: 'Moreno',
        label: 'Moreno',
    },
    {
        estadoid: 'PE',
        value: 'Nazaré da Mata',
        label: 'Nazaré da Mata',
    },
    {
        estadoid: 'PE',
        value: 'Olinda',
        label: 'Olinda',
    },
    {
        estadoid: 'PE',
        value: 'Orobó',
        label: 'Orobó',
    },
    {
        estadoid: 'PE',
        value: 'Orocó',
        label: 'Orocó',
    },
    {
        estadoid: 'PE',
        value: 'Ouricuri',
        label: 'Ouricuri',
    },
    {
        estadoid: 'PE',
        value: 'Palmares',
        label: 'Palmares',
    },
    {
        estadoid: 'PE',
        value: 'Palmeirina',
        label: 'Palmeirina',
    },
    {
        estadoid: 'PE',
        value: 'Panelas',
        label: 'Panelas',
    },
    {
        estadoid: 'PE',
        value: 'Paranatama',
        label: 'Paranatama',
    },
    {
        estadoid: 'PE',
        value: 'Parnamirim',
        label: 'Parnamirim',
    },
    {
        estadoid: 'PE',
        value: 'Passira',
        label: 'Passira',
    },
    {
        estadoid: 'PE',
        value: 'Paudalho',
        label: 'Paudalho',
    },
    {
        estadoid: 'PE',
        value: 'Paulista',
        label: 'Paulista',
    },
    {
        estadoid: 'PE',
        value: 'Pedra',
        label: 'Pedra',
    },
    {
        estadoid: 'PE',
        value: 'Pesqueira',
        label: 'Pesqueira',
    },
    {
        estadoid: 'PE',
        value: 'Petrolândia',
        label: 'Petrolândia',
    },
    {
        estadoid: 'PE',
        value: 'Petrolina',
        label: 'Petrolina',
    },
    {
        estadoid: 'PE',
        value: 'Poção',
        label: 'Poção',
    },
    {
        estadoid: 'PE',
        value: 'Pombos',
        label: 'Pombos',
    },
    {
        estadoid: 'PE',
        value: 'Primavera',
        label: 'Primavera',
    },
    {
        estadoid: 'PE',
        value: 'Quipapá',
        label: 'Quipapá',
    },
    {
        estadoid: 'PE',
        value: 'Quixaba',
        label: 'Quixaba',
    },
    {
        estadoid: 'PE',
        label: 'Recife',
        value: 'Recife',
    },
    {
        estadoid: 'PE',
        value: 'Riacho das Almas',
        label: 'Riacho das Almas',
    },
    {
        estadoid: 'PE',
        value: 'Ribeirão',
        label: 'Ribeirão',
    },
    {
        estadoid: 'PE',
        value: 'Rio Formoso',
        label: 'Rio Formoso',
    },
    {
        estadoid: 'PE',
        value: 'Sairé',
        label: 'Sairé',
    },
    {
        estadoid: 'PE',
        value: 'Salgadinho',
        label: 'Salgadinho',
    },
    {
        estadoid: 'PE',
        value: 'Salgueiro',
        label: 'Salgueiro',
    },
    {
        estadoid: 'PE',
        value: 'Saloá',
        label: 'Saloá',
    },
    {
        estadoid: 'PE',
        value: 'Sanharó',
        label: 'Sanharó',
    },
    {
        estadoid: 'PE',
        value: 'Santa Cruz',
        label: 'Santa Cruz',
    },
    {
        estadoid: 'PE',
        value: 'Santa Cruz da Baixa Verde',
        label: 'Santa Cruz da Baixa Verde',
    },
    {
        estadoid: 'PE',
        value: 'Santa Cruz do Capibaribe',
        label: 'Santa Cruz do Capibaribe',
    },
    {
        estadoid: 'PE',
        value: 'Santa Filomena',
        label: 'Santa Filomena',
    },
    {
        estadoid: 'PE',
        value: 'Santa Maria da Boa Vista',
        label: 'Santa Maria da Boa Vista',
    },
    {
        estadoid: 'PE',
        value: 'Santa Maria do Cambucá',
        label: 'Santa Maria do Cambucá',
    },
    {
        estadoid: 'PE',
        value: 'Santa Terezinha',
        label: 'Santa Terezinha',
    },
    {
        estadoid: 'PE',
        value: 'São Benedito do Sul',
        label: 'São Benedito do Sul',
    },
    {
        estadoid: 'PE',
        value: 'São Bento do Una',
        label: 'São Bento do Una',
    },
    {
        estadoid: 'PE',
        value: 'São Caitano',
        label: 'São Caitano',
    },
    {
        estadoid: 'PE',
        value: 'São João',
        label: 'São João',
    },
    {
        estadoid: 'PE',
        value: 'São Joaquim do Monte',
        label: 'São Joaquim do Monte',
    },
    {
        estadoid: 'PE',
        value: 'São José da Coroa Grande',
        label: 'São José da Coroa Grande',
    },
    {
        estadoid: 'PE',
        value: 'São José do Belmonte',
        label: 'São José do Belmonte',
    },
    {
        estadoid: 'PE',
        value: 'São José do Egito',
        label: 'São José do Egito',
    },
    {
        estadoid: 'PE',
        value: 'São Lourenço da Mata',
        label: 'São Lourenço da Mata',
    },
    {
        estadoid: 'PE',
        value: 'São Vicente Ferrer',
        label: 'São Vicente Ferrer',
    },
    {
        estadoid: 'PE',
        value: 'Serra Talhada',
        label: 'Serra Talhada',
    },
    {
        estadoid: 'PE',
        value: 'Serrita',
        label: 'Serrita',
    },
    {
        estadoid: 'PE',
        value: 'Sertânia',
        label: 'Sertânia',
    },
    {
        estadoid: 'PE',
        value: 'Sirinhaém',
        label: 'Sirinhaém',
    },
    {
        estadoid: 'PE',
        value: 'Solidão',
        label: 'Solidão',
    },
    {
        estadoid: 'PE',
        value: 'Surubim',
        label: 'Surubim',
    },
    {
        estadoid: 'PE',
        value: 'Tabira',
        label: 'Tabira',
    },
    {
        estadoid: 'PE',
        value: 'Tacaimbó',
        label: 'Tacaimbó',
    },
    {
        estadoid: 'PE',
        value: 'Tacaratu',
        label: 'Tacaratu',
    },
    {
        estadoid: 'PE',
        value: 'Tamandaré',
        label: 'Tamandaré',
    },
    {
        estadoid: 'PE',
        value: 'Taquaritinga do Norte',
        label: 'Taquaritinga do Norte',
    },
    {
        estadoid: 'PE',
        value: 'Terezinha',
        label: 'Terezinha',
    },
    {
        estadoid: 'PE',
        value: 'Terra Nova',
        label: 'Terra Nova',
    },
    {
        estadoid: 'PE',
        value: 'Timbaúba',
        label: 'Timbaúba',
    },
    {
        estadoid: 'PE',
        value: 'Toritama',
        label: 'Toritama',
    },
    {
        estadoid: 'PE',
        value: 'Tracunhaém',
        label: 'Tracunhaém',
    },
    {
        estadoid: 'PE',
        value: 'Trindade',
        label: 'Trindade',
    },
    {
        estadoid: 'PE',
        value: 'Triunfo',
        label: 'Triunfo',
    },
    {
        estadoid: 'PE',
        value: 'Tupanatinga',
        label: 'Tupanatinga',
    },
    {
        estadoid: 'PE',
        value: 'Tuparetama',
        label: 'Tuparetama',
    },
    {
        estadoid: 'PE',
        value: 'Venturosa',
        label: 'Venturosa',
    },
    {
        estadoid: 'PE',
        value: 'Verdejante',
        label: 'Verdejante',
    },
    {
        estadoid: 'PE',
        value: 'Vertente do Lério',
        label: 'Vertente do Lério',
    },
    {
        estadoid: 'PE',
        value: 'Vertentes',
        label: 'Vertentes',
    },
    {
        estadoid: 'PE',
        value: 'Vicência',
        label: 'Vicência',
    },
    {
        estadoid: 'PE',
        value: 'Vitória de Santo Antão',
        label: 'Vitória de Santo Antão',
    },
    {
        estadoid: 'PE',
        value: 'Xexéu',
        label: 'Xexéu',
    },
    {
        estadoid: 'PI',
        value: 'Acauã',
        label: 'Acauã',
    },
    {
        estadoid: 'PI',
        value: 'Agricolândia',
        label: 'Agricolândia',
    },
    {
        estadoid: 'PI',
        value: 'Água Branca',
        label: 'Água Branca',
    },
    {
        estadoid: 'PI',
        value: 'Alagoinha do Piauí',
        label: 'Alagoinha do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Alegrete do Piauí',
        label: 'Alegrete do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Alto Longá',
        label: 'Alto Longá',
    },
    {
        estadoid: 'PI',
        value: 'Altos',
        label: 'Altos',
    },
    {
        estadoid: 'PI',
        value: 'Alvorada do Gurguéia',
        label: 'Alvorada do Gurguéia',
    },
    {
        estadoid: 'PI',
        value: 'Amarante',
        label: 'Amarante',
    },
    {
        estadoid: 'PI',
        value: 'Angical do Piauí',
        label: 'Angical do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Anísio de Abreu',
        label: 'Anísio de Abreu',
    },
    {
        estadoid: 'PI',
        value: 'Antônio Almeida',
        label: 'Antônio Almeida',
    },
    {
        estadoid: 'PI',
        value: 'Aroazes',
        label: 'Aroazes',
    },
    {
        estadoid: 'PI',
        value: 'Arraial',
        label: 'Arraial',
    },
    {
        estadoid: 'PI',
        value: 'Assunção do Piauí',
        label: 'Assunção do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Avelino Lopes',
        label: 'Avelino Lopes',
    },
    {
        estadoid: 'PI',
        value: 'Baixa Grande do Ribeiro',
        label: 'Baixa Grande do Ribeiro',
    },
    {
        estadoid: 'PI',
        value: 'Barra d\'Alcântara',
        label: 'Barra d\'Alcântara',
    },
    {
        estadoid: 'PI',
        value: 'Barras',
        label: 'Barras',
    },
    {
        estadoid: 'PI',
        value: 'Barreiras do Piauí',
        label: 'Barreiras do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Barro Duro',
        label: 'Barro Duro',
    },
    {
        estadoid: 'PI',
        value: 'Batalha',
        label: 'Batalha',
    },
    {
        estadoid: 'PI',
        value: 'Bela Vista do Piauí',
        label: 'Bela Vista do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Belém do Piauí',
        label: 'Belém do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Beneditinos',
        label: 'Beneditinos',
    },
    {
        estadoid: 'PI',
        value: 'Bertolínia',
        label: 'Bertolínia',
    },
    {
        estadoid: 'PI',
        value: 'Betânia do Piauí',
        label: 'Betânia do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Boa Hora',
        label: 'Boa Hora',
    },
    {
        estadoid: 'PI',
        value: 'Bocaina',
        label: 'Bocaina',
    },
    {
        estadoid: 'PI',
        value: 'Bom Jesus',
        label: 'Bom Jesus',
    },
    {
        estadoid: 'PI',
        value: 'Bom Princípio do Piauí',
        label: 'Bom Princípio do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Bonfim do Piauí',
        label: 'Bonfim do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Boqueirão do Piauí',
        label: 'Boqueirão do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Brasileira',
        label: 'Brasileira',
    },
    {
        estadoid: 'PI',
        value: 'Brejo do Piauí',
        label: 'Brejo do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Buriti dos Lopes',
        label: 'Buriti dos Lopes',
    },
    {
        estadoid: 'PI',
        value: 'Buriti dos Montes',
        label: 'Buriti dos Montes',
    },
    {
        estadoid: 'PI',
        value: 'Cabeceiras do Piauí',
        label: 'Cabeceiras do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Cajazeiras do Piauí',
        label: 'Cajazeiras do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Cajueiro da Praia',
        label: 'Cajueiro da Praia',
    },
    {
        estadoid: 'PI',
        value: 'Caldeirão Grande do Piauí',
        label: 'Caldeirão Grande do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Campinas do Piauí',
        label: 'Campinas do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Campo Alegre do Fidalgo',
        label: 'Campo Alegre do Fidalgo',
    },
    {
        estadoid: 'PI',
        value: 'Campo Grande do Piauí',
        label: 'Campo Grande do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Campo Largo do Piauí',
        label: 'Campo Largo do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Campo Maior',
        label: 'Campo Maior',
    },
    {
        estadoid: 'PI',
        value: 'Canavieira',
        label: 'Canavieira',
    },
    {
        estadoid: 'PI',
        value: 'Canto do Buriti',
        label: 'Canto do Buriti',
    },
    {
        estadoid: 'PI',
        value: 'Capitão de Campos',
        label: 'Capitão de Campos',
    },
    {
        estadoid: 'PI',
        value: 'Capitão Gervásio Oliveira',
        label: 'Capitão Gervásio Oliveira',
    },
    {
        estadoid: 'PI',
        value: 'Caracol',
        label: 'Caracol',
    },
    {
        estadoid: 'PI',
        value: 'Caraúbas do Piauí',
        label: 'Caraúbas do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Caridade do Piauí',
        label: 'Caridade do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Castelo do Piauí',
        label: 'Castelo do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Caxingó',
        label: 'Caxingó',
    },
    {
        estadoid: 'PI',
        value: 'Cocal',
        label: 'Cocal',
    },
    {
        estadoid: 'PI',
        value: 'Cocal de Telha',
        label: 'Cocal de Telha',
    },
    {
        estadoid: 'PI',
        value: 'Cocal dos Alves',
        label: 'Cocal dos Alves',
    },
    {
        estadoid: 'PI',
        value: 'Coivaras',
        label: 'Coivaras',
    },
    {
        estadoid: 'PI',
        value: 'Colônia do Gurguéia',
        label: 'Colônia do Gurguéia',
    },
    {
        estadoid: 'PI',
        value: 'Colônia do Piauí',
        label: 'Colônia do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Conceição do Canindé',
        label: 'Conceição do Canindé',
    },
    {
        estadoid: 'PI',
        value: 'Coronel José Dias',
        label: 'Coronel José Dias',
    },
    {
        estadoid: 'PI',
        value: 'Corrente',
        label: 'Corrente',
    },
    {
        estadoid: 'PI',
        value: 'Cristalândia do Piauí',
        label: 'Cristalândia do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Cristino Castro',
        label: 'Cristino Castro',
    },
    {
        estadoid: 'PI',
        value: 'Curimatá',
        label: 'Curimatá',
    },
    {
        estadoid: 'PI',
        value: 'Currais',
        label: 'Currais',
    },
    {
        estadoid: 'PI',
        value: 'Curral Novo do Piauí',
        label: 'Curral Novo do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Curralinhos',
        label: 'Curralinhos',
    },
    {
        estadoid: 'PI',
        value: 'Demerval Lobão',
        label: 'Demerval Lobão',
    },
    {
        estadoid: 'PI',
        value: 'Dirceu Arcoverde',
        label: 'Dirceu Arcoverde',
    },
    {
        estadoid: 'PI',
        value: 'Dom Expedito Lopes',
        label: 'Dom Expedito Lopes',
    },
    {
        estadoid: 'PI',
        value: 'Dom Inocêncio',
        label: 'Dom Inocêncio',
    },
    {
        estadoid: 'PI',
        value: 'Domingos Mourão',
        label: 'Domingos Mourão',
    },
    {
        estadoid: 'PI',
        value: 'Elesbão Veloso',
        label: 'Elesbão Veloso',
    },
    {
        estadoid: 'PI',
        value: 'Eliseu Martins',
        label: 'Eliseu Martins',
    },
    {
        estadoid: 'PI',
        value: 'Esperantina',
        label: 'Esperantina',
    },
    {
        estadoid: 'PI',
        value: 'Fartura do Piauí',
        label: 'Fartura do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Flores do Piauí',
        label: 'Flores do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Floresta do Piauí',
        label: 'Floresta do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Floriano',
        label: 'Floriano',
    },
    {
        estadoid: 'PI',
        value: 'Francinópolis',
        label: 'Francinópolis',
    },
    {
        estadoid: 'PI',
        value: 'Francisco Ayres',
        label: 'Francisco Ayres',
    },
    {
        estadoid: 'PI',
        value: 'Francisco Macedo',
        label: 'Francisco Macedo',
    },
    {
        estadoid: 'PI',
        value: 'Francisco Santos',
        label: 'Francisco Santos',
    },
    {
        estadoid: 'PI',
        value: 'Fronteiras',
        label: 'Fronteiras',
    },
    {
        estadoid: 'PI',
        value: 'Geminiano',
        label: 'Geminiano',
    },
    {
        estadoid: 'PI',
        value: 'Gilbués',
        label: 'Gilbués',
    },
    {
        estadoid: 'PI',
        value: 'Guadalupe',
        label: 'Guadalupe',
    },
    {
        estadoid: 'PI',
        value: 'Guaribas',
        label: 'Guaribas',
    },
    {
        estadoid: 'PI',
        value: 'Hugo Napoleão',
        label: 'Hugo Napoleão',
    },
    {
        estadoid: 'PI',
        value: 'Ilha Grande',
        label: 'Ilha Grande',
    },
    {
        estadoid: 'PI',
        value: 'Inhuma',
        label: 'Inhuma',
    },
    {
        estadoid: 'PI',
        value: 'Ipiranga do Piauí',
        label: 'Ipiranga do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Isaías Coelho',
        label: 'Isaías Coelho',
    },
    {
        estadoid: 'PI',
        value: 'Itainópolis',
        label: 'Itainópolis',
    },
    {
        estadoid: 'PI',
        value: 'Itaueira',
        label: 'Itaueira',
    },
    {
        estadoid: 'PI',
        value: 'Jacobina do Piauí',
        label: 'Jacobina do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Jaicós',
        label: 'Jaicós',
    },
    {
        estadoid: 'PI',
        value: 'Jardim do Mulato',
        label: 'Jardim do Mulato',
    },
    {
        estadoid: 'PI',
        value: 'Jatobá do Piauí',
        label: 'Jatobá do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Jerumenha',
        label: 'Jerumenha',
    },
    {
        estadoid: 'PI',
        value: 'João Costa',
        label: 'João Costa',
    },
    {
        estadoid: 'PI',
        value: 'Joaquim Pires',
        label: 'Joaquim Pires',
    },
    {
        estadoid: 'PI',
        value: 'Joca Marques',
        label: 'Joca Marques',
    },
    {
        estadoid: 'PI',
        value: 'José de Freitas',
        label: 'José de Freitas',
    },
    {
        estadoid: 'PI',
        value: 'Juazeiro do Piauí',
        label: 'Juazeiro do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Júlio Borges',
        label: 'Júlio Borges',
    },
    {
        estadoid: 'PI',
        value: 'Jurema',
        label: 'Jurema',
    },
    {
        estadoid: 'PI',
        value: 'Lagoa Alegre',
        label: 'Lagoa Alegre',
    },
    {
        estadoid: 'PI',
        value: 'Lagoa de São Francisco',
        label: 'Lagoa de São Francisco',
    },
    {
        estadoid: 'PI',
        value: 'Lagoa do Barro do Piauí',
        label: 'Lagoa do Barro do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Lagoa do Piauí',
        label: 'Lagoa do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Lagoa do Sítio',
        label: 'Lagoa do Sítio',
    },
    {
        estadoid: 'PI',
        value: 'Lagoinha do Piauí',
        label: 'Lagoinha do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Landri Sales',
        label: 'Landri Sales',
    },
    {
        estadoid: 'PI',
        value: 'Luís Correia',
        label: 'Luís Correia',
    },
    {
        estadoid: 'PI',
        value: 'Luzilândia',
        label: 'Luzilândia',
    },
    {
        estadoid: 'PI',
        value: 'Madeiro',
        label: 'Madeiro',
    },
    {
        estadoid: 'PI',
        value: 'Manoel Emídio',
        label: 'Manoel Emídio',
    },
    {
        estadoid: 'PI',
        value: 'Marcolândia',
        label: 'Marcolândia',
    },
    {
        estadoid: 'PI',
        value: 'Marcos Parente',
        label: 'Marcos Parente',
    },
    {
        estadoid: 'PI',
        value: 'Massapê do Piauí',
        label: 'Massapê do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Matias Olímpio',
        label: 'Matias Olímpio',
    },
    {
        estadoid: 'PI',
        value: 'Miguel Alves',
        label: 'Miguel Alves',
    },
    {
        estadoid: 'PI',
        value: 'Miguel Leão',
        label: 'Miguel Leão',
    },
    {
        estadoid: 'PI',
        value: 'Milton Brandão',
        label: 'Milton Brandão',
    },
    {
        estadoid: 'PI',
        value: 'Monsenhor Gil',
        label: 'Monsenhor Gil',
    },
    {
        estadoid: 'PI',
        value: 'Monsenhor Hipólito',
        label: 'Monsenhor Hipólito',
    },
    {
        estadoid: 'PI',
        value: 'Monte Alegre do Piauí',
        label: 'Monte Alegre do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Morro Cabeça no Tempo',
        label: 'Morro Cabeça no Tempo',
    },
    {
        estadoid: 'PI',
        value: 'Morro do Chapéu do Piauí',
        label: 'Morro do Chapéu do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Murici dos Portelas',
        label: 'Murici dos Portelas',
    },
    {
        estadoid: 'PI',
        value: 'Nazaré do Piauí',
        label: 'Nazaré do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Nossa Senhora de Nazaré',
        label: 'Nossa Senhora de Nazaré',
    },
    {
        estadoid: 'PI',
        value: 'Nossa Senhora dos Remédios',
        label: 'Nossa Senhora dos Remédios',
    },
    {
        estadoid: 'PI',
        value: 'Nova Santa Rita',
        label: 'Nova Santa Rita',
    },
    {
        estadoid: 'PI',
        value: 'Novo Oriente do Piauí',
        label: 'Novo Oriente do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Novo Santo Antônio',
        label: 'Novo Santo Antônio',
    },
    {
        estadoid: 'PI',
        value: 'Oeiras',
        label: 'Oeiras',
    },
    {
        estadoid: 'PI',
        value: 'Olho d\'Água do Piauí',
        label: 'Olho d\'Água do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Padre Marcos',
        label: 'Padre Marcos',
    },
    {
        estadoid: 'PI',
        value: 'Paes Landim',
        label: 'Paes Landim',
    },
    {
        estadoid: 'PI',
        value: 'Pajeú do Piauí',
        label: 'Pajeú do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Palmeira do Piauí',
        label: 'Palmeira do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Palmeirais',
        label: 'Palmeirais',
    },
    {
        estadoid: 'PI',
        value: 'Paquetá',
        label: 'Paquetá',
    },
    {
        estadoid: 'PI',
        value: 'Parnaguá',
        label: 'Parnaguá',
    },
    {
        estadoid: 'PI',
        value: 'Parnaíba',
        label: 'Parnaíba',
    },
    {
        estadoid: 'PI',
        value: 'Passagem Franca do Piauí',
        label: 'Passagem Franca do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Patos do Piauí',
        label: 'Patos do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Pau d\'Arco do Piauí',
        label: 'Pau d\'Arco do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Paulistana',
        label: 'Paulistana',
    },
    {
        estadoid: 'PI',
        value: 'Pavussu',
        label: 'Pavussu',
    },
    {
        estadoid: 'PI',
        value: 'Pedro II',
        label: 'Pedro II',
    },
    {
        estadoid: 'PI',
        value: 'Pedro Laurentino',
        label: 'Pedro Laurentino',
    },
    {
        estadoid: 'PI',
        value: 'Picos',
        label: 'Picos',
    },
    {
        estadoid: 'PI',
        value: 'Pimenteiras',
        label: 'Pimenteiras',
    },
    {
        estadoid: 'PI',
        value: 'Pio IX',
        label: 'Pio IX',
    },
    {
        estadoid: 'PI',
        value: 'Piracuruca',
        label: 'Piracuruca',
    },
    {
        estadoid: 'PI',
        value: 'Piripiri',
        label: 'Piripiri',
    },
    {
        estadoid: 'PI',
        value: 'Porto',
        label: 'Porto',
    },
    {
        estadoid: 'PI',
        value: 'Porto Alegre do Piauí',
        label: 'Porto Alegre do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Prata do Piauí',
        label: 'Prata do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Queimada Nova',
        label: 'Queimada Nova',
    },
    {
        estadoid: 'PI',
        value: 'Redenção do Gurguéia',
        label: 'Redenção do Gurguéia',
    },
    {
        estadoid: 'PI',
        value: 'Regeneração',
        label: 'Regeneração',
    },
    {
        estadoid: 'PI',
        value: 'Riacho Frio',
        label: 'Riacho Frio',
    },
    {
        estadoid: 'PI',
        value: 'Ribeira do Piauí',
        label: 'Ribeira do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Ribeiro Gonçalves',
        label: 'Ribeiro Gonçalves',
    },
    {
        estadoid: 'PI',
        value: 'Rio Grande do Piauí',
        label: 'Rio Grande do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Santa Cruz do Piauí',
        label: 'Santa Cruz do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Santa Cruz dos Milagres',
        label: 'Santa Cruz dos Milagres',
    },
    {
        estadoid: 'PI',
        value: 'Santa Filomena',
        label: 'Santa Filomena',
    },
    {
        estadoid: 'PI',
        value: 'Santa Luz',
        label: 'Santa Luz',
    },
    {
        estadoid: 'PI',
        value: 'Santa Rosa do Piauí',
        label: 'Santa Rosa do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Santana do Piauí',
        label: 'Santana do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Santo Antônio de Lisboa',
        label: 'Santo Antônio de Lisboa',
    },
    {
        estadoid: 'PI',
        value: 'Santo Antônio dos Milagres',
        label: 'Santo Antônio dos Milagres',
    },
    {
        estadoid: 'PI',
        value: 'Santo Inácio do Piauí',
        label: 'Santo Inácio do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Braz do Piauí',
        label: 'São Braz do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Félix do Piauí',
        label: 'São Félix do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Francisco de Assis do Piauí',
        label: 'São Francisco de Assis do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Francisco do Piauí',
        label: 'São Francisco do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Gonçalo do Gurguéia',
        label: 'São Gonçalo do Gurguéia',
    },
    {
        estadoid: 'PI',
        value: 'São Gonçalo do Piauí',
        label: 'São Gonçalo do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São João da Canabrava',
        label: 'São João da Canabrava',
    },
    {
        estadoid: 'PI',
        value: 'São João da Fronteira',
        label: 'São João da Fronteira',
    },
    {
        estadoid: 'PI',
        value: 'São João da Serra',
        label: 'São João da Serra',
    },
    {
        estadoid: 'PI',
        value: 'São João da Varjota',
        label: 'São João da Varjota',
    },
    {
        estadoid: 'PI',
        value: 'São João do Arraial',
        label: 'São João do Arraial',
    },
    {
        estadoid: 'PI',
        value: 'São João do Piauí',
        label: 'São João do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São José do Divino',
        label: 'São José do Divino',
    },
    {
        estadoid: 'PI',
        value: 'São José do Peixe',
        label: 'São José do Peixe',
    },
    {
        estadoid: 'PI',
        value: 'São José do Piauí',
        label: 'São José do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Julião',
        label: 'São Julião',
    },
    {
        estadoid: 'PI',
        value: 'São Lourenço do Piauí',
        label: 'São Lourenço do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Luis do Piauí',
        label: 'São Luis do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Miguel da Baixa Grande',
        label: 'São Miguel da Baixa Grande',
    },
    {
        estadoid: 'PI',
        value: 'São Miguel do Fidalgo',
        label: 'São Miguel do Fidalgo',
    },
    {
        estadoid: 'PI',
        value: 'São Miguel do Tapuio',
        label: 'São Miguel do Tapuio',
    },
    {
        estadoid: 'PI',
        value: 'São Pedro do Piauí',
        label: 'São Pedro do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'São Raimundo Nonato',
        label: 'São Raimundo Nonato',
    },
    {
        estadoid: 'PI',
        value: 'Sebastião Barros',
        label: 'Sebastião Barros',
    },
    {
        estadoid: 'PI',
        value: 'Sebastião Leal',
        label: 'Sebastião Leal',
    },
    {
        estadoid: 'PI',
        value: 'Sigefredo Pacheco',
        label: 'Sigefredo Pacheco',
    },
    {
        estadoid: 'PI',
        value: 'Simões',
        label: 'Simões',
    },
    {
        estadoid: 'PI',
        value: 'Simplício Mendes',
        label: 'Simplício Mendes',
    },
    {
        estadoid: 'PI',
        value: 'Socorro do Piauí',
        label: 'Socorro do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Sussuapara',
        label: 'Sussuapara',
    },
    {
        estadoid: 'PI',
        value: 'Tamboril do Piauí',
        label: 'Tamboril do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Tanque do Piauí',
        label: 'Tanque do Piauí',
    },
    {
        estadoid: 'PI',
        label: 'Teresina',
        value: 'Teresina',
    },
    {
        estadoid: 'PI',
        value: 'União',
        label: 'União',
    },
    {
        estadoid: 'PI',
        value: 'Uruçuí',
        label: 'Uruçuí',
    },
    {
        estadoid: 'PI',
        value: 'Valença do Piauí',
        label: 'Valença do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Várzea Branca',
        label: 'Várzea Branca',
    },
    {
        estadoid: 'PI',
        value: 'Várzea Grande',
        label: 'Várzea Grande',
    },
    {
        estadoid: 'PI',
        value: 'Vera Mendes',
        label: 'Vera Mendes',
    },
    {
        estadoid: 'PI',
        value: 'Vila Nova do Piauí',
        label: 'Vila Nova do Piauí',
    },
    {
        estadoid: 'PI',
        value: 'Wall Ferraz',
        label: 'Wall Ferraz',
    },
    {
        estadoid: 'PR',
        value: 'Abatiá',
        label: 'Abatiá',
    },
    {
        estadoid: 'PR',
        value: 'Adrianópolis',
        label: 'Adrianópolis',
    },
    {
        estadoid: 'PR',
        value: 'Agudos do Sul',
        label: 'Agudos do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Almirante Tamandaré',
        label: 'Almirante Tamandaré',
    },
    {
        estadoid: 'PR',
        value: 'Altamira do Paraná',
        label: 'Altamira do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'Alto Paraná',
        label: 'Alto Paraná',
    },
    {
        estadoid: 'PR',
        value: 'Alto Piquiri',
        label: 'Alto Piquiri',
    },
    {
        estadoid: 'PR',
        value: 'Altônia',
        label: 'Altônia',
    },
    {
        estadoid: 'PR',
        value: 'Alvorada do Sul',
        label: 'Alvorada do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Amaporã',
        label: 'Amaporã',
    },
    {
        estadoid: 'PR',
        value: 'Ampére',
        label: 'Ampére',
    },
    {
        estadoid: 'PR',
        value: 'Anahy',
        label: 'Anahy',
    },
    {
        estadoid: 'PR',
        value: 'Andirá',
        label: 'Andirá',
    },
    {
        estadoid: 'PR',
        value: 'Ângulo',
        label: 'Ângulo',
    },
    {
        estadoid: 'PR',
        value: 'Antonina',
        label: 'Antonina',
    },
    {
        estadoid: 'PR',
        value: 'Antônio Olinto',
        label: 'Antônio Olinto',
    },
    {
        estadoid: 'PR',
        value: 'Apucarana',
        label: 'Apucarana',
    },
    {
        estadoid: 'PR',
        value: 'Arapongas',
        label: 'Arapongas',
    },
    {
        estadoid: 'PR',
        value: 'Arapoti',
        label: 'Arapoti',
    },
    {
        estadoid: 'PR',
        value: 'Arapuã',
        label: 'Arapuã',
    },
    {
        estadoid: 'PR',
        value: 'Araruna',
        label: 'Araruna',
    },
    {
        estadoid: 'PR',
        value: 'Araucária',
        label: 'Araucária',
    },
    {
        estadoid: 'PR',
        value: 'Ariranha do Ivaí',
        label: 'Ariranha do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'Assaí',
        label: 'Assaí',
    },
    {
        estadoid: 'PR',
        value: 'Assis Chateaubriand',
        label: 'Assis Chateaubriand',
    },
    {
        estadoid: 'PR',
        value: 'Astorga',
        label: 'Astorga',
    },
    {
        estadoid: 'PR',
        value: 'Atalaia',
        label: 'Atalaia',
    },
    {
        estadoid: 'PR',
        value: 'Balsa Nova',
        label: 'Balsa Nova',
    },
    {
        estadoid: 'PR',
        value: 'Bandeirantes',
        label: 'Bandeirantes',
    },
    {
        estadoid: 'PR',
        value: 'Barbosa Ferraz',
        label: 'Barbosa Ferraz',
    },
    {
        estadoid: 'PR',
        value: 'Barra do Jacaré',
        label: 'Barra do Jacaré',
    },
    {
        estadoid: 'PR',
        value: 'Barracão',
        label: 'Barracão',
    },
    {
        estadoid: 'PR',
        value: 'Bela Vista da Caroba',
        label: 'Bela Vista da Caroba',
    },
    {
        estadoid: 'PR',
        value: 'Bela Vista do Paraíso',
        label: 'Bela Vista do Paraíso',
    },
    {
        estadoid: 'PR',
        value: 'Bituruna',
        label: 'Bituruna',
    },
    {
        estadoid: 'PR',
        value: 'Boa Esperança',
        label: 'Boa Esperança',
    },
    {
        estadoid: 'PR',
        value: 'Boa Esperança do Iguaçu',
        label: 'Boa Esperança do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Boa Ventura de São Roque',
        label: 'Boa Ventura de São Roque',
    },
    {
        estadoid: 'PR',
        value: 'Boa Vista da Aparecida',
        label: 'Boa Vista da Aparecida',
    },
    {
        estadoid: 'PR',
        value: 'Bocaiúva do Sul',
        label: 'Bocaiúva do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Bom Jesus do Sul',
        label: 'Bom Jesus do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Bom Sucesso',
        label: 'Bom Sucesso',
    },
    {
        estadoid: 'PR',
        value: 'Bom Sucesso do Sul',
        label: 'Bom Sucesso do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Borrazópolis',
        label: 'Borrazópolis',
    },
    {
        estadoid: 'PR',
        value: 'Braganey',
        label: 'Braganey',
    },
    {
        estadoid: 'PR',
        value: 'Brasilândia do Sul',
        label: 'Brasilândia do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Cafeara',
        label: 'Cafeara',
    },
    {
        estadoid: 'PR',
        value: 'Cafelândia',
        label: 'Cafelândia',
    },
    {
        estadoid: 'PR',
        value: 'Cafezal do Sul',
        label: 'Cafezal do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Califórnia',
        label: 'Califórnia',
    },
    {
        estadoid: 'PR',
        value: 'Cambará',
        label: 'Cambará',
    },
    {
        estadoid: 'PR',
        value: 'Cambé',
        label: 'Cambé',
    },
    {
        estadoid: 'PR',
        value: 'Cambira',
        label: 'Cambira',
    },
    {
        estadoid: 'PR',
        value: 'Campina da Lagoa',
        label: 'Campina da Lagoa',
    },
    {
        estadoid: 'PR',
        value: 'Campina do Simão',
        label: 'Campina do Simão',
    },
    {
        estadoid: 'PR',
        value: 'Campina Grande do Sul',
        label: 'Campina Grande do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Campo Bonito',
        label: 'Campo Bonito',
    },
    {
        estadoid: 'PR',
        value: 'Campo do Tenente',
        label: 'Campo do Tenente',
    },
    {
        estadoid: 'PR',
        value: 'Campo Largo',
        label: 'Campo Largo',
    },
    {
        estadoid: 'PR',
        value: 'Campo Magro',
        label: 'Campo Magro',
    },
    {
        estadoid: 'PR',
        value: 'Campo Mourão',
        label: 'Campo Mourão',
    },
    {
        estadoid: 'PR',
        value: 'Cândido de Abreu',
        label: 'Cândido de Abreu',
    },
    {
        estadoid: 'PR',
        value: 'Candói',
        label: 'Candói',
    },
    {
        estadoid: 'PR',
        value: 'Cantagalo',
        label: 'Cantagalo',
    },
    {
        estadoid: 'PR',
        value: 'Capanema',
        label: 'Capanema',
    },
    {
        estadoid: 'PR',
        value: 'Capitão Leônidas Marques',
        label: 'Capitão Leônidas Marques',
    },
    {
        estadoid: 'PR',
        value: 'Carambeí',
        label: 'Carambeí',
    },
    {
        estadoid: 'PR',
        value: 'Carlópolis',
        label: 'Carlópolis',
    },
    {
        estadoid: 'PR',
        value: 'Cascavel',
        label: 'Cascavel',
    },
    {
        estadoid: 'PR',
        value: 'Castro',
        label: 'Castro',
    },
    {
        estadoid: 'PR',
        value: 'Catanduvas',
        label: 'Catanduvas',
    },
    {
        estadoid: 'PR',
        value: 'Centenário do Sul',
        label: 'Centenário do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Cerro Azul',
        label: 'Cerro Azul',
    },
    {
        estadoid: 'PR',
        value: 'Céu Azul',
        label: 'Céu Azul',
    },
    {
        estadoid: 'PR',
        value: 'Chopinzinho',
        label: 'Chopinzinho',
    },
    {
        estadoid: 'PR',
        value: 'Cianorte',
        label: 'Cianorte',
    },
    {
        estadoid: 'PR',
        value: 'Cidade Gaúcha',
        label: 'Cidade Gaúcha',
    },
    {
        estadoid: 'PR',
        value: 'Clevelândia',
        label: 'Clevelândia',
    },
    {
        estadoid: 'PR',
        value: 'Colombo',
        label: 'Colombo',
    },
    {
        estadoid: 'PR',
        value: 'Colorado',
        label: 'Colorado',
    },
    {
        estadoid: 'PR',
        value: 'Congonhinhas',
        label: 'Congonhinhas',
    },
    {
        estadoid: 'PR',
        value: 'Conselheiro Mairinck',
        label: 'Conselheiro Mairinck',
    },
    {
        estadoid: 'PR',
        value: 'Contenda',
        label: 'Contenda',
    },
    {
        estadoid: 'PR',
        value: 'Corbélia',
        label: 'Corbélia',
    },
    {
        estadoid: 'PR',
        value: 'Cornélio Procópio',
        label: 'Cornélio Procópio',
    },
    {
        estadoid: 'PR',
        value: 'Coronel Domingos Soares',
        label: 'Coronel Domingos Soares',
    },
    {
        estadoid: 'PR',
        value: 'Coronel Vivida',
        label: 'Coronel Vivida',
    },
    {
        estadoid: 'PR',
        value: 'Corumbataí do Sul',
        label: 'Corumbataí do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Cruz Machado',
        label: 'Cruz Machado',
    },
    {
        estadoid: 'PR',
        value: 'Cruzeiro do Iguaçu',
        label: 'Cruzeiro do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Cruzeiro do Oeste',
        label: 'Cruzeiro do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Cruzeiro do Sul',
        label: 'Cruzeiro do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Cruzmaltina',
        label: 'Cruzmaltina',
    },
    {
        estadoid: 'PR',
        label: 'Curitiba',
        value: 'Curitiba',
    },
    {
        estadoid: 'PR',
        value: 'Curiúva',
        label: 'Curiúva',
    },
    {
        estadoid: 'PR',
        value: 'Diamante d\'Oeste',
        label: 'Diamante d\'Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Diamante do Norte',
        label: 'Diamante do Norte',
    },
    {
        estadoid: 'PR',
        value: 'Diamante do Sul',
        label: 'Diamante do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Dois Vizinhos',
        label: 'Dois Vizinhos',
    },
    {
        estadoid: 'PR',
        value: 'Douradina',
        label: 'Douradina',
    },
    {
        estadoid: 'PR',
        value: 'Doutor Camargo',
        label: 'Doutor Camargo',
    },
    {
        estadoid: 'PR',
        value: 'Doutor Ulysses',
        label: 'Doutor Ulysses',
    },
    {
        estadoid: 'PR',
        value: 'Enéas Marques',
        label: 'Enéas Marques',
    },
    {
        estadoid: 'PR',
        value: 'Engenheiro Beltrão',
        label: 'Engenheiro Beltrão',
    },
    {
        estadoid: 'PR',
        value: 'Entre Rios do Oeste',
        label: 'Entre Rios do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Esperança Nova',
        label: 'Esperança Nova',
    },
    {
        estadoid: 'PR',
        value: 'Espigão Alto do Iguaçu',
        label: 'Espigão Alto do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Farol',
        label: 'Farol',
    },
    {
        estadoid: 'PR',
        value: 'Faxinal',
        label: 'Faxinal',
    },
    {
        estadoid: 'PR',
        value: 'Fazenda Rio Grande',
        label: 'Fazenda Rio Grande',
    },
    {
        estadoid: 'PR',
        value: 'Fênix',
        label: 'Fênix',
    },
    {
        estadoid: 'PR',
        value: 'Fernandes Pinheiro',
        label: 'Fernandes Pinheiro',
    },
    {
        estadoid: 'PR',
        value: 'Figueira',
        label: 'Figueira',
    },
    {
        estadoid: 'PR',
        value: 'Flor da Serra do Sul',
        label: 'Flor da Serra do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Floraí',
        label: 'Floraí',
    },
    {
        estadoid: 'PR',
        value: 'Floresta',
        label: 'Floresta',
    },
    {
        estadoid: 'PR',
        value: 'Florestópolis',
        label: 'Florestópolis',
    },
    {
        estadoid: 'PR',
        value: 'Flórida',
        label: 'Flórida',
    },
    {
        estadoid: 'PR',
        value: 'Formosa do Oeste',
        label: 'Formosa do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Foz do Iguaçu',
        label: 'Foz do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Foz do Jordão',
        label: 'Foz do Jordão',
    },
    {
        estadoid: 'PR',
        value: 'Francisco Alves',
        label: 'Francisco Alves',
    },
    {
        estadoid: 'PR',
        value: 'Francisco Beltrão',
        label: 'Francisco Beltrão',
    },
    {
        estadoid: 'PR',
        value: 'General Carneiro',
        label: 'General Carneiro',
    },
    {
        estadoid: 'PR',
        value: 'Godoy Moreira',
        label: 'Godoy Moreira',
    },
    {
        estadoid: 'PR',
        value: 'Goioerê',
        label: 'Goioerê',
    },
    {
        estadoid: 'PR',
        value: 'Goioxim',
        label: 'Goioxim',
    },
    {
        estadoid: 'PR',
        value: 'Grandes Rios',
        label: 'Grandes Rios',
    },
    {
        estadoid: 'PR',
        value: 'Guaíra',
        label: 'Guaíra',
    },
    {
        estadoid: 'PR',
        value: 'Guairaçá',
        label: 'Guairaçá',
    },
    {
        estadoid: 'PR',
        value: 'Guamiranga',
        label: 'Guamiranga',
    },
    {
        estadoid: 'PR',
        value: 'Guapirama',
        label: 'Guapirama',
    },
    {
        estadoid: 'PR',
        value: 'Guaporema',
        label: 'Guaporema',
    },
    {
        estadoid: 'PR',
        value: 'Guaraci',
        label: 'Guaraci',
    },
    {
        estadoid: 'PR',
        value: 'Guaraniaçu',
        label: 'Guaraniaçu',
    },
    {
        estadoid: 'PR',
        value: 'Guarapuava',
        label: 'Guarapuava',
    },
    {
        estadoid: 'PR',
        value: 'Guaraqueçaba',
        label: 'Guaraqueçaba',
    },
    {
        estadoid: 'PR',
        value: 'Guaratuba',
        label: 'Guaratuba',
    },
    {
        estadoid: 'PR',
        value: 'Honório Serpa',
        label: 'Honório Serpa',
    },
    {
        estadoid: 'PR',
        value: 'Ibaiti',
        label: 'Ibaiti',
    },
    {
        estadoid: 'PR',
        value: 'Ibema',
        label: 'Ibema',
    },
    {
        estadoid: 'PR',
        value: 'Ibiporã',
        label: 'Ibiporã',
    },
    {
        estadoid: 'PR',
        value: 'Icaraíma',
        label: 'Icaraíma',
    },
    {
        estadoid: 'PR',
        value: 'Iguaraçu',
        label: 'Iguaraçu',
    },
    {
        estadoid: 'PR',
        value: 'Iguatu',
        label: 'Iguatu',
    },
    {
        estadoid: 'PR',
        value: 'Imbaú',
        label: 'Imbaú',
    },
    {
        estadoid: 'PR',
        value: 'Imbituva',
        label: 'Imbituva',
    },
    {
        estadoid: 'PR',
        value: 'Inácio Martins',
        label: 'Inácio Martins',
    },
    {
        estadoid: 'PR',
        value: 'Inajá',
        label: 'Inajá',
    },
    {
        estadoid: 'PR',
        value: 'Indianópolis',
        label: 'Indianópolis',
    },
    {
        estadoid: 'PR',
        value: 'Ipiranga',
        label: 'Ipiranga',
    },
    {
        estadoid: 'PR',
        value: 'Iporã',
        label: 'Iporã',
    },
    {
        estadoid: 'PR',
        value: 'Iracema do Oeste',
        label: 'Iracema do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Irati',
        label: 'Irati',
    },
    {
        estadoid: 'PR',
        value: 'Iretama',
        label: 'Iretama',
    },
    {
        estadoid: 'PR',
        value: 'Itaguajé',
        label: 'Itaguajé',
    },
    {
        estadoid: 'PR',
        value: 'Itaipulândia',
        label: 'Itaipulândia',
    },
    {
        estadoid: 'PR',
        value: 'Itambaracá',
        label: 'Itambaracá',
    },
    {
        estadoid: 'PR',
        value: 'Itambé',
        label: 'Itambé',
    },
    {
        estadoid: 'PR',
        value: 'Itapejara d\'Oeste',
        label: 'Itapejara d\'Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Itaperuçu',
        label: 'Itaperuçu',
    },
    {
        estadoid: 'PR',
        value: 'Itaúna do Sul',
        label: 'Itaúna do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Ivaí',
        label: 'Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'Ivaiporã',
        label: 'Ivaiporã',
    },
    {
        estadoid: 'PR',
        value: 'Ivaté',
        label: 'Ivaté',
    },
    {
        estadoid: 'PR',
        value: 'Ivatuba',
        label: 'Ivatuba',
    },
    {
        estadoid: 'PR',
        value: 'Jaboti',
        label: 'Jaboti',
    },
    {
        estadoid: 'PR',
        value: 'Jacarezinho',
        label: 'Jacarezinho',
    },
    {
        estadoid: 'PR',
        value: 'Jaguapitã',
        label: 'Jaguapitã',
    },
    {
        estadoid: 'PR',
        value: 'Jaguariaíva',
        label: 'Jaguariaíva',
    },
    {
        estadoid: 'PR',
        value: 'Jandaia do Sul',
        label: 'Jandaia do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Janiópolis',
        label: 'Janiópolis',
    },
    {
        estadoid: 'PR',
        value: 'Japira',
        label: 'Japira',
    },
    {
        estadoid: 'PR',
        value: 'Japurá',
        label: 'Japurá',
    },
    {
        estadoid: 'PR',
        value: 'Jardim Alegre',
        label: 'Jardim Alegre',
    },
    {
        estadoid: 'PR',
        value: 'Jardim Olinda',
        label: 'Jardim Olinda',
    },
    {
        estadoid: 'PR',
        value: 'Jataizinho',
        label: 'Jataizinho',
    },
    {
        estadoid: 'PR',
        value: 'Jesuítas',
        label: 'Jesuítas',
    },
    {
        estadoid: 'PR',
        value: 'Joaquim Távora',
        label: 'Joaquim Távora',
    },
    {
        estadoid: 'PR',
        value: 'Jundiaí do Sul',
        label: 'Jundiaí do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Juranda',
        label: 'Juranda',
    },
    {
        estadoid: 'PR',
        value: 'Jussara',
        label: 'Jussara',
    },
    {
        estadoid: 'PR',
        value: 'Kaloré',
        label: 'Kaloré',
    },
    {
        estadoid: 'PR',
        value: 'Lapa',
        label: 'Lapa',
    },
    {
        estadoid: 'PR',
        value: 'Laranjal',
        label: 'Laranjal',
    },
    {
        estadoid: 'PR',
        value: 'Laranjeiras do Sul',
        label: 'Laranjeiras do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Leópolis',
        label: 'Leópolis',
    },
    {
        estadoid: 'PR',
        value: 'Lidianópolis',
        label: 'Lidianópolis',
    },
    {
        estadoid: 'PR',
        value: 'Lindoeste',
        label: 'Lindoeste',
    },
    {
        estadoid: 'PR',
        value: 'Loanda',
        label: 'Loanda',
    },
    {
        estadoid: 'PR',
        value: 'Lobato',
        label: 'Lobato',
    },
    {
        estadoid: 'PR',
        value: 'Londrina',
        label: 'Londrina',
    },
    {
        estadoid: 'PR',
        value: 'Luiziana',
        label: 'Luiziana',
    },
    {
        estadoid: 'PR',
        value: 'Lunardelli',
        label: 'Lunardelli',
    },
    {
        estadoid: 'PR',
        value: 'Lupionópolis',
        label: 'Lupionópolis',
    },
    {
        estadoid: 'PR',
        value: 'Mallet',
        label: 'Mallet',
    },
    {
        estadoid: 'PR',
        value: 'Mamborê',
        label: 'Mamborê',
    },
    {
        estadoid: 'PR',
        value: 'Mandaguaçu',
        label: 'Mandaguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Mandaguari',
        label: 'Mandaguari',
    },
    {
        estadoid: 'PR',
        value: 'Mandirituba',
        label: 'Mandirituba',
    },
    {
        estadoid: 'PR',
        value: 'Manfrinópolis',
        label: 'Manfrinópolis',
    },
    {
        estadoid: 'PR',
        value: 'Mangueirinha',
        label: 'Mangueirinha',
    },
    {
        estadoid: 'PR',
        value: 'Manoel Ribas',
        label: 'Manoel Ribas',
    },
    {
        estadoid: 'PR',
        value: 'Marechal Cândido Rondon',
        label: 'Marechal Cândido Rondon',
    },
    {
        estadoid: 'PR',
        value: 'Maria Helena',
        label: 'Maria Helena',
    },
    {
        estadoid: 'PR',
        value: 'Marialva',
        label: 'Marialva',
    },
    {
        estadoid: 'PR',
        value: 'Marilândia do Sul',
        label: 'Marilândia do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Marilena',
        label: 'Marilena',
    },
    {
        estadoid: 'PR',
        value: 'Mariluz',
        label: 'Mariluz',
    },
    {
        estadoid: 'PR',
        value: 'Maringá',
        label: 'Maringá',
    },
    {
        estadoid: 'PR',
        value: 'Mariópolis',
        label: 'Mariópolis',
    },
    {
        estadoid: 'PR',
        value: 'Maripá',
        label: 'Maripá',
    },
    {
        estadoid: 'PR',
        value: 'Marmeleiro',
        label: 'Marmeleiro',
    },
    {
        estadoid: 'PR',
        value: 'Marquinho',
        label: 'Marquinho',
    },
    {
        estadoid: 'PR',
        value: 'Marumbi',
        label: 'Marumbi',
    },
    {
        estadoid: 'PR',
        value: 'Matelândia',
        label: 'Matelândia',
    },
    {
        estadoid: 'PR',
        value: 'Matinhos',
        label: 'Matinhos',
    },
    {
        estadoid: 'PR',
        value: 'Mato Rico',
        label: 'Mato Rico',
    },
    {
        estadoid: 'PR',
        value: 'Mauá da Serra',
        label: 'Mauá da Serra',
    },
    {
        estadoid: 'PR',
        value: 'Medianeira',
        label: 'Medianeira',
    },
    {
        estadoid: 'PR',
        value: 'Mercedes',
        label: 'Mercedes',
    },
    {
        estadoid: 'PR',
        value: 'Mirador',
        label: 'Mirador',
    },
    {
        estadoid: 'PR',
        value: 'Miraselva',
        label: 'Miraselva',
    },
    {
        estadoid: 'PR',
        value: 'Missal',
        label: 'Missal',
    },
    {
        estadoid: 'PR',
        value: 'Moreira Sales',
        label: 'Moreira Sales',
    },
    {
        estadoid: 'PR',
        value: 'Morretes',
        label: 'Morretes',
    },
    {
        estadoid: 'PR',
        value: 'Munhoz de Melo',
        label: 'Munhoz de Melo',
    },
    {
        estadoid: 'PR',
        value: 'Nossa Senhora das Graças',
        label: 'Nossa Senhora das Graças',
    },
    {
        estadoid: 'PR',
        value: 'Nova Aliança do Ivaí',
        label: 'Nova Aliança do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'Nova América da Colina',
        label: 'Nova América da Colina',
    },
    {
        estadoid: 'PR',
        value: 'Nova Aurora',
        label: 'Nova Aurora',
    },
    {
        estadoid: 'PR',
        value: 'Nova Cantu',
        label: 'Nova Cantu',
    },
    {
        estadoid: 'PR',
        value: 'Nova Esperança',
        label: 'Nova Esperança',
    },
    {
        estadoid: 'PR',
        value: 'Nova Esperança do Sudoeste',
        label: 'Nova Esperança do Sudoeste',
    },
    {
        estadoid: 'PR',
        value: 'Nova Fátima',
        label: 'Nova Fátima',
    },
    {
        estadoid: 'PR',
        value: 'Nova Laranjeiras',
        label: 'Nova Laranjeiras',
    },
    {
        estadoid: 'PR',
        value: 'Nova Londrina',
        label: 'Nova Londrina',
    },
    {
        estadoid: 'PR',
        value: 'Nova Olímpia',
        label: 'Nova Olímpia',
    },
    {
        estadoid: 'PR',
        value: 'Nova Prata do Iguaçu',
        label: 'Nova Prata do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Nova Santa Bárbara',
        label: 'Nova Santa Bárbara',
    },
    {
        estadoid: 'PR',
        value: 'Nova Santa Rosa',
        label: 'Nova Santa Rosa',
    },
    {
        estadoid: 'PR',
        value: 'Nova Tebas',
        label: 'Nova Tebas',
    },
    {
        estadoid: 'PR',
        value: 'Novo Itacolomi',
        label: 'Novo Itacolomi',
    },
    {
        estadoid: 'PR',
        value: 'Ortigueira',
        label: 'Ortigueira',
    },
    {
        estadoid: 'PR',
        value: 'Ourizona',
        label: 'Ourizona',
    },
    {
        estadoid: 'PR',
        value: 'Ouro Verde do Oeste',
        label: 'Ouro Verde do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Paiçandu',
        label: 'Paiçandu',
    },
    {
        estadoid: 'PR',
        value: 'Palmas',
        label: 'Palmas',
    },
    {
        estadoid: 'PR',
        value: 'Palmeira',
        label: 'Palmeira',
    },
    {
        estadoid: 'PR',
        value: 'Palmital',
        label: 'Palmital',
    },
    {
        estadoid: 'PR',
        value: 'Palotina',
        label: 'Palotina',
    },
    {
        estadoid: 'PR',
        value: 'Paraíso do Norte',
        label: 'Paraíso do Norte',
    },
    {
        estadoid: 'PR',
        value: 'Paranacity',
        label: 'Paranacity',
    },
    {
        estadoid: 'PR',
        value: 'Paranaguá',
        label: 'Paranaguá',
    },
    {
        estadoid: 'PR',
        value: 'Paranapoema',
        label: 'Paranapoema',
    },
    {
        estadoid: 'PR',
        value: 'Paranavaí',
        label: 'Paranavaí',
    },
    {
        estadoid: 'PR',
        value: 'Pato Bragado',
        label: 'Pato Bragado',
    },
    {
        estadoid: 'PR',
        value: 'Pato Branco',
        label: 'Pato Branco',
    },
    {
        estadoid: 'PR',
        value: 'Paula Freitas',
        label: 'Paula Freitas',
    },
    {
        estadoid: 'PR',
        value: 'Paulo Frontin',
        label: 'Paulo Frontin',
    },
    {
        estadoid: 'PR',
        value: 'Peabiru',
        label: 'Peabiru',
    },
    {
        estadoid: 'PR',
        value: 'Perobal',
        label: 'Perobal',
    },
    {
        estadoid: 'PR',
        value: 'Pérola',
        label: 'Pérola',
    },
    {
        estadoid: 'PR',
        value: 'Pérola d\'Oeste',
        label: 'Pérola d\'Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Piên',
        label: 'Piên',
    },
    {
        estadoid: 'PR',
        value: 'Pinhais',
        label: 'Pinhais',
    },
    {
        estadoid: 'PR',
        value: 'Pinhal de São Bento',
        label: 'Pinhal de São Bento',
    },
    {
        estadoid: 'PR',
        value: 'Pinhalão',
        label: 'Pinhalão',
    },
    {
        estadoid: 'PR',
        value: 'Pinhão',
        label: 'Pinhão',
    },
    {
        estadoid: 'PR',
        value: 'Piraí do Sul',
        label: 'Piraí do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Piraquara',
        label: 'Piraquara',
    },
    {
        estadoid: 'PR',
        value: 'Pitanga',
        label: 'Pitanga',
    },
    {
        estadoid: 'PR',
        value: 'Pitangueiras',
        label: 'Pitangueiras',
    },
    {
        estadoid: 'PR',
        value: 'Planaltina do Paraná',
        label: 'Planaltina do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'Planalto',
        label: 'Planalto',
    },
    {
        estadoid: 'PR',
        value: 'Ponta Grossa',
        label: 'Ponta Grossa',
    },
    {
        estadoid: 'PR',
        value: 'Pontal do Paraná',
        label: 'Pontal do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'Porecatu',
        label: 'Porecatu',
    },
    {
        estadoid: 'PR',
        value: 'Porto Amazonas',
        label: 'Porto Amazonas',
    },
    {
        estadoid: 'PR',
        value: 'Porto Barreiro',
        label: 'Porto Barreiro',
    },
    {
        estadoid: 'PR',
        value: 'Porto Rico',
        label: 'Porto Rico',
    },
    {
        estadoid: 'PR',
        value: 'Porto Vitória',
        label: 'Porto Vitória',
    },
    {
        estadoid: 'PR',
        value: 'Prado Ferreira',
        label: 'Prado Ferreira',
    },
    {
        estadoid: 'PR',
        value: 'Pranchita',
        label: 'Pranchita',
    },
    {
        estadoid: 'PR',
        value: 'Presidente Castelo Branco',
        label: 'Presidente Castelo Branco',
    },
    {
        estadoid: 'PR',
        value: 'Primeiro de Maio',
        label: 'Primeiro de Maio',
    },
    {
        estadoid: 'PR',
        value: 'Prudentópolis',
        label: 'Prudentópolis',
    },
    {
        estadoid: 'PR',
        value: 'Quarto Centenário',
        label: 'Quarto Centenário',
    },
    {
        estadoid: 'PR',
        value: 'Quatiguá',
        label: 'Quatiguá',
    },
    {
        estadoid: 'PR',
        value: 'Quatro Barras',
        label: 'Quatro Barras',
    },
    {
        estadoid: 'PR',
        value: 'Quatro Pontes',
        label: 'Quatro Pontes',
    },
    {
        estadoid: 'PR',
        value: 'Quedas do Iguaçu',
        label: 'Quedas do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Querência do Norte',
        label: 'Querência do Norte',
    },
    {
        estadoid: 'PR',
        value: 'Quinta do Sol',
        label: 'Quinta do Sol',
    },
    {
        estadoid: 'PR',
        value: 'Quitandinha',
        label: 'Quitandinha',
    },
    {
        estadoid: 'PR',
        value: 'Ramilândia',
        label: 'Ramilândia',
    },
    {
        estadoid: 'PR',
        value: 'Rancho Alegre',
        label: 'Rancho Alegre',
    },
    {
        estadoid: 'PR',
        value: 'Rancho Alegre d\'Oeste',
        label: 'Rancho Alegre d\'Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Realeza',
        label: 'Realeza',
    },
    {
        estadoid: 'PR',
        value: 'Rebouças',
        label: 'Rebouças',
    },
    {
        estadoid: 'PR',
        value: 'Renascença',
        label: 'Renascença',
    },
    {
        estadoid: 'PR',
        value: 'Reserva',
        label: 'Reserva',
    },
    {
        estadoid: 'PR',
        value: 'Reserva do Iguaçu',
        label: 'Reserva do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Ribeirão Claro',
        label: 'Ribeirão Claro',
    },
    {
        estadoid: 'PR',
        value: 'Ribeirão do Pinhal',
        label: 'Ribeirão do Pinhal',
    },
    {
        estadoid: 'PR',
        value: 'Rio Azul',
        label: 'Rio Azul',
    },
    {
        estadoid: 'PR',
        value: 'Rio Bom',
        label: 'Rio Bom',
    },
    {
        estadoid: 'PR',
        value: 'Rio Bonito do Iguaçu',
        label: 'Rio Bonito do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Rio Branco do Ivaí',
        label: 'Rio Branco do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'Rio Branco do Sul',
        label: 'Rio Branco do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Rio Negro',
        label: 'Rio Negro',
    },
    {
        estadoid: 'PR',
        value: 'Rolândia',
        label: 'Rolândia',
    },
    {
        estadoid: 'PR',
        value: 'Roncador',
        label: 'Roncador',
    },
    {
        estadoid: 'PR',
        value: 'Rondon',
        label: 'Rondon',
    },
    {
        estadoid: 'PR',
        value: 'Rosário do Ivaí',
        label: 'Rosário do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'Sabáudia',
        label: 'Sabáudia',
    },
    {
        estadoid: 'PR',
        value: 'Salgado Filho',
        label: 'Salgado Filho',
    },
    {
        estadoid: 'PR',
        value: 'Salto do Itararé',
        label: 'Salto do Itararé',
    },
    {
        estadoid: 'PR',
        value: 'Salto do Lontra',
        label: 'Salto do Lontra',
    },
    {
        estadoid: 'PR',
        value: 'Santa Amélia',
        label: 'Santa Amélia',
    },
    {
        estadoid: 'PR',
        value: 'Santa Cecília do Pavão',
        label: 'Santa Cecília do Pavão',
    },
    {
        estadoid: 'PR',
        value: 'Santa Cruz Monte Castelo',
        label: 'Santa Cruz Monte Castelo',
    },
    {
        estadoid: 'PR',
        value: 'Santa Fé',
        label: 'Santa Fé',
    },
    {
        estadoid: 'PR',
        value: 'Santa Helena',
        label: 'Santa Helena',
    },
    {
        estadoid: 'PR',
        value: 'Santa Inês',
        label: 'Santa Inês',
    },
    {
        estadoid: 'PR',
        value: 'Santa Isabel do Ivaí',
        label: 'Santa Isabel do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'Santa Izabel do Oeste',
        label: 'Santa Izabel do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Santa Lúcia',
        label: 'Santa Lúcia',
    },
    {
        estadoid: 'PR',
        value: 'Santa Maria do Oeste',
        label: 'Santa Maria do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Santa Mariana',
        label: 'Santa Mariana',
    },
    {
        estadoid: 'PR',
        value: 'Santa Mônica',
        label: 'Santa Mônica',
    },
    {
        estadoid: 'PR',
        value: 'Santa Tereza do Oeste',
        label: 'Santa Tereza do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Santa Terezinha de Itaipu',
        label: 'Santa Terezinha de Itaipu',
    },
    {
        estadoid: 'PR',
        value: 'Santana do Itararé',
        label: 'Santana do Itararé',
    },
    {
        estadoid: 'PR',
        value: 'Santo Antônio da Platina',
        label: 'Santo Antônio da Platina',
    },
    {
        estadoid: 'PR',
        value: 'Santo Antônio do Caiuá',
        label: 'Santo Antônio do Caiuá',
    },
    {
        estadoid: 'PR',
        value: 'Santo Antônio do Paraíso',
        label: 'Santo Antônio do Paraíso',
    },
    {
        estadoid: 'PR',
        value: 'Santo Antônio do Sudoeste',
        label: 'Santo Antônio do Sudoeste',
    },
    {
        estadoid: 'PR',
        value: 'Santo Inácio',
        label: 'Santo Inácio',
    },
    {
        estadoid: 'PR',
        value: 'São Carlos do Ivaí',
        label: 'São Carlos do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'São Jerônimo da Serra',
        label: 'São Jerônimo da Serra',
    },
    {
        estadoid: 'PR',
        value: 'São João',
        label: 'São João',
    },
    {
        estadoid: 'PR',
        value: 'São João do Caiuá',
        label: 'São João do Caiuá',
    },
    {
        estadoid: 'PR',
        value: 'São João do Ivaí',
        label: 'São João do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'São João do Triunfo',
        label: 'São João do Triunfo',
    },
    {
        estadoid: 'PR',
        value: 'São Jorge d\'Oeste',
        label: 'São Jorge d\'Oeste',
    },
    {
        estadoid: 'PR',
        value: 'São Jorge do Ivaí',
        label: 'São Jorge do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'São Jorge do Patrocínio',
        label: 'São Jorge do Patrocínio',
    },
    {
        estadoid: 'PR',
        value: 'São José da Boa Vista',
        label: 'São José da Boa Vista',
    },
    {
        estadoid: 'PR',
        value: 'São José das Palmeiras',
        label: 'São José das Palmeiras',
    },
    {
        estadoid: 'PR',
        value: 'São José dos Pinhais',
        label: 'São José dos Pinhais',
    },
    {
        estadoid: 'PR',
        value: 'São Manoel do Paraná',
        label: 'São Manoel do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'São Mateus do Sul',
        label: 'São Mateus do Sul',
    },
    {
        estadoid: 'PR',
        value: 'São Miguel do Iguaçu',
        label: 'São Miguel do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'São Pedro do Iguaçu',
        label: 'São Pedro do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'São Pedro do Ivaí',
        label: 'São Pedro do Ivaí',
    },
    {
        estadoid: 'PR',
        value: 'São Pedro do Paraná',
        label: 'São Pedro do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'São Sebastião da Amoreira',
        label: 'São Sebastião da Amoreira',
    },
    {
        estadoid: 'PR',
        value: 'São Tomé',
        label: 'São Tomé',
    },
    {
        estadoid: 'PR',
        value: 'Sapopema',
        label: 'Sapopema',
    },
    {
        estadoid: 'PR',
        value: 'Sarandi',
        label: 'Sarandi',
    },
    {
        estadoid: 'PR',
        value: 'Saudade do Iguaçu',
        label: 'Saudade do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Sengés',
        label: 'Sengés',
    },
    {
        estadoid: 'PR',
        value: 'Serranópolis do Iguaçu',
        label: 'Serranópolis do Iguaçu',
    },
    {
        estadoid: 'PR',
        value: 'Sertaneja',
        label: 'Sertaneja',
    },
    {
        estadoid: 'PR',
        value: 'Sertanópolis',
        label: 'Sertanópolis',
    },
    {
        estadoid: 'PR',
        value: 'Siqueira Campos',
        label: 'Siqueira Campos',
    },
    {
        estadoid: 'PR',
        value: 'Sulina',
        label: 'Sulina',
    },
    {
        estadoid: 'PR',
        value: 'Tamarana',
        label: 'Tamarana',
    },
    {
        estadoid: 'PR',
        value: 'Tamboara',
        label: 'Tamboara',
    },
    {
        estadoid: 'PR',
        value: 'Tapejara',
        label: 'Tapejara',
    },
    {
        estadoid: 'PR',
        value: 'Tapira',
        label: 'Tapira',
    },
    {
        estadoid: 'PR',
        value: 'Teixeira Soares',
        label: 'Teixeira Soares',
    },
    {
        estadoid: 'PR',
        value: 'Telêmaco Borba',
        label: 'Telêmaco Borba',
    },
    {
        estadoid: 'PR',
        value: 'Terra Boa',
        label: 'Terra Boa',
    },
    {
        estadoid: 'PR',
        value: 'Terra Rica',
        label: 'Terra Rica',
    },
    {
        estadoid: 'PR',
        value: 'Terra Roxa',
        label: 'Terra Roxa',
    },
    {
        estadoid: 'PR',
        value: 'Tibagi',
        label: 'Tibagi',
    },
    {
        estadoid: 'PR',
        value: 'Tijucas do Sul',
        label: 'Tijucas do Sul',
    },
    {
        estadoid: 'PR',
        value: 'Toledo',
        label: 'Toledo',
    },
    {
        estadoid: 'PR',
        value: 'Tomazina',
        label: 'Tomazina',
    },
    {
        estadoid: 'PR',
        value: 'Três Barras do Paraná',
        label: 'Três Barras do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'Tunas do Paraná',
        label: 'Tunas do Paraná',
    },
    {
        estadoid: 'PR',
        value: 'Tuneiras do Oeste',
        label: 'Tuneiras do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Tupãssi',
        label: 'Tupãssi',
    },
    {
        estadoid: 'PR',
        value: 'Turvo',
        label: 'Turvo',
    },
    {
        estadoid: 'PR',
        value: 'Ubiratã',
        label: 'Ubiratã',
    },
    {
        estadoid: 'PR',
        value: 'Umuarama',
        label: 'Umuarama',
    },
    {
        estadoid: 'PR',
        value: 'União da Vitória',
        label: 'União da Vitória',
    },
    {
        estadoid: 'PR',
        value: 'Uniflor',
        label: 'Uniflor',
    },
    {
        estadoid: 'PR',
        value: 'Uraí',
        label: 'Uraí',
    },
    {
        estadoid: 'PR',
        value: 'Ventania',
        label: 'Ventania',
    },
    {
        estadoid: 'PR',
        value: 'Vera Cruz do Oeste',
        label: 'Vera Cruz do Oeste',
    },
    {
        estadoid: 'PR',
        value: 'Verê',
        label: 'Verê',
    },
    {
        estadoid: 'PR',
        value: 'Vila Alta',
        label: 'Vila Alta',
    },
    {
        estadoid: 'PR',
        value: 'Virmond',
        label: 'Virmond',
    },
    {
        estadoid: 'PR',
        value: 'Vitorino',
        label: 'Vitorino',
    },
    {
        estadoid: 'PR',
        value: 'Wenceslau Braz',
        label: 'Wenceslau Braz',
    },
    {
        estadoid: 'PR',
        value: 'Xambrê',
        label: 'Xambrê',
    },
    {
        estadoid: 'RJ',
        value: 'Angra dos Reis',
        label: 'Angra dos Reis',
    },
    {
        estadoid: 'RJ',
        value: 'Aperibé',
        label: 'Aperibé',
    },
    {
        estadoid: 'RJ',
        value: 'Araruama',
        label: 'Araruama',
    },
    {
        estadoid: 'RJ',
        value: 'Areal',
        label: 'Areal',
    },
    {
        estadoid: 'RJ',
        value: 'Armação de Búzios',
        label: 'Armação de Búzios',
    },
    {
        estadoid: 'RJ',
        value: 'Arraial do Cabo',
        label: 'Arraial do Cabo',
    },
    {
        estadoid: 'RJ',
        value: 'Barra do Piraí',
        label: 'Barra do Piraí',
    },
    {
        estadoid: 'RJ',
        value: 'Barra Mansa',
        label: 'Barra Mansa',
    },
    {
        estadoid: 'RJ',
        value: 'Belford Roxo',
        label: 'Belford Roxo',
    },
    {
        estadoid: 'RJ',
        value: 'Bom Jardim',
        label: 'Bom Jardim',
    },
    {
        estadoid: 'RJ',
        value: 'Bom Jesus do Itabapoana',
        label: 'Bom Jesus do Itabapoana',
    },
    {
        estadoid: 'RJ',
        value: 'Cabo Frio',
        label: 'Cabo Frio',
    },
    {
        estadoid: 'RJ',
        value: 'Cachoeiras de Macacu',
        label: 'Cachoeiras de Macacu',
    },
    {
        estadoid: 'RJ',
        value: 'Cambuci',
        label: 'Cambuci',
    },
    {
        estadoid: 'RJ',
        value: 'Campos dos Goytacazes',
        label: 'Campos dos Goytacazes',
    },
    {
        estadoid: 'RJ',
        value: 'Cantagalo',
        label: 'Cantagalo',
    },
    {
        estadoid: 'RJ',
        value: 'Carapebus',
        label: 'Carapebus',
    },
    {
        estadoid: 'RJ',
        value: 'Cardoso Moreira',
        label: 'Cardoso Moreira',
    },
    {
        estadoid: 'RJ',
        value: 'Carmo',
        label: 'Carmo',
    },
    {
        estadoid: 'RJ',
        value: 'Casimiro de Abreu',
        label: 'Casimiro de Abreu',
    },
    {
        estadoid: 'RJ',
        value: 'Comendador Levy Gasparian',
        label: 'Comendador Levy Gasparian',
    },
    {
        estadoid: 'RJ',
        value: 'Conceição de Macabu',
        label: 'Conceição de Macabu',
    },
    {
        estadoid: 'RJ',
        value: 'Cordeiro',
        label: 'Cordeiro',
    },
    {
        estadoid: 'RJ',
        value: 'Duas Barras',
        label: 'Duas Barras',
    },
    {
        estadoid: 'RJ',
        value: 'Duque de Caxias',
        label: 'Duque de Caxias',
    },
    {
        estadoid: 'RJ',
        value: 'Engenheiro Paulo de Frontin',
        label: 'Engenheiro Paulo de Frontin',
    },
    {
        estadoid: 'RJ',
        value: 'Guapimirim',
        label: 'Guapimirim',
    },
    {
        estadoid: 'RJ',
        value: 'Iguaba Grande',
        label: 'Iguaba Grande',
    },
    {
        estadoid: 'RJ',
        value: 'Itaboraí',
        label: 'Itaboraí',
    },
    {
        estadoid: 'RJ',
        value: 'Itaguaí',
        label: 'Itaguaí',
    },
    {
        estadoid: 'RJ',
        value: 'Italva',
        label: 'Italva',
    },
    {
        estadoid: 'RJ',
        value: 'Itaocara',
        label: 'Itaocara',
    },
    {
        estadoid: 'RJ',
        value: 'Itaperuna',
        label: 'Itaperuna',
    },
    {
        estadoid: 'RJ',
        value: 'Itatiaia',
        label: 'Itatiaia',
    },
    {
        estadoid: 'RJ',
        value: 'Japeri',
        label: 'Japeri',
    },
    {
        estadoid: 'RJ',
        value: 'Laje do Muriaé',
        label: 'Laje do Muriaé',
    },
    {
        estadoid: 'RJ',
        value: 'Macaé',
        label: 'Macaé',
    },
    {
        estadoid: 'RJ',
        value: 'Macuco',
        label: 'Macuco',
    },
    {
        estadoid: 'RJ',
        value: 'Magé',
        label: 'Magé',
    },
    {
        estadoid: 'RJ',
        value: 'Mangaratiba',
        label: 'Mangaratiba',
    },
    {
        estadoid: 'RJ',
        value: 'Maricá',
        label: 'Maricá',
    },
    {
        estadoid: 'RJ',
        value: 'Mendes',
        label: 'Mendes',
    },
    {
        estadoid: 'RJ',
        value: 'Mesquita',
        label: 'Mesquita',
    },
    {
        estadoid: 'RJ',
        value: 'Miguel Pereira',
        label: 'Miguel Pereira',
    },
    {
        estadoid: 'RJ',
        value: 'Miracema',
        label: 'Miracema',
    },
    {
        estadoid: 'RJ',
        value: 'Natividade',
        label: 'Natividade',
    },
    {
        estadoid: 'RJ',
        value: 'Nilópolis',
        label: 'Nilópolis',
    },
    {
        estadoid: 'RJ',
        value: 'Niterói',
        label: 'Niterói',
    },
    {
        estadoid: 'RJ',
        value: 'Nova Friburgo',
        label: 'Nova Friburgo',
    },
    {
        estadoid: 'RJ',
        value: 'Nova Iguaçu',
        label: 'Nova Iguaçu',
    },
    {
        estadoid: 'RJ',
        value: 'Paracambi',
        label: 'Paracambi',
    },
    {
        estadoid: 'RJ',
        value: 'Paraíba do Sul',
        label: 'Paraíba do Sul',
    },
    {
        estadoid: 'RJ',
        value: 'Parati',
        label: 'Parati',
    },
    {
        estadoid: 'RJ',
        value: 'Paty do Alferes',
        label: 'Paty do Alferes',
    },
    {
        estadoid: 'RJ',
        value: 'Petrópolis',
        label: 'Petrópolis',
    },
    {
        estadoid: 'RJ',
        value: 'Pinheiral',
        label: 'Pinheiral',
    },
    {
        estadoid: 'RJ',
        value: 'Piraí',
        label: 'Piraí',
    },
    {
        estadoid: 'RJ',
        value: 'Porciúncula',
        label: 'Porciúncula',
    },
    {
        estadoid: 'RJ',
        value: 'Porto Real',
        label: 'Porto Real',
    },
    {
        estadoid: 'RJ',
        value: 'Quatis',
        label: 'Quatis',
    },
    {
        estadoid: 'RJ',
        value: 'Queimados',
        label: 'Queimados',
    },
    {
        estadoid: 'RJ',
        value: 'Quissamã',
        label: 'Quissamã',
    },
    {
        estadoid: 'RJ',
        value: 'Resende',
        label: 'Resende',
    },
    {
        estadoid: 'RJ',
        value: 'Rio Bonito',
        label: 'Rio Bonito',
    },
    {
        estadoid: 'RJ',
        value: 'Rio Claro',
        label: 'Rio Claro',
    },
    {
        estadoid: 'RJ',
        value: 'Rio das Flores',
        label: 'Rio das Flores',
    },
    {
        estadoid: 'RJ',
        value: 'Rio das Ostras',
        label: 'Rio das Ostras',
    },
    {
        estadoid: 'RJ',
        label: 'Rio de Janeiro',
        value: 'Rio de Janeiro',
    },
    {
        estadoid: 'RJ',
        value: 'Santa Maria Madalena',
        label: 'Santa Maria Madalena',
    },
    {
        estadoid: 'RJ',
        value: 'Santo Antônio de Pádua',
        label: 'Santo Antônio de Pádua',
    },
    {
        estadoid: 'RJ',
        value: 'São Fidélis',
        label: 'São Fidélis',
    },
    {
        estadoid: 'RJ',
        value: 'São Francisco de Itabapoana',
        label: 'São Francisco de Itabapoana',
    },
    {
        estadoid: 'RJ',
        value: 'São Gonçalo',
        label: 'São Gonçalo',
    },
    {
        estadoid: 'RJ',
        value: 'São João da Barra',
        label: 'São João da Barra',
    },
    {
        estadoid: 'RJ',
        value: 'São João de Meriti',
        label: 'São João de Meriti',
    },
    {
        estadoid: 'RJ',
        value: 'São José de Ubá',
        label: 'São José de Ubá',
    },
    {
        estadoid: 'RJ',
        value: 'São José do Vale do Rio Preto',
        label: 'São José do Vale do Rio Preto',
    },
    {
        estadoid: 'RJ',
        value: 'São Pedro da Aldeia',
        label: 'São Pedro da Aldeia',
    },
    {
        estadoid: 'RJ',
        value: 'São Sebastião do Alto',
        label: 'São Sebastião do Alto',
    },
    {
        estadoid: 'RJ',
        value: 'Sapucaia',
        label: 'Sapucaia',
    },
    {
        estadoid: 'RJ',
        value: 'Saquarema',
        label: 'Saquarema',
    },
    {
        estadoid: 'RJ',
        value: 'Seropédica',
        label: 'Seropédica',
    },
    {
        estadoid: 'RJ',
        value: 'Silva Jardim',
        label: 'Silva Jardim',
    },
    {
        estadoid: 'RJ',
        value: 'Sumidouro',
        label: 'Sumidouro',
    },
    {
        estadoid: 'RJ',
        value: 'Tanguá',
        label: 'Tanguá',
    },
    {
        estadoid: 'RJ',
        value: 'Teresópolis',
        label: 'Teresópolis',
    },
    {
        estadoid: 'RJ',
        value: 'Trajano de Morais',
        label: 'Trajano de Morais',
    },
    {
        estadoid: 'RJ',
        value: 'Três Rios',
        label: 'Três Rios',
    },
    {
        estadoid: 'RJ',
        value: 'Valença',
        label: 'Valença',
    },
    {
        estadoid: 'RJ',
        value: 'Varre-Sai',
        label: 'Varre-Sai',
    },
    {
        estadoid: 'RJ',
        value: 'Vassouras',
        label: 'Vassouras',
    },
    {
        estadoid: 'RJ',
        value: 'Volta Redonda',
        label: 'Volta Redonda',
    },
    {
        estadoid: 'RN',
        value: 'Acari',
        label: 'Acari',
    },
    {
        estadoid: 'RN',
        value: 'Açu',
        label: 'Açu',
    },
    {
        estadoid: 'RN',
        value: 'Afonso Bezerra',
        label: 'Afonso Bezerra',
    },
    {
        estadoid: 'RN',
        value: 'Água Nova',
        label: 'Água Nova',
    },
    {
        estadoid: 'RN',
        value: 'Alexandria',
        label: 'Alexandria',
    },
    {
        estadoid: 'RN',
        value: 'Almino Afonso',
        label: 'Almino Afonso',
    },
    {
        estadoid: 'RN',
        value: 'Alto do Rodrigues',
        label: 'Alto do Rodrigues',
    },
    {
        estadoid: 'RN',
        value: 'Angicos',
        label: 'Angicos',
    },
    {
        estadoid: 'RN',
        value: 'Antônio Martins',
        label: 'Antônio Martins',
    },
    {
        estadoid: 'RN',
        value: 'Apodi',
        label: 'Apodi',
    },
    {
        estadoid: 'RN',
        value: 'Areia Branca',
        label: 'Areia Branca',
    },
    {
        estadoid: 'RN',
        value: 'Arês',
        label: 'Arês',
    },
    {
        estadoid: 'RN',
        value: 'Augusto Severo',
        label: 'Augusto Severo',
    },
    {
        estadoid: 'RN',
        value: 'Baía Formosa',
        label: 'Baía Formosa',
    },
    {
        estadoid: 'RN',
        value: 'Baraúna',
        label: 'Baraúna',
    },
    {
        estadoid: 'RN',
        value: 'Barcelona',
        label: 'Barcelona',
    },
    {
        estadoid: 'RN',
        value: 'Bento Fernandes',
        label: 'Bento Fernandes',
    },
    {
        estadoid: 'RN',
        value: 'Bodó',
        label: 'Bodó',
    },
    {
        estadoid: 'RN',
        value: 'Bom Jesus',
        label: 'Bom Jesus',
    },
    {
        estadoid: 'RN',
        value: 'Brejinho',
        label: 'Brejinho',
    },
    {
        estadoid: 'RN',
        value: 'Caiçara do Norte',
        label: 'Caiçara do Norte',
    },
    {
        estadoid: 'RN',
        value: 'Caiçara do Rio do Vento',
        label: 'Caiçara do Rio do Vento',
    },
    {
        estadoid: 'RN',
        value: 'Caicó',
        label: 'Caicó',
    },
    {
        estadoid: 'RN',
        value: 'Campo Redondo',
        label: 'Campo Redondo',
    },
    {
        estadoid: 'RN',
        value: 'Canguaretama',
        label: 'Canguaretama',
    },
    {
        estadoid: 'RN',
        value: 'Caraúbas',
        label: 'Caraúbas',
    },
    {
        estadoid: 'RN',
        value: 'Carnaúba dos Dantas',
        label: 'Carnaúba dos Dantas',
    },
    {
        estadoid: 'RN',
        value: 'Carnaubais',
        label: 'Carnaubais',
    },
    {
        estadoid: 'RN',
        value: 'Ceará-Mirim',
        label: 'Ceará-Mirim',
    },
    {
        estadoid: 'RN',
        value: 'Cerro Corá',
        label: 'Cerro Corá',
    },
    {
        estadoid: 'RN',
        value: 'Coronel Ezequiel',
        label: 'Coronel Ezequiel',
    },
    {
        estadoid: 'RN',
        value: 'Coronel João Pessoa',
        label: 'Coronel João Pessoa',
    },
    {
        estadoid: 'RN',
        value: 'Cruzeta',
        label: 'Cruzeta',
    },
    {
        estadoid: 'RN',
        value: 'Currais Novos',
        label: 'Currais Novos',
    },
    {
        estadoid: 'RN',
        value: 'Doutor Severiano',
        label: 'Doutor Severiano',
    },
    {
        estadoid: 'RN',
        value: 'Encanto',
        label: 'Encanto',
    },
    {
        estadoid: 'RN',
        value: 'Equador',
        label: 'Equador',
    },
    {
        estadoid: 'RN',
        value: 'Espírito Santo',
        label: 'Espírito Santo',
    },
    {
        estadoid: 'RN',
        value: 'Extremoz',
        label: 'Extremoz',
    },
    {
        estadoid: 'RN',
        value: 'Felipe Guerra',
        label: 'Felipe Guerra',
    },
    {
        estadoid: 'RN',
        value: 'Fernando Pedroza',
        label: 'Fernando Pedroza',
    },
    {
        estadoid: 'RN',
        value: 'Florânia',
        label: 'Florânia',
    },
    {
        estadoid: 'RN',
        value: 'Francisco Dantas',
        label: 'Francisco Dantas',
    },
    {
        estadoid: 'RN',
        value: 'Frutuoso Gomes',
        label: 'Frutuoso Gomes',
    },
    {
        estadoid: 'RN',
        value: 'Galinhos',
        label: 'Galinhos',
    },
    {
        estadoid: 'RN',
        value: 'Goianinha',
        label: 'Goianinha',
    },
    {
        estadoid: 'RN',
        value: 'Governador Dix-Sept Rosado',
        label: 'Governador Dix-Sept Rosado',
    },
    {
        estadoid: 'RN',
        value: 'Grossos',
        label: 'Grossos',
    },
    {
        estadoid: 'RN',
        value: 'Guamaré',
        label: 'Guamaré',
    },
    {
        estadoid: 'RN',
        value: 'Ielmo Marinho',
        label: 'Ielmo Marinho',
    },
    {
        estadoid: 'RN',
        value: 'Ipanguaçu',
        label: 'Ipanguaçu',
    },
    {
        estadoid: 'RN',
        value: 'Ipueira',
        label: 'Ipueira',
    },
    {
        estadoid: 'RN',
        value: 'Itajá',
        label: 'Itajá',
    },
    {
        estadoid: 'RN',
        value: 'Itaú',
        label: 'Itaú',
    },
    {
        estadoid: 'RN',
        value: 'Jaçanã',
        label: 'Jaçanã',
    },
    {
        estadoid: 'RN',
        value: 'Jandaíra',
        label: 'Jandaíra',
    },
    {
        estadoid: 'RN',
        value: 'Janduís',
        label: 'Janduís',
    },
    {
        estadoid: 'RN',
        value: 'Januário Cicco',
        label: 'Januário Cicco',
    },
    {
        estadoid: 'RN',
        value: 'Japi',
        label: 'Japi',
    },
    {
        estadoid: 'RN',
        value: 'Jardim de Angicos',
        label: 'Jardim de Angicos',
    },
    {
        estadoid: 'RN',
        value: 'Jardim de Piranhas',
        label: 'Jardim de Piranhas',
    },
    {
        estadoid: 'RN',
        value: 'Jardim do Seridó',
        label: 'Jardim do Seridó',
    },
    {
        estadoid: 'RN',
        value: 'João Câmara',
        label: 'João Câmara',
    },
    {
        estadoid: 'RN',
        value: 'João Dias',
        label: 'João Dias',
    },
    {
        estadoid: 'RN',
        value: 'José da Penha',
        label: 'José da Penha',
    },
    {
        estadoid: 'RN',
        value: 'Jucurutu',
        label: 'Jucurutu',
    },
    {
        estadoid: 'RN',
        value: 'Jundiá',
        label: 'Jundiá',
    },
    {
        estadoid: 'RN',
        value: 'Lagoa d\'Anta',
        label: 'Lagoa d\'Anta',
    },
    {
        estadoid: 'RN',
        value: 'Lagoa de Pedras',
        label: 'Lagoa de Pedras',
    },
    {
        estadoid: 'RN',
        value: 'Lagoa de Velhos',
        label: 'Lagoa de Velhos',
    },
    {
        estadoid: 'RN',
        value: 'Lagoa Nova',
        label: 'Lagoa Nova',
    },
    {
        estadoid: 'RN',
        value: 'Lagoa Salgada',
        label: 'Lagoa Salgada',
    },
    {
        estadoid: 'RN',
        value: 'Lajes',
        label: 'Lajes',
    },
    {
        estadoid: 'RN',
        value: 'Lajes Pintadas',
        label: 'Lajes Pintadas',
    },
    {
        estadoid: 'RN',
        value: 'Lucrécia',
        label: 'Lucrécia',
    },
    {
        estadoid: 'RN',
        value: 'Luís Gomes',
        label: 'Luís Gomes',
    },
    {
        estadoid: 'RN',
        value: 'Macaíba',
        label: 'Macaíba',
    },
    {
        estadoid: 'RN',
        value: 'Macau',
        label: 'Macau',
    },
    {
        estadoid: 'RN',
        value: 'Major Sales',
        label: 'Major Sales',
    },
    {
        estadoid: 'RN',
        value: 'Marcelino Vieira',
        label: 'Marcelino Vieira',
    },
    {
        estadoid: 'RN',
        value: 'Martins',
        label: 'Martins',
    },
    {
        estadoid: 'RN',
        value: 'Maxaranguape',
        label: 'Maxaranguape',
    },
    {
        estadoid: 'RN',
        value: 'Messias Targino',
        label: 'Messias Targino',
    },
    {
        estadoid: 'RN',
        value: 'Montanhas',
        label: 'Montanhas',
    },
    {
        estadoid: 'RN',
        value: 'Monte Alegre',
        label: 'Monte Alegre',
    },
    {
        estadoid: 'RN',
        value: 'Monte das Gameleiras',
        label: 'Monte das Gameleiras',
    },
    {
        estadoid: 'RN',
        value: 'Mossoró',
        label: 'Mossoró',
    },
    {
        estadoid: 'RN',
        label: 'Natal',
        value: 'Natal',
    },
    {
        estadoid: 'RN',
        value: 'Nísia Floresta',
        label: 'Nísia Floresta',
    },
    {
        estadoid: 'RN',
        value: 'Nova Cruz',
        label: 'Nova Cruz',
    },
    {
        estadoid: 'RN',
        value: 'Olho-d\'Água do Borges',
        label: 'Olho-d\'Água do Borges',
    },
    {
        estadoid: 'RN',
        value: 'Ouro Branco',
        label: 'Ouro Branco',
    },
    {
        estadoid: 'RN',
        value: 'Paraná',
        label: 'Paraná',
    },
    {
        estadoid: 'RN',
        value: 'Paraú',
        label: 'Paraú',
    },
    {
        estadoid: 'RN',
        value: 'Parazinho',
        label: 'Parazinho',
    },
    {
        estadoid: 'RN',
        value: 'Parelhas',
        label: 'Parelhas',
    },
    {
        estadoid: 'RN',
        value: 'Parnamirim',
        label: 'Parnamirim',
    },
    {
        estadoid: 'RN',
        value: 'Passa e Fica',
        label: 'Passa e Fica',
    },
    {
        estadoid: 'RN',
        value: 'Passagem',
        label: 'Passagem',
    },
    {
        estadoid: 'RN',
        value: 'Patu',
        label: 'Patu',
    },
    {
        estadoid: 'RN',
        value: 'Pau dos Ferros',
        label: 'Pau dos Ferros',
    },
    {
        estadoid: 'RN',
        value: 'Pedra Grande',
        label: 'Pedra Grande',
    },
    {
        estadoid: 'RN',
        value: 'Pedra Preta',
        label: 'Pedra Preta',
    },
    {
        estadoid: 'RN',
        value: 'Pedro Avelino',
        label: 'Pedro Avelino',
    },
    {
        estadoid: 'RN',
        value: 'Pedro Velho',
        label: 'Pedro Velho',
    },
    {
        estadoid: 'RN',
        value: 'Pendências',
        label: 'Pendências',
    },
    {
        estadoid: 'RN',
        value: 'Pilões',
        label: 'Pilões',
    },
    {
        estadoid: 'RN',
        value: 'Poço Branco',
        label: 'Poço Branco',
    },
    {
        estadoid: 'RN',
        value: 'Portalegre',
        label: 'Portalegre',
    },
    {
        estadoid: 'RN',
        value: 'Porto do Mangue',
        label: 'Porto do Mangue',
    },
    {
        estadoid: 'RN',
        value: 'Presidente Juscelino',
        label: 'Presidente Juscelino',
    },
    {
        estadoid: 'RN',
        value: 'Pureza',
        label: 'Pureza',
    },
    {
        estadoid: 'RN',
        value: 'Rafael Fernandes',
        label: 'Rafael Fernandes',
    },
    {
        estadoid: 'RN',
        value: 'Rafael Godeiro',
        label: 'Rafael Godeiro',
    },
    {
        estadoid: 'RN',
        value: 'Riacho da Cruz',
        label: 'Riacho da Cruz',
    },
    {
        estadoid: 'RN',
        value: 'Riacho de Santana',
        label: 'Riacho de Santana',
    },
    {
        estadoid: 'RN',
        value: 'Riachuelo',
        label: 'Riachuelo',
    },
    {
        estadoid: 'RN',
        value: 'Rio do Fogo',
        label: 'Rio do Fogo',
    },
    {
        estadoid: 'RN',
        value: 'Rodolfo Fernandes',
        label: 'Rodolfo Fernandes',
    },
    {
        estadoid: 'RN',
        value: 'Ruy Barbosa',
        label: 'Ruy Barbosa',
    },
    {
        estadoid: 'RN',
        value: 'Santa Cruz',
        label: 'Santa Cruz',
    },
    {
        estadoid: 'RN',
        value: 'Santa Maria',
        label: 'Santa Maria',
    },
    {
        estadoid: 'RN',
        value: 'Santana do Matos',
        label: 'Santana do Matos',
    },
    {
        estadoid: 'RN',
        value: 'Santana do Seridó',
        label: 'Santana do Seridó',
    },
    {
        estadoid: 'RN',
        value: 'Santo Antônio',
        label: 'Santo Antônio',
    },
    {
        estadoid: 'RN',
        value: 'São Bento do Norte',
        label: 'São Bento do Norte',
    },
    {
        estadoid: 'RN',
        value: 'São Bento do Trairí',
        label: 'São Bento do Trairí',
    },
    {
        estadoid: 'RN',
        value: 'São Fernando',
        label: 'São Fernando',
    },
    {
        estadoid: 'RN',
        value: 'São Francisco do Oeste',
        label: 'São Francisco do Oeste',
    },
    {
        estadoid: 'RN',
        value: 'São Gonçalo do Amarante',
        label: 'São Gonçalo do Amarante',
    },
    {
        estadoid: 'RN',
        value: 'São João do Sabugi',
        label: 'São João do Sabugi',
    },
    {
        estadoid: 'RN',
        value: 'São José de Mipibu',
        label: 'São José de Mipibu',
    },
    {
        estadoid: 'RN',
        value: 'São José do Campestre',
        label: 'São José do Campestre',
    },
    {
        estadoid: 'RN',
        value: 'São José do Seridó',
        label: 'São José do Seridó',
    },
    {
        estadoid: 'RN',
        value: 'São Miguel',
        label: 'São Miguel',
    },
    {
        estadoid: 'RN',
        value: 'São Miguel de Touros',
        label: 'São Miguel de Touros',
    },
    {
        estadoid: 'RN',
        value: 'São Paulo do Potengi',
        label: 'São Paulo do Potengi',
    },
    {
        estadoid: 'RN',
        value: 'São Pedro',
        label: 'São Pedro',
    },
    {
        estadoid: 'RN',
        value: 'São Rafael',
        label: 'São Rafael',
    },
    {
        estadoid: 'RN',
        value: 'São Tomé',
        label: 'São Tomé',
    },
    {
        estadoid: 'RN',
        value: 'São Vicente',
        label: 'São Vicente',
    },
    {
        estadoid: 'RN',
        value: 'Senador Elói de Souza',
        label: 'Senador Elói de Souza',
    },
    {
        estadoid: 'RN',
        value: 'Senador Georgino Avelino',
        label: 'Senador Georgino Avelino',
    },
    {
        estadoid: 'RN',
        value: 'Serra de São Bento',
        label: 'Serra de São Bento',
    },
    {
        estadoid: 'RN',
        value: 'Serra do Mel',
        label: 'Serra do Mel',
    },
    {
        estadoid: 'RN',
        value: 'Serra Negra do Norte',
        label: 'Serra Negra do Norte',
    },
    {
        estadoid: 'RN',
        value: 'Serrinha',
        label: 'Serrinha',
    },
    {
        estadoid: 'RN',
        value: 'Serrinha dos Pintos',
        label: 'Serrinha dos Pintos',
    },
    {
        estadoid: 'RN',
        value: 'Severiano Melo',
        label: 'Severiano Melo',
    },
    {
        estadoid: 'RN',
        value: 'Sítio Novo',
        label: 'Sítio Novo',
    },
    {
        estadoid: 'RN',
        value: 'Taboleiro Grande',
        label: 'Taboleiro Grande',
    },
    {
        estadoid: 'RN',
        value: 'Taipu',
        label: 'Taipu',
    },
    {
        estadoid: 'RN',
        value: 'Tangará',
        label: 'Tangará',
    },
    {
        estadoid: 'RN',
        value: 'Tenente Ananias',
        label: 'Tenente Ananias',
    },
    {
        estadoid: 'RN',
        value: 'Tenente Laurentino Cruz',
        label: 'Tenente Laurentino Cruz',
    },
    {
        estadoid: 'RN',
        value: 'Tibau',
        label: 'Tibau',
    },
    {
        estadoid: 'RN',
        value: 'Tibau do Sul',
        label: 'Tibau do Sul',
    },
    {
        estadoid: 'RN',
        value: 'Timbaúba dos Batistas',
        label: 'Timbaúba dos Batistas',
    },
    {
        estadoid: 'RN',
        value: 'Touros',
        label: 'Touros',
    },
    {
        estadoid: 'RN',
        value: 'Triunfo Potiguar',
        label: 'Triunfo Potiguar',
    },
    {
        estadoid: 'RN',
        value: 'Umarizal',
        label: 'Umarizal',
    },
    {
        estadoid: 'RN',
        value: 'Upanema',
        label: 'Upanema',
    },
    {
        estadoid: 'RN',
        value: 'Várzea',
        label: 'Várzea',
    },
    {
        estadoid: 'RN',
        value: 'Venha-Ver',
        label: 'Venha-Ver',
    },
    {
        estadoid: 'RN',
        value: 'Vera Cruz',
        label: 'Vera Cruz',
    },
    {
        estadoid: 'RN',
        value: 'Viçosa',
        label: 'Viçosa',
    },
    {
        estadoid: 'RN',
        value: 'Vila Flor',
        label: 'Vila Flor',
    },
    {
        estadoid: 'RO',
        value: 'Alta Floresta d\'Oeste',
        label: 'Alta Floresta d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Alto Alegre do Parecis',
        label: 'Alto Alegre do Parecis',
    },
    {
        estadoid: 'RO',
        value: 'Alto Paraíso',
        label: 'Alto Paraíso',
    },
    {
        estadoid: 'RO',
        value: 'Alvorada d\'Oeste',
        label: 'Alvorada d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Ariquemes',
        label: 'Ariquemes',
    },
    {
        estadoid: 'RO',
        value: 'Buritis',
        label: 'Buritis',
    },
    {
        estadoid: 'RO',
        value: 'Cabixi',
        label: 'Cabixi',
    },
    {
        estadoid: 'RO',
        value: 'Cacaulândia',
        label: 'Cacaulândia',
    },
    {
        estadoid: 'RO',
        value: 'Cacoal',
        label: 'Cacoal',
    },
    {
        estadoid: 'RO',
        value: 'Campo Novo de Rondônia',
        label: 'Campo Novo de Rondônia',
    },
    {
        estadoid: 'RO',
        value: 'Candeias do Jamari',
        label: 'Candeias do Jamari',
    },
    {
        estadoid: 'RO',
        value: 'Castanheiras',
        label: 'Castanheiras',
    },
    {
        estadoid: 'RO',
        value: 'Cerejeiras',
        label: 'Cerejeiras',
    },
    {
        estadoid: 'RO',
        value: 'Chupinguaia',
        label: 'Chupinguaia',
    },
    {
        estadoid: 'RO',
        value: 'Colorado do Oeste',
        label: 'Colorado do Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Corumbiara',
        label: 'Corumbiara',
    },
    {
        estadoid: 'RO',
        value: 'Costa Marques',
        label: 'Costa Marques',
    },
    {
        estadoid: 'RO',
        value: 'Cujubim',
        label: 'Cujubim',
    },
    {
        estadoid: 'RO',
        value: 'Espigão d\'Oeste',
        label: 'Espigão d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Governador Jorge Teixeira',
        label: 'Governador Jorge Teixeira',
    },
    {
        estadoid: 'RO',
        value: 'Guajará-Mirim',
        label: 'Guajará-Mirim',
    },
    {
        estadoid: 'RO',
        value: 'Itapuã do Oeste',
        label: 'Itapuã do Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Jaru',
        label: 'Jaru',
    },
    {
        estadoid: 'RO',
        value: 'Ji-Paraná',
        label: 'Ji-Paraná',
    },
    {
        estadoid: 'RO',
        value: 'Machadinho d\'Oeste',
        label: 'Machadinho d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Ministro Andreazza',
        label: 'Ministro Andreazza',
    },
    {
        estadoid: 'RO',
        value: 'Mirante da Serra',
        label: 'Mirante da Serra',
    },
    {
        estadoid: 'RO',
        value: 'Monte Negro',
        label: 'Monte Negro',
    },
    {
        estadoid: 'RO',
        value: 'Nova Brasilândia d\'Oeste',
        label: 'Nova Brasilândia d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Nova Mamoré',
        label: 'Nova Mamoré',
    },
    {
        estadoid: 'RO',
        value: 'Nova União',
        label: 'Nova União',
    },
    {
        estadoid: 'RO',
        value: 'Novo Horizonte do Oeste',
        label: 'Novo Horizonte do Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Ouro Preto do Oeste',
        label: 'Ouro Preto do Oeste',
    },
    {
        estadoid: 'RO',
        value: 'Parecis',
        label: 'Parecis',
    },
    {
        estadoid: 'RO',
        value: 'Pimenta Bueno',
        label: 'Pimenta Bueno',
    },
    {
        estadoid: 'RO',
        value: 'Pimenteiras do Oeste',
        label: 'Pimenteiras do Oeste',
    },
    {
        estadoid: 'RO',
        label: 'Porto Velho',
        value: 'Porto Velho',
    },
    {
        estadoid: 'RO',
        value: 'Presidente Médici',
        label: 'Presidente Médici',
    },
    {
        estadoid: 'RO',
        value: 'Primavera de Rondônia',
        label: 'Primavera de Rondônia',
    },
    {
        estadoid: 'RO',
        value: 'Rio Crespo',
        label: 'Rio Crespo',
    },
    {
        estadoid: 'RO',
        value: 'Rolim de Moura',
        label: 'Rolim de Moura',
    },
    {
        estadoid: 'RO',
        value: 'Santa Luzia d\'Oeste',
        label: 'Santa Luzia d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'São Felipe d\'Oeste',
        label: 'São Felipe d\'Oeste',
    },
    {
        estadoid: 'RO',
        value: 'São Francisco do Guaporé',
        label: 'São Francisco do Guaporé',
    },
    {
        estadoid: 'RO',
        value: 'São Miguel do Guaporé',
        label: 'São Miguel do Guaporé',
    },
    {
        estadoid: 'RO',
        value: 'Seringueiras',
        label: 'Seringueiras',
    },
    {
        estadoid: 'RO',
        value: 'Teixeirópolis',
        label: 'Teixeirópolis',
    },
    {
        estadoid: 'RO',
        value: 'Theobroma',
        label: 'Theobroma',
    },
    {
        estadoid: 'RO',
        value: 'Urupá',
        label: 'Urupá',
    },
    {
        estadoid: 'RO',
        value: 'Vale do Anari',
        label: 'Vale do Anari',
    },
    {
        estadoid: 'RO',
        value: 'Vale do Paraíso',
        label: 'Vale do Paraíso',
    },
    {
        estadoid: 'RO',
        value: 'Vilhena',
        label: 'Vilhena',
    },
    {
        estadoid: 'RR',
        value: 'Alto Alegre',
        label: 'Alto Alegre',
    },
    {
        estadoid: 'RR',
        value: 'Amajari',
        label: 'Amajari',
    },
    {
        estadoid: 'RR',
        label: 'Boa Vista',
        value: 'Boa Vista',
    },
    {
        estadoid: 'RR',
        value: 'Bonfim',
        label: 'Bonfim',
    },
    {
        estadoid: 'RR',
        value: 'Cantá',
        label: 'Cantá',
    },
    {
        estadoid: 'RR',
        value: 'Caracaraí',
        label: 'Caracaraí',
    },
    {
        estadoid: 'RR',
        value: 'Caroebe',
        label: 'Caroebe',
    },
    {
        estadoid: 'RR',
        value: 'Iracema',
        label: 'Iracema',
    },
    {
        estadoid: 'RR',
        value: 'Mucajaí',
        label: 'Mucajaí',
    },
    {
        estadoid: 'RR',
        value: 'Normandia',
        label: 'Normandia',
    },
    {
        estadoid: 'RR',
        value: 'Pacaraima',
        label: 'Pacaraima',
    },
    {
        estadoid: 'RR',
        value: 'Rorainópolis',
        label: 'Rorainópolis',
    },
    {
        estadoid: 'RR',
        value: 'São João da Baliza',
        label: 'São João da Baliza',
    },
    {
        estadoid: 'RR',
        value: 'São Luiz',
        label: 'São Luiz',
    },
    {
        estadoid: 'RR',
        value: 'Uiramutã',
        label: 'Uiramutã',
    },
    {
        estadoid: 'RS',
        value: 'Aceguá',
        label: 'Aceguá',
    },
    {
        estadoid: 'RS',
        value: 'Água Santa',
        label: 'Água Santa',
    },
    {
        estadoid: 'RS',
        value: 'Agudo',
        label: 'Agudo',
    },
    {
        estadoid: 'RS',
        value: 'Ajuricaba',
        label: 'Ajuricaba',
    },
    {
        estadoid: 'RS',
        value: 'Alecrim',
        label: 'Alecrim',
    },
    {
        estadoid: 'RS',
        value: 'Alegrete',
        label: 'Alegrete',
    },
    {
        estadoid: 'RS',
        value: 'Alegria',
        label: 'Alegria',
    },
    {
        estadoid: 'RS',
        value: 'Almirante Tamandaré do Sul',
        label: 'Almirante Tamandaré do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Alpestre',
        label: 'Alpestre',
    },
    {
        estadoid: 'RS',
        value: 'Alto Alegre',
        label: 'Alto Alegre',
    },
    {
        estadoid: 'RS',
        value: 'Alto Feliz',
        label: 'Alto Feliz',
    },
    {
        estadoid: 'RS',
        value: 'Alvorada',
        label: 'Alvorada',
    },
    {
        estadoid: 'RS',
        value: 'Amaral Ferrador',
        label: 'Amaral Ferrador',
    },
    {
        estadoid: 'RS',
        value: 'Ametista do Sul',
        label: 'Ametista do Sul',
    },
    {
        estadoid: 'RS',
        value: 'André da Rocha',
        label: 'André da Rocha',
    },
    {
        estadoid: 'RS',
        value: 'Anta Gorda',
        label: 'Anta Gorda',
    },
    {
        estadoid: 'RS',
        value: 'Antônio Prado',
        label: 'Antônio Prado',
    },
    {
        estadoid: 'RS',
        value: 'Arambaré',
        label: 'Arambaré',
    },
    {
        estadoid: 'RS',
        value: 'Araricá',
        label: 'Araricá',
    },
    {
        estadoid: 'RS',
        value: 'Aratiba',
        label: 'Aratiba',
    },
    {
        estadoid: 'RS',
        value: 'Arroio do Meio',
        label: 'Arroio do Meio',
    },
    {
        estadoid: 'RS',
        value: 'Arroio do Padre',
        label: 'Arroio do Padre',
    },
    {
        estadoid: 'RS',
        value: 'Arroio do Sal',
        label: 'Arroio do Sal',
    },
    {
        estadoid: 'RS',
        value: 'Arroio do Tigre',
        label: 'Arroio do Tigre',
    },
    {
        estadoid: 'RS',
        value: 'Arroio dos Ratos',
        label: 'Arroio dos Ratos',
    },
    {
        estadoid: 'RS',
        value: 'Arroio Grande',
        label: 'Arroio Grande',
    },
    {
        estadoid: 'RS',
        value: 'Arvorezinha',
        label: 'Arvorezinha',
    },
    {
        estadoid: 'RS',
        value: 'Augusto Pestana',
        label: 'Augusto Pestana',
    },
    {
        estadoid: 'RS',
        value: 'Áurea',
        label: 'Áurea',
    },
    {
        estadoid: 'RS',
        value: 'Bagé',
        label: 'Bagé',
    },
    {
        estadoid: 'RS',
        value: 'Balneário Pinhal',
        label: 'Balneário Pinhal',
    },
    {
        estadoid: 'RS',
        value: 'Barão',
        label: 'Barão',
    },
    {
        estadoid: 'RS',
        value: 'Barão de Cotegipe',
        label: 'Barão de Cotegipe',
    },
    {
        estadoid: 'RS',
        value: 'Barão do Triunfo',
        label: 'Barão do Triunfo',
    },
    {
        estadoid: 'RS',
        value: 'Barra do Guarita',
        label: 'Barra do Guarita',
    },
    {
        estadoid: 'RS',
        value: 'Barra do Quaraí',
        label: 'Barra do Quaraí',
    },
    {
        estadoid: 'RS',
        value: 'Barra do Ribeiro',
        label: 'Barra do Ribeiro',
    },
    {
        estadoid: 'RS',
        value: 'Barra do Rio Azul',
        label: 'Barra do Rio Azul',
    },
    {
        estadoid: 'RS',
        value: 'Barra Funda',
        label: 'Barra Funda',
    },
    {
        estadoid: 'RS',
        value: 'Barracão',
        label: 'Barracão',
    },
    {
        estadoid: 'RS',
        value: 'Barros Cassal',
        label: 'Barros Cassal',
    },
    {
        estadoid: 'RS',
        value: 'Benjamin Constan do Sul',
        label: 'Benjamin Constan do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Bento Gonçalves',
        label: 'Bento Gonçalves',
    },
    {
        estadoid: 'RS',
        value: 'Boa Vista das Missões',
        label: 'Boa Vista das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Boa Vista do Buricá',
        label: 'Boa Vista do Buricá',
    },
    {
        estadoid: 'RS',
        value: 'Boa Vista do Cadeado',
        label: 'Boa Vista do Cadeado',
    },
    {
        estadoid: 'RS',
        value: 'Boa Vista do Incra',
        label: 'Boa Vista do Incra',
    },
    {
        estadoid: 'RS',
        value: 'Boa Vista do Sul',
        label: 'Boa Vista do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Bom Jesus',
        label: 'Bom Jesus',
    },
    {
        estadoid: 'RS',
        value: 'Bom Princípio',
        label: 'Bom Princípio',
    },
    {
        estadoid: 'RS',
        value: 'Bom Progresso',
        label: 'Bom Progresso',
    },
    {
        estadoid: 'RS',
        value: 'Bom Retiro do Sul',
        label: 'Bom Retiro do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Boqueirão do Leão',
        label: 'Boqueirão do Leão',
    },
    {
        estadoid: 'RS',
        value: 'Bossoroca',
        label: 'Bossoroca',
    },
    {
        estadoid: 'RS',
        value: 'Bozano',
        label: 'Bozano',
    },
    {
        estadoid: 'RS',
        value: 'Braga',
        label: 'Braga',
    },
    {
        estadoid: 'RS',
        value: 'Brochier',
        label: 'Brochier',
    },
    {
        estadoid: 'RS',
        value: 'Butiá',
        label: 'Butiá',
    },
    {
        estadoid: 'RS',
        value: 'Caçapava do Sul',
        label: 'Caçapava do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Cacequi',
        label: 'Cacequi',
    },
    {
        estadoid: 'RS',
        value: 'Cachoeira do Sul',
        label: 'Cachoeira do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Cachoeirinha',
        label: 'Cachoeirinha',
    },
    {
        estadoid: 'RS',
        value: 'Cacique Doble',
        label: 'Cacique Doble',
    },
    {
        estadoid: 'RS',
        value: 'Caibaté',
        label: 'Caibaté',
    },
    {
        estadoid: 'RS',
        value: 'Caiçara',
        label: 'Caiçara',
    },
    {
        estadoid: 'RS',
        value: 'Camaquã',
        label: 'Camaquã',
    },
    {
        estadoid: 'RS',
        value: 'Camargo',
        label: 'Camargo',
    },
    {
        estadoid: 'RS',
        value: 'Cambará do Sul',
        label: 'Cambará do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Campestre da Serra',
        label: 'Campestre da Serra',
    },
    {
        estadoid: 'RS',
        value: 'Campina das Missões',
        label: 'Campina das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Campinas do Sul',
        label: 'Campinas do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Campo Bom',
        label: 'Campo Bom',
    },
    {
        estadoid: 'RS',
        value: 'Campo Novo',
        label: 'Campo Novo',
    },
    {
        estadoid: 'RS',
        value: 'Campos Borges',
        label: 'Campos Borges',
    },
    {
        estadoid: 'RS',
        value: 'Candelária',
        label: 'Candelária',
    },
    {
        estadoid: 'RS',
        value: 'Cândido Godói',
        label: 'Cândido Godói',
    },
    {
        estadoid: 'RS',
        value: 'Candiota',
        label: 'Candiota',
    },
    {
        estadoid: 'RS',
        value: 'Canela',
        label: 'Canela',
    },
    {
        estadoid: 'RS',
        value: 'Canguçu',
        label: 'Canguçu',
    },
    {
        estadoid: 'RS',
        value: 'Canoas',
        label: 'Canoas',
    },
    {
        estadoid: 'RS',
        value: 'Canudos do Vale',
        label: 'Canudos do Vale',
    },
    {
        estadoid: 'RS',
        value: 'Capão Bonito do Sul',
        label: 'Capão Bonito do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Capão da Canoa',
        label: 'Capão da Canoa',
    },
    {
        estadoid: 'RS',
        value: 'Capão do Cipó',
        label: 'Capão do Cipó',
    },
    {
        estadoid: 'RS',
        value: 'Capão do Leão',
        label: 'Capão do Leão',
    },
    {
        estadoid: 'RS',
        value: 'Capela de Santana',
        label: 'Capela de Santana',
    },
    {
        estadoid: 'RS',
        value: 'Capitão',
        label: 'Capitão',
    },
    {
        estadoid: 'RS',
        value: 'Capivari do Sul',
        label: 'Capivari do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Caraá',
        label: 'Caraá',
    },
    {
        estadoid: 'RS',
        value: 'Carazinho',
        label: 'Carazinho',
    },
    {
        estadoid: 'RS',
        value: 'Carlos Barbosa',
        label: 'Carlos Barbosa',
    },
    {
        estadoid: 'RS',
        value: 'Carlos Gomes',
        label: 'Carlos Gomes',
    },
    {
        estadoid: 'RS',
        value: 'Casca',
        label: 'Casca',
    },
    {
        estadoid: 'RS',
        value: 'Caseiros',
        label: 'Caseiros',
    },
    {
        estadoid: 'RS',
        value: 'Catuípe',
        label: 'Catuípe',
    },
    {
        estadoid: 'RS',
        value: 'Caxias do Sul',
        label: 'Caxias do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Centenário',
        label: 'Centenário',
    },
    {
        estadoid: 'RS',
        value: 'Cerrito',
        label: 'Cerrito',
    },
    {
        estadoid: 'RS',
        value: 'Cerro Branco',
        label: 'Cerro Branco',
    },
    {
        estadoid: 'RS',
        value: 'Cerro Grande',
        label: 'Cerro Grande',
    },
    {
        estadoid: 'RS',
        value: 'Cerro Grande do Sul',
        label: 'Cerro Grande do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Cerro Largo',
        label: 'Cerro Largo',
    },
    {
        estadoid: 'RS',
        value: 'Chapada',
        label: 'Chapada',
    },
    {
        estadoid: 'RS',
        value: 'Charqueadas',
        label: 'Charqueadas',
    },
    {
        estadoid: 'RS',
        value: 'Charrua',
        label: 'Charrua',
    },
    {
        estadoid: 'RS',
        value: 'Chiapeta',
        label: 'Chiapeta',
    },
    {
        estadoid: 'RS',
        value: 'Chuí',
        label: 'Chuí',
    },
    {
        estadoid: 'RS',
        value: 'Chuvisca',
        label: 'Chuvisca',
    },
    {
        estadoid: 'RS',
        value: 'Cidreira',
        label: 'Cidreira',
    },
    {
        estadoid: 'RS',
        value: 'Ciríaco',
        label: 'Ciríaco',
    },
    {
        estadoid: 'RS',
        value: 'Colinas',
        label: 'Colinas',
    },
    {
        estadoid: 'RS',
        value: 'Colorado',
        label: 'Colorado',
    },
    {
        estadoid: 'RS',
        value: 'Condor',
        label: 'Condor',
    },
    {
        estadoid: 'RS',
        value: 'Constantina',
        label: 'Constantina',
    },
    {
        estadoid: 'RS',
        value: 'Coqueiro Baixo',
        label: 'Coqueiro Baixo',
    },
    {
        estadoid: 'RS',
        value: 'Coqueiros do Sul',
        label: 'Coqueiros do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Coronel Barros',
        label: 'Coronel Barros',
    },
    {
        estadoid: 'RS',
        value: 'Coronel Bicaco',
        label: 'Coronel Bicaco',
    },
    {
        estadoid: 'RS',
        value: 'Coronel Pilar',
        label: 'Coronel Pilar',
    },
    {
        estadoid: 'RS',
        value: 'Cotiporã',
        label: 'Cotiporã',
    },
    {
        estadoid: 'RS',
        value: 'Coxilha',
        label: 'Coxilha',
    },
    {
        estadoid: 'RS',
        value: 'Crissiumal',
        label: 'Crissiumal',
    },
    {
        estadoid: 'RS',
        value: 'Cristal',
        label: 'Cristal',
    },
    {
        estadoid: 'RS',
        value: 'Cristal do Sul',
        label: 'Cristal do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Cruz Alta',
        label: 'Cruz Alta',
    },
    {
        estadoid: 'RS',
        value: 'Cruzaltense',
        label: 'Cruzaltense',
    },
    {
        estadoid: 'RS',
        value: 'Cruzeiro do Sul',
        label: 'Cruzeiro do Sul',
    },
    {
        estadoid: 'RS',
        value: 'David Canabarro',
        label: 'David Canabarro',
    },
    {
        estadoid: 'RS',
        value: 'Derrubadas',
        label: 'Derrubadas',
    },
    {
        estadoid: 'RS',
        value: 'Dezesseis de Novembro',
        label: 'Dezesseis de Novembro',
    },
    {
        estadoid: 'RS',
        value: 'Dilermando de Aguiar',
        label: 'Dilermando de Aguiar',
    },
    {
        estadoid: 'RS',
        value: 'Dois Irmãos',
        label: 'Dois Irmãos',
    },
    {
        estadoid: 'RS',
        value: 'Dois Irmãos das Missões',
        label: 'Dois Irmãos das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Dois Lajeados',
        label: 'Dois Lajeados',
    },
    {
        estadoid: 'RS',
        value: 'Dom Feliciano',
        label: 'Dom Feliciano',
    },
    {
        estadoid: 'RS',
        value: 'Dom Pedrito',
        label: 'Dom Pedrito',
    },
    {
        estadoid: 'RS',
        value: 'Dom Pedro de Alcântara',
        label: 'Dom Pedro de Alcântara',
    },
    {
        estadoid: 'RS',
        value: 'Dona Francisca',
        label: 'Dona Francisca',
    },
    {
        estadoid: 'RS',
        value: 'Doutor Maurício Cardoso',
        label: 'Doutor Maurício Cardoso',
    },
    {
        estadoid: 'RS',
        value: 'Doutor Ricardo',
        label: 'Doutor Ricardo',
    },
    {
        estadoid: 'RS',
        value: 'Eldorado do Sul',
        label: 'Eldorado do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Encantado',
        label: 'Encantado',
    },
    {
        estadoid: 'RS',
        value: 'Encruzilhada do Sul',
        label: 'Encruzilhada do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Engenho Velho',
        label: 'Engenho Velho',
    },
    {
        estadoid: 'RS',
        value: 'Entre Rios do Sul',
        label: 'Entre Rios do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Entre-Ijuís',
        label: 'Entre-Ijuís',
    },
    {
        estadoid: 'RS',
        value: 'Erebango',
        label: 'Erebango',
    },
    {
        estadoid: 'RS',
        value: 'Erechim',
        label: 'Erechim',
    },
    {
        estadoid: 'RS',
        value: 'Ernestina',
        label: 'Ernestina',
    },
    {
        estadoid: 'RS',
        value: 'Erval Grande',
        label: 'Erval Grande',
    },
    {
        estadoid: 'RS',
        value: 'Erval Seco',
        label: 'Erval Seco',
    },
    {
        estadoid: 'RS',
        value: 'Esmeralda',
        label: 'Esmeralda',
    },
    {
        estadoid: 'RS',
        value: 'Esperança do Sul',
        label: 'Esperança do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Espumoso',
        label: 'Espumoso',
    },
    {
        estadoid: 'RS',
        value: 'Estação',
        label: 'Estação',
    },
    {
        estadoid: 'RS',
        value: 'Estância Velha',
        label: 'Estância Velha',
    },
    {
        estadoid: 'RS',
        value: 'Esteio',
        label: 'Esteio',
    },
    {
        estadoid: 'RS',
        value: 'Estrela',
        label: 'Estrela',
    },
    {
        estadoid: 'RS',
        value: 'Estrela Velha',
        label: 'Estrela Velha',
    },
    {
        estadoid: 'RS',
        value: 'Eugênio de Castro',
        label: 'Eugênio de Castro',
    },
    {
        estadoid: 'RS',
        value: 'Fagundes Varela',
        label: 'Fagundes Varela',
    },
    {
        estadoid: 'RS',
        value: 'Farroupilha',
        label: 'Farroupilha',
    },
    {
        estadoid: 'RS',
        value: 'Faxinal do Soturno',
        label: 'Faxinal do Soturno',
    },
    {
        estadoid: 'RS',
        value: 'Faxinalzinho',
        label: 'Faxinalzinho',
    },
    {
        estadoid: 'RS',
        value: 'Fazenda Vilanova',
        label: 'Fazenda Vilanova',
    },
    {
        estadoid: 'RS',
        value: 'Feliz',
        label: 'Feliz',
    },
    {
        estadoid: 'RS',
        value: 'Flores da Cunha',
        label: 'Flores da Cunha',
    },
    {
        estadoid: 'RS',
        value: 'Floriano Peixoto',
        label: 'Floriano Peixoto',
    },
    {
        estadoid: 'RS',
        value: 'Fontoura Xavier',
        label: 'Fontoura Xavier',
    },
    {
        estadoid: 'RS',
        value: 'Formigueiro',
        label: 'Formigueiro',
    },
    {
        estadoid: 'RS',
        value: 'Forquetinha',
        label: 'Forquetinha',
    },
    {
        estadoid: 'RS',
        value: 'Fortaleza dos Valos',
        label: 'Fortaleza dos Valos',
    },
    {
        estadoid: 'RS',
        value: 'Frederico Westphalen',
        label: 'Frederico Westphalen',
    },
    {
        estadoid: 'RS',
        value: 'Garibaldi',
        label: 'Garibaldi',
    },
    {
        estadoid: 'RS',
        value: 'Garruchos',
        label: 'Garruchos',
    },
    {
        estadoid: 'RS',
        value: 'Gaurama',
        label: 'Gaurama',
    },
    {
        estadoid: 'RS',
        value: 'General Câmara',
        label: 'General Câmara',
    },
    {
        estadoid: 'RS',
        value: 'Gentil',
        label: 'Gentil',
    },
    {
        estadoid: 'RS',
        value: 'Getúlio Vargas',
        label: 'Getúlio Vargas',
    },
    {
        estadoid: 'RS',
        value: 'Giruá',
        label: 'Giruá',
    },
    {
        estadoid: 'RS',
        value: 'Glorinha',
        label: 'Glorinha',
    },
    {
        estadoid: 'RS',
        value: 'Gramado',
        label: 'Gramado',
    },
    {
        estadoid: 'RS',
        value: 'Gramado dos Loureiros',
        label: 'Gramado dos Loureiros',
    },
    {
        estadoid: 'RS',
        value: 'Gramado Xavier',
        label: 'Gramado Xavier',
    },
    {
        estadoid: 'RS',
        value: 'Gravataí',
        label: 'Gravataí',
    },
    {
        estadoid: 'RS',
        value: 'Guabiju',
        label: 'Guabiju',
    },
    {
        estadoid: 'RS',
        value: 'Guaíba',
        label: 'Guaíba',
    },
    {
        estadoid: 'RS',
        value: 'Guaporé',
        label: 'Guaporé',
    },
    {
        estadoid: 'RS',
        value: 'Guarani das Missões',
        label: 'Guarani das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Harmonia',
        label: 'Harmonia',
    },
    {
        estadoid: 'RS',
        value: 'Herval',
        label: 'Herval',
    },
    {
        estadoid: 'RS',
        value: 'Herveiras',
        label: 'Herveiras',
    },
    {
        estadoid: 'RS',
        value: 'Horizontina',
        label: 'Horizontina',
    },
    {
        estadoid: 'RS',
        value: 'Hulha Negra',
        label: 'Hulha Negra',
    },
    {
        estadoid: 'RS',
        value: 'Humaitá',
        label: 'Humaitá',
    },
    {
        estadoid: 'RS',
        value: 'Ibarama',
        label: 'Ibarama',
    },
    {
        estadoid: 'RS',
        value: 'Ibiaçá',
        label: 'Ibiaçá',
    },
    {
        estadoid: 'RS',
        value: 'Ibiraiaras',
        label: 'Ibiraiaras',
    },
    {
        estadoid: 'RS',
        value: 'Ibirapuitã',
        label: 'Ibirapuitã',
    },
    {
        estadoid: 'RS',
        value: 'Ibirubá',
        label: 'Ibirubá',
    },
    {
        estadoid: 'RS',
        value: 'Igrejinha',
        label: 'Igrejinha',
    },
    {
        estadoid: 'RS',
        value: 'Ijuí',
        label: 'Ijuí',
    },
    {
        estadoid: 'RS',
        value: 'Ilópolis',
        label: 'Ilópolis',
    },
    {
        estadoid: 'RS',
        value: 'Imbé',
        label: 'Imbé',
    },
    {
        estadoid: 'RS',
        value: 'Imigrante',
        label: 'Imigrante',
    },
    {
        estadoid: 'RS',
        value: 'Independência',
        label: 'Independência',
    },
    {
        estadoid: 'RS',
        value: 'Inhacorá',
        label: 'Inhacorá',
    },
    {
        estadoid: 'RS',
        value: 'Ipê',
        label: 'Ipê',
    },
    {
        estadoid: 'RS',
        value: 'Ipiranga do Sul',
        label: 'Ipiranga do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Iraí',
        label: 'Iraí',
    },
    {
        estadoid: 'RS',
        value: 'Itaara',
        label: 'Itaara',
    },
    {
        estadoid: 'RS',
        value: 'Itacurubi',
        label: 'Itacurubi',
    },
    {
        estadoid: 'RS',
        value: 'Itapuca',
        label: 'Itapuca',
    },
    {
        estadoid: 'RS',
        value: 'Itaqui',
        label: 'Itaqui',
    },
    {
        estadoid: 'RS',
        value: 'Itati',
        label: 'Itati',
    },
    {
        estadoid: 'RS',
        value: 'Itatiba do Sul',
        label: 'Itatiba do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Ivorá',
        label: 'Ivorá',
    },
    {
        estadoid: 'RS',
        value: 'Ivoti',
        label: 'Ivoti',
    },
    {
        estadoid: 'RS',
        value: 'Jaboticaba',
        label: 'Jaboticaba',
    },
    {
        estadoid: 'RS',
        value: 'Jacuizinho',
        label: 'Jacuizinho',
    },
    {
        estadoid: 'RS',
        value: 'Jacutinga',
        label: 'Jacutinga',
    },
    {
        estadoid: 'RS',
        value: 'Jaguarão',
        label: 'Jaguarão',
    },
    {
        estadoid: 'RS',
        value: 'Jaguari',
        label: 'Jaguari',
    },
    {
        estadoid: 'RS',
        value: 'Jaquirana',
        label: 'Jaquirana',
    },
    {
        estadoid: 'RS',
        value: 'Jari',
        label: 'Jari',
    },
    {
        estadoid: 'RS',
        value: 'Jóia',
        label: 'Jóia',
    },
    {
        estadoid: 'RS',
        value: 'Júlio de Castilhos',
        label: 'Júlio de Castilhos',
    },
    {
        estadoid: 'RS',
        value: 'Lagoa Bonita do Sul',
        label: 'Lagoa Bonita do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Lagoa dos Três Cantos',
        label: 'Lagoa dos Três Cantos',
    },
    {
        estadoid: 'RS',
        value: 'Lagoa Vermelha',
        label: 'Lagoa Vermelha',
    },
    {
        estadoid: 'RS',
        value: 'Lagoão',
        label: 'Lagoão',
    },
    {
        estadoid: 'RS',
        value: 'Lajeado',
        label: 'Lajeado',
    },
    {
        estadoid: 'RS',
        value: 'Lajeado do Bugre',
        label: 'Lajeado do Bugre',
    },
    {
        estadoid: 'RS',
        value: 'Lavras do Sul',
        label: 'Lavras do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Liberato Salzano',
        label: 'Liberato Salzano',
    },
    {
        estadoid: 'RS',
        value: 'Lindolfo Collor',
        label: 'Lindolfo Collor',
    },
    {
        estadoid: 'RS',
        value: 'Linha Nova',
        label: 'Linha Nova',
    },
    {
        estadoid: 'RS',
        value: 'Maçambara',
        label: 'Maçambara',
    },
    {
        estadoid: 'RS',
        value: 'Machadinho',
        label: 'Machadinho',
    },
    {
        estadoid: 'RS',
        value: 'Mampituba',
        label: 'Mampituba',
    },
    {
        estadoid: 'RS',
        value: 'Manoel Viana',
        label: 'Manoel Viana',
    },
    {
        estadoid: 'RS',
        value: 'Maquiné',
        label: 'Maquiné',
    },
    {
        estadoid: 'RS',
        value: 'Maratá',
        label: 'Maratá',
    },
    {
        estadoid: 'RS',
        value: 'Marau',
        label: 'Marau',
    },
    {
        estadoid: 'RS',
        value: 'Marcelino Ramos',
        label: 'Marcelino Ramos',
    },
    {
        estadoid: 'RS',
        value: 'Mariana Pimentel',
        label: 'Mariana Pimentel',
    },
    {
        estadoid: 'RS',
        value: 'Mariano Moro',
        label: 'Mariano Moro',
    },
    {
        estadoid: 'RS',
        value: 'Marques de Souza',
        label: 'Marques de Souza',
    },
    {
        estadoid: 'RS',
        value: 'Mata',
        label: 'Mata',
    },
    {
        estadoid: 'RS',
        value: 'Mato Castelhano',
        label: 'Mato Castelhano',
    },
    {
        estadoid: 'RS',
        value: 'Mato Leitão',
        label: 'Mato Leitão',
    },
    {
        estadoid: 'RS',
        value: 'Mato Queimado',
        label: 'Mato Queimado',
    },
    {
        estadoid: 'RS',
        value: 'Maximiliano de Almeida',
        label: 'Maximiliano de Almeida',
    },
    {
        estadoid: 'RS',
        value: 'Minas do Leão',
        label: 'Minas do Leão',
    },
    {
        estadoid: 'RS',
        value: 'Miraguaí',
        label: 'Miraguaí',
    },
    {
        estadoid: 'RS',
        value: 'Montauri',
        label: 'Montauri',
    },
    {
        estadoid: 'RS',
        value: 'Monte Alegre dos Campos',
        label: 'Monte Alegre dos Campos',
    },
    {
        estadoid: 'RS',
        value: 'Monte Belo do Sul',
        label: 'Monte Belo do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Montenegro',
        label: 'Montenegro',
    },
    {
        estadoid: 'RS',
        value: 'Mormaço',
        label: 'Mormaço',
    },
    {
        estadoid: 'RS',
        value: 'Morrinhos do Sul',
        label: 'Morrinhos do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Morro Redondo',
        label: 'Morro Redondo',
    },
    {
        estadoid: 'RS',
        value: 'Morro Reuter',
        label: 'Morro Reuter',
    },
    {
        estadoid: 'RS',
        value: 'Mostardas',
        label: 'Mostardas',
    },
    {
        estadoid: 'RS',
        value: 'Muçum',
        label: 'Muçum',
    },
    {
        estadoid: 'RS',
        value: 'Muitos Capões',
        label: 'Muitos Capões',
    },
    {
        estadoid: 'RS',
        value: 'Muliterno',
        label: 'Muliterno',
    },
    {
        estadoid: 'RS',
        value: 'Não-Me-Toque',
        label: 'Não-Me-Toque',
    },
    {
        estadoid: 'RS',
        value: 'Nicolau Vergueiro',
        label: 'Nicolau Vergueiro',
    },
    {
        estadoid: 'RS',
        value: 'Nonoai',
        label: 'Nonoai',
    },
    {
        estadoid: 'RS',
        value: 'Nova Alvorada',
        label: 'Nova Alvorada',
    },
    {
        estadoid: 'RS',
        value: 'Nova Araçá',
        label: 'Nova Araçá',
    },
    {
        estadoid: 'RS',
        value: 'Nova Bassano',
        label: 'Nova Bassano',
    },
    {
        estadoid: 'RS',
        value: 'Nova Boa Vista',
        label: 'Nova Boa Vista',
    },
    {
        estadoid: 'RS',
        value: 'Nova Bréscia',
        label: 'Nova Bréscia',
    },
    {
        estadoid: 'RS',
        value: 'Nova Candelária',
        label: 'Nova Candelária',
    },
    {
        estadoid: 'RS',
        value: 'Nova Esperança do Sul',
        label: 'Nova Esperança do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Nova Hartz',
        label: 'Nova Hartz',
    },
    {
        estadoid: 'RS',
        value: 'Nova Pádua',
        label: 'Nova Pádua',
    },
    {
        estadoid: 'RS',
        value: 'Nova Palma',
        label: 'Nova Palma',
    },
    {
        estadoid: 'RS',
        value: 'Nova Petrópolis',
        label: 'Nova Petrópolis',
    },
    {
        estadoid: 'RS',
        value: 'Nova Prata',
        label: 'Nova Prata',
    },
    {
        estadoid: 'RS',
        value: 'Nova Ramada',
        label: 'Nova Ramada',
    },
    {
        estadoid: 'RS',
        value: 'Nova Roma do Sul',
        label: 'Nova Roma do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Nova Santa Rita',
        label: 'Nova Santa Rita',
    },
    {
        estadoid: 'RS',
        value: 'Novo Barreiro',
        label: 'Novo Barreiro',
    },
    {
        estadoid: 'RS',
        value: 'Novo Cabrais',
        label: 'Novo Cabrais',
    },
    {
        estadoid: 'RS',
        value: 'Novo Hamburgo',
        label: 'Novo Hamburgo',
    },
    {
        estadoid: 'RS',
        value: 'Novo Machado',
        label: 'Novo Machado',
    },
    {
        estadoid: 'RS',
        value: 'Novo Tiradentes',
        label: 'Novo Tiradentes',
    },
    {
        estadoid: 'RS',
        value: 'Novo Xingu',
        label: 'Novo Xingu',
    },
    {
        estadoid: 'RS',
        value: 'Osório',
        label: 'Osório',
    },
    {
        estadoid: 'RS',
        value: 'Paim Filho',
        label: 'Paim Filho',
    },
    {
        estadoid: 'RS',
        value: 'Palmares do Sul',
        label: 'Palmares do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Palmeira das Missões',
        label: 'Palmeira das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Palmitinho',
        label: 'Palmitinho',
    },
    {
        estadoid: 'RS',
        value: 'Panambi',
        label: 'Panambi',
    },
    {
        estadoid: 'RS',
        value: 'Pântano Grande',
        label: 'Pântano Grande',
    },
    {
        estadoid: 'RS',
        value: 'Paraí',
        label: 'Paraí',
    },
    {
        estadoid: 'RS',
        value: 'Paraíso do Sul',
        label: 'Paraíso do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Pareci Novo',
        label: 'Pareci Novo',
    },
    {
        estadoid: 'RS',
        value: 'Parobé',
        label: 'Parobé',
    },
    {
        estadoid: 'RS',
        value: 'Passa Sete',
        label: 'Passa Sete',
    },
    {
        estadoid: 'RS',
        value: 'Passo do Sobrado',
        label: 'Passo do Sobrado',
    },
    {
        estadoid: 'RS',
        value: 'Passo Fundo',
        label: 'Passo Fundo',
    },
    {
        estadoid: 'RS',
        value: 'Paulo Bento',
        label: 'Paulo Bento',
    },
    {
        estadoid: 'RS',
        value: 'Paverama',
        label: 'Paverama',
    },
    {
        estadoid: 'RS',
        value: 'Pedras Altas',
        label: 'Pedras Altas',
    },
    {
        estadoid: 'RS',
        value: 'Pedro Osório',
        label: 'Pedro Osório',
    },
    {
        estadoid: 'RS',
        value: 'Pejuçara',
        label: 'Pejuçara',
    },
    {
        estadoid: 'RS',
        value: 'Pelotas',
        label: 'Pelotas',
    },
    {
        estadoid: 'RS',
        value: 'Picada Café',
        label: 'Picada Café',
    },
    {
        estadoid: 'RS',
        value: 'Pinhal',
        label: 'Pinhal',
    },
    {
        estadoid: 'RS',
        value: 'Pinhal da Serra',
        label: 'Pinhal da Serra',
    },
    {
        estadoid: 'RS',
        value: 'Pinhal Grande',
        label: 'Pinhal Grande',
    },
    {
        estadoid: 'RS',
        value: 'Pinheirinho do Vale',
        label: 'Pinheirinho do Vale',
    },
    {
        estadoid: 'RS',
        value: 'Pinheiro Machado',
        label: 'Pinheiro Machado',
    },
    {
        estadoid: 'RS',
        value: 'Pirapó',
        label: 'Pirapó',
    },
    {
        estadoid: 'RS',
        value: 'Piratini',
        label: 'Piratini',
    },
    {
        estadoid: 'RS',
        value: 'Planalto',
        label: 'Planalto',
    },
    {
        estadoid: 'RS',
        value: 'Poço das Antas',
        label: 'Poço das Antas',
    },
    {
        estadoid: 'RS',
        value: 'Pontão',
        label: 'Pontão',
    },
    {
        estadoid: 'RS',
        value: 'Ponte Preta',
        label: 'Ponte Preta',
    },
    {
        estadoid: 'RS',
        value: 'Portão',
        label: 'Portão',
    },
    {
        estadoid: 'RS',
        label: 'Porto Alegre',
        value: 'Porto Alegre',
    },
    {
        estadoid: 'RS',
        value: 'Porto Lucena',
        label: 'Porto Lucena',
    },
    {
        estadoid: 'RS',
        value: 'Porto Mauá',
        label: 'Porto Mauá',
    },
    {
        estadoid: 'RS',
        value: 'Porto Vera Cruz',
        label: 'Porto Vera Cruz',
    },
    {
        estadoid: 'RS',
        value: 'Porto Xavier',
        label: 'Porto Xavier',
    },
    {
        estadoid: 'RS',
        value: 'Pouso Novo',
        label: 'Pouso Novo',
    },
    {
        estadoid: 'RS',
        value: 'Presidente Lucena',
        label: 'Presidente Lucena',
    },
    {
        estadoid: 'RS',
        value: 'Progresso',
        label: 'Progresso',
    },
    {
        estadoid: 'RS',
        value: 'Protásio Alves',
        label: 'Protásio Alves',
    },
    {
        estadoid: 'RS',
        value: 'Putinga',
        label: 'Putinga',
    },
    {
        estadoid: 'RS',
        value: 'Quaraí',
        label: 'Quaraí',
    },
    {
        estadoid: 'RS',
        value: 'Quatro Irmãos',
        label: 'Quatro Irmãos',
    },
    {
        estadoid: 'RS',
        value: 'Quevedos',
        label: 'Quevedos',
    },
    {
        estadoid: 'RS',
        value: 'Quinze de Novembro',
        label: 'Quinze de Novembro',
    },
    {
        estadoid: 'RS',
        value: 'Redentora',
        label: 'Redentora',
    },
    {
        estadoid: 'RS',
        value: 'Relvado',
        label: 'Relvado',
    },
    {
        estadoid: 'RS',
        value: 'Restinga Seca',
        label: 'Restinga Seca',
    },
    {
        estadoid: 'RS',
        value: 'Rio dos Índios',
        label: 'Rio dos Índios',
    },
    {
        estadoid: 'RS',
        value: 'Rio Grande',
        label: 'Rio Grande',
    },
    {
        estadoid: 'RS',
        value: 'Rio Pardo',
        label: 'Rio Pardo',
    },
    {
        estadoid: 'RS',
        value: 'Riozinho',
        label: 'Riozinho',
    },
    {
        estadoid: 'RS',
        value: 'Roca Sales',
        label: 'Roca Sales',
    },
    {
        estadoid: 'RS',
        value: 'Rodeio Bonito',
        label: 'Rodeio Bonito',
    },
    {
        estadoid: 'RS',
        value: 'Rolador',
        label: 'Rolador',
    },
    {
        estadoid: 'RS',
        value: 'Rolante',
        label: 'Rolante',
    },
    {
        estadoid: 'RS',
        value: 'Ronda Alta',
        label: 'Ronda Alta',
    },
    {
        estadoid: 'RS',
        value: 'Rondinha',
        label: 'Rondinha',
    },
    {
        estadoid: 'RS',
        value: 'Roque Gonzales',
        label: 'Roque Gonzales',
    },
    {
        estadoid: 'RS',
        value: 'Rosário do Sul',
        label: 'Rosário do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Sagrada Família',
        label: 'Sagrada Família',
    },
    {
        estadoid: 'RS',
        value: 'Saldanha Marinho',
        label: 'Saldanha Marinho',
    },
    {
        estadoid: 'RS',
        value: 'Salto do Jacuí',
        label: 'Salto do Jacuí',
    },
    {
        estadoid: 'RS',
        value: 'Salvador das Missões',
        label: 'Salvador das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Salvador do Sul',
        label: 'Salvador do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Sananduva',
        label: 'Sananduva',
    },
    {
        estadoid: 'RS',
        value: 'Santa Bárbara do Sul',
        label: 'Santa Bárbara do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Santa Cecília do Sul',
        label: 'Santa Cecília do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Santa Clara do Sul',
        label: 'Santa Clara do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Santa Cruz do Sul',
        label: 'Santa Cruz do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Santa Margarida do Sul',
        label: 'Santa Margarida do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Santa Maria',
        label: 'Santa Maria',
    },
    {
        estadoid: 'RS',
        value: 'Santa Maria do Herval',
        label: 'Santa Maria do Herval',
    },
    {
        estadoid: 'RS',
        value: 'Santa Rosa',
        label: 'Santa Rosa',
    },
    {
        estadoid: 'RS',
        value: 'Santa Tereza',
        label: 'Santa Tereza',
    },
    {
        estadoid: 'RS',
        value: 'Santa Vitória do Palmar',
        label: 'Santa Vitória do Palmar',
    },
    {
        estadoid: 'RS',
        value: 'Santana da Boa Vista',
        label: 'Santana da Boa Vista',
    },
    {
        estadoid: 'RS',
        value: 'Santana do Livramento',
        label: 'Santana do Livramento',
    },
    {
        estadoid: 'RS',
        value: 'Santiago',
        label: 'Santiago',
    },
    {
        estadoid: 'RS',
        value: 'Santo Ângelo',
        label: 'Santo Ângelo',
    },
    {
        estadoid: 'RS',
        value: 'Santo Antônio da Patrulha',
        label: 'Santo Antônio da Patrulha',
    },
    {
        estadoid: 'RS',
        value: 'Santo Antônio das Missões',
        label: 'Santo Antônio das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Santo Antônio do Palma',
        label: 'Santo Antônio do Palma',
    },
    {
        estadoid: 'RS',
        value: 'Santo Antônio do Planalto',
        label: 'Santo Antônio do Planalto',
    },
    {
        estadoid: 'RS',
        value: 'Santo Augusto',
        label: 'Santo Augusto',
    },
    {
        estadoid: 'RS',
        value: 'Santo Cristo',
        label: 'Santo Cristo',
    },
    {
        estadoid: 'RS',
        value: 'Santo Expedito do Sul',
        label: 'Santo Expedito do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São Borja',
        label: 'São Borja',
    },
    {
        estadoid: 'RS',
        value: 'São Domingos do Sul',
        label: 'São Domingos do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São Francisco de Assis',
        label: 'São Francisco de Assis',
    },
    {
        estadoid: 'RS',
        value: 'São Francisco de Paula',
        label: 'São Francisco de Paula',
    },
    {
        estadoid: 'RS',
        value: 'São Gabriel',
        label: 'São Gabriel',
    },
    {
        estadoid: 'RS',
        value: 'São Jerônimo',
        label: 'São Jerônimo',
    },
    {
        estadoid: 'RS',
        value: 'São João da Urtiga',
        label: 'São João da Urtiga',
    },
    {
        estadoid: 'RS',
        value: 'São João do Polêsine',
        label: 'São João do Polêsine',
    },
    {
        estadoid: 'RS',
        value: 'São Jorge',
        label: 'São Jorge',
    },
    {
        estadoid: 'RS',
        value: 'São José das Missões',
        label: 'São José das Missões',
    },
    {
        estadoid: 'RS',
        value: 'São José do Herval',
        label: 'São José do Herval',
    },
    {
        estadoid: 'RS',
        value: 'São José do Hortêncio',
        label: 'São José do Hortêncio',
    },
    {
        estadoid: 'RS',
        value: 'São José do Inhacorá',
        label: 'São José do Inhacorá',
    },
    {
        estadoid: 'RS',
        value: 'São José do Norte',
        label: 'São José do Norte',
    },
    {
        estadoid: 'RS',
        value: 'São José do Ouro',
        label: 'São José do Ouro',
    },
    {
        estadoid: 'RS',
        value: 'São José do Sul',
        label: 'São José do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São José dos Ausentes',
        label: 'São José dos Ausentes',
    },
    {
        estadoid: 'RS',
        value: 'São Leopoldo',
        label: 'São Leopoldo',
    },
    {
        estadoid: 'RS',
        value: 'São Lourenço do Sul',
        label: 'São Lourenço do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São Luiz Gonzaga',
        label: 'São Luiz Gonzaga',
    },
    {
        estadoid: 'RS',
        value: 'São Marcos',
        label: 'São Marcos',
    },
    {
        estadoid: 'RS',
        value: 'São Martinho',
        label: 'São Martinho',
    },
    {
        estadoid: 'RS',
        value: 'São Martinho da Serra',
        label: 'São Martinho da Serra',
    },
    {
        estadoid: 'RS',
        value: 'São Miguel das Missões',
        label: 'São Miguel das Missões',
    },
    {
        estadoid: 'RS',
        value: 'São Nicolau',
        label: 'São Nicolau',
    },
    {
        estadoid: 'RS',
        value: 'São Paulo das Missões',
        label: 'São Paulo das Missões',
    },
    {
        estadoid: 'RS',
        value: 'São Pedro da Serra',
        label: 'São Pedro da Serra',
    },
    {
        estadoid: 'RS',
        value: 'São Pedro das Missões',
        label: 'São Pedro das Missões',
    },
    {
        estadoid: 'RS',
        value: 'São Pedro do Butiá',
        label: 'São Pedro do Butiá',
    },
    {
        estadoid: 'RS',
        value: 'São Pedro do Sul',
        label: 'São Pedro do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São Sebastião do Caí',
        label: 'São Sebastião do Caí',
    },
    {
        estadoid: 'RS',
        value: 'São Sepé',
        label: 'São Sepé',
    },
    {
        estadoid: 'RS',
        value: 'São Valentim',
        label: 'São Valentim',
    },
    {
        estadoid: 'RS',
        value: 'São Valentim do Sul',
        label: 'São Valentim do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São Valério do Sul',
        label: 'São Valério do Sul',
    },
    {
        estadoid: 'RS',
        value: 'São Vendelino',
        label: 'São Vendelino',
    },
    {
        estadoid: 'RS',
        value: 'São Vicente do Sul',
        label: 'São Vicente do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Sapiranga',
        label: 'Sapiranga',
    },
    {
        estadoid: 'RS',
        value: 'Sapucaia do Sul',
        label: 'Sapucaia do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Sarandi',
        label: 'Sarandi',
    },
    {
        estadoid: 'RS',
        value: 'Seberi',
        label: 'Seberi',
    },
    {
        estadoid: 'RS',
        value: 'Sede Nova',
        label: 'Sede Nova',
    },
    {
        estadoid: 'RS',
        value: 'Segredo',
        label: 'Segredo',
    },
    {
        estadoid: 'RS',
        value: 'Selbach',
        label: 'Selbach',
    },
    {
        estadoid: 'RS',
        value: 'Senador Salgado Filho',
        label: 'Senador Salgado Filho',
    },
    {
        estadoid: 'RS',
        value: 'Sentinela do Sul',
        label: 'Sentinela do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Serafina Corrêa',
        label: 'Serafina Corrêa',
    },
    {
        estadoid: 'RS',
        value: 'Sério',
        label: 'Sério',
    },
    {
        estadoid: 'RS',
        value: 'Sertão',
        label: 'Sertão',
    },
    {
        estadoid: 'RS',
        value: 'Sertão Santana',
        label: 'Sertão Santana',
    },
    {
        estadoid: 'RS',
        value: 'Sete de Setembro',
        label: 'Sete de Setembro',
    },
    {
        estadoid: 'RS',
        value: 'Severiano de Almeida',
        label: 'Severiano de Almeida',
    },
    {
        estadoid: 'RS',
        value: 'Silveira Martins',
        label: 'Silveira Martins',
    },
    {
        estadoid: 'RS',
        value: 'Sinimbu',
        label: 'Sinimbu',
    },
    {
        estadoid: 'RS',
        value: 'Sobradinho',
        label: 'Sobradinho',
    },
    {
        estadoid: 'RS',
        value: 'Soledade',
        label: 'Soledade',
    },
    {
        estadoid: 'RS',
        value: 'Tabaí',
        label: 'Tabaí',
    },
    {
        estadoid: 'RS',
        value: 'Tapejara',
        label: 'Tapejara',
    },
    {
        estadoid: 'RS',
        value: 'Tapera',
        label: 'Tapera',
    },
    {
        estadoid: 'RS',
        value: 'Tapes',
        label: 'Tapes',
    },
    {
        estadoid: 'RS',
        value: 'Taquara',
        label: 'Taquara',
    },
    {
        estadoid: 'RS',
        value: 'Taquari',
        label: 'Taquari',
    },
    {
        estadoid: 'RS',
        value: 'Taquaruçu do Sul',
        label: 'Taquaruçu do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Tavares',
        label: 'Tavares',
    },
    {
        estadoid: 'RS',
        value: 'Tenente Portela',
        label: 'Tenente Portela',
    },
    {
        estadoid: 'RS',
        value: 'Terra de Areia',
        label: 'Terra de Areia',
    },
    {
        estadoid: 'RS',
        value: 'Teutônia',
        label: 'Teutônia',
    },
    {
        estadoid: 'RS',
        value: 'Tio Hugo',
        label: 'Tio Hugo',
    },
    {
        estadoid: 'RS',
        value: 'Tiradentes do Sul',
        label: 'Tiradentes do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Toropi',
        label: 'Toropi',
    },
    {
        estadoid: 'RS',
        value: 'Torres',
        label: 'Torres',
    },
    {
        estadoid: 'RS',
        value: 'Tramandaí',
        label: 'Tramandaí',
    },
    {
        estadoid: 'RS',
        value: 'Travesseiro',
        label: 'Travesseiro',
    },
    {
        estadoid: 'RS',
        value: 'Três Arroios',
        label: 'Três Arroios',
    },
    {
        estadoid: 'RS',
        value: 'Três Cachoeiras',
        label: 'Três Cachoeiras',
    },
    {
        estadoid: 'RS',
        value: 'Três Coroas',
        label: 'Três Coroas',
    },
    {
        estadoid: 'RS',
        value: 'Três de Maio',
        label: 'Três de Maio',
    },
    {
        estadoid: 'RS',
        value: 'Três Forquilhas',
        label: 'Três Forquilhas',
    },
    {
        estadoid: 'RS',
        value: 'Três Palmeiras',
        label: 'Três Palmeiras',
    },
    {
        estadoid: 'RS',
        value: 'Três Passos',
        label: 'Três Passos',
    },
    {
        estadoid: 'RS',
        value: 'Trindade do Sul',
        label: 'Trindade do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Triunfo',
        label: 'Triunfo',
    },
    {
        estadoid: 'RS',
        value: 'Tucunduva',
        label: 'Tucunduva',
    },
    {
        estadoid: 'RS',
        value: 'Tunas',
        label: 'Tunas',
    },
    {
        estadoid: 'RS',
        value: 'Tupanci do Sul',
        label: 'Tupanci do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Tupanciretã',
        label: 'Tupanciretã',
    },
    {
        estadoid: 'RS',
        value: 'Tupandi',
        label: 'Tupandi',
    },
    {
        estadoid: 'RS',
        value: 'Tuparendi',
        label: 'Tuparendi',
    },
    {
        estadoid: 'RS',
        value: 'Turuçu',
        label: 'Turuçu',
    },
    {
        estadoid: 'RS',
        value: 'Ubiretama',
        label: 'Ubiretama',
    },
    {
        estadoid: 'RS',
        value: 'União da Serra',
        label: 'União da Serra',
    },
    {
        estadoid: 'RS',
        value: 'Unistalda',
        label: 'Unistalda',
    },
    {
        estadoid: 'RS',
        value: 'Uruguaiana',
        label: 'Uruguaiana',
    },
    {
        estadoid: 'RS',
        value: 'Vacaria',
        label: 'Vacaria',
    },
    {
        estadoid: 'RS',
        value: 'Vale do Sol',
        label: 'Vale do Sol',
    },
    {
        estadoid: 'RS',
        value: 'Vale Real',
        label: 'Vale Real',
    },
    {
        estadoid: 'RS',
        value: 'Vale Verde',
        label: 'Vale Verde',
    },
    {
        estadoid: 'RS',
        value: 'Vanini',
        label: 'Vanini',
    },
    {
        estadoid: 'RS',
        value: 'Venâncio Aires',
        label: 'Venâncio Aires',
    },
    {
        estadoid: 'RS',
        value: 'Vera Cruz',
        label: 'Vera Cruz',
    },
    {
        estadoid: 'RS',
        value: 'Veranópolis',
        label: 'Veranópolis',
    },
    {
        estadoid: 'RS',
        value: 'Vespasiano Correa',
        label: 'Vespasiano Correa',
    },
    {
        estadoid: 'RS',
        value: 'Viadutos',
        label: 'Viadutos',
    },
    {
        estadoid: 'RS',
        value: 'Viamão',
        label: 'Viamão',
    },
    {
        estadoid: 'RS',
        value: 'Vicente Dutra',
        label: 'Vicente Dutra',
    },
    {
        estadoid: 'RS',
        value: 'Victor Graeff',
        label: 'Victor Graeff',
    },
    {
        estadoid: 'RS',
        value: 'Vila Flores',
        label: 'Vila Flores',
    },
    {
        estadoid: 'RS',
        value: 'Vila Lângaro',
        label: 'Vila Lângaro',
    },
    {
        estadoid: 'RS',
        value: 'Vila Maria',
        label: 'Vila Maria',
    },
    {
        estadoid: 'RS',
        value: 'Vila Nova do Sul',
        label: 'Vila Nova do Sul',
    },
    {
        estadoid: 'RS',
        value: 'Vista Alegre',
        label: 'Vista Alegre',
    },
    {
        estadoid: 'RS',
        value: 'Vista Alegre do Prata',
        label: 'Vista Alegre do Prata',
    },
    {
        estadoid: 'RS',
        value: 'Vista Gaúcha',
        label: 'Vista Gaúcha',
    },
    {
        estadoid: 'RS',
        value: 'Vitória das Missões',
        label: 'Vitória das Missões',
    },
    {
        estadoid: 'RS',
        value: 'Westfália',
        label: 'Westfália',
    },
    {
        estadoid: 'RS',
        value: 'Xangri-lá',
        label: 'Xangri-lá',
    },
    {
        estadoid: 'SC',
        value: 'Abdon Batista',
        label: 'Abdon Batista',
    },
    {
        estadoid: 'SC',
        value: 'Abelardo Luz',
        label: 'Abelardo Luz',
    },
    {
        estadoid: 'SC',
        value: 'Agrolândia',
        label: 'Agrolândia',
    },
    {
        estadoid: 'SC',
        value: 'Agronômica',
        label: 'Agronômica',
    },
    {
        estadoid: 'SC',
        value: 'Água Doce',
        label: 'Água Doce',
    },
    {
        estadoid: 'SC',
        value: 'Águas de Chapecó',
        label: 'Águas de Chapecó',
    },
    {
        estadoid: 'SC',
        value: 'Águas Frias',
        label: 'Águas Frias',
    },
    {
        estadoid: 'SC',
        value: 'Águas Mornas',
        label: 'Águas Mornas',
    },
    {
        estadoid: 'SC',
        value: 'Alfredo Wagner',
        label: 'Alfredo Wagner',
    },
    {
        estadoid: 'SC',
        value: 'Alto Bela Vista',
        label: 'Alto Bela Vista',
    },
    {
        estadoid: 'SC',
        value: 'Anchieta',
        label: 'Anchieta',
    },
    {
        estadoid: 'SC',
        value: 'Angelina',
        label: 'Angelina',
    },
    {
        estadoid: 'SC',
        value: 'Anita Garibaldi',
        label: 'Anita Garibaldi',
    },
    {
        estadoid: 'SC',
        value: 'Anitápolis',
        label: 'Anitápolis',
    },
    {
        estadoid: 'SC',
        value: 'Antônio Carlos',
        label: 'Antônio Carlos',
    },
    {
        estadoid: 'SC',
        value: 'Apiúna',
        label: 'Apiúna',
    },
    {
        estadoid: 'SC',
        value: 'Arabutã',
        label: 'Arabutã',
    },
    {
        estadoid: 'SC',
        value: 'Araquari',
        label: 'Araquari',
    },
    {
        estadoid: 'SC',
        value: 'Araranguá',
        label: 'Araranguá',
    },
    {
        estadoid: 'SC',
        value: 'Armazém',
        label: 'Armazém',
    },
    {
        estadoid: 'SC',
        value: 'Arroio Trinta',
        label: 'Arroio Trinta',
    },
    {
        estadoid: 'SC',
        value: 'Arvoredo',
        label: 'Arvoredo',
    },
    {
        estadoid: 'SC',
        value: 'Ascurra',
        label: 'Ascurra',
    },
    {
        estadoid: 'SC',
        value: 'Atalanta',
        label: 'Atalanta',
    },
    {
        estadoid: 'SC',
        value: 'Aurora',
        label: 'Aurora',
    },
    {
        estadoid: 'SC',
        value: 'Balneário Arroio do Silva',
        label: 'Balneário Arroio do Silva',
    },
    {
        estadoid: 'SC',
        value: 'Balneário Barra do Sul',
        label: 'Balneário Barra do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Balneário Camboriú',
        label: 'Balneário Camboriú',
    },
    {
        estadoid: 'SC',
        value: 'Balneário Gaivota',
        label: 'Balneário Gaivota',
    },
    {
        estadoid: 'SC',
        value: 'Bandeirante',
        label: 'Bandeirante',
    },
    {
        estadoid: 'SC',
        value: 'Barra Bonita',
        label: 'Barra Bonita',
    },
    {
        estadoid: 'SC',
        value: 'Barra Velha',
        label: 'Barra Velha',
    },
    {
        estadoid: 'SC',
        value: 'Bela Vista do Toldo',
        label: 'Bela Vista do Toldo',
    },
    {
        estadoid: 'SC',
        value: 'Belmonte',
        label: 'Belmonte',
    },
    {
        estadoid: 'SC',
        value: 'Benedito Novo',
        label: 'Benedito Novo',
    },
    {
        estadoid: 'SC',
        value: 'Biguaçu',
        label: 'Biguaçu',
    },
    {
        estadoid: 'SC',
        value: 'Blumenau',
        label: 'Blumenau',
    },
    {
        estadoid: 'SC',
        value: 'Bocaina do Sul',
        label: 'Bocaina do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Bom Jardim da Serra',
        label: 'Bom Jardim da Serra',
    },
    {
        estadoid: 'SC',
        value: 'Bom Jesus',
        label: 'Bom Jesus',
    },
    {
        estadoid: 'SC',
        value: 'Bom Jesus do Oeste',
        label: 'Bom Jesus do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'Bom Retiro',
        label: 'Bom Retiro',
    },
    {
        estadoid: 'SC',
        value: 'Bombinhas',
        label: 'Bombinhas',
    },
    {
        estadoid: 'SC',
        value: 'Botuverá',
        label: 'Botuverá',
    },
    {
        estadoid: 'SC',
        value: 'Braço do Norte',
        label: 'Braço do Norte',
    },
    {
        estadoid: 'SC',
        value: 'Braço do Trombudo',
        label: 'Braço do Trombudo',
    },
    {
        estadoid: 'SC',
        value: 'Brunópolis',
        label: 'Brunópolis',
    },
    {
        estadoid: 'SC',
        value: 'Brusque',
        label: 'Brusque',
    },
    {
        estadoid: 'SC',
        value: 'Caçador',
        label: 'Caçador',
    },
    {
        estadoid: 'SC',
        value: 'Caibi',
        label: 'Caibi',
    },
    {
        estadoid: 'SC',
        value: 'Calmon',
        label: 'Calmon',
    },
    {
        estadoid: 'SC',
        value: 'Camboriú',
        label: 'Camboriú',
    },
    {
        estadoid: 'SC',
        value: 'Campo Alegre',
        label: 'Campo Alegre',
    },
    {
        estadoid: 'SC',
        value: 'Campo Belo do Sul',
        label: 'Campo Belo do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Campo Erê',
        label: 'Campo Erê',
    },
    {
        estadoid: 'SC',
        value: 'Campos Novos',
        label: 'Campos Novos',
    },
    {
        estadoid: 'SC',
        value: 'Canelinha',
        label: 'Canelinha',
    },
    {
        estadoid: 'SC',
        value: 'Canoinhas',
        label: 'Canoinhas',
    },
    {
        estadoid: 'SC',
        value: 'Capão Alto',
        label: 'Capão Alto',
    },
    {
        estadoid: 'SC',
        value: 'Capinzal',
        label: 'Capinzal',
    },
    {
        estadoid: 'SC',
        value: 'Capivari de Baixo',
        label: 'Capivari de Baixo',
    },
    {
        estadoid: 'SC',
        value: 'Catanduvas',
        label: 'Catanduvas',
    },
    {
        estadoid: 'SC',
        value: 'Caxambu do Sul',
        label: 'Caxambu do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Celso Ramos',
        label: 'Celso Ramos',
    },
    {
        estadoid: 'SC',
        value: 'Cerro Negro',
        label: 'Cerro Negro',
    },
    {
        estadoid: 'SC',
        value: 'Chapadão do Lageado',
        label: 'Chapadão do Lageado',
    },
    {
        estadoid: 'SC',
        value: 'Chapecó',
        label: 'Chapecó',
    },
    {
        estadoid: 'SC',
        value: 'Cocal do Sul',
        label: 'Cocal do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Concórdia',
        label: 'Concórdia',
    },
    {
        estadoid: 'SC',
        value: 'Cordilheira Alta',
        label: 'Cordilheira Alta',
    },
    {
        estadoid: 'SC',
        value: 'Coronel Freitas',
        label: 'Coronel Freitas',
    },
    {
        estadoid: 'SC',
        value: 'Coronel Martins',
        label: 'Coronel Martins',
    },
    {
        estadoid: 'SC',
        value: 'Correia Pinto',
        label: 'Correia Pinto',
    },
    {
        estadoid: 'SC',
        value: 'Corupá',
        label: 'Corupá',
    },
    {
        estadoid: 'SC',
        value: 'Criciúma',
        label: 'Criciúma',
    },
    {
        estadoid: 'SC',
        value: 'Cunha Porã',
        label: 'Cunha Porã',
    },
    {
        estadoid: 'SC',
        value: 'Cunhataí',
        label: 'Cunhataí',
    },
    {
        estadoid: 'SC',
        value: 'Curitibanos',
        label: 'Curitibanos',
    },
    {
        estadoid: 'SC',
        value: 'Descanso',
        label: 'Descanso',
    },
    {
        estadoid: 'SC',
        value: 'Dionísio Cerqueira',
        label: 'Dionísio Cerqueira',
    },
    {
        estadoid: 'SC',
        value: 'Dona Emma',
        label: 'Dona Emma',
    },
    {
        estadoid: 'SC',
        value: 'Doutor Pedrinho',
        label: 'Doutor Pedrinho',
    },
    {
        estadoid: 'SC',
        value: 'Entre Rios',
        label: 'Entre Rios',
    },
    {
        estadoid: 'SC',
        value: 'Ermo',
        label: 'Ermo',
    },
    {
        estadoid: 'SC',
        value: 'Erval Velho',
        label: 'Erval Velho',
    },
    {
        estadoid: 'SC',
        value: 'Faxinal dos Guedes',
        label: 'Faxinal dos Guedes',
    },
    {
        estadoid: 'SC',
        value: 'Flor do Sertão',
        label: 'Flor do Sertão',
    },
    {
        estadoid: 'SC',
        label: 'Florianópolis',
        value: 'Florianópolis',
    },
    {
        estadoid: 'SC',
        value: 'Formosa do Sul',
        label: 'Formosa do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Forquilhinha',
        label: 'Forquilhinha',
    },
    {
        estadoid: 'SC',
        value: 'Fraiburgo',
        label: 'Fraiburgo',
    },
    {
        estadoid: 'SC',
        value: 'Frei Rogério',
        label: 'Frei Rogério',
    },
    {
        estadoid: 'SC',
        value: 'Galvão',
        label: 'Galvão',
    },
    {
        estadoid: 'SC',
        value: 'Garopaba',
        label: 'Garopaba',
    },
    {
        estadoid: 'SC',
        value: 'Garuva',
        label: 'Garuva',
    },
    {
        estadoid: 'SC',
        value: 'Gaspar',
        label: 'Gaspar',
    },
    {
        estadoid: 'SC',
        value: 'Governador Celso Ramos',
        label: 'Governador Celso Ramos',
    },
    {
        estadoid: 'SC',
        value: 'Grão Pará',
        label: 'Grão Pará',
    },
    {
        estadoid: 'SC',
        value: 'Gravatal',
        label: 'Gravatal',
    },
    {
        estadoid: 'SC',
        value: 'Guabiruba',
        label: 'Guabiruba',
    },
    {
        estadoid: 'SC',
        value: 'Guaraciaba',
        label: 'Guaraciaba',
    },
    {
        estadoid: 'SC',
        value: 'Guaramirim',
        label: 'Guaramirim',
    },
    {
        estadoid: 'SC',
        value: 'Guarujá do Sul',
        label: 'Guarujá do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Guatambú',
        label: 'Guatambú',
    },
    {
        estadoid: 'SC',
        value: 'Herval d\'Oeste',
        label: 'Herval d\'Oeste',
    },
    {
        estadoid: 'SC',
        value: 'Ibiam',
        label: 'Ibiam',
    },
    {
        estadoid: 'SC',
        value: 'Ibicaré',
        label: 'Ibicaré',
    },
    {
        estadoid: 'SC',
        value: 'Ibirama',
        label: 'Ibirama',
    },
    {
        estadoid: 'SC',
        value: 'Içara',
        label: 'Içara',
    },
    {
        estadoid: 'SC',
        value: 'Ilhota',
        label: 'Ilhota',
    },
    {
        estadoid: 'SC',
        value: 'Imaruí',
        label: 'Imaruí',
    },
    {
        estadoid: 'SC',
        value: 'Imbituba',
        label: 'Imbituba',
    },
    {
        estadoid: 'SC',
        value: 'Imbuia',
        label: 'Imbuia',
    },
    {
        estadoid: 'SC',
        value: 'Indaial',
        label: 'Indaial',
    },
    {
        estadoid: 'SC',
        value: 'Iomerê',
        label: 'Iomerê',
    },
    {
        estadoid: 'SC',
        value: 'Ipira',
        label: 'Ipira',
    },
    {
        estadoid: 'SC',
        value: 'Iporã do Oeste',
        label: 'Iporã do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'Ipuaçu',
        label: 'Ipuaçu',
    },
    {
        estadoid: 'SC',
        value: 'Ipumirim',
        label: 'Ipumirim',
    },
    {
        estadoid: 'SC',
        value: 'Iraceminha',
        label: 'Iraceminha',
    },
    {
        estadoid: 'SC',
        value: 'Irani',
        label: 'Irani',
    },
    {
        estadoid: 'SC',
        value: 'Irati',
        label: 'Irati',
    },
    {
        estadoid: 'SC',
        value: 'Irineópolis',
        label: 'Irineópolis',
    },
    {
        estadoid: 'SC',
        value: 'Itá',
        label: 'Itá',
    },
    {
        estadoid: 'SC',
        value: 'Itaiópolis',
        label: 'Itaiópolis',
    },
    {
        estadoid: 'SC',
        value: 'Itajaí',
        label: 'Itajaí',
    },
    {
        estadoid: 'SC',
        value: 'Itapema',
        label: 'Itapema',
    },
    {
        estadoid: 'SC',
        value: 'Itapiranga',
        label: 'Itapiranga',
    },
    {
        estadoid: 'SC',
        value: 'Itapoá',
        label: 'Itapoá',
    },
    {
        estadoid: 'SC',
        value: 'Ituporanga',
        label: 'Ituporanga',
    },
    {
        estadoid: 'SC',
        value: 'Jaborá',
        label: 'Jaborá',
    },
    {
        estadoid: 'SC',
        value: 'Jacinto Machado',
        label: 'Jacinto Machado',
    },
    {
        estadoid: 'SC',
        value: 'Jaguaruna',
        label: 'Jaguaruna',
    },
    {
        estadoid: 'SC',
        value: 'Jaraguá do Sul',
        label: 'Jaraguá do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Jardinópolis',
        label: 'Jardinópolis',
    },
    {
        estadoid: 'SC',
        value: 'Joaçaba',
        label: 'Joaçaba',
    },
    {
        estadoid: 'SC',
        value: 'Joinville',
        label: 'Joinville',
    },
    {
        estadoid: 'SC',
        value: 'José Boiteux',
        label: 'José Boiteux',
    },
    {
        estadoid: 'SC',
        value: 'Jupiá',
        label: 'Jupiá',
    },
    {
        estadoid: 'SC',
        value: 'Lacerdópolis',
        label: 'Lacerdópolis',
    },
    {
        estadoid: 'SC',
        value: 'Lages',
        label: 'Lages',
    },
    {
        estadoid: 'SC',
        value: 'Laguna',
        label: 'Laguna',
    },
    {
        estadoid: 'SC',
        value: 'Lajeado Grande',
        label: 'Lajeado Grande',
    },
    {
        estadoid: 'SC',
        value: 'Laurentino',
        label: 'Laurentino',
    },
    {
        estadoid: 'SC',
        value: 'Lauro Muller',
        label: 'Lauro Muller',
    },
    {
        estadoid: 'SC',
        value: 'Lebon Régis',
        label: 'Lebon Régis',
    },
    {
        estadoid: 'SC',
        value: 'Leoberto Leal',
        label: 'Leoberto Leal',
    },
    {
        estadoid: 'SC',
        value: 'Lindóia do Sul',
        label: 'Lindóia do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Lontras',
        label: 'Lontras',
    },
    {
        estadoid: 'SC',
        value: 'Luiz Alves',
        label: 'Luiz Alves',
    },
    {
        estadoid: 'SC',
        value: 'Luzerna',
        label: 'Luzerna',
    },
    {
        estadoid: 'SC',
        value: 'Macieira',
        label: 'Macieira',
    },
    {
        estadoid: 'SC',
        value: 'Mafra',
        label: 'Mafra',
    },
    {
        estadoid: 'SC',
        value: 'Major Gercino',
        label: 'Major Gercino',
    },
    {
        estadoid: 'SC',
        value: 'Major Vieira',
        label: 'Major Vieira',
    },
    {
        estadoid: 'SC',
        value: 'Maracajá',
        label: 'Maracajá',
    },
    {
        estadoid: 'SC',
        value: 'Maravilha',
        label: 'Maravilha',
    },
    {
        estadoid: 'SC',
        value: 'Marema',
        label: 'Marema',
    },
    {
        estadoid: 'SC',
        value: 'Massaranduba',
        label: 'Massaranduba',
    },
    {
        estadoid: 'SC',
        value: 'Matos Costa',
        label: 'Matos Costa',
    },
    {
        estadoid: 'SC',
        value: 'Meleiro',
        label: 'Meleiro',
    },
    {
        estadoid: 'SC',
        value: 'Mirim Doce',
        label: 'Mirim Doce',
    },
    {
        estadoid: 'SC',
        value: 'Modelo',
        label: 'Modelo',
    },
    {
        estadoid: 'SC',
        value: 'Mondaí',
        label: 'Mondaí',
    },
    {
        estadoid: 'SC',
        value: 'Monte Carlo',
        label: 'Monte Carlo',
    },
    {
        estadoid: 'SC',
        value: 'Monte Castelo',
        label: 'Monte Castelo',
    },
    {
        estadoid: 'SC',
        value: 'Morro da Fumaça',
        label: 'Morro da Fumaça',
    },
    {
        estadoid: 'SC',
        value: 'Morro Grande',
        label: 'Morro Grande',
    },
    {
        estadoid: 'SC',
        value: 'Navegantes',
        label: 'Navegantes',
    },
    {
        estadoid: 'SC',
        value: 'Nova Erechim',
        label: 'Nova Erechim',
    },
    {
        estadoid: 'SC',
        value: 'Nova Itaberaba',
        label: 'Nova Itaberaba',
    },
    {
        estadoid: 'SC',
        value: 'Nova Trento',
        label: 'Nova Trento',
    },
    {
        estadoid: 'SC',
        value: 'Nova Veneza',
        label: 'Nova Veneza',
    },
    {
        estadoid: 'SC',
        value: 'Novo Horizonte',
        label: 'Novo Horizonte',
    },
    {
        estadoid: 'SC',
        value: 'Orleans',
        label: 'Orleans',
    },
    {
        estadoid: 'SC',
        value: 'Otacílio Costa',
        label: 'Otacílio Costa',
    },
    {
        estadoid: 'SC',
        value: 'Ouro',
        label: 'Ouro',
    },
    {
        estadoid: 'SC',
        value: 'Ouro Verde',
        label: 'Ouro Verde',
    },
    {
        estadoid: 'SC',
        value: 'Paial',
        label: 'Paial',
    },
    {
        estadoid: 'SC',
        value: 'Painel',
        label: 'Painel',
    },
    {
        estadoid: 'SC',
        value: 'Palhoça',
        label: 'Palhoça',
    },
    {
        estadoid: 'SC',
        value: 'Palma Sola',
        label: 'Palma Sola',
    },
    {
        estadoid: 'SC',
        value: 'Palmeira',
        label: 'Palmeira',
    },
    {
        estadoid: 'SC',
        value: 'Palmitos',
        label: 'Palmitos',
    },
    {
        estadoid: 'SC',
        value: 'Papanduva',
        label: 'Papanduva',
    },
    {
        estadoid: 'SC',
        value: 'Paraíso',
        label: 'Paraíso',
    },
    {
        estadoid: 'SC',
        value: 'Passo de Torres',
        label: 'Passo de Torres',
    },
    {
        estadoid: 'SC',
        value: 'Passos Maia',
        label: 'Passos Maia',
    },
    {
        estadoid: 'SC',
        value: 'Paulo Lopes',
        label: 'Paulo Lopes',
    },
    {
        estadoid: 'SC',
        value: 'Pedras Grandes',
        label: 'Pedras Grandes',
    },
    {
        estadoid: 'SC',
        value: 'Penha',
        label: 'Penha',
    },
    {
        estadoid: 'SC',
        value: 'Peritiba',
        label: 'Peritiba',
    },
    {
        estadoid: 'SC',
        value: 'Petrolândia',
        label: 'Petrolândia',
    },
    {
        estadoid: 'SC',
        value: 'Piçarras',
        label: 'Piçarras',
    },
    {
        estadoid: 'SC',
        value: 'Pinhalzinho',
        label: 'Pinhalzinho',
    },
    {
        estadoid: 'SC',
        value: 'Pinheiro Preto',
        label: 'Pinheiro Preto',
    },
    {
        estadoid: 'SC',
        value: 'Piratuba',
        label: 'Piratuba',
    },
    {
        estadoid: 'SC',
        value: 'Planalto Alegre',
        label: 'Planalto Alegre',
    },
    {
        estadoid: 'SC',
        value: 'Pomerode',
        label: 'Pomerode',
    },
    {
        estadoid: 'SC',
        value: 'Ponte Alta',
        label: 'Ponte Alta',
    },
    {
        estadoid: 'SC',
        value: 'Ponte Alta do Norte',
        label: 'Ponte Alta do Norte',
    },
    {
        estadoid: 'SC',
        value: 'Ponte Serrada',
        label: 'Ponte Serrada',
    },
    {
        estadoid: 'SC',
        value: 'Porto Belo',
        label: 'Porto Belo',
    },
    {
        estadoid: 'SC',
        value: 'Porto União',
        label: 'Porto União',
    },
    {
        estadoid: 'SC',
        value: 'Pouso Redondo',
        label: 'Pouso Redondo',
    },
    {
        estadoid: 'SC',
        value: 'Praia Grande',
        label: 'Praia Grande',
    },
    {
        estadoid: 'SC',
        value: 'Presidente Castelo Branco',
        label: 'Presidente Castelo Branco',
    },
    {
        estadoid: 'SC',
        value: 'Presidente Getúlio',
        label: 'Presidente Getúlio',
    },
    {
        estadoid: 'SC',
        value: 'Presidente Nereu',
        label: 'Presidente Nereu',
    },
    {
        estadoid: 'SC',
        value: 'Princesa',
        label: 'Princesa',
    },
    {
        estadoid: 'SC',
        value: 'Quilombo',
        label: 'Quilombo',
    },
    {
        estadoid: 'SC',
        value: 'Rancho Queimado',
        label: 'Rancho Queimado',
    },
    {
        estadoid: 'SC',
        value: 'Rio das Antas',
        label: 'Rio das Antas',
    },
    {
        estadoid: 'SC',
        value: 'Rio do Campo',
        label: 'Rio do Campo',
    },
    {
        estadoid: 'SC',
        value: 'Rio do Oeste',
        label: 'Rio do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'Rio do Sul',
        label: 'Rio do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Rio dos Cedros',
        label: 'Rio dos Cedros',
    },
    {
        estadoid: 'SC',
        value: 'Rio Fortuna',
        label: 'Rio Fortuna',
    },
    {
        estadoid: 'SC',
        value: 'Rio Negrinho',
        label: 'Rio Negrinho',
    },
    {
        estadoid: 'SC',
        value: 'Rio Rufino',
        label: 'Rio Rufino',
    },
    {
        estadoid: 'SC',
        value: 'Riqueza',
        label: 'Riqueza',
    },
    {
        estadoid: 'SC',
        value: 'Rodeio',
        label: 'Rodeio',
    },
    {
        estadoid: 'SC',
        value: 'Romelândia',
        label: 'Romelândia',
    },
    {
        estadoid: 'SC',
        value: 'Salete',
        label: 'Salete',
    },
    {
        estadoid: 'SC',
        value: 'Saltinho',
        label: 'Saltinho',
    },
    {
        estadoid: 'SC',
        value: 'Salto Veloso',
        label: 'Salto Veloso',
    },
    {
        estadoid: 'SC',
        value: 'Sangão',
        label: 'Sangão',
    },
    {
        estadoid: 'SC',
        value: 'Santa Cecília',
        label: 'Santa Cecília',
    },
    {
        estadoid: 'SC',
        value: 'Santa Helena',
        label: 'Santa Helena',
    },
    {
        estadoid: 'SC',
        value: 'Santa Rosa de Lima',
        label: 'Santa Rosa de Lima',
    },
    {
        estadoid: 'SC',
        value: 'Santa Rosa do Sul',
        label: 'Santa Rosa do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Santa Terezinha',
        label: 'Santa Terezinha',
    },
    {
        estadoid: 'SC',
        value: 'Santa Terezinha do Progresso',
        label: 'Santa Terezinha do Progresso',
    },
    {
        estadoid: 'SC',
        value: 'Santiago do Sul',
        label: 'Santiago do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Santo Amaro da Imperatriz',
        label: 'Santo Amaro da Imperatriz',
    },
    {
        estadoid: 'SC',
        value: 'São Bento do Sul',
        label: 'São Bento do Sul',
    },
    {
        estadoid: 'SC',
        value: 'São Bernardino',
        label: 'São Bernardino',
    },
    {
        estadoid: 'SC',
        value: 'São Bonifácio',
        label: 'São Bonifácio',
    },
    {
        estadoid: 'SC',
        value: 'São Carlos',
        label: 'São Carlos',
    },
    {
        estadoid: 'SC',
        value: 'São Cristovão do Sul',
        label: 'São Cristovão do Sul',
    },
    {
        estadoid: 'SC',
        value: 'São Domingos',
        label: 'São Domingos',
    },
    {
        estadoid: 'SC',
        value: 'São Francisco do Sul',
        label: 'São Francisco do Sul',
    },
    {
        estadoid: 'SC',
        value: 'São João Batista',
        label: 'São João Batista',
    },
    {
        estadoid: 'SC',
        value: 'São João do Itaperiú',
        label: 'São João do Itaperiú',
    },
    {
        estadoid: 'SC',
        value: 'São João do Oeste',
        label: 'São João do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'São João do Sul',
        label: 'São João do Sul',
    },
    {
        estadoid: 'SC',
        value: 'São Joaquim',
        label: 'São Joaquim',
    },
    {
        estadoid: 'SC',
        value: 'São José',
        label: 'São José',
    },
    {
        estadoid: 'SC',
        value: 'São José do Cedro',
        label: 'São José do Cedro',
    },
    {
        estadoid: 'SC',
        value: 'São José do Cerrito',
        label: 'São José do Cerrito',
    },
    {
        estadoid: 'SC',
        value: 'São Lourenço do Oeste',
        label: 'São Lourenço do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'São Ludgero',
        label: 'São Ludgero',
    },
    {
        estadoid: 'SC',
        value: 'São Martinho',
        label: 'São Martinho',
    },
    {
        estadoid: 'SC',
        value: 'São Miguel da Boa Vista',
        label: 'São Miguel da Boa Vista',
    },
    {
        estadoid: 'SC',
        value: 'São Miguel do Oeste',
        label: 'São Miguel do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'São Pedro de Alcântara',
        label: 'São Pedro de Alcântara',
    },
    {
        estadoid: 'SC',
        value: 'Saudades',
        label: 'Saudades',
    },
    {
        estadoid: 'SC',
        value: 'Schroeder',
        label: 'Schroeder',
    },
    {
        estadoid: 'SC',
        value: 'Seara',
        label: 'Seara',
    },
    {
        estadoid: 'SC',
        value: 'Serra Alta',
        label: 'Serra Alta',
    },
    {
        estadoid: 'SC',
        value: 'Siderópolis',
        label: 'Siderópolis',
    },
    {
        estadoid: 'SC',
        value: 'Sombrio',
        label: 'Sombrio',
    },
    {
        estadoid: 'SC',
        value: 'Sul Brasil',
        label: 'Sul Brasil',
    },
    {
        estadoid: 'SC',
        value: 'Taió',
        label: 'Taió',
    },
    {
        estadoid: 'SC',
        value: 'Tangará',
        label: 'Tangará',
    },
    {
        estadoid: 'SC',
        value: 'Tigrinhos',
        label: 'Tigrinhos',
    },
    {
        estadoid: 'SC',
        value: 'Tijucas',
        label: 'Tijucas',
    },
    {
        estadoid: 'SC',
        value: 'Timbé do Sul',
        label: 'Timbé do Sul',
    },
    {
        estadoid: 'SC',
        value: 'Timbó',
        label: 'Timbó',
    },
    {
        estadoid: 'SC',
        value: 'Timbó Grande',
        label: 'Timbó Grande',
    },
    {
        estadoid: 'SC',
        value: 'Três Barras',
        label: 'Três Barras',
    },
    {
        estadoid: 'SC',
        value: 'Treviso',
        label: 'Treviso',
    },
    {
        estadoid: 'SC',
        value: 'Treze de Maio',
        label: 'Treze de Maio',
    },
    {
        estadoid: 'SC',
        value: 'Treze Tílias',
        label: 'Treze Tílias',
    },
    {
        estadoid: 'SC',
        value: 'Trombudo Central',
        label: 'Trombudo Central',
    },
    {
        estadoid: 'SC',
        value: 'Tubarão',
        label: 'Tubarão',
    },
    {
        estadoid: 'SC',
        value: 'Tunápolis',
        label: 'Tunápolis',
    },
    {
        estadoid: 'SC',
        value: 'Turvo',
        label: 'Turvo',
    },
    {
        estadoid: 'SC',
        value: 'União do Oeste',
        label: 'União do Oeste',
    },
    {
        estadoid: 'SC',
        value: 'Urubici',
        label: 'Urubici',
    },
    {
        estadoid: 'SC',
        value: 'Urupema',
        label: 'Urupema',
    },
    {
        estadoid: 'SC',
        value: 'Urussanga',
        label: 'Urussanga',
    },
    {
        estadoid: 'SC',
        value: 'Vargeão',
        label: 'Vargeão',
    },
    {
        estadoid: 'SC',
        value: 'Vargem',
        label: 'Vargem',
    },
    {
        estadoid: 'SC',
        value: 'Vargem Bonita',
        label: 'Vargem Bonita',
    },
    {
        estadoid: 'SC',
        value: 'Vidal Ramos',
        label: 'Vidal Ramos',
    },
    {
        estadoid: 'SC',
        value: 'Videira',
        label: 'Videira',
    },
    {
        estadoid: 'SC',
        value: 'Vitor Meireles',
        label: 'Vitor Meireles',
    },
    {
        estadoid: 'SC',
        value: 'Witmarsum',
        label: 'Witmarsum',
    },
    {
        estadoid: 'SC',
        value: 'Xanxerê',
        label: 'Xanxerê',
    },
    {
        estadoid: 'SC',
        value: 'Xavantina',
        label: 'Xavantina',
    },
    {
        estadoid: 'SC',
        value: 'Xaxim',
        label: 'Xaxim',
    },
    {
        estadoid: 'SC',
        value: 'Zortéa',
        label: 'Zortéa',
    },
    {
        estadoid: 'SP',
        value: 'Adamantina',
        label: 'Adamantina',
    },
    {
        estadoid: 'SP',
        value: 'Adolfo',
        label: 'Adolfo',
    },
    {
        estadoid: 'SP',
        value: 'Aguaí',
        label: 'Aguaí',
    },
    {
        estadoid: 'SP',
        value: 'Águas da Prata',
        label: 'Águas da Prata',
    },
    {
        estadoid: 'SP',
        value: 'Águas de Lindóia',
        label: 'Águas de Lindóia',
    },
    {
        estadoid: 'SP',
        value: 'Águas de Santa Bárbara',
        label: 'Águas de Santa Bárbara',
    },
    {
        estadoid: 'SP',
        value: 'Águas de São Pedro',
        label: 'Águas de São Pedro',
    },
    {
        estadoid: 'SP',
        value: 'Agudos',
        label: 'Agudos',
    },
    {
        estadoid: 'SP',
        value: 'Alambari',
        label: 'Alambari',
    },
    {
        estadoid: 'SP',
        value: 'Alfredo Marcondes',
        label: 'Alfredo Marcondes',
    },
    {
        estadoid: 'SP',
        value: 'Altair',
        label: 'Altair',
    },
    {
        estadoid: 'SP',
        value: 'Altinópolis',
        label: 'Altinópolis',
    },
    {
        estadoid: 'SP',
        value: 'Alto Alegre',
        label: 'Alto Alegre',
    },
    {
        estadoid: 'SP',
        value: 'Alumínio',
        label: 'Alumínio',
    },
    {
        estadoid: 'SP',
        value: 'Álvares Florence',
        label: 'Álvares Florence',
    },
    {
        estadoid: 'SP',
        value: 'Álvares Machado',
        label: 'Álvares Machado',
    },
    {
        estadoid: 'SP',
        value: 'Álvaro de Carvalho',
        label: 'Álvaro de Carvalho',
    },
    {
        estadoid: 'SP',
        value: 'Alvinlândia',
        label: 'Alvinlândia',
    },
    {
        estadoid: 'SP',
        value: 'Americana',
        label: 'Americana',
    },
    {
        estadoid: 'SP',
        value: 'Américo Brasiliense',
        label: 'Américo Brasiliense',
    },
    {
        estadoid: 'SP',
        value: 'Américo de Campos',
        label: 'Américo de Campos',
    },
    {
        estadoid: 'SP',
        value: 'Amparo',
        label: 'Amparo',
    },
    {
        estadoid: 'SP',
        value: 'Analândia',
        label: 'Analândia',
    },
    {
        estadoid: 'SP',
        value: 'Andradina',
        label: 'Andradina',
    },
    {
        estadoid: 'SP',
        value: 'Angatuba',
        label: 'Angatuba',
    },
    {
        estadoid: 'SP',
        value: 'Anhembi',
        label: 'Anhembi',
    },
    {
        estadoid: 'SP',
        value: 'Anhumas',
        label: 'Anhumas',
    },
    {
        estadoid: 'SP',
        value: 'Aparecida',
        label: 'Aparecida',
    },
    {
        estadoid: 'SP',
        value: 'Aparecida d\'Oeste',
        label: 'Aparecida d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Apiaí',
        label: 'Apiaí',
    },
    {
        estadoid: 'SP',
        value: 'Araçariguama',
        label: 'Araçariguama',
    },
    {
        estadoid: 'SP',
        value: 'Araçatuba',
        label: 'Araçatuba',
    },
    {
        estadoid: 'SP',
        value: 'Araçoiaba da Serra',
        label: 'Araçoiaba da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Aramina',
        label: 'Aramina',
    },
    {
        estadoid: 'SP',
        value: 'Arandu',
        label: 'Arandu',
    },
    {
        estadoid: 'SP',
        value: 'Arapeí',
        label: 'Arapeí',
    },
    {
        estadoid: 'SP',
        value: 'Araraquara',
        label: 'Araraquara',
    },
    {
        estadoid: 'SP',
        value: 'Araras',
        label: 'Araras',
    },
    {
        estadoid: 'SP',
        value: 'Arco-Íris',
        label: 'Arco-Íris',
    },
    {
        estadoid: 'SP',
        value: 'Arealva',
        label: 'Arealva',
    },
    {
        estadoid: 'SP',
        value: 'Areias',
        label: 'Areias',
    },
    {
        estadoid: 'SP',
        value: 'Areiópolis',
        label: 'Areiópolis',
    },
    {
        estadoid: 'SP',
        value: 'Ariranha',
        label: 'Ariranha',
    },
    {
        estadoid: 'SP',
        value: 'Artur Nogueira',
        label: 'Artur Nogueira',
    },
    {
        estadoid: 'SP',
        value: 'Arujá',
        label: 'Arujá',
    },
    {
        estadoid: 'SP',
        value: 'Aspásia',
        label: 'Aspásia',
    },
    {
        estadoid: 'SP',
        value: 'Assis',
        label: 'Assis',
    },
    {
        estadoid: 'SP',
        value: 'Atibaia',
        label: 'Atibaia',
    },
    {
        estadoid: 'SP',
        value: 'Auriflama',
        label: 'Auriflama',
    },
    {
        estadoid: 'SP',
        value: 'Avaí',
        label: 'Avaí',
    },
    {
        estadoid: 'SP',
        value: 'Avanhandava',
        label: 'Avanhandava',
    },
    {
        estadoid: 'SP',
        value: 'Avaré',
        label: 'Avaré',
    },
    {
        estadoid: 'SP',
        value: 'Bady Bassitt',
        label: 'Bady Bassitt',
    },
    {
        estadoid: 'SP',
        value: 'Balbinos',
        label: 'Balbinos',
    },
    {
        estadoid: 'SP',
        value: 'Bálsamo',
        label: 'Bálsamo',
    },
    {
        estadoid: 'SP',
        value: 'Bananal',
        label: 'Bananal',
    },
    {
        estadoid: 'SP',
        value: 'Barão de Antonina',
        label: 'Barão de Antonina',
    },
    {
        estadoid: 'SP',
        value: 'Barbosa',
        label: 'Barbosa',
    },
    {
        estadoid: 'SP',
        value: 'Bariri',
        label: 'Bariri',
    },
    {
        estadoid: 'SP',
        value: 'Barra Bonita',
        label: 'Barra Bonita',
    },
    {
        estadoid: 'SP',
        value: 'Barra do Chapéu',
        label: 'Barra do Chapéu',
    },
    {
        estadoid: 'SP',
        value: 'Barra do Turvo',
        label: 'Barra do Turvo',
    },
    {
        estadoid: 'SP',
        value: 'Barretos',
        label: 'Barretos',
    },
    {
        estadoid: 'SP',
        value: 'Barrinha',
        label: 'Barrinha',
    },
    {
        estadoid: 'SP',
        value: 'Barueri',
        label: 'Barueri',
    },
    {
        estadoid: 'SP',
        value: 'Bastos',
        label: 'Bastos',
    },
    {
        estadoid: 'SP',
        value: 'Batatais',
        label: 'Batatais',
    },
    {
        estadoid: 'SP',
        value: 'Bauru',
        label: 'Bauru',
    },
    {
        estadoid: 'SP',
        value: 'Bebedouro',
        label: 'Bebedouro',
    },
    {
        estadoid: 'SP',
        value: 'Bento de Abreu',
        label: 'Bento de Abreu',
    },
    {
        estadoid: 'SP',
        value: 'Bernardino de Campos',
        label: 'Bernardino de Campos',
    },
    {
        estadoid: 'SP',
        value: 'Bertioga',
        label: 'Bertioga',
    },
    {
        estadoid: 'SP',
        value: 'Bilac',
        label: 'Bilac',
    },
    {
        estadoid: 'SP',
        value: 'Birigui',
        label: 'Birigui',
    },
    {
        estadoid: 'SP',
        value: 'Biritiba-Mirim',
        label: 'Biritiba-Mirim',
    },
    {
        estadoid: 'SP',
        value: 'Boa Esperança do Sul',
        label: 'Boa Esperança do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Bocaina',
        label: 'Bocaina',
    },
    {
        estadoid: 'SP',
        value: 'Bofete',
        label: 'Bofete',
    },
    {
        estadoid: 'SP',
        value: 'Boituva',
        label: 'Boituva',
    },
    {
        estadoid: 'SP',
        value: 'Bom Jesus dos Perdões',
        label: 'Bom Jesus dos Perdões',
    },
    {
        estadoid: 'SP',
        value: 'Bom Sucesso de Itararé',
        label: 'Bom Sucesso de Itararé',
    },
    {
        estadoid: 'SP',
        value: 'Borá',
        label: 'Borá',
    },
    {
        estadoid: 'SP',
        value: 'Boracéia',
        label: 'Boracéia',
    },
    {
        estadoid: 'SP',
        value: 'Borborema',
        label: 'Borborema',
    },
    {
        estadoid: 'SP',
        value: 'Borebi',
        label: 'Borebi',
    },
    {
        estadoid: 'SP',
        value: 'Botucatu',
        label: 'Botucatu',
    },
    {
        estadoid: 'SP',
        value: 'Bragança Paulista',
        label: 'Bragança Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Braúna',
        label: 'Braúna',
    },
    {
        estadoid: 'SP',
        value: 'Brejo Alegre',
        label: 'Brejo Alegre',
    },
    {
        estadoid: 'SP',
        value: 'Brodowski',
        label: 'Brodowski',
    },
    {
        estadoid: 'SP',
        value: 'Brotas',
        label: 'Brotas',
    },
    {
        estadoid: 'SP',
        value: 'Buri',
        label: 'Buri',
    },
    {
        estadoid: 'SP',
        value: 'Buritama',
        label: 'Buritama',
    },
    {
        estadoid: 'SP',
        value: 'Buritizal',
        label: 'Buritizal',
    },
    {
        estadoid: 'SP',
        value: 'Cabrália Paulista',
        label: 'Cabrália Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Cabreúva',
        label: 'Cabreúva',
    },
    {
        estadoid: 'SP',
        value: 'Caçapava',
        label: 'Caçapava',
    },
    {
        estadoid: 'SP',
        value: 'Cachoeira Paulista',
        label: 'Cachoeira Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Caconde',
        label: 'Caconde',
    },
    {
        estadoid: 'SP',
        value: 'Cafelândia',
        label: 'Cafelândia',
    },
    {
        estadoid: 'SP',
        value: 'Caiabu',
        label: 'Caiabu',
    },
    {
        estadoid: 'SP',
        value: 'Caieiras',
        label: 'Caieiras',
    },
    {
        estadoid: 'SP',
        value: 'Caiuá',
        label: 'Caiuá',
    },
    {
        estadoid: 'SP',
        value: 'Cajamar',
        label: 'Cajamar',
    },
    {
        estadoid: 'SP',
        value: 'Cajati',
        label: 'Cajati',
    },
    {
        estadoid: 'SP',
        value: 'Cajobi',
        label: 'Cajobi',
    },
    {
        estadoid: 'SP',
        value: 'Cajuru',
        label: 'Cajuru',
    },
    {
        estadoid: 'SP',
        value: 'Campina do Monte Alegre',
        label: 'Campina do Monte Alegre',
    },
    {
        estadoid: 'SP',
        value: 'Campinas',
        label: 'Campinas',
    },
    {
        estadoid: 'SP',
        value: 'Campo Limpo Paulista',
        label: 'Campo Limpo Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Campos do Jordão',
        label: 'Campos do Jordão',
    },
    {
        estadoid: 'SP',
        value: 'Campos Novos Paulista',
        label: 'Campos Novos Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Cananéia',
        label: 'Cananéia',
    },
    {
        estadoid: 'SP',
        value: 'Canas',
        label: 'Canas',
    },
    {
        estadoid: 'SP',
        value: 'Cândido Mota',
        label: 'Cândido Mota',
    },
    {
        estadoid: 'SP',
        value: 'Cândido Rodrigues',
        label: 'Cândido Rodrigues',
    },
    {
        estadoid: 'SP',
        value: 'Canitar',
        label: 'Canitar',
    },
    {
        estadoid: 'SP',
        value: 'Capão Bonito',
        label: 'Capão Bonito',
    },
    {
        estadoid: 'SP',
        value: 'Capela do Alto',
        label: 'Capela do Alto',
    },
    {
        estadoid: 'SP',
        value: 'Capivari',
        label: 'Capivari',
    },
    {
        estadoid: 'SP',
        value: 'Caraguatatuba',
        label: 'Caraguatatuba',
    },
    {
        estadoid: 'SP',
        value: 'Carapicuíba',
        label: 'Carapicuíba',
    },
    {
        estadoid: 'SP',
        value: 'Cardoso',
        label: 'Cardoso',
    },
    {
        estadoid: 'SP',
        value: 'Casa Branca',
        label: 'Casa Branca',
    },
    {
        estadoid: 'SP',
        value: 'Cássia dos Coqueiros',
        label: 'Cássia dos Coqueiros',
    },
    {
        estadoid: 'SP',
        value: 'Castilho',
        label: 'Castilho',
    },
    {
        estadoid: 'SP',
        value: 'Catanduva',
        label: 'Catanduva',
    },
    {
        estadoid: 'SP',
        value: 'Catiguá',
        label: 'Catiguá',
    },
    {
        estadoid: 'SP',
        value: 'Cedral',
        label: 'Cedral',
    },
    {
        estadoid: 'SP',
        value: 'Cerqueira César',
        label: 'Cerqueira César',
    },
    {
        estadoid: 'SP',
        value: 'Cerquilho',
        label: 'Cerquilho',
    },
    {
        estadoid: 'SP',
        value: 'Cesário Lange',
        label: 'Cesário Lange',
    },
    {
        estadoid: 'SP',
        value: 'Charqueada',
        label: 'Charqueada',
    },
    {
        estadoid: 'SP',
        value: 'Chavantes',
        label: 'Chavantes',
    },
    {
        estadoid: 'SP',
        value: 'Clementina',
        label: 'Clementina',
    },
    {
        estadoid: 'SP',
        value: 'Colina',
        label: 'Colina',
    },
    {
        estadoid: 'SP',
        value: 'Colômbia',
        label: 'Colômbia',
    },
    {
        estadoid: 'SP',
        value: 'Conchal',
        label: 'Conchal',
    },
    {
        estadoid: 'SP',
        value: 'Conchas',
        label: 'Conchas',
    },
    {
        estadoid: 'SP',
        value: 'Cordeirópolis',
        label: 'Cordeirópolis',
    },
    {
        estadoid: 'SP',
        value: 'Coroados',
        label: 'Coroados',
    },
    {
        estadoid: 'SP',
        value: 'Coronel Macedo',
        label: 'Coronel Macedo',
    },
    {
        estadoid: 'SP',
        value: 'Corumbataí',
        label: 'Corumbataí',
    },
    {
        estadoid: 'SP',
        value: 'Cosmópolis',
        label: 'Cosmópolis',
    },
    {
        estadoid: 'SP',
        value: 'Cosmorama',
        label: 'Cosmorama',
    },
    {
        estadoid: 'SP',
        value: 'Cotia',
        label: 'Cotia',
    },
    {
        estadoid: 'SP',
        value: 'Cravinhos',
        label: 'Cravinhos',
    },
    {
        estadoid: 'SP',
        value: 'Cristais Paulista',
        label: 'Cristais Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Cruzália',
        label: 'Cruzália',
    },
    {
        estadoid: 'SP',
        value: 'Cruzeiro',
        label: 'Cruzeiro',
    },
    {
        estadoid: 'SP',
        value: 'Cubatão',
        label: 'Cubatão',
    },
    {
        estadoid: 'SP',
        value: 'Cunha',
        label: 'Cunha',
    },
    {
        estadoid: 'SP',
        value: 'Descalvado',
        label: 'Descalvado',
    },
    {
        estadoid: 'SP',
        value: 'Diadema',
        label: 'Diadema',
    },
    {
        estadoid: 'SP',
        value: 'Dirce Reis',
        label: 'Dirce Reis',
    },
    {
        estadoid: 'SP',
        value: 'Divinolândia',
        label: 'Divinolândia',
    },
    {
        estadoid: 'SP',
        value: 'Dobrada',
        label: 'Dobrada',
    },
    {
        estadoid: 'SP',
        value: 'Dois Córregos',
        label: 'Dois Córregos',
    },
    {
        estadoid: 'SP',
        value: 'Dolcinópolis',
        label: 'Dolcinópolis',
    },
    {
        estadoid: 'SP',
        value: 'Dourado',
        label: 'Dourado',
    },
    {
        estadoid: 'SP',
        value: 'Dracena',
        label: 'Dracena',
    },
    {
        estadoid: 'SP',
        value: 'Duartina',
        label: 'Duartina',
    },
    {
        estadoid: 'SP',
        value: 'Dumont',
        label: 'Dumont',
    },
    {
        estadoid: 'SP',
        value: 'Echaporã',
        label: 'Echaporã',
    },
    {
        estadoid: 'SP',
        value: 'Eldorado',
        label: 'Eldorado',
    },
    {
        estadoid: 'SP',
        value: 'Elias Fausto',
        label: 'Elias Fausto',
    },
    {
        estadoid: 'SP',
        value: 'Elisiário',
        label: 'Elisiário',
    },
    {
        estadoid: 'SP',
        value: 'Embaúba',
        label: 'Embaúba',
    },
    {
        estadoid: 'SP',
        value: 'Embu',
        label: 'Embu',
    },
    {
        estadoid: 'SP',
        value: 'Embu-Guaçu',
        label: 'Embu-Guaçu',
    },
    {
        estadoid: 'SP',
        value: 'Emilianópolis',
        label: 'Emilianópolis',
    },
    {
        estadoid: 'SP',
        value: 'Engenheiro Coelho',
        label: 'Engenheiro Coelho',
    },
    {
        estadoid: 'SP',
        value: 'Espírito Santo do Pinhal',
        label: 'Espírito Santo do Pinhal',
    },
    {
        estadoid: 'SP',
        value: 'Espírito Santo do Turvo',
        label: 'Espírito Santo do Turvo',
    },
    {
        estadoid: 'SP',
        value: 'Estiva Gerbi',
        label: 'Estiva Gerbi',
    },
    {
        estadoid: 'SP',
        value: 'Estrela d\'Oeste',
        label: 'Estrela d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Estrela do Norte',
        label: 'Estrela do Norte',
    },
    {
        estadoid: 'SP',
        value: 'Euclides da Cunha Paulista',
        label: 'Euclides da Cunha Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Fartura',
        label: 'Fartura',
    },
    {
        estadoid: 'SP',
        value: 'Fernando Prestes',
        label: 'Fernando Prestes',
    },
    {
        estadoid: 'SP',
        value: 'Fernandópolis',
        label: 'Fernandópolis',
    },
    {
        estadoid: 'SP',
        value: 'Fernão',
        label: 'Fernão',
    },
    {
        estadoid: 'SP',
        value: 'Ferraz de Vasconcelos',
        label: 'Ferraz de Vasconcelos',
    },
    {
        estadoid: 'SP',
        value: 'Flora Rica',
        label: 'Flora Rica',
    },
    {
        estadoid: 'SP',
        value: 'Floreal',
        label: 'Floreal',
    },
    {
        estadoid: 'SP',
        value: 'Florínia',
        label: 'Florínia',
    },
    {
        estadoid: 'SP',
        value: 'Flórida Paulista',
        label: 'Flórida Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Franca',
        label: 'Franca',
    },
    {
        estadoid: 'SP',
        value: 'Francisco Morato',
        label: 'Francisco Morato',
    },
    {
        estadoid: 'SP',
        value: 'Franco da Rocha',
        label: 'Franco da Rocha',
    },
    {
        estadoid: 'SP',
        value: 'Gabriel Monteiro',
        label: 'Gabriel Monteiro',
    },
    {
        estadoid: 'SP',
        value: 'Gália',
        label: 'Gália',
    },
    {
        estadoid: 'SP',
        value: 'Garça',
        label: 'Garça',
    },
    {
        estadoid: 'SP',
        value: 'Gastão Vidigal',
        label: 'Gastão Vidigal',
    },
    {
        estadoid: 'SP',
        value: 'Gavião Peixoto',
        label: 'Gavião Peixoto',
    },
    {
        estadoid: 'SP',
        value: 'General Salgado',
        label: 'General Salgado',
    },
    {
        estadoid: 'SP',
        value: 'Getulina',
        label: 'Getulina',
    },
    {
        estadoid: 'SP',
        value: 'Glicério',
        label: 'Glicério',
    },
    {
        estadoid: 'SP',
        value: 'Guaiçara',
        label: 'Guaiçara',
    },
    {
        estadoid: 'SP',
        value: 'Guaimbê',
        label: 'Guaimbê',
    },
    {
        estadoid: 'SP',
        value: 'Guaíra',
        label: 'Guaíra',
    },
    {
        estadoid: 'SP',
        value: 'Guapiaçu',
        label: 'Guapiaçu',
    },
    {
        estadoid: 'SP',
        value: 'Guapiara',
        label: 'Guapiara',
    },
    {
        estadoid: 'SP',
        value: 'Guará',
        label: 'Guará',
    },
    {
        estadoid: 'SP',
        value: 'Guaraçaí',
        label: 'Guaraçaí',
    },
    {
        estadoid: 'SP',
        value: 'Guaraci',
        label: 'Guaraci',
    },
    {
        estadoid: 'SP',
        value: 'Guarani d\'Oeste',
        label: 'Guarani d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Guarantã',
        label: 'Guarantã',
    },
    {
        estadoid: 'SP',
        value: 'Guararapes',
        label: 'Guararapes',
    },
    {
        estadoid: 'SP',
        value: 'Guararema',
        label: 'Guararema',
    },
    {
        estadoid: 'SP',
        value: 'Guaratinguetá',
        label: 'Guaratinguetá',
    },
    {
        estadoid: 'SP',
        value: 'Guareí',
        label: 'Guareí',
    },
    {
        estadoid: 'SP',
        value: 'Guariba',
        label: 'Guariba',
    },
    {
        estadoid: 'SP',
        value: 'Guarujá',
        label: 'Guarujá',
    },
    {
        estadoid: 'SP',
        value: 'Guarulhos',
        label: 'Guarulhos',
    },
    {
        estadoid: 'SP',
        value: 'Guatapará',
        label: 'Guatapará',
    },
    {
        estadoid: 'SP',
        value: 'Guzolândia',
        label: 'Guzolândia',
    },
    {
        estadoid: 'SP',
        value: 'Herculândia',
        label: 'Herculândia',
    },
    {
        estadoid: 'SP',
        value: 'Holambra',
        label: 'Holambra',
    },
    {
        estadoid: 'SP',
        value: 'Hortolândia',
        label: 'Hortolândia',
    },
    {
        estadoid: 'SP',
        value: 'Iacanga',
        label: 'Iacanga',
    },
    {
        estadoid: 'SP',
        value: 'Iacri',
        label: 'Iacri',
    },
    {
        estadoid: 'SP',
        value: 'Iaras',
        label: 'Iaras',
    },
    {
        estadoid: 'SP',
        value: 'Ibaté',
        label: 'Ibaté',
    },
    {
        estadoid: 'SP',
        value: 'Ibirá',
        label: 'Ibirá',
    },
    {
        estadoid: 'SP',
        value: 'Ibirarema',
        label: 'Ibirarema',
    },
    {
        estadoid: 'SP',
        value: 'Ibitinga',
        label: 'Ibitinga',
    },
    {
        estadoid: 'SP',
        value: 'Ibiúna',
        label: 'Ibiúna',
    },
    {
        estadoid: 'SP',
        value: 'Icém',
        label: 'Icém',
    },
    {
        estadoid: 'SP',
        value: 'Iepê',
        label: 'Iepê',
    },
    {
        estadoid: 'SP',
        value: 'Igaraçu do Tietê',
        label: 'Igaraçu do Tietê',
    },
    {
        estadoid: 'SP',
        value: 'Igarapava',
        label: 'Igarapava',
    },
    {
        estadoid: 'SP',
        value: 'Igaratá',
        label: 'Igaratá',
    },
    {
        estadoid: 'SP',
        value: 'Iguape',
        label: 'Iguape',
    },
    {
        estadoid: 'SP',
        value: 'Ilha Comprida',
        label: 'Ilha Comprida',
    },
    {
        estadoid: 'SP',
        value: 'Ilha Solteira',
        label: 'Ilha Solteira',
    },
    {
        estadoid: 'SP',
        value: 'Ilhabela',
        label: 'Ilhabela',
    },
    {
        estadoid: 'SP',
        value: 'Indaiatuba',
        label: 'Indaiatuba',
    },
    {
        estadoid: 'SP',
        value: 'Indiana',
        label: 'Indiana',
    },
    {
        estadoid: 'SP',
        value: 'Indiaporã',
        label: 'Indiaporã',
    },
    {
        estadoid: 'SP',
        value: 'Inúbia Paulista',
        label: 'Inúbia Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Ipauçu',
        label: 'Ipauçu',
    },
    {
        estadoid: 'SP',
        value: 'Iperó',
        label: 'Iperó',
    },
    {
        estadoid: 'SP',
        value: 'Ipeúna',
        label: 'Ipeúna',
    },
    {
        estadoid: 'SP',
        value: 'Ipiguá',
        label: 'Ipiguá',
    },
    {
        estadoid: 'SP',
        value: 'Iporanga',
        label: 'Iporanga',
    },
    {
        estadoid: 'SP',
        value: 'Ipuã',
        label: 'Ipuã',
    },
    {
        estadoid: 'SP',
        value: 'Iracemápolis',
        label: 'Iracemápolis',
    },
    {
        estadoid: 'SP',
        value: 'Irapuã',
        label: 'Irapuã',
    },
    {
        estadoid: 'SP',
        value: 'Irapuru',
        label: 'Irapuru',
    },
    {
        estadoid: 'SP',
        value: 'Itaberá',
        label: 'Itaberá',
    },
    {
        estadoid: 'SP',
        value: 'Itaí',
        label: 'Itaí',
    },
    {
        estadoid: 'SP',
        value: 'Itajobi',
        label: 'Itajobi',
    },
    {
        estadoid: 'SP',
        value: 'Itaju',
        label: 'Itaju',
    },
    {
        estadoid: 'SP',
        value: 'Itanhaém',
        label: 'Itanhaém',
    },
    {
        estadoid: 'SP',
        value: 'Itaóca',
        label: 'Itaóca',
    },
    {
        estadoid: 'SP',
        value: 'Itapecerica da Serra',
        label: 'Itapecerica da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Itapetininga',
        label: 'Itapetininga',
    },
    {
        estadoid: 'SP',
        value: 'Itapeva',
        label: 'Itapeva',
    },
    {
        estadoid: 'SP',
        value: 'Itapevi',
        label: 'Itapevi',
    },
    {
        estadoid: 'SP',
        value: 'Itapira',
        label: 'Itapira',
    },
    {
        estadoid: 'SP',
        value: 'Itapirapuã Paulista',
        label: 'Itapirapuã Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Itápolis',
        label: 'Itápolis',
    },
    {
        estadoid: 'SP',
        value: 'Itaporanga',
        label: 'Itaporanga',
    },
    {
        estadoid: 'SP',
        value: 'Itapuí',
        label: 'Itapuí',
    },
    {
        estadoid: 'SP',
        value: 'Itapura',
        label: 'Itapura',
    },
    {
        estadoid: 'SP',
        value: 'Itaquaquecetuba',
        label: 'Itaquaquecetuba',
    },
    {
        estadoid: 'SP',
        value: 'Itararé',
        label: 'Itararé',
    },
    {
        estadoid: 'SP',
        value: 'Itariri',
        label: 'Itariri',
    },
    {
        estadoid: 'SP',
        value: 'Itatiba',
        label: 'Itatiba',
    },
    {
        estadoid: 'SP',
        value: 'Itatinga',
        label: 'Itatinga',
    },
    {
        estadoid: 'SP',
        value: 'Itirapina',
        label: 'Itirapina',
    },
    {
        estadoid: 'SP',
        value: 'Itirapuã',
        label: 'Itirapuã',
    },
    {
        estadoid: 'SP',
        value: 'Itobi',
        label: 'Itobi',
    },
    {
        estadoid: 'SP',
        value: 'Itu',
        label: 'Itu',
    },
    {
        estadoid: 'SP',
        value: 'Itupeva',
        label: 'Itupeva',
    },
    {
        estadoid: 'SP',
        value: 'Ituverava',
        label: 'Ituverava',
    },
    {
        estadoid: 'SP',
        value: 'Jaborandi',
        label: 'Jaborandi',
    },
    {
        estadoid: 'SP',
        value: 'Jaboticabal',
        label: 'Jaboticabal',
    },
    {
        estadoid: 'SP',
        value: 'Jacareí',
        label: 'Jacareí',
    },
    {
        estadoid: 'SP',
        value: 'Jaci',
        label: 'Jaci',
    },
    {
        estadoid: 'SP',
        value: 'Jacupiranga',
        label: 'Jacupiranga',
    },
    {
        estadoid: 'SP',
        value: 'Jaguariúna',
        label: 'Jaguariúna',
    },
    {
        estadoid: 'SP',
        value: 'Jales',
        label: 'Jales',
    },
    {
        estadoid: 'SP',
        value: 'Jambeiro',
        label: 'Jambeiro',
    },
    {
        estadoid: 'SP',
        value: 'Jandira',
        label: 'Jandira',
    },
    {
        estadoid: 'SP',
        value: 'Jardinópolis',
        label: 'Jardinópolis',
    },
    {
        estadoid: 'SP',
        value: 'Jarinu',
        label: 'Jarinu',
    },
    {
        estadoid: 'SP',
        value: 'Jaú',
        label: 'Jaú',
    },
    {
        estadoid: 'SP',
        value: 'Jeriquara',
        label: 'Jeriquara',
    },
    {
        estadoid: 'SP',
        value: 'Joanópolis',
        label: 'Joanópolis',
    },
    {
        estadoid: 'SP',
        value: 'João Ramalho',
        label: 'João Ramalho',
    },
    {
        estadoid: 'SP',
        value: 'José Bonifácio',
        label: 'José Bonifácio',
    },
    {
        estadoid: 'SP',
        value: 'Júlio Mesquita',
        label: 'Júlio Mesquita',
    },
    {
        estadoid: 'SP',
        value: 'Jumirim',
        label: 'Jumirim',
    },
    {
        estadoid: 'SP',
        value: 'Jundiaí',
        label: 'Jundiaí',
    },
    {
        estadoid: 'SP',
        value: 'Junqueirópolis',
        label: 'Junqueirópolis',
    },
    {
        estadoid: 'SP',
        value: 'Juquiá',
        label: 'Juquiá',
    },
    {
        estadoid: 'SP',
        value: 'Juquitiba',
        label: 'Juquitiba',
    },
    {
        estadoid: 'SP',
        value: 'Lagoinha',
        label: 'Lagoinha',
    },
    {
        estadoid: 'SP',
        value: 'Laranjal Paulista',
        label: 'Laranjal Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Lavínia',
        label: 'Lavínia',
    },
    {
        estadoid: 'SP',
        value: 'Lavrinhas',
        label: 'Lavrinhas',
    },
    {
        estadoid: 'SP',
        value: 'Leme',
        label: 'Leme',
    },
    {
        estadoid: 'SP',
        value: 'Lençóis Paulista',
        label: 'Lençóis Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Limeira',
        label: 'Limeira',
    },
    {
        estadoid: 'SP',
        value: 'Lindóia',
        label: 'Lindóia',
    },
    {
        estadoid: 'SP',
        value: 'Lins',
        label: 'Lins',
    },
    {
        estadoid: 'SP',
        value: 'Lorena',
        label: 'Lorena',
    },
    {
        estadoid: 'SP',
        value: 'Lourdes',
        label: 'Lourdes',
    },
    {
        estadoid: 'SP',
        value: 'Louveira',
        label: 'Louveira',
    },
    {
        estadoid: 'SP',
        value: 'Lucélia',
        label: 'Lucélia',
    },
    {
        estadoid: 'SP',
        value: 'Lucianópolis',
        label: 'Lucianópolis',
    },
    {
        estadoid: 'SP',
        value: 'Luís Antônio',
        label: 'Luís Antônio',
    },
    {
        estadoid: 'SP',
        value: 'Luiziânia',
        label: 'Luiziânia',
    },
    {
        estadoid: 'SP',
        value: 'Lupércio',
        label: 'Lupércio',
    },
    {
        estadoid: 'SP',
        value: 'Lutécia',
        label: 'Lutécia',
    },
    {
        estadoid: 'SP',
        value: 'Macatuba',
        label: 'Macatuba',
    },
    {
        estadoid: 'SP',
        value: 'Macaubal',
        label: 'Macaubal',
    },
    {
        estadoid: 'SP',
        value: 'Macedônia',
        label: 'Macedônia',
    },
    {
        estadoid: 'SP',
        value: 'Magda',
        label: 'Magda',
    },
    {
        estadoid: 'SP',
        value: 'Mairinque',
        label: 'Mairinque',
    },
    {
        estadoid: 'SP',
        value: 'Mairiporã',
        label: 'Mairiporã',
    },
    {
        estadoid: 'SP',
        value: 'Manduri',
        label: 'Manduri',
    },
    {
        estadoid: 'SP',
        value: 'Marabá Paulista',
        label: 'Marabá Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Maracaí',
        label: 'Maracaí',
    },
    {
        estadoid: 'SP',
        value: 'Marapoama',
        label: 'Marapoama',
    },
    {
        estadoid: 'SP',
        value: 'Mariápolis',
        label: 'Mariápolis',
    },
    {
        estadoid: 'SP',
        value: 'Marília',
        label: 'Marília',
    },
    {
        estadoid: 'SP',
        value: 'Marinópolis',
        label: 'Marinópolis',
    },
    {
        estadoid: 'SP',
        value: 'Martinópolis',
        label: 'Martinópolis',
    },
    {
        estadoid: 'SP',
        value: 'Matão',
        label: 'Matão',
    },
    {
        estadoid: 'SP',
        value: 'Mauá',
        label: 'Mauá',
    },
    {
        estadoid: 'SP',
        value: 'Mendonça',
        label: 'Mendonça',
    },
    {
        estadoid: 'SP',
        value: 'Meridiano',
        label: 'Meridiano',
    },
    {
        estadoid: 'SP',
        value: 'Mesópolis',
        label: 'Mesópolis',
    },
    {
        estadoid: 'SP',
        value: 'Miguelópolis',
        label: 'Miguelópolis',
    },
    {
        estadoid: 'SP',
        value: 'Mineiros do Tietê',
        label: 'Mineiros do Tietê',
    },
    {
        estadoid: 'SP',
        value: 'Mira Estrela',
        label: 'Mira Estrela',
    },
    {
        estadoid: 'SP',
        value: 'Miracatu',
        label: 'Miracatu',
    },
    {
        estadoid: 'SP',
        value: 'Mirandópolis',
        label: 'Mirandópolis',
    },
    {
        estadoid: 'SP',
        value: 'Mirante do Paranapanema',
        label: 'Mirante do Paranapanema',
    },
    {
        estadoid: 'SP',
        value: 'Mirassol',
        label: 'Mirassol',
    },
    {
        estadoid: 'SP',
        value: 'Mirassolândia',
        label: 'Mirassolândia',
    },
    {
        estadoid: 'SP',
        value: 'Mococa',
        label: 'Mococa',
    },
    {
        estadoid: 'SP',
        value: 'Mogi das Cruzes',
        label: 'Mogi das Cruzes',
    },
    {
        estadoid: 'SP',
        value: 'Mogi-Guaçu',
        label: 'Mogi-Guaçu',
    },
    {
        estadoid: 'SP',
        value: 'Mogi-Mirim',
        label: 'Mogi-Mirim',
    },
    {
        estadoid: 'SP',
        value: 'Mombuca',
        label: 'Mombuca',
    },
    {
        estadoid: 'SP',
        value: 'Monções',
        label: 'Monções',
    },
    {
        estadoid: 'SP',
        value: 'Mongaguá',
        label: 'Mongaguá',
    },
    {
        estadoid: 'SP',
        value: 'Monte Alegre do Sul',
        label: 'Monte Alegre do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Monte Alto',
        label: 'Monte Alto',
    },
    {
        estadoid: 'SP',
        value: 'Monte Aprazível',
        label: 'Monte Aprazível',
    },
    {
        estadoid: 'SP',
        value: 'Monte Azul Paulista',
        label: 'Monte Azul Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Monte Castelo',
        label: 'Monte Castelo',
    },
    {
        estadoid: 'SP',
        value: 'Monte Mor',
        label: 'Monte Mor',
    },
    {
        estadoid: 'SP',
        value: 'Monteiro Lobato',
        label: 'Monteiro Lobato',
    },
    {
        estadoid: 'SP',
        value: 'Morro Agudo',
        label: 'Morro Agudo',
    },
    {
        estadoid: 'SP',
        value: 'Morungaba',
        label: 'Morungaba',
    },
    {
        estadoid: 'SP',
        value: 'Motuca',
        label: 'Motuca',
    },
    {
        estadoid: 'SP',
        value: 'Murutinga do Sul',
        label: 'Murutinga do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Nantes',
        label: 'Nantes',
    },
    {
        estadoid: 'SP',
        value: 'Narandiba',
        label: 'Narandiba',
    },
    {
        estadoid: 'SP',
        value: 'Natividade da Serra',
        label: 'Natividade da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Nazaré Paulista',
        label: 'Nazaré Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Neves Paulista',
        label: 'Neves Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Nhandeara',
        label: 'Nhandeara',
    },
    {
        estadoid: 'SP',
        value: 'Nipoã',
        label: 'Nipoã',
    },
    {
        estadoid: 'SP',
        value: 'Nova Aliança',
        label: 'Nova Aliança',
    },
    {
        estadoid: 'SP',
        value: 'Nova Campina',
        label: 'Nova Campina',
    },
    {
        estadoid: 'SP',
        value: 'Nova Canaã Paulista',
        label: 'Nova Canaã Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Nova Castilho',
        label: 'Nova Castilho',
    },
    {
        estadoid: 'SP',
        value: 'Nova Europa',
        label: 'Nova Europa',
    },
    {
        estadoid: 'SP',
        value: 'Nova Granada',
        label: 'Nova Granada',
    },
    {
        estadoid: 'SP',
        value: 'Nova Guataporanga',
        label: 'Nova Guataporanga',
    },
    {
        estadoid: 'SP',
        value: 'Nova Independência',
        label: 'Nova Independência',
    },
    {
        estadoid: 'SP',
        value: 'Nova Luzitânia',
        label: 'Nova Luzitânia',
    },
    {
        estadoid: 'SP',
        value: 'Nova Odessa',
        label: 'Nova Odessa',
    },
    {
        estadoid: 'SP',
        value: 'Novais',
        label: 'Novais',
    },
    {
        estadoid: 'SP',
        value: 'Novo Horizonte',
        label: 'Novo Horizonte',
    },
    {
        estadoid: 'SP',
        value: 'Nuporanga',
        label: 'Nuporanga',
    },
    {
        estadoid: 'SP',
        value: 'Ocauçu',
        label: 'Ocauçu',
    },
    {
        estadoid: 'SP',
        value: 'Óleo',
        label: 'Óleo',
    },
    {
        estadoid: 'SP',
        value: 'Olímpia',
        label: 'Olímpia',
    },
    {
        estadoid: 'SP',
        value: 'Onda Verde',
        label: 'Onda Verde',
    },
    {
        estadoid: 'SP',
        value: 'Oriente',
        label: 'Oriente',
    },
    {
        estadoid: 'SP',
        value: 'Orindiúva',
        label: 'Orindiúva',
    },
    {
        estadoid: 'SP',
        value: 'Orlândia',
        label: 'Orlândia',
    },
    {
        estadoid: 'SP',
        value: 'Osasco',
        label: 'Osasco',
    },
    {
        estadoid: 'SP',
        value: 'Oscar Bressane',
        label: 'Oscar Bressane',
    },
    {
        estadoid: 'SP',
        value: 'Osvaldo Cruz',
        label: 'Osvaldo Cruz',
    },
    {
        estadoid: 'SP',
        value: 'Ourinhos',
        label: 'Ourinhos',
    },
    {
        estadoid: 'SP',
        value: 'Ouro Verde',
        label: 'Ouro Verde',
    },
    {
        estadoid: 'SP',
        value: 'Ouroeste',
        label: 'Ouroeste',
    },
    {
        estadoid: 'SP',
        value: 'Pacaembu',
        label: 'Pacaembu',
    },
    {
        estadoid: 'SP',
        value: 'Palestina',
        label: 'Palestina',
    },
    {
        estadoid: 'SP',
        value: 'Palmares Paulista',
        label: 'Palmares Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Palmeira d\'Oeste',
        label: 'Palmeira d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Palmital',
        label: 'Palmital',
    },
    {
        estadoid: 'SP',
        value: 'Panorama',
        label: 'Panorama',
    },
    {
        estadoid: 'SP',
        value: 'Paraguaçu Paulista',
        label: 'Paraguaçu Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Paraibuna',
        label: 'Paraibuna',
    },
    {
        estadoid: 'SP',
        value: 'Paraíso',
        label: 'Paraíso',
    },
    {
        estadoid: 'SP',
        value: 'Paranapanema',
        label: 'Paranapanema',
    },
    {
        estadoid: 'SP',
        value: 'Paranapuã',
        label: 'Paranapuã',
    },
    {
        estadoid: 'SP',
        value: 'Parapuã',
        label: 'Parapuã',
    },
    {
        estadoid: 'SP',
        value: 'Pardinho',
        label: 'Pardinho',
    },
    {
        estadoid: 'SP',
        value: 'Pariquera-Açu',
        label: 'Pariquera-Açu',
    },
    {
        estadoid: 'SP',
        value: 'Parisi',
        label: 'Parisi',
    },
    {
        estadoid: 'SP',
        value: 'Patrocínio Paulista',
        label: 'Patrocínio Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Paulicéia',
        label: 'Paulicéia',
    },
    {
        estadoid: 'SP',
        value: 'Paulínia',
        label: 'Paulínia',
    },
    {
        estadoid: 'SP',
        value: 'Paulistânia',
        label: 'Paulistânia',
    },
    {
        estadoid: 'SP',
        value: 'Paulo de Faria',
        label: 'Paulo de Faria',
    },
    {
        estadoid: 'SP',
        value: 'Pederneiras',
        label: 'Pederneiras',
    },
    {
        estadoid: 'SP',
        value: 'Pedra Bela',
        label: 'Pedra Bela',
    },
    {
        estadoid: 'SP',
        value: 'Pedranópolis',
        label: 'Pedranópolis',
    },
    {
        estadoid: 'SP',
        value: 'Pedregulho',
        label: 'Pedregulho',
    },
    {
        estadoid: 'SP',
        value: 'Pedreira',
        label: 'Pedreira',
    },
    {
        estadoid: 'SP',
        value: 'Pedrinhas Paulista',
        label: 'Pedrinhas Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Pedro de Toledo',
        label: 'Pedro de Toledo',
    },
    {
        estadoid: 'SP',
        value: 'Penápolis',
        label: 'Penápolis',
    },
    {
        estadoid: 'SP',
        value: 'Pereira Barreto',
        label: 'Pereira Barreto',
    },
    {
        estadoid: 'SP',
        value: 'Pereiras',
        label: 'Pereiras',
    },
    {
        estadoid: 'SP',
        value: 'Peruíbe',
        label: 'Peruíbe',
    },
    {
        estadoid: 'SP',
        value: 'Piacatu',
        label: 'Piacatu',
    },
    {
        estadoid: 'SP',
        value: 'Piedade',
        label: 'Piedade',
    },
    {
        estadoid: 'SP',
        value: 'Pilar do Sul',
        label: 'Pilar do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Pindamonhangaba',
        label: 'Pindamonhangaba',
    },
    {
        estadoid: 'SP',
        value: 'Pindorama',
        label: 'Pindorama',
    },
    {
        estadoid: 'SP',
        value: 'Pinhalzinho',
        label: 'Pinhalzinho',
    },
    {
        estadoid: 'SP',
        value: 'Piquerobi',
        label: 'Piquerobi',
    },
    {
        estadoid: 'SP',
        value: 'Piquete',
        label: 'Piquete',
    },
    {
        estadoid: 'SP',
        value: 'Piracaia',
        label: 'Piracaia',
    },
    {
        estadoid: 'SP',
        value: 'Piracicaba',
        label: 'Piracicaba',
    },
    {
        estadoid: 'SP',
        value: 'Piraju',
        label: 'Piraju',
    },
    {
        estadoid: 'SP',
        value: 'Pirajuí',
        label: 'Pirajuí',
    },
    {
        estadoid: 'SP',
        value: 'Pirangi',
        label: 'Pirangi',
    },
    {
        estadoid: 'SP',
        value: 'Pirapora do Bom Jesus',
        label: 'Pirapora do Bom Jesus',
    },
    {
        estadoid: 'SP',
        value: 'Pirapozinho',
        label: 'Pirapozinho',
    },
    {
        estadoid: 'SP',
        value: 'Pirassununga',
        label: 'Pirassununga',
    },
    {
        estadoid: 'SP',
        value: 'Piratininga',
        label: 'Piratininga',
    },
    {
        estadoid: 'SP',
        value: 'Pitangueiras',
        label: 'Pitangueiras',
    },
    {
        estadoid: 'SP',
        value: 'Planalto',
        label: 'Planalto',
    },
    {
        estadoid: 'SP',
        value: 'Platina',
        label: 'Platina',
    },
    {
        estadoid: 'SP',
        value: 'Poá',
        label: 'Poá',
    },
    {
        estadoid: 'SP',
        value: 'Poloni',
        label: 'Poloni',
    },
    {
        estadoid: 'SP',
        value: 'Pompéia',
        label: 'Pompéia',
    },
    {
        estadoid: 'SP',
        value: 'Pongaí',
        label: 'Pongaí',
    },
    {
        estadoid: 'SP',
        value: 'Pontal',
        label: 'Pontal',
    },
    {
        estadoid: 'SP',
        value: 'Pontalinda',
        label: 'Pontalinda',
    },
    {
        estadoid: 'SP',
        value: 'Pontes Gestal',
        label: 'Pontes Gestal',
    },
    {
        estadoid: 'SP',
        value: 'Populina',
        label: 'Populina',
    },
    {
        estadoid: 'SP',
        value: 'Porangaba',
        label: 'Porangaba',
    },
    {
        estadoid: 'SP',
        value: 'Porto Feliz',
        label: 'Porto Feliz',
    },
    {
        estadoid: 'SP',
        value: 'Porto Ferreira',
        label: 'Porto Ferreira',
    },
    {
        estadoid: 'SP',
        value: 'Potim',
        label: 'Potim',
    },
    {
        estadoid: 'SP',
        value: 'Potirendaba',
        label: 'Potirendaba',
    },
    {
        estadoid: 'SP',
        value: 'Pracinha',
        label: 'Pracinha',
    },
    {
        estadoid: 'SP',
        value: 'Pradópolis',
        label: 'Pradópolis',
    },
    {
        estadoid: 'SP',
        value: 'Praia Grande',
        label: 'Praia Grande',
    },
    {
        estadoid: 'SP',
        value: 'Pratânia',
        label: 'Pratânia',
    },
    {
        estadoid: 'SP',
        value: 'Presidente Alves',
        label: 'Presidente Alves',
    },
    {
        estadoid: 'SP',
        value: 'Presidente Bernardes',
        label: 'Presidente Bernardes',
    },
    {
        estadoid: 'SP',
        value: 'Presidente Epitácio',
        label: 'Presidente Epitácio',
    },
    {
        estadoid: 'SP',
        value: 'Presidente Prudente',
        label: 'Presidente Prudente',
    },
    {
        estadoid: 'SP',
        value: 'Presidente Venceslau',
        label: 'Presidente Venceslau',
    },
    {
        estadoid: 'SP',
        value: 'Promissão',
        label: 'Promissão',
    },
    {
        estadoid: 'SP',
        value: 'Quadra',
        label: 'Quadra',
    },
    {
        estadoid: 'SP',
        value: 'Quatá',
        label: 'Quatá',
    },
    {
        estadoid: 'SP',
        value: 'Queiroz',
        label: 'Queiroz',
    },
    {
        estadoid: 'SP',
        value: 'Queluz',
        label: 'Queluz',
    },
    {
        estadoid: 'SP',
        value: 'Quintana',
        label: 'Quintana',
    },
    {
        estadoid: 'SP',
        value: 'Rafard',
        label: 'Rafard',
    },
    {
        estadoid: 'SP',
        value: 'Rancharia',
        label: 'Rancharia',
    },
    {
        estadoid: 'SP',
        value: 'Redenção da Serra',
        label: 'Redenção da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Regente Feijó',
        label: 'Regente Feijó',
    },
    {
        estadoid: 'SP',
        value: 'Reginópolis',
        label: 'Reginópolis',
    },
    {
        estadoid: 'SP',
        value: 'Registro',
        label: 'Registro',
    },
    {
        estadoid: 'SP',
        value: 'Restinga',
        label: 'Restinga',
    },
    {
        estadoid: 'SP',
        value: 'Ribeira',
        label: 'Ribeira',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão Bonito',
        label: 'Ribeirão Bonito',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão Branco',
        label: 'Ribeirão Branco',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão Corrente',
        label: 'Ribeirão Corrente',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão do Sul',
        label: 'Ribeirão do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão dos Índios',
        label: 'Ribeirão dos Índios',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão Grande',
        label: 'Ribeirão Grande',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão Pires',
        label: 'Ribeirão Pires',
    },
    {
        estadoid: 'SP',
        value: 'Ribeirão Preto',
        label: 'Ribeirão Preto',
    },
    {
        estadoid: 'SP',
        value: 'Rifaina',
        label: 'Rifaina',
    },
    {
        estadoid: 'SP',
        value: 'Rincão',
        label: 'Rincão',
    },
    {
        estadoid: 'SP',
        value: 'Rinópolis',
        label: 'Rinópolis',
    },
    {
        estadoid: 'SP',
        value: 'Rio Claro',
        label: 'Rio Claro',
    },
    {
        estadoid: 'SP',
        value: 'Rio das Pedras',
        label: 'Rio das Pedras',
    },
    {
        estadoid: 'SP',
        value: 'Rio Grande da Serra',
        label: 'Rio Grande da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Riolândia',
        label: 'Riolândia',
    },
    {
        estadoid: 'SP',
        value: 'Riversul',
        label: 'Riversul',
    },
    {
        estadoid: 'SP',
        value: 'Rosana',
        label: 'Rosana',
    },
    {
        estadoid: 'SP',
        value: 'Roseira',
        label: 'Roseira',
    },
    {
        estadoid: 'SP',
        value: 'Rubiácea',
        label: 'Rubiácea',
    },
    {
        estadoid: 'SP',
        value: 'Rubinéia',
        label: 'Rubinéia',
    },
    {
        estadoid: 'SP',
        value: 'Sabino',
        label: 'Sabino',
    },
    {
        estadoid: 'SP',
        value: 'Sagres',
        label: 'Sagres',
    },
    {
        estadoid: 'SP',
        value: 'Sales',
        label: 'Sales',
    },
    {
        estadoid: 'SP',
        value: 'Sales Oliveira',
        label: 'Sales Oliveira',
    },
    {
        estadoid: 'SP',
        value: 'Salesópolis',
        label: 'Salesópolis',
    },
    {
        estadoid: 'SP',
        value: 'Salmourão',
        label: 'Salmourão',
    },
    {
        estadoid: 'SP',
        value: 'Saltinho',
        label: 'Saltinho',
    },
    {
        estadoid: 'SP',
        value: 'Salto',
        label: 'Salto',
    },
    {
        estadoid: 'SP',
        value: 'Salto de Pirapora',
        label: 'Salto de Pirapora',
    },
    {
        estadoid: 'SP',
        value: 'Salto Grande',
        label: 'Salto Grande',
    },
    {
        estadoid: 'SP',
        value: 'Sandovalina',
        label: 'Sandovalina',
    },
    {
        estadoid: 'SP',
        value: 'Santa Adélia',
        label: 'Santa Adélia',
    },
    {
        estadoid: 'SP',
        value: 'Santa Albertina',
        label: 'Santa Albertina',
    },
    {
        estadoid: 'SP',
        value: 'Santa Bárbara d\'Oeste',
        label: 'Santa Bárbara d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Santa Branca',
        label: 'Santa Branca',
    },
    {
        estadoid: 'SP',
        value: 'Santa Clara d\'Oeste',
        label: 'Santa Clara d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Santa Cruz da Conceição',
        label: 'Santa Cruz da Conceição',
    },
    {
        estadoid: 'SP',
        value: 'Santa Cruz da Esperança',
        label: 'Santa Cruz da Esperança',
    },
    {
        estadoid: 'SP',
        value: 'Santa Cruz das Palmeiras',
        label: 'Santa Cruz das Palmeiras',
    },
    {
        estadoid: 'SP',
        value: 'Santa Cruz do Rio Pardo',
        label: 'Santa Cruz do Rio Pardo',
    },
    {
        estadoid: 'SP',
        value: 'Santa Ernestina',
        label: 'Santa Ernestina',
    },
    {
        estadoid: 'SP',
        value: 'Santa Fé do Sul',
        label: 'Santa Fé do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Santa Gertrudes',
        label: 'Santa Gertrudes',
    },
    {
        estadoid: 'SP',
        value: 'Santa Isabel',
        label: 'Santa Isabel',
    },
    {
        estadoid: 'SP',
        value: 'Santa Lúcia',
        label: 'Santa Lúcia',
    },
    {
        estadoid: 'SP',
        value: 'Santa Maria da Serra',
        label: 'Santa Maria da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Santa Mercedes',
        label: 'Santa Mercedes',
    },
    {
        estadoid: 'SP',
        value: 'Santa Rita d\'Oeste',
        label: 'Santa Rita d\'Oeste',
    },
    {
        estadoid: 'SP',
        value: 'Santa Rita do Passa Quatro',
        label: 'Santa Rita do Passa Quatro',
    },
    {
        estadoid: 'SP',
        value: 'Santa Rosa de Viterbo',
        label: 'Santa Rosa de Viterbo',
    },
    {
        estadoid: 'SP',
        value: 'Santa Salete',
        label: 'Santa Salete',
    },
    {
        estadoid: 'SP',
        value: 'Santana da Ponte Pensa',
        label: 'Santana da Ponte Pensa',
    },
    {
        estadoid: 'SP',
        value: 'Santana de Parnaíba',
        label: 'Santana de Parnaíba',
    },
    {
        estadoid: 'SP',
        value: 'Santo Anastácio',
        label: 'Santo Anastácio',
    },
    {
        estadoid: 'SP',
        value: 'Santo André',
        label: 'Santo André',
    },
    {
        estadoid: 'SP',
        value: 'Santo Antônio da Alegria',
        label: 'Santo Antônio da Alegria',
    },
    {
        estadoid: 'SP',
        value: 'Santo Antônio de Posse',
        label: 'Santo Antônio de Posse',
    },
    {
        estadoid: 'SP',
        value: 'Santo Antônio do Aracanguá',
        label: 'Santo Antônio do Aracanguá',
    },
    {
        estadoid: 'SP',
        value: 'Santo Antônio do Jardim',
        label: 'Santo Antônio do Jardim',
    },
    {
        estadoid: 'SP',
        value: 'Santo Antônio do Pinhal',
        label: 'Santo Antônio do Pinhal',
    },
    {
        estadoid: 'SP',
        value: 'Santo Expedito',
        label: 'Santo Expedito',
    },
    {
        estadoid: 'SP',
        value: 'Santópolis do Aguapeí',
        label: 'Santópolis do Aguapeí',
    },
    {
        estadoid: 'SP',
        value: 'Santos',
        label: 'Santos',
    },
    {
        estadoid: 'SP',
        value: 'São Bento do Sapucaí',
        label: 'São Bento do Sapucaí',
    },
    {
        estadoid: 'SP',
        value: 'São Bernardo do Campo',
        label: 'São Bernardo do Campo',
    },
    {
        estadoid: 'SP',
        value: 'São Caetano do Sul',
        label: 'São Caetano do Sul',
    },
    {
        estadoid: 'SP',
        value: 'São Carlos',
        label: 'São Carlos',
    },
    {
        estadoid: 'SP',
        value: 'São Francisco',
        label: 'São Francisco',
    },
    {
        estadoid: 'SP',
        value: 'São João da Boa Vista',
        label: 'São João da Boa Vista',
    },
    {
        estadoid: 'SP',
        value: 'São João das Duas Pontes',
        label: 'São João das Duas Pontes',
    },
    {
        estadoid: 'SP',
        value: 'São João de Iracema',
        label: 'São João de Iracema',
    },
    {
        estadoid: 'SP',
        value: 'São João do Pau d\'Alho',
        label: 'São João do Pau d\'Alho',
    },
    {
        estadoid: 'SP',
        value: 'São Joaquim da Barra',
        label: 'São Joaquim da Barra',
    },
    {
        estadoid: 'SP',
        value: 'São José da Bela Vista',
        label: 'São José da Bela Vista',
    },
    {
        estadoid: 'SP',
        value: 'São José do Barreiro',
        label: 'São José do Barreiro',
    },
    {
        estadoid: 'SP',
        value: 'São José do Rio Pardo',
        label: 'São José do Rio Pardo',
    },
    {
        estadoid: 'SP',
        value: 'São José do Rio Preto',
        label: 'São José do Rio Preto',
    },
    {
        estadoid: 'SP',
        value: 'São José dos Campos',
        label: 'São José dos Campos',
    },
    {
        estadoid: 'SP',
        value: 'São Lourenço da Serra',
        label: 'São Lourenço da Serra',
    },
    {
        estadoid: 'SP',
        value: 'São Luís do Paraitinga',
        label: 'São Luís do Paraitinga',
    },
    {
        estadoid: 'SP',
        value: 'São Manuel',
        label: 'São Manuel',
    },
    {
        estadoid: 'SP',
        value: 'São Miguel Arcanjo',
        label: 'São Miguel Arcanjo',
    },
    {
        estadoid: 'SP',
        label: 'São Paulo',
        value: 'São Paulo',
    },
    {
        estadoid: 'SP',
        value: 'São Pedro',
        label: 'São Pedro',
    },
    {
        estadoid: 'SP',
        value: 'São Pedro do Turvo',
        label: 'São Pedro do Turvo',
    },
    {
        estadoid: 'SP',
        value: 'São Roque',
        label: 'São Roque',
    },
    {
        estadoid: 'SP',
        value: 'São Sebastião',
        label: 'São Sebastião',
    },
    {
        estadoid: 'SP',
        value: 'São Sebastião da Grama',
        label: 'São Sebastião da Grama',
    },
    {
        estadoid: 'SP',
        value: 'São Simão',
        label: 'São Simão',
    },
    {
        estadoid: 'SP',
        value: 'São Vicente',
        label: 'São Vicente',
    },
    {
        estadoid: 'SP',
        value: 'Sarapuí',
        label: 'Sarapuí',
    },
    {
        estadoid: 'SP',
        value: 'Sarutaiá',
        label: 'Sarutaiá',
    },
    {
        estadoid: 'SP',
        value: 'Sebastianópolis do Sul',
        label: 'Sebastianópolis do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Serra Azul',
        label: 'Serra Azul',
    },
    {
        estadoid: 'SP',
        value: 'Serra Negra',
        label: 'Serra Negra',
    },
    {
        estadoid: 'SP',
        value: 'Serrana',
        label: 'Serrana',
    },
    {
        estadoid: 'SP',
        value: 'Sertãozinho',
        label: 'Sertãozinho',
    },
    {
        estadoid: 'SP',
        value: 'Sete Barras',
        label: 'Sete Barras',
    },
    {
        estadoid: 'SP',
        value: 'Severínia',
        label: 'Severínia',
    },
    {
        estadoid: 'SP',
        value: 'Silveiras',
        label: 'Silveiras',
    },
    {
        estadoid: 'SP',
        value: 'Socorro',
        label: 'Socorro',
    },
    {
        estadoid: 'SP',
        value: 'Sorocaba',
        label: 'Sorocaba',
    },
    {
        estadoid: 'SP',
        value: 'Sud Mennucci',
        label: 'Sud Mennucci',
    },
    {
        estadoid: 'SP',
        value: 'Sumaré',
        label: 'Sumaré',
    },
    {
        estadoid: 'SP',
        value: 'Suzanápolis',
        label: 'Suzanápolis',
    },
    {
        estadoid: 'SP',
        value: 'Suzano',
        label: 'Suzano',
    },
    {
        estadoid: 'SP',
        value: 'Tabapuã',
        label: 'Tabapuã',
    },
    {
        estadoid: 'SP',
        value: 'Tabatinga',
        label: 'Tabatinga',
    },
    {
        estadoid: 'SP',
        value: 'Taboão da Serra',
        label: 'Taboão da Serra',
    },
    {
        estadoid: 'SP',
        value: 'Taciba',
        label: 'Taciba',
    },
    {
        estadoid: 'SP',
        value: 'Taguaí',
        label: 'Taguaí',
    },
    {
        estadoid: 'SP',
        value: 'Taiaçu',
        label: 'Taiaçu',
    },
    {
        estadoid: 'SP',
        value: 'Taiúva',
        label: 'Taiúva',
    },
    {
        estadoid: 'SP',
        value: 'Tambaú',
        label: 'Tambaú',
    },
    {
        estadoid: 'SP',
        value: 'Tanabi',
        label: 'Tanabi',
    },
    {
        estadoid: 'SP',
        value: 'Tapiraí',
        label: 'Tapiraí',
    },
    {
        estadoid: 'SP',
        value: 'Tapiratiba',
        label: 'Tapiratiba',
    },
    {
        estadoid: 'SP',
        value: 'Taquaral',
        label: 'Taquaral',
    },
    {
        estadoid: 'SP',
        value: 'Taquaritinga',
        label: 'Taquaritinga',
    },
    {
        estadoid: 'SP',
        value: 'Taquarituba',
        label: 'Taquarituba',
    },
    {
        estadoid: 'SP',
        value: 'Taquarivaí',
        label: 'Taquarivaí',
    },
    {
        estadoid: 'SP',
        value: 'Tarabai',
        label: 'Tarabai',
    },
    {
        estadoid: 'SP',
        value: 'Tarumã',
        label: 'Tarumã',
    },
    {
        estadoid: 'SP',
        value: 'Tatuí',
        label: 'Tatuí',
    },
    {
        estadoid: 'SP',
        value: 'Taubaté',
        label: 'Taubaté',
    },
    {
        estadoid: 'SP',
        value: 'Tejupá',
        label: 'Tejupá',
    },
    {
        estadoid: 'SP',
        value: 'Teodoro Sampaio',
        label: 'Teodoro Sampaio',
    },
    {
        estadoid: 'SP',
        value: 'Terra Roxa',
        label: 'Terra Roxa',
    },
    {
        estadoid: 'SP',
        value: 'Tietê',
        label: 'Tietê',
    },
    {
        estadoid: 'SP',
        value: 'Timburi',
        label: 'Timburi',
    },
    {
        estadoid: 'SP',
        value: 'Torre de Pedra',
        label: 'Torre de Pedra',
    },
    {
        estadoid: 'SP',
        value: 'Torrinha',
        label: 'Torrinha',
    },
    {
        estadoid: 'SP',
        value: 'Trabiju',
        label: 'Trabiju',
    },
    {
        estadoid: 'SP',
        value: 'Tremembé',
        label: 'Tremembé',
    },
    {
        estadoid: 'SP',
        value: 'Três Fronteiras',
        label: 'Três Fronteiras',
    },
    {
        estadoid: 'SP',
        value: 'Tuiuti',
        label: 'Tuiuti',
    },
    {
        estadoid: 'SP',
        value: 'Tupã',
        label: 'Tupã',
    },
    {
        estadoid: 'SP',
        value: 'Tupi Paulista',
        label: 'Tupi Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Turiúba',
        label: 'Turiúba',
    },
    {
        estadoid: 'SP',
        value: 'Turmalina',
        label: 'Turmalina',
    },
    {
        estadoid: 'SP',
        value: 'Ubarana',
        label: 'Ubarana',
    },
    {
        estadoid: 'SP',
        value: 'Ubatuba',
        label: 'Ubatuba',
    },
    {
        estadoid: 'SP',
        value: 'Ubirajara',
        label: 'Ubirajara',
    },
    {
        estadoid: 'SP',
        value: 'Uchoa',
        label: 'Uchoa',
    },
    {
        estadoid: 'SP',
        value: 'União Paulista',
        label: 'União Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Urânia',
        label: 'Urânia',
    },
    {
        estadoid: 'SP',
        value: 'Uru',
        label: 'Uru',
    },
    {
        estadoid: 'SP',
        value: 'Urupês',
        label: 'Urupês',
    },
    {
        estadoid: 'SP',
        value: 'Valentim Gentil',
        label: 'Valentim Gentil',
    },
    {
        estadoid: 'SP',
        value: 'Valinhos',
        label: 'Valinhos',
    },
    {
        estadoid: 'SP',
        value: 'Valparaíso',
        label: 'Valparaíso',
    },
    {
        estadoid: 'SP',
        value: 'Vargem',
        label: 'Vargem',
    },
    {
        estadoid: 'SP',
        value: 'Vargem Grande do Sul',
        label: 'Vargem Grande do Sul',
    },
    {
        estadoid: 'SP',
        value: 'Vargem Grande Paulista',
        label: 'Vargem Grande Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Várzea Paulista',
        label: 'Várzea Paulista',
    },
    {
        estadoid: 'SP',
        value: 'Vera Cruz',
        label: 'Vera Cruz',
    },
    {
        estadoid: 'SP',
        value: 'Vinhedo',
        label: 'Vinhedo',
    },
    {
        estadoid: 'SP',
        value: 'Viradouro',
        label: 'Viradouro',
    },
    {
        estadoid: 'SP',
        value: 'Vista Alegre do Alto',
        label: 'Vista Alegre do Alto',
    },
    {
        estadoid: 'SP',
        value: 'Vitória Brasil',
        label: 'Vitória Brasil',
    },
    {
        estadoid: 'SP',
        value: 'Votorantim',
        label: 'Votorantim',
    },
    {
        estadoid: 'SP',
        value: 'Votuporanga',
        label: 'Votuporanga',
    },
    {
        estadoid: 'SP',
        value: 'Zacarias',
        label: 'Zacarias',
    },
    {
        estadoid: 'SE',
        value: 'Amparo de São Francisco',
        label: 'Amparo de São Francisco',
    },
    {
        estadoid: 'SE',
        value: 'Aquidabã',
        label: 'Aquidabã',
    },
    {
        estadoid: 'SE',
        label: 'Aracaju',
        value: 'Aracaju',
    },
    {
        estadoid: 'SE',
        value: 'Arauá',
        label: 'Arauá',
    },
    {
        estadoid: 'SE',
        value: 'Areia Branca',
        label: 'Areia Branca',
    },
    {
        estadoid: 'SE',
        value: 'Barra dos Coqueiros',
        label: 'Barra dos Coqueiros',
    },
    {
        estadoid: 'SE',
        value: 'Boquim',
        label: 'Boquim',
    },
    {
        estadoid: 'SE',
        value: 'Brejo Grande',
        label: 'Brejo Grande',
    },
    {
        estadoid: 'SE',
        value: 'Campo do Brito',
        label: 'Campo do Brito',
    },
    {
        estadoid: 'SE',
        value: 'Canhoba',
        label: 'Canhoba',
    },
    {
        estadoid: 'SE',
        value: 'Canindé de São Francisco',
        label: 'Canindé de São Francisco',
    },
    {
        estadoid: 'SE',
        value: 'Capela',
        label: 'Capela',
    },
    {
        estadoid: 'SE',
        value: 'Carira',
        label: 'Carira',
    },
    {
        estadoid: 'SE',
        value: 'Carmópolis',
        label: 'Carmópolis',
    },
    {
        estadoid: 'SE',
        value: 'Cedro de São João',
        label: 'Cedro de São João',
    },
    {
        estadoid: 'SE',
        value: 'Cristinápolis',
        label: 'Cristinápolis',
    },
    {
        estadoid: 'SE',
        value: 'Cumbe',
        label: 'Cumbe',
    },
    {
        estadoid: 'SE',
        value: 'Divina Pastora',
        label: 'Divina Pastora',
    },
    {
        estadoid: 'SE',
        value: 'Estância',
        label: 'Estância',
    },
    {
        estadoid: 'SE',
        value: 'Feira Nova',
        label: 'Feira Nova',
    },
    {
        estadoid: 'SE',
        value: 'Frei Paulo',
        label: 'Frei Paulo',
    },
    {
        estadoid: 'SE',
        value: 'Gararu',
        label: 'Gararu',
    },
    {
        estadoid: 'SE',
        value: 'General Maynard',
        label: 'General Maynard',
    },
    {
        estadoid: 'SE',
        value: 'Gracho Cardoso',
        label: 'Gracho Cardoso',
    },
    {
        estadoid: 'SE',
        value: 'Ilha das Flores',
        label: 'Ilha das Flores',
    },
    {
        estadoid: 'SE',
        value: 'Indiaroba',
        label: 'Indiaroba',
    },
    {
        estadoid: 'SE',
        value: 'Itabaiana',
        label: 'Itabaiana',
    },
    {
        estadoid: 'SE',
        value: 'Itabaianinha',
        label: 'Itabaianinha',
    },
    {
        estadoid: 'SE',
        value: 'Itabi',
        label: 'Itabi',
    },
    {
        estadoid: 'SE',
        value: 'Itaporanga d\'Ajuda',
        label: 'Itaporanga d\'Ajuda',
    },
    {
        estadoid: 'SE',
        value: 'Japaratuba',
        label: 'Japaratuba',
    },
    {
        estadoid: 'SE',
        value: 'Japoatã',
        label: 'Japoatã',
    },
    {
        estadoid: 'SE',
        value: 'Lagarto',
        label: 'Lagarto',
    },
    {
        estadoid: 'SE',
        value: 'Laranjeiras',
        label: 'Laranjeiras',
    },
    {
        estadoid: 'SE',
        value: 'Macambira',
        label: 'Macambira',
    },
    {
        estadoid: 'SE',
        value: 'Malhada dos Bois',
        label: 'Malhada dos Bois',
    },
    {
        estadoid: 'SE',
        value: 'Malhador',
        label: 'Malhador',
    },
    {
        estadoid: 'SE',
        value: 'Maruim',
        label: 'Maruim',
    },
    {
        estadoid: 'SE',
        value: 'Moita Bonita',
        label: 'Moita Bonita',
    },
    {
        estadoid: 'SE',
        value: 'Monte Alegre de Sergipe',
        label: 'Monte Alegre de Sergipe',
    },
    {
        estadoid: 'SE',
        value: 'Muribeca',
        label: 'Muribeca',
    },
    {
        estadoid: 'SE',
        value: 'Neópolis',
        label: 'Neópolis',
    },
    {
        estadoid: 'SE',
        value: 'Nossa Senhora Aparecida',
        label: 'Nossa Senhora Aparecida',
    },
    {
        estadoid: 'SE',
        value: 'Nossa Senhora da Glória',
        label: 'Nossa Senhora da Glória',
    },
    {
        estadoid: 'SE',
        value: 'Nossa Senhora das Dores',
        label: 'Nossa Senhora das Dores',
    },
    {
        estadoid: 'SE',
        value: 'Nossa Senhora de Lourdes',
        label: 'Nossa Senhora de Lourdes',
    },
    {
        estadoid: 'SE',
        value: 'Nossa Senhora do Socorro',
        label: 'Nossa Senhora do Socorro',
    },
    {
        estadoid: 'SE',
        value: 'Pacatuba',
        label: 'Pacatuba',
    },
    {
        estadoid: 'SE',
        value: 'Pedra Mole',
        label: 'Pedra Mole',
    },
    {
        estadoid: 'SE',
        value: 'Pedrinhas',
        label: 'Pedrinhas',
    },
    {
        estadoid: 'SE',
        value: 'Pinhão',
        label: 'Pinhão',
    },
    {
        estadoid: 'SE',
        value: 'Pirambu',
        label: 'Pirambu',
    },
    {
        estadoid: 'SE',
        value: 'Poço Redondo',
        label: 'Poço Redondo',
    },
    {
        estadoid: 'SE',
        value: 'Poço Verde',
        label: 'Poço Verde',
    },
    {
        estadoid: 'SE',
        value: 'Porto da Folha',
        label: 'Porto da Folha',
    },
    {
        estadoid: 'SE',
        value: 'Propriá',
        label: 'Propriá',
    },
    {
        estadoid: 'SE',
        value: 'Riachão do Dantas',
        label: 'Riachão do Dantas',
    },
    {
        estadoid: 'SE',
        value: 'Riachuelo',
        label: 'Riachuelo',
    },
    {
        estadoid: 'SE',
        value: 'Ribeirópolis',
        label: 'Ribeirópolis',
    },
    {
        estadoid: 'SE',
        value: 'Rosário do Catete',
        label: 'Rosário do Catete',
    },
    {
        estadoid: 'SE',
        value: 'Salgado',
        label: 'Salgado',
    },
    {
        estadoid: 'SE',
        value: 'Santa Luzia do Itanhy',
        label: 'Santa Luzia do Itanhy',
    },
    {
        estadoid: 'SE',
        value: 'Santa Rosa de Lima',
        label: 'Santa Rosa de Lima',
    },
    {
        estadoid: 'SE',
        value: 'Santana do São Francisco',
        label: 'Santana do São Francisco',
    },
    {
        estadoid: 'SE',
        value: 'Santo Amaro das Brotas',
        label: 'Santo Amaro das Brotas',
    },
    {
        estadoid: 'SE',
        value: 'São Cristóvão',
        label: 'São Cristóvão',
    },
    {
        estadoid: 'SE',
        value: 'São Domingos',
        label: 'São Domingos',
    },
    {
        estadoid: 'SE',
        value: 'São Francisco',
        label: 'São Francisco',
    },
    {
        estadoid: 'SE',
        value: 'São Miguel do Aleixo',
        label: 'São Miguel do Aleixo',
    },
    {
        estadoid: 'SE',
        value: 'Simão Dias',
        label: 'Simão Dias',
    },
    {
        estadoid: 'SE',
        value: 'Siriri',
        label: 'Siriri',
    },
    {
        estadoid: 'SE',
        value: 'Telha',
        label: 'Telha',
    },
    {
        estadoid: 'SE',
        value: 'Tobias Barreto',
        label: 'Tobias Barreto',
    },
    {
        estadoid: 'SE',
        value: 'Tomar do Geru',
        label: 'Tomar do Geru',
    },
    {
        estadoid: 'SE',
        value: 'Umbaúba',
        label: 'Umbaúba',
    },
    {
        estadoid: 'TO',
        value: 'Abreulândia',
        label: 'Abreulândia',
    },
    {
        estadoid: 'TO',
        value: 'Aguiarnópolis',
        label: 'Aguiarnópolis',
    },
    {
        estadoid: 'TO',
        value: 'Aliança do Tocantins',
        label: 'Aliança do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Almas',
        label: 'Almas',
    },
    {
        estadoid: 'TO',
        value: 'Alvorada',
        label: 'Alvorada',
    },
    {
        estadoid: 'TO',
        value: 'Ananás',
        label: 'Ananás',
    },
    {
        estadoid: 'TO',
        value: 'Angico',
        label: 'Angico',
    },
    {
        estadoid: 'TO',
        value: 'Aparecida do Rio Negro',
        label: 'Aparecida do Rio Negro',
    },
    {
        estadoid: 'TO',
        value: 'Aragominas',
        label: 'Aragominas',
    },
    {
        estadoid: 'TO',
        value: 'Araguacema',
        label: 'Araguacema',
    },
    {
        estadoid: 'TO',
        value: 'Araguaçu',
        label: 'Araguaçu',
    },
    {
        estadoid: 'TO',
        value: 'Araguaína',
        label: 'Araguaína',
    },
    {
        estadoid: 'TO',
        value: 'Araguanã',
        label: 'Araguanã',
    },
    {
        estadoid: 'TO',
        value: 'Araguatins',
        label: 'Araguatins',
    },
    {
        estadoid: 'TO',
        value: 'Arapoema',
        label: 'Arapoema',
    },
    {
        estadoid: 'TO',
        value: 'Arraias',
        label: 'Arraias',
    },
    {
        estadoid: 'TO',
        value: 'Augustinópolis',
        label: 'Augustinópolis',
    },
    {
        estadoid: 'TO',
        value: 'Aurora do Tocantins',
        label: 'Aurora do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Axixá do Tocantins',
        label: 'Axixá do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Babaçulândia',
        label: 'Babaçulândia',
    },
    {
        estadoid: 'TO',
        value: 'Bandeirantes do Tocantins',
        label: 'Bandeirantes do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Barra do Ouro',
        label: 'Barra do Ouro',
    },
    {
        estadoid: 'TO',
        value: 'Barrolândia',
        label: 'Barrolândia',
    },
    {
        estadoid: 'TO',
        value: 'Bernardo Sayão',
        label: 'Bernardo Sayão',
    },
    {
        estadoid: 'TO',
        value: 'Bom Jesus do Tocantins',
        label: 'Bom Jesus do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Brasilândia do Tocantins',
        label: 'Brasilândia do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Brejinho de Nazaré',
        label: 'Brejinho de Nazaré',
    },
    {
        estadoid: 'TO',
        value: 'Buriti do Tocantins',
        label: 'Buriti do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Cachoeirinha',
        label: 'Cachoeirinha',
    },
    {
        estadoid: 'TO',
        value: 'Campos Lindos',
        label: 'Campos Lindos',
    },
    {
        estadoid: 'TO',
        value: 'Cariri do Tocantins',
        label: 'Cariri do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Carmolândia',
        label: 'Carmolândia',
    },
    {
        estadoid: 'TO',
        value: 'Carrasco Bonito',
        label: 'Carrasco Bonito',
    },
    {
        estadoid: 'TO',
        value: 'Caseara',
        label: 'Caseara',
    },
    {
        estadoid: 'TO',
        value: 'Centenário',
        label: 'Centenário',
    },
    {
        estadoid: 'TO',
        value: 'Chapada da Natividade',
        label: 'Chapada da Natividade',
    },
    {
        estadoid: 'TO',
        value: 'Chapada de Areia',
        label: 'Chapada de Areia',
    },
    {
        estadoid: 'TO',
        value: 'Colinas do Tocantins',
        label: 'Colinas do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Colméia',
        label: 'Colméia',
    },
    {
        estadoid: 'TO',
        value: 'Combinado',
        label: 'Combinado',
    },
    {
        estadoid: 'TO',
        value: 'Conceição do Tocantins',
        label: 'Conceição do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Couto de Magalhães',
        label: 'Couto de Magalhães',
    },
    {
        estadoid: 'TO',
        value: 'Cristalândia',
        label: 'Cristalândia',
    },
    {
        estadoid: 'TO',
        value: 'Crixás do Tocantins',
        label: 'Crixás do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Darcinópolis',
        label: 'Darcinópolis',
    },
    {
        estadoid: 'TO',
        value: 'Dianópolis',
        label: 'Dianópolis',
    },
    {
        estadoid: 'TO',
        value: 'Divinópolis do Tocantins',
        label: 'Divinópolis do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Dois Irmãos do Tocantins',
        label: 'Dois Irmãos do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Dueré',
        label: 'Dueré',
    },
    {
        estadoid: 'TO',
        value: 'Esperantina',
        label: 'Esperantina',
    },
    {
        estadoid: 'TO',
        value: 'Fátima',
        label: 'Fátima',
    },
    {
        estadoid: 'TO',
        value: 'Figueirópolis',
        label: 'Figueirópolis',
    },
    {
        estadoid: 'TO',
        value: 'Filadélfia',
        label: 'Filadélfia',
    },
    {
        estadoid: 'TO',
        value: 'Formoso do Araguaia',
        label: 'Formoso do Araguaia',
    },
    {
        estadoid: 'TO',
        value: 'Fortaleza do Tabocão',
        label: 'Fortaleza do Tabocão',
    },
    {
        estadoid: 'TO',
        value: 'Goianorte',
        label: 'Goianorte',
    },
    {
        estadoid: 'TO',
        value: 'Goiatins',
        label: 'Goiatins',
    },
    {
        estadoid: 'TO',
        value: 'Guaraí',
        label: 'Guaraí',
    },
    {
        estadoid: 'TO',
        value: 'Gurupi',
        label: 'Gurupi',
    },
    {
        estadoid: 'TO',
        value: 'Ipueiras',
        label: 'Ipueiras',
    },
    {
        estadoid: 'TO',
        value: 'Itacajá',
        label: 'Itacajá',
    },
    {
        estadoid: 'TO',
        value: 'Itaguatins',
        label: 'Itaguatins',
    },
    {
        estadoid: 'TO',
        value: 'Itapiratins',
        label: 'Itapiratins',
    },
    {
        estadoid: 'TO',
        value: 'Itaporã do Tocantins',
        label: 'Itaporã do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Jaú do Tocantins',
        label: 'Jaú do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Juarina',
        label: 'Juarina',
    },
    {
        estadoid: 'TO',
        value: 'Lagoa da Confusão',
        label: 'Lagoa da Confusão',
    },
    {
        estadoid: 'TO',
        value: 'Lagoa do Tocantins',
        label: 'Lagoa do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Lajeado',
        label: 'Lajeado',
    },
    {
        estadoid: 'TO',
        value: 'Lavandeira',
        label: 'Lavandeira',
    },
    {
        estadoid: 'TO',
        value: 'Lizarda',
        label: 'Lizarda',
    },
    {
        estadoid: 'TO',
        value: 'Luzinópolis',
        label: 'Luzinópolis',
    },
    {
        estadoid: 'TO',
        value: 'Marianópolis do Tocantins',
        label: 'Marianópolis do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Mateiros',
        label: 'Mateiros',
    },
    {
        estadoid: 'TO',
        value: 'Maurilândia do Tocantins',
        label: 'Maurilândia do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Miracema do Tocantins',
        label: 'Miracema do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Miranorte',
        label: 'Miranorte',
    },
    {
        estadoid: 'TO',
        value: 'Monte do Carmo',
        label: 'Monte do Carmo',
    },
    {
        estadoid: 'TO',
        value: 'Monte Santo do Tocantins',
        label: 'Monte Santo do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Muricilândia',
        label: 'Muricilândia',
    },
    {
        estadoid: 'TO',
        value: 'Natividade',
        label: 'Natividade',
    },
    {
        estadoid: 'TO',
        value: 'Nazaré',
        label: 'Nazaré',
    },
    {
        estadoid: 'TO',
        value: 'Nova Olinda',
        label: 'Nova Olinda',
    },
    {
        estadoid: 'TO',
        value: 'Nova Rosalândia',
        label: 'Nova Rosalândia',
    },
    {
        estadoid: 'TO',
        value: 'Novo Acordo',
        label: 'Novo Acordo',
    },
    {
        estadoid: 'TO',
        value: 'Novo Alegre',
        label: 'Novo Alegre',
    },
    {
        estadoid: 'TO',
        value: 'Novo Jardim',
        label: 'Novo Jardim',
    },
    {
        estadoid: 'TO',
        value: 'Oliveira de Fátima',
        label: 'Oliveira de Fátima',
    },
    {
        estadoid: 'TO',
        label: 'Palmas',
        value: 'Palmas',
    },
    {
        estadoid: 'TO',
        value: 'Palmeirante',
        label: 'Palmeirante',
    },
    {
        estadoid: 'TO',
        value: 'Palmeiras do Tocantins',
        label: 'Palmeiras do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Palmeirópolis',
        label: 'Palmeirópolis',
    },
    {
        estadoid: 'TO',
        value: 'Paraíso do Tocantins',
        label: 'Paraíso do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Paranã',
        label: 'Paranã',
    },
    {
        estadoid: 'TO',
        value: 'Pau d\'Arco',
        label: 'Pau d\'Arco',
    },
    {
        estadoid: 'TO',
        value: 'Pedro Afonso',
        label: 'Pedro Afonso',
    },
    {
        estadoid: 'TO',
        value: 'Peixe',
        label: 'Peixe',
    },
    {
        estadoid: 'TO',
        value: 'Pequizeiro',
        label: 'Pequizeiro',
    },
    {
        estadoid: 'TO',
        value: 'Pindorama do Tocantins',
        label: 'Pindorama do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Piraquê',
        label: 'Piraquê',
    },
    {
        estadoid: 'TO',
        value: 'Pium',
        label: 'Pium',
    },
    {
        estadoid: 'TO',
        value: 'Ponte Alta do Bom Jesus',
        label: 'Ponte Alta do Bom Jesus',
    },
    {
        estadoid: 'TO',
        value: 'Ponte Alta do Tocantins',
        label: 'Ponte Alta do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Porto Alegre do Tocantins',
        label: 'Porto Alegre do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Porto Nacional',
        label: 'Porto Nacional',
    },
    {
        estadoid: 'TO',
        value: 'Praia Norte',
        label: 'Praia Norte',
    },
    {
        estadoid: 'TO',
        value: 'Presidente Kennedy',
        label: 'Presidente Kennedy',
    },
    {
        estadoid: 'TO',
        value: 'Pugmil',
        label: 'Pugmil',
    },
    {
        estadoid: 'TO',
        value: 'Recursolândia',
        label: 'Recursolândia',
    },
    {
        estadoid: 'TO',
        value: 'Riachinho',
        label: 'Riachinho',
    },
    {
        estadoid: 'TO',
        value: 'Rio da Conceição',
        label: 'Rio da Conceição',
    },
    {
        estadoid: 'TO',
        value: 'Rio dos Bois',
        label: 'Rio dos Bois',
    },
    {
        estadoid: 'TO',
        value: 'Rio Sono',
        label: 'Rio Sono',
    },
    {
        estadoid: 'TO',
        value: 'Sampaio',
        label: 'Sampaio',
    },
    {
        estadoid: 'TO',
        value: 'Sandolândia',
        label: 'Sandolândia',
    },
    {
        estadoid: 'TO',
        value: 'Santa Fé do Araguaia',
        label: 'Santa Fé do Araguaia',
    },
    {
        estadoid: 'TO',
        value: 'Santa Maria do Tocantins',
        label: 'Santa Maria do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Santa Rita do Tocantins',
        label: 'Santa Rita do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Santa Rosa do Tocantins',
        label: 'Santa Rosa do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Santa Tereza do Tocantins',
        label: 'Santa Tereza do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Santa Terezinha Tocantins',
        label: 'Santa Terezinha Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'São Bento do Tocantins',
        label: 'São Bento do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'São Félix do Tocantins',
        label: 'São Félix do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'São Miguel do Tocantins',
        label: 'São Miguel do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'São Salvador do Tocantins',
        label: 'São Salvador do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'São Sebastião do Tocantins',
        label: 'São Sebastião do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'São Valério da Natividade',
        label: 'São Valério da Natividade',
    },
    {
        estadoid: 'TO',
        value: 'Silvanópolis',
        label: 'Silvanópolis',
    },
    {
        estadoid: 'TO',
        value: 'Sítio Novo do Tocantins',
        label: 'Sítio Novo do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Sucupira',
        label: 'Sucupira',
    },
    {
        estadoid: 'TO',
        value: 'Taguatinga',
        label: 'Taguatinga',
    },
    {
        estadoid: 'TO',
        value: 'Taipas do Tocantins',
        label: 'Taipas do Tocantins',
    },
    {
        estadoid: 'TO',
        value: 'Talismã',
        label: 'Talismã',
    },
    {
        estadoid: 'TO',
        value: 'Tocantínia',
        label: 'Tocantínia',
    },
    {
        estadoid: 'TO',
        value: 'Tocantinópolis',
        label: 'Tocantinópolis',
    },
    {
        estadoid: 'TO',
        value: 'Tupirama',
        label: 'Tupirama',
    },
    {
        estadoid: 'TO',
        value: 'Tupiratins',
        label: 'Tupiratins',
    },
    {
        estadoid: 'TO',
        value: 'Wanderlândia',
        label: 'Wanderlândia',
    },
    {
        estadoid: 'TO',
        value: 'Xambioá',
        label: 'Xambioá',
    },
]

export default cities
