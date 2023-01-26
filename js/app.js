const simpleCarGame = {
    name: "Simple car game",
    description: 'A simple car game made with canvas', 
    version : '1.0.0', 
    license: undefined,
    author: 'Ángeles Figueredo',
    ctx: undefined,
    
    init(){
        this.setContext()
    },
    setContext(){
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
        console.log('holi')
        
    }
}