
import victorHugo from '../helpers/assets/victorHugo.png'
import lewis from '../helpers/assets/lewis.png'
import cortazar from '../helpers/assets/cortazar.png'
import HP from '../helpers/assets/HP.png'
import Raymond from '../helpers/assets/Raymond.png'
import vaclav from '../helpers/assets/vaclav.png'
import Coelho  from '../helpers/assets/Coelho.png'
import Navarro from '../helpers/assets/Navarro.png'

 const productos = [
    { id:'1', img: victorHugo, nombre: 'Los Miserables', autor: 'Victor Hugo', descripcion: '“Los miserables”, extensa novela que a través de la vida de un presidiario fugitivo llamado Jean Valjean revela las opresivas condiciones sociales del pueblo francés en el siglo XIX, fue un gran éxito en su época y permanece como un clásico de interés universal hasta hoy, no sólo como pieza literaria, sino en sus numerosas adaptaciones teatrales y cinematográficas. Obra central del romanticismo, fue el trabajo más importante de Víctor Hugo, el reverenciado escritor francés que captó el alma de París y de su época como ningún otro.', stock: 22, precio: 1589, categoria:'Nuevo'},
    { id: '2', img: lewis, nombre: 'Cartas del diablo a su sobrino', autor: 'C.S.Lewis', descripcion: 'Está compuesto por treinta y una cartas supuestamente escritas por el anciano diablo Escrutopo, un demonio malvado y voraz, a su sobrino Orugario, un demonio principiante. En medio de esta trama, que es una apología cristiana, el autor desarrolla con maestría una sátira donde imagina el infierno del siglo XX como una burocracia eficiente y orgullosa, que se organiza para hacer el mal «lo mejor posible».', stock: 20, precio: 3352, categoria:'Nuevo'},
    { id: '3', img:cortazar, nombre: 'Rayuela', autor: 'Julio Cortazar', descripcion: 'La historia se desarrolla en París (Francia), donde Horacio Oliveira, el protagonista, vaga por los puentes de la ciudad en busca de su amante, una mujer uruguaya de nombre Lucía (más conocida a lo largo de la novela como la Maga).', stock: 30, precio: 1449, categoria:'Usado'},
    { id: '4', img: HP, nombre: 'Saga Completa Harry Potter', autor: 'J.K.Rowling', descripcion: ' Libros sobre las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería. El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien mató a los padres de Harry en su afán de conquistar el mundo mágico.', stock: 10, precio: 16499, categoria:'Nuevo'},
    { id: '5', img: Raymond, nombre: 'Incienso Quemado', autor: 'M. Raymond', descripcion: 'En Incienso quemado Raymond traslada la acción de Europa a los Estados Unidos, narrando las vicisitudes en torno a la fundación de la Abadía de Gethsemaní, a la que describe como «una encrucijada que Dios ha colocado tras las colinas de Kentucky desde mediados del siglo XIX, que, a través de cientos de años, ha ido atrayendo a incautos, tendiéndoles un lazo para después cegarlos con su belleza, inflamarlos con su amor y llenarlos con su paz».', stock: 20, precio: 5564, categoria:'Usado'},
    { id: '6', img: vaclav, nombre: 'Los Números No Mienten', autor: 'Smil, Vaclav.', descripcion: 'Un maestro de los datos y las estadísticas ofrece una visión del mundo tan sorprendente como iluminadora. ¿Es peligroso volar? ¿Qué es peor para el medioambiente, un coche o un móvil? ¿Cuánto pesan todas las vacas del mundo juntos y por qué ese dato importa? ¿Se puede medir la felicidad? La misión de Vaclav Smil es convencernos de que los hechos importan.', stock: 30, precio: 5489,categoria:'Usado'},
    { id: '7', img: Coelho, nombre: 'El Peregrino De Compostela', autor: 'Paulo Coelho', descripcion: 'El Peregrino de Compostela es fruto de la experiencia vivida durante su peregrinaje por el Camino de Santiago (en el Norte de España) en 1986. En esta primera novela, el escritor brasileño muestra su lado más humano: sus miedos, sus demonios internos, su aprendizaje y es a través de la construcción literaria de varias parábolas que motiva al lector, no sólo a recorrer su propio camino sino a luchar por darle un sentido a su vida para realizar así su leyenda personal.', stock: 35, precio: 2160, categoria:'Nuevo'},
    { id: '8', img: Navarro, nombre: 'Dispara Yo Ya Estoy Muerto', autor: 'Julia Navarro', descripcion: 'Hay momentos en la vida en los que la única manera de salvarse a uno mismo es muriendo o matando. A finales del siglo XIX, durante la última etapa zarista, los Zucker, perseguidos por su condición de judíos, tienen que abandonar Rusia huyendo del horror y la sinrazón. A su llegada a la Tierra Prometida, Samuel Zucker adquiere las tierras de los Ziad, una familia árabe encabezada por Ahmed. Entre él y Samuel nace un fuerte vínculo, una sólida amistad que, por encima de las diferencias religiosas y políticas, se mantiene generación tras generación. Con las amenazas, la sed de venganza y muchas pasiones desatadas como telón de fondo, las vidas entrecruzadas de los Zucker y los Ziad conforman un mosaico de traiciones y sufrimientos, de amores posibles e imposibles, al tiempo que plasman la gran aventura de vivir y convivir en un territorio marcado por la intolerancia.', stock: 12, precio: 2799,categoria:'Usado'},
  ]



export const getProd= new Promise ((resolve, reject)=>{
   
    let condicion= true
    if(condicion){
        setTimeout(() => {
            resolve(productos);
          }, 2000);
    }
    else{
        reject('error')
    }
})





