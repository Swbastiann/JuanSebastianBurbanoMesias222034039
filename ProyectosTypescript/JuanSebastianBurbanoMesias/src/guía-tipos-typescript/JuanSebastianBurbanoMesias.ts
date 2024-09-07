interface tipoVehiculo{
    tipo:string,
    marca:string,
    modelo:string,
    cilindraje:number,
    numPuertas:number,
    arrancarVehiculo:() => void,
    cEspeciales: caracteristicasEspeciales[]
}
interface caracteristicasEspeciales{
    velocidad:number,
    suspension:boolean,
    agregarSuspension:() => void
}
interface testArray{
    modelos:number[],
    caracteristicasArray:Array<string[]>
}


const miVehiculo:tipoVehiculo={
    tipo:'Convertible',
    marca: 'Ford',
    modelo: 'Mustang',
    cilindraje: 2000,
    numPuertas: 2,
    arrancarVehiculo(){
        console.log('el vehiculo '+this.modelo+' arrancó con un motor de '+this.cilindraje+' cc');
    },
    cEspeciales:[] 
    
}


const miSegundoVehiculo:caracteristicasEspeciales={
    velocidad:267,
    suspension:false,
    agregarSuspension(){
        if (this.suspension){
            return 'Tu vehiculo tiene suspension.'
        }else{
            return 'Tu vehiculo no tiene suspension.'
        }
    }
}


const miTercerVehiculo:testArray = {
    modelos:[2013,1970,2002,2020,1994],
    caracteristicasArray:[
            ['azul','verde'],
            ['Rin 15','Rin 17'],
            ['2 puertas','4 puertas']
    ]
}

console.log('Mi primer vehiculo:')
console.table({miVehiculo});
miVehiculo.arrancarVehiculo();

console.log('\nMi segundo vehiculo:');
const suspension = miSegundoVehiculo.agregarSuspension();
console.log(suspension);
console.table({miSegundoVehiculo});

console.log('\nMi tercer vehiculo:');
console.table({miTercerVehiculo});
console.log(miTercerVehiculo.caracteristicasArray[0][0]);
console.log(miTercerVehiculo.caracteristicasArray[2][1]);
console.log('\n')
let index=0;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=>{
    console.log(caracteristica[index]);
});
console.log('\n')
let index2=1;


miTercerVehiculo.caracteristicasArray.forEach((caracteristica)=>{
    console.log(caracteristica[index2]);
});