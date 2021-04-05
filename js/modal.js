const animal={
    voice='lppppp[',
    getVoice(){
        console.log(this.voice)
    }
}
const cat=Object.create(animal);
cat.voice='my';
console.log(cat.voice);