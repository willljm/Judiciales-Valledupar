export interface Category {
  id: string;
  name: string;
  subcategories: string[];
  color: string;
}

export const categories: Category[] = [
  {
    id: 'Judiciales',
    name: 'Judiciales',
    color: 'red',
    subcategories: [
      'Tribunales',
      'Justicia',
      'Derechos Humanos',
      'Pol tica',
      'Corrupcion',
      'Crimen Organizado'
    ]
  },
  {
    id: 'Regionales',
    name: 'Regionales',
    color: 'green',

    subcategories: [
      'Valledupar',
      'San Juan del Cesar',
      'La Paz',
      'Manaure',
      'Riohacha',
      'Urumita'
    ]
  },
  {
    id: 'Valledupar',
    name: 'Valledupar',
    color: 'blue',
    subcategories: ['Alcaldia', 'Concejo', 'Educacion', 'Salud', 'Turismo']
  },
  {
    id: 'Comunidad',
    name: 'Comunidad',
    color: 'gray',
subcategories: ['Comunidad Local', 'Eventos Comunitarios', 'Servicios Sociales', 'Desarrollo Comunitario', 'Participación Ciudadana']  },
  {
    id: 'Nacionales',
    name: 'Nacionales',
    color: 'purple',
subcategories: ['Política Nacional', 'Economía Nacional', 'Educación Nacional', 'Salud Nacional', 'Cultura Nacional, Deportes'] 
  },
  {
    id: 'Internacionales',
    name: 'Internacionales',
    color: 'pink',
subcategories: ['Política Internacional', 'Economía Global', 'Cultura Mundial', 'Noticias Internacionales', 'Tecnología Global']  },
  {
    id: 'Farandula',
    name: 'Farandula',
    color: 'orange',
    subcategories: ['Celebridades', 'Entretenimiento', 'Música', 'Cine', 'Televisión']
  },
  {
    id: 'Cesar',
    name: 'Cesar',
    color: 'yellow',
    subcategories: ['Aguachica', 'Gonzalez', 'Chimichagua', 'Curumani', 'El Copey']
  },

];