//decorators


function apiVersion(version: string){
    return (target: any) =>{
        Object.assign(target.prototype, {__version: version})
    }
}


//Attribute decorator
function minLength(length:number){
    return(target:any, key:string) =>{
       let _value = target[key]

       const getter = ()=>"[Play]" + _value
       const setter = (value:String)=>{
        if (value.length < length){
            throw new Error(`Tamanho menor que ${length}`)
        }else{
            _value = value
        }
       };

       Object.defineProperty(target, key, {
            get: getter,
            set:setter
       });
        
    };
};
class Api{
    @minLength(3)
    name:String

    constructor(name:String){
        this.name = name
    };
};


const api = new Api("Products")
console.log(api.name)


