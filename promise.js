class Promise{
    constructor(executor){
        this.status = 'pendding'
        this.value=undefined
        this.reason = undefined

        let resolve = (data) =>{
            if(this.status === 'pendding'){
                this.status = 'resolve'
                this.value = data
            }
        }

        let reject = (data) =>{
            if(this.status === 'pendding'){
                this.status = 'reject'
                this.reason  = data
            }
        }

        try{
            executor(resolve,reject)
        }catch (e) {
            reject(e)
        }
    }
}

console.log(Promise)
console.log()
